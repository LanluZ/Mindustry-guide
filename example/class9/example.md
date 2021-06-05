# 单个单位控制

---

**目标**

使用处理器控制一个单位

---

**需要用到的逻辑**

~~~

Jump;
Unit Bind;
Unit Control;
Operation;(选用)

~~~

---

**开始**

![001](/Mindustry-guide/example/class9/img/001.png)

1. 首先使用 **Unit Bind** 绑定 **poly** 单位

![002](/Mindustry-guide/example/class9/img/002.png)

2. 目前没有什么效果，单位和处理器都没有反应

![003](/Mindustry-guide/example/class9/img/003.png)

3. 试着使用 **Unit Control** 移动一下刚刚绑定的单位

![004](/Mindustry-guide/example/class9/img/004.png)

![005](/Mindustry-guide/example/class9/img/005.png)

4. **poly** 开始移动到处理器上方，并且被赋予了编号 **1**，我们可以得知控制单位可能与编号有关

![006](/Mindustry-guide/example/class9/img/006.png)

5. 通过 **Unit Control** 的 **flag** 设置单位编号为 **0**，**poly** 的编号也变成了 **0**

![007](/Mindustry-guide/example/class9/img/007.png)

6. 我们不妨在设置为 **1**，然后移动一下，看看是哪些单位被设置为了 **1**

![008](/Mindustry-guide/example/class9/img/008.png)

![009](/Mindustry-guide/example/class9/img/009.png)

7. 有些 **poly** 向下移动了，有些没动，我们暂停看看。没动的编号是 **0**，向下移动的编号是 **1**，说明了 **Unit Control** 是一次一次的赋予编号的，也就是处理器在处理完毕后，重新处理的时候赋予编号

![010](/Mindustry-guide/example/class9/img/010.png)

8. 我们不妨只让 **flag** 执行一次，通过 **Jump** 向回跳转

![011](/Mindustry-guide/example/class9/img/011.png)

![012](/Mindustry-guide/example/class9/img/012.png)

9. 结果如图所示，处理器只控制了一个单位，并且其他单位在一段时间后没有接到控制而失去了数字编号，这样就完成了一个单位的控制了


如果是 **Bind Control** 后，直接控制单位，如果没有设置会隐性的依次为单位附上编号

---

[返回](https://lanluz.github.io/Mindustry-guide/)
