# End

---

**介绍**

    跳转语句 回到逻辑顶部

**实例**

![逻辑内部](/Mindustry-guide/Guide/example/end.png)

由于第三条语句出现end

后面语句不执行

控制权回到第一条语句

![结果](/Mindustry-guide/Guide/img/end.png)

**实例**

游戏内部
```
    同上
```
Mindustry
```
    draw clear 0 0 0 0 0 0
    drawflush display1
    end
    draw clear 255 255 255 0 0 0
    drawflush display1
```
java
```java
    for(;;){
        System.out.println("1");
        continue;
        System.out.println("2");
    }
```


[返回](https://lanluz.github.io/Mindustry-guide/)
