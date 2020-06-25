---
title: 大数据实战 Spark 分析流量日志
categories:
  - [大数据,实战]
tags: [大数据,实战,流计算,日志分析,Spark,Streaming,Java]

---

本文是关于大数据通过Java进行Spark编程实现日志处理分析。



<!-- more -->



## 一、实验环境：

- 虚拟机数量：1
- 系统版本：Centos 7.5
- Spark版本：Apache Spark 2.1.1
- Eclipse版本：Neno.3 （4.6.3）

## 二、实验目的：

掌握

- Spark原理
- Hadoop原理
- Shell
- Spark Streaming
- 二次排序
- 序列化
- Spark RDD

## 三、实验结果：

- 以下是分析后的流量日志结果：

  <img src="https://gitee.com/wxy_666/images/raw/master/20200603142941.png" alt="7b6022296ee8fef49cd725321a76c1da" style="zoom:80%;" />

## 四、实验内容：

- 使用SparkStreaming构建实时数据处理系统，来分析手机流量日志。

## 五、主要步骤：

- 日志分析
- 代码实现
- 运行程序

## 六、实验步骤：

### 6.1数据日志介绍

6.1.1数据字段

6.1.1.1reportTime（报告时间戳）

6.1.1.2telNum（手机号）

6.1.1.3upwardflow（上行总流量）

6.1.1.4downwardflow（下行总流量）

### 6.2需求分析

6.2.1对文本中数据记录进行排序，排序规则如下：

以telNum为基准，分别按照 upwardflow，downwardflow，reportTime进行降序排序，即先按照upwardflow排序，如果upwardflow相同，再比较downwardflow，如果downwardflow相同，再比较reportTime，最后选择前10条记录输出。

6.2.2具体实现步骤：

6.2.2.1按照 Serrializable 接口实现自定义排序的 Key

6.2.2.2将要进行二次排序的文件加载进来生成 key-value 类型的 RDD

6.2.2.3使用 sortByKey 基于自定义的 Key 进行二次排序

6.2.2.4去除掉排序的 key，只保留排序结果

### 6.3代码实现：

#### 6.3.1创建maven项目

6.3.1.1打开Eclipse IDE

```shell
cd eclipse/
./eclipse &
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143358.jpg" alt="2020-06-03_102818" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143419.jpg" alt="2020-06-03_102840" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143431.jpg" alt="2020-06-03_102917" style="zoom:80%;" />

6.3.1.2点击 File -> New ->Other

6.3.1.3搜索 maven -> 点击 Maven Project -> Next->Next

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143443.jpg" alt="2020-06-03_103021" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143500.jpg" alt="2020-06-03_103035" style="zoom:80%;" />

6.3.1.4选中maven-archetype-quickstart ->Next

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143535.jpg" alt="2020-06-03_103051" style="zoom:80%;" />

6.3.1.5输入Group Id 为 org.zkpk；Artifact Id 为 spark ；Package为org.zkpk.spark；->Finish

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143603.jpg" alt="2020-06-03_103201" style="zoom:80%;" />

6.3.1.6升级maven工程

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143618.jpg" alt="2020-06-03_103247" style="zoom:80%;" />

升级完成：

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143638.jpg" alt="2020-06-03_103513" style="zoom:80%;" />

6.3.1.7更改JRE，右键JRE System Library-> Properties

6.3.1.8选中jdk1.8.0_131-> OK

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143649.jpg" alt="2020-06-03_103535" style="zoom:80%;" />

6.3.1.9点击spark项目->修改pom.xml-> 保存会自动下载jar包

6.3.1.10下载Jar包：

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143734.jpg" alt="2020-06-03_103915" style="zoom:80%;" />

6.3.1.11最终 pom.xml 如下：

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>org.zkpk</groupId>
  <artifactId>spark</artifactId>
  <version>0.0.1</version>
  <packaging>jar</packaging>

  <name>spark</name>
  <url>http://maven.apache.org</url>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.apache.spark</groupId>
      <artifactId>spark-core_2.10</artifactId>
      <version>1.5.0</version>
    </dependency>
    <dependency>
      <groupId>org.apache.spark</groupId>
      <artifactId>spark-sql_2.10</artifactId>
      <version>1.5.0</version>
      </dependency>
    <dependency>
      <groupId>org.apache.spark</groupId>
      <artifactId>spark-hive_2.10</artifactId>
      <version>1.5.0</version>
    </dependency>
    <dependency>
      <groupId>org.apache.spark</groupId>
      <artifactId>spark-streaming_2.10</artifactId>
      <version>1.5.0</version>
    </dependency>
    <dependency>
      <groupId>org.apache.hadoop</groupId>
      <artifactId>hadoop-client</artifactId>
      <version>2.7.3</version>
    </dependency>
    <dependency>
      <groupId>org.apache.spark</groupId>
      <artifactId>spark-streaming-kafka_2.10</artifactId>    
      <version>1.5.0</version>
    </dependency>
    <dependency>
      <groupId>org.apache.spark</groupId>
      <artifactId>spark-streaming-flume_2.10</artifactId>    
      <version>1.5.0</version>
    </dependency>
    <dependency>
      <groupId>org.apache.httpcomponents</groupId>
      <artifactId>httpclient</artifactId>
      <version>4.3.5</version>
    </dependency>
    <dependency>
      <groupId>org.apache.httpcomponents</groupId>
      <artifactId>httpcore</artifactId>
      <version>4.3.1</version>
    </dependency>
  </dependencies>
  <build>
    <sourceDirectory>src/main/java</sourceDirectory>
    <testSourceDirectory>src/main/test</testSourceDirectory>
    <plugins>
      <plugin>
        <artifactId>maven-assembly-plugin</artifactId>
        <configuration>
          <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
          </descriptorRefs>
          <archive>
            <manifest>
              <mainClass></mainClass>
            </manifest>
          </archive>
        </configuration>
        <executions>
          <execution>
            <id>make-assembly</id>
            <phase>package</phase>
            <goals>
              <goal>single</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
      <plugin>
        <groupId>org.codehaus.mojo</groupId>
        <artifactId>exec-maven-plugin</artifactId>
        <version>1.2.1</version>
        <executions>
          <execution>
            <goals>
              <goal>exec</goal>
            </goals>
          </execution>
        </executions>
        <configuration>
          <executable>java</executable>
          <includeProjectDependencies>true</includeProjectDependencies>
          <includePluginDependencies>false</includePluginDependencies>
          <classpathScope>compile</classpathScope>
          <mainClass>cn.com.syl.spark.App</mainClass>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <configuration>
          <source>1.6</source>
          <target>1.6</target>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

6.3.1.12删除工程生成的App.java和AppTest.java

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143746.jpg" alt="2020-06-03_104358" style="zoom:80%;" />

#### 6.3.2编写代码

6.3.2.1在src/main/java中创建类，并命名为SecondarySortKey.java，然后按Finish

6.3.2.1.1创建SecondarySortKey.java，代码见附录

6.3.2.1.2在src/main/java中创建类，并命名为SecondarySortDemo，然后按Finish

6.3.2.1.3创建SecondarySortDemo.java代码见附录

6.3.2.1.4运行SecondarySortDemo，观察控制台输出

6.3.2.1.5右键SecondarySortDemo.java -> Run As -> Java Application

最终结果：

<img src="https://gitee.com/wxy_666/images/raw/master/20200603143924.png" alt="QQ图片20200603110720" style="zoom:67%;" />

## 七、附录

### 1、SecondarySortKey.java

```java
package org.zkpk.spark;
import java.io.Serializable;
import scala.math.Ordered;
class serDemo implements Serializable {
    private static final long serialVersionUID = 5749943279909593929L;
    private long reportTime;        // 时间戳
    private long upwardflow;        // 上行总流量
    private long downwardflow;    // 下行总流量
    public serDemo() {
        super();
        // TODO Auto-generated constructor stub
    }
    public serDemo(long reportTime, long upwardflow, long downwardflow) {
        super();
        this.reportTime = reportTime;
        this.upwardflow = upwardflow;
        this.downwardflow = downwardflow;
    }
    public long getReportTime() {
        return reportTime;
    }
    public void setReportTime(long reportTime) {
        this.reportTime = reportTime;
    }
    public long getUpwardflow() {
        return upwardflow;
    }
    public void setUpwardflow(long upwardflow) {
        this.upwardflow = upwardflow;
    }
    public long getDownwardflow() {
        return downwardflow;
    }
    public void setDownwardflow(long downwardflow) {
        this.downwardflow = downwardflow;
    }
    public static long getSerialversionuid() {
        return serialVersionUID;
    }
}
public class SecondarySortKey implements Ordered<SecondarySortKey>, Serializable {
    private static final long serialVersionUID = 3702442700882342403L;
    private long upwardflow;
    private long downwardflow;
    private long reportTime;
    public SecondarySortKey() {
        super();
        // TODO Auto-generated constructor stub
    }
    public SecondarySortKey(long upwardflow, long downwardflow, long reportTime) {
        super();
        this.upwardflow = upwardflow;
        this.downwardflow = downwardflow;
        this.reportTime = reportTime;
    }
    public long getUpwardflow() {
        return upwardflow;
    }
    public void setUpwardflow(long upwardflow) {
        this.upwardflow = upwardflow;
    }
    public long getDownwardflow() {
        return downwardflow;
    }
    public void setDownwardflow(long downwardflow) {
        this.downwardflow = downwardflow;
    }
    public long getReportTime() {
        return reportTime;
    }
    public void setReportTime(long reportTime) {
        this.reportTime = reportTime;
    }
    public static long getSerialversionuid() {
        return serialVersionUID;
    }
    public boolean $greater(SecondarySortKey other) {
        if(upwardflow > other.upwardflow) {
            return true;
        } else if(upwardflow == other.upwardflow &&
                downwardflow > other.downwardflow) {
            return true;
        } else if(upwardflow == other.upwardflow &&
                downwardflow == other.downwardflow &&
                reportTime > other.reportTime) {
            return true;
        }
        return false;
    }
    public boolean $greater$eq(SecondarySortKey other) {
        if($greater(other)) {
            return true;
        } else if(upwardflow == other.upwardflow &&
                downwardflow == other.downwardflow &&
                reportTime == other.reportTime) {
            return true;
        }
        return false;
    }
    public boolean $less(SecondarySortKey other) {
        if(upwardflow < other.upwardflow) {
            return true;
        } else if(upwardflow == other.upwardflow &&
                downwardflow < other.downwardflow) {
            return true;
        } else if(upwardflow == other.upwardflow &&
                downwardflow == other.downwardflow &&
                reportTime < other.reportTime) {
            return true;
        }
        return false;
    }
    public boolean $less$eq(SecondarySortKey other) {
        if($less(other)) {
            return true;
        } else if(upwardflow == other.upwardflow &&
                downwardflow == other.downwardflow &&
                reportTime == other.reportTime) {
            return true;
        }
        return false;
    }
    public int compare(SecondarySortKey other) {
        if(upwardflow - other.upwardflow != 0) {
            return (int) (upwardflow - other.upwardflow);
        } else if(downwardflow - other.downwardflow != 0) {
            return (int) (downwardflow - other.downwardflow);
        } else if(reportTime - other.reportTime != 0) {
            return (int) (reportTime - other.reportTime);
        }
        return 0;
    }
    public int compareTo(SecondarySortKey other) {
        if(upwardflow - other.upwardflow != 0) {
            return (int) (upwardflow - other.upwardflow);
        } else if(downwardflow - other.downwardflow != 0) {
            return (int) (downwardflow - other.downwardflow);
        } else if(reportTime - other.reportTime != 0) {
            return (int) (reportTime - other.reportTime);
        }
        return 0;
    }
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + (int) (downwardflow );
        result = prime * result + (int) (reportTime );
        result = prime * result + (int) (upwardflow );
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        SecondarySortKey other = (SecondarySortKey) obj;
        if (downwardflow != other.downwardflow)
            return false;
        if (reportTime != other.reportTime)
            return false;
        if (upwardflow != other.upwardflow)
            return false;
        return true;
    }
    @Override
    public String toString() {
        return "SortResult： [上行总流量： " + upwardflow + ", 下行总流量：  " + downwardflow + ", 时间戳："
                + reportTime + "]";
    }
}
```

### 2、SecondarySortDemo.java

```java
package org.zkpk.spark;
import java.util.List;
import org.apache.spark.SparkConf;
import org.apache.spark.api.java.JavaPairRDD;
import org.apache.spark.api.java.JavaRDD;
import org.apache.spark.api.java.JavaSparkContext;
import org.apache.spark.api.java.function.Function2;
import org.apache.spark.api.java.function.PairFunction;
import scala.Tuple2;
public class SecondarySortDemo {
    public static void main(String[] args) throws Exception {
        // 创建sparkcontext对象，sparkcontext是程序的唯一入口
        SparkConf conf = new SparkConf().setAppName("SecondarySortDemo").setMaster("local");
        JavaSparkContext jsc = new JavaSparkContext(conf);
        // 去掉WARN类的输出信息
        jsc.setLogLevel("WARN");
        // 调用textFile()方法，读取日志文件，这里指定本地磁盘文件
        JavaRDD<String> textfile = jsc.textFile("/home/zkpk/experiment/data.log");
        // 调用mapTfRDD2Pair方法 将tf映射为键值对
        JavaPairRDD<String, serDemo> pairRdd = mapTfRDD2Pair(textfile);
        // 获取每个手机号的总上行流量、总下行流量、最早报告时间戳
        JavaPairRDD<String, serDemo> getlines = aggregateByDeviceID(pairRdd);
        // 聚合，封装的RDD作为key,手机号作为值
        JavaPairRDD<SecondarySortKey, String> telval = mapRDDKey2SortKey(getlines);
        // 依次按照上行流量、下行流量以及时间戳倒序排序
        JavaPairRDD<SecondarySortKey, String> sortedRdd = telval.sortByKey(false);
        // 根据您的需要获得输出，这里仅显示前10行
        List<Tuple2<SecondarySortKey, String>> getTop = sortedRdd.take(10);
        System.out.println("============ result ============");
        for (Tuple2<SecondarySortKey, String> dt : getTop) {
            System.out.println("telNum: " + dt._2 + ", " + dt._1);
        }
        // 执行结束关闭资源
        jsc.close();
    }
    // mapTfRDD2Pair方法，封装键值对
    private static JavaPairRDD<String, serDemo> mapTfRDD2Pair(JavaRDD<String> accessLogRDD) {
        return accessLogRDD.mapToPair(new PairFunction<String, String, serDemo>() {
            private static final long serialVersionUID = 1L;
            @Override
            public Tuple2<String, serDemo> call(String lines) throws Exception {
                // 根据数据格式进行切分
                String[] split = lines.split("\t");
                // 获取切分的字段
                long reportTime = Long.valueOf(split[0]);
                String telNum = split[1];
                long upwardflow = Long.valueOf(split[2]);
                long downwardflow = Long.valueOf(split[3]);
                // 创建cmbInfo对象，有参构造 ，将上行流量、下行流量，报告时间戳封装为自定义的可序列化对象
                serDemo dataInfo = new serDemo(reportTime, upwardflow, downwardflow);
                return new Tuple2<String, serDemo>(telNum, dataInfo);
            }
        });
    }
    // 根据手机号进行聚合，依次按照上行流量、下行流量以及报告时间戳倒序排序
    private static JavaPairRDD<String, serDemo> aggregateByDeviceID(JavaPairRDD<String, serDemo> accessLogPairRDD) {
        return accessLogPairRDD.reduceByKey(new Function2<serDemo, serDemo, serDemo>() {
            private static final long serialVersionUID = 1L;
            @Override
            public serDemo call(serDemo d1, serDemo d2) throws Exception {
                long reportTime = d1.getReportTime() < d2.getReportTime() ? d1.getReportTime() : d2.getReportTime();
                long upwardflow = d1.getUpwardflow() + d2.getUpwardflow();
                long downwardflow = d1.getDownwardflow() + d2.getDownwardflow();
                serDemo accessLogInfo = new serDemo();
                accessLogInfo.setReportTime(reportTime);
                accessLogInfo.setUpwardflow(upwardflow);
                accessLogInfo.setDownwardflow(downwardflow);
                return accessLogInfo;
            }
        });
    }
    // 二次排序，手机号作为值
    private static JavaPairRDD<SecondarySortKey, String> mapRDDKey2SortKey(
            JavaPairRDD<String, serDemo> aggrAccessLogPairRDD) {
        return aggrAccessLogPairRDD.mapToPair(
                new PairFunction<Tuple2<String, serDemo>, SecondarySortKey, String>() {
                    private static final long serialVersionUID = 1L;
                    @Override
                    public Tuple2<SecondarySortKey, String> call(Tuple2<String, serDemo> tuple) throws Exception {
                        // 获取元祖里的数据
                        String telNum = tuple._1;
                        serDemo accessLogInfo = tuple._2;
                        // 封装为二次排序key
                        SecondarySortKey accessLogSortKey = new SecondarySortKey(accessLogInfo.getUpwardflow(),
                                accessLogInfo.getDownwardflow(), accessLogInfo.getReportTime());
                        // 返回新的Tuple
                        return new Tuple2<SecondarySortKey, String>(accessLogSortKey, telNum);
                    }
                });
    }
}
```


