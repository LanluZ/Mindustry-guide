# Unit Control

---

**介绍**

    控制目前绑定的单位
        
**方法**

![图片填充](/Mindustry-guide/Guide/img/unitControl.png)

|方法|描述|接受描述|
|idle|停止移动 但是继续挖矿/建筑 单位的默认状态|无|
|stop|停止移动/挖矿/建筑|无|
|move|移动到指定位置|X坐标 Y坐标|
|approach|接近一个位置以一个半径|X坐标 Y坐标 半径|
|boost|推进器开关|1/0(0是关闭 1是开启)|
|pathFind|核心/出生点路径寻找|无|
|target|朝指定位置射击|X坐标 Y坐标 0/1(0是停火 1是开火)|
|targetp|朝指定单位射击以速度预测|单位 0/1(0是停火 1是开火)|
|itemDrop|丢一个物品|丢弃到方块 数量|
|itemTake|从一个建筑物拿去物品|从方块 物品 数量|
|payDrop|丢下目前的负载|无|
|payTake|从目前所在位置捡起负载|1/0(1是单位 0是建筑)|
|mine|在指定地点挖矿|X坐标 Y坐标|
|flag|数字单位标记|数字编号|
|build|修建建筑物|X坐标 Y坐标 方块 旋转角度 配置|
|getblock|获取在一个坐标的建筑物和类型|X坐标 Y坐标 接受返回类型变量 接受返回建筑物变量|
|within|如果附近的左边有单位检查并返回|X坐标 Y坐标 半径 返回值|

---

**语法**

暂无，赶进度中

**实例**

游戏内部
```
同上
```
Mindustry
```
ubind @poly
```

[返回](https://lanluz.github.io/Mindustry-guide/)