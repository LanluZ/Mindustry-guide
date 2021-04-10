# Operation

---

**介绍**

    运算语句
        val:
            可以为任意变量
        num1 & num2:
            接受:变量,byte,short,int,long,long long,boolean,float,double,String
            不接受:char

            上限:9223372036854775807
            下限:-9223372036854775807

**运算符**

![alt ""](/guide/img/Operation.png)

- 下表例子为游戏内语法,结果为val
- 下表中括号内为boolean或二进制数据(0b)
- sin cos tan angle 因为算法原因无法过于精确

|符号|解释|例子|结果|
|-- |-- |-- |-- |
|+  |加法|val = 1 + 1|2|
|-  |减法|val = 1 - 1|0|
|*  |乘法|val = 2 * 3|6|
|/  |除法|val = 1 / 2|0.5|
|// |整除|val = 9 / 2|4|
|%  |余数|val = 13 % 5|3|
|^  |幂数|val = 5 ^ 2|25|
|== |等于|val = 1 == 2|0(false)|
|not|不等于|val = 1 not 2|1(true)|
|and|逻辑与|val  = 1 and 0|0(false)|
|<  |小于|val = 1 < 2|1(true)|
|<= |小于等于|val = 1 <= 1|1(true)|
|>  |大于|val = 1 > 2|0(false)|
|>= |大于等于|val = 1 >= 1|1(true)|
|===|全同|val = 1 === null|0(false)|
|<<|左移|val = 1(0b000001) << 5|32(0b100000)|
|>>|右移|val = 7(0b111) >> 2|1(0b001)|
|or |位或|val = 5(0b101) or 2(0b010)|7(0b111)|
|b-and|位与|val = 5(0b101) b-and 3(0b011)|1(0b001)|
|xor|异或|val = 5(0b101) xor 3(0b011)|6(0b110)|
|Flip|反位|val = Flip 5(0b101)|2(0b010)|
|max|最大|val = max 1 2|2|
|min|最小|val = min 1 2|1|
|angle|求矢量角度|val = angle 1 1|45.2376(45°)|
|len|模长|val = len 1 1|1.414(√2)|
|noise|二维单纯形噪声|val = noise 0 1|-0.4950|
|abs|绝对值|val = abs -1|1|
|log|ln( )|val = log 100|4.605|
|log10|lg( )|val = log10 100|2|
|sin|正弦|val = sin 30|0.4999(1/2)|
|cos|余弦|val = cos 60|0.5001(1/2)|
|tan|正切|val = tan 45|0.9999(1)|
|Floor|向下取整|val = Floor 0.9|0|
|ceil|向上取整|val = ceil 0.1|1|
|sqrt|开方|val = sqrt|1.414(√2)|
|rand|随机|val = rand 1|随机0~1的小数|

**语法**

游戏内部
```
    见上表
```
Mindustry
```
    op mul val num1 num2
    op land val num1 num2
```
java
```java
    int val = num1 * num2;
    boolean val = num1 && num2
```

[返回](https://lanluz.github.io/Mindustry-guide/)