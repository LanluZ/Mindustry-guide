# 第四课

---

**目标**

使用jump实现循环

每256为一个周期

---

**开始**

![001](/Mindustry-guide/example/class4/img/001.png)

1. 使用 Set 设置循环变量 i
   
![002](/Mindustry-guide/example/class4/img/002.png)

2. 使用 Operation 设置 i = i + 1

![003](/Mindustry-guide/example/class4/img/003.png)

3. 在中间插入 jump 如果 i >= 256 则重新设置 i 的值（指向 Set）

![004](/Mindustry-guide/example/class4/img/004.png)

4. 总览


如果难以理解请见下方流程图

---

**流程图**

<html><head><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vditor@3.6.0/dist/index.css"/>
<script src="https://cdn.jsdelivr.net/npm/vditor@3.6.0/dist/method.min.js"></script></head>
<body><div class="vditor-reset" id="preview"><pre><code class="language-mermaid">graph TD;
	start(开始)
	set[i = 0]
	op[i = i + 1]
	jump{i &gt;= 256}
	e(结束)
	start--&gt;set--&gt;jump--&gt;|是|set
	jump--&gt;|否|op--&gt;e
</code></pre>
</div>
<script>
    const previewElement = document.getElementById('preview')
    Vditor.setContentTheme('light', 'https://cdn.jsdelivr.net/npm/vditor@3.6.0/dist/css/content-theme');
    Vditor.codeRender(previewElement, 'zh_CN');
    Vditor.highlightRender({"enable":true,"lineNumber":false,"style":"github"}, previewElement, 'https://cdn.jsdelivr.net/npm/vditor@3.6.0');
    Vditor.mathRender(previewElement, {
        cdn: 'https://cdn.jsdelivr.net/npm/vditor@3.6.0',
        math: {"engine":"KaTeX","inlineDigit":false,"macros":{}},
    });
    Vditor.mermaidRender(previewElement, 'https://cdn.jsdelivr.net/npm/vditor@3.6.0');
    Vditor.flowchartRender(previewElement, 'https://cdn.jsdelivr.net/npm/vditor@3.6.0');
    Vditor.graphvizRender(previewElement, 'https://cdn.jsdelivr.net/npm/vditor@3.6.0');
    Vditor.chartRender(previewElement, 'https://cdn.jsdelivr.net/npm/vditor@3.6.0');
    Vditor.mindmapRender(previewElement, 'https://cdn.jsdelivr.net/npm/vditor@3.6.0');
    Vditor.abcRender(previewElement, 'https://cdn.jsdelivr.net/npm/vditor@3.6.0');
    Vditor.mediaRender(previewElement);
</script></body></html>

ps.本质上是if-goto式循环

---

**练习**

使用jump循环结合第二课内容绘制出仓库储量百分比的“心电图”

---

[返回](https://lanluz.github.io/Mindustry-guide/)