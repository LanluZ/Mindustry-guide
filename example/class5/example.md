# 第五课

---

**目标**

使用@counter的循环

变量 i 在0~256之间循环

---

**开始**

![001](/example/class5/img/001.png)

1. 使用 Set 定义循环变量 i

![002](/example/class5/img/002.png)

2. 使用 Operation 递增变量 i

![003](/example/class5/img/003.png)

3. 使用 Set 设置 @Counter 为 1 （意为执行到该逻辑块时跳转到第1行逻辑块）（行数以第0行开始）

![004](/example/class5/img/004.png)

4. 使用 Jump 进行判断

![005](/example/class5/img/005.png)

5. 如果小于256则继续循环，大于等于256则停止本次循环

![006](/example/class5/img/006.png)

6. 总览 

---

**流程图**


<html><head><link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vditor@3.6.0/dist/index.css"/>
<script src="https://cdn.jsdelivr.net/npm/vditor@3.6.0/dist/method.min.js"></script></head>
<body><div class="vditor-reset" id="preview"><pre><code class="language-mermaid">graph TD;
	s(开始)
	set[i = 0]
	op[i = i + 1]
	if{i &gt;= 256}
	se[counter = 1]
	e(结束)
	s--&gt;set--&gt;op--&gt;if--&gt;|否|se
	se--&gt;op
	if--&gt;|是|e
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

---

[返回](https://lanluz.github.io/Mindustry-guide/)