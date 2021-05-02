# Sensor

---

**介绍**

    从一个单位/建筑物获取数据

![sensor](/Mindustry-guide/Guide/example/sensor.png)

**语法**

"result":  变量名

"@copper": 欲获取的数据
//这里是指铜

"block1":    被获取数据的建筑物/单位

**可获取的数据**

![page1](/Mindustry-guide/Guide/img/page1.png)

如果指定这些则获取 **指定物品** 在 **这个建筑物/单位** **中** 的 **数量**

![page2](/Mindustry-guide/Guide/img/page2.png)

如果指定这些则获取 **指定液体** 在 **这个建筑物/单位** **中** 的 **数量**

![page3_1](/Mindustry-guide/Guide/img/page3_1.png)

![page3_2](/Mindustry-guide/Guide/img/page3_2.png)

善用 Ctrl+f 快速查找到你需要的信息

|方法|描述|
|---|---|
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

**实例**

游戏内部
```
同上
```
Mindustry(获取block1的铜的数量)
```
sensor result block1 @copper
```


[返回](https://lanluz.github.io/Mindustry-guide/)
