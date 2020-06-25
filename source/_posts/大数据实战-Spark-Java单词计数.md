---
title: 大数据实战 Spark Java单词计数
categories:
  - [大数据,实战]
tags: [大数据,实战,单词计数,Spark,Java,Scala]
---

本文是关于大数据通过Spark实现Java单词计数。



<!-- more -->



## 一、实验环境：

- 虚拟机数量：1
- 系统版本：Centos 7.5
- Spark版本：Apache Spark 2.1.1
- JDK版本： jdk-8u131-linux-x64
- IDEA版本：ideaIC-2017.2.7

## 二、实验内容：

- 创建spark项目
- 使用Java API 编写wordcount
- 打印结果

## 三、实验步骤：

### 3.1新建数据源

3.1.1在/home/zkpk目录下创建worddata.txt文件

```shell
cd
vim worddata.txt
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200423203009.jpg" alt="2020-04-23_184840" style="zoom:80%;" />

3.1.2输入以下内容作为JavaWordCount程序的源数据

```
hello hi hi spark
hello spark hello hi sparksql
hello hi hi sparkstreaming
hello hi sparkgraphx
hello hello world
hello java c python
hello scala go html
hi hi hello spark hdfs
hello hadoop
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200423211155.jpg" alt="2020-04-23_184956" style="zoom:80%;" />

3.1.3打开IDEA，创建Java任务

```shell
cd
cd idea-IC-172.4574.19/
bin/idea.sh &
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200423211241.jpg" alt="2020-04-23_185042" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200423211258.jpg" alt="2020-04-23_185058" style="zoom:80%;" />

### 3.2创建Spark Maven工程，使用Java API 编写wordcount

3.2.1点击 Create New Project

3.2.2进入如下图界面，按照图标依次点击，最后点击next

<img src="https://gitee.com/wxy_666/images/raw/master/20200423211601.jpg" alt="2020-04-23_185224" style="zoom:80%;" />

3.2.3依次输入GroupId和ArtifactId和Version的值，随后点击next

<img src="https://gitee.com/wxy_666/images/raw/master/20200423211619.jpg" alt="2020-04-23_185405" style="zoom:80%;" />

3.2.4进入如下界面，设置本地Maven项目的setting.xml文件和warehouse仓库，点击next按钮

3.2.4.1本地setting.xml文件在/home/zkpk/apache-maven-3.5.0/conf目录下

3.2.4.2本地仓库文件夹warehouse在/home/zkpk/apache-maven-3.5.0/warehouse

<img src="https://gitee.com/wxy_666/images/raw/master/20200423211646.jpg" alt="2020-04-23_185452" style="zoom:80%;" />

3.2.5进入如下界面，输入工程名称spark_test，然后点击next，OK

<img src="https://gitee.com/wxy_666/images/raw/master/20200423211749.jpg" alt="2020-04-23_185533" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200423211810.jpg" alt="2020-04-23_185546" style="zoom:80%;" />

3.2.6工程创建完成后会自动打开一个名为zkpk的xml文件，按照以下修改：

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.zkpk.lab</groupId>
  <artifactId>zkpk</artifactId>
  <version>1.0</version>
  <inceptionYear>2008</inceptionYear>
  <properties>
    <scala.version>2.11.11</scala.version>
    <spark.version>2.1.1</spark.version>
  </properties>

  <repositories>
    <repository>
      <id>scala-tools.org</id>
      <name>Scala-Tools Maven2 Repository</name>
      <url>http://scala-tools.org/repo-releases</url>
    </repository>
  </repositories>

  <pluginRepositories>
    <pluginRepository>
      <id>scala-tools.org</id>
      <name>Scala-Tools Maven2 Repository</name>
      <url>http://scala-tools.org/repo-releases</url>
    </pluginRepository>
  </pluginRepositories>

  <dependencies>
    <dependency>
      <groupId>org.scala-lang</groupId>
      <artifactId>scala-library</artifactId>
      <version>${scala.version}</version>
    </dependency>
    <dependency>
      <groupId>org.apache.spark</groupId>
      <artifactId>spark-core_2.11</artifactId>
      <version>${spark.version}</version>
    </dependency>
    <dependency>
      <groupId>org.apache.spark</groupId>
      <artifactId>spark-sql_2.11</artifactId>
      <version>${spark.version}</version>
    </dependency>
  </dependencies>

  <build>
    <sourceDirectory>src/main/scala</sourceDirectory>
    <testSourceDirectory>src/test/scala</testSourceDirectory>
    <plugins>
      <plugin>
        <groupId>org.scala-tools</groupId>
        <artifactId>maven-scala-plugin</artifactId>
        <executions>
          <execution>
            <goals>
              <goal>compile</goal>
              <goal>testCompile</goal>
            </goals>
          </execution>
        </executions>
        <configuration>
          <scalaVersion>${scala.version}</scalaVersion>
          <args>
            <arg>-target:jvm-1.5</arg>
          </args>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-eclipse-plugin</artifactId>
        <configuration>
          <downloadSources>true</downloadSources>
          <buildcommands>
            <buildcommand>ch.epfl.lamp.sdt.core.scalabuilder</buildcommand>
          </buildcommands>
          <additionalProjectnatures>
            <projectnature>ch.epfl.lamp.sdt.core.scalanature</projectnature>
          </additionalProjectnatures>
          <classpathContainers>
            <classpathContainer>org.eclipse.jdt.launching.JRE_CONTAINER</classpathContainer>
            <classpathContainer>ch.epfl.lamp.sdt.launching.SCALA_CONTAINER</classpathContainer>
          </classpathContainers>
        </configuration>
      </plugin>
    </plugins>
  </build>
  <reporting>
    <plugins>
      <plugin>
        <groupId>org.scala-tools</groupId>
        <artifactId>maven-scala-plugin</artifactId>
        <configuration>
          <scalaVersion>${scala.version}</scalaVersion>
        </configuration>
      </plugin>
    </plugins>
  </reporting>
</project>
```

3.2.7保存修改的pom.xml文件后，点击工程名，依次选择Maven——>Reimport，即可根据pom.xml文件导入依赖包，出现下图就代表正在导入依赖包

![2020-04-23_190350](https://gitee.com/wxy_666/images/raw/master/20200423212207.jpg)

3.2.8设置语言环境language level，点击菜单栏中的file，选择Project Structure，弹出如下对话框，选择Modules，选择Language level为8，然后点击Apply，点击OK

<img src="https://gitee.com/wxy_666/images/raw/master/20200423212331.jpg" alt="2020-04-23_190537" style="zoom:80%;" />

3.2.9设置Java Compiler环境，点击菜单栏中的file，选择Setting，弹出如下对话框，依次选择Build，Execution——>Compiler——>Java Compiler，设置图中的Project bytecode version为1.8，设置图中的Target bytecode version为1.8，然后依次点击Apply和OK

<img src="https://gitee.com/wxy_666/images/raw/master/20200423212433.jpg" alt="2020-04-23_190657" style="zoom:80%;" />

至此，Spark Maven工程创建完毕

3.2.10在main文件夹下新建文件夹，在弹出的对话框中，输入新文件夹名称为java，点击ok

<img src="https://gitee.com/wxy_666/images/raw/master/20200423212556.jpg" alt="2020-04-23_190754" style="zoom:80%;" />

3.2.11右击先创建的java目录，依次选择Mark Directory as—>Sources Root，此时就可以在java目录中创建类了，我们右键点击java目录，依次选择New——>Java——>Class，弹出对话框，输入Java Class的名字：JavaWordCount，然后点击ok

<img src="https://gitee.com/wxy_666/images/raw/master/20200423212726.jpg" alt="2020-04-23_190850" style="zoom:80%;" />

3.2.12编写如下Java代码，实现词频统计，我在原有的参考答案上又新增了可以根据次品的大小，从大到小排序展示的功能，下面是代码截图，具体代码在本文的附录中

<img src="https://gitee.com/wxy_666/images/raw/master/20200423213015.jpg" alt="2020-04-23_192501" style="zoom:80%;" />

### 3.3运行程序，查看结果

选中程序JavaWordCount，在代码界面点击鼠标右键，出现如下提示框，选择并点击Run JavaWordCount.main()，运行程序，并在终端界面查看程序输出结果

<img src="https://gitee.com/wxy_666/images/raw/master/20200423213208.png" alt="2020-04-23_192611" style="zoom:80%;" />



## 四、附录

### 1、JavaWordCount.java

```java
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.sql.SparkSession;
import scala.Tuple2;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

public final class JavaWordCount {

    private static final Pattern SPACE = Pattern.compile(" ");

    public static void main(String[] args) throws Exception{

        SparkSession ss = SparkSession
                .builder()
                .master("local")
                .appName("JavaWordCount")
                .getOrCreate();

        JavaRDD<String> lines =
                ss.read().textFile("file:///home/zkpk/worddata.txt").javaRDD();

        JavaRDD<String> words =
                lines.flatMap(s -> Arrays.asList(SPACE.split(s)).iterator());

        JavaPairRDD<String, Integer> wordAndOne =
                words.mapToPair(s -> new Tuple2<>(s, 1));

        JavaPairRDD<String, Integer> wordAndNum =
                wordAndOne.reduceByKey((i1, i2) -> i1 + i2);

        //自己额外实现了可以根据词频的大小，从大到小排序展示的功能
        List<Tuple2<String, Integer>> result = wordAndNum
                //先将key和value交换
                .mapToPair((row) ->  new Tuple2<>(row._2,row._1))
                //按照交换后的key也就是词频倒排序
                .sortByKey(false)
                //再将key和value交换回来，回到单词在前，词频在后的状态
                .mapToPair((row) ->  new Tuple2<>(row._2,row._1))
                .collect();

        for (Tuple2<?,?> tuple : result){
            System.out.println(tuple._1() + ": " + tuple._2());
        }

        ss.stop();
    }
}
```

### 2、ScalaWordCount.scala

```scala
package org.zkpk.lab

import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}

class ScalaWordCount {

}
object ScalaWordCount{
  def main(args: Array[String]): Unit = {
    val list = List("hello hi hi spark ",
      "hello spark hello hi sparksql ",
      "hello hi hi sparkstreaming ",
      "hello hi sparkgraphx")
    val sparkConf = new SparkConf().setAppName("word-count").setMaster("local[*]")
    val sc = new SparkContext(sparkConf)
    val lines: RDD[String] = sc.parallelize(list)
    val words: RDD[String] =
        lines.flatMap((line: String) => {line.split(" ")})
    val wordAndOne: RDD[(String, Int)] =
        words.map((word: String) => {(word, 1)})
    val wordAndNum: RDD[(String, Int)] =
      wordAndOne.reduceByKey((count1: Int, count2: Int) => {count1+ count2})
    val ret = wordAndNum.sortBy(kv => kv._2, false)
    println(ret.collect().mkString(","))
    ret.saveAsTextFile(args(0))
    sc.stop()
  }
}
```

