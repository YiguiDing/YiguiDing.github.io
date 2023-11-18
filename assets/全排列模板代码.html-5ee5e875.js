import{_ as n,o as s,c as a,e as t}from"./app-151cd212.js";const p={},e=t(`<h2 id="全排列模板代码" tabindex="-1"><a class="header-anchor" href="#全排列模板代码" aria-hidden="true">#</a> 全排列模板代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> 全排列模板代码<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 全排列 <span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> test <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token function">f</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token comment">// 全排列</span>
 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">,</span> <span class="token keyword">int</span> step<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>step <span class="token operator">==</span> array<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 得到全排列的结果</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> step<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">exchange</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> step<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 从后面的可选项中挑选一个放到当前位置</span>
    <span class="token function">f</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 递归确认下一个位置的元素</span>
    <span class="token function">exchange</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> step<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 交换回来，恢复原样，回溯。</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">exchange</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">!=</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
   arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[0, 1, 2, 3]
[0, 1, 3, 2]
[0, 2, 1, 3]
[0, 2, 3, 1]
[0, 3, 2, 1]
[0, 3, 1, 2]

[1, 0, 2, 3]
[1, 0, 3, 2]
[1, 2, 0, 3]
[1, 2, 3, 0]
[1, 3, 2, 0]
[1, 3, 0, 2]

[2, 1, 0, 3]
[2, 1, 3, 0]
[2, 0, 1, 3]
[2, 0, 3, 1]
[2, 3, 0, 1]
[2, 3, 1, 0]

[3, 1, 2, 0]
[3, 1, 0, 2]
[3, 2, 1, 0]
[3, 2, 0, 1]
[3, 0, 2, 1]
[3, 0, 1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[e];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","全排列模板代码.html.vue"]]);export{r as default};
