//展开判断
var guideDetails = 0;
var last = null;

var str = new Array;

function details(id) {
    if (!guideDetails || last != id) {
        guideDetails = 1;
        document.getElementById("guideOutPut").innerHTML = "<div id='object'>" + guideOutPut(id) + "</div>";
        last = id;
    } else {
        guideDetails = 0;
        var guideOb1 = document.getElementById("guideOutPut");
        var guideOb2 = document.getElementById("object");
        guideOb1.removeChild(guideOb2);
    }
}

function guideOutPut(id) {
    switch (id) {
        case 0:
            str = '<p><img src="/Mindustry-guide/img/logic-block.png" alt="逻辑方块"></p>\
            <ul>\
            <li>从左到右</li>\
            <li>在Mindustry中索引从0开始</li>\
            </ul>\
            <table>\
            <thead>\
            <tr>\
            <th>方块</th>\
            <th>描述</th>\
            <th>特点</th>\
            <th>需要</th>\
            </tr>\
            </thead>\
            <tbody>\
            <tr>\
            <td>Micro Processor</td>\
            <td>最基本的处理单元</td>\
            <td>可以连接10个方块</td>\
            <td>无</td>\
            </tr>\
            <tr>\
            <td>Logic Processor</td>\
            <td>处理单元</td>\
            <td>更大的范围</td>\
            <td>无</td>\
            </tr>\
            <tr>\
            <td>Hyper Processor</td>\
            <td>大型处理单元</td>\
            <td>更大的范围</td>\
            <td>冷却液</td>\
            </tr>\
            <tr>\
            <td>Message</td>\
            <td>信息输出</td>\
            <td>输出一个信息</td>\
            <td>无</td>\
            </tr>\
            <tr>\
            <td>Switch</td>\
            <td>开关</td>\
            <td>可以用sensor探测</td>\
            <td>无</td>\
            </tr>\
            <tr>\
            <td>Memory cell</td>\
            <td>存储变量</td>\
            <td>可以储存64个变量</td>\
            <td>无</td>\
            </tr>\
            <tr>\
            <td>Data Bank</td>\
            <td>大型存储变量</td>\
            <td>可以储存512个变量</td>\
            <td>无</td>\
            </tr>\
            <tr>\
            <td>Logic Display</td>\
            <td>图形显示</td>\
            <td>显示范围80x80</td>\
            <td>无</td>\
            </tr>\
            <tr>\
            <td>Large Logic Display</td>\
            <td>大型图形显示</td>\
            <td>显示范围176x176</td>\
            <td>无</td>\
            </tr>\
            </tbody>\
            </table>';
            break;
        case 1:
            str = '<table>\
            <thead>\
            <tr>\
            <th>内存操作</th>\
            <th>方块控制</th>\
            <th>变量运算</th>\
            <th>流程控制</th>\
            <th>单位控制</th>\
            </tr>\
            </thead>\
            <tbody>\
            <tr>\
            <td><a href="/Mindustry-guide/Guide/read/read.html">Read</a></td>\
            <td><a href="/Mindustry-guide/Guide/drawFlush/drawFlush.html">Draw Flush</a></td>\
            <td><a href="/Mindustry-guide/Guide/set/set.html">Set</a></td>\
            <td><a href="/Mindustry-guide/Guide/end/end.html">End</a></td>\
            <td><a href="/Mindustry-guide/Guide/unitBind/unitBind.html">Unit Bind</a></td>\
            </tr>\
            <tr>\
            <td><a href="/Mindustry-guide/Guide/write/write.html">Write</a></td>\
            <td><a href="/Mindustry-guide/Guide/printFlush/printFlush.html">Print Flush</a></td>\
            <td><a href="/Mindustry-guide/Guide/operation/operation.html">Operation</a></td>\
            <td><a href="/Mindustry-guide/Guide/jump/jump.html">Jump</a></td>\
            <td><a href="/Mindustry-guide/Guide/unitControl/unitControl.html">Unit Control</a></td>\
            </tr>\
            <tr>\
            <td><a href="/Mindustry-guide/Guide/draw/draw.html">Draw</a></td>\
            <td><a href="/Mindustry-guide/Guide/getLink/getLink.html">Get Link</a></td>\
            <td><a href="/Mindustry-guide/Guide/wait/wait.html">Wait</a></td>\
            <td></td>\
            <td><a href="/Mindustry-guide/Guide/unitRadar/unitRadar.html">Unit Radar</a></td>\
            </tr>\
            <tr>\
            <td><a href="/Mindustry-guide/Guide/print/print.html">Print</a></td>\
            <td><a href="/Mindustry-guide/Guide/control/control.html">Control</a></td>\
            <td><a href="/Mindustry-guide/Guide/lookup/lookup.html">Lookup</a></td>\
            <td></td>\
            <td><a href="/Mindustry-guide/Guide/unitLocate/unitLocate.html">Unit Locate</a></td>\
            </tr>\
            <tr>\
            <td></td>\
            <td><a href="/Mindustry-guide/Guide/radar/radar.html">Radar</a></td>\
            <td></td>\
            <td></td>\
            <td></td>\
            </tr>\
            <tr>\
            <td></td>\
            <td><a href="/Mindustry-guide/Guide/sensor/sensor.html">Sensor</a></td>\
            <td></td>\
            <td></td>\
            <td></td>\
            </tr>\
            <tr>\
            <td>`</td>\
            <td></td>\
            <td></td>\
            <td></td>\
            <td></td>\
            </tr>\
            </tbody>\
            </table>';
            break;
        case 2:
            str = '<table>\
            <thead>\
            <tr>\
            <th>对象</th>\
            <th>描述</th>\
            </tr>\
            </thead>\
            <tbody>\
            <tr>\
            <td>@+方块名/单位名/液体名</td>\
            <td>方块/单位/液体本身</td>\
            </tr>\
            <tr>\
            <td>@time</td>\
            <td>自1970年1月1日到现在经过的毫秒</td>\
            </tr>\
            <tr>\
            <td>@this</td>\
            <td>指向当前对象自己</td>\
            </tr>\
            <tr>\
            <td>@thisx</td>\
            <td>获取当前对象自己的X坐标</td>\
            </tr>\
            <tr>\
            <td>@thisy</td>\
            <td>获取当前对象自己的Y坐标</td>\
            </tr>\
            <tr>\
            <td>@air</td>\
            <td>空气</td>\
            </tr>\
            <tr>\
            <td>@soild</td>\
            <td>不可通过墙</td>\
            </tr>\
            <tr>\
            <td>@links</td>\
            <td>绑定方块数</td>\
            </tr>\
            <tr>\
            <td>@counter</td>\
            <td>逻辑执行行数</td>\
            </tr>\
            <tr>\
            <td>@unit</td>\
            <td>当前绑定单位</td>\
            </tr>\
            <tr>\
            <td>@ipt</td>\
            <td>每tick执行行数</td>\
            </tr>\
            <tr>\
            <td>@totalItems</td>\
            <td>获取这个建筑物/单位内的所有物品的总计数量</td>\
            </tr>\
            <tr>\
            <td>@firstItem</td>\
            <td>获取这个建筑物/单位内的第一个物品的名称</td>\
            </tr>\
            <tr>\
            <td>@totalLiquid</td>\
            <td>获取这个建筑物/单位内的所有液体的总计数量</td>\
            </tr>\
            <tr>\
            <td>@totalPower</td>\
            <td>获取这个建筑物/单位内总电力</td>\
            </tr>\
            <tr>\
            <td>@itemCapacity</td>\
            <td>获取这个建筑物/单位内的物品的容量</td>\
            </tr>\
            <tr>\
            <td>@liquidCapacity</td>\
            <td>获取这个建筑物/单位内的液体的容量</td>\
            </tr>\
            <tr>\
            <td>@powerCapacity</td>\
            <td>获取这个建筑物/单位内的电力的容量</td>\
            </tr>\
            <tr>\
            <td>@powerNetStored</td>\
            <td>获取这个建筑物/单位内的电力网络的储存量</td>\
            </tr>\
            <tr>\
            <td>@powerNetCapacity</td>\
            <td>获取这个建筑物/单位内的电力网络的储存量容量</td>\
            </tr>\
            <tr>\
            <td>@powerNetIn</td>\
            <td>获取这个建筑物/单位内的电力网络输入量/产生量</td>\
            </tr>\
            <tr>\
            <td>@powerNetOut</td>\
            <td>获取这个建筑物/单位内的电力网络输出量/消耗量</td>\
            </tr>\
            <tr>\
            <td>@ammo</td>\
            <td>获取这个建筑物/单位内的子弹量</td>\
            </tr>\
            <tr>\
            <td>@ammoCapacity</td>\
            <td>获取这个建筑物/单位内的子弹量上限</td>\
            </tr>\
            <tr>\
            <td>@health</td>\
            <td>获取这个建筑物/单位的生命值</td>\
            </tr>\
            <tr>\
            <td>@maxHealth</td>\
            <td>获取这个建筑物/单位的生命值上限</td>\
            </tr>\
            <tr>\
            <td>@heat</td>\
            <td>获取这个建筑物/单位的发热</td>\
            </tr>\
            <tr>\
            <td>@efficiency</td>\
            <td>获取这个建筑物/单位的效率</td>\
            </tr>\
            <tr>\
            <td>@timescale</td>\
            <td>获取这个建筑物/单位的时间流速</td>\
            </tr>\
            <tr>\
            <td>@rotation</td>\
            <td>获取这个炮塔/单位的旋转角度,建筑物则获取朝向(0为沿建筑物x轴方向,逆时针)</td>\
            </tr>\
            <tr>\
            <td>@x</td>\
            <td>获取这个建筑物/单位的x坐标</td>\
            </tr>\
            <tr>\
            <td>@y</td>\
            <td>获取这个建筑物/单位的y坐标</td>\
            </tr>\
            <tr>\
            <td>@shootX</td>\
            <td>获取这个建筑物/单位的射击x坐标</td>\
            </tr>\
            <tr>\
            <td>@shootY</td>\
            <td>获取这个建筑物/单位的射击y坐标</td>\
            </tr>\
            <tr>\
            <td>@size</td>\
            <td>获取这个建筑物/单位的大小(正方形边长大小)</td>\
            </tr>\
            <tr>\
            <td>@dead</td>\
            <td>获取这个建筑物/单位是否失效(被摧毁返回1 有效返回0)</td>\
            </tr>\
            <tr>\
            <td>@range</td>\
            <td>获取这个建筑物/单位的攻击范围</td>\
            </tr>\
            <tr>\
            <td>@shooting</td>\
            <td>获取这个建筑物/单位的攻击状态(开火返回1 停火返回0)</td>\
            </tr>\
            <tr>\
            <td>@boosting</td>\
            <td>获取这个单位的飞行状态</td>\
            </tr>\
            <tr>\
            <td>@mineX</td>\
            <td>获取这个单位的挖矿x坐标</td>\
            </tr>\
            <tr>\
            <td>@mineY</td>\
            <td>获取这个单位的挖矿y坐标</td>\
            </tr>\
            <tr>\
            <td>@mining</td>\
            <td>获取这个单位的挖矿状态</td>\
            </tr>\
            <tr>\
            <td>@team</td>\
            <td>获取这个建筑物/单位的阵营</td>\
            </tr>\
            <tr>\
            <td>@type</td>\
            <td>返回这个建筑物/单位的类型</td>\
            </tr>\
            <tr>\
            <td>@flag</td>\
            <td>返回这个建筑物/单位的数字标记</td>\
            </tr>\
            <tr>\
            <td>@controlled</td>\
            <td>返回这个建筑物/单位是否被控制(处理器返回1 玩家返回2 编队返回3 如果都不是返回0)</td>\
            </tr>\
            <tr>\
            <td>@controller</td>\
            <td>返回一个单位的控制者(如果是处理器返回processor 编队返回 leader 如果都不是返回 itself)</td>\
            </tr>\
            <tr>\
            <td>@commanded</td>\
            <td>不建议使用 将被移除 使用controlled替代它</td>\
            </tr>\
            <tr>\
            <td>@name</td>\
            <td>返回被标记单位控制者名字</td>\
            </tr>\
            <tr>\
            <td>@config</td>\
            <td>获取这个单位的配置(如工厂生产的物品)</td>\
            </tr>\
            <tr>\
            <td>@payloadCount</td>\
            <td>获取单位的载荷数量</td>\
            </tr>\
            <tr>\
            <td>@payloadType</td>\
            <td>获取单位的载荷类型</td>\
            </tr>\
            <tr>\
            <td>@enabled</td>\
            <td>获取这个建筑物/单位的开启状态</td>\
            </tr>\
            <tr>\
            <td>@configure</td>\
            <td>获取这个建筑物的配置(常用于分类器)</td>\
            </tr>\
            </tbody>\
            </table>';
            break;
        case 3:
            str = '<details>\
            <summary><h5>1-2.输出与绘图</h5></summary>\
            <ol>\
            <li><a href="https://lanluz.github.io/Mindustry-guide/example/class1/example.html">第一课：打印出 &quot;Hello,Mindustry&quot;</a></li>\
            <li><a href="https://lanluz.github.io/Mindustry-guide/example/class2/example.html">第二课：根据仓库载荷绘制出载荷百分比显示图像</a></li>\
            </ol>\
            </details>\
            <details>\
            <summary><h5>3-5.循环实现</h5></summary>\
            <ol start="3">\
            <li><a href="https://lanluz.github.io/Mindustry-guide/example/class3/example.html">第三课：使用Memory cell的循环</a></li>\
            <li><a href="https://lanluz.github.io/Mindustry-guide/example/class4/example.html">第四课：使用jump的循环</a></li>\
            <li><a href="https://lanluz.github.io/Mindustry-guide/example/class5/example.html">第五课：使用@counter的循环</a></li>\
            </ol>\
            </details>\
            <details>\
            <summary><h5>6-9.建筑物控制</h5></summary>\
            <ol start="6">\
            <li>第六课：关闭/开启护盾发生装置</li>\
            <li>第七课：只瞄准BOSS攻击的合金炮</li>\
            <li>第八课：自动控制卸载的工厂</li>\
            </ol>\
            </details>\
            <details>\
            <summary><h5>9-13.单位控制</h5></summary>\
            <ol start="9">\
            <li><a href="https://lanluz.github.io/Mindustry-guide/example/class9/example.html">第九课：单个单位控制</a></li>\
            <li>第十课：单个单位拿/放资源到指定位置</li>\
            <li>第十一课：群控寻路进攻</li>\
            <li>第十二课：生命值低寻找最近的维修点</li>\
            <li>第十三课：远控单位</li>\
            </ol>\
            </details>\
            <p>感谢华漾制作的教程实例原型:\
            <a href="https://wwr.lanzoui.com/iLYh8pkf8oh">蓝奏云</a></p>\
            ';
            break;
        case 4:
            str = '<div>\
            <p>使用简单的标记语言可以为文本着色</p>\
            <p>[name] 通过内置的颜色名称进行颜色的设置</p>\
            <p>[#rrggbb] / [#rrggbbaa] 通过十六进制值设置颜色</p>\
            <p>rr 是<font color="red">红色</font>值，</p>\
            <p>gg 是<font color="green">绿色</font>值，</p>\
            <p>bb 是<font color="blue">蓝色</font>值，</p>\
            <p>aa 是<font color="gray">透明</font>度；</p>\
            <p>[] 将颜色设置回先前的颜色；</p>\
            <p>[[ 转义为左括号，因此您可以 [[red] 进行写操作并将其渲染为 [red]</p>\
            </div>\
            <h4>例子</h4>\
            \
            <pre><code>\
            [red]red\n\
            [#ff0000]full-red\
            </code></pre>\
            \
            <h4>输出效果</h4>\
            \
            <pre><code>\
            <font color="red">red</font>\n\
            <font color="#ff0000">full-red</font>\
            </code></pre>\
            \
            <h4>内置颜色</h4>\n\
            <pre><code>\
            [clear]<font color = "clear">clear</font>\n\
            [black]<font color = "black">black</font>\n\
            [white]<font color = "white">white</font>\n\
            [lightgray]<font color = "lightgray">lightgray</font>\n\
            [gray]<font color = "gray">gray</font>\n\
            [darkgray]<font color = "darkgray">darkgray</font>\n\
            [blue]<font color = "blue">blue</font>\n\
            [navy]<font color = "navy">navy</font>\n\
            [royal]<font color = "#002366">royal</font>\n\
            [slate]<font color = "slate">slate</font>\n\
            [sky]<font color = "#87ceeb">sky</font>\n\
            [cyan]<font color = "cyan">cyan</font>\n\
            [teal]<font color = "teal">teal</font>\n\
            [green]<font color = "green">green</font>\n\
            [acid]<font color = "acid">acid</font>\n\
            [lime]<font color = "lime">lime</font>\n\
            [forest]<font color = "forest">forest</font>\n\
            [olive]<font color = "olive">olive</font>\n\
            [yellow]<font color = "yellow">yellow</font>\n\
            [gold]<font color = "gold">gold</font>\n\
            [goldenrod]<font color = "goldenrod">goldenrod</font>\n\
            [orange]<font color = "orange">orange</font>\n\
            [brown]<font color = "brown">brown</font>\n\
            [tan]<font color = "tan">tan</font>\n\
            [brick]<font color = "brick">brick</font>\n\
            [red]<font color = "red">red</font>\n\
            [scarlet]<font color = "scarlet">scarlet</font>\n\
            [coral]<font color = "coral">coral</font>\n\
            [salmon]<font color = "salmon">salmon</font>\n\
            [pink]<font color = "pink">pink</font>\n\
            [magenta]<font color = "magenta">magenta</font>\n\
            [purple]<font color = "purple">purple</font>\n\
            [violet]<font color = "violet">violet</font>\n\
            [maroon]<font color = "maroon">maroon</font>\n\
            </code></pre>\
            ';
            break;
        case 5 :
            str="\
            ";
        break;
    }
    return str;
}
