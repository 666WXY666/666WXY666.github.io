---
title: 机器学习 实验 RNN 为baby起名字
categories:
  - [机器学习,实验]
tags: [机器学习,实验,RNN,Python,起名字]
mathjax: true
---

本文是关于经典RNN的应用为baby起名字的代码实现。



<!-- more -->



## 一、任务定义

**采用 RNN 为小 Baby 起个英文名字吧**

神经网络语言模型，即通过神经网络，计算一项自然语言（例如一条句子）的出现概率，或者根据上文中的词推断句子中某个词的出现概率。例如，下图采用了一个具有一个输入层、一个隐藏层和一个输出层的 MLP 网络，建模三元文法模型：

<img src="https://gitee.com/wxy_666/images/raw/master/20200605202820.png" alt="image-20200605202820810" style="zoom:80%;" />

本作业提供了8000多个英文名字，试训练一个环神经网络语言模型，进而给定若干个开始字母，由语言模型自动生成后续的字母，直到生成一个名字的结束符。从模型生成的名字中，挑选你最喜欢的一个，并采用一种可视化技术，绘制出模型为每个时刻预测的前5个最可能的候选字母。

事实上，你也可以给定结尾的若干个字母，或者随意给出中间的若干个字母，让 RNN  补全其它字母，从而得到一个完整的名字。因此，你也可以尝试设计并实现一个这样的 RNN 模型，从模型生成的名字中，挑选你最喜欢的一个，并采用可视化技术，绘制出模型为每个时刻预测的前5个最可能的候选字母。

## 二、输入输出

### 1、输入

- male和female数据集作为训练集。

  ***【PS】注意，两个数据集的格式必须是一行一个英文名字，不能有其他文字说明，在使用前请先将male.txt和female.txt中的文字说明删除，例如：***

  <img src="https://gitee.com/wxy_666/images/raw/master/20200605203846.jpg" alt="2020-06-05_203831" style="zoom:80%;" />

- 超参数总迭代次数，打印精度（每隔多少次迭代打印一次损失日志），绘图精度（每隔多少次迭代求和取平均作为一个数据点）。
- （类别，姓名的起始字母）对。

### 2、输出

- RNN神经网络模型。
- 该模型的损失等日志信息。
- 该模型的损失-\(迭代次数/画图精度)函数图像。
- 根据这个神经网络模型和输入的（类别，姓名的起始字母）对生成的姓名。

## 三、实验环境

硬件：

- 处理器：Intel i7 7700HQ
- 显卡：NVIDIA GeForce GTX 1050 Ti
- 内存：16GB

软件：

- 编程语言：

  Python 3.7（Anaconda3）

- 模块：

  - pytorch 1.5
  - numpy 1.18.1
  - matplotlib 3.1.3

- 编译器：

  PyCharm 2020.1.1 (Professional Edition)
  Build #PY-201.7223.92, built on April 30, 2020
  For educational use only.
  Runtime version: 11.0.6+8-b765.40 amd64
  VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o
  Windows 10 10.0
  GC: ParNew, ConcurrentMarkSweep
  Memory: 725M
  Cores: 8
  Registry: ide.balloon.shadow.size=0
  Non-Bundled Plugins: com.dubreuia, GrepConsole, Statistic, com.chrisrm.idea.MaterialThemeUI, org.intellij.gitee, com.mallowigi, com.wakatime.intellij.plugin, mobi.hsz.idea.gitignore, net.vektah.codeglance, tanvd.grazi, com.jetbrains.intellij.datalore, izhangzhihao.rainbow.brackets, cn.yiiguxing.plugin.translate, org.nik.presentation-assistant

## 四、方法描述

#### 1、数据集处理

对老师的male.txt和female.txt数据集进行处理，保证每行只能由一个姓名，不得出现其他类似下图的说明信息。

<img src="https://gitee.com/wxy_666/images/raw/master/20200605210431.png" alt="1" style="zoom:80%;" />

我们将行分割成数组, 并把 Unicode 转换成 ASCII 编码, 最后放进一个字典里 `{language: [names ...]}`

#### 2、创建网络

输出设定为下一个字母的概率，采样测试的时候，概率最大的输出字母被当做下一个输入。

输出层采用softmax函数，为了让网络更加有效工作，添加了第二个线性层o2o（在合并了隐藏层和输出层的后面）。还有一个 Dropout 层，使输入的部分值以给定的概率值随机的变成 0（这里概率取0.1）, 为了模糊输入以防止过拟合，在网络的最末端使用它，从而故意添加一些混乱和增加采样的多样化。

<img src="https://gitee.com/wxy_666/images/raw/master/20200605213206.jpg" alt="2020-06-05_213141" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200605213119.jpg" alt="28a4f1426695fb55f1f6bc86278f6547" style="zoom:80%;" />

#### 3、训练前的准备

首先读取文件，产生随机的（类别，文件行[也就是姓名]）对。对每一个时间点（也就是说在训练集中词的每个字母）网络的输入是（类别，当前字母，隐藏层状态），输出是（下一个字母，下一个隐藏层状态）。

因为在每一步，我们从当前的字母预测下一个字母，这样的字母对是在原有行中连续字母的集合，例如：

![img](https://gitee.com/wxy_666/images/raw/master/20200605210640.jpg)

类别张量是一个大小为$1\times{categories}$的one-hot tensor张量，在训练的每一个时间点把它提供给网络。

#### 4、开始训练

使用自动求导（autograd）辅助计算损失。循环调用train，每隔一段时间打印损失等Log，直到到达规定输入的迭代次数。在训练完成后绘制损失-\(迭代次数/画图精度)函数图像折线图，用于性能评估分析。

#### 5、测试采样

输入（类别，姓名起始字母）对，返回生成的姓名。

## 五、结果分析与性能评价

**PS: \[\]中的为每一次迭代的最可能的字母前五，如果为空，就是已经到达迭代终点。**

下面是100000次迭代的测试采样结果，可以发现生成的姓名非常好，完全符合日常的姓名样式，RNN神经网络性能很好。

<img src="https://gitee.com/wxy_666/images/raw/master/20200612151627.jpg" alt="2020-06-12_151534" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200612151702.jpg" alt="2020-06-12_151553" style="zoom:80%;" />

<img src="https://gitee.com/wxy_666/images/raw/master/20200612151715.jpg" alt="2020-06-12_151606" style="zoom:80%;" />

100次的因为迭代次数太少，网络非常不好，完全不能生成所需的姓名：

<img src="https://gitee.com/wxy_666/images/raw/master/20200612151824.jpg" alt="2020-06-12_151807" style="zoom:80%;" />

1000次还算可以接受：

<img src="https://gitee.com/wxy_666/images/raw/master/20200612151959.jpg" alt="2020-06-12_151926" style="zoom:80%;" />

如果是10000次迭代，基本能满足生成姓名的要求:

<img src="https://gitee.com/wxy_666/images/raw/master/20200612152344.jpg" alt="2020-06-12_152300" style="zoom:80%;" />

观察并对比不同迭代次数的损失-\(迭代次数/画图精度)函数折线图可以看出迭代次数越多损失越小，性能越好，且一开始损失下降较快，当迭代次数大到一定程度后，损失下降较慢。

|                            100次                             |                            1000次                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://gitee.com/wxy_666/images/raw/master/20200605215413.jpg" alt="2020-06-05_215151" style="zoom:80%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200605215423.jpg" alt="2020-06-05_215250" style="zoom:80%;" /> |
|                         **10000次**                          |                         **100000次**                         |
| <img src="https://gitee.com/wxy_666/images/raw/master/20200605215931.jpg" alt="2020-06-05_215459" style="zoom:80%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200605214735.jpg" alt="2020-06-05_202039" style="zoom:80%;" /> |

查看并对比不同迭代次数的损失日志输出，很明显能发现最大的区别就是训练时间。可以看出迭代次数越多花费时间越多，所需的电脑性能显然也需要更高，100次和1000次由于网络不好，可以先排除在外。100000次迭代的所需时间是10min左右，而10000次迭代所需的时间为1min左右，相差10倍，如果迭代次数更多，可能相差更多，因此选择合适的迭代次数很重要，避免不必要的性能时间浪费。

|                            100次                             |                            1000次                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://gitee.com/wxy_666/images/raw/master/20200605220024.jpg" alt="2020-06-05_215139" style="zoom:80%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200605220009.jpg" alt="2020-06-05_215232" style="zoom:80%;" /> |
|                         **10000次**                          |                         **100000次**                         |
| <img src="https://gitee.com/wxy_666/images/raw/master/20200605215950.jpg" alt="2020-06-05_215450" style="zoom:80%;" /> | <img src="https://gitee.com/wxy_666/images/raw/master/20200605214944.jpg" alt="2020-06-05_202109" style="zoom:80%;" /> |



## 七、附录

```python
"""
@Copyright: Copyright (c) 2020 王兴宇 All Rights Reserved.
@Project: rnn-name
@Description: 用RNN网络为baby起名字
@Version: 1.0
@Author: 王兴宇
@Date: 2020-06-05 17:13
@LastEditors: 王兴宇
@LastEditTime: 2020-06-05 17:13
"""
from __future__ import unicode_literals, print_function, division

import glob
import math
import os
import random
import string
import time
from io import open

import matplotlib.pyplot as plt
import torch
import torch.nn as nn
import unicodedata

#################################################
# 全局参数
#################################################
all_letters = string.ascii_letters + " .,;'-"
n_letters = len(all_letters) + 1
criterion = nn.NLLLoss()
learning_rate = 0.0005  # 学习率
max_length = 20
path = "data/names/*.txt"


#################################################
# 数据集操作
#################################################
# 将Unicode转为ASCII
# https://stackoverflow.com/a/518232/2809427
def Unicode_to_ASCII(s):
    return ''.join(
        c for c in unicodedata.normalize('NFD', s)
        if unicodedata.category(c) != 'Mn'
        and c in all_letters
    )


# 将行分割成数组, 并把 Unicode 转换成 ASCII 编码, 最后放进一个字典里 {category: [names ...]}
category_lines = {}
all_categories = []

for file_name in glob.glob(path):
    category = os.path.splitext(os.path.basename(file_name))[0]
    all_categories.append(category)
    line_list = open(file_name, encoding='utf-8').read().strip().split('\n')
    lines = [Unicode_to_ASCII(line) for line in line_list]
    category_lines[category] = lines

category_num = len(all_categories)

if category_num == 0:
    raise RuntimeError("未找到数据集！")

print("数据集类别：", category_num, all_categories)


#################################################
# 构建RNN网络
#################################################
class RNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(RNN, self).__init__()
        self.hidden_size = hidden_size

        self.i2h = nn.Linear(category_num + input_size + hidden_size, hidden_size)
        self.i2o = nn.Linear(category_num + input_size + hidden_size, output_size)
        self.o2o = nn.Linear(hidden_size + output_size, output_size)
        self.dropout = nn.Dropout(0.1)
        self.softmax = nn.LogSoftmax(dim=1)

    def forward(self, category, input, hidden):
        input_combined = torch.cat((category, input, hidden), 1)
        hidden = self.i2h(input_combined)
        output = self.i2o(input_combined)
        output_combined = torch.cat((hidden, output), 1)
        output = self.o2o(output_combined)
        output = self.dropout(output)
        output = self.softmax(output)
        return output, hidden

    def init_hidden(self):
        return torch.zeros(1, self.hidden_size)


#################################################
# 训练前的准备
#################################################
# 输入串从第一个字母到最后一个字母（不包括 EOS ）的 one-hot 矩阵
def generate_input_tensor(letters):
    tensor = torch.zeros(len(letters), 1, n_letters)
    for i in range(len(letters)):
        letter = letters[i]
        tensor[i][0][all_letters.find(letter)] = 1
    return tensor


# 目标的第k个字母到结尾（EOS）的 LongTensor
def generate_target_Tensor(letters):
    letter_indexes = [all_letters.find(letters[i]) for i in range(1, len(letters))]
    letter_indexes.append(n_letters - 1)  # EOS
    return torch.LongTensor(letter_indexes)


# 类别的One-hot向量
def generate_category_tensor(category):
    i = all_categories.index(category)
    tensor = torch.zeros(1, category_num)
    tensor[0][i] = 1
    return tensor


# 利用辅助函数从数据集中获取随机的category和line
def random_pair():
    category = all_categories[random.randint(0, len(all_categories) - 1)]
    line = category_lines[category][random.randint(0, len(category_lines[category]) - 1)]
    return category, line


# 从随机的（category, line）对中生成 category, input, 和 target Tensor
def randomTrainingExample():
    category, line = random_pair()
    category_tensor = generate_category_tensor(category)
    input_tensor = generate_input_tensor(line)
    target_tensor = generate_target_Tensor(line)
    return category_tensor, input_tensor, target_tensor


#################################################
# 训练RNN网络
#################################################
def train(category_tensor, input_tensor, target_tensor):
    target_tensor.unsqueeze_(-1)
    hidden = rnn.init_hidden()

    rnn.zero_grad()

    loss = 0

    for i in range(input_tensor.size(0)):
        output, hidden = rnn(category_tensor, input_tensor[i], hidden)
        l = criterion(output, target_tensor[i])
        loss += l

    loss.backward()

    for p in rnn.parameters():
        p.data.add_(p.grad.data, alpha=-learning_rate)

    return output, loss.item() / input_tensor.size(0)


# 秒转时间戳
def time_format(since):
    now = time.time()
    s = now - since
    m = math.floor(s / 60)
    s -= m * 60
    return '%dm %ds' % (m, s)


# 从一个类中获取一个以start_letters开头的名字
def sample(category, start_letters='Al'):
    with torch.no_grad():
        category_tensor = generate_category_tensor(category)
        input = generate_input_tensor(start_letters)
        hidden = rnn.init_hidden()

        output_name = start_letters

        for i in range(max_length):
            output, hidden = rnn(category_tensor, input[0], hidden)
            topv, topi_temp = output.topk(5)
            topi = topi_temp[0][0].item()
            if topi == n_letters - 1:
                break
            else:
                print("[", end="")
                for j in range(5):
                    if j != 4:
                        if topi_temp[0][j].item() >= n_letters - 1:
                            print(" ", end=",")
                        else:
                            print(all_letters[topi_temp[0][j].item()], end=",")
                    else:
                        if topi_temp[0][j].item() >= n_letters - 1:
                            print(" ", end="]\n")
                        else:
                            print(all_letters[topi_temp[0][j].item()], end="]\n")
                letter = all_letters[topi]
                output_name += letter
            input = generate_input_tensor(letter)
        print(output_name)


#################################################
# 开始运行
#################################################
rnn = RNN(n_letters, 128, n_letters)

all_losses = []
total_loss = 0

# 超参数参考值
# n_its = 100000
# print_every = 5000
# plot_every = 500

print("请分别输入总迭代次数,打印精度,绘图精度(按空格分隔): ", end="")
n_its, print_every, plot_every = map(int, input().split())
print("开始训练......")
start = time.time()
print("[时间戳]\t\t百分比\t\t已迭代数\t\t损失")
for it in range(1, n_its + 1):
    output, loss = train(*randomTrainingExample())
    total_loss += loss

    if it % print_every == 0:
        print("[%10s]  <%3d%%>  %10d  %.4f" % (time_format(start), it / n_its * 100, it, loss))

    if it % plot_every == 0:
        all_losses.append(total_loss / plot_every)
        total_loss = 0
print("训练完成！")

# 画出损失图像
print("绘制损失图像......")
plt.figure()
plt.plot(all_losses)
plt.show()

# 生成测试
print("请输入是否要进行网络采样测试(1,是;0,否): ", end="")
flag = int(input())
while flag:
    print("请输入类别和姓名首字母(按空格分割,例: female Al): ", end="")
    cat, letters = input().split()
    sample(cat, letters)
    print("要继续吗(1,继续;0,停止)？", end="")
    flag = int(input())
```

