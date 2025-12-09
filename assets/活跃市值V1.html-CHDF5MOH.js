import{ah as n,ai as a,ap as i,aj as e}from"./app-XtR3JOoW.js";const l="/assets/image-1-CxDfzg0i.png",p="/assets/image-2-C4jOZxk1.png",t="/assets/image-3-Clws8lgo.png",c="/assets/image-4-Bm2oWIaT.png",r={};function d(o,s){return e(),a("div",null,s[0]||(s[0]=[i(`<h2 id="活跃市值v1" tabindex="-1"><a class="header-anchor" href="#活跃市值v1"><span>活跃市值V1</span></a></h2><blockquote><p>这个版本的代码来自<a href="https://mp.weixin.qq.com/s/6TJFjU5zvW06K1f_8VDbpw" target="_blank" rel="noopener noreferrer">微信公众号文章</a></p></blockquote><p><strong>指标原理</strong></p><ul><li>把10日成交额均线看作是活跃筹码市值 <ul><li>每日成交金额，主力进出必留痕</li><li>均线过滤散户噪音</li></ul></li><li>红柱看作是资金流入</li><li>绿柱看作是资金流出</li><li>用法 <ol><li>选股阶段 只做红柱股</li><li>买入时机 底部红柱首现+股价站上5日线（双重保险）</li><li>止损信号 绿柱出现且破10日线，立马撤退！</li></ol></li></ul><p><strong>原版代码</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>VAR1:=AMOUNT;</span></span>
<span class="line"><span>VAR2:=SMA(VAR1,10,1);</span></span>
<span class="line"><span>VAR3:=REF(VAR2,1);</span></span>
<span class="line"><span>STICKLINE(VAR2&gt;VAR3,VAR2,VAR3,3,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(VAR2&lt;VAR3,VAR2,VAR3,3,0),COLORGREEN;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 红柱启动:=VAR2&gt;VAR3 AND REF(VAR2&lt;=VAR3,1) AND CROSS(收盘价,MA(C,5)),NODRAW; }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>个人修改版</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>活筹市值:=SMA(AMOUNT/100000000,10,1); { 把成交额(亿)的十日均线当作活跃市值 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>活筹下跌:=REF(活筹市值,1)&gt;活筹市值;</span></span>
<span class="line"><span>活筹上涨:=REF(活筹市值,1)&lt;活筹市值;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>STICKLINE(活筹上涨,活筹市值,REF(活筹市值,1),3,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(活筹下跌,活筹市值,REF(活筹市值,1),3,0),COLORGREEN;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EMA10:EMA(活筹市值,10);</span></span>
<span class="line"><span>EMA60:EMA(活筹市值,20);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{-----条件选股-----}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>条件选股:REF(活筹下跌,1) AND 活筹上涨 AND CROSS(C,MA(C,5)),NODRAW;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{-----交易系统-----}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>入场信号:=REF(活筹下跌,1) AND 活筹上涨 AND CROSS(C,MA(C,5));</span></span>
<span class="line"><span>离场信号:=活筹下跌 AND CROSS(MA(C,10),C);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DRAWICON(入场信号, 活筹市值*0.90, 1);</span></span>
<span class="line"><span>DRAWICON(离场信号, 活筹市值*1.10, 2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BUY(入场信号,活筹市值*0.90);</span></span>
<span class="line"><span>SELL(离场信号,活筹市值*1.10);</span></span>
<span class="line"><span>AUTOFILTER;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ©Copyright 2025.09.19-now YiguiDing. All Right Reserved.</span></span>
<span class="line"><span>    Author: TinyRick_0729(YiguiDing)</span></span>
<span class="line"><span>    Email: 2449695354@qq.com</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上证指数</strong></p><p><img src="`+l+'" alt="alt text"></p><p><strong>中信证券</strong></p><p><img src="'+p+'" alt="alt text"></p><p><strong>广发证券</strong></p><p><img src="'+t+'" alt="alt text"></p><p><strong>东方财富</strong></p><p><img src="'+c+'" alt="alt text"></p>',16)]))}const v=n(r,[["render",d]]),u=JSON.parse('{"path":"/%E4%BA%A4%E6%98%93/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BC%E9%80%9A%E8%BE%BE%E4%BF%A1%E6%8C%87%E6%A0%87%E5%AE%9E%E7%8E%B0/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BCV1.html","title":"活跃市值V1","lang":"zh-CN","frontmatter":{"title":"活跃市值V1","date":"2025-12-07T13:13:00.000Z","article":false,"description":"活跃市值V1 这个版本的代码来自微信公众号文章 指标原理 把10日成交额均线看作是活跃筹码市值 每日成交金额，主力进出必留痕 均线过滤散户噪音 红柱看作是资金流入 绿柱看作是资金流出 用法 选股阶段 只做红柱股 买入时机 底部红柱首现+股价站上5日线（双重保险） 止损信号 绿柱出现且破10日线，立马撤退！ 原版代码 个人修改版 上证指数 alt tex...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"活跃市值V1\\",\\"description\\":\\"活跃市值V1 这个版本的代码来自微信公众号文章 指标原理 把10日成交额均线看作是活跃筹码市值 每日成交金额，主力进出必留痕 均线过滤散户噪音 红柱看作是资金流入 绿柱看作是资金流出 用法 选股阶段 只做红柱股 买入时机 底部红柱首现+股价站上5日线（双重保险） 止损信号 绿柱出现且破10日线，立马撤退！ 原版代码 个人修改版 上证指数 alt tex...\\"}"],["meta",{"property":"og:url","content":"https://dingdingdang.online/%E4%BA%A4%E6%98%93/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BC%E9%80%9A%E8%BE%BE%E4%BF%A1%E6%8C%87%E6%A0%87%E5%AE%9E%E7%8E%B0/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BCV1.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"活跃市值V1"}],["meta",{"property":"og:description","content":"活跃市值V1 这个版本的代码来自微信公众号文章 指标原理 把10日成交额均线看作是活跃筹码市值 每日成交金额，主力进出必留痕 均线过滤散户噪音 红柱看作是资金流入 绿柱看作是资金流出 用法 选股阶段 只做红柱股 买入时机 底部红柱首现+股价站上5日线（双重保险） 止损信号 绿柱出现且破10日线，立马撤退！ 原版代码 个人修改版 上证指数 alt tex..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-09T13:46:27.000Z"}],["meta",{"property":"article:published_time","content":"2025-12-07T13:13:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-09T13:46:27.000Z"}],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"git":{"createdTime":1765138666000,"updatedTime":1765287987000,"contributors":[{"name":"YiguiDing","username":"YiguiDing","email":"2449695354@qq.com","commits":2,"url":"https://github.com/YiguiDing"}]},"readingTime":{"minutes":1.54,"words":463},"filePathRelative":"交易/活跃市值通达信指标实现/活跃市值V1.md","excerpt":"","autoDesc":true}');export{v as comp,u as data};
