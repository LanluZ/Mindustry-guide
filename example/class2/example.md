# 第二课

---

**目标**

通过探测 **核心** 的 **载荷量** 在 **display** 上绘制出百分比图像

---

**开始**

![001](/Mindustry-guide/example/class2/img/001.png)

1.如图建造并连接

![002](/Mindustry-guide/example/class2/img/002.png)

2.使用 **Sensor** 让变量 **load** 获取 **shard1** 的 **totalItem**

3.使用 **Sensor** 让变量 **total** 获取 **shard1** 的 **totalItem**

（**命名规则Ⅱ**：如果方块名称由多个单词组成则取后面的单词）
（**@totalItem** 是关键字，具体作用可在**首页-关键字**内查找）

![003](/Mindustry-guide/example/class2/img/003.png)

3.因为处理器没处理完一遍逻辑会重新处理，所以要清除上一次绘图，使用 **Draw** 和 **Draw Flush**

![004](/Mindustry-guide/example/class2/img/004.png)

4.为了显示 **百分比**，则需要使用 **Operation** 压缩获取的 **load** 与 **total** 

5.得到了 **百分比** 后，因为 **display1** 方块显示范围为 **80*80** ，所以使用百分比计算出实际输出高度

![005](/Mindustry-guide/example/class2/img/005.png)

6.最后通过 **Draw** 绘制出来

![006](/Mindustry-guide/example/class2/img/006.png)

![007](/Mindustry-guide/example/class2/img/007.png)

- 随着库存增加图像显示也会增加

- 完整逻辑

![008](/Mindustry-guide/example/class2/img/008.png)

---

**练习**

- 练习使用 **Sensor** 、**Draw** 、**Operation** 并且查阅**关键字表**绘制出红色的电力百分比显示图

---
[返回](https://lanluz.github.io/Mindustry-guide/)