## Mindustry Logic 中文手册 V0.1

<head>
    <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/5.12.1/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">
    <script src="./js/color.js" type="text/javascript"></script>
    <script src="./js/details.js" type="text/javascript"></script>

<script language="javascript" type="text/javascript" 
src="http://apps.bdimg.com/libs/jquery/1.8.1/jquery.min.js">	
</script>
<script type="text/javascript">
 var a_idx = 0; jQuery(document).ready(function($) 
 	{ $("body").click(function(e) { var a = new Array("像素","工厂","逻辑","手册",""); 
var $i = $("<span/>").text(a[a_idx]); 
a_idx = (a_idx + 1) % a.length; var x = e.pageX, y = e.pageY;
 $i.css({ "z-index": 99, "top": y - 20, "left": x, "position": "absolute", "font-weight": "bold", "color": randomColor() }); $("body").append($i); $i.animate({ "top": y - 180, "opacity": 0 }, 1500, function(){ $i.remove(); }); }); });
 </script>

</head>

---

你可以在这个网页上阅读或者下载到玩家分享的逻辑

也可以进入 [GitHub](https://github.com/LanluZ/Mindustry-guide) 查看

<a href="https://github.com/LanluZ/Mindustry-guide" target="_blank" class="btn btn-secondary col-lg-4"><b>GitHub</b></a>

---

<div>
    <button class="btn btn-warning" onclick="details(0)"><b>逻辑方块</b></button>
    <button class="btn btn-warning" onclick="details(1)"><b>逻辑指令</b></button>
    <button class="btn btn-warning" onclick="details(2)"><b>关键字表</b></button>
    <button class="btn btn-warning" onclick="details(3)"><b>实例教学</b></button>
</div>

<p></p>

<div id = "guideOutPut">
</div>

---

#### 下载

<details>

<h4>华漾Emoji</h4>
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

</details>

---

#### 滑稽支持

原帖链接：[百度贴吧](https://tieba.baidu.com/p/7296831967)

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

