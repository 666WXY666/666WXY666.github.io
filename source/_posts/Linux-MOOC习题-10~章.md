---
title: Linux MOOC习题 10~章
categories:
  - [Linux,习题]
tags: [Linux,习题,易错点,网课,MOOC]
music:
  server: tencent
  type: song
  id: 1797389
  autoplay: true

---

自己随便整理了一下在学习Linux网课时遇到的一些习题，易错点之类的，接上文[Linux MOOC习题 5~9章](https://666wxy666.github.io/2020/04/29/Linux-MOOC习题-5~9章/)。



<!-- more -->



## 十、shell流程控制：条件、循环与函数

<img src="https://gitee.com/wxy_666/images/raw/master/20200507100115.jpg" alt="2020-05-07_095339" style="zoom:80%;" />

{% blockquote %}

- B选项：明显的错误，`then`要么另起一行，要么前面加`;`。
- C选项和D选项：都是没加`fi`，C选项还有其他的错误，这明显是和C语言之类的给混了。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507101924.jpg" alt="2020-05-07_095526" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507102056.jpg" alt="2020-05-07_095602" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507102115.jpg" alt="2020-05-07_095632" style="zoom:80%;" />





## 十一、进程的基本概念

<img src="https://gitee.com/wxy_666/images/raw/master/20200507102145.jpg" alt="2020-05-07_095819" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507102202.jpg" alt="2020-05-07_095837" style="zoom:80%;" />

{% blockquote %}

- `int a[N] = { 2 };`的意思是把`a[N]`第一个元素赋值为2，其他的赋值为0，也就是说，所有的元素都被赋值了，因此占空间很大。
- `int a[N];`的`a[N]`没有赋初值，只需记录a的长度即可，占用空间很小。

从图中（test是第一种赋值的，test2是第二种不赋值的）也可以看出，差别巨大：

<img src="https://gitee.com/wxy_666/images/raw/master/20200507103601.jpg" alt="2020-05-07_103457" style="zoom:80%;" />

{% endblockquote %}



<img src="https://gitee.com/wxy_666/images/raw/master/20200507102210.jpg" alt="2020-05-07_100015" style="zoom:80%;" />

{% blockquote %}

忙等待主要是占用CPU，和内存没啥关系。

{% endblockquote %}



{% folding 未完待续…… %}

所有的习题：

[Linux MOOC习题 1~4章](https://666wxy666.github.io/2020/04/28/Linux-MOOC习题-1~4章/)

[Linux MOOC习题 5~9章](https://666wxy666.github.io/2020/04/29/Linux-MOOC习题-5~9章/)

[Linux MOOC习题 10~章](https://666wxy666.github.io/2020/05/07/Linux-MOOC习题-10~章/)

{% endfolding %}

