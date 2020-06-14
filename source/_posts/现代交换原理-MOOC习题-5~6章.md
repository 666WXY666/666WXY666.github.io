---
title: 现代交换原理 MOOC习题 5~6章
categories:
  - [现代交换原理,习题]
tags: [现代交换原理,习题,易错点,网课,MOOC]
mathjax: true
---

自己随便整理了一下在学习“现代交换原理”网课时遇到的一些习题，易错点之类的。接上文[现代交换原理 MOOC习题 1~4章](/2020/05/07/现代交换原理-MOOC习题-1~4章/)。



<!-- more -->



## 第五章 信令与协议

<img src="https://gitee.com/wxy_666/images/raw/master/20200518094712.jpg" alt="2020-05-18_094257" style="zoom:80%;" />

{% blockquote %}

通话所需的媒体资源可以理解为控制呼叫的接续和拆线和通信网管理和维护的信息资源。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200518094755.png" alt="QQ图片20200518094332" style="zoom:80%;" />

{% blockquote %}

通信网中为用户建立连接和拆除连接，需要网中各个相关设备协调工作，为此在各个设备间传输的控制信号和规约称为信令。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200518095101.jpg" alt="2020-05-18_094308" style="zoom:80%;" />

{% blockquote %}

路由标记供MTP3级进行消息寻址和路由，而MTP3的路由标记是由信令点编码实现的。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200518095738.jpg" alt="20200518094345" style="zoom:80%;" />

{% blockquote %}

4. 电信网（现代通信网）的三大支撑网络：同步网，管理网，信令网。

5. SIP与普通电话用户进行通话时要进行协议转换，SIP->七号信令。SIP协议中SDP的媒体端口号由网关（中继网关）保存。中继网关是分组网和电路网边界设备，实现不同媒体协议的转换。

   注意中继网关（Trunk Gateway）跟代理服务器（Proxy Server）不是一个东西。

   中继网关也叫落地设备，简称TG。用于VOIP网络电话系统或呼叫中心、软交换等，将模拟信号与数字信号相互转换。是voip解决方案的重要组成部分，它位于NGN网络的边缘接入层，连接PSTN和voip网络，实现IP包转TDM的功能。 承载着IP域与电路域的语音汇接任务。

6. 常识问题。

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200518095251.jpg" alt="2020-05-18_094440" style="zoom:80%;" />

{% blockquote %}

7. 显然错误，MTP1的通路也要经过TST交换网络。

8. 错误，不多解释。

9. 模拟用户信令：主要包括用户向交换机发送的监视信令和选择信令，交换机向用户发送的铃流和忙音等音信号。***用于PSTN***。

   - 状态信令：用户线的忙闲状态，如主、被叫的摘、挂机状态；
   - 地址信令：主叫所拨的被叫号码，直流脉冲或双音频；
   - 铃流和信号音：交换机向用户发送的信号。振铃信号、信号音、来电显示的FSK信号；

   数字用户信令：通过消息的形式传送以上信息，***用于ISDN用户***。例如：DSS1 30B+D
   
   在用户线上传输的信令叫用户线信令，No.7信令是专为电话局之间交互控制信息而设计的，所以是局间信令，也就是在中继线上交互的信令，以数字信号方式传送。它跟能否携带电话号码没关系。

{% endblockquote %}



## 第六章 移动交换

<img src="https://gitee.com/wxy_666/images/raw/master/20200531205352.jpg" alt="2020-05-31_205201" style="zoom:80%;" />

{% blockquote %}

MSC是移动交换中心，主要功能有：

1. 信道的管理和分配；
2. 呼叫的处理和控制；
3. 用户位置信息的登记与管理；
4. 越区切换和漫游的控制；
5. 号码的登记和管理；
6. 服务类型的鉴权；
7. 用户的鉴权；
8. 提供链路接口；

{% endblockquote %}

<img src="https://gitee.com/wxy_666/images/raw/master/20200531210710.jpg" alt="2020-05-31_205837" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200531210722.jpg" alt="2020-05-31_210158" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200531210742.jpg" alt="2020-05-31_210414" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200531210756.jpg" alt="2020-05-31_210611" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200531210809.jpg" alt="2020-05-31_210653" style="zoom:80%;" />

{% blockquote %}

相关签约信息及4G位置信息不是存在MME中，而是HSS。

{% endblockquote %}



{% folding 所有的习题： %}

[现代交换原理 MOOC习题 1~4章](/2020/05/07/现代交换原理-MOOC习题-1~4章/)

[现代交换原理 MOOC习题 5~6章](/2020/05/18/现代交换原理-MOOC习题-5~6章/)

{% endfolding %}

