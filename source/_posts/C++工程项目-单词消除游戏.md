---
title: C++工程项目 单词消除游戏
categories:
  - [C++,项目]
tags: [C++,工程,QT,小游戏]
---

**本文是C++面向对象的程序设计实战项目，实现单词消除游戏，具体项目及要求请点击查看。**



<!-- more -->



## 一、单词消除游戏总体要求

单词消除游戏由两类参与者组成：闯关者（即游戏玩家），出题者（为游戏增加游戏中使用单词）。游戏规则为，游戏每一轮，程序会根据该关卡难度，显示一个单词，一定时间后单词消失。闯关者需要在相应地方输入刚刚显示并消失的单词，如果闯关者输入正确（即闯关者输入的单词与刚刚显示的单词完全一致，包含大小写）则为通过。一关可以由一轮或者多轮组成。

## 二、单词消除游戏具体要求

1. Version1

   - 实现闯关者，出题者本地的注册、登录。
   - 程序支持多人注册，同一时间只有一人可以登录。
   - 实现游戏规则：出题者增加游戏中使用单词。游戏每一关，程序会根据该关卡难度，显示一个单词，一定时间后单词消失。闯关者需要在相应地方输入刚刚显示并消失的单词，如果闯关者输入正确则为通过。
   - 任何角色均可查询所有闯关者、出题者，按照属性查找相应闯关者、出题者。
   - 采用面向对象的方式，使用类设计。
   - 在设计类时请注意类的继承关系，关注闯关者、出题者的关联（闯关者与出题者有共同的基类）。
   - 使用文件或者数据库作为存储对象，自行设计文件格式，或者数据库表结构。

2. Version2

   在Version1的基础上增加：

   - 可以根据闯关者闯过关卡数、经验、等级等对闯关者排名，根据出题者出题数目、等级对出题者排名。
   - 请根据要求设计每一关的出题方式，注意随着关卡数增加，题目难度增加
   - 计闯关者经验值，等级增加策略。设计出题者等级升级策略。

3. Version3

   在Version2的基础上增加：

   - 使用socket进行通信，实现局域网通信游玩。
   - 需要完成服务器端程序，以及客户端程序。客户端可以启动多个同时与服务器交互，要求服务器具有并发处理能力。
   - 在题目的要求下自行扩展功能，功能扩展适当者酌情加分。

## 三、运行环境

电脑硬件配置：

- 处理器：Intel i7 7700HQ

- 显卡：NVIDIA GeForce GTX 1050 Ti

- 内存：16GB

编程语言：C++

QT：Qt Creator 4.11.1 Based on Qt 5.14.1 (MSVC 2017, 32 bit)

编译器：Desktop Qt 5.14.2 MinGW 7.3.0 64-bit

数据库：mysql Ver 8.0.20 for Win64 on x86_64 (MySQL Community Server - GPL)

其它说明：

- 关于QT数据库驱动

  - libmysql.dll和libqsqlmysql.a放入【...\Qt5.14.2\5.14.2\mingw73_64\bin】下。

  - qsqlmysql.dll和qsqlmysql.dll.debug放入【...\Qt5.14.2\5.14.2\mingw73_64\plugins\sqldrivers】下。

- 数据库信息：

  需要修改请自行修改代码，以下是默认用户名和密码。

  - 用户名：wxy
  - 密码：123456

- 由于QT的限制，编译构建时路径不允许有中文。
- 服务器默认IP地址是本地127.0.0.1，有需要请自行修改代码。

## 四、模块设计

### 1、游戏客户端

#### 模块清单

| 编号 | 模块名称     | 模块标识 | 模块功能                       |
| ---- | ------------ | -------- | ------------------------------ |
| 1    | 主界面模块   | Widget   | 主界面，包括登录等             |
| 2    | 用户类模块   | User     | 闯关者，出题人类               |
| 3    | 注册模块     | Register | 注册用户                       |
| 4    | 用户信息模块 | Info     | 展示用户信息，包括等级、经验等 |
| 5    | 游戏模块     | Game     | 单词消除游戏游玩界面           |
| 6    | 出题模块     | Create   | 出题人出题界面                 |
| 7    | 查询模块     | Check    | 查询用户，排名界面             |



#### 用户界面

##### 1、主界面

<img src="https://gitee.com/wxy_666/images/raw/master/20200715102903.png" alt="1" style="zoom:80%;" />

##### 2、注册界面

<img src="https://gitee.com/wxy_666/images/raw/master/20200715103047.png" alt="2" style="zoom:80%;" />

##### 3、用户信息界面（出题人与闯关者文字略有不同）

<img src="https://gitee.com/wxy_666/images/raw/master/20200715103058.png" alt="3" style="zoom:80%;" />

##### 4、游戏界面

<img src="https://gitee.com/wxy_666/images/raw/master/20200715103347.png" alt="4" style="zoom:80%;" />

##### 5、出题界面

- Version2：

  <img src="https://gitee.com/wxy_666/images/raw/master/20200715103355.png" alt="5" style="zoom:80%;" />

- Version3：

  <img src="https://gitee.com/wxy_666/images/raw/master/20200715103405.png" alt="6" style="zoom:80%;" />

##### 6、查询界面

<img src="https://gitee.com/wxy_666/images/raw/master/20200715103416.png" alt="7" style="zoom:80%;" />

#### 函数具体功能

##### 1、Widget

```c++
void init_UI();//初始化图形界面
void connect_event();//信号，槽函数链接
void user_registe_show();//显示闯关者注册界面
void creater_registe_show();//显示出题人注册界面
void check_user_show();	//显示查询闯关者界面
void check_creater_show();//显示查询出题人界面
void info_show();//显示用户信息界面
void check_close();//关闭查询界面
void registe_close();//关闭注册界面
void info_close();//关闭用户信息界面
void showEvent(QShowEvent *);//显示界面
void close_Widget();//关闭界面
void type_changed();//闯关者，出题人切换
void init_database();//初始化数据库
```

##### 2、user

player和creater继承于user类，升级函数采用虚函数，分别在各自类中实现。

##### 3、register

```c++
void init_UI();//初始化图形界面
void connect_event();//信号，槽函数链接
void showEvent(QShowEvent *);//显示界面
void close_Widget();//关闭界面
void send_change_signal();//改变界面信号
```

##### 4、info

```c++
void init_UI();//初始化图形界面
void connect_event();//信号，槽函数链接
void showEvent(QShowEvent *);//显示界面
void close_Widget();//关闭界面
void send_change_signal();//改变界面信号
void game_show();//游戏界面显示
void game_close();//游戏界面关闭
void create_show();//出题界面显示    
void create_close();//出题界面关闭
```

##### 5、game

```c++
void init_UI();//初始化图形界面
void connect_event();//信号，槽函数链接
void showEvent(QShowEvent *);//显示界面
void close_Widget();//关闭界面
void send_change_signal();//改变界面信
void init_timer();//计时器初始化
void init_ms_timer();//计时器初始化
void timeup();//超时
void ms_timeup();//超时
```

##### 6、create

```c++
void init_UI();//初始化图形界面
void connect_event();//信号，槽函数链接
void showEvent(QShowEvent *);//显示界面
void close_Widget();//关闭界面
void send_change_signal();//改变界面信号
```

##### 6、check

```c++
void init_UI();//初始化图形界面
void connect_event();//信号，槽函数链接
void showEvent(QShowEvent *);//显示界面
void close_Widget();//关闭界面
void send_change_signal();//改变界面信号
void search();//搜索信息
```



### 2、服务器端

#### 模块清单

| 编号 | 模块名称   | 模块标识  | 模块功能   |
| ---- | ---------- | --------- | ---------- |
| 1    | 主界面模块 | Widget    | 主界面     |
| 2    | 线程模块   | My_thread | 实现多线程 |

#### 用户界面

<img src="https://gitee.com/wxy_666/images/raw/master/20200715104043.png" alt="8" style="zoom:80%;" />



#### 函数具体功能

##### 1、Widget

```c++
void init_UI();//初始化图形界面
void tcpserver_connect();//tcpserver连接
void tcpsocket_connect();//tcpsocket连接
void showEvent(QShowEvent *);//界面显示
```

##### 2、My_thread

当收到客户端的请求后，根据客户端发送的字符串判断是什么请求，在屏幕上输出，同时新建线程，在线程中处理这些请求，从而实现并发处理。

```c++
void init_database();//初始化数据库
```

## 五、项目地址

本项目的源码、可执行程序均已经存放于我的Github，欢迎下载查看：

{% btns rounded center grid1 %}

{% cell 源码仓库, https://github.com/666WXY666/WordGame, fas fa-download %}

{% endbtns %}

