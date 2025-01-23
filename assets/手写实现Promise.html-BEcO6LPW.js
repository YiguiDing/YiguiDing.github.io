import{_ as n,c as s,o as a,b as p}from"./app-B5jxZGJY.js";const e={},t=p(`<h2 id="基本结构搭建" tabindex="-1"><a class="header-anchor" href="#基本结构搭建"><span>基本结构搭建</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//1. 声明构造函数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//2. 添加then方法</span></span>
<span class="line">    <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// let p = new Promise((resolve,reject)=&gt;{</span></span>
<span class="line">    <span class="token comment">//     resolve(&quot;OK&quot;)</span></span>
<span class="line">    <span class="token comment">// })</span></span>
<span class="line">    <span class="token comment">// p.then((value)=&gt;{</span></span>
<span class="line">    <span class="token comment">//     console.log(value)</span></span>
<span class="line">    <span class="token comment">// })</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolve与reject函数的结构搭建" tabindex="-1"><a class="header-anchor" href="#resolve与reject函数的结构搭建"><span>resolve与reject函数的结构搭建</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//声明构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//1. 执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">    <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//2. 执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">    <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">//3. resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//4. reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//添加then方法</span></span>
<span class="line"><span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// let p = new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span class="token comment">//     resolve(&quot;OK&quot;)</span></span>
<span class="line"><span class="token comment">// })</span></span>
<span class="line"><span class="token comment">// p.then((value)=&gt;{</span></span>
<span class="line"><span class="token comment">//     console.log(value)</span></span>
<span class="line"><span class="token comment">// })</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolve函数与reject函数的实现" tabindex="-1"><a class="header-anchor" href="#resolve函数与reject函数的实现"><span>resolve函数与reject函数的实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//声明构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//0. 添加属性</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//1. 保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">    <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">    <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//2. 修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line"><span class="token comment">//3. 修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//4. reject()函数同resolve一样</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//添加then方法</span></span>
<span class="line"><span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// let p = new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span class="token comment">//     resolve(&quot;OK&quot;)</span></span>
<span class="line"><span class="token comment">// })</span></span>
<span class="line"><span class="token comment">// console.log(p)</span></span>
<span class="line"><span class="token comment">// p.then((value)=&gt;{</span></span>
<span class="line"><span class="token comment">//     console.log(value)</span></span>
<span class="line"><span class="token comment">// })</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现异常处理" tabindex="-1"><a class="header-anchor" href="#实现异常处理"><span>实现异常处理</span></a></h2><p>执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//声明构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//添加属性</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">    <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">    <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 0. 异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">        <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//添加then方法</span></span>
<span class="line"><span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// let p = new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span class="token comment">//     resolve(&quot;OK&quot;)</span></span>
<span class="line"><span class="token comment">// })</span></span>
<span class="line"><span class="token comment">// console.log(p)</span></span>
<span class="line"><span class="token comment">// p.then((value)=&gt;{</span></span>
<span class="line"><span class="token comment">//     console.log(value)</span></span>
<span class="line"><span class="token comment">// })</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实现状态只能修改一次" tabindex="-1"><a class="header-anchor" href="#实现状态只能修改一次"><span>实现状态只能修改一次</span></a></h2><p>执行器中的代码应该只能在第一次调用<code>resolve()</code>或<code>reject()</code>时修改<strong>状态</strong>和<strong>结果</strong>值，实现该功能只需在修改 <strong>状态</strong> 前判断其是否为初始值</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//声明构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//添加属性</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">    <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">    <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">        <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//0. 实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">        <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//1. 实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//添加then方法</span></span>
<span class="line"><span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OK&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span></span>
<span class="line">p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="then-执行回调函数的实现" tabindex="-1"><a class="header-anchor" href="#then-执行回调函数的实现"><span>then()执行回调函数的实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//声明构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//添加属性</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">    <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">    <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">        <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">        <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//添加then方法</span></span>
<span class="line"><span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//0. 根据promise状态执行回调函数</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//2. 传递value</span></span>
<span class="line">        <span class="token function">onResolved</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//1. 根据promise状态执行回调函数</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//3. 传递reason</span></span>
<span class="line">        <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// let p = new Promise((resolve,reject)=&gt;{</span></span>
<span class="line"><span class="token comment">//     resolve(&quot;OK&quot;)</span></span>
<span class="line"><span class="token comment">// })</span></span>
<span class="line"><span class="token comment">// console.log(p)</span></span>
<span class="line"><span class="token comment">// p.then((value)=&gt;{</span></span>
<span class="line"><span class="token comment">//     console.log(value)</span></span>
<span class="line"><span class="token comment">// })</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="then处理异步执行的实现" tabindex="-1"><a class="header-anchor" href="#then处理异步执行的实现"><span>then处理异步执行的实现</span></a></h2><p>执行器中的代码存在异步语句时，then方法中需要处理该种情形</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//声明构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//添加属性</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 1. 声明属性用于保存回调函数</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>callBack <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">    <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">    <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">    <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">        <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">        <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 3. 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>callBack<span class="token punctuation">.</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//4. 执行保存的回调函数</span></span>
<span class="line">            self<span class="token punctuation">.</span>callBack<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">        <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">        self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 5. 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>callBack<span class="token punctuation">.</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//6. 执行保存的回调函数</span></span>
<span class="line">            self<span class="token punctuation">.</span>callBack<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//添加then方法</span></span>
<span class="line"><span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//传递value</span></span>
<span class="line">        <span class="token function">onResolved</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//传递reason</span></span>
<span class="line">        <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//0. 处理当执行器中存在异步语句的情形</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">// 2. 保存回调函数</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>callBack <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">onResolved</span><span class="token operator">:</span>onResolved<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">onRejected</span><span class="token operator">:</span>onRejected</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line"></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OK&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span></span>
<span class="line">p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="then处理异步执行的多个回调函数的实现" tabindex="-1"><a class="header-anchor" href="#then处理异步执行的多个回调函数的实现"><span>then处理异步执行的多个回调函数的实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token comment">//声明构造函数</span></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//添加属性</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">        <span class="token comment">// this.callBack = {}</span></span>
<span class="line"><span class="token comment">//0. 修改为保存数组</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">        <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">        <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">        <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">        <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">            self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">            <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">            self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">            <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">            <span class="token comment">// {</span></span>
<span class="line">            <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">            <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">            <span class="token comment">// }</span></span>
<span class="line"><span class="token comment">//2. 执行所有成功的回调函数</span></span>
<span class="line">            self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">            </span>
<span class="line">            <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">            self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">            self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">            <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">            <span class="token comment">// {</span></span>
<span class="line">            <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">            <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">            <span class="token comment">// }</span></span>
<span class="line"><span class="token comment">//3. 执行所有失败的回调函数</span></span>
<span class="line">            self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">//添加then方法</span></span>
<span class="line">    <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//传递value</span></span>
<span class="line">            <span class="token function">onResolved</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//传递reason</span></span>
<span class="line">            <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {</span></span>
<span class="line">            <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">            <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">            <span class="token comment">// }</span></span>
<span class="line"><span class="token comment">//1. 保存所有回调函数</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token literal-property property">onResolved</span><span class="token operator">:</span>onResolved<span class="token punctuation">,</span></span>
<span class="line">                <span class="token literal-property property">onRejected</span><span class="token operator">:</span>onRejected</span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        </span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OK&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span></span>
<span class="line">    p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理执行器中同步执行状态下then的返回值" tabindex="-1"><a class="header-anchor" href="#处理执行器中同步执行状态下then的返回值"><span>处理执行器中同步执行状态下then的返回值</span></a></h2><p>then的返回值由其中的回调函数决定</p><ul><li>若回调函数的返回值是一个promise对象，则then返回的promise的状态和值与该对象一致</li><li>若回调函数的返回值是一个非promise对象，则then返回的是状态为成功的promise对象，且其值为该返回值</li><li>若回调函数中出现异常，则返回失败promise 且其值为抛出的异常</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token comment">//声明构造函数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//添加属性</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {}</span></span>
<span class="line">            <span class="token comment">//修改为保存数组</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">            <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">            <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加then方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//0. then的返回值是一个promise</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递value</span></span>
<span class="line">                    <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//5. 处理抛出异常的情况</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//1. 获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onResolved</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//2. 判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//3. 分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//4. 处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//6. 处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递reason</span></span>
<span class="line">                    <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line"><span class="token comment">//7. rejected处理过程类似</span></span>
<span class="line"><span class="token comment">//处理抛出异常的情况</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 保存回调函数</span></span>
<span class="line">                    <span class="token comment">// this.callBack = {</span></span>
<span class="line">                    <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                    <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token literal-property property">onResolved</span><span class="token operator">:</span>onResolved<span class="token punctuation">,</span></span>
<span class="line">                        <span class="token literal-property property">onRejected</span><span class="token operator">:</span>onRejected</span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            </span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OK&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理执行器中异步执行状态下then的返回值" tabindex="-1"><a class="header-anchor" href="#处理执行器中异步执行状态下then的返回值"><span>处理执行器中异步执行状态下then的返回值</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token comment">//声明构造函数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//添加属性</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {}</span></span>
<span class="line">            <span class="token comment">//修改为保存数组</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">            <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">            <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加then方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递value</span></span>
<span class="line">                    <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line"></span>
<span class="line">                    <span class="token comment">//处理抛出异常的情况</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onResolved</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递reason</span></span>
<span class="line">                    <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//rejected处理过程类似</span></span>
<span class="line">                    <span class="token comment">//处理抛出异常的情况</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 保存回调函数</span></span>
<span class="line">                    <span class="token comment">// this.callBack = {</span></span>
<span class="line">                    <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                    <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//1. 处理执行器中异步执行时回调</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理抛出异常的情况</span></span>
<span class="line">                            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//获取返回值</span></span>
<span class="line">                                <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                                <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                                    result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                        <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                        <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                                    <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理抛出异常的情况</span></span>
<span class="line">                            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//获取返回值</span></span>
<span class="line">                                <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                                <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                                    result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                        <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                        <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                                    <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            </span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="then方法优化" tabindex="-1"><a class="header-anchor" href="#then方法优化"><span>then方法优化</span></a></h2><p>对重复执行的代码块进行封装</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token comment">//声明构造函数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//添加属性</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {}</span></span>
<span class="line">            <span class="token comment">//修改为保存数组</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">            <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">            <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加then方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//1. 声明变量</span></span>
<span class="line">                <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line"><span class="token comment">// 2. 定义函数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递value</span></span>
<span class="line">                    <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line"><span class="token comment">//3. 调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递reason</span></span>
<span class="line">                    <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//rejected处理过程类似</span></span>
<span class="line"><span class="token comment">//4. 调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 保存回调函数</span></span>
<span class="line">                    <span class="token comment">// this.callBack = {</span></span>
<span class="line">                    <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                    <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理执行器中异步执行时回调</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//5. 调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//6. 调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">            </span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="catch方法及异常穿透的实现" tabindex="-1"><a class="header-anchor" href="#catch方法及异常穿透的实现"><span>catch方法及异常穿透的实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token comment">//声明构造函数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//添加属性</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {}</span></span>
<span class="line">            <span class="token comment">//修改为保存数组</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">            <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">            <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加then方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//声明变量</span></span>
<span class="line">                <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line"><span class="token comment">//2. 处理失败回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onRejected <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onRejected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">throw</span> reason<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//3. 处理成功回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onResolved <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onResolved</span> <span class="token operator">=</span> <span class="token parameter">value</span><span class="token operator">=&gt;</span>value</span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">// 定义函数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递value</span></span>
<span class="line">                    <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递reason</span></span>
<span class="line">                    <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//rejected处理过程类似</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 保存回调函数</span></span>
<span class="line">                    <span class="token comment">// this.callBack = {</span></span>
<span class="line">                    <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                    <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理执行器中异步执行时回调</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//1. 添加catch方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resolve方法的实现" tabindex="-1"><a class="header-anchor" href="#resolve方法的实现"><span>resolve方法的实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token comment">//声明构造函数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//添加属性</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {}</span></span>
<span class="line">            <span class="token comment">//修改为保存数组</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">            <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">            <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加then方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//声明变量</span></span>
<span class="line">                <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">                <span class="token comment">//处理失败回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onRejected <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onRejected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">throw</span> reason<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理成功回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onResolved <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onResolved</span> <span class="token operator">=</span> <span class="token parameter">value</span><span class="token operator">=&gt;</span>value</span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">// 定义函数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递value</span></span>
<span class="line">                    <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递reason</span></span>
<span class="line">                    <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//rejected处理过程类似</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 保存回调函数</span></span>
<span class="line">                    <span class="token comment">// this.callBack = {</span></span>
<span class="line">                    <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                    <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理执行器中异步执行时回调</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加catch方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//1. 添加resolve方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//2. 返回promise对象</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//3. 使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> k <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OKKKKK&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reject方法的实现" tabindex="-1"><a class="header-anchor" href="#reject方法的实现"><span>reject方法的实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token comment">//声明构造函数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//添加属性</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {}</span></span>
<span class="line">            <span class="token comment">//修改为保存数组</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">            <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">            <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加then方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//声明变量</span></span>
<span class="line">                <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">                <span class="token comment">//处理失败回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onRejected <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onRejected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">throw</span> reason<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理成功回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onResolved <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onResolved</span> <span class="token operator">=</span> <span class="token parameter">value</span><span class="token operator">=&gt;</span>value</span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">// 定义函数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递value</span></span>
<span class="line">                    <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递reason</span></span>
<span class="line">                    <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//rejected处理过程类似</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 保存回调函数</span></span>
<span class="line">                    <span class="token comment">// this.callBack = {</span></span>
<span class="line">                    <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                    <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理执行器中异步执行时回调</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加catch方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加resolve方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//返回promise对象</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//1. 添加reject方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> k <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OKKKKK&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//2. 使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> j <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;fail&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="all方法的实现" tabindex="-1"><a class="header-anchor" href="#all方法的实现"><span>all方法的实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token comment">//声明构造函数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//添加属性</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {}</span></span>
<span class="line">            <span class="token comment">//修改为保存数组</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">            <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">            <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加then方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//声明变量</span></span>
<span class="line">                <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">                <span class="token comment">//处理失败回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onRejected <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onRejected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">throw</span> reason<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理成功回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onResolved <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onResolved</span> <span class="token operator">=</span> <span class="token parameter">value</span><span class="token operator">=&gt;</span>value</span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">// 定义函数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递value</span></span>
<span class="line">                    <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递reason</span></span>
<span class="line">                    <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//rejected处理过程类似</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 保存回调函数</span></span>
<span class="line">                    <span class="token comment">// this.callBack = {</span></span>
<span class="line">                    <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                    <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理执行器中异步执行时回调</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加catch方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加resolve方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//返回promise对象</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加reject方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//1. 添加all方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">all</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Promises<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//2. 声明计数器</span></span>
<span class="line">                <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token comment">//3. 成功结果数字</span></span>
<span class="line">                <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">                Promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//4. 自增计数器</span></span>
<span class="line">                    count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//5. 存入结果值</span></span>
<span class="line">                    results<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>value</span>
<span class="line"><span class="token comment">//6. 判断是否所有都成功</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">==</span> Promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//7. 返回结果</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//8. 若有任何一个结果为失败，则all返回的也是失败</span></span>
<span class="line">                    <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> k <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OKKKKK&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> j <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;fail&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="race方法的实现" tabindex="-1"><a class="header-anchor" href="#race方法的实现"><span>race方法的实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token comment">//声明构造函数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//添加属性</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {}</span></span>
<span class="line">            <span class="token comment">//修改为保存数组</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">            <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">            <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加then方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//声明变量</span></span>
<span class="line">                <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">                <span class="token comment">//处理失败回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onRejected <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onRejected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">throw</span> reason<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理成功回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onResolved <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onResolved</span> <span class="token operator">=</span> <span class="token parameter">value</span><span class="token operator">=&gt;</span>value</span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">// 定义函数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//获取返回值</span></span>
<span class="line">                        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递value</span></span>
<span class="line">                    <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递reason</span></span>
<span class="line">                    <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//rejected处理过程类似</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 保存回调函数</span></span>
<span class="line">                    <span class="token comment">// this.callBack = {</span></span>
<span class="line">                    <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                    <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理执行器中异步执行时回调</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加catch方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加resolve方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//返回promise对象</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加reject方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加all方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">all</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Promises<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//声明计数器</span></span>
<span class="line">                <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token comment">//成功结果数字</span></span>
<span class="line">                <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">                Promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//自增计数器</span></span>
<span class="line">                    count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//存入结果值</span></span>
<span class="line">                    results<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>value</span>
<span class="line">        <span class="token comment">//判断是否所有都成功</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">==</span> Promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//返回结果</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//若有任何一个结果为失败，则all返回的也是失败</span></span>
<span class="line">                    <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//1. 添加race方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">race</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Promises<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//2. 返回</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//3. 遍历</span></span>
<span class="line">                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//4. 谁先改变状态，谁就能决定返回值的状态</span></span>
<span class="line">                    Promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> k <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OKKKKK&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> j <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;fail&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="then方法中的回调函数异步执行的实现" tabindex="-1"><a class="header-anchor" href="#then方法中的回调函数异步执行的实现"><span>then方法中的回调函数异步执行的实现</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">        <span class="token comment">//声明构造函数</span></span>
<span class="line">        <span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//添加属性</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">            <span class="token comment">// this.callBack = {}</span></span>
<span class="line">            <span class="token comment">//修改为保存数组</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">            <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">            <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">            <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">            <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">            <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                </span>
<span class="line">                <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                <span class="token comment">// {</span></span>
<span class="line">                <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                <span class="token comment">// }</span></span>
<span class="line">                <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加then方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">then</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//声明变量</span></span>
<span class="line">                <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">                <span class="token comment">//处理失败回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onRejected <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onRejected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">throw</span> reason<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理成功回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>onResolved <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function-variable function">onResolved</span> <span class="token operator">=</span> <span class="token parameter">value</span><span class="token operator">=&gt;</span>value</span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">// 定义函数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//0. 使得回调函数异步执行</span></span>
<span class="line">                    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//获取返回值</span></span>
<span class="line">                            <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                            <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                            <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                                result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                                <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                            <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递value</span></span>
<span class="line">                    <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//传递reason</span></span>
<span class="line">                    <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                    <span class="token comment">//rejected处理过程类似</span></span>
<span class="line">                    <span class="token comment">//调用函数</span></span>
<span class="line">                    <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">// 保存回调函数</span></span>
<span class="line">                    <span class="token comment">// this.callBack = {</span></span>
<span class="line">                    <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                    <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                    <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//处理执行器中异步执行时回调</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//调用函数</span></span>
<span class="line">                            <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            </span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加catch方法</span></span>
<span class="line">        <span class="token class-name">Promise</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">catch</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加resolve方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//返回promise对象</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加reject方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//添加all方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">all</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Promises<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//声明计数器</span></span>
<span class="line">                <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token comment">//成功结果数字</span></span>
<span class="line">                <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">                Promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//自增计数器</span></span>
<span class="line">                    count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//存入结果值</span></span>
<span class="line">                    results<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>value</span>
<span class="line">        <span class="token comment">//判断是否所有都成功</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">==</span> Promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//返回结果</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//若有任何一个结果为失败，则all返回的也是失败</span></span>
<span class="line">                    <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 添加race方法</span></span>
<span class="line">        Promise<span class="token punctuation">.</span><span class="token function-variable function">race</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">Promises<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 返回</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 遍历</span></span>
<span class="line">                <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 谁先改变状态，谁就能决定返回值的状态</span></span>
<span class="line">                    Promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> k <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OKKKKK&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> j <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;fail&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装成类" tabindex="-1"><a class="header-anchor" href="#封装成类"><span>封装成类</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//1. 类名</span></span>
<span class="line">        <span class="token keyword">class</span> <span class="token class-name">Promise</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//2. 构造函数</span></span>
<span class="line">            <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//添加属性</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">                <span class="token comment">// this.callBack = {}</span></span>
<span class="line">                <span class="token comment">//修改为保存数组</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">                <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">                <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">                <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                    <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                    </span>
<span class="line">                    <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                    self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                    <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                    self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                    <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                    <span class="token comment">// {</span></span>
<span class="line">                    <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                    <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                    self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                    </span>
<span class="line">                    <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                    self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                    self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                    <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                    <span class="token comment">// {</span></span>
<span class="line">                    <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                    <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                    self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//3. then方法</span></span>
<span class="line">            <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//声明变量</span></span>
<span class="line">                    <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">                    <span class="token comment">//处理失败回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>onRejected <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">throw</span> reason<span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">//处理成功回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>onResolved <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span> <span class="token operator">=</span> <span class="token parameter">value</span><span class="token operator">=&gt;</span>value</span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">// 定义函数</span></span>
<span class="line">                    <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//使得回调函数异步执行</span></span>
<span class="line">                        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//获取返回值</span></span>
<span class="line">                                <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                                <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                                    result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                        <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                        <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                                    <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//传递value</span></span>
<span class="line">                        <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line">                        <span class="token comment">//调用函数</span></span>
<span class="line">                        <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//传递reason</span></span>
<span class="line">                        <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                        <span class="token comment">//rejected处理过程类似</span></span>
<span class="line">                        <span class="token comment">//调用函数</span></span>
<span class="line">                        <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">// 保存回调函数</span></span>
<span class="line">                        <span class="token comment">// this.callBack = {</span></span>
<span class="line">                        <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                        <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                        <span class="token comment">// }</span></span>
<span class="line">                        <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理执行器中异步执行时回调</span></span>
<span class="line">                            <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//调用函数</span></span>
<span class="line">                                <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//调用函数</span></span>
<span class="line">                                <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                </span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//4. catch方法</span></span>
<span class="line">            <span class="token keyword">catch</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//5. resolve方法</span></span>
<span class="line">            <span class="token keyword">static</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//返回promise对象</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//6. reject方法</span></span>
<span class="line">            <span class="token keyword">static</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 7. all方法</span></span>
<span class="line">            <span class="token keyword">static</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token parameter">Promises<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//声明计数器</span></span>
<span class="line">                    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">            <span class="token comment">//成功结果数字</span></span>
<span class="line">                    <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">                    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">                    Promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//自增计数器</span></span>
<span class="line">                        count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">//存入结果值</span></span>
<span class="line">                        results<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>value</span>
<span class="line">            <span class="token comment">//判断是否所有都成功</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">==</span> Promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//返回结果</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//若有任何一个结果为失败，则all返回的也是失败</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 8. race方法</span></span>
<span class="line">            <span class="token keyword">static</span> <span class="token function">race</span><span class="token punctuation">(</span><span class="token parameter">Promises<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 返回</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 遍历</span></span>
<span class="line">                    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 谁先改变状态，谁就能决定返回值的状态</span></span>
<span class="line">                        Promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">       <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> k <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OKKKKK&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> j <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;fail&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="封装成类-1" tabindex="-1"><a class="header-anchor" href="#封装成类-1"><span>封装成类</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">//1. 类名</span></span>
<span class="line">        <span class="token keyword">class</span> <span class="token class-name">Promise</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token comment">//2. 构造函数</span></span>
<span class="line">            <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//添加属性</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">;</span></span>
<span class="line">                <span class="token comment">// 声明属性用于保存回调函数</span></span>
<span class="line">                <span class="token comment">// this.callBack = {}</span></span>
<span class="line">                <span class="token comment">//修改为保存数组</span></span>
<span class="line">                <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window</span></span>
<span class="line">                <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span><span class="token comment">//self _this that</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//执行器函数executor在构造函数中是同步调用的:</span></span>
<span class="line">                <span class="token comment">// executor();</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                <span class="token comment">// executor(resolve,reject);</span></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常</span></span>
<span class="line">                <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的</span></span>
<span class="line">                    <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">                <span class="token comment">//resolve()是一个函数，应当有一个形式参数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                    </span>
<span class="line">                    <span class="token comment">//修改实例化对象的状态值(属性名：promiseState)</span></span>
<span class="line">                    self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;fulfilled&quot;</span></span>
<span class="line">                    <span class="token comment">//修改实例化对象的结果值(属性名：promiseResult)</span></span>
<span class="line">                    self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">                    <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                    <span class="token comment">// if(self.callBack.onResolved)</span></span>
<span class="line">                    <span class="token comment">// {</span></span>
<span class="line">                    <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                    <span class="token comment">//     self.callBack.onResolved(data)</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//执行所有成功的回调函数</span></span>
<span class="line">                    self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        item<span class="token punctuation">.</span><span class="token function">onResolved</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token comment">//reject()是一个函数，应当有一个形式参数</span></span>
<span class="line">                <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//实现状态只能修改一次：判断状态是否为初始状态</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieState <span class="token operator">!==</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">                    </span>
<span class="line">                    <span class="token comment">//reject()函数同resolve一样</span></span>
<span class="line">                    self<span class="token punctuation">.</span>PromsieState <span class="token operator">=</span> <span class="token string">&quot;rejected&quot;</span></span>
<span class="line">                    self<span class="token punctuation">.</span>PromsieResult <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token comment">// 处理执行器中存在异步语句的情形：判断是否保存有回调函数</span></span>
<span class="line">                    <span class="token comment">// if(self.callBack.onRejected)</span></span>
<span class="line">                    <span class="token comment">// {</span></span>
<span class="line">                    <span class="token comment">//     //执行保存的回调函数</span></span>
<span class="line">                    <span class="token comment">//     self.callBack.onRejected(data)</span></span>
<span class="line">                    <span class="token comment">// }</span></span>
<span class="line">                    <span class="token comment">//执行所有失败的回调函数</span></span>
<span class="line">                    self<span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                        item<span class="token punctuation">.</span><span class="token function">onRejected</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//3. then方法</span></span>
<span class="line">            <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">onResolved<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//then的返回值是一个promise</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token comment">//声明变量</span></span>
<span class="line">                    <span class="token keyword">let</span> self <span class="token operator">=</span> <span class="token keyword">this</span></span>
<span class="line">                    <span class="token comment">//处理失败回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>onRejected <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function-variable function">onRejected</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">throw</span> reason<span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">//处理成功回调函数为undefined的情况（省略没有写）</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>onResolved <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function-variable function">onResolved</span> <span class="token operator">=</span> <span class="token parameter">value</span><span class="token operator">=&gt;</span>value</span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">// 定义函数</span></span>
<span class="line">                    <span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//使得回调函数异步执行</span></span>
<span class="line">                        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//获取返回值</span></span>
<span class="line">                                <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">type</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>PromsieResult<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                                <span class="token comment">//判断是否为promise对象</span></span>
<span class="line">                                <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token comment">//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然</span></span>
<span class="line">                                    result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                        <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span></span>
<span class="line">                                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                                        <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span></span>
<span class="line">                                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                                    <span class="token comment">//处理非promise对象的情况</span></span>
<span class="line">                                    <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line">                                <span class="token punctuation">}</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//处理抛出的异常</span></span>
<span class="line">                                <span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;fulfilled&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//传递value</span></span>
<span class="line">                        <span class="token comment">// onResolved(this.PromsieResult);</span></span>
<span class="line">                        <span class="token comment">//调用函数</span></span>
<span class="line">                        <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">//根据promise状态执行回调函数</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">//传递reason</span></span>
<span class="line">                        <span class="token comment">// onRejected(this.PromsieResult);</span></span>
<span class="line">                        <span class="token comment">//rejected处理过程类似</span></span>
<span class="line">                        <span class="token comment">//调用函数</span></span>
<span class="line">                        <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token comment">//处理当执行器中存在异步语句的情形</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>PromsieState <span class="token operator">==</span> <span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token comment">// 保存回调函数</span></span>
<span class="line">                        <span class="token comment">// this.callBack = {</span></span>
<span class="line">                        <span class="token comment">//     onResolved:onResolved,</span></span>
<span class="line">                        <span class="token comment">//     onRejected:onRejected</span></span>
<span class="line">                        <span class="token comment">// }</span></span>
<span class="line">                        <span class="token comment">//保存所有回调函数</span></span>
<span class="line">                        <span class="token keyword">this</span><span class="token punctuation">.</span>callBacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token comment">//处理执行器中异步执行时回调</span></span>
<span class="line">                            <span class="token function-variable function">onResolved</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//调用函数</span></span>
<span class="line">                                <span class="token function">callback</span><span class="token punctuation">(</span>onResolved<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                            <span class="token function-variable function">onRejected</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                                <span class="token comment">//调用函数</span></span>
<span class="line">                                <span class="token function">callback</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span></span>
<span class="line">                            <span class="token punctuation">}</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                </span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//4. catch方法</span></span>
<span class="line">            <span class="token keyword">catch</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//5. resolve方法</span></span>
<span class="line">            <span class="token keyword">static</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//返回promise对象</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                        value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">                        <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">//6. reject方法</span></span>
<span class="line">            <span class="token keyword">static</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                    <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 7. all方法</span></span>
<span class="line">            <span class="token keyword">static</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token parameter">Promises<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//声明计数器</span></span>
<span class="line">                    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">            <span class="token comment">//成功结果数字</span></span>
<span class="line">                    <span class="token keyword">let</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">                    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span></span>
<span class="line">                    Promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//自增计数器</span></span>
<span class="line">                        count<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">//存入结果值</span></span>
<span class="line">                        results<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>value</span>
<span class="line">            <span class="token comment">//判断是否所有都成功</span></span>
<span class="line">                        <span class="token keyword">if</span><span class="token punctuation">(</span>count <span class="token operator">==</span> Promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//返回结果</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">//若有任何一个结果为失败，则all返回的也是失败</span></span>
<span class="line">                        <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 8. race方法</span></span>
<span class="line">            <span class="token keyword">static</span> <span class="token function">race</span><span class="token punctuation">(</span><span class="token parameter">Promises<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 返回</span></span>
<span class="line">                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 遍历</span></span>
<span class="line">                    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span>Promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 谁先改变状态，谁就能决定返回值的状态</span></span>
<span class="line">                        Promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">reason</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">                            <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">                        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">       <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;ok&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> k <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;OKKKKK&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">//使用测试</span></span>
<span class="line">        <span class="token keyword">let</span> j <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;fail&quot;</span><span class="token punctuation">)</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,44),l=[t];function c(o,i){return a(),s("div",null,l)}const k=n(e,[["render",c],["__file","手写实现Promise.html.vue"]]),r=JSON.parse('{"path":"/%E5%89%8D%E7%AB%AF/Promise%E6%89%8B%E5%86%99%E5%AE%9E%E7%8E%B0/%E6%89%8B%E5%86%99%E5%AE%9E%E7%8E%B0Promise.html","title":"手写实现Promise","lang":"zh-CN","frontmatter":{"title":"手写实现Promise","date":"2022-07-24T17:32:00.000Z","cover":"./cover/default_cover.jpg","tag":["Promise","js","demo"],"category":"笔记","description":"基本结构搭建 resolve与reject函数的结构搭建 resolve函数与reject函数的实现 实现异常处理 执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常 实现状态只能修改一次 执行器中的代码应该只能在第一次调用resolve()或reject()时修改状态和结果值，实现该功能只需在修改 ...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E5%89%8D%E7%AB%AF/Promise%E6%89%8B%E5%86%99%E5%AE%9E%E7%8E%B0/%E6%89%8B%E5%86%99%E5%AE%9E%E7%8E%B0Promise.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"手写实现Promise"}],["meta",{"property":"og:description","content":"基本结构搭建 resolve与reject函数的结构搭建 resolve函数与reject函数的实现 实现异常处理 执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常 实现状态只能修改一次 执行器中的代码应该只能在第一次调用resolve()或reject()时修改状态和结果值，实现该功能只需在修改 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T08:31:16.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"Promise"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:tag","content":"demo"}],["meta",{"property":"article:published_time","content":"2022-07-24T17:32:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T08:31:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"手写实现Promise\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-24T17:32:00.000Z\\",\\"dateModified\\":\\"2024-03-18T08:31:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"基本结构搭建","slug":"基本结构搭建","link":"#基本结构搭建","children":[]},{"level":2,"title":"resolve与reject函数的结构搭建","slug":"resolve与reject函数的结构搭建","link":"#resolve与reject函数的结构搭建","children":[]},{"level":2,"title":"resolve函数与reject函数的实现","slug":"resolve函数与reject函数的实现","link":"#resolve函数与reject函数的实现","children":[]},{"level":2,"title":"实现异常处理","slug":"实现异常处理","link":"#实现异常处理","children":[]},{"level":2,"title":"实现状态只能修改一次","slug":"实现状态只能修改一次","link":"#实现状态只能修改一次","children":[]},{"level":2,"title":"then()执行回调函数的实现","slug":"then-执行回调函数的实现","link":"#then-执行回调函数的实现","children":[]},{"level":2,"title":"then处理异步执行的实现","slug":"then处理异步执行的实现","link":"#then处理异步执行的实现","children":[]},{"level":2,"title":"then处理异步执行的多个回调函数的实现","slug":"then处理异步执行的多个回调函数的实现","link":"#then处理异步执行的多个回调函数的实现","children":[]},{"level":2,"title":"处理执行器中同步执行状态下then的返回值","slug":"处理执行器中同步执行状态下then的返回值","link":"#处理执行器中同步执行状态下then的返回值","children":[]},{"level":2,"title":"处理执行器中异步执行状态下then的返回值","slug":"处理执行器中异步执行状态下then的返回值","link":"#处理执行器中异步执行状态下then的返回值","children":[]},{"level":2,"title":"then方法优化","slug":"then方法优化","link":"#then方法优化","children":[]},{"level":2,"title":"catch方法及异常穿透的实现","slug":"catch方法及异常穿透的实现","link":"#catch方法及异常穿透的实现","children":[]},{"level":2,"title":"resolve方法的实现","slug":"resolve方法的实现","link":"#resolve方法的实现","children":[]},{"level":2,"title":"reject方法的实现","slug":"reject方法的实现","link":"#reject方法的实现","children":[]},{"level":2,"title":"all方法的实现","slug":"all方法的实现","link":"#all方法的实现","children":[]},{"level":2,"title":"race方法的实现","slug":"race方法的实现","link":"#race方法的实现","children":[]},{"level":2,"title":"then方法中的回调函数异步执行的实现","slug":"then方法中的回调函数异步执行的实现","link":"#then方法中的回调函数异步执行的实现","children":[]},{"level":2,"title":"封装成类","slug":"封装成类","link":"#封装成类","children":[]},{"level":2,"title":"封装成类","slug":"封装成类-1","link":"#封装成类-1","children":[]}],"git":{"createdTime":1700226391000,"updatedTime":1710750676000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":45.93,"words":13779},"filePathRelative":"前端/Promise手写实现/手写实现Promise.md","localizedDate":"2022年7月24日","excerpt":"","autoDesc":true}');export{k as comp,r as data};
