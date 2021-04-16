# Radar

---

**介绍**

    从建筑的雷达获取信息

**参数**

---

**from**

描述：从某一个带雷达的方块

    接受：链接方块名

---

**target**

描述：在雷达范围内意图获取的单位

1. any      任意单位
2. enemy    敌人
3. ally     盟友
4. player   玩家
5. attacker 进攻者
6. flying   飞行单位
7. boss     头目单位
8. ground   地面单位

---

**order**

描述：相当于逻辑非

1. 默认为1，反选为0.

---

**sort**

描述：选出在雷达范围内带有指定特征的单位

1. distance     最近距离者
2. health       最高生命者
3. shield       盾者
4. armor        最高护甲者
5. maxHealth    最大生命上限者

---

**output**

描述：输出被雷达捕获的单位的名称

---

**举例**

内容：通过ripper捕获敌人坐标再让lancer射击
![超出范围射击](/Mindustry-guide/Guide/example/radar.png)

逐字翻译：
1. 从 ripple1 获取 enemy(敌人) 选择 distance(最近的) 输出 result
2. 获取 result 的 x坐标(@x) 赋给 x
3. 获取 result 的 y坐标(@y) 赋给 y
4. 控制 设置 shoot(射击) 关于 lancer1 于坐标 x y 射击开关 1(真)

- 如果 order 为 0 则为不选择enemy(敌人)

结果：(跨范围射击)
![超出范围射击](/Mindustry-guide/Guide/img/radar.png)

---

**语法**

游戏内部
```
同上
```
Mindustry
```
    radar enemy any any distance ripple1 1 result
    sensor x result @x
    sensor y result @y
    control shoot lancer1 x y 1 0
```

p.s.此语句要与print flush配合使用

[返回](https://lanluz.github.io/Mindustry-guide/)