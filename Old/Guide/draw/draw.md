# Draw

---

**介绍**

    绘图语句,绘图使用
        
**方法**

![method](/Mindustry-guide/Guide/img/draw.png)

---

**clear**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|clear|用一个颜色充满屏幕|![clear](/Mindustry-guide/Guide/example/clear.png)|![clear](/Mindustry-guide/Guide/img/clear.png)|是|

- 这条语句一般放在最开始用于刷新绘图板
- 接受参数

    R (红) 范围 0~255
    G (绿) 范围 0~255
    B (蓝) 范围 0~255

---

**color**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|color|为下一条语句设置颜色|![color](/Mindustry-guide/Guide/example/color.png)|![color](/Mindustry-guide/Guide/img/color.png)|否|

- 接受参数

    R   (红)    范围 0~255
    G   (绿)    范围 0~255
    B   (蓝)    范围 0~255
    A   (透明度)范围 0~255

**stroke**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|stroke|为下一条划线语句设置线宽(单独使用无作用)|![stroke](/Mindustry-guide/Guide/example/stroke.png)|![stroke](/Mindustry-guide/Guide/img/stroke.png)|否|

- 接受参数

    (宽度)

**line**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|line|画一根线xy为起始坐标 x2y2为终止坐标|![line](/Mindustry-guide/Guide/example/line.png)|![line](/Mindustry-guide/Guide/img/line.png)|是|

- 接受参数

    X   (起始x)
    Y   (起始y)
    X1  (终止x)
    Y1  (终止y)

**rect**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|rect|矩形填充|![rect](/Mindustry-guide/Guide/example/rect.png)|![rect](/Mindustry-guide/Guide/img/rect.png)|是|

- 接受参数

    X   (矩形左下角x)
    Y   (矩形左下角y)
    width   (矩形宽)
    height  (矩形高)

**lineRect**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|lineRect|矩形框架|![rect](/Mindustry-guide/Guide/example/lineRect.png)|![rect](/Mindustry-guide/Guide/img/lineRect.png)|是|

- 接受参数

    X   (矩形左下角x)
    Y   (矩形左下角y)
    width   (矩形宽)
    height  (矩形高)

**poly**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|poly|正多边形填充|![ploy](/Mindustry-guide/Guide/example/poly.png)|![ploy](/Mindustry-guide/Guide/img/poly.png)|是|

- 接受参数

    X   重心x
    Y   重心y
    sides   边数
    radius  半径
    rotation  旋转角度

**linePoly**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|linePoly|多边形框架|![linePoly](/Mindustry-guide/Guide/example/linePoly.png)|![linePoly](/Mindustry-guide/Guide/img/linePoly.png)|是|

- 接受参数

    X   重心x
    Y   重心y
    sides   边数
    radius  半径
    rotation  旋转角度

**triangle**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|triangle|三角形填充|![triangle](/Mindustry-guide/Guide/example/triangle.png)|![triangle](/Mindustry-guide/Guide/img/triangle.png)|是|

- 接受参数

    X   顶点坐标一
    Y   顶点坐标一
    X2  顶点坐标二
    Y2  顶点坐标二
    X3  顶点坐标三
    Y3  顶点坐标三

**image**

|方法|描述|例子|结果|单独使用|
|-- |-- |-- |-- |-- |
|image|载入图片|![image](/Mindustry-guide/Guide/example/image.png)|![image](/Mindustry-guide/Guide/img/image.png)|是|

- 载入游戏内图片
- image参数用 "@"+游戏内物品名称表示
- 接受参数

    X   坐标x
    Y   坐标y
    image   图片
    size    大小
    rotation    旋转

**实例**

游戏内部
```
    如上表
```
Mindustry
```
    draw clear 0 0 0 0 0 0
    draw color 255 255 255 255 0 0
    draw stroke 10 255 0 200 0 0
    draw linePoly 50 100 5 32 0 60
    drawflush display1
```
java
用stdDraw可以实现 ~~但是我懒~~
```java
    暂无
```

[返回](https://lanluz.github.io/Mindustry-guide/)