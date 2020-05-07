---
title: 现代交换原理 MOOC习题 1~4章
categories:
  - [现代交换原理,习题]
tags: [现代交换原理,习题,易错点,网课,MOOC]
music:
  server: tencent
  type: song
  id: 1797389
  autoplay: true
mathjax: true
---

自己随便整理了一下在学习“现代交换原理”网课时遇到的一些习题，易错点之类的。



<!-- more -->



## 第一章 交换概论

<img src="https://gitee.com/wxy_666/images/raw/master/20200507105053.jpg" alt="2020-05-07_104537" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507105117.jpg" alt="2020-05-07_104811" style="zoom:80%;" />

{% blockquote %}

都是类似的道理，话音业务需要实时、高可靠、恒定速率，因此电路交换适合，异步显然不适合于话音业务。

{% endblockquote %}



<img src="https://gitee.com/wxy_666/images/raw/master/20200507105241.jpg" alt="2020-05-07_104943" style="zoom:80%;" />

{% blockquote %}

电路交换是先建立好链路，在进行的交换。路由选择是先进行的，信息转发在建立好的链路上进行。分组交换是上面描述的特点。

{% endblockquote %}



<img src="https://gitee.com/wxy_666/images/raw/master/20200507105428.jpg" alt="2020-05-07_105021" style="zoom:80%;" />

{% blockquote %}

通信网三要素是：**交换设备**、**传输设备**、**终端设备**。

交换网络的三要素是：**交换单元**、不同交换单元间的**拓扑连接**、**控制方式**。

{% endblockquote %}



## 第二章 交换网络

<img src="https://gitee.com/wxy_666/images/raw/master/20200507110011.jpg" alt="2020-05-07_110001" style="zoom:80%;" />

{% blockquote %}

交换单元的端口类型有两种：控制端口和状态端口。

{% endblockquote %}



<img src="https://gitee.com/wxy_666/images/raw/master/20200507110554.jpg" alt="2020-05-07_110356" style="zoom:80%;" />

{% blockquote %}

T接线器：

- 话音存储器（SM）：固定每个存储单元8bit存话音，存储单元的数量m就是时隙数m。

- 控制存储器（CM）：存储单元大小为$\log_2{m}$，所以时隙数一般都是2的幂次，存储单元的数量m也是时隙数m。

{% endblockquote %}



<img src="https://gitee.com/wxy_666/images/raw/master/20200507110608.jpg" alt="2020-05-07_110547" style="zoom:80%;" />

{% blockquote %}

S接线器没有话音存储器，控制存储器（CM），可以把S接线器的所有的控制存储器看成$m\times{n}$个方格，m为时隙数，n为入（出）线数：

- S接线器所含CM的数量就是入（出）线数n，也就是一列为一个CM，共有n列。
- 每个CM所含的存储单元的数量为入（出）线的时隙数m，也就是每个格代表一个存储单元，每个CM有m个存储单元，m行。
- 每个存储单元的大小为$\log_2{m}$bit。

{% endblockquote %}



<img src="https://gitee.com/wxy_666/images/raw/master/20200507114923.jpg" alt="2020-05-07_114828" style="zoom:80%;" />

{% blockquote %}

$N\times{N}$的Banyan网络需要$k=\log_2{N}$级，如果要使用$2\times{2}$的交换单元构建，那么每层就需要$\frac{N}{2}$个交换单元，k层共需要$k\times{\frac{N}{2}}=\frac{N}{2}\times{\log_2{N}}$，如果是M层的话，则需要$m\times{\frac{N}{2}\times{\log_2{N}}}$个$2\times{2}$的交换单元。

因此这个题需要$3\times{\frac{8}{2}\times{\log_2{8}}}=36$个$2\times{2}$的交换单元。

{% endblockquote %}



## 第三章 电路交换

<img src="https://gitee.com/wxy_666/images/raw/master/20200507120505.jpg" alt="2020-05-07_120218" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507120512.jpg" alt="2020-05-07_120231" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507120522.jpg" alt="2020-05-07_120244" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507120530.jpg" alt="2020-05-07_120310" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507120538.jpg" alt="2020-05-07_120324" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507120551.jpg" alt="2020-05-07_120336" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507120610.jpg" alt="2020-05-07_120432" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507120618.jpg" alt="2020-05-07_120449" style="zoom:80%;" />



## 第四章 分组交换

<img src="https://gitee.com/wxy_666/images/raw/master/20200507121042.jpg" alt="2020-05-07_120658" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507121049.jpg" alt="2020-05-07_120714" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507121056.jpg" alt="2020-05-07_120733" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507121103.jpg" alt="2020-05-07_120808" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507121110.jpg" alt="2020-05-07_120850" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507121116.jpg" alt="2020-05-07_121004" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507121127.jpg" alt="2020-05-07_121012" style="zoom:80%;" />



<img src="https://gitee.com/wxy_666/images/raw/master/20200507121133.jpg" alt="2020-05-07_121029" style="zoom:80%;" />



{% folding 未完待续…… %}

所有的习题：

[现代交换原理 MOOC习题 1~4章](https://666wxy666.github.io/2020/05/07/现代交换原理-MOOC习题-1~4章/)

{% endfolding %}

