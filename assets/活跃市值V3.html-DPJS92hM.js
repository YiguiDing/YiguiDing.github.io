import{ah as n,ai as a,ap as e,aj as i}from"./app-CMKR-Zwd.js";const t="/assets/013e7c210a4e29915baf65d91722e04b-DUayPCO5.png",p="/assets/9919fc0964eb9b56f7140f6e60fbd827-UfbR5nVy.png",l="/assets/image-8-Cvr-NzKY.png",c="/assets/image-9-DUqc2v1G.png",r="/assets/image-10-C_2P5aLr.png",d="/assets/image-11-mTxtFItS.png",m="/assets/image-12-DYnKHNsp.png",o="/assets/image-13-CoBtcTnT.png",g="/assets/image-14-DwhYr3V1.png",v="/assets/image-15-D1W_DsOx.png",u="/assets/image-16-Bg6uHmsx.png",b="/assets/image-17-BAMj1QJX.png",E="/assets/image-20-Cah4RuKu.png",_="/assets/image-23-ZUYSv28_.png",x="/assets/image-21-BVU4oKf7.png",B="/assets/image-22-B4H4qYte.png",A="/assets/image-18-lK2ZKlZ-.png",h="/assets/image-19-tC5royvn.png",C={};function R(f,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="活跃市值v3" tabindex="-1"><a class="header-anchor" href="#活跃市值v3"><span>活跃市值V3</span></a></h2><p><strong>指标原理</strong></p><ul><li>把10日成交量均线看作是活跃筹码</li><li>把10日收盘价均线看作是筹码市值</li><li>定义： <ul><li><code>活筹市值 := 活跃筹码 * 筹码市值</code></li></ul></li></ul><p><strong>源代码</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{ ######## 参数配置 ######## }</span></span>
<span class="line"><span>N1:=20;</span></span>
<span class="line"><span>{ ######## 活筹市值 ######## }</span></span>
<span class="line"><span>活筹:=SMA(V,N1,1);</span></span>
<span class="line"><span>均价:=SMA(C,N1,1);</span></span>
<span class="line"><span>活筹市值:=活筹*均价;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>STICKLINE(活筹市值&gt;REF(活筹市值,1),活筹市值,REF(活筹市值,1),3,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(活筹市值&lt;REF(活筹市值,1),活筹市值,REF(活筹市值,1),3,0),COLORGREEN;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ ######## 均线 ######## }</span></span>
<span class="line"><span>MA5:MA(活筹市值,5);</span></span>
<span class="line"><span>MA10:MA(活筹市值,10);</span></span>
<span class="line"><span>MA20:MA(活筹市值,20);</span></span>
<span class="line"><span>MA60:MA(活筹市值,60);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ ######## K线 ######## }</span></span>
<span class="line"><span>活筹市值O:=活筹 * O;</span></span>
<span class="line"><span>活筹市值C:=活筹 * C;</span></span>
<span class="line"><span>活筹市值H:=活筹 * H;</span></span>
<span class="line"><span>活筹市值L:=活筹 * L;</span></span>
<span class="line"><span>{DRAWKLINE(活筹市值H,活筹市值O,活筹市值L,活筹市值C);}</span></span>
<span class="line"><span>DRAWKLINE(活筹市值H,REF(活筹市值C,1),活筹市值L,活筹市值C);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ ######## 交易系统 ######## }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>短期趋势:=MA(活筹市值,5);</span></span>
<span class="line"><span>长期趋势:=MA(活筹市值,10);</span></span>
<span class="line"><span>入场信号:=CROSS(短期趋势,长期趋势);</span></span>
<span class="line"><span>离场信号:=CROSS(长期趋势,短期趋势);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>多头持仓:=BARSLAST(入场信号)&lt;BARSLAST(离场信号);</span></span>
<span class="line"><span>止损信号:=多头持仓 AND CROSS(C,0.95*REF(L,BARSLAST(入场信号)));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DRAWICON(入场信号, 活筹市值L*0.95, 1);</span></span>
<span class="line"><span>DRAWICON(离场信号 OR 止损信号, 活筹市值H*1.05, 2);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BUY(入场信号,活筹市值L*0.90);</span></span>
<span class="line"><span>SELL(离场信号 OR 止损信号,活筹市值H*1.10);</span></span>
<span class="line"><span>AUTOFILTER;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ ######## 版权声明 ######## }</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    ©Copyright 2025.09.19-now YiguiDing. All Right Reserved.</span></span>
<span class="line"><span>    Author: TinyRick_0729(YiguiDing)</span></span>
<span class="line"><span>    Email: 2449695354@qq.com</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>上证指数活跃市值</code> 和 <code>指南针活跃市值</code> 对比</p><p><strong>基本相识</strong></p><p><img src="`+t+'" alt="alt text"><br><img src="'+p+'" alt="alt text"></p><p><strong>中信证券</strong></p><p><img src="'+l+'" alt="alt text"><br><img src="'+c+'" alt="alt text"></p><p><strong>广发证券</strong></p><p><img src="'+r+'" alt="alt text"><br><img src="'+d+'" alt="alt text"></p><p><strong>东方财富</strong></p><p><img src="'+m+'" alt="alt text"><br><img src="'+o+'" alt="alt text"></p><p><strong>国盛证券</strong></p><p><img src="'+g+'" alt="alt text"><br><img src="'+v+'" alt="alt text"></p><p><strong>中芯国际</strong></p><p><img src="'+u+'" alt="alt text"><br><img src="'+b+'" alt="alt text"></p><p><strong>寒武纪</strong></p><p><img src="'+E+'" alt="alt text"><br><img src="'+_+'" alt="alt text"></p><p><strong>海光信息</strong></p><p><img src="'+x+'" alt="alt text"><br><img src="'+B+'" alt="alt text"></p><p><strong>古井贡酒</strong></p><p><img src="'+A+'" alt="alt text"></p><p><strong>山西焦煤</strong></p><p><img src="'+h+'" alt="alt text"></p>',26)]))}const L=n(C,[["render",R]]),y=JSON.parse('{"path":"/%E4%BA%A4%E6%98%93/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BC%E9%80%9A%E8%BE%BE%E4%BF%A1%E6%8C%87%E6%A0%87%E5%AE%9E%E7%8E%B0/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BCV3.html","title":"活跃市值V3","lang":"zh-CN","frontmatter":{"title":"活跃市值V3","date":"2025-12-02T12:09:00.000Z","article":false,"description":"活跃市值V3 指标原理 把10日成交量均线看作是活跃筹码 把10日收盘价均线看作是筹码市值 定义： 活筹市值 := 活跃筹码 * 筹码市值 源代码 上证指数活跃市值 和 指南针活跃市值 对比 基本相识 alt text alt text 中信证券 alt text alt text 广发证券 alt text alt text 东方财富 alt tex...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"活跃市值V3\\",\\"description\\":\\"活跃市值V3 指标原理 把10日成交量均线看作是活跃筹码 把10日收盘价均线看作是筹码市值 定义： 活筹市值 := 活跃筹码 * 筹码市值 源代码 上证指数活跃市值 和 指南针活跃市值 对比 基本相识 alt text alt text 中信证券 alt text alt text 广发证券 alt text alt text 东方财富 alt tex...\\"}"],["meta",{"property":"og:url","content":"https://dingdingdang.online/%E4%BA%A4%E6%98%93/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BC%E9%80%9A%E8%BE%BE%E4%BF%A1%E6%8C%87%E6%A0%87%E5%AE%9E%E7%8E%B0/%E6%B4%BB%E8%B7%83%E5%B8%82%E5%80%BCV3.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"活跃市值V3"}],["meta",{"property":"og:description","content":"活跃市值V3 指标原理 把10日成交量均线看作是活跃筹码 把10日收盘价均线看作是筹码市值 定义： 活筹市值 := 活跃筹码 * 筹码市值 源代码 上证指数活跃市值 和 指南针活跃市值 对比 基本相识 alt text alt text 中信证券 alt text alt text 广发证券 alt text alt text 东方财富 alt tex..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-09T13:46:27.000Z"}],["meta",{"property":"article:published_time","content":"2025-12-02T12:09:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-09T13:46:27.000Z"}],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"git":{"createdTime":1765287987000,"updatedTime":1765287987000,"contributors":[{"name":"YiguiDing","username":"YiguiDing","email":"2449695354@qq.com","commits":1,"url":"https://github.com/YiguiDing"}]},"readingTime":{"minutes":1.81,"words":542},"filePathRelative":"交易/活跃市值通达信指标实现/活跃市值V3.md","excerpt":"","autoDesc":true}');export{L as comp,y as data};
