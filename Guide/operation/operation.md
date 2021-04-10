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

**方法**

![operation](/Mindustry-guide/Guide/img/operation.png)

- 下表例子为游戏内语法,结果为val
- 下表中括号内为boolean或二进制数据(0b)
- sin cos tan angle 因为算法原因无法过于精确

|方法|解释|例子|结果|逻辑代码|
|-- |-- |-- |-- |-- |
|+  |加法|val = 1 + 1|2|add|
|-  |减法|val = 1 - 1|0|sub|
|*  |乘法|val = 2 * 3|6|mul|
|/  |除法|val = 1 / 2|0.5|div|
|// |整除|val = 9 / 2|4|idiv|
|%  |余数|val = 13 % 5|3|mod|
|^  |幂数|val = 5 ^ 2|25|pow|
|== |等于|val = 1 == 2|0(false)|equal|
|not|不等于|val = 1 not 2|1(true)|notEqual|
|and|逻辑与|val  = 1 and 0|0(false)|land|
|<  |小于|val = 1 < 2|1(true)|lessThan|
|<= |小于等于|val = 1 <= 1|1(true)|lessThanEq|
|>  |大于|val = 1 > 2|0(false)|greaterThan|
|>= |大于等于|val = 1 >= 1|1(true)|greaterThanEq|
|===|全同|val = 1 === null|0(false)|strictEqual|
|<<|左移|val = 1(0b000001) << 5|32(0b100000)|shl|
|>>|右移|val = 7(0b111) >> 2|1(0b001)|shr|
|or |位或|val = 5(0b101) or 2(0b010)|7(0b111)|or|
|b-and|位与|val = 5(0b101) b-and 3(0b011)|1(0b001)|and|
|xor|异或|val = 5(0b101) xor 3(0b011)|6(0b110)|xor|
|Flip|反位|val = Flip 5(0b101)|2(0b010)|not|
|max|最大|val = max 1 2|2|max|
|min|最小|val = min 1 2|1|min|
|angle|求矢量角度|val = angle 1 1|45.2376(45°)|angle|
|len|模长|val = len 1 1|1.414(√2)|len|
|noise|二维单纯形噪声|val = noise 0 1|-0.4950|noise|
|abs|绝对值|val = abs -1|1|abs|
|log|ln( )|val = log 100|4.605|log|
|log10|lg( )|val = log10 100|2|log10|
|sin|正弦|val = sin 30|0.4999(1/2)|sin|
|cos|余弦|val = cos 60|0.5001(1/2)|cos|
|tan|正切|val = tan 45|0.9999(1)|tan|
|Floor|向下取整|val = Floor 0.9|0|floor|
|ceil|向上取整|val = ceil 0.1|1|ceil|
|sqrt|开方|val = sqrt|1.414(√2)|sqrt|
|rand|随机|val = rand 1|随机0~1的小数|rand|

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