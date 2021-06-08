<head>
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/5.12.1/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
    <script src="./js/color.js" type="text/javascript"></script>
    <script src="./js/details.js" type="text/javascript"></script>
    <link rel="shortcut icon" href="http://www.runoob.com/images/tryitimg.gif" type="image/x-icon">
    <title>Mindustry中文逻辑手册</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/bootstrap-grid.min.css" />
    <!--CSS RESET-->
    <link href="./css/nicebord.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
      body {
        width: 100%;
        overflow: hidden;
      }
      .row,
      .row a {
        text-align: center;
        color: #d5d6e2;
        text-decoration: none;
      }
      .aimg {
        margin: 10px auto;
      }
    </style>
</head>

<h1><font color="#6f60aa"><b>Mindustry Logic 中文手册 V0.1.1</b></font></h1>

---

你可以在这个网页上阅读或者下载到玩家分享的逻辑

也可以进入 [GitHub](https://github.com/LanluZ/Mindustry-guide) 查看


<a href="https://github.com/LanluZ/Mindustry-guide" target="_blank" class="btn btn-secondary col-lg-4"><a href='#' class='nice'>GitHub</a></a>

---

<div>
    <button class="btn btn-warning" onclick="details(0)"><a href='#' class='nice'>逻辑方块</a></button>
    <button class="btn btn-warning" onclick="details(1)"><a href='#' class='nice'>逻辑指令</a></button>
    <button class="btn btn-warning" onclick="details(2)"><a href='#' class='nice'>对象表</a></button>
    <button class="btn btn-warning" onclick="details(3)"><a href='#' class='nice'>实例教学</a></button>
    <button class="btn btn-warning" onclick="details(4)"><a href='#' class='nice'>颜色标记</a></button>
</div>
<p></p>
<div>
    <button id="button-palette" class="btn btn-info"><b><a href='#' class='nice'>取色板</a></b></button>
</div>


<!--调色板页面弹出-->
<div id="aplayer" class="aplayer" data-order="random" data-id="20173709" data-server="netease" data-type="playlist" data-fixed="true" data-autoplay="true" data-volume="0.8"></div>
<!-- aplayer -->
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/kaygb/kaygb@master/layer/layer.js"></script>
<script>
    $('#button-palette').on('click', function() {
        layer.open({
            type: 2,
            title: '调色板',
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['80%', '100%'],
            content: './color.html'
        });
    });
</script>

<p></p>

<div id="guideOutPut"></div>


<script src="./js/color.js" type="text/javascript"></script>
<script src="./js/details.js" type="text/javascript"></script>
<script src="./js/color-disc.min.js"></script>
<script src="./js/script.js"></script>

<!--回到顶部-->
<a href="#" class="scroll-to-top"></a>
<script src="js/jquery.min.js"></script>
<script src="js/index.js"></script>

<!--边框插件-->
<script src="js/jquery-1.11.0.min.js" type="text/javascript"></script>
<script src="js/nicebord.js"></script>
<script>
$(document).ready(function(){
    $('#first').nicebord({
    color: '#000',
    orientation: 'ackw',
    size:5,
    speed:200,
    direction:true,
    center:true
    });
    $('.nice').nicebord({
    color: '#000',
    orientation: 'ackw',
    size:3,
    pos:'top,bottom',
    speed:500
    });
    $('.aimg').nicebord({
    color: '#000',
    orientation: 'ckw',
    size:5,
    speed:200,
    direction:false,
    fix:true,
    center:true
    });
});
</script>

---

#### 下载

<details>
<p></p>
<b>华漾Emoji</b>
<ol>
<li><a href="https://github.com/LanluZ/Mindustry-guide/blob/main/Player-Share/%E5%8D%8E%E6%BC%BEEmoji/%E7%82%B9%E9%98%B5%E7%A5%9E%E9%A3%8E%E8%BD%B0%E7%82%B8%E6%9C%BA_Emoji%E6%94%B9.msch">点阵神风轰炸机_Emoji改</a></li>
</ol>

</details>

---

#### 反馈

因编者能力和精力有限，如果您有任何建议都可以反馈到这个邮箱
LanluZ@foxmail.com

---

#### 特别鸣谢

排名不分先后

<details>

    华漾emoji
    灵蓝♥ 
    MI2 


</details>

---

#### 滑稽支持

原帖链接：[百度贴吧](https://tieba.baidu.com/p/7296831967)

<font color="white">ps. 纯手工打造html,不来发个滑稽吗</font>

<div>
    <form action="javascript:out()" method="post">
    <input
        type="image"
        src="https://tb2.bdstatic.com/tb/editor/images/face/i_f25.png?t=20140803"
        alt="点我"
    />
    </form>
</div>

<div id="emojiOutPut"></div>