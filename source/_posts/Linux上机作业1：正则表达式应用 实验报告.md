---
title:  Linux上机作业1：正则表达式应用 实验报告
categories:
  - [Linux,上机实验]
tags: [Linux,实验,正则表达式]
music:
  server: tencent
  type: song
  id: 618109
  autoplay: true
---

**本文是关于Linux中的文本处理三剑客（grep，sed，awk），以及正则表达式应用的一个样例，获取北京某时刻PM2.5的数据，然后进行处理，输出到csv文件中，并画图表展示。**



<!-- more -->



# Linux上机作业1：正则表达式应用 实验报告



## 一、题目要求：

​		**从因特网上搜索 Web 页，用 wget 获取网页，处理网页 html 文本数据，从中提取出当前时间点北京各监测站的 PM2.5 浓度，输出如下 CSV 格式数据：**
***2020 03 09 13:00:00, 海淀区万柳 ,73
2020 03 09 13:00:00, 昌平镇 ,67
2020 03 09 13:00:00, 奥体中心 ,66
2020 03 09 13:00:00, 海淀区万柳 ,73
2020 03 09 13:00:00, 昌平镇 ,73
2020 03 09 13:00:00, 奥体中心 ,75***
​		**撰写实验报告，要求：写出对数据的分析和处理思路，列出各个处理步骤并给出解释。**

## 二、实验步骤：

1. 从因特网上搜索 Web 页，找到与含有北京各监测站的 PM2.5 浓度的网站，我找到了***绿色呼吸网（http://www.pm25.com/city/beijing.html）***，网站如下：

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203352.jpg" alt="1" style="zoom:33%;" />

2. 使用***Xshell***登录到Ubuntu服务器：

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203420.jpg" alt="2" style="zoom:33%;" />

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203429.jpg" alt="3" style="zoom:33%;" />

3. 使用***wget***命令获取该网页：

   ```shell
   wget http://www.pm25.com/city/beijing.html
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203525.jpg" alt="4" style="zoom: 80%;" />

4. 使用***cat***命令查看该网页的内容：

   ```shell
   cat beijing.html | more
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203554.jpg" alt="5" style="zoom:80%;" />

   我们关注的内容：

   ​		①数据更新的时间：

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203608.jpg" alt="6" style="zoom:67%;" />

   ​		②各监测点PM2.5浓度数据：

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203617.jpg" alt="7" style="zoom:50%;" />

5. 发现时间的地方有个***“更新时间：”***，监测点名称的地方都有***“pjadt_location”***，而PM2.5浓度的地方都有***“pjadt_pm25”***。根据这个特性，先使用***awk***命令将需要的行保留下来。下面先进行编写***1.awk***：

   ```shell
   vim 1.awk
   ```

   ![8](https://gitee.com/wxy_666/images/raw/master/20200331203629.jpg)

   运行以下命令，对所需行进行过滤：

   ```shell
   cat beijing.html | awk -f 1.awk | more
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203639.jpg" alt="9" style="zoom:50%;" />

   发现除了我们想要的行还多出了这几行：

   ![10](https://gitee.com/wxy_666/images/raw/master/20200331203656.jpg)

   经过观察，发现***“PM2.5”***浓度这一行与我们所需的行的区别是，我们所需的行有***μg***，而***“PM2.5”***浓度这一行没有：

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203705.jpg" alt="11" style="zoom:50%;" />

   我们重新对***“1.awk”***进行编辑，直接将***“监测站点”***这一行排除，并且对***“PM2.5”***浓度这一行采用额外的过滤规则:

   ![12](https://gitee.com/wxy_666/images/raw/master/20200331203718.jpg)

   重新运行以下命令，对所需行进行过滤：

   ```shell
   cat beijing.html | awk -f 1.awk | more
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203729.jpg" alt="13" style="zoom:50%;" />

   发现已经筛选出了所需要的行。

6. 现在再利用***sed***命令将***html标签”<>“***中的内容和***“更新时间：”***这个无用的信息删除：

   ```shell
   cat beijing.html | awk -f 1.awk | sed -e 's/<[^<>]*>//g' -e 's/更新时间：//g' | more
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203744.jpg" alt="14" style="zoom:50%;" />

   发现已经只剩余我们想要的数据。

7. 但是这些数据不在同一行，且没有明显特征，无法进行***awk***命令，因此先使用***tr***命令将这些行合并为一行，以空格分隔：

   ```shell
   cat beijing.html | awk -f 1.awk | sed -e 's/<[^<>]*>//g' -e 's/更新时间：//g' | tr '\n' ' ' | more
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203757.jpg" alt="15" style="zoom:50%;" />

8. 最后利用***awk***命令将所需内容规格化输出即可，先编辑***“2.awk”***：

   ```shell
   vim 2.awk
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203807.jpg" alt="16" style="zoom:80%;" />

   利用***for***循环输出，***NF***为列数，刚好循环$$(NF-2)/4$$次，第一个***%s***为***日期***，第二个***%s***为***时间***，第三个***%s***为***监测点名称***，第四个***%s***为***PM2.5浓度***，再运行以下***awk***命令，即可得到格式化的输出：

   ```shell
   cat beijing.html | awk -f 1.awk | sed -e 's/<[^<>]*>//g' -e 's/更新时间：//g' | tr '\n' ' ' | awk -f 2.awk  | more
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203819.jpg" alt="17" style="zoom: 50%;" />

   发现输出已经符合题目要求。

9. 将结果重定向到文件***“beijing.csv”***：

   ```shell
   cat beijing.html | awk -f 1.awk | sed -e 's/<[^<>]*>//g' -e 's/更新时间：//g' | tr '\n' ' ' | awk -f 2.awk  > beijing.csv
   vim beijing.csv
   ```

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203839.jpg" alt="18" style="zoom:50%;" />

   <img src="https://gitee.com/wxy_666/images/raw/master/20200331203853.jpg" alt="19" style="zoom:80%;" />

10. 将***beijing.csv***发送到电脑，并将编码转为***ANSI***：

<img src="https://gitee.com/wxy_666/images/raw/master/20200331203903.jpg" alt="20" style="zoom: 67%;" />

11. 由于不同时间的数据有所不同，因此我的过滤语句考虑了不同时间点的情况***（北京一共有12个监测点，有时有的监测点没有数据，因此是只有11个监测点的数据）***，直接运行以下命令就可以直接将数据导出为***beijing.csv***，以下为另一时间点的数据情况：

    ```shell
    wget http://www.pm25.com/city/beijing.html
    cat beijing.html | awk -f 1.awk | sed -e 's/<[^<>]*>//g' -e 's/更新时间：//g' | tr '\n' ' ' | awk -f 2.awk  > beijing.csv
    ```

    <img src="https://gitee.com/wxy_666/images/raw/master/20200331203916.jpg" alt="21" style="zoom:67%;" />

## 三、实验总结

到此实验结束，本博客仅用于纪录本次linux实验用，转载请注明出处。希望对你的linux有所帮助。