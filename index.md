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

<!-- 飘落CSS -->
<style>
    body {
        position: relative;
        overflow-x: hidden;
        background:#fff url(https://cdn.jsdelivr.net/gh/Anuken/Mindustry/core/assets/icons/icon_64.png) no-repeat top right;
        
    }

    .leave {
        position: fixed;
        width: 25px;
        height: 20px;
        -webkit-animation-iteration-count: infinite,infinite;
        -webkit-animation-direction: normal,normal;
        -webkit-animation-timing-function: linear,ease-in;
        -moz-animation-iteration-count: infinite,infinite;
        -moz-animation-direction: normal,normal;
        -moz-animation-timing-function: linear,ease-in;
        -o-animation-iteration-count: infinite,infinite;
        -o-animation-direction: normal,normal;
        -o-animation-timing-function: linear,ease-in;
        animation-iteration-count: infinite,infinite;
        animation-direction: normal,normal;
        animation-timing-function: linear,ease-in;
    }

    .leave>img {
        position: fixed;
        width: 25px;
        height: 20px;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;
        -webkit-animation-timing-function: ease-in-out;
        -webkit-transform-origin: 50% -100%;
        -moz-animation-iteration-count: infinite;
        -moz-animation-direction: alternate;
        -moz-animation-timing-function: ease-in-out;
        -moz-transform-origin: 50% -100%;
        -o-animation-iteration-count: infinite;
        -o-animation-direction: alternate;
        -o-animation-timing-function: ease-in-out;
        -o-transform-origin: 50% -100%;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        animation-timing-function: ease-in-out;
        transform-origin: 50% -100%;
    }

    @-webkit-keyframes fade {
        0% {
            opacity: 1
        }

        95% {
            opacity: 1
        }

        100% {
            opacity: 0
        }
    }

    @-webkit-keyframes drop {
        0% {
            -webkit-transform: translate(30px,-50px)
        }

        100% {
            -webkit-transform: translate(-200px,650px)
        }
    }

    @-webkit-keyframes clockwiseSpin {
        0% {
            -webkit-transform: rotate(-50deg)
        }

        100% {
            -webkit-transform: rotate(50deg)
        }
    }

    @-webkit-keyframes counterclockwiseSpinAndFlip {
        0% {
            -webkit-transform: scale(-1,1) rotate(50deg)
        }

        100% {
            -webkit-transform: scale(-1,1) rotate(-50deg)
        }
    }

    @-moz-keyframes fade {
        0% {
            opacity: 1
        }

        95% {
            opacity: 1
        }

        100% {
            opacity: 0
        }
    }

    @-moz-keyframes drop {
        0% {
            -moz-transform: translate(30px,-50px)
        }

        100% {
            -moz-transform: translate(-200px,650px)
        }
    }

    @-moz-keyframes clockwiseSpin {
        0% {
            -moz-transform: rotate(-50deg)
        }

        100% {
            -moz-transform: rotate(50deg)
        }
    }

    @-moz-keyframes counterclockwiseSpinAndFlip {
        0% {
            -moz-transform: scale(-1,1) rotate(50deg)
        }

        100% {
            -moz-transform: scale(-1,1) rotate(-50deg)
        }
    }

    @-o-keyframes fade {
        0% {
            opacity: 1
        }

        95% {
            opacity: 1
        }

        100% {
            opacity: 0
        }
    }

    @-o-keyframes drop {
        0% {
            -o-transform: translate(30px,-50px)
        }

        100% {
            -o-transform: translate(-200px,650px)
        }
    }

    @-o-keyframes clockwiseSpin {
        0% {
            -o-transform: rotate(-50deg)
        }

        100% {
            -o-transform: rotate(50deg)
        }
    }

    @-o-keyframes counterclockwiseSpinAndFlip {
        0% {
            -o-transform: scale(-1,1) rotate(50deg)
        }

        100% {
            -o-transform: scale(-1,1) rotate(-50deg)
        }
    }

    @keyframes fade {
        0% {
            opacity: 1
        }

        95% {
            opacity: 1
        }

        100% {
            opacity: 0
        }
    }

    @keyframes drop {
        0% {
            transform: translate(30px,-50px)
        }

        100% {
            transform: translate(-200px,650px)
        }
    }

    @keyframes clockwiseSpin {
        0% {
            transform: rotate(-50deg)
        }

        100% {
            transform: rotate(50deg)
        }
    }

    @keyframes counterclockwiseSpinAndFlip {
        0% {
            transform: scale(-1,1) rotate(50deg)
        }

        100% {
            transform: scale(-1,1) rotate(-50deg)
        }
    }

</style>

</head>


![logo](https://cdn.jsdelivr.net/gh/LanluZ/Mindustry-guide/img/Mindustry-logo.png)

<h1><font color="#6f60aa"><b>Mindustry Logic 中文手册 V0.1.1</b></font></h1>

---

<p>你可以在这个网页上阅读或者下载到玩家分享的逻辑</p>

也可以进入 [GitHub](https://github.com/LanluZ/Mindustry-guide) 查看

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

<!--飘落代码块-->
<script>
		~(function(doc) {
	var FallingLeaves = function(num, id) {
			this.body = doc.body;
			this.support = false;
			this.container = id ? doc.getElementById('id') : this.body;
			this.num = num ? num : 5;
			this.init()
		};
	FallingLeaves.prototype = {
		init: function() {
			this.supportNot();
			if (this.support != false) {
				for (var i = 0; i < this.num; i++) {
					this.container.appendChild(this.createLeaf())
				}
			}
		},
		supportNot: function() {
			var domPrefixes = 'Webkit Moz O ms a'.split(' ');
			for (var i = 0; i < domPrefixes.length; i++) {
				if (this.container.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
					this.support = domPrefixes[i];
					break
				}
				if (domPrefixes[i] == "a") {
					if (this.container.style.animationName !== undefined) {
						this.support = domPrefixes[i];
						break
					}
				}
			}
		},
		randomInteger: function(low, high) {
			return low + Math.floor(Math.random() * (high - low))
		},
		randomFloat: function(low, high) {
			return low + Math.random() * (high - low)
		},
		pixelValue: function(value) {
			return value + 'px'
		},
		durationValue: function(value) {
			return value + 's'
		},
		createLeaf: function() {
			var self = this,
				leafDiv = doc.createElement('div'),
				image = doc.createElement('img'),
				spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip',
				fadeAndDropDuration = self.durationValue(self.randomFloat(5, 11)),
				spinDuration = self.durationValue(self.randomFloat(4, 8)),
				leafDelay = self.durationValue(self.randomFloat(0, 5));
			leafDiv.className = "leave";
			image.src = "https://cdn.jsdelivr.net/gh/Anuken/Mindustry/core/assets-raw/sprites/units/gamma.png";
			leafDiv.style.top = self.pixelValue(30);
			leafDiv.style.right = self.pixelValue(self.randomInteger(0, 50));
			if (self.container.style[self.support + 'AnimationName'] !== undefined) {
				image.style[self.support + 'AnimationName'] = spinAnimationName;
				image.style[self.support + 'AnimationDuration'] = spinDuration;
				leafDiv.style[self.support + 'AnimationName'] = 'fade, drop';
				leafDiv.style[self.support + 'AnimationDelay'] = leafDelay + ', ' + leafDelay;
				leafDiv.style[self.support + 'AnimationDuration'] = fadeAndDropDuration + ', ' + fadeAndDropDuration
			}
			if (this.support == "a") {
				image.style.animationName = spinAnimationName;
				image.style.animationDuration = spinDuration;
				leafDiv.style.animationName = 'fade, drop';
				leafDiv.style.animationDelay = leafDelay + ', ' + leafDelay;
				leafDiv.style.animationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration
			}
			leafDiv.appendChild(image);
			return leafDiv
		}
	};
	new FallingLeaves();
})(document);
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

<font color="white">ps. 有一个古老的传说，发的滑稽足够多了，涩图就会出现</font>

<div>
    <form action="javascript:out()" method="post">
    <input
        type="image"
        src="https://tb2.bdstatic.com/tb/editor/images/face/i_f25.png?t=20140803"
        alt="点我"
    />
    </form>
</div>

<div id="BackgroundArea">

<div id="emojiOutPut"></div>

</div>