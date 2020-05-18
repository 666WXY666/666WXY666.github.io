---
title: 现代交换原理 MOOC习题 1~4章
categories:
  - [现代交换原理,习题]
tags: [现代交换原理,习题,易错点,网课,MOOC]
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

{% blockquote %}

常识知识。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507120512.jpg" alt="2020-05-07_120231" style="zoom:80%;" />

{% blockquote %}

示意图：

<img src="https://gitee.com/wxy_666/images/raw/master/20200518151446.jpg" alt="3" style="zoom: 50%;" />

B+C->A：

<img src="https://gitee.com/wxy_666/images/raw/master/20200518151822.jpg" alt="第3章 电路交换" style="zoom: 50%;" />

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507120522.jpg" alt="2020-05-07_120244" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200507120530.jpg" alt="2020-05-07_120310" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200507120538.jpg" alt="2020-05-07_120324" style="zoom:80%;" />

{% blockquote %}

这三个题都是基础知识。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507120551.jpg" alt="2020-05-07_120336" style="zoom:80%;" />

{% blockquote %}

直连？应该是可以实现不经过交换设备的语音通信。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507120610.jpg" alt="2020-05-07_120432" style="zoom:80%;" />

{% blockquote %}

用户模块的处理机与区域处理机相连，区域处理机又与其他区域处理机和中央处理机相连。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507120618.jpg" alt="2020-05-07_120449" style="zoom:80%;" />

{% blockquote %}

周期级程序是按一定周期进行的各种扫描和驱动，例如200ms摘挂机扫描。开通业务应该是基本级程序负责。

{% endblockquote %}



## 第四章 分组交换

<img src="https://gitee.com/wxy_666/images/raw/master/20200507121042.jpg" alt="2020-05-07_120658" style="zoom:80%;" />

{% blockquote %}

TCP连接的建立不是路由器基本功能。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507121049.jpg" alt="2020-05-07_120714" style="zoom:80%;" />

{% blockquote %}

ISDN全称是综合业务数字网，不需要支持模拟业务。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507121056.jpg" alt="2020-05-07_120733" style="zoom:80%;" />

{% blockquote %}

ATM 适配层（AAL）主要负责百 ATM 层与高层之间的信元转发过程。从上层收到信息后，AAL 将数据分割成 ATM 信元；从 ATM 层收到信息后，AAL 必须重度新组合数据形成一专个上层能够辨识的格式。上述操作称之为分段与重组（SAR），它是 AAL 的主要任务。此外不同的 AAL 支持属不同的流量或服务类型。

{% endblockquote %}



<img src="https://gitee.com/wxy_666/images/raw/master/20200507121103.jpg" alt="2020-05-07_120808" style="zoom:80%;" />

{% blockquote %}

MPLS标记可以任意级，标记栈实现多级标记，Label可以有多个。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507121110.jpg" alt="2020-05-07_120850" style="zoom:80%;" />

{% blockquote %}

A、MPLS和ATM和帧中继都是路由选择和数据转发分开进行，都是面向连接的，但是不需要为每一次通信业务都建立新的连接；而传统IP网是无连接的，路由选择和数据转发同时进行。

B、MPLS和ATM都是虚连接，使用时连接，不需要时可以拆除连接，不是永久连接。

C、MPLS使用的是Label标记方式的逻辑连接，ATM是VPI/VCI方式的逻辑连接，都是逻辑虚连接。

D、MPLS通过LDP等协议，在LSR和LER、LSR和LSR之间完成标记信息的分发，形成与FEC对应的LSP路径。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507121116.jpg" alt="2020-05-07_121004" style="zoom:80%;" />

{% blockquote %}

同上一个题的D选项。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507121127.jpg" alt="2020-05-07_121012" style="zoom:80%;" />

{% blockquote %}

1. 入口LER接收分组，完成第三层功能，判定分组所属的FEC，并给分组加上标记形成MPLS标记分组。

2. LSR依据分组上的标记以及标记转发表通过交换单元对其进行转发，不再进行任何第三层处理，也就是只处理标记部分，不处理IP分组头。
3. 出口 LER 将分组中的标记去掉后转发至目的地。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200507121133.jpg" alt="2020-05-07_121029" style="zoom:80%;" />

{% blockquote %}

MPLS与ATM/FR类似，标记都是本地（逐段）有效的，需要路由器进行标记转换。

{% endblockquote %}



{% folding 未完待续…… %}

所有的习题：

[现代交换原理 MOOC习题 1~4章](/2020/05/07/现代交换原理-MOOC习题-1~4章/)

[现代交换原理 MOOC习题 5~章](/2020/05/18/现代交换原理-MOOC习题-5~章/)

{% endfolding %}

