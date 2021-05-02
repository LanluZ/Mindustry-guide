# Set

---

**介绍**

    赋值语句  将num赋给val
        val:
            可以为任意变量
        num:
            接受:变量,byte,short,int,long,long long,boolean,float,double,String
            不接受:char

            上限:9223372036854775807
            下限:-9223372036854775807

    set @counter = 某个整数

    则是无条件跳转到某一行逻辑

    类似于goto

**实例**

游戏内部
```
    val = num
```
Mindustry
```
    set val num
```
java
```java
    int val = num;
    long long val = num;
    String val = "Hello World";
```
p.s.赋值String时要加""否则为null

[返回](https://lanluz.github.io/Mindustry-guide/)