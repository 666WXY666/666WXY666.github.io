---
title: Linux MOOC习题 5~9章
categories:
  - [Linux,习题]
tags: [Linux,习题,易错点,网课,MOOC]
music:
  server: tencent
  type: song
  id: 1797389
  autoplay: true

---

自己随便整理了一下在学习Linux网课时遇到的一些习题，易错点之类的，接上文[Linux MOOC习题 1~4章](https://666wxy666.github.io/2020/04/28/Linux-MOOC习题-1~4章/)。



<!-- more -->



***PS：第七章是上机实验，第一次上机实验详见我的另一篇文章：[Linux 上机实战1 正则表达式](https://666wxy666.github.io/2020/03/31/Linux-上机实战1-正则表达式/)，第二次的实验因为是提交阶段暂不公开，后面可能会发。***

## 五、文件管理和目录管理

<img src="https://gitee.com/wxy_666/images/raw/master/20200429100515.jpg" alt="2020-04-28_212515" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200429101043.jpg" alt="2020-04-28_212629" style="zoom:80%;" />

在Linux中，Shell会自动帮你进项一些替换，实际运行的命令其实是：

```shell
cp src/x.c src/xx.c src/xxx.c src/x.h src/xx.h src/xxx.h……
```

如果有好多.c和.h文件（超过两个），cp就会报错：

{% note, cp: target 'xxx' is not a directory %}

但是如果只有两个.c或.h文件，那么就会产生非常严重的后果，实际运行了下面的命令：

```shell
cp src/x.c src/y.c
```

这是非常危险的，这样y.c的内容会被x.c覆盖，这是我们不愿意看到的。

那么应该用什么命令来实现题目的要求呢？

```shell
cp src/*.[ch] .
```

我们显示地指定复制到‘.’（当前目录），就不会出现问题了。

<img src="https://gitee.com/wxy_666/images/raw/master/20200429102232.jpg" alt="2020-04-28_212656" style="zoom:80%;" />

这也是在Linux中很怪的地方，明明你不能写这个文件，但是你却可以删除，如果不加-f，删除只读文件时会有提示，但是加了-f就没有任何提示了。还有一点需要注意的是，如第6题所说，加了-f也不能删除无权限删除的文件。

<img src="https://gitee.com/wxy_666/images/raw/master/20200429102450.jpg" alt="2020-04-28_212714" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200429102603.jpg" alt="2020-04-28_212737" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200429102659.jpg" alt="2020-04-28_212800" style="zoom: 80%;" />

关于第10题，不像Windows，在Linux中这些后缀都是约定俗成的，只是为了做标记用，好区分而已，没有实际意义。

## 六、Linux命令风格和文件系统

<img src="https://gitee.com/wxy_666/images/raw/master/20200429102845.jpg" alt="2020-04-28_213047" style="zoom:80%;" />

这两个题都忽略了“符号链接”的作用。

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103011.jpg" alt="2020-04-28_213114" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103030.jpg" alt="2020-04-28_213125" style="zoom:80%;" />

这俩没啥好说的。

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103227.jpg" alt="2020-04-28_213133" style="zoom:80%;" />

在Linux中，一般是-1代表失败，>=0的值代表成功。

## 八、文件和目录的权限、Shell

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103454.jpg" alt="2020-04-28_213341" style="zoom:80%;" />

目录有执行权限（即x权限）意味着分析路径名过程中可检索该目录。

## 九、替换、元字符和转义

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103639.jpg" alt="2020-04-28_213427" style="zoom:80%;" />

如果你是执行这个命令的操作员，估计你马上就心情不好了。由于拼错了单词，把DATABASE不小心写成了DATEBASE，灾难来了。未命名的变量被bash替换为空字符串，实际上你以root身份执行了最邪恶的一条命令：

```shell
rm -rf /*
```


永远不要盲目自信，谁也保证不了自己不会犯错误，怎么才能避免这样的悲剧发生？

1. 尽量不要以root身份登录。

2. bash有选项，引用未定义的变量会出错而不是替换为空字符串，可以打开这个选项。早期的编程语言把引用的未定义过的变量自动加上定义，这种做法实际上太糟糕，最早的FORTRAN语言就这种做法，据说曾因此导致一次太空任务失败。

3. 在设计你自己的系统时，建库命令能够从目录名开始建库，就是说要求建库之前/opt/data下不需要存在目录puma，而不是要求建库之前/opt/data有个空目录puma，这样的话，即使你的命令变成了

   ```shell
   rm -rf $DATEBASE
   ```

   因为你的失误，会导致rm命令抱怨缺少参数而什么都不做，这个结果是可以接受的。

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103652.jpg" alt="2020-04-28_213530" style="zoom:80%;" />

在Linux中，目前我已知的Shell的元字符有：

```shell
空格 制表符 回车 > < | ; & $ * [ ] ? \ ( ) '' " " 反撇号`
```

第11题中，这三个命令都可以取消文件通配符\*的特殊作用，让echo直接打印字符\*，并且这个替换是Shell进行的，也就是说，echo拿到的命令都是一样的，他是分不清操作员输入的是哪个命令，这三个命令的参数：

<img src="https://gitee.com/wxy_666/images/raw/master/20200429105050.jpg" alt="2020-04-29_105040" style="zoom:80%;" />

而对于不转义的命令的参数：

```shell
echo *
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200429105236.jpg" alt="2020-04-29_105224" style="zoom:80%;" />

因此结果就很明显了：

<img src="https://gitee.com/wxy_666/images/raw/master/20200429104247.jpg" alt="2020-04-29_104233" style="zoom:80%;" />



{% folding 未完待续…… %}

所有的习题：

[Linux MOOC习题 1~4章](https://666wxy666.github.io/2020/04/28/Linux-MOOC习题-1~4章/)

[Linux MOOC习题 5~9章](https://666wxy666.github.io/2020/04/29/Linux-MOOC习题-5~9章/)

{% endfolding %}

