# Draw

---

**介绍**

    绘图语句  绘图使用
        
**方法**

- 颜色是RGB 255

|方法|描述|例子|结果|逻辑代码|
|-- |-- |-- |-- |-- |
|clear|用一个颜色充满屏幕|clear r 0 g 255 b 0|![clear](/Guide/img/clear.png)|draw clear 0 255 0 0 0 0|
|color|为下一条语句设置颜色(单独使用无作用)rgba a是透明度|color r 255 g 255 b 0 a 200|![color](/Guide/img/color.png)具体作用于这根线|draw color 255 255 0 200 0 0|
|stroke|为下一条划线语句设置线宽(单独使用无作用)|stroke 10|![color](/Guide/img/stroke.png)|draw stroke 10 255 0 200 0 0|
|line|画一根线xy为起始坐标 x2y2为终止坐标|line x 0 y 0 x2 999 y2 999|![color](/Guide/img/line.png)|draw line 0 0 999 999 0 0|
|rect|下周更新，嘤||||
|lineRect|||||
|poly|||||
|linePoly|||||
|triangle|||||
|image|||||

**语法**

游戏内部
```

```
Mindustry
```

```
java
```java

```

[返回](https://lanluz.github.io/Mindustry-guide/)