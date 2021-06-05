//原始数据
var name = [
    "尘世浮华Ian,qq2357534060,黄金眼0号机,请问而退欧附近,Gewspt-,霒蚀君的主人","贴吧用户_aUSSA5Q",
    "灵魂派蒙"
];
//切割
list = name.split(",");
//色彩
var color = new Array();
//展开判断
var emojiDetails = 0;

function out() {
    if (!emojiDetails) {
        document.getElementById("emojiOutPut").innerHTML = table();
        emojiDetails = 1;
    } else {
        var ob1 = document.getElementById("emojiOutPut");
        var ob2 = document.getElementById("emojiStart");
        ob1.removeChild(ob2);
        emojiDetails = 0;
    }
}

function randomColor(){
    //颜色生成
    for (var i = 0; i < 16; i++) {
        color[i] = "#" + Math.random().toString(16).substr(-6);
    }return color[0];
}

function table() {
    //输出
    var out = new Array();

    randomColor();
    //输出表格(8列1行)
    out += "<table id='emojiStart'>";
    for (var i = 0, j = 0, h = 0; i < list.length; i++, j++, h++) {
        if (j == 16) j = 0;

        //行头
        if (h == 0) out += ("<tr>")

        //内容
        out += ("<td><font color=" + color[j] + ">" + list[i] + "</font></td>");

        //行尾
        if (h == 8) out += ("</tr>");
    }
    out += ("</table>");
    return out;
}

