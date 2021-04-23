# Jump

---

**介绍**

    跳转语句 当满足某种条件时跳转到指定行

    可以往前跳转，也可以往后跳转

**警告**:在实际编写中我不提倡将其往前跳转,我认为该逻辑类似于if-goto

1. 当逻辑比较复杂时很容易造成流程的混乱
2. 对别人很难理解
3. 调试的过程会变得很困难

**使用例**

![逻辑内部](/Mindustry-guide/Guide/example/jump.png)

输出结果为 1 2 3 (未实际验证)

可以变相的作为循环使用


**语法**

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
C++(向前跳转)
```C++

	int a=1;
label:
	cout<<a;
	if(a != 3){
		a++;
		goto label;
	}

```


[返回](https://lanluz.github.io/Mindustry-guide/)
