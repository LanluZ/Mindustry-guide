# Control

---

<link rel="stylesheet" href="css/style.css" />
<a href="#" class="scroll-to-top"></a>
<script src="/Mindustry-guide/js/jquery.min.js"></script>
<script src="/Mindustry-guide/js/index.js"></script>

**介绍**

    控制一个建筑物

**方法**

---

**enabeld**

介绍：控制一个建筑物开/关

![enabled](/Mindustry-guide/Guide/example/enabled.png)

set: enabled

of:  任意建筑物
//指定该处理器链接的建筑物

to:  0 或者 1
//指定开关， 1 是开启 0 是关闭

---

**shoot**

介绍：朝指定方向射击

![shoot](/Mindustry-guide/Guide/example/shoot.png)

set: shoot

of:  block1
//指定该处理器链接的建筑物

x:   横坐标

y:   纵坐标

shoot:  0 或者 1
//指定开火，1 是射击 0 是停止

---

**shootp**

介绍：朝目标射击

![shootp](/Mindustry-guide/Guide/example/shootp.png)

set: shootp

of:  block1
//指定该处理器链接的建筑物 (如 duo 等炮台)

unit: 指定被射击单位

shoot:  0 或者 1
//指定开火，1 是射击 0 是停止

---

**configure**

![configure](/Mindustry-guide/Guide/example/configure.png)

介绍：配置建筑物属性

set: configure

of:  block1
//指定该处理器链接的建筑物（如 sorter 分类器等）

to: 配置名称名称
//注意加 @ 作为前缀（如 @lead 指铅）

---

**color**

![illuminator](/Mindustry-guide/Guide/example/illuminator.png)

介绍：控制照明器颜色

set: color

of:  illuminator1
//指定该处理器链接的照明器

r: 红

g: 黄

b: 蓝

---

**实例**

游戏内部
```
    同上
```
Mindustry
```
    control color illuminator1 0 0 0 0
```


[返回](https://lanluz.github.io/Mindustry-guide/)
