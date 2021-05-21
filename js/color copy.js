  //原始数据
  var name = [
    "尘世浮华Ian,qq2357534060,黄金眼0号机,请问而退欧附近,Gewspt-,霒蚀君的主人",
  ];
  //切割
  list = name.split(",");
  //色彩
  var color = new Array();

  for (var i = 0; i < 16; i++) {
    color[i] = "#" + Math.random().toString(16).substr(-6);
  }

function out(){
    document.getElementById("outPut").innerHTML=table();
}

function table() {

  //输出表格(8列1行)
  document.write("<table>");
  for (var i = 0, j = 0, h = 0; i < list.length; i++, j++, h++) {
    if (j == 16) j = 0;

    //行头
    if (h == 0) document.write("<tr>");

    //内容
    document.write(
      "<td><font color=" + color[j] + ">" + list[i] + "</font></td>"
    );

    //行尾
    if (h == 8) document.write("</tr>");
  }
  document.write("</table>");
}

function text(){
    alert("按钮");
}
