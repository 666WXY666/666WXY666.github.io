---
title: Linux 上机实战4 SimpleShell
categories:
  - [Linux,上机实战]
tags: [Linux,实战,Shell,C]

---

**本文是关于Linux中的一个简单的shell，支持运行多个命令以[;]分割，支持管道和重定向，支持CTRL-C终止内部命令而不终止simple shell本身，有完善的错误处理及醒目的颜色提示。**



<!-- more -->



## 一、实验环境

硬件：

- Intel i7 7700HQ，内存16GB；

软件：

- 基于Arch Linux的Manjaro

- Linux内核：Linux 5.4.39-1-MANJARO x86_64
- C语言

## 二、基本步骤

1. 编写代码grep+wc.c（代码源码见附件grep+wc.c或本文最后的附录）：

   <img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_212437.png" alt="Screenshot_20200521_212437" style="zoom:80%;" />

   

2. 编译

   <img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_211357.png" alt="Screenshot_20200521_211357" style="zoom:80%;" />

3. 在grep+wc.c的基础上进行拓展，编写代码simple_shell.c（代码源码见附件simple_shell.c或本文最后的附录）：

   <img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_21306.png" alt="Screenshot_20200521_21306" style="zoom:80%;" />

   在编写时遇到了一个棘手的问题，就是关于“子进程对父进程信号的继承情况”。总结一下就是：

   - 仅fork时子进程会继承父进程fork之前所设置的信号处理方式。

   - 当有exec加载新程序时
     - 子进程继承的处理方式是忽略或默认处理方式时，exec新程序后设置依然有效。
     - 如果子进程继承是捕获处理方式时，exec新程序后将被还原为默认处理方式。

   详细请查看这位大佬的文章[子进程对父进程信号的继承情况详细分析（信号）【linux】（zs）](https://blog.csdn.net/qq_43648751/article/details/104623880)。

4. 编译

   <img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_210259.png" alt="Screenshot_20200521_210259" style="zoom:80%;" />

## 三、测试样例

### 0、在Shell（zsh）里运行所给命令

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214711.png" alt="Screenshot_20200521_214711" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214739.png" alt="Screenshot_20200521_214739" style="zoom:80%;" />

### 1、grep+wc

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_213548.png" alt="Screenshot_20200521_213548" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_213619.png" alt="Screenshot_20200521_213619" style="zoom:80%;" />

### 2、simple_shell

#### 1.特殊命令

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_213811.png" alt="Screenshot_20200521_213811" style="zoom:80%;" />

#### 2.普通命令

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214038.png" alt="Screenshot_20200521_214038" style="zoom:80%;" />

#### 3.重定向命令

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214206.png" alt="Screenshot_20200521_214206" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214238.png" alt="Screenshot_20200521_214238" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214321.png" alt="Screenshot_20200521_214321" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214356.png" alt="Screenshot_20200521_214356" style="zoom:80%;" />

#### 4.管道命令

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214436.png" alt="Screenshot_20200521_214436" style="zoom:80%;" />

#### 5.综合命令

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214527.png" alt="Screenshot_20200521_214527" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_214606.png" alt="Screenshot_20200521_214606" style="zoom:80%;" />

#### 6.错误命令

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_215944.png" alt="Screenshot_20200521_215944" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_220012.png" alt="Screenshot_20200521_220012" style="zoom:80%;" />

#### 7.CTRL-C

输入`find / -name hello`，在运行期间输入`CTRL-C`杀死正在运行的find程序。可以发现find命令停止，但是Simple Shell并没有退出（输入exit可以正常退出）。

<img src="https://gitee.com/wxy_666/images/raw/master/Screenshot_20200521_220213.png" alt="Screenshot_20200521_220213" style="zoom:80%;" />



## 四、项目地址

本项目的源码、可执行程序均已经存放于我的Github，欢迎下载查看：

{% btns rounded center grid1 %}

{% cell 源码仓库, https://github.com/666WXY666/Linux_Projects/tree/master/%E7%AE%80%E5%8C%96%E7%9A%84Shell, fas fa-download %}

{% endbtns %}



## 五、附录

***PS:程序源码均有详细的注释***

### 1、grep+wc.c

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: grep -v usr < /etc/passwd | wc –l > r.txt; cat r.txt
 * @Version: 1.0
 * @Author: 苇名一心
 * @Date: 2020-05-21 09:44:26
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-05-21 21:23:57
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/wait.h>

int main(int argc, char const *argv[])
{
    int sv;
    int fd[2];

    pipe(fd);
    if (fork() == 0)
    {
        // 输入重定向
        int fd0 = -1;
        fd0 = open("/etc/passwd", O_RDONLY);
        if (fd0 != -1)
        {
            dup2(fd0, 0);
            close(fd0);
        }
        // 管道输入端
        dup2(fd[1], 1);
        close(fd[1]);
        close(fd[0]);
        // 执行管道前的命令
        execlp("grep", "grep", "-v", "usr", 0);
        exit(1);
    }
    else
    {
        if (fork() == 0)
        {
            // 输出重定向
            int fd1 = -1;
            fd1 = open("r.txt", O_CREAT | O_WRONLY | O_TRUNC, 0666);
            if (fd1 != -1)
            {
                dup2(fd1, 1);
                close(fd1);
            }
            // 管道输出端
            dup2(fd[0], 0);
            close(fd[0]);
            close(fd[1]);
            // 执行管道后的命令
            execlp("wc", "wc", "-l", 0);
            exit(1);
        }
    }

    close(fd[0]);
    close(fd[1]);
    wait(&sv);
    wait(&sv);
    // 执行第二个命令
    execlp("cat", "cat", "r.txt", 0);
    return 0;
}
```



### 2、simple_shell.c

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: Simple Shell
 * @Version: 1.0
 * @Author: 苇名一心
 * @Date: 2020-05-21 09:44:26
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-05-21 21:56:34
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <fcntl.h>
#include <unistd.h>
#include <signal.h>
#include <setjmp.h>
#include <sys/types.h>
#include <sys/wait.h>

// 颜色
#define NONE "\e[0m"   // 复原
#define RED "\e[0;31m" // ERROR

char version[] = "1.0"; // 版本号
int pipe_flag = 0;      // 是否使用管道
static jmp_buf env;
int sv;

// CTRL-C回调函数
void sig_handler(int sig)
{
    if (pipe_flag)
    {
        wait(&sv);
        wait(&sv);
    }
    else
    {
        wait(&sv);
    }
    printf("\n");
    siglongjmp(env, 1);
}

// 打印帮助
void help()
{
    printf("**********************************************************\n");
    printf("%27sHELP%27s\n**********************************************************\n", "", "");
    printf("Simple Shell %s by 苇名一心 May 21 2020\n", version);
    printf("Usage: [COMMAND] [OPTION]... (< [INFILE]) (| [COMMAND] [OPTION]... (> [OUTFILE])) (;...;...)\n");
    printf("Simple shell with redirect and pipe(Can also run multiple commands)\nSpecial commands:\n");
    printf("\thelp\tDisplay this help and continue\n");
    printf("\texit\tExit simple shell\n");
    printf("**********************************************************\n");
}

int main(int argc, char const *argv[])
{
    char buffer[256], *argv1[256], **p, *argv2[256], *buf, *end, *cmd2, *in, *out;
    int fd[2];
    // CTRL-C信号自行处理
    signal(SIGINT, sig_handler);

    for (;;)
    {
        sigsetjmp(env, 1);
        // 打印提示符
        printf("=> ");
        // 获取命令
        if (fgets(buffer, sizeof(buffer), stdin) == NULL)
            exit(0);
        //没有输入任何命令
        if (strlen(buffer) == 1)
        {
            continue;
        }
        // 命令最后加;用于判断
        if (buffer[strlen(buffer) - 2] != ';')
        {
            buffer[strlen(buffer) - 1] = ';';
        }
        // 获取每一条;分割的命令，依次执行
        for (buf = buffer; end = strstr(buf, ";"); buf = end)
        {
            *end++ = '\0';
            pipe_flag = 0;
            // 获取管道命令，输入重定向文件和输出重定向文件
            // note:必须先获取管道命令，in和out在进行分词操作，因为分词会修改buf，导致获取管道命令，in和out出错
            cmd2 = strstr(buf, "|");
            in = strstr(buf, "<");
            out = strstr(buf, ">");
            if (in != NULL)
            {
                *in++ = '\0';
                in = strtok(in, " \t\n");
            }
            if (out != NULL)
            {
                *out++ = '\0';
                out = strtok(out, " \t\n");
            }
            if (cmd2 != NULL)
            {
                pipe_flag = 1;
                *cmd2++ = '\0';
                for (p = &argv2[0], *p = strtok(cmd2, " \t\n"); *p != NULL; *++p = strtok(NULL, " \t\n"))
                    ;
                if (argv2[0] == NULL)
                {
                    fprintf(stderr, RED "** No command 2 input!\n" NONE);
                    continue;
                }
            }
            for (p = &argv1[0], *p = strtok(buf, " \t\n"); *p != NULL; *++p = strtok(NULL, " \t\n"))
                ;
            // 没有命令输入
            if (argv1[0] == NULL)
            {
                fprintf(stderr, RED "** No command 1 input!\n" NONE);
                continue;
            }
            // 输入了exit
            if (strcmp(argv1[0], "exit") == 0)
                exit(0);
            // 输入了help
            if (strcmp(argv1[0], "help") == 0)
            {
                help();
                continue;
            }
            // 使用了管道
            if (pipe_flag)
            {
                pipe(fd);
                if (fork() == 0)
                {
                    // 输入重定向
                    int fd0 = -1;
                    if (in != NULL)
                        fd0 = open(in, O_RDONLY);
                    if (fd0 != -1)
                    {
                        dup2(fd0, 0);
                        close(fd0);
                    }
                    else if (in != NULL)
                    {
                        fprintf(stderr, RED "** No such file or directory: %s\n" NONE, in);
                        help();
                        exit(1);
                    }
                    // 管道输入端
                    dup2(fd[1], 1);
                    close(fd[1]);
                    close(fd[0]);
                    // 执行管道前的命令
                    execvp(argv1[0], argv1);
                    fprintf(stderr, RED "** Bad command 1: %m\n" NONE);
                    help();
                    exit(1);
                }
                else
                {
                    if (fork() == 0)
                    {
                        // 输出重定向
                        int fd1 = -1;
                        if (out != NULL)
                            fd1 = open(out, O_CREAT | O_WRONLY | O_TRUNC, 0666);
                        if (fd1 != -1)
                        {
                            dup2(fd1, 1);
                            close(fd1);
                        }
                        // 管道输出端
                        dup2(fd[0], 0);
                        close(fd[0]);
                        close(fd[1]);
                        // 执行管道后的命令
                        execvp(argv2[0], argv2);
                        fprintf(stderr, RED "** Bad command 2: %m\n" NONE);
                        help();
                        exit(1);
                    }
                }

                close(fd[0]);
                close(fd[1]);
                wait(&sv);
                wait(&sv);
            }
            // 没有使用管道
            else
            {
                if (fork() == 0)
                {
                    int fd0 = -1, fd1 = -1;
                    // 输入重定向
                    if (in != NULL)
                        fd0 = open(in, O_RDONLY);
                    if (fd0 != -1)
                    {
                        dup2(fd0, 0);
                        close(fd0);
                    }
                    else if (in != NULL)
                    {
                        fprintf(stderr, RED "** No such file or directory: %s\n" NONE, in);
                        help();
                        exit(1);
                    }
                    // 输出重定向
                    if (out != NULL)
                        fd1 = open(out, O_CREAT | O_WRONLY | O_TRUNC, 0666);
                    if (fd1 != -1)
                    {
                        dup2(fd1, 1);
                        close(fd1);
                    }
                    // 执行命令
                    execvp(argv1[0], argv1);
                    fprintf(stderr, RED "** Bad command 1: %m\n" NONE);
                    help();
                    exit(1);
                }

                wait(&sv);
            }
        }
    }

    return 0;
}
```



