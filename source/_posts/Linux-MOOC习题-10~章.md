---
title: Linux MOOC习题 10~章
categories:
  - [Linux,习题]
tags: [Linux,习题,易错点,网课,MOOC]
mathjax: true
---

自己随便整理了一下在学习Linux网课时遇到的一些习题，易错点之类的，接上文[Linux MOOC习题 5~9章](/2020/04/29/Linux-MOOC习题-5~9章/)。



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



## 十二、进程的创建和重定向

<img src="https://gitee.com/wxy_666/images/raw/master/20200511192429.jpg" alt="2020-05-11_192030" style="zoom: 80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200511192503.jpg" alt="2020-05-11_192056" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200511192519.jpg" alt="2020-05-11_192111" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200511192659.jpg" alt="2020-05-11_192207" style="zoom:80%;" />

{% blockquote %}

注意，这个程序是持续不间断运行的，也就是说，不能停止后再重启，但是重定向是只能在程序运行的时候进行的操作，程序一旦开始运行就没办法重定向了，因此不能实现。但是如果foo可以终止后重启，确实可以用shell脚本等程序实现上述功能。修改foo程序也可以实现上述功能。

{% endblockquote %}



<img src="https://gitee.com/wxy_666/images/raw/master/20200511192733.jpg" alt="2020-05-11_192222" style="zoom: 80%;" />

{% blockquote %}

执行的大致流程，只是各进程执行情况，并不代表真实执行顺序：

***父进程（0）：***

- 输出：`i=0`

- 父进程0产生第一个子进程0-1

   ***0-1：***

   - 到下一轮for循环，i=1

   - 输出：`i=1`

   - 子进程0-1产生第一个子进程0-1-1
     
      ***0-1-1：***
      
      - 到下一轮for循环，i=2
      
      - 输出：`i=2`
      
      - 进程0-1-1产生第一个子进程0-1-1-1
      
        ***0-1-1-1：***
      
        - 到下一轮for循环，i=3
      
        - 输出：`i=3`
      
        - 进程0-1-1-1产生第一个子进程0-1-1-1-1
      
          ***0-1-1-1-1：***
      
          - 到下一轮for循环，i=4
          - 0-1-1-1-1结束
      
        - 到下一轮for循环，i=4
      
        - 0-1-1-1结束
      
      - 到下一轮for循环，i=3
      
      - 输出：`i=3`
      
      - 进程0-1-1产生第二个子进程0-1-1-2
      
        ***0-1-1-2：***
      
        - 到下一轮for循环，i=4
        - 0-1-1-2结束
      
      - 到下一轮for循环，i=4
      
      - 0-1-1结束
      
   - 到下一轮for循环，i=2

   - 输出：`i=2`

   - 子进程0-1产生第二个子进程0-1-2

      ***0-1-2：***

      - 到下一轮for循环，i=3

      - 输出：`i=3`

      - 进程0-1-2产生第一个子进程0-1-2-1

        ***0-1-2-1：***

        - 到下一轮for循环，i=4
        - 0-1-2-1结束

      - 到下一轮for循环，i=4

      - 0-1-2结束

   - 到下一轮for循环，i=3

   - 输出：`i=3`

   - 子进程0-1产生第三个子进程0-1-3

      ***0-1-3：***

      - 到下一轮for循环，i=4
      - 0-1-3结束

   - 到下一轮for循环，i=4

   - 0-1结束

- 到下一轮for循环，i=1

- 输出：`i=1`

- 父进程0产生第二个子进程0-2

   ***0-2：***

   - 到下一轮for循环，i=2

   - 输出：`i=2`

   - 进程0-2产生第一个子进程0-2-1

     ***0-2-1：***

     - 到下一轮for循环，i=3

     - 输出：`i=3`

     - 进程0-2-1产生第一个子进程0-2-1-1

       ***0-2-1-1：***

       - 到下一轮for循环，i=4
       - 0-2-1-1结束

     - 到下一轮for循环，i=4

     - 0-2-1结束

   - 到下一轮for循环，i=3

   - 输出：`i=3`

   - 进程0-2产生第二个子进程0-2-2

     ***0-2-2：***

     - 到下一轮for循环，i=4
     - 0-2-2结束

   - 到下一轮for循环，i=4

   - 0-2结束

- 到下一轮for循环，i=2

- 输出：`i=2`

- 父进程0产生第三个子进程0-3

   ***0-3：***

   - 到下一轮for循环，i=3

   - 输出：`i=3`

   - 进程0-3产生第一个子进程0-3-1

     ***0-3-1：***

     - 到下一轮for循环，i=4
     - 0-3-1结束

   - 到下一轮for循环，i=4

   - 0-3结束

- 到下一轮for循环，i=3

- 输出：`i=3`

- 父进程0产生第四个子进程0-4

   ***0-4：***

   - 到下一轮for循环，i=4
   - 0-4结束

- 到下一轮for循环，i=4

- 父进程0结束

共15行输出，分别为：

| 输出 |  次数   |
| :--: | :-----: |
| i=0  | $2^0=1$ |
| i=1  | $2^1=2$ |
| i=2  | $2^2=4$ |
| i=3  | $2^3=8$ |

在linux下的实际执行情况：

<img src="https://gitee.com/wxy_666/images/raw/master/20200514110539.png" alt="img" style="zoom:80%;" />

可以发现确实是15行，但是却有两个问题：

1. 为什么最后产生了一个空行，在等待用户输入？

   shell提示符其实是主进程死了以后，shell给出来的。因为实际运行结果是子进程死得晚，父进程死的早。其实，你不按回车，大家也都运行结束了，只是shell提示符出现得比某个子进程早。你看起来这个效果，其实这个提示符已经在上面显示了，那个时候主进程结束，shell给出了提示符，但此时子进程还没有结束，因此会继续输出，但这个时候shell已经进入了等待下一个命令的状态了，就像这样：

<img src="https://gitee.com/wxy_666/images/raw/master/20200514111514.png" alt="QQ图片20200514111508" style="zoom:80%;" />

​		可以发现，echo命令已经可以被shell接受了。

2. 程序为什么分两部分输出了？

   这是因为后面的子进程因为他的父进程先死掉了，变成了孤儿进程，打印出他们的父进程pid，发现是1，也证明了这一点：

<img src="https://gitee.com/wxy_666/images/raw/master/20200514110755.png" alt="QQ图片20200514110749" style="zoom:80%;" />

因此我们可以对程序进行如下修改：

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-05-11 20:02:00
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-05-14 11:18:43
 */
#include <stdio.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <unistd.h>
int main(int argc, char const *argv[])
{
    int i,status,wait_pid;
    for (i = 0; i < 4; i++)
    {
        printf("i=%d,pid=%d,ppid=%d\n", i,getpid(),getppid());
        if(fork()>0)
        {
            wait_pid = wait(&status);
        }
    }
    return 0;
}

```

对每个fork加上wait语句，就可以完全按照上面的进程树执行顺序执行，且不会有任何问题了。

<img src="https://gitee.com/wxy_666/images/raw/master/20200514112003.png" alt="QQ图片20200514111958" style="zoom:80%;" />

PS：对于wait，如果其所有子进程都还在运行，则阻塞；如果是一部分子进程终止，而另一部分还在运行，那么父进程还会阻塞吗？答案是不会，只要有一个进程终止，wait就会返回。也就是说只要wait接收到一个SIGCHLD信号，wait()就会返回。对于两个或多个子进程的情况，需要调用wait两次或多次。说白了在每一个fork后面的父进程分支中都要有一个wait与之对应。与wait相关的详细知识请参照这位兄弟的博客：[wait()函数的详细分析](https://www.cnblogs.com/black-mamba/p/6886434.html)。

{% endblockquote %}



{% folding 未完待续…… %}

所有的习题：

[Linux MOOC习题 1~4章](/2020/04/28/Linux-MOOC习题-1~4章/)

[Linux MOOC习题 5~9章](/2020/04/29/Linux-MOOC习题-5~9章/)

[Linux MOOC习题 10~章](/2020/05/07/Linux-MOOC习题-10~章/)

{% endfolding %}

