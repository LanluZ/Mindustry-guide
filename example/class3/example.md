# 第三课

---

**目标**

使用 **Memory Cell** 实现循环
每256为一个循环周期

---

**开始**

![001](/Mindustry-guide/example/class3/img/001.png)

1.创建如图建筑物并连接

![002](/Mindustry-guide/example/class3/img/002.png)

2.读 **cell1** 的 **0** 号存储值 给 **i**

![003](/Mindustry-guide/example/class3/img/003.png)

3.使用 **jump** 判断 **i 是否 大于等于 255**

![004](/Mindustry-guide/example/class3/img/004.png)

4.**判断不成立**，向下执行，使用 **Operation** 让 **i** 加 **1**，并且**覆盖** **cell1** 的 **0** 号存储值，遇到 **end** 结束本次执行，重新开始

![005](/Mindustry-guide/example/class3/img/005.png)

5.**判断成立**，跳转到箭头语句，使用 **Set** 将 **i** 设置为 **0**，遇到 **end** 结束本次执行，重新开始

- i 的值从0加到255，然后重新增加

- 完整逻辑

![006](/Mindustry-guide/example/class3/img/006.png)

---

**练习**

使用循环结合第二课内容绘制出仓库储量百分比的“心电图”

---

[返回](https://lanluz.github.io/Mindustry-guide/)