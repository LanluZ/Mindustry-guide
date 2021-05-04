## Mindustry Logic 中文手册 V0.1

---

你可以在这个网页上阅读或者下载到玩家分享的逻辑

也可以进入 [GitHub](https://github.com/LanluZ/Mindustry-guide) 查看

---

## 逻辑方块

<details>

<p><img src="/Mindustry-guide/img/logic-block.png" alt="逻辑方块"></p>
<ul>
<li>从左到右</li>
<li>在Mindustry中索引从0开始</li>
</ul>
<table>
<thead>
<tr>
<th>方块</th>
<th>描述</th>
<th>特点</th>
<th>需要</th>
</tr>
</thead>
<tbody>
<tr>
<td>Micro Processor</td>
<td>最基本的处理单元</td>
<td>可以连接10个方块</td>
<td>无</td>
</tr>
<tr>
<td>Logic Processor</td>
<td>处理单元</td>
<td>更大的范围</td>
<td>无</td>
</tr>
<tr>
<td>Hyper Processor</td>
<td>大型处理单元</td>
<td>更大的范围</td>
<td>冷却液</td>
</tr>
<tr>
<td>Message</td>
<td>信息输出</td>
<td>输出一个信息</td>
<td>无</td>
</tr>
<tr>
<td>Switch</td>
<td>开关</td>
<td>可以用sensor探测</td>
<td>无</td>
</tr>
<tr>
<td>Memory cell</td>
<td>存储变量</td>
<td>可以储存64个变量</td>
<td>无</td>
</tr>
<tr>
<td>Data Bank</td>
<td>大型存储变量</td>
<td>可以储存512个变量</td>
<td>无</td>
</tr>
<tr>
<td>Logic Display</td>
<td>图形显示</td>
<td>显示范围80x80</td>
<td>无</td>
</tr>
<tr>
<td>Large Logic Display</td>
<td>大型图形显示</td>
<td>显示范围176x176</td>
<td>无</td>
</tr>
</tbody>
</table>


</details>

---

## 逻辑指令

<details>

<table>
<thead>
<tr>
<th>内存操作</th>
<th>方块控制</th>
<th>变量运算</th>
<th>流程控制</th>
<th>单位控制</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/read/read.html">Read</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/drawFlush/drawFlush.html">Draw Flush</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/set/set.html">Set</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/end/end.html">End</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/unitBind/unitBind.html">Unit Bind</a></td>
</tr>
<tr>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/write/write.html">Write</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/printFlush/printFlush.html">Print Flush</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/operation/operation.html">Operation</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/jump/jump.html">Jump</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/unitControl/unitControl.html">Unit Control</a></td>
</tr>
<tr>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/draw/draw.html">Draw</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/getLink/getLink.html">Get Link</a></td>
<td></td>
<td></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/unitRadar/unitRadar.html">Unit Radar</a></td>
</tr>
<tr>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/print/print.html">Print</a></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/control/control.html">Control</a></td>
<td></td>
<td></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/unitLocate/unitLocate.html">Unit Locate</a></td>
</tr>
<tr>
<td></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/radar/radar.html">Radar</a></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td><a href="https://lanluz.github.io/Mindustry-guide/Guide/sensor/sensor.html">Sensor</a></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>


</details>

---

## 关键字


<details>

<table>
<thead>
<tr>
<th>关键字</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>@+方块名/单位名/液体名</td>
<td>方块/单位/液体本身</td>
</tr>
<tr>
<td>@time</td>
<td>自1970年1月1日到现在经过的毫秒</td>
</tr>
<tr>
<td>@this</td>
<td>指向当前对象自己</td>
</tr>
<tr>
<td>@thisx</td>
<td>获取当前对象自己的X坐标</td>
</tr>
<tr>
<td>@thisy</td>
<td>获取当前对象自己的Y坐标</td>
</tr>
<tr>
<td>@air</td>
<td>空气</td>
</tr>
<tr>
<td>@soild</td>
<td>地形</td>
</tr>
<tr>
<td>@links</td>
<td>绑定方块数</td>
</tr>
<tr>
<td>@counter</td>
<td>逻辑执行行数</td>
</tr>
<tr>
<td>@unit</td>
<td>当前绑定单位</td>
</tr>
<tr>
<td>@ipt</td>
<td>每tick执行行数</td>
</tr>
<tr>
<td>@totalItems</td>
<td>获取这个建筑物/单位内的所有物品的总计数量</td>
</tr>
<tr>
<td>@firstItem</td>
<td>获取这个建筑物/单位内的第一个物品的名称</td>
</tr>
<tr>
<td>@totalLiquid</td>
<td>获取这个建筑物/单位内的所有液体的总计数量</td>
</tr>
<tr>
<td>@totalPower</td>
<td>获取这个建筑物/单位内总电力</td>
</tr>
<tr>
<td>@itemCapacity</td>
<td>获取这个建筑物/单位内的物品的容量</td>
</tr>
<tr>
<td>@liquidCapacity</td>
<td>获取这个建筑物/单位内的液体的容量</td>
</tr>
<tr>
<td>@powerCapacity</td>
<td>获取这个建筑物/单位内的电力的容量</td>
</tr>
<tr>
<td>@powerNetStored</td>
<td>获取这个建筑物/单位内的电力网络的储存量</td>
</tr>
<tr>
<td>@powerNetCapacity</td>
<td>获取这个建筑物/单位内的电力网络的储存量容量</td>
</tr>
<tr>
<td>@powerNetIn</td>
<td>获取这个建筑物/单位内的电力网络输入量/产生量</td>
</tr>
<tr>
<td>@powerNetOut</td>
<td>获取这个建筑物/单位内的电力网络输出量/消耗量</td>
</tr>
<tr>
<td>@ammo</td>
<td>获取这个建筑物/单位内的子弹量</td>
</tr>
<tr>
<td>@ammoCapacity</td>
<td>获取这个建筑物/单位内的子弹量上限</td>
</tr>
<tr>
<td>@health</td>
<td>获取这个建筑物/单位的生命值</td>
</tr>
<tr>
<td>@maxHealth</td>
<td>获取这个建筑物/单位的生命值上限</td>
</tr>
<tr>
<td>@heat</td>
<td>获取这个建筑物/单位的发热</td>
</tr>
<tr>
<td>@efficiency</td>
<td>获取这个建筑物/单位的效率</td>
</tr>
<tr>
<td>@timescale</td>
<td>获取这个建筑物/单位的时间流速</td>
</tr>
<tr>
<td>@rotation</td>
<td>获取这个建筑物/单位的旋转角度</td>
</tr>
<tr>
<td>@x</td>
<td>获取这个建筑物/单位的x坐标</td>
</tr>
<tr>
<td>@y</td>
<td>获取这个建筑物/单位的y坐标</td>
</tr>
<tr>
<td>@shootX</td>
<td>获取这个建筑物/单位的射击x坐标</td>
</tr>
<tr>
<td>@shootY</td>
<td>获取这个建筑物/单位的射击y坐标</td>
</tr>
<tr>
<td>@size</td>
<td>获取这个建筑物/单位的大小(正方形边长大小)</td>
</tr>
<tr>
<td>@dead</td>
<td>获取这个建筑物/单位是否失效(被摧毁返回1 有效返回0)</td>
</tr>
<tr>
<td>@range</td>
<td>获取这个建筑物/单位的攻击范围</td>
</tr>
<tr>
<td>@shooting</td>
<td>获取这个建筑物/单位的攻击状态(开火返回1 停火返回0)</td>
</tr>
<tr>
<td>@boosting</td>
<td>获取这个单位的飞行状态</td>
</tr>
<tr>
<td>@mineX</td>
<td>获取这个单位的挖矿x坐标</td>
</tr>
<tr>
<td>@mineY</td>
<td>获取这个单位的挖矿y坐标</td>
</tr>
<tr>
<td>@mining</td>
<td>获取这个单位的挖矿状态</td>
</tr>
<tr>
<td>@team</td>
<td>获取这个建筑物/单位的阵营</td>
</tr>
<tr>
<td>@type</td>
<td>返回这个建筑物/单位的类型</td>
</tr>
<tr>
<td>@flag</td>
<td>返回这个建筑物/单位的数字标记</td>
</tr>
<tr>
<td>@controlled</td>
<td>返回这个建筑物/单位是否被控制(处理器返回1 玩家返回2 编队返回3 如果都不是返回0)</td>
</tr>
<tr>
<td>@controller</td>
<td>返回一个单位的控制者(如果是处理器返回processor 编队返回 leader 如果都不是返回 itself)</td>
</tr>
<tr>
<td>@commanded</td>
<td>不建议使用 将被移除 使用controlled替代它</td>
</tr>
<tr>
<td>@name</td>
<td>获取这个建筑物/单位的玩家名字</td>
</tr>
<tr>
<td>@config</td>
<td>获取这个单位的配置(如工厂生产的物品)</td>
</tr>
<tr>
<td>@payloadCount</td>
<td>获取单位的载荷数量</td>
</tr>
<tr>
<td>@payloadType</td>
<td>获取单位的载荷类型</td>
</tr>
<tr>
<td>@enabled</td>
<td>获取这个建筑物/单位的开启状态</td>
</tr>
<tr>
<td>@configure</td>
<td>获取这个建筑物的配置(常用于分类器)</td>
</tr>
</tbody>
</table>

</details>

---

## 实例教学

(施工中)

<details>

<ol>
<li>打印出 &quot;Hello,Mindustry&quot;</li>
<li>根据仓库载荷绘制出一次函数</li>
<li>使用Memory cell的循环</li>
<li>使用jump的循环</li>
<li>使用@counter的循环</li>
</ol>

</details>

---

## 下载

<details>

<h4>华漾Emoji</h4>
<ol>
<li><a href="https://github.com/LanluZ/Mindustry-guide/blob/main/Player-Share/%E5%8D%8E%E6%BC%BEEmoji/%E7%82%B9%E9%98%B5%E7%A5%9E%E9%A3%8E%E8%BD%B0%E7%82%B8%E6%9C%BA_Emoji%E6%94%B9.msch">点阵神风轰炸机_Emoji改</a></li>
</ol>


</details>

---

### 反馈

您如果有任何建议都可以反馈到这个邮箱
LanluZ@foxmail.com

### 特别鸣谢

排名不分先后

<details>

    华漾emoji

</details>
