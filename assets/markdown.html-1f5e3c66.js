import{_ as n,o as s,c as a,e as p}from"./app-545c325f.js";const t="/assets/2023-02-17-00-54-27-a9c756bf.png",e="/assets/2023-02-17-00-54-49-3c3ebb54.png",c={},o=p('<p><img src="'+t+`" alt=""></p><h2 id="递归求解" tabindex="-1"><a class="header-anchor" href="#递归求解" aria-hidden="true">#</a> 递归求解</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> 走格子<span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> 走格子 <span class="token punctuation">{</span>

 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">doSomeThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">process</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;当前找到：&quot;</span> <span class="token operator">+</span> count <span class="token operator">+</span> <span class="token string">&quot;种&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">static</span> <span class="token class-name">String</span> f<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 <span class="token keyword">static</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> directions <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">&quot;↑&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;↓&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;←&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;→&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token keyword">static</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

 <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">String</span> f<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> cur_y<span class="token punctuation">,</span> <span class="token keyword">int</span> cur_x<span class="token punctuation">,</span> <span class="token keyword">int</span> step<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>cur_y <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> cur_y <span class="token operator">&gt;=</span> <span class="token number">3</span> <span class="token operator">||</span> cur_x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> cur_x <span class="token operator">&gt;=</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 越界</span>
   <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>f<span class="token punctuation">[</span>cur_y<span class="token punctuation">]</span><span class="token punctuation">[</span>cur_x<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 不能走走过的路</span>
   <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
    step <span class="token operator">==</span> <span class="token number">18</span>
    <span class="token operator">&amp;&amp;</span> cur_y <span class="token operator">==</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> cur_x <span class="token operator">==</span> <span class="token number">5</span> <span class="token comment">// 走了18步，到达终点位置</span>
    <span class="token operator">&amp;&amp;</span> f<span class="token punctuation">[</span>cur_y<span class="token punctuation">]</span><span class="token punctuation">[</span>cur_x<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span>  <span class="token comment">//</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;find:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> f<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   count<span class="token operator">++</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> direction <span class="token operator">:</span> directions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   f<span class="token punctuation">[</span>cur_y<span class="token punctuation">]</span><span class="token punctuation">[</span>cur_x<span class="token punctuation">]</span> <span class="token operator">=</span> direction<span class="token punctuation">;</span>
   <span class="token keyword">switch</span> <span class="token punctuation">(</span>direction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;↑&quot;</span><span class="token operator">:</span>
     <span class="token function">process</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> cur_y <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> cur_x <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;↓&quot;</span><span class="token operator">:</span>
     <span class="token function">process</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> cur_y <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> cur_x <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;←&quot;</span><span class="token operator">:</span>
     <span class="token function">process</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> cur_y <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">,</span> cur_x <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;→&quot;</span><span class="token operator">:</span>
     <span class="token function">process</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> cur_y <span class="token operator">+</span> <span class="token number">0</span><span class="token punctuation">,</span> cur_x <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">break</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
   f<span class="token punctuation">[</span>cur_y<span class="token punctuation">]</span><span class="token punctuation">[</span>cur_x<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">doSomeThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;耗时:&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;毫秒&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>走到[2,5]位置的输出测试</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>find:
[↓, →, ↓, →, →, ↓]
[↓, ↑, ↓, ↑, ↓, ←]
[→, ↑, →, ↑, →, null]
find:
[↓, →, ↓, →, →, ↓]
[↓, ↑, ↓, ↑, ←, ↓]
[→, ↑, →, →, ↑, null]
find:
[↓, →, →, ↓, →, ↓]
[↓, ↑, ↓, ←, ↑, ↓]
[→, ↑, →, →, ↑, null]
find:
[↓, →, →, →, →, ↓]
[↓, ↑, ↓, ←, ←, ←]
[→, ↑, →, →, →, null]
find:
[↓, →, →, ↓, →, ↓]
[↓, ↑, ←, ↓, ↑, ↓]
[→, →, ↑, →, ↑, null]
find:
[↓, →, →, →, →, ↓]
[↓, ↑, ←, ↓, ←, ←]
[→, →, ↑, →, →, null]
find:
[↓, →, →, →, →, ↓]
[↓, ↑, ←, ←, ↓, ←]
[→, →, →, ↑, →, null]
find:
[↓, →, →, →, →, ↓]
[↓, ↑, ←, ←, ←, ↓]
[→, →, →, →, ↑, null]
find:
[→, ↓, →, ↓, →, ↓]
[↓, ←, ↑, ↓, ↑, ↓]
[→, →, ↑, →, ↑, null]
find:
[→, ↓, →, →, →, ↓]
[↓, ←, ↑, ↓, ←, ←]
[→, →, ↑, →, →, null]
find:
[→, ↓, →, →, →, ↓]
[↓, ←, ↑, ←, ↓, ←]
[→, →, →, ↑, →, null]
find:
[→, ↓, →, →, →, ↓]
[↓, ←, ↑, ←, ←, ↓]
[→, →, →, →, ↑, null]
find:
[→, →, ↓, →, →, ↓]
[↓, ←, ←, ↑, ↓, ←]
[→, →, →, ↑, →, null]
find:
[→, →, ↓, →, →, ↓]
[↓, ←, ←, ↑, ←, ↓]
[→, →, →, →, ↑, null]
find:
[→, →, →, ↓, →, ↓]
[↓, ←, ←, ←, ↑, ↓]
[→, →, →, →, ↑, null]
find:
[→, →, →, →, →, ↓]
[↓, ←, ←, ←, ←, ←]
[→, →, →, →, →, null]
当前找到：16种
耗时:40毫秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><img src="`+e+`" alt=""></p><p>走到[0,2]位置的输出测试</p><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>当前找到：0种
耗时:2毫秒
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[o];function i(u,r){return s(),a("div",null,l)}const d=n(c,[["render",i],["__file","markdown.html.vue"]]);export{d as default};
