# Unit Locate

---

**介绍**

    在地图上任何位置找到一个位置/建筑物的特定类型 需要一个被绑定单位
        
**方法**

![图片填充](/Mindustry-guide/Guide/img/unitLocate.png)

---

<h2><font color=000066>find</font></h2>

![图片填充](/Mindustry-guide/Guide/img/unitLocate1.png)


<table>
<td><b>选项</b></td>
<td><b>ore</b></td>
<td><b>buidling</b></td>
<td><b>spawn</b></td>
<td><b>damaged</b></td>
</table>

---

<details>
<summary><font color=#000033><b>Ore</b></font></summary>

<h3>ore</h3>
<p><strong>ore</strong></p>
<p>描述：寻找矿物</p>
<p><strong>outX</strong></p>
<p>描述：返回X坐标到变量</p>
<p><strong>outY</strong></p>
<p>描述：返回Y坐标到变量</p>
<p><strong>found</strong></p>
<p>描述：是否找到(0为没有 1为找到)</p>


</details>

---

<details>
<summary><font color=#000033><b>Building</b></font></summary>

<h3>building</h3>
<p>描述：寻找一个建筑物</p>
<p><strong>group</strong></p>
<p>描述：寻找一类建筑物</p>
<p><img src="/Mindustry-guide/Guide/img/unitLocate2.png" alt="图片填充"></p>


<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>core</td>
<td>任何核心</td>
</tr>
<tr>
<td>storage</td>
<td>仓库类建筑物</td>
</tr>
<tr>
<td>generator</td>
<td>电机</td>
</tr>
<tr>
<td>turret</td>
<td>任何炮塔</td>
</tr>
<tr>
<td>factory</td>
<td>工厂(转换资源)</td>
</tr>
<tr>
<td>repair</td>
<td>维修点</td>
</tr>
<tr>
<td>rally</td>
<td>控制中心</td>
</tr>
<tr>
<td>battery</td>
<td>任何电池</td>
</tr>
<tr>
<td>resupply</td>
<td>补给点(仅在单位弹药不能够使用的情况下才有关)</td>
</tr>
<tr>
<td>reactor</td>
<td>冲击反应堆/钍反应堆</td>
</tr>
</tbody>
</table>

<p><strong>enemy</strong></p>
<p>描述：是否要寻找敌人的建筑物(true/false)</p>
<p><strong>outX</strong></p>
<p>描述：返回X坐标到变量</p>
<p><strong>outY</strong></p>
<p>描述：返回Y坐标到变量</p>
<p><strong>found</strong></p>
<p>描述：返回是否找到到变量(0为没有 1为找到)</p>
<p><strong>building</strong></p>
<p>描述：返回一个建筑物到变量</p>

</details>

---

<details>
<summary><font color=#000033><b>Spawn</b></font></summary>

<h3>spawn</h3>
<p>描述：寻找敌人重生点 可能是一个核心或者一个位置</p>
<p><strong>outX</strong></p>
<p>描述：返回X坐标到变量</p>
<p><strong>outY</strong></p>
<p>描述：返回Y坐标到变量</p>
<p><strong>found</strong></p>
<p>描述：返回是否找到到变量(0为没有 1为找到)</p>
<p><strong>building</strong></p>
<p>描述：返回一个建筑物到变量</p>


</details>

---

<details>
<summary><font color=#000033><b>Damaged</b></font></summary>

<h3>damaged</h3>
<p>描述：寻找受伤的盟军建筑物</p>
<p><strong>outX</strong></p>
<p>描述：返回X坐标到变量</p>
<p><strong>outY</strong></p>
<p>描述：返回Y坐标到变量</p>
<p><strong>found</strong></p>
<p>描述：返回是否找到到变量(0为没有 1为找到)</p>
<p><strong>building</strong></p>
<p>描述：返回一个建筑物到变量</p>



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