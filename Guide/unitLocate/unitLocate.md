# Unit Locate

---

**介绍**

    在地图上任何位置找到一个位置/建筑物的特定类型 需要一个被绑定单位
        
**方法**

![图片填充](/Mindustry-guide/Guide/img/unitLocate.png)

---

## find

![图片填充](/Mindustry-guide/Guide/img/unitLocate1.png)

1. **ore**
2. **buidling**
3. **spawn**
4. **damaged**

---

### ore

**ore**

描述：寻找矿物

**outX**

描述：返回X坐标到变量

**outY**

描述：返回Y坐标到变量

**found**

描述：是否找到(0为没有 1为找到)

---

### building

描述：寻找一个建筑物

**group**

描述：寻找一类建筑物

![图片填充](/Mindustry-guide/Guide/img/unitLocate2.png)

|方法|描述|
|core|任何核心|
|storage|仓库类建筑物|
|generator|电机|
|turret|任何炮塔|
|factory|工厂(转换资源)|
|repair|维修点|
|rally|控制中心|
|battery|任何电池|
|resupply|补给点(仅在单位弹药不能够使用的情况下才有关)|
|reactor|冲击反应堆/钍反应堆|

**enemy**

描述：是否要寻找敌人的建筑物(true/false)

**outX**

描述：返回X坐标到变量

**outY**

描述：返回Y坐标到变量

**found**

描述：返回是否找到到变量(0为没有 1为找到)

**building**

描述：返回一个建筑物到变量


---

### spawn

描述：寻找敌人重生点 可能是一个核心或者一个位置

**outX**

描述：返回X坐标到变量

**outY**

描述：返回Y坐标到变量

**found**

描述：返回是否找到到变量(0为没有 1为找到)

**building**

描述：返回一个建筑物到变量

---

### damaged

描述：寻找受伤的盟军建筑物

**outX**

描述：返回X坐标到变量

**outY**

描述：返回Y坐标到变量

**found**

描述：返回是否找到到变量(0为没有 1为找到)

**building**

描述：返回一个建筑物到变量

---

**实例**

游戏内部
```
暂无
```
Mindustry
```

```

[返回](https://lanluz.github.io/Mindustry-guide/)