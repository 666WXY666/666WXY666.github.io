---
title: 计算机系统结构 实验 使用MIPS指令实现求两个数组的点积
categories:
  - [计算机系统结构,实验]
tags: [实验,计算机系统结构,汇编,MIPS]
mathjax: true
---

本文是关于计算机系统结构实验三，使用MIPS指令实现求两个数组的点积。



<!-- more -->



## 一、实验目的

1. 通过实验熟悉实验 1 和实验 2 的内容。
2. 增强汇编语言编程能力。
3. 学会使用模拟器中的定向功能进行优化。
4. 了解对代码进行优化的方法。

## 二、实验原理

​		通过编写MIPS汇编程序，实现向量点积的功能。在模拟器MIPSsim上执行所写的汇编程序，连续执行，查看寄存器相关结果，判断所写的汇编程序是否正确。然后观察时钟周期图窗口的执行过程和冲突的指令，查看统计窗口的信息，来判断定向前后和优化前后的执行效率高低。

## 三、实验步骤及结果分析

### 1、自行编写一个计算两个向量点积的汇编程序，该程序要求可以实现求两个向量点积计算后的结果。

  向量的点积：假设有两个 n 维向量 a、b，则 a 与 b 的点积为：
$$
a{\cdot}b=\sum_{i=1}^na_ib_i=a_1b_1+a_2b_2+\cdots+a_nb_n
$$
两个向量元素使用数组进行数据存储，要求向量的维度不得小于10

***PS：汇编程序见附录。***

### 2、启动 MIPSsim。

<img src="https://gitee.com/wxy_666/images/raw/master/20200507175654.jpg" alt="2020-05-07_175631" style="zoom: 50%;" />

### 3、载入自己编写的程序，观察流水线输出结果。

<img src="https://gitee.com/wxy_666/images/raw/master/20200507175822.jpg" alt="2020-05-07_175742" style="zoom: 50%;" />

载入的代码：

<img src="https://gitee.com/wxy_666/images/raw/master/20200507175853.jpg" alt="2020-05-07_175807" style="zoom:80%;" />

执行：

<img src="https://gitee.com/wxy_666/images/raw/master/20200507175940.jpg" alt="2020-05-07_175927" style="zoom: 50%;" />

执行到结束：

- 寄存器

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507180201.jpg" alt="2020-05-07_180059" style="zoom:80%;" />

  我编写的汇编程序是向量$(1,2,3,4,5,6,7,8,9,10,11,12)\cdot(1,2,3,4,5,6,7,8,9,10,11,12)$=650，R7为结果寄存器，发现结果符合预期，说明编写的汇编程序正确。

- 时钟周期图

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507180230.jpg" alt="2020-05-07_180040" style="zoom: 50%;" />

  可以看到有较多停顿，主要是LW命令与MUL命令，MUL命令与ADD命令和一些控制停顿。

- 统计

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507180242.jpg" alt="2020-05-07_180112" style="zoom:80%;" />

  发现RAW停顿有72个周期，停顿次数较多，可以进行优化。共执行了187个周期，RAW停顿占周期总数的百分比为38.50267%，所有的停顿为84个周期，占周期总数的百分比为44.91978%，效率很低。
  $$
  吞吐率TP_1=\frac{102}{187\Delta{t}}
  $$
  
  $$
  加速比S_1=\frac{102\times{5\Delta{t}}}{187\Delta{t}}\approx{2.73}
  $$
  

### 4、使用定向功能再次执行代码，与刚才执行结果进行比较，观察执行效率的不同。

<img src="https://gitee.com/wxy_666/images/raw/master/20200507181100.jpg" alt="2020-05-07_181050" style="zoom: 50%;" />

- 寄存器

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507181210.jpg" alt="2020-05-07_181031" style="zoom:80%;" />

  结果正确。

- 时钟周期图

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507181322.jpg" alt="2020-05-07_181255" style="zoom: 50%;" />

  在使用定向技术后，发现停顿明显减少。

- 统计

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507181345.jpg" alt="2020-05-07_181305" style="zoom:80%;" />

  发现RAW停顿有24个周期，停顿次数比没有定向技术时的72个少了很多。共执行了139个周期，比没有定向技术时的187个也少了很多，RAW停顿占周期总数的百分比为17.26619%，所有的停顿为36个周期，占周期总数的百分比为25.89928%，较没有定向技术时的44.91978%也减少了很多。

  
  $$
  吞吐率TP_2=\frac{102}{139\Delta{t}}
  $$
  
  $$
  加速比S_2=\frac{102\times{5\Delta{t}}}{139\Delta{t}}\approx{3.67}
  $$
  吞吐率和加速比是没有定向技术时的$\frac{187}{139}\approx{1.35}$倍。

  

### 5、采用静态调度方法重排指令序列，减少相关，优化程序

***PS：静态调度后的汇编程序见附录。***

- 载入代码

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507194134.jpg" alt="2020-05-07_193938" style="zoom:80%;" />

- 寄存器

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507194149.jpg" alt="2020-05-07_193959" style="zoom:80%;" />

  结果正确。

- 时钟周期图

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507194226.jpg" alt="2020-05-07_194041" style="zoom: 50%;" />

  在使用静态调度后，发现停顿几乎没有了。

- 统计

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507194203.jpg" alt="2020-05-07_194021" style="zoom:80%;" />

  发现RAW停顿有12个周期，停顿次数比没有静态调度时的72个少了很多。共执行了127个周期，比没有静态调度时的187个也少了很多，RAW停顿占周期总数的百分比为9.448819%，所有的停顿为24个周期，占周期总数的百分比为18.89764%，较没有静态调度时的44.91978%也减少了很多。

  
  $$
  吞吐率TP_3=\frac{102}{127\Delta{t}}
  $$
  
  $$
  加速比S_2=\frac{102\times{5\Delta{t}}}{127\Delta{t}}\approx{4.02}
  $$
  吞吐率和加速比是没有静态调度时的$\frac{187}{127}\approx{1.47}$倍。

  

### 6、对优化后的程序使用定向功能执行，与刚才执行结果进行比较，观察执行效率的不同。

- 寄存器

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507195018.jpg" alt="2020-05-07_194713" style="zoom:80%;" />

  结果正确。

- 时钟周期图

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507195031.jpg" alt="2020-05-07_194926" style="zoom:50%;" />

  在使用静态调度和分支技术后，发现所有的RAW停顿都没有了，只剩下了控制停顿。

- 统计

  <img src="https://gitee.com/wxy_666/images/raw/master/20200507195110.jpg" alt="2020-05-07_195000" style="zoom:80%;" />

  发现没有RAW停顿。共执行了115个周期，比没有静态调度和定向技术时的187个也少了非常多，RAW停顿占周期总数的百分比为0%，所有的停顿为12个周期，全都是控制停顿，占周期总数的百分比为10.43478%，较没有静态调度和定向技术时的44.91978%也减少了非常多，没有RAW停顿也说明这个静态调度是最优调度。

  
  $$
  吞吐率TP_4=\frac{102}{115\Delta{t}}
  $$
  
  $$
  加速比S_2=\frac{102\times{5\Delta{t}}}{115\Delta{t}}\approx{4.43}
  $$
  吞吐率和加速比是没有静态调度和定向技术时的$\frac{187}{115}\approx{1.63}$倍。

  

## 四、附录

### 1、初始的汇编代码

```assembly
.text
main:
ADDIU $r1,$r0,array1
ADDIU $r2,$r0,array2
ADDIU $r3,$r0,12
ADDIU $r7,$r0,0
loop:
LW $r4,0($r1)
LW $r5,0($r2)
MUL $r6,$r4,$r5
ADD $r7,$r7,$r6
ADDI $r1,$r1,4
ADDI $r2,$r2,4
ADDI $r3,$r3,-1
BGTZ $r3,loop
TEQ $r0,$r0
.data
array1: .word 1,2,3,4,5,6,7,8,9,10,11,12
array2: .word 1,2,3,4,5,6,7,8,9,10,11,12
```



### 2、经过静态调度后的汇编代码

```assembly
.text
main:
ADDIU $r1,$r0,array1
ADDIU $r2,$r0,array2
ADDIU $r3,$r0,12
ADDIU $r7,$r0,0
loop:
LW $r4,0($r1)
LW $r5,0($r2)
ADDI $r1,$r1,4
ADDI $r2,$r2,4
MUL $r6,$r4,$r5
ADDI $r3,$r3,-1
ADD $r7,$r7,$r6
BGTZ $r3,loop
TEQ $r0,$r0
.data
array1: .word 1,2,3,4,5,6,7,8,9,10,11,12
array2: .word 1,2,3,4,5,6,7,8,9,10,11,12
```

