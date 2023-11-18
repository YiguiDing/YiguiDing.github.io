import{_ as n,o as s,c as a,e as t}from"./app-5e015a01.js";const p={},e=t(`<h2 id="线段树复习" tabindex="-1"><a class="header-anchor" href="#线段树复习" aria-hidden="true">#</a> 线段树复习</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">RangeTree</span> <span class="token punctuation">{</span>
 <span class="token keyword">int</span> curV<span class="token punctuation">;</span>
 <span class="token keyword">int</span> curL<span class="token punctuation">;</span>
 <span class="token keyword">int</span> curR<span class="token punctuation">;</span>
 <span class="token keyword">int</span> curM<span class="token punctuation">;</span>
 <span class="token class-name">RangeTree</span> left<span class="token punctuation">;</span>
 <span class="token class-name">RangeTree</span> right<span class="token punctuation">;</span>

 <span class="token class-name">RangeTree</span><span class="token punctuation">(</span><span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token class-name">RangeTree</span><span class="token punctuation">(</span><span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  curL <span class="token operator">=</span> l<span class="token punctuation">;</span>
  curR <span class="token operator">=</span> r<span class="token punctuation">;</span>
  curM <span class="token operator">=</span> curL <span class="token operator">+</span> <span class="token punctuation">(</span>curR <span class="token operator">-</span> curL<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curL <span class="token operator">!=</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   left <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RangeTree</span><span class="token punctuation">(</span>curL<span class="token punctuation">,</span> curM<span class="token punctuation">)</span><span class="token punctuation">;</span>
   right <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RangeTree</span><span class="token punctuation">(</span>curM <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> curR<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">void</span> <span class="token function">insert</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span> <span class="token keyword">int</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  curV <span class="token operator">+=</span> num<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curL <span class="token operator">!=</span> curR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> curM<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    left<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    right<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">int</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token keyword">int</span> tarL<span class="token punctuation">,</span> <span class="token keyword">int</span> tarR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>curL <span class="token operator">==</span> tarR<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> curV<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>tarR <span class="token operator">&lt;=</span> curM<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> left<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>tarL<span class="token punctuation">,</span> tarR<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>curM <span class="token operator">&lt;</span> tarL<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> right<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>tarL<span class="token punctuation">,</span> tarR<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> left<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>tarL<span class="token punctuation">,</span> curM<span class="token punctuation">)</span> <span class="token operator">+</span> right<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>curM <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> tarR<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[e];function o(u,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","线段树复习.html.vue"]]);export{r as default};
