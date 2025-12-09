import{ah as n,ai as a,ap as e,aj as i}from"./app-BVHMPWpx.js";const p="/assets/image-BjcJS1Zw.png",l="/assets/image-5-B2Q1YwYD.png",t="/assets/image-6-BVFh-_FT.png",c="/assets/ee603334e5d2fdf263fd331ad7c3c24c-yW9CICaM.png",r="/assets/cc4288fbe39a9d8fb92cc467052ba434-Dp4eg_c9.png",d="/assets/image-7-C4gEE7v4.png",m="/assets/4e7bcce19028655ecacae3534ac72756-HkOT7gBx.png",v="/assets/68ff9e112e50c9d2952e2a8b89f23a50-XD7H4ubW.png",o="/assets/5b09ba09e4ed8eb10d880b1a3f6795b8-sVzx46Zo.png",g={};function u(b,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="活跃市值v2" tabindex="-1"><a class="header-anchor" href="#活跃市值v2"><span>活跃市值V2</span></a></h2><p><strong>指标原理</strong></p><ul><li>将每日k线的最高价到最低价的获利比例看成是活跃筹码</li><li>计算成交量的量能在过去一个周期内的百分位作为活跃系数</li><li>定义： <ul><li><code>活跃筹码 = 流通筹码 * 活跃系数 * 活筹占比</code></li><li><code>活筹市值:=活跃筹码 * 股价</code></li></ul></li></ul><p><strong>源代码</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{ ######## 参数配置 ######## }</span></span>
<span class="line"><span>N1:=20;</span></span>
<span class="line"><span>N2:=10;</span></span>
<span class="line"><span>{ ######## 活筹市值 ######## }</span></span>
<span class="line"><span>流通筹码:=CAPITAL * 100;</span></span>
<span class="line"><span>活筹占比:=SMA(EMA(WINNER(H) - WINNER(L),N1),N2,1);</span></span>
<span class="line"><span>活跃系数:=SMA(EMA((V-LLV(V,N1))/(HHV(V,N1)-LLV(V,N1)),N1),N2,1);</span></span>
<span class="line"><span>单位亿元:=1/100000000;</span></span>
<span class="line"><span>活跃筹码:=活跃系数 * 流通筹码 * 活筹占比 * 单位亿元;</span></span>
<span class="line"><span>平均价格:=(2*C+H+L)/4;</span></span>
<span class="line"><span>活筹市值:=活跃筹码 * 平均价格;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ ######## K线绘制 ######## }</span></span>
<span class="line"><span>MA10:EMA(活筹市值,10);</span></span>
<span class="line"><span>MA20:EMA(活筹市值,20);</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>STICKLINE(活筹市值&gt;REF(活筹市值,1),活筹市值,REF(活筹市值,1),3,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(活筹市值&lt;REF(活筹市值,1),活筹市值,REF(活筹市值,1),3,0),COLORGREEN;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ ######## K线绘制 ######## }</span></span>
<span class="line"><span>活筹市值O:=活跃筹码 * O;</span></span>
<span class="line"><span>活筹市值C:=活跃筹码 * C;</span></span>
<span class="line"><span>活筹市值H:=活跃筹码 * H;</span></span>
<span class="line"><span>活筹市值L:=活跃筹码 * L;</span></span>
<span class="line"><span>{DRAWKLINE(活筹市值H,活筹市值O,活筹市值L,活筹市值C);}</span></span>
<span class="line"><span>DRAWKLINE(活筹市值H,REF(活筹市值C,1),活筹市值L,活筹市值C);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ ######## 交易系统 ######## }</span></span>
<span class="line"><span>活筹下跌:=REF(活筹市值,1)&gt;活筹市值;</span></span>
<span class="line"><span>活筹上涨:=REF(活筹市值,1)&lt;活筹市值;</span></span>
<span class="line"><span>入场信号:=COUNT(活筹下跌,4)=3 AND 活筹上涨;</span></span>
<span class="line"><span>离场信号:=CROSS(MA20,活筹市值);</span></span>
<span class="line"><span>多头持仓:=BARSLAST(入场信号) &lt; BARSLAST(离场信号);</span></span>
<span class="line"><span>止损信号:=多头持仓 AND CROSS(0.97*REF(L,BARSLAST(入场信号)),C);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DRAWICON(入场信号, 活筹市值L*0.95, 1);</span></span>
<span class="line"><span>DRAWICON(离场信号 OR 止损信号, 活筹市值H*1.05, 2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BUY(入场信号,活筹市值L*0.90);</span></span>
<span class="line"><span>SELL(离场信号 OR 止损信号,活筹市值H*1.10);</span></span>
<span class="line"><span>AUTOFILTER;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ©Copyright 2025-now YiguiDing. All Right Reserved.</span></span>
<span class="line"><span>    Author: TinyRick_0729(YiguiDing)</span></span>
<span class="line"><span>    Email: 2449695354@qq.com</span></span>
<span class="line"><span>    Date: 2025-09-19</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>中信证券</strong></p><p><img src="`+p+'" alt="alt text"></p><p><strong>广发证券</strong></p><p><img src="'+l+'" alt="alt text"></p><p><strong>东方财富</strong></p><p><img src="'+t+'" alt="alt text"><br><img src="'+c+'" alt="alt text"></p><p><strong>国盛证券</strong></p><p><img src="'+r+'" alt="alt text"></p><p><strong>中芯国际</strong></p><p><img src="'+d+'" alt="alt text"><br><img src="'+m+'" alt="alt text"></p><p><strong>古井贡酒</strong></p><p><img src="'+v+'" alt="alt text"></p><p><strong>山西焦煤</strong></p><p><img src="'+o+'" alt="alt text"></p>',19)]))}const B=n(g,[["render",u]]),A=JSON.parse('{"path":"/%E4%BA%A4%E6%98%93/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BC%E9%80%9A%E8%BE%BE%E4%BF%A1%E6%8C%87%E6%A0%87%E5%AE%9E%E7%8E%B0/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BCV2.html","title":"活跃市值V2","lang":"zh-CN","frontmatter":{"title":"活跃市值V2","date":"2025-11-25T16:10:00.000Z","article":false,"description":"活跃市值V2 指标原理 将每日k线的最高价到最低价的获利比例看成是活跃筹码 计算成交量的量能在过去一个周期内的百分位作为活跃系数 定义： 活跃筹码 = 流通筹码 * 活跃系数 * 活筹占比 活筹市值:=活跃筹码 * 股价 源代码 中信证券 alt text 广发证券 alt text 东方财富 alt text alt text 国盛证券 alt te...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"活跃市值V2\\",\\"description\\":\\"活跃市值V2 指标原理 将每日k线的最高价到最低价的获利比例看成是活跃筹码 计算成交量的量能在过去一个周期内的百分位作为活跃系数 定义： 活跃筹码 = 流通筹码 * 活跃系数 * 活筹占比 活筹市值:=活跃筹码 * 股价 源代码 中信证券 alt text 广发证券 alt text 东方财富 alt text alt text 国盛证券 alt te...\\"}"],["meta",{"property":"og:url","content":"https://dingdingdang.online/%E4%BA%A4%E6%98%93/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BC%E9%80%9A%E8%BE%BE%E4%BF%A1%E6%8C%87%E6%A0%87%E5%AE%9E%E7%8E%B0/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BCV2.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"活跃市值V2"}],["meta",{"property":"og:description","content":"活跃市值V2 指标原理 将每日k线的最高价到最低价的获利比例看成是活跃筹码 计算成交量的量能在过去一个周期内的百分位作为活跃系数 定义： 活跃筹码 = 流通筹码 * 活跃系数 * 活筹占比 活筹市值:=活跃筹码 * 股价 源代码 中信证券 alt text 广发证券 alt text 东方财富 alt text alt text 国盛证券 alt te..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-07T20:17:46.000Z"}],["meta",{"property":"article:published_time","content":"2025-11-25T16:10:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-07T20:17:46.000Z"}],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"git":{"createdTime":1765138666000,"updatedTime":1765138666000,"contributors":[{"name":"YiguiDing","username":"YiguiDing","email":"2449695354@qq.com","commits":1,"url":"https://github.com/YiguiDing"}]},"readingTime":{"minutes":1.94,"words":581},"filePathRelative":"交易/活跃市值通达信指标实现/活跃市值V2.md","excerpt":"","autoDesc":true}');export{B as comp,A as data};
