import{_ as e,r as p,o,c,a as n,b as s,f as l,e as a}from"./app-40b3468d.js";const i={},u=a(`<h1 id="移动端click事件问题" tabindex="-1"><a class="header-anchor" href="#移动端click事件问题" aria-hidden="true">#</a> 移动端click事件问题</h1><p>移动端click事件会有300ms的延迟，因为最初移动端需要用两只手指来放大页面，然后通过双击页面来恢复页面大小（double tap to zoom），300ms的延迟就是用来判断是否双击屏幕的，若两次点击屏幕的间隔小于300ms则判断是双击屏幕，大于300ms则被判断为click事件</p><h2 id="解决方案-禁用缩放" tabindex="-1"><a class="header-anchor" href="#解决方案-禁用缩放" aria-hidden="true">#</a> 解决方案:禁用缩放</h2><p>禁用缩放后也就不存在双击屏幕恢复页面默认大小的功能，于是300ms的延迟就不存在了</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user-scalable=no<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解决方案-利用touch事件自己封装函数" tabindex="-1"><a class="header-anchor" href="#解决方案-利用touch事件自己封装函数" aria-hidden="true">#</a> 解决方案:利用touch事件自己封装函数</h2><ul><li>手指触摸时记录触摸时间</li><li>手指离开时记录离开时间</li><li>手指移动时记录是否移动</li><li>当手指触摸和离开时间间隔小于150ms 且手指没有滑动屏幕，则判断为点击</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">tap</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    obj<span class="token punctuation">.</span>isMove <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span>touchStart <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span>touchEnd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;touchstart&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>touchStart <span class="token operator">=</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//记录触摸时间</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;touchmove&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>isMove <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">//记录是否移动</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    obj<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;touchend&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>touchEnd <span class="token operator">=</span> <span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//记录离开时间</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>touchEnd <span class="token operator">-</span>  obj<span class="token punctuation">.</span>touchStart <span class="token operator">&gt;</span> <span class="token number">150</span>  <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>obj<span class="token punctuation">.</span>isMove<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            callback <span class="token operator">&amp;&amp;</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        obj<span class="token punctuation">.</span>isMove <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        obj<span class="token punctuation">.</span>touchStart <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        obj<span class="token punctuation">.</span>touchEnd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//使用</span>
<span class="token function">tap</span><span class="token punctuation">(</span>div<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//do something</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方案-使用fastclick-js插件" tabindex="-1"><a class="header-anchor" href="#解决方案-使用fastclick-js插件" aria-hidden="true">#</a> 解决方案:使用fastclick.js插件</h2>`,9),r={href:"https://github.com/ftlabs/fastclick",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>使用：****</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>application/javascript<span class="token punctuation">&#39;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/path/to/fastclick.js<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token comment">// 原生js使用：</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;addEventListener&#39;</span> <span class="token keyword">in</span> document<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;DOMContentLoaded&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      FastClick<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//jQuery使用：</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        FastClick<span class="token punctuation">.</span><span class="token function">attach</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p><p>Note: As of late 2015 most mobile browsers - notably Chrome and Safari - no longer have a 300ms touch delay, so fastclick offers no benefit on newer browsers, and risks introducing bugs into your application. Consider carefully whether you really need to use it.</p><p>截止到2015年，Chrome and Safari已经不再有300毫秒的触摸延迟了</p><p><strong>完整源代码</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>

 <span class="token doc-comment comment">/**
  * <span class="token keyword">@preserve</span> FastClick: polyfill to remove click delays on browsers with touch UIs.
  *
  * <span class="token keyword">@codingstandard</span> ftlabs-jsv2
  * <span class="token keyword">@copyright</span> The Financial Times Limited [All Rights Reserved]
  * <span class="token keyword">@license</span> MIT License (see LICENSE.txt)
  */</span>

 <span class="token comment">/*jslint browser:true, node:true*/</span>
 <span class="token comment">/*global define, Event, Node*/</span>


 <span class="token doc-comment comment">/**
  * Instantiate fast-clicking listeners on the specified layer.
  *
  * <span class="token keyword">@constructor</span>
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Element<span class="token punctuation">}</span></span> <span class="token parameter">layer</span> The layer to listen on
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">options</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">]</span></span> The options to override the defaults
  */</span>
 <span class="token keyword">function</span> <span class="token function">FastClick</span><span class="token punctuation">(</span><span class="token parameter">layer<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> oldOnClick<span class="token punctuation">;</span>

  options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether a click is currently being tracked.
   *
   * <span class="token keyword">@type</span> boolean
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClick <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>


  <span class="token doc-comment comment">/**
   * Timestamp for when click tracking started.
   *
   * <span class="token keyword">@type</span> number
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClickStart <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>


  <span class="token doc-comment comment">/**
   * The element being tracked for a click.
   *
   * <span class="token keyword">@type</span> EventTarget
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>


  <span class="token doc-comment comment">/**
   * X-coordinate of touch start event.
   *
   * <span class="token keyword">@type</span> number
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>touchStartX <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>


  <span class="token doc-comment comment">/**
   * Y-coordinate of touch start event.
   *
   * <span class="token keyword">@type</span> number
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>touchStartY <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>


  <span class="token doc-comment comment">/**
   * ID of the last touch, retrieved from Touch.identifier.
   *
   * <span class="token keyword">@type</span> number
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastTouchIdentifier <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>


  <span class="token doc-comment comment">/**
   * Touchmove boundary, beyond which a click will be cancelled.
   *
   * <span class="token keyword">@type</span> number
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>touchBoundary <span class="token operator">=</span> options<span class="token punctuation">.</span>touchBoundary <span class="token operator">||</span> <span class="token number">10</span><span class="token punctuation">;</span>


  <span class="token doc-comment comment">/**
   * The FastClick layer.
   *
   * <span class="token keyword">@type</span> Element
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>layer <span class="token operator">=</span> layer<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The minimum time between tap(touchstart and touchend) events
   *
   * <span class="token keyword">@type</span> number
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tapDelay <span class="token operator">=</span> options<span class="token punctuation">.</span>tapDelay <span class="token operator">||</span> <span class="token number">200</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * The maximum time for a tap
   *
   * <span class="token keyword">@type</span> number
   */</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>tapTimeout <span class="token operator">=</span> options<span class="token punctuation">.</span>tapTimeout <span class="token operator">||</span> <span class="token number">700</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>FastClick<span class="token punctuation">.</span><span class="token function">notNeeded</span><span class="token punctuation">(</span>layer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Some old versions of Android don&#39;t have Function.prototype.bind</span>
  <span class="token keyword">function</span> <span class="token function">bind</span><span class="token punctuation">(</span><span class="token parameter">method<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">method</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token keyword">var</span> methods <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;onMouse&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onClick&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onTouchStart&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onTouchMove&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onTouchEnd&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;onTouchCancel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> methods<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   context<span class="token punctuation">[</span>methods<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">bind</span><span class="token punctuation">(</span>context<span class="token punctuation">[</span>methods<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Set up event handlers as required</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   layer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseover&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onMouse<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   layer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onMouse<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   layer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onMouse<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  layer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  layer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onTouchStart<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  layer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchmove&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onTouchMove<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  layer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchend&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onTouchEnd<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  layer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchcancel&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onTouchCancel<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Hack is required for browsers that don&#39;t support Event#stopImmediatePropagation (e.g. Android 2)</span>
  <span class="token comment">// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick</span>
  <span class="token comment">// layer when they are cancelled.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Event</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>stopImmediatePropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   layer<span class="token punctuation">.</span><span class="token function-variable function">removeEventListener</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> capture</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> rmv <span class="token operator">=</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>removeEventListener<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">rmv</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>layer<span class="token punctuation">,</span> type<span class="token punctuation">,</span> callback<span class="token punctuation">.</span>hijacked <span class="token operator">||</span> callback<span class="token punctuation">,</span> capture<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token function">rmv</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>layer<span class="token punctuation">,</span> type<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> capture<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>

   layer<span class="token punctuation">.</span><span class="token function-variable function">addEventListener</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> capture</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> adv <span class="token operator">=</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>addEventListener<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">adv</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>layer<span class="token punctuation">,</span> type<span class="token punctuation">,</span> callback<span class="token punctuation">.</span>hijacked <span class="token operator">||</span> <span class="token punctuation">(</span>callback<span class="token punctuation">.</span><span class="token function-variable function">hijacked</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span>propagationStopped<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">callback</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> capture<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
     <span class="token function">adv</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>layer<span class="token punctuation">,</span> type<span class="token punctuation">,</span> callback<span class="token punctuation">,</span> capture<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// If a handler is already declared in the element&#39;s onclick attribute, it will be fired before</span>
  <span class="token comment">// FastClick&#39;s onClick handler. Fix this by pulling out the user-defined handler function and</span>
  <span class="token comment">// adding it as listener.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> layer<span class="token punctuation">.</span>onclick <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token comment">// Android browser on at least 3.2 requires a new reference to the function in layer.onclick</span>
   <span class="token comment">// - the old one won&#39;t work if passed to addEventListener directly.</span>
   oldOnClick <span class="token operator">=</span> layer<span class="token punctuation">.</span>onclick<span class="token punctuation">;</span>
   layer<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">oldOnClick</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   layer<span class="token punctuation">.</span>onclick <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

 <span class="token doc-comment comment">/**
 * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
 *
 * <span class="token keyword">@type</span> boolean
 */</span>
 <span class="token keyword">var</span> deviceIsWindowsPhone <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;Windows Phone&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span>

 <span class="token doc-comment comment">/**
  * Android requires exceptions.
  *
  * <span class="token keyword">@type</span> boolean
  */</span>
 <span class="token keyword">var</span> deviceIsAndroid <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;Android&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>deviceIsWindowsPhone<span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * iOS requires exceptions.
  *
  * <span class="token keyword">@type</span> boolean
  */</span>
 <span class="token keyword">var</span> deviceIsIOS <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iP(ad|hone|od)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>deviceIsWindowsPhone<span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * iOS 4 requires an exception for select elements.
  *
  * <span class="token keyword">@type</span> boolean
  */</span>
 <span class="token keyword">var</span> deviceIsIOS4 <span class="token operator">=</span> deviceIsIOS <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">OS 4_\\d(_\\d)?</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * iOS 6.0-7.* requires the target element to be manually derived
  *
  * <span class="token keyword">@type</span> boolean
  */</span>
 <span class="token keyword">var</span> deviceIsIOSWithBadTarget <span class="token operator">=</span> deviceIsIOS <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">OS [6-7]_\\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token doc-comment comment">/**
  * BlackBerry requires exceptions.
  *
  * <span class="token keyword">@type</span> boolean
  */</span>
 <span class="token keyword">var</span> deviceIsBlackBerry10 <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;BB10&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>

 <span class="token doc-comment comment">/**
  * Determine whether a given element requires a native click.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>EventTarget<span class="token operator">|</span>Element<span class="token punctuation">}</span></span> <span class="token parameter">target</span> Target DOM element
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> Returns true if the element needs a native click
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">needsClick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>nodeName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// Don&#39;t send a synthetic click to disabled inputs (issue #62)</span>
  <span class="token keyword">case</span> <span class="token string">&#39;button&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;select&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;textarea&#39;</span><span class="token operator">:</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&#39;input&#39;</span><span class="token operator">:</span>

   <span class="token comment">// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>deviceIsIOS <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;file&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> target<span class="token punctuation">.</span>disabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&#39;label&#39;</span><span class="token operator">:</span>
  <span class="token keyword">case</span> <span class="token string">&#39;iframe&#39;</span><span class="token operator">:</span> <span class="token comment">// iOS8 homescreen apps can prevent events bubbling into frames</span>
  <span class="token keyword">case</span> <span class="token string">&#39;video&#39;</span><span class="token operator">:</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\bneedsclick\\b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Determine whether a given element requires a call to focus to simulate click into element.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>EventTarget<span class="token operator">|</span>Element<span class="token punctuation">}</span></span> <span class="token parameter">target</span> Target DOM element
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> Returns true if the element requires a call to focus to simulate native click.
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">needsFocus</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>nodeName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">case</span> <span class="token string">&#39;textarea&#39;</span><span class="token operator">:</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&#39;select&#39;</span><span class="token operator">:</span>
   <span class="token keyword">return</span> <span class="token operator">!</span>deviceIsAndroid<span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token string">&#39;input&#39;</span><span class="token operator">:</span>
   <span class="token keyword">switch</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">case</span> <span class="token string">&#39;button&#39;</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token string">&#39;checkbox&#39;</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token string">&#39;file&#39;</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token string">&#39;image&#39;</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token string">&#39;radio&#39;</span><span class="token operator">:</span>
   <span class="token keyword">case</span> <span class="token string">&#39;submit&#39;</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// No point in attempting to focus disabled inputs</span>
   <span class="token keyword">return</span> <span class="token operator">!</span>target<span class="token punctuation">.</span>disabled <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>target<span class="token punctuation">.</span>readOnly<span class="token punctuation">;</span>
  <span class="token keyword">default</span><span class="token operator">:</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\bneedsfocus\\b</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>className<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Send a click event to the specified element.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>EventTarget<span class="token operator">|</span>Element<span class="token punctuation">}</span></span> <span class="token parameter">targetElement</span>
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sendClick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">targetElement<span class="token punctuation">,</span> event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> clickEvent<span class="token punctuation">,</span> touch<span class="token punctuation">;</span>

  <span class="token comment">// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>activeElement <span class="token operator">&amp;&amp;</span> document<span class="token punctuation">.</span>activeElement <span class="token operator">!==</span> targetElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   document<span class="token punctuation">.</span>activeElement<span class="token punctuation">.</span><span class="token function">blur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  touch <span class="token operator">=</span> event<span class="token punctuation">.</span>changedTouches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// Synthesise a click event, with an extra attribute so it can be tracked</span>
  clickEvent <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createEvent</span><span class="token punctuation">(</span><span class="token string">&#39;MouseEvents&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  clickEvent<span class="token punctuation">.</span><span class="token function">initMouseEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">determineEventType</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> window<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> touch<span class="token punctuation">.</span>screenX<span class="token punctuation">,</span> touch<span class="token punctuation">.</span>screenY<span class="token punctuation">,</span> touch<span class="token punctuation">.</span>clientX<span class="token punctuation">,</span> touch<span class="token punctuation">.</span>clientY<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  clickEvent<span class="token punctuation">.</span>forwardedTouchEvent <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  targetElement<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span>clickEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>

 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">determineEventType</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">targetElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">//Issue #159: Android Chrome Select Box does not open with a synthetic click event</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsAndroid <span class="token operator">&amp;&amp;</span> targetElement<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>EventTarget<span class="token operator">|</span>Element<span class="token punctuation">}</span></span> <span class="token parameter">targetElement</span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">focus</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">targetElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> length<span class="token punctuation">;</span>

  <span class="token comment">// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don&#39;t have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can&#39;t be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsIOS <span class="token operator">&amp;&amp;</span> targetElement<span class="token punctuation">.</span>setSelectionRange <span class="token operator">&amp;&amp;</span> targetElement<span class="token punctuation">.</span>type<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;date&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> targetElement<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&#39;time&#39;</span> <span class="token operator">&amp;&amp;</span> targetElement<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&#39;month&#39;</span> <span class="token operator">&amp;&amp;</span> targetElement<span class="token punctuation">.</span>type <span class="token operator">!==</span> <span class="token string">&#39;email&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   length <span class="token operator">=</span> targetElement<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
   targetElement<span class="token punctuation">.</span><span class="token function">setSelectionRange</span><span class="token punctuation">(</span>length<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   targetElement<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>EventTarget<span class="token operator">|</span>Element<span class="token punctuation">}</span></span> <span class="token parameter">targetElement</span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">updateScrollParent</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">targetElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> scrollParent<span class="token punctuation">,</span> parentElement<span class="token punctuation">;</span>

  scrollParent <span class="token operator">=</span> targetElement<span class="token punctuation">.</span>fastClickScrollParent<span class="token punctuation">;</span>

  <span class="token comment">// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the</span>
  <span class="token comment">// target element was moved to another parent.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>scrollParent <span class="token operator">||</span> <span class="token operator">!</span>scrollParent<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   parentElement <span class="token operator">=</span> targetElement<span class="token punctuation">;</span>
   <span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parentElement<span class="token punctuation">.</span>scrollHeight <span class="token operator">&gt;</span> parentElement<span class="token punctuation">.</span>offsetHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     scrollParent <span class="token operator">=</span> parentElement<span class="token punctuation">;</span>
     targetElement<span class="token punctuation">.</span>fastClickScrollParent <span class="token operator">=</span> parentElement<span class="token punctuation">;</span>
     <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    parentElement <span class="token operator">=</span> parentElement<span class="token punctuation">.</span>parentElement<span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>parentElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Always update the scroll top tracker if possible.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>scrollParent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   scrollParent<span class="token punctuation">.</span>fastClickLastScrollTop <span class="token operator">=</span> scrollParent<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>EventTarget<span class="token punctuation">}</span></span> <span class="token parameter">targetElement</span>
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Element<span class="token operator">|</span>EventTarget<span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getTargetElementFromEventTarget</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventTarget</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>eventTarget<span class="token punctuation">.</span>nodeType <span class="token operator">===</span> Node<span class="token punctuation">.</span><span class="token constant">TEXT_NODE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> eventTarget<span class="token punctuation">.</span>parentNode<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> eventTarget<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * On touch start, record the position and scroll offset.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span>
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">onTouchStart</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> targetElement<span class="token punctuation">,</span> touch<span class="token punctuation">,</span> selection<span class="token punctuation">;</span>

  <span class="token comment">// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>targetTouches<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  targetElement <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTargetElementFromEventTarget</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  touch <span class="token operator">=</span> event<span class="token punctuation">.</span>targetTouches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsIOS<span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token comment">// Only trusted events will deselect text on iOS (issue #49)</span>
   selection <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>selection<span class="token punctuation">.</span>rangeCount <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>selection<span class="token punctuation">.</span>isCollapsed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deviceIsIOS4<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):</span>
    <span class="token comment">// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched</span>
    <span class="token comment">// with the same identifier as the touch event that previously triggered the click that triggered the alert.</span>
    <span class="token comment">// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an</span>
    <span class="token comment">// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.</span>
    <span class="token comment">// Issue 120: touch.identifier is 0 when Chrome dev tools &#39;Emulate touch events&#39; is set with an iOS device UA string,</span>
    <span class="token comment">// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,</span>
    <span class="token comment">// random integers, it&#39;s safe to to continue if the identifier is 0 here.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>touch<span class="token punctuation">.</span>identifier <span class="token operator">&amp;&amp;</span> touch<span class="token punctuation">.</span>identifier <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastTouchIdentifier<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>lastTouchIdentifier <span class="token operator">=</span> touch<span class="token punctuation">.</span>identifier<span class="token punctuation">;</span>

    <span class="token comment">// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:</span>
    <span class="token comment">// 1) the user does a fling scroll on the scrollable layer</span>
    <span class="token comment">// 2) the user stops the fling scroll with another tap</span>
    <span class="token comment">// then the event.target of the last &#39;touchend&#39; event will be the element that was under the user&#39;s finger</span>
    <span class="token comment">// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check</span>
    <span class="token comment">// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateScrollParent</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClick <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClickStart <span class="token operator">=</span> event<span class="token punctuation">.</span>timeStamp<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">=</span> targetElement<span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>touchStartX <span class="token operator">=</span> touch<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>touchStartY <span class="token operator">=</span> touch<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>

  <span class="token comment">// Prevent phantom clicks on fast double-tap (issue #36)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>timeStamp <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastClickTime<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tapDelay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span>
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">touchHasMoved</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> touch <span class="token operator">=</span> event<span class="token punctuation">.</span>changedTouches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> boundary <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>touchBoundary<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>touch<span class="token punctuation">.</span>pageX <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>touchStartX<span class="token punctuation">)</span> <span class="token operator">&gt;</span> boundary <span class="token operator">||</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>touch<span class="token punctuation">.</span>pageY <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>touchStartY<span class="token punctuation">)</span> <span class="token operator">&gt;</span> boundary<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Update the last position.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span>
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">onTouchMove</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>trackingClick<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// If the touch has moved, cancel the click tracking</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTargetElementFromEventTarget</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">touchHasMoved</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClick <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Attempt to find the labelled control for the given label element.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>EventTarget<span class="token operator">|</span>HTMLLabelElement<span class="token punctuation">}</span></span> <span class="token parameter">labelElement</span>
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Element<span class="token operator">|</span><span class="token keyword">null</span><span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">findControl</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">labelElement</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// Fast path for newer browsers supporting the HTML5 control attribute</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>labelElement<span class="token punctuation">.</span>control <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> labelElement<span class="token punctuation">.</span>control<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// All browsers under test that support touch events also support the HTML5 htmlFor attribute</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>labelElement<span class="token punctuation">.</span>htmlFor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>labelElement<span class="token punctuation">.</span>htmlFor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// If no for attribute exists, attempt to retrieve the first labellable descendant element</span>
  <span class="token comment">// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label</span>
  <span class="token keyword">return</span> labelElement<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * On touch end, determine whether to send a click event at once.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span>
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">onTouchEnd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> forElement<span class="token punctuation">,</span> trackingClickStart<span class="token punctuation">,</span> targetTagName<span class="token punctuation">,</span> scrollParent<span class="token punctuation">,</span> touch<span class="token punctuation">,</span> targetElement <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>trackingClick<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Prevent phantom clicks on fast double-tap (issue #36)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>timeStamp <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastClickTime<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tapDelay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>cancelNextClick <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>timeStamp <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClickStart<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tapTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Reset to prevent wrong click cancel on input (issue #156).</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>cancelNextClick <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">this</span><span class="token punctuation">.</span>lastClickTime <span class="token operator">=</span> event<span class="token punctuation">.</span>timeStamp<span class="token punctuation">;</span>

  trackingClickStart <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClickStart<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClick <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClickStart <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token comment">// On some iOS devices, the targetElement supplied with the event is invalid if the layer</span>
  <span class="token comment">// is performing a transition or scroll, and has to be re-detected manually. Note that</span>
  <span class="token comment">// for this to function correctly, it must be called *after* the event target is checked!</span>
  <span class="token comment">// See issue #57; also filed as rdar://13048589 .</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsIOSWithBadTarget<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   touch <span class="token operator">=</span> event<span class="token punctuation">.</span>changedTouches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

   <span class="token comment">// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null</span>
   targetElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">elementFromPoint</span><span class="token punctuation">(</span>touch<span class="token punctuation">.</span>pageX <span class="token operator">-</span> window<span class="token punctuation">.</span>pageXOffset<span class="token punctuation">,</span> touch<span class="token punctuation">.</span>pageY <span class="token operator">-</span> window<span class="token punctuation">.</span>pageYOffset<span class="token punctuation">)</span> <span class="token operator">||</span> targetElement<span class="token punctuation">;</span>
   targetElement<span class="token punctuation">.</span>fastClickScrollParent <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement<span class="token punctuation">.</span>fastClickScrollParent<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  targetTagName <span class="token operator">=</span> targetElement<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>targetTagName <span class="token operator">===</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   forElement <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findControl</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>forElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    targetElement <span class="token operator">=</span> forElement<span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">needsFocus</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token comment">// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.</span>
   <span class="token comment">// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won&#39;t be visible even though the value attribute is updated as the user types (issue #37).</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>timeStamp <span class="token operator">-</span> trackingClickStart<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">100</span> <span class="token operator">||</span> <span class="token punctuation">(</span>deviceIsIOS <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span>top <span class="token operator">!==</span> window <span class="token operator">&amp;&amp;</span> targetTagName <span class="token operator">===</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendClick</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// Select elements need the event to go through on iOS 4, otherwise the selector menu won&#39;t open.</span>
   <span class="token comment">// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deviceIsIOS <span class="token operator">||</span> targetTagName <span class="token operator">!==</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsIOS <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>deviceIsIOS4<span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token comment">// Don&#39;t send a synthetic click event if the target element is contained within a parent layer that was scrolled</span>
   <span class="token comment">// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).</span>
   scrollParent <span class="token operator">=</span> targetElement<span class="token punctuation">.</span>fastClickScrollParent<span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>scrollParent <span class="token operator">&amp;&amp;</span> scrollParent<span class="token punctuation">.</span>fastClickLastScrollTop <span class="token operator">!==</span> scrollParent<span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Prevent the actual click from going though - unless the target node is marked as requiring</span>
  <span class="token comment">// real clicks or if it is in the allowlist in which case only non-programmatic clicks are permitted.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">needsClick</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendClick</span><span class="token punctuation">(</span>targetElement<span class="token punctuation">,</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * On touch cancel, stop tracking the click.
  *
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">onTouchCancel</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClick <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Determine mouse events which should be permitted.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span>
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">onMouse</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// If a target element was never set (because a touch event was never fired) allow the event</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>forwardedTouchEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Programmatically generated events targeting a specific element should be permitted</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>event<span class="token punctuation">.</span>cancelable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Derive and check the target element to see whether the mouse event needs to be permitted;</span>
  <span class="token comment">// unless explicitly enabled, prevent non-touch click events from triggering actions,</span>
  <span class="token comment">// to prevent ghost/doubleclicks.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">needsClick</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>targetElement<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cancelNextClick<span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token comment">// Prevent any user-added listeners declared on FastClick element from being fired.</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>stopImmediatePropagation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">stopImmediatePropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>

    <span class="token comment">// Part of the hack for browsers that don&#39;t support Event#stopImmediatePropagation (e.g. Android 2)</span>
    event<span class="token punctuation">.</span>propagationStopped <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>

   <span class="token comment">// Cancel the event</span>
   event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// If the mouse event is permitted, return true for the action to go through.</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * On actual clicks, determine whether this is a touch-generated click, a click action occurring
  * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
  * an actual click which should be permitted.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Event<span class="token punctuation">}</span></span> <span class="token parameter">event</span>
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> permitted<span class="token punctuation">;</span>

  <span class="token comment">// It&#39;s possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>trackingClick<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>trackingClick <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of &#39;fake&#39; click event will be triggered with the submit-type input element as the target.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;submit&#39;</span> <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>detail <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  permitted <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onMouse</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser&#39;s click doesn&#39;t go through.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>permitted<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token punctuation">.</span>targetElement <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// If clicks are permitted, return true for the action to go through.</span>
  <span class="token keyword">return</span> permitted<span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Remove all FastClick&#39;s event listeners.
  *
  * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
  */</span>
 <span class="token class-name">FastClick</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">destroy</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> layer <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>layer<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   layer<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseover&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onMouse<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   layer<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousedown&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onMouse<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   layer<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mouseup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onMouse<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  layer<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  layer<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onTouchStart<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  layer<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchmove&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onTouchMove<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  layer<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchend&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onTouchEnd<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  layer<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchcancel&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onTouchCancel<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Check whether FastClick is needed.
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Element<span class="token punctuation">}</span></span> <span class="token parameter">layer</span> The layer to listen on
  */</span>
 FastClick<span class="token punctuation">.</span><span class="token function-variable function">notNeeded</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">layer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> metaViewport<span class="token punctuation">;</span>
  <span class="token keyword">var</span> chromeVersion<span class="token punctuation">;</span>
  <span class="token keyword">var</span> blackberryVersion<span class="token punctuation">;</span>
  <span class="token keyword">var</span> firefoxVersion<span class="token punctuation">;</span>

  <span class="token comment">// Devices that don&#39;t support touch don&#39;t need FastClick</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window<span class="token punctuation">.</span>ontouchstart <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Chrome version - zero for other browsers</span>
  chromeVersion <span class="token operator">=</span> <span class="token operator">+</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Chrome\\/([0-9]+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>chromeVersion<span class="token punctuation">)</span> <span class="token punctuation">{</span>

   <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    metaViewport <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;meta[name=viewport]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>metaViewport<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// Chrome on Android with user-scalable=&quot;no&quot; doesn&#39;t need FastClick (issue #89)</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>metaViewport<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;user-scalable=no&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token comment">// Chrome 32 and above with width=device-width or less don&#39;t need FastClick</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>chromeVersion <span class="token operator">&gt;</span> <span class="token number">31</span> <span class="token operator">&amp;&amp;</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollWidth <span class="token operator">&lt;=</span> window<span class="token punctuation">.</span>outerWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

   <span class="token comment">// Chrome desktop doesn&#39;t need FastClick (issue #15)</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>deviceIsBlackBerry10<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   blackberryVersion <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Version\\/([0-9]*)\\.([0-9]*)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token comment">// BlackBerry 10.3+ does not require Fastclick library.</span>
   <span class="token comment">// https://github.com/ftlabs/fastclick/issues/251</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>blackberryVersion<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> blackberryVersion<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    metaViewport <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;meta[name=viewport]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>metaViewport<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">// user-scalable=no eliminates click delay.</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>metaViewport<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;user-scalable=no&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
     <span class="token comment">// width=device-width (or less than device-width) eliminates click delay.</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollWidth <span class="token operator">&lt;=</span> window<span class="token punctuation">.</span>outerWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>layer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>msTouchAction <span class="token operator">===</span> <span class="token string">&#39;none&#39;</span> <span class="token operator">||</span> layer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>touchAction <span class="token operator">===</span> <span class="token string">&#39;manipulation&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Firefox version - zero for other browsers</span>
  firefoxVersion <span class="token operator">=</span> <span class="token operator">+</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Firefox\\/([0-9]+)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>firefoxVersion <span class="token operator">&gt;=</span> <span class="token number">27</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896</span>

   metaViewport <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;meta[name=viewport]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>metaViewport <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>metaViewport<span class="token punctuation">.</span>content<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;user-scalable=no&#39;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollWidth <span class="token operator">&lt;=</span> window<span class="token punctuation">.</span>outerWidth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// IE11: prefixed -ms-touch-action is no longer supported and it&#39;s recomended to use non-prefixed version</span>
  <span class="token comment">// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>layer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>touchAction <span class="token operator">===</span> <span class="token string">&#39;none&#39;</span> <span class="token operator">||</span> layer<span class="token punctuation">.</span>style<span class="token punctuation">.</span>touchAction <span class="token operator">===</span> <span class="token string">&#39;manipulation&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token doc-comment comment">/**
  * Factory method for creating a FastClick object
  *
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Element<span class="token punctuation">}</span></span> <span class="token parameter">layer</span> The layer to listen on
  * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token optional-parameter"><span class="token punctuation">[</span><span class="token parameter">options</span><span class="token punctuation">=</span><span class="token code language-javascript"><span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">]</span></span> The options to override the defaults
  */</span>
 FastClick<span class="token punctuation">.</span><span class="token function-variable function">attach</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">layer<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FastClick</span><span class="token punctuation">(</span>layer<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">;</span>


 <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> define<span class="token punctuation">.</span>amd <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token comment">// AMD. Register as an anonymous module.</span>
  <span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> FastClick<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> module <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span> <span class="token operator">&amp;&amp;</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> FastClick<span class="token punctuation">.</span>attach<span class="token punctuation">;</span>
  module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>FastClick <span class="token operator">=</span> FastClick<span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">.</span>FastClick <span class="token operator">=</span> FastClick<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(v,m){const t=p("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[s("github仓库："),n("a",r,[s("fastclick.js"),l(t)])]),k])}const h=e(i,[["render",d],["__file","移动端click事件问题.html.vue"]]);export{h as default};
