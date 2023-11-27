import{_ as n,o as s,c as a,e as t}from"./app-e370b872.js";const p="/assets/2022-06-23-00-04-33-f2f479e0.png",e="/assets/2022-06-23-00-45-58-d5ceaab0.png",l="/assets/2022-06-23-00-46-43-ccff4704.png",c={},i=t('<h1 id="响应式学习笔记" tabindex="-1"><a class="header-anchor" href="#响应式学习笔记" aria-hidden="true">#</a> 响应式学习笔记</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><ul><li><p>能更具设备的视口宽度自适应的调整网页的布局方式</p></li><li><p>对于企业站等类似内容比较少的网站可以做成响应式，电商站不适合做响应式，一般单独开发成pc端页面和移动端页面的两个独立的页面<br><img src="'+p+'" alt=""></p></li><li><p>解决方案</p><ul><li>媒体查询</li><li>bootstrap</li></ul></li></ul><h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询" aria-hidden="true">#</a> 媒体查询</h2><ul><li><p>根据设备宽度的变化，设置差异化样式</p></li><li><p>常用写法</p><ul><li><strong>max-width:XXXpx</strong> <strong>&gt;=XXXpx</strong> 对最大不超过该数的宽度生效</li><li><strong>min-width:XXXpx</strong> <strong>&lt;=XXXpx</strong> 对最小不低于该数的宽度生效</li></ul></li><li><p>关键词</p><ul><li><code>and</code></li><li><code>only</code></li><li><code>not</code></li></ul></li><li><p>媒体类型<br><img src="'+e+'" alt=""></p></li><li><p>媒体特征<br><img src="'+l+`" alt=""></p></li><li><p>语法格式</p></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* 完整写法 */</span>
    <span class="token atrule"><span class="token rule">@media</span> 关键词 媒体类型 <span class="token keyword">and</span> <span class="token punctuation">(</span>媒体特性<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
        <span class="token selector">选择器</span><span class="token punctuation">{</span>
            样式
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">/* 省略写法 */</span>
    <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span>媒体特性<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
        <span class="token selector">选择器</span><span class="token punctuation">{</span>
            样式
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 外链式写法 --&gt;</span>
    <span class="token comment">&lt;!-- 完整写法 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>逻辑符 媒体类型 and (媒体特征)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 完整写法 --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(媒体特征)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>style.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码1</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 视口宽度小于768px：背景显示粉色 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span>768px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token selector">body</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 视口宽度大于768px：背景显示绿色 */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span>768px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
    <span class="token selector">body</span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>green <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例代码2</strong></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token comment">// bootstrap的间断点</span>
<span class="token comment">// ExtraSmall &lt;576px</span>
<span class="token comment">// Small ≥576px</span>
<span class="token comment">// Medium ≥768px</span>
<span class="token comment">// Large ≥992px</span>
<span class="token comment">// X-Large ≥1200px</span>
<span class="token comment">// XX-Large ≥1400px</span>

<span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token comment">//对于视口宽度在 1400px-无穷 的设备生效</span>
    <span class="token atrule">@media<span class="token punctuation">(</span>min-width<span class="token punctuation">:</span>1400px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>black <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//对于视口宽度在 0-1400px 的设备生效</span>
    <span class="token atrule">@media<span class="token punctuation">(</span>max-width<span class="token punctuation">:</span>1400px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>red <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//对于视口宽度在 0-1200px 的设备生效</span>
    <span class="token atrule">@media<span class="token punctuation">(</span>max-width<span class="token punctuation">:</span>1200px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>blue <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//对于视口宽度在 0-992px 的设备生效</span>
    <span class="token atrule">@media<span class="token punctuation">(</span>max-width<span class="token punctuation">:</span>992px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>gold <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//对于视口宽度在 0-768px 的设备生效</span>
    <span class="token atrule">@media<span class="token punctuation">(</span>max-width<span class="token punctuation">:</span>768px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>green <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//对于视口宽度在 0-576px 的设备生效</span>
    <span class="token atrule">@media<span class="token punctuation">(</span>max-width<span class="token punctuation">:</span>576px<span class="token punctuation">)</span></span><span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span>skyblue <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//根据层叠性和叠加性,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bootstrap" tabindex="-1"><a class="header-anchor" href="#bootstrap" aria-hidden="true">#</a> bootstrap</h2><ul><li>内容较独立，单独做笔记</li></ul>`,12),o=[i];function u(d,r){return s(),a("div",null,o)}const m=n(c,[["render",u],["__file","响应式.html.vue"]]);export{m as default};
