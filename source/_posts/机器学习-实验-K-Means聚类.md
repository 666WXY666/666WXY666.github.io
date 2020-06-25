---
title: 机器学习 实验 K-Means聚类
categories:
  - [机器学习,实验]
tags: [机器学习,实验,K-Means,Python,聚类]
mathjax: true
---

本文是关于经典聚类算法K-Means的代码实现。



<!-- more -->



## 一、实验目标

数据说明：目标是对 cluster.dat 里的数据进行聚类分析。其中，cluster.dat 包含了若干二维输入数据（但不包含其输出）。

- 使用 K-means 模型进行聚类，尝试使用不同的类别个数 K，并分析聚类结果。 

- 按照 8:2 的比例随机将数据划分为训练集和测试集，至少尝试 3 个不同的 K 值，并画出不同 K 下的聚类结果，及不同模型在训练集和测试集上的损失。对结果进行讨论，发现能解释数据的最好的 K值。

## 二、实验环境

- 语言：Python 3.7（Anaconda3）
- IDE：PyCharm 2020.1.1 (Professional Edition)
- Packages：
  - numpy：1.18.1
  - matplotlib：3.1.3

## 三、算法原理

聚类是一种典型无监督学习，K-means算法是聚类的经典算法。目标是将原始数据集划分为k个簇，最小化损失函数（目标函数）是：
$$
SSE=\sum_{n=1}^{N}\sum_{k=1}^{K}r_{nk}dist(x_n-\mu_k)
$$

- $\mu_k$表示簇$C_k$的中心点（或其他能代表$C_k$的点）。
- $x_n$被划分到簇$C_k$则$r_{nk}=1$，否则$r_{nk}=0$。
- 目标是找到簇的中心点$\mu_k$及簇的划分$r_{nk}$使得目标函数SSE最小。

要解决上述问题就需要遍历所有可能的簇划分，显然这是不合适的。K-means算法使用了贪心策略求一个近似解，具体步骤如下：

1. 将全部数据随机分为k类，计算每类的重心作为初始点。
2. 计算所有数据点与各个簇中心之间的距离，将数据点划到与它距离最近的簇中。
3. 根据簇中已有的样本点，重新计算簇中心（一般使用重心）。
4. 重复2、3，直到数据点的簇划分不在变化或者达到了规定的最大迭代次数。

这是k-means算法的基本步骤，但是，这个算法有个很严重的问题，就是在将数据点划到与它距离最近的簇后，由于初始簇心选择不当，可能产生空簇，导致计算簇中心无法进行（簇的size=0，除数为0），我的解决方法是在计算簇心时，如果簇的size=0就先忽略，后面单独处理。计算完非空簇心后，依次选取与自己簇中心最远、次远……的点（因为距离自己的簇心越远，这个点分到该簇的概率越低）作为空簇的簇心，直到没有空簇，即所有的簇都有簇心，然后继续算法。

## 四、算法流程图

这只是算法函数（algorithm）和其他一些部分的流程图，不是整个程序的流程图，整个程序要更复杂。

<img src="https://gitee.com/wxy_666/images/raw/master/20200524095524.svg" alt="程序流程图" style="zoom: 67%;" />

## 五、实验结果及分析

1. 输入k的范围是\[2,10\]，测试集所占比例为0.2，最大迭代次数为20。

   <img src="https://gitee.com/wxy_666/images/raw/master/20200524104752.jpg" alt="2020-05-24_104724" style="zoom:50%;" />

2. 聚类结果

   |                             k=2                              |                             k=3                              |                             k=4                              |
   | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
   | <img src="https://gitee.com/wxy_666/images/raw/master/20200524104824.jpg" alt="2020-05-24_104436" style="zoom:67%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200524104838.jpg" alt="2020-05-24_104447" style="zoom:67%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200524104853.jpg" alt="2020-05-24_104456" style="zoom: 67%;" /> |
   |                           **k=5**                            |                           **k=6**                            |                           **k=7**                            |
   | <img src="https://gitee.com/wxy_666/images/raw/master/20200524104910.jpg" alt="2020-05-24_104505" style="zoom:67%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200524104921.jpg" alt="2020-05-24_104521" style="zoom:67%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200524104933.jpg" alt="2020-05-24_104543" style="zoom:67%;" /> |
   |                           **k=8**                            |                           **k=9**                            |                           **k=10**                           |
   | <img src="https://gitee.com/wxy_666/images/raw/master/20200524104954.jpg" alt="2020-05-24_104555" style="zoom:67%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200524105001.jpg" alt="2020-05-24_104607" style="zoom:67%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200524105008.jpg" alt="2020-05-24_104617" style="zoom:67%;" /> |

   

3. k从2\~10的数据集、训练集和测试集的SSE如图：

   <img src="https://gitee.com/wxy_666/images/raw/master/20200524105029.jpg" alt="2020-05-24_104656" style="zoom: 67%;" />

4. 可以发现k=2\~4时SSE下降较快，k=4\~10时下降较慢，由于我们的目标是使SSE减小，因此由图可以得出k=4为解释数据较好的k。并且在k=2时，重复实验甚至会出现完全不同的聚类结果，说明k=2太小。在k\>=6之后，SSE基本不下降，说明k再加大没有多大意义。

## 六、附录

kmeans.py：

0. 基本配置、全局参数

   ```python
   """
   @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
   @Project: kmeans
   @Description: k-means算法
   @Version: 1.0
   @Author: 苇名一心
   @Date: 2020-05-22 21:25
   @LastEditors: 苇名一心
   @LastEditTime: 2020-05-22 21:25
   """
   import random
   import sys
   
   import matplotlib.pyplot as plt
   import numpy as np
   from sklearn.model_selection import train_test_split
   
   ########################################################
   # 全局变量
   ########################################################
   # 显示中文标签
   plt.rcParams['font.sans-serif'] = ['SimHei']
   # 显示负号
   plt.rcParams['axes.unicode_minus'] = False
   
   # 簇个数范围
   k_min = 1
   k_max = 1
   max_iteration = 10  # 最大迭代次数
   test_rate = 0.2  # 训练集所占比例
   all_point_num = 0
   data_x = []  # 点的x坐标列表
   data_y = []  # 点的y坐标列表
   data_SSE_list = []  # 数据集损失目标函数列表
   train_SSE_list = []  # 训练集损失目标函数列表
   test_SSE_list = []  # 测试集损失目标函数列表
   
   ```

   

1. 读入数据

   ```python
   ########################################################
   # 读入数据
   ########################################################
   def read_data(path):
       global all_point_num
       global test_rate
       global max_iteration
       global k_min
       global k_max
       data = open(path)  # 打开数据文件
       for line in data:
           # 将数据文件的每一行按空格分隔，分别添加到x,y列表
           data_x.append(float(line.split()[0]))
           data_y.append(float(line.split()[1]))
           all_point_num += 1
       print("请输入k的范围（空格分隔，例如2 5，代表闭区间[2,5]）：", end="")
       k_min, k_max = map(int, input().split())
       if k_min > k_max or k_min < 1 or k_max < 1:
           print("ERROR: 簇的个数输入错误！")
           sys.exit(1)
       print("请输入测试集所占比例：", end="")
       test_rate = float(input())
       if test_rate < 0 or test_rate > 1:
           print("ERROR: 测试集所占比例输入错误！")
           sys.exit(1)
       print("请输入最大迭代次数：", end="")
       max_iteration = int(input())
       if max_iteration < 0:
           print("ERROR: 最大迭代次数输入错误！")
           sys.exit(1)
   
   ```

   

2. 算法计算

   ```python
   ########################################################
   # 算法
   ########################################################
   def algorithm(x, y, k):
       # 初始化
       n = 0  # 迭代次数
       SSE = 0  # 损失（目标）函数
       point_array = np.array([x, y])  # 生成点的numpy数组，例如三个点(1，-1),(2，-2),(3，-3)生成[[ 1  2  3 ][ -1 -2 -3 ]]
       point_num = point_array.shape[1]  # 获取点的个数，所给的数据集为1000个点，取0.8为800个
       # 如果点的个数<簇的个数，则报错异常退出
       if point_num < k:
           print("ERROR: 点的个数<簇的个数！")
           sys.exit(1)
       distance = np.zeros(k)  # 初始化k维0向量，用来存储这个点到的k个簇中心的距离
       point_distance = np.zeros(point_num)  # 初始化point_num维0向量，用来存储每个点到其簇中心的距离
       center = np.zeros((2, k))  # 生成2*k的零矩阵，初始化k个簇的中心点，后面将先计算每个簇的重心作为初始簇中心
       point_k1 = np.arange(0, k, 1)  # 先生成0~k-1的数组，保证每个簇至少有一个点
       point_k2 = np.random.randint(0, k, size=point_num - k)  # 将剩下的点随机分到任意一个簇，返回长度为point_num-k的向量，每个为0~k-1的随机整数
       point_k = np.concatenate((point_k1, point_k2))  # 将前两个数组合成为一个
       np.random.shuffle(point_k)  # 最后再打乱一次point_k数组，保证随机性
       point_k_bak = point_k.copy()  # point_k的备份，用于判断前后两次迭代是否发生变化
       # 输出相关信息
       print("点个数为：", point_num, sep="")
       # 开始K-means算法的迭代
       # 只要迭代次数没有超过最大迭代次数上限max_iteration并且两次迭代的结果还有变化，就继续迭代
       while n <= max_iteration:
           # 计算每个簇的中心
           size = np.bincount(point_k, minlength=k)  # 计算每个簇的规模，k维向量，每一维为每个簇里点的个数
           for i in range(k):  # 对于k个簇中的每一个簇i
               # 不是空簇，防止出现除数为0，空簇下面单独处理
               if size[i] != 0:
                   # point_sum是一个二维向量，代表i簇中的所有点的x,y坐标值的和
                   point_sum = np.zeros(2)  # 初始化为0
                   # 计算i簇中的所有点的x,y坐标值的和
                   for point in range(point_num):  # 对于每一个点point
                       if point_k[point] == i:  # 如果这个点point属于簇i
                           point_sum = point_sum + point_array[:, point]  # 将这个点的x,y坐标加到point_sum上
                           # note: array[:, i]就是取array的第i列，刚好就是这个点
                   # 求平均数，因此要/这个簇中点的个数size[i]
                   # 将计算出的簇中心存在center矩阵中的第i列，代表第i个簇的中心点
                   center[:, i] = point_sum / size[i]
           # 对所有的空簇单独处理
           # 处理方式为把与自己所在的簇中心距离最大的点作为空簇的簇中心
           for c in np.where(size == 0)[0]:
               # 将距离最大的点的所在簇改为空簇的簇号
               point_k[np.argmax(point_distance)] = c
               # 将空簇中心改为这个点
               center[:, c] = point_array[:, np.argmax(point_distance)]
   
           # 将每一个点分到与簇中心最近的簇
           for point in range(point_num):  # 对于每一个点point
               for i in range(k):  # 对于k个簇中的每一个簇i
                   # 计算该点point到该簇i的距离
                   # note: 使用矩阵的2范式，来计算欧氏距离
                   #  point_array[:, point] - center[:, i]得到向量[p_x-c_x, p_y-c_y]
                   #  对该向量求2范式刚好是欧式距离sqrt((p_x-c_x)^2+(p_y-c_y)^2)
                   distance[i] = np.linalg.norm(point_array[:, point] - center[:, i])
               # 使用numpy的argmin()返回distance中最小值的下标，也就是点point到簇中心距离最小的簇
               point_k[point] = np.argmin(distance)
               # 将该点到其簇中心的距离记录下来
               point_distance[point] = distance[point_k[point]]
   
           # 迭代次数+1
           n += 1
           # 判断两次迭代是否有变化，没有变化就跳出迭代循环
           if (point_k == point_k_bak).all():
               break
           # 将point_k备份
           point_k_bak = point_k.copy()
           # 输出每次迭代目标函数值
           SSE = np.sum(point_distance)
           print("n=", n - 1, "，SSE=", SSE, sep="")
   
       # 输出相关信息
       print("总迭代次数为：", n - 1, sep="")
       print("每个簇的中心：", sep="")
       for i in range(k):
           print("(", center[0, i], ",", center[1, i], ")", sep="")
       print("===================================================")
   
       return SSE, point_k
   
   ```

   

3. 画图展示

   ```python
   ########################################################
   # 画图展示
   ########################################################
   # 根据每个点所在的簇，获取点的颜色，返回一个列表
   def get_color_list(point_k, k):
       # 随机生成k个颜色
       RGB = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
       colors = []
       i = 0
       while i < k:
           color = ""
           for j in range(6):
               color += RGB[random.randint(0, 14)]
           # 只有随机产生的颜色不相同，才加到colors中，颜色个数+1
           if "#" + color not in colors and color != "FFFFFF":
               colors.append("#" + color)
               i += 1
       # 对每个点，根据point_k中记录的点所在的簇，将颜色添加到列表中
       color_list = []
       for c in point_k:
           color_list.append(colors[c])
       return color_list
   
   
   # 画散点图展示聚类结果（数据集，训练集、测试集）
   def show(x, y, result, x1, y1, result1, x2, y2, result2, k):
       # 数据集图
       plt.subplot(131)
       # 设置标题
       plt.title("K-Means数据集")
       # 绘制散点图
       # note: scatter函数支持传入颜色列表，对每一个点使用列表相应下标对应的颜色
       plt.scatter(x, y, c=get_color_list(result, k))
   
       # 训练集图
       plt.subplot(132)
       # 设置标题
       plt.title("K-Means训练集")
       # 绘制散点图
       plt.scatter(x1, y1, c=get_color_list(result1, k))
   
       # 测试集图
       plt.subplot(133)
       # 设置标题
       plt.title("K-Means测试集")
       # 绘制散点图
       plt.scatter(x2, y2, c=get_color_list(result2, k))
       # 展示散点图
   
       plt.show()
   
   
   # 画折线图展示SSE对比
   def show_SSE():
       # 设置标题
       plt.title("K-Means在不同k下的损失")
       # 设置x轴坐标
       plt.xlim(k_min - 1, k_max + 2)
       plt.xlabel("k")  # 设置x轴标注
       plt.ylabel("SSE")  # 设置y轴标注
       # 绘制K-Means在不同k下训练集和测试集的损失
       plt.plot(range(k_min, k_max + 1), data_SSE_list, lw=1, c='blue', marker='v', ms=4, label='数据集')
       plt.plot(range(k_min, k_max + 1), train_SSE_list, lw=1, c='red', marker='s', ms=4, label='训练集')
       plt.plot(range(k_min, k_max + 1), test_SSE_list, lw=1, c='green', marker='o', label='测试集')
       plt.legend()  # 图例
       plt.show()
   
   ```

   

4. 开始运行

   ```python
   ########################################################
   # 开始运行
   ########################################################
   # 读入数据
   read_data("cluster.dat")
   # 划分训练集和测试集
   train_x, test_x, train_y, test_y = train_test_split(data_x, data_y, test_size=test_rate, random_state=1)
   # 对k从2~5进行聚类
   for k_num in range(k_min, k_max + 1):
       print("###################################################")
       print("簇个数为：", k_num, sep="")
       # 数据集
       print("数据集：")
       data_SSE, data_result = algorithm(data_x, data_y, k_num)
       data_SSE_list.append(data_SSE)
       # 训练集
       print("训练集：")
       train_SSE, train_result = algorithm(train_x, train_y, k_num)
       train_SSE_list.append(train_SSE)
       # 测试集
       print("测试集：")
       test_SSE, test_result = algorithm(test_y, test_y, k_num)
       test_SSE_list.append(test_SSE)
       # 输出平均SSE
       print("数据集最终平均损失函数AVG_SSE：", data_SSE / all_point_num)
       print("训练集最终平均损失函数AVG_SSE：", train_SSE / (all_point_num * (1 - test_rate)))
       print("测试集最终平均损失函数AVG_SSE：", test_SSE / (all_point_num * test_rate))
       # 画图
       show(data_x, data_y, data_result, train_x, train_y, train_result, test_x, test_y, test_result, k_num)
   # 画图展示SSE
   show_SSE()
   
   ```

   