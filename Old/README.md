# Mindustry中文逻辑手册 V0.1

---

!["Mindustry"](https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.itch.zone%2FaW1hZ2UvMTQwMTY5LzEwNzQ0NTQuZ2lm%2F347x500%2FqGIeKw.gif&refer=http%3A%2F%2Fimg.itch.zone&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620641379&t=a980a6fb412cf5c1ee929eebd2183b34)

在线网页：[https://lanluz.github.io/mindustry-guide](https://lanluz.github.io/Mindustry-guide/)


---

## 逻辑方块

![逻辑方块](https://lanluz.github.io/Mindustry-guide/img/logic-block.png)

- 从左到右
- 在Mindustry中索引从0开始

|方块|描述|特点|需要|
|-|-|-|-|
|Micro Processor|最基本的处理单元|可以连接10个方块|无|
|Logic Processor|处理单元|更大的范围|无|
|Hyper Processor|大型处理单元|更大的范围|冷却液|
|Message|信息输出|输出一个信息|无|
|Switch|开关|可以用sensor探测|无|
|Memory cell|存储变量|可以储存64个变量|无|
|Data Bank|大型存储变量|可以储存512个变量|无|
|Logic Display|图形显示|显示范围80x80|无|
|Large Logic Display|大型图形显示|显示范围176x176|无|



---

## 逻辑指令

|内存操作|方块控制|变量运算|流程控制|单位控制|
|-|-|-|-|-|
|[Read](https://lanluz.github.io/Mindustry-guide/Guide/read/read.html)|[Draw Flush](https://lanluz.github.io/Mindustry-guide/Guide/drawFlush/drawFlush.html)|[Set](https://lanluz.github.io/Mindustry-guide/Guide/set/set.html)|[End](https://lanluz.github.io/Mindustry-guide/Guide/end/end.html)|[Unit Bind](https://lanluz.github.io/Mindustry-guide/Guide/unitBind/unitBind.html)|
|[Write](https://lanluz.github.io/Mindustry-guide/Guide/write/write.html)|[Print Flush](https://lanluz.github.io/Mindustry-guide/Guide/printFlush/printFlush.html)|[Operation](https://lanluz.github.io/Mindustry-guide/Guide/operation/operation.html)|[Jump](https://lanluz.github.io/Mindustry-guide/Guide/jump/jump.html)|[Unit Control](https://lanluz.github.io/Mindustry-guide/Guide/unitControl/unitControl.html)|
|[Draw](https://lanluz.github.io/Mindustry-guide/Guide/draw/draw.html)|[Get Link](https://lanluz.github.io/Mindustry-guide/Guide/getLink/getLink.html)|[Wait](https://lanluz.github.io/Mindustry-guide/Guide/wait/wait.html)||[Unit Radar](https://lanluz.github.io/Mindustry-guide/Guide/unitRadar/unitRadar.html)|
|[Print](https://lanluz.github.io/Mindustry-guide/Guide/print/print.html)|[Control](https://lanluz.github.io/Mindustry-guide/Guide/control/control.html)|[Lookup](https://lanluz.github.io/Mindustry-guide/Guide/lookup/Lookup.html)||[Unit Locate](https://lanluz.github.io/Mindustry-guide/Guide/unitLocate/unitLocate.html)|
||[Radar](https://lanluz.github.io/Mindustry-guide/Guide/radar/radar.html)||||
||[Sensor](https://lanluz.github.io/Mindustry-guide/Guide/sensor/sensor.html)||||


---

## 关键字表

<details>

|关键字|描述|
|-|-|
|@+方块名/单位名/液体名|方块/单位/液体本身|
|@time|自1970年1月1日到现在经过的毫秒/游戏开始经过的毫秒(新版本)|
|@this|指向当前对象自己|
|@thisx|获取当前对象自己的X坐标|
|@thisy|获取当前对象自己的Y坐标|
|@air|空气|
|@soild|地形|
|@links|绑定方块数|
|@counter|逻辑执行行数|
|@unit|当前绑定单位|
|@ipt|每tick执行行数|
|@totalItems|获取这个建筑物/单位内的所有物品的总计数量|
|@firstItem|获取这个建筑物/单位内的第一个物品的名称|
|@totalLiquid|获取这个建筑物/单位内的所有液体的总计数量|
|@totalPower|获取这个建筑物/单位内总电力|
|@itemCapacity|获取这个建筑物/单位内的物品的容量|
|@liquidCapacity|获取这个建筑物/单位内的液体的容量|
|@powerCapacity|获取这个建筑物/单位内的电力的容量|
|@powerNetStored|获取这个建筑物/单位内的电力网络的储存量|
|@powerNetCapacity|获取这个建筑物/单位内的电力网络的储存量容量|
|@powerNetIn|获取这个建筑物/单位内的电力网络输入量/产生量|
|@powerNetOut|获取这个建筑物/单位内的电力网络输出量/消耗量|
|@ammo|获取这个建筑物/单位内的子弹量|
|@ammoCapacity|获取这个建筑物/单位内的子弹量上限|
|@health|获取这个建筑物/单位的生命值|
|@maxHealth|获取这个建筑物/单位的生命值上限|
|@heat|获取这个建筑物/单位的发热|
|@efficiency|获取这个建筑物/单位的效率|
|@timescale|获取这个建筑物/单位的时间流速|
|@rotation|获取这个建筑物/单位的旋转角度|
|@x|获取这个建筑物/单位的x坐标|
|@y|获取这个建筑物/单位的y坐标|
|@shootX|获取这个建筑物/单位的射击x坐标|
|@shootY|获取这个建筑物/单位的射击y坐标|
|@size|获取这个建筑物/单位的大小(正方形边长大小)|
|@dead|获取这个建筑物/单位是否失效(被摧毁返回1 有效返回0)|
|@range|获取这个建筑物/单位的攻击范围|
|@shooting|获取这个建筑物/单位的攻击状态(开火返回1 停火返回0)|
|@boosting|获取这个单位的飞行状态|
|@mineX|获取这个单位的挖矿x坐标|
|@mineY|获取这个单位的挖矿y坐标|
|@mining|获取这个单位的挖矿状态|
|@team|获取这个建筑物/单位的阵营|
|@type|返回这个建筑物/单位的类型|
|@flag|返回这个建筑物/单位的数字标记|
|@controlled|返回这个建筑物/单位是否被控制(处理器返回1 玩家返回2 编队返回3 如果都不是返回0)|
|@controller|返回一个单位的控制者(如果是处理器返回processor 编队返回 leader 如果都不是返回 itself)|
|@commanded|不建议使用 将被移除 使用controlled替代它|
|@name|获取这个建筑物/单位的玩家名字|
|@config|获取这个单位的配置(如工厂生产的物品)|
|@payloadCount|获取单位的载荷数量|
|@payloadType|获取单位的载荷类型|
|@enabled|获取这个建筑物/单位的开启状态|
|@configure|获取这个建筑物的配置(常用于分类器)|

</details>


---

## 实例教学

<details>
<summary>1-2.输出与绘图</summary>

1. [第一课：打印出 "Hello,Mindustry"](https://lanluz.github.io/Mindustry-guide/example/class1/example.html)
2. [第二课：根据仓库载荷绘制出载荷百分比显示图像](https://lanluz.github.io/Mindustry-guide/example/class2/example.html)

</details>

<details>
<summary>3-5.循环实现</summary>

3. [第三课：使用Memory cell的循环](https://lanluz.github.io/Mindustry-guide/example/class3/example.html)
4. [第四课：使用jump的循环](https://lanluz.github.io/Mindustry-guide/example/class4/example.html)
5. [第五课：使用@counter的循环](https://lanluz.github.io/Mindustry-guide/example/class5/example.html)

</details>

<details>
<summary>6-9.建筑物控制</summary>

6. 第六课：关闭/开启护盾发生装置
7. 第七课：只瞄准BOSS攻击的合金炮
8. 第八课：自动控制卸载的工厂

</details>

<details>
<summary>9-13.单位控制</summary>

9. [第九课：单个单位控制](https://lanluz.github.io/Mindustry-guide/example/class3/example.html)
10. 第十课：单个单位拿/放资源到指定位置
11. 第十一课：群控寻路进攻
12. 第十二课：生命值低寻找最近的维修点
13. 第十三课：远控单位

</details>

---

## 标记

使用简单的标记语言可以为文本着色

[name]通过内置的颜色名称进行颜色的设置
[#rrggbb]/[#rrggbbaa]通过十六进制值设置颜色
rr 是红色值，
gg 是绿色值，
bb 是蓝色值，
aa 是透明度；
[] 将颜色设置回先前的颜色；
[[ 转义为左括号，因此您可以 [[red] 进行写操作并将其渲染为[red]

例子

~~~
    [red]red
    [#ff0000]full-red
~~~

内置颜色

~~~
    [clear]clear
    [black]black
    [white]white
    [lightgray]lightgray
    [gray]gray
    [darkgray]darkgray
    [blue]blue
    [navy]navy
    [royal]royal
    [slate]slate
    [sky]sky
    [cyan]cyan
    [teal]teal
    [green]green
    [acid]acid
    [lime]lime
    [forest]forest
    [olive]olive
    [yellow]yellow
    [gold]gold
    [goldenrod]goldenrod
    [orange]orange
    [brown]brown
    [tan]tan
    [brick]brick
    [red]red
    [scarlet]scarlet
    [coral]coral
    [salmon]salmon
    [pink]pink
    [magenta]magenta
    [purple]purple
    [violet]violet
    [maroon]maroon
~~~

---

## 下载

<details>

#### 华漾Emoji

1. [点阵神风轰炸机_Emoji改](https://github.com/LanluZ/Mindustry-guide/blob/main/Player-Share/%E5%8D%8E%E6%BC%BEEmoji/%E7%82%B9%E9%98%B5%E7%A5%9E%E9%A3%8E%E8%BD%B0%E7%82%B8%E6%9C%BA_Emoji%E6%94%B9.msch)

</details>

