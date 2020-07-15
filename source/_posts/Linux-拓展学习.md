---
title:  Linux 拓展学习
categories:
  - [Linux,拓展学习]
tags: [Linux,拓展,难点,C,Shell]
---

简单的写了一些Linux的课外拓展学习的相关知识和问题。



<!-- more -->



## 一、命令的参数

编写一个小程序，可以显示命令的选项和参数

```c
#include <stdio.h>

int main(int argc, char const *argv[])
{
    int i;
    for (i = 0; i < argc; i++)
    {
        printf("%d:%p [%s]\n", i, argv[i], argv[i]);
    }
    return 0;
}
```

效果：

<img src="https://gitee.com/wxy_666/images/raw/master/20200429205057.jpg" alt="2020-04-29_205032" style="zoom:80%;" />

## 二、关于控制printf输出的颜色

编写程序hello.c，编译和运行程序，得到类似以下结果：

<img src="https://gitee.com/wxy_666/images/raw/master/20200429204547.png" alt="图片1" style="zoom:80%;" />

可以通过

```c
\033[
```

来控制printf输出的颜色，格式为：

```c
printf("\033[字背景颜色;字体颜色m 字符串 \033[0m" );
```

注意，一定要在printf最后使用

```c
\033[0m
```

来消除前面的作用，否则前面的设置对后面的printf都有效果。

|     ANSI控制码     |     效果     |
| :----------------: | :----------: |
|      \033[0m       | 关闭所有属性 |
|      \033[1m       |  设置高亮度  |
|      \033[4m       |    下划线    |
|      \033[5m       |     闪烁     |
|      \033[7m       |     反显     |
|      \033[8m       |     消隐     |
| \033[30m —\033[37m |  设置前景色  |
| \033[40m—\033[47m  |  设置背景色  |
|      \033[nA       | 光标上移n行  |
|       \03[nB       | 光标下移n行  |
|      \033[nC       | 光标右移n行  |
|      \033[nD       | 光标左移n行  |



字背景颜色范围: 40--49

字颜色范围: 30—39

| 字背景颜色代号 | 字背景颜色 | 字颜色代号 | 字颜色 |
| :------------: | :--------: | :--------: | :----: |
|       40       |     黑     |     30     |   黑   |
|       41       |     红     |     31     |   红   |
|       42       |     绿     |     32     |   绿   |
|       43       |     黄     |     33     |   黄   |
|       44       |     蓝     |     34     |   蓝   |
|       45       |     紫     |     35     |   紫   |
|       46       |     青     |     36     |   青   |
|       47       |     白     |     37     |   白   |

小程序具体代码：

```c
#define NONE "\e[0m"
#define RED "\e[0;31m"
#define CYAN "\e[0;36m"
#include <stdio.h>
int main(int argc, char const *argv[])
{
    printf(RED "Hello " CYAN "World!\n" NONE);
    printf("\e[0;31mHello \e[0;36mWorld!\n\e[0m");
    return 0;
}
```

在这里\e和\033是一个意思，e的八进制代码就是033，这两个print其实效果是一样的，前面那个printf中多个连续的“xxx”字符串会被自动整合为一个字符串，其实最终执行的就是第二个printf。

效果：

<img src="https://gitee.com/wxy_666/images/raw/master/20200429211041.jpg" alt="2020-04-29_210711"  />

## 三、关于Linux中bash的变量、替换和元字符

要求只列出所有bash进程的状态，使用命令

```shell
ps -ef | grep bash
```

但grep进程自身也被输出了：

<img src="https://gitee.com/wxy_666/images/raw/master/20200429211423.jpg" alt="2020-04-29_211412" style="zoom:80%;" />

使用以下的命令：

```shell
ps -ef | grep [b]ash
ps -ef | grep \\bash
ps -ef | grep b\\ash
ps -ef | grep b\ash
ps -ef | grep ba\\sh
```

1. 可以

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429211802.jpg" alt="2020-04-29_211631" style="zoom:80%;" />

   上面这5个命令的核心目的其实是改变grep在

   ```shell
   ps -ef
   ```

   命令中的显示形式，例如这一个，我们使用三通（tee）命令将在grep命令过滤之前的输出定向到一个文件中。

   先将原命令试一下：

   ```shell
   ps -ef | tee 1.txt | grep bash
   cat 1.txt
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429214710.jpg" alt="2020-04-29_214703" style="zoom:80%;" />

   与1这个命令进行一下对比：

   ```shell
   ps -ef | tee 1.txt | grep [b]ash
   cat 1.txt
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429212708.jpg" alt="2020-04-29_212451" style="zoom:80%;" />

   我们可以很明显的看到，grep命令确实改变了，因为正则表达式

   ```
   [b]ash
   ```

   是可以匹配bash的，但是却不能匹配\[b\]ash，因此第一行的-bash这一行被取了出来，而最后grep这一行，由于不匹配\[b\]ash，就取不出来了，刚好实现了我们只列出所有bash进程的状态的目的，下面的几个命令大同小异。

2. 不可以

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429211917.jpg" alt="2020-04-29_211651" style="zoom:80%;" />

   ```shell
   ps -ef | tee 1.txt | grep \\bash
   cat 1.txt
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429213025.jpg" alt="2020-04-29_213015" style="zoom:80%;" />

   首先，\\是Shell的元字符，先被\\转义为真正的单个字符\\，因此传给grep的正则表达式其实是\\bash，而在正则表达式中，\\b有特殊含义，是单词边界，因此就连bash和\bash全部都没有匹配到。

3. 可以

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429211852.jpg" alt="2020-04-29_211709" style="zoom:80%;" />

   ```shell
   ps -ef | tee 1.txt | grep b\\ash
   cat 1.txt
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429213823.jpg" alt="2020-04-29_213811" style="zoom:80%;" />

   和2一样，传给grep的正则表达式为b\\ash，在正则表达式中\\a是没有意义的，因此\\被丢弃，正则表达式其实就是bash，所以第一行的-bash这一行被取了出来，而最后grep这一行，由于不匹配b\\ash，就取不出来了。

4. 不可以

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429212003.jpg" alt="2020-04-29_211730" style="zoom:80%;" />

   ```shell
   ps -ef | tee 1.txt | grep b\ash
   cat 1.txt
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429214303.jpg" alt="2020-04-29_214256" style="zoom:80%;" />

   首先，\\a先经过Shell的替换，因\\a是没有特殊含义的，因此\\被直接丢掉，传给grep的正则表达式为bash，这就和使用这个命令是一样的：

   ```shell
   ps -ef | grep bash
   ```

   显然是不能实现目的。

5. 不可以

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429212010.jpg" alt="2020-04-29_211747" style="zoom:80%;" />

   ```shell
   ps -ef | tee 1.txt | grep ba\\sh
   cat 1.txt
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200429214922.jpg" alt="2020-04-29_214914" style="zoom:80%;" />

   这个和2基本是一样的，和3唯一的区别就是，第3个中\\a对正则表达式而言是没有特殊含义的，但是\\s对正则表达式而言是有特殊含义的，\\s代表空白字符（可能是空格、制表符、其他空白），也就是说，grep匹配到的应该是类似于：

   ```shell
   ba h
   ```

   这种的字符串，显然-bash和ba\\sh都不符合，因此就什么都没取到。

