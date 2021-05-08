# 第一课

---

**目标**

注：为了减少字数与增加可读性，仅在第一课完全描述如何操作
注：为了使教程更好的说明操作不同的方块，将避免使用**get link**，不使用**中文**名词
注：标点请使用**英文标点**

打印出 Hello,Mindustry

---

**开始**

![001](/Mindustry-guide/example/class1/img/001.png)

1. 首先建立 **Micro Processor** 和 **Message**

2. 点击 **Micro Processor** 再点击 **Message** 使其**连接**

3. 点击  **Micro Processor** 的**画笔按钮**进入编辑界面

![002](/Mindustry-guide/example/class1/img/002.png)

4. 点击 **add** 添加 **print** 和 **print flush** 逻辑块

5. 在**print**中输入**Hello,Mindustry**

6. 在**print flush** 中指定刷新的方块为 **message1** 方块
（**命名规则Ⅰ**：message指方块名，1指该处理器连接的第一个message方块）

7. 查看 **message** 方块输出结果

![003](/Mindustry-guide/example/class1/img/003.png)

8. 输出 **null** ，很明显，我们有地方出错了

![004](/Mindustry-guide/example/class1/img/004.png)

9. 因为输出的是 **字符串** 所以需要在首尾加上 **双引号** 来 **引用字符串**（字符串这一点听不懂没关系，只需要记住，如果是纯文本信息要加上双引号就行了）

![005](/Mindustry-guide/example/class1/img/005.png)

10. 在加上 **双引号** 后，查看输出结果如图所示

---

**练习**

- 练习使用**print**，让一个信息板输出**Hello**后换行输出**Mindustry**

---

[返回](https://lanluz.github.io/Mindustry-guide/)