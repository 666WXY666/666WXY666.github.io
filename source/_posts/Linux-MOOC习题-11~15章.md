---
title: Linux MOOC习题 11~15章
categories:
  - [Linux,习题]
tags: [Linux,习题,易错点,网课,MOOC]
mathjax: true
---

自己随便整理了一下在学习Linux网课时遇到的一些习题，易错点之类的，接上文[Linux MOOC习题 6~10章](/2020/04/29/Linux-MOOC习题-6~10章/)。



<!-- more -->



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

注意，这个程序是持续不间断运行的，也就是说，不能停止后再重启，但是重定向是只能在程序运行的时候进行的操作，程序一旦开始运行就没办法重定向了，因此不能实现。并且重定向是“当前进程”做的，不是父进程做的。但是如果foo可以终止后重启，确实可以用shell脚本等程序实现上述功能。修改foo程序也可以实现上述功能。

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



## 十三、重定向和管道，信号

<img src="https://gitee.com/wxy_666/images/raw/master/20200521095329.jpg" alt="2020-05-21_094112" style="zoom:80%;" />

{% blockquote %}

xsh2.c是一个简易的模拟shell程序。

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-05-21 09:44:26
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-05-21 09:51:41
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/wait.h>
int main(int argc, char const *argv[])
{
    char buf[256], *argv1[256], **p, *cmd2, *argv2[256];
    int sv, fd[2];
    
    for (;;)
    {
        printf("=> ");

        if (fgets(buf, sizeof(buf), stdin) == NULL)
            exit(0);

        if ((cmd2 = strstr(buf, "|")) == NULL)
            exit(0);
        *cmd2++ = '\0';

        for (p = &argv1[0], *p = strtok(buf, " \t\n"); *p != NULL; *++p = strtok(NULL, " \t\n"))
            ;

        for (p = &argv2[0], *p = strtok(cmd2, " \t\n"); *p != NULL; *++p = strtok(NULL, " \t\n"))
            ;

        if (argv1[0] == NULL || argv2[0] == NULL)
            exit(0);

        pipe(fd);
        if (fork() == 0)// | 左边的写端进程
        {
            dup2(fd[1], 1);
            close(fd[1]);
            close(fd[0]);
            execvp(argv1[0], argv1);
            fprintf(stderr, "** bad command 1: %m\n");
            exit(1);
        }
        else if (fork() == 0)// | 右边的读端进程
        {
            dup2(fd[0], 0);
            close(fd[0]);
            close(fd[1]);// 和第二题的类似，也不能省略
            execvp(argv2[0], argv2);
            fprintf(stderr, "** bad command 2: %m\n");
            exit(1);
        }

        close(fd[0]);// 第一题要省略的操作
        close(fd[1]);// 第二题要省略的操作
        wait(&sv);
        wait(&sv);
    }

    return 0;
}
```

1. 如果省略了这一条，对程序执行是没有什么影响的，但是循环多次以后，文件描述符一直不会被回收，导致资源耗尽，程序无法正常运行。
2. 如果省略了这一条，就会产生重大问题。在写端进程写入结束后正常退出，读端在读取管道时，因为有个写入端一直没有关闭，导致读端的管道一直收不到结束信号，一直在等待读取，导致了死锁，读端程序不能正常结束。

{% endblockquote %}



<img src="https://gitee.com/wxy_666/images/raw/master/20200521100519.jpg" alt="2020-05-21_094136" style="zoom:80%;" />

{% blockquote %}

goto只能在函数内跳转，全局跳转则可以跳转到保存的程序运行状态（包括堆栈等），就可以理解为玩游戏的SavePoint。但是如果你没保存，那就没法跳转，因此全局跳转只能跳转到执行过的位置。但是这个题目是有点问题的，goto语句也可以向前和向后跳转，因此此题可以忽略。

{% endblockquote %}



## 十四、进程间协作，Socket概述

<img src="https://gitee.com/wxy_666/images/raw/master/20200529100058.jpg" alt="2020-05-29_094202" style="zoom:80%;" />

{% blockquote %}

也就是说，`mmap()`需要一个已经打开的文件的文件描述符，当然需要`open()`打开文件，至于为什么需要，解析说的很明白。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200529100352.jpg" alt="2020-05-29_094455" style="zoom:80%;" />

{% blockquote %}

如果你打开的文件不关闭，你的程序一直执行，一直打开文件，打开的太多就会导致文件描述符资源耗尽，无法打开文件，但是当你程序退出时（正常退出或者异常终止），操作系统都会自动检测你已经打开的文件，自行关闭应该关闭的文件，因此也能正常持久化到磁盘文件。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200529100636.jpg" alt="2020-05-29_094519" style="zoom:80%;" />

{% blockquote %}

咨询式锁定是很关键的，也就是你不自己调用`fcntl()`，你是不会被阻塞的，也就是说Linux给你提供了互斥访问的途径，你自己不用或者使用不当，还是会导致出现问题，这也是Linux“策略和机制相分离”的设计方法。它是一个重要的设计思路，当系统不能大包大揽时，系统提供“机制”，把“策略”留给程序员，简化了操作系统的设计，程序员正确操作，应该完成的功能也都能实现。这是一个典型的合理的“甩锅”行为。因特网和Linux设计上都遵循了这样的理念。SUID，bash中的条件判断，四则运算，都是相同的理念，它们简化了自己，仅提供“机制”，把“策略”留给应用程序，不失必备功能。C语言也一样，printf在C语言里也会是个函数，与语言本身无关，C语言自己设计得很简单，以至于常用C语言的程序员，不需要查阅任何手册，都能把语法记下来。C++，你试试？

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200529101032.jpg" alt="2020-05-29_094606" style="zoom:80%;" />

{% blockquote %}

注意是以命令行参数方式传递，`exec()`虽然会清空原来的代码段，但是对文件描述符和信号的处理有所不同。

关于`fork()`和`exec()`父子进程对文件描述符和信号的继承问题总结如下：

- 信号

  - 仅fork时子进程会继承父进程fork之前所设置的信号处理方式。

  - 当有exec加载新程序时
    - 子进程继承的处理方式是忽略或默认处理方式时，exec新程序后设置依然有效。
    - 如果子进程继承是捕获处理方式时，exec新程序后将被还原为默认处理方式。

- 文件描述符

  当你用fork建立一个子进程，父进程的所有内容会被“完完整整”的复制到子进程中。子进程是父进程的一个clone体，除了pid不同，其余一切相同。在fork后父、子进程对于每一个打开的文件描述符共享同一个文件表项，此时可能有多个文件描述符项指向同一文件表项。即使exec也会保留文件描述符，但是有时子进程不需要继承父进程的文件描述符，并且有时在exec后子进程继承下来的文件描述符有的是毫无意义的，Linux使用close_on_exec标志位来实现。当父进程打开文件时，只需要应用程序设置FD_CLOSEXEC标志位，则当fork后exec其他程序的时候，内核自动会将其继承的父进程FD关闭。因此原则上只要你不设置这个标志位，你fork子进程后，exec新程序依然可以用你在父进程或者原来的子进程中打开的文件。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200529101043.jpg" alt="2020-05-29_094713" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200529102311.jpg" alt="2020-05-29_094803" style="zoom:80%;" />

## 十五、Socket编程

<img src="https://gitee.com/wxy_666/images/raw/master/20200603082808.jpg" alt="2020-06-03_081900" style="zoom:80%;" />

{% blockquote %}

- `bind`设置本地端点名，也可以用在客户端程序，不会阻塞；
- `listen`仅仅是给内核一个通知，开始监听到达的连接请求，不会阻塞；
- `connect`建立连接，设定远端端点名，进程阻塞，直到TCP连接建立（第二次握手）；
- `accept`接受一个连接请求，阻塞等待新连接的到来，直到TCP三次握手结束返回；

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200603083359.jpg" alt="2020-06-03_082405" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200603083428.jpg" alt="2020-06-03_082415" style="zoom:80%;" />

{% blockquote %}

不执行`signal(SIGCLD,SIG_ING)`会产生僵尸进程。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200603083519.jpg" alt="2020-06-03_082433" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200603083527.jpg" alt="2020-06-03_082526" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200603083537.jpg" alt="2020-06-03_082543" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200603083546.jpg" alt="2020-06-03_082554" style="zoom:80%;" />



{% folding 所有的习题： %}

[Linux MOOC习题 1~5章](/2020/04/28/Linux-MOOC习题-1~5章/)

[Linux MOOC习题 6~10章](/2020/04/29/Linux-MOOC习题-6~10章/)

[Linux MOOC习题 11~15章](/2020/05/07/Linux-MOOC习题-11~15章/)

{% endfolding %}

