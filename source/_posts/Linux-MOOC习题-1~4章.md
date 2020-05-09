---
title: Linux MOOC习题 1~4章
categories:
  - [Linux,习题]
tags: [Linux,习题,易错点,网课,MOOC]
---

自己随便整理了一下在学习Linux网课时遇到的一些习题，易错点之类的。



<!-- more -->



废话不多说，直接开始：

***PS：第一章是课程介绍。***

## 二、开始使用Linux和文本文件的处理

<img src="https://gitee.com/wxy_666/images/raw/master/20200428215021.jpg" alt="2020-04-28_211643" style="zoom: 80%;" />

{% blockquote %}

第1题其实是很基础的问题，早期的终端一般由键盘、显示器和RS232串行通信接口构成，没有磁盘存储器，其实可以想象成和打字机差不多的东西，他就是直接在显示器上显示了，不需要磁盘存储器。

第2题也比较基础：

- 行律的作用是：
  - 一行内字符的缓冲、回显和编辑，直到按下回车键；

  - 数据的加工，类似第二题中的将“\\n”替换为“\\r\\n”；
  - 将CTRL-C字符转换为终止进程的信号；

- 驱动程序其实是串口与行律的接口，负责上行和下行字符流。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200428215752.jpg" alt="2020-04-28_211738" style="zoom:80%;" />

{% blockquote %}

这俩题没啥好说的，基础知识。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200428215946.jpg" alt="2020-04-28_211810" style="zoom:80%;" />

{% blockquote %}

并不是这样的，CTRL-C确实传送了字符***（Ctrl+字母组合键可以产生ASCII码为1-26的控制字符，字母序号是几，ASCII码就是几，Ctrl+C的ASCII码应为3）***，其实还是行律的作用，他将CTRL-C字符转换为终止进程的信号，从而通知Linux主机，进程终止。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200428220440.jpg" alt="2020-04-28_211920" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200428220658.jpg" alt="2020-04-28_211921" style="zoom:80%;" />

{% blockquote %}

这俩题都是关于uniq命令的。

```shell
uniq -u
uniq -d
uniq
```

第一个命令，-u代表unique，只打印没有重复的行；

第二个命令，-d代表duplicated，只打印重复的行，注意重复的行只打印一次；

第三个命令，啥也不加就是都打印，但是也是复的行只打印一次；

还有就是关于重复的行，意思其实是连续的紧邻的两行内容相同才被叫做重复的行，因此第10题是错的。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200428221248.jpg" alt="2020-04-28_211949" style="zoom:80%;" />

{% blockquote %}

这个题不难，写出来的目的是只要记得

{% note, Less is more %}

就很好想了，less是more的升级版。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200428221932.jpg" alt="2020-04-28_212008" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200428221942.jpg" alt="2020-04-28_212044" style="zoom:80%;" />

{% blockquote %}

这俩题也不多解释了，od不可打印字符也可以显示，tr是用于翻译，把string1出现的字符替换为string2中对应的字符，ASCII字符0也可以翻译。

```shell
tr string1 string2
```

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200429095034.jpg" alt="2020-04-28_212253" style="zoom:80%;" />

{% blockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200429095238.png" alt="7992DB2C9EF7FC68967A6E866A101062" style="zoom: 50%;" />

{% endblockquote %}

## 三、正则表达式

<img src="https://gitee.com/wxy_666/images/raw/master/20200428222324.jpg" alt="2020-04-28_212126" style="zoom:80%;" />

{% blockquote %}

先说一下正则表达式的***元字符***，有6个，分别是：

```shell
. * [ \ ^ $
```

关于他们各自的含义不多说，自行百度，一定要注意的是]不是元字符，很容易搞错。

而关于单字符正则表达式，显而易见，就是匹配一个字符呗，不过有特殊的:

- \\加一个字符构成的转义字符，看做单字符正则表达式；

  ```shell
  \. \* \[ \\ \^ \$
  ```

- \[\]定义的集合也被看做单字符正则表达式;

因为.本来的含义是匹配任意字符，转义后就是单字符.，因此都是单字符正则表达式，而\$在尾部时和\^在首部时有特殊含义，因此转义之前不是，转义后就是单字符​了。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200429091111.jpg" alt="2020-04-28_212154" style="zoom:80%;" />

{% blockquote %}

这个题就比较有意思了，先看一下sed命令的基本用法：

```shell
sed 's/正则表达式/字符串/g' 文件名列表
```

s选项的意思是替换，将文件中匹配第一个//中的正则表达式的内容替换为第二个//中的字符串。

然后我们在看上题‘’中的正则表达式（也就是第一个//中的内容）

```shell
\[[^][]*]
```

可以分为三部分：

1. 因为[是元字符，加\转义后就变成了真正的[。

   ```shell
   \[
   ```

   

2. 中间这一部分是一个集合\[\]，重复一次或多次\[\]\*，集合里面的\^代表排除，排除了\]和\[，意思就是说除\]和\[外的字符重复一次或多次。那么这就有一个问题，第一个[为什么不与第一个]匹配，反而去和最后一个\]匹配呢？个人觉得，因为如果与第一个]匹配，就有了\[\^\]，这显然是错误的正则表达式，那么就继续向后匹配，因此就匹配到了最后面的\]。

   ```shell
   [^][]*
   ```

   

3. 因为\]不是元字符，也没有\[与它匹配，它就是单纯的一个字符\]。

   ```shell
   ]
   ```

   

综上所述，这个正则表达式可以匹配“\[非\]和\[的字符任意多个\]”，类似\[参考文献23\]这样的，但是如果\[\]里面还有\]和\[，就匹配不到了。再看上面的题，第二个//里面是空的，那么就是把匹配到的内容删除，很好理解。

{% endblockquote %}

## 四、文件比较，文件通配符

<img src="https://gitee.com/wxy_666/images/raw/master/20200429093945.jpg" alt="2020-04-28_212239" style="zoom:80%;" />

{% blockquote %}

vi的基本用法，在命令状态

```shell
:q      退出（:quit的缩写）
:q!     退出且不保存（:quit!的缩写）
:wq     保存并退出
:wq!    保存并退出即使文件没有写入权限（强制保存退出）
:x      保存并退出（类似:wq，但是只有在有更改的情况下才保存）
:exit   保存并退出（和:x相同）
:qa     退出所有(:quitall的缩写)
:cq     退出且不保存（即便有错误）
```

另外在“正常模式”下输入“ZZ”来保存并退出Vim（和:x相同），或者“ZQ”不保存并退出（和:q!相同）注意此处ZZ大写和小写是完全不同的。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200429095046.jpg" alt="2020-04-28_212356" style="zoom:80%;" />

{% blockquote %}

diff一般用于比较文本文件。

{% endblockquote %}



{% folding 未完待续…… %}

所有的习题：

[Linux MOOC习题 1~4章](/2020/04/28/Linux-MOOC习题-1~4章/)

[Linux MOOC习题 5~9章](/2020/04/29/Linux-MOOC习题-5~9章/)

[Linux MOOC习题 10~章](/2020/05/07/Linux-MOOC习题-10~章/)

{% endfolding %}

