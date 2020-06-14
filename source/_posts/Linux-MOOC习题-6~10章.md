---
title: Linux MOOC习题 6~10章
categories:
  - [Linux,习题]
tags: [Linux,习题,易错点,网课,MOOC]
---

自己随便整理了一下在学习Linux网课时遇到的一些习题，易错点之类的，接上文[Linux MOOC习题 1~5章](/2020/04/28/Linux-MOOC习题-1~5章/)。



<!-- more -->



***PS：第七章是上机实验，第一次上机实验和第二次的实验因为是提交阶段暂不公开，后面可能会发。***



## 六、Linux命令风格和文件系统

<img src="https://gitee.com/wxy_666/images/raw/master/20200429102845.jpg" alt="2020-04-28_213047" style="zoom:80%;" />

{% blockquote %}

这两个题都忽略了“符号链接”的作用。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103011.jpg" alt="2020-04-28_213114" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103030.jpg" alt="2020-04-28_213125" style="zoom:80%;" />

{% blockquote %}

这俩没啥好说的。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103227.jpg" alt="2020-04-28_213133" style="zoom:80%;" />

{% blockquote %}

在Linux中，一般是-1代表失败，>=0的值代表成功。

{% endblockquote %}

## 八、文件和目录的权限，Shell

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103454.jpg" alt="2020-04-28_213341" style="zoom:80%;" />

{% blockquote %}

目录有执行权限（即x权限）意味着分析路径名过程中可检索该目录。

{% endblockquote %}

## 九、替换，元字符和转义

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103639.jpg" alt="2020-04-28_213427" style="zoom:80%;" />

{% blockquote %}

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
   

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200429103652.jpg" alt="2020-04-28_213530" style="zoom:80%;" />

{% blockquote %}

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

{% endblockquote %}



## 十、shell流程控制：条件，循环与函数

<img src="https://gitee.com/wxy_666/images/raw/master/20200507100115.jpg" alt="2020-05-07_095339" style="zoom:80%;" />

{% blockquote %}

- B选项：明显的错误，`then`要么另起一行，要么前面加`;`。
- C选项和D选项：都是没加`fi`，C选项还有其他的错误，这明显是和C语言之类的给混了。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507101924.jpg" alt="2020-05-07_095526" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507102056.jpg" alt="2020-05-07_095602" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507102115.jpg" alt="2020-05-07_095632" style="zoom:80%;" />





{% folding 所有的习题： %}

[Linux MOOC习题 1~5章](/2020/04/28/Linux-MOOC习题-1~5章/)

[Linux MOOC习题 6~10章](/2020/04/29/Linux-MOOC习题-6~10章/)

[Linux MOOC习题 11~15章](/2020/05/07/Linux-MOOC习题-11~15章/)

{% endfolding %}

