import{ah as n,ai as a,ap as i,aj as e}from"./app-BVHMPWpx.js";const l="/assets/image-2-BF8Ce6SQ.png",p="/assets/image-1-ClCwDfPA.png",t="/assets/image-dEcD1LHM.png",c={};function d(r,s){return e(),a("div",null,s[0]||(s[0]=[i('<h2 id="军师神助指标源码分析" tabindex="-1"><a class="header-anchor" href="#军师神助指标源码分析"><span>军师神助指标源码分析</span></a></h2><p>好几次在B站刷到这个指标的视频，单纯好奇副图这根线的意义是什么，如何计算的，搞了份源代码准备研究下。</p><p><img src="'+l+`" alt="alt text"></p><p><strong>源代码</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>VA1:=HHV(HIGH,12)-LLV(LOW,26);</span></span>
<span class="line"><span>VA2:=HHV(HIGH,9)-CLOSE;</span></span>
<span class="line"><span>VA3:=CLOSE-LLV(LOW,9);</span></span>
<span class="line"><span>VA4:=VA2/VA1*100-70;</span></span>
<span class="line"><span>VA5:=(CLOSE-LLV(LOW,60))/(HHV(HIGH,60)-LLV(LOW,60))*100;</span></span>
<span class="line"><span>VA6:=(2*CLOSE+HIGH+LOW)/4;</span></span>
<span class="line"><span>VA7:=SMA(VA3/VA1*100,3,1);</span></span>
<span class="line"><span>VA8:=LLV(LOW,34);</span></span>
<span class="line"><span>VA9:=SMA(VA7,3,1)-SMA(VA4,9,1);</span></span>
<span class="line"><span>VARA:=IF(VA9&gt;100,VA9-100,0);</span></span>
<span class="line"><span>VARB:=HHV(HIGH,34);</span></span>
<span class="line"><span>VARC:=EMA((VA6-VA8)/(VARB-VA8)*100,13);</span></span>
<span class="line"><span>VARD:=EMA(0.667*REF(VARC,1)+0.333*VARC,2);</span></span>
<span class="line"><span>VARE:=SMA(MAX(CLOSE-REF(CLOSE,1),0)/CLOSE,8,1)/SMA(ABS(INDEXC-REF(INDEXC,1))/INDEXC,8,1)*100-25;</span></span>
<span class="line"><span>VARF:=MA(VARE,3);</span></span>
<span class="line"><span>生命线:EMA(VARD,1),COLORFF00FF;</span></span>
<span class="line"><span>VAR1:=HHV(HIGH,9)-LLV(LOW,9);</span></span>
<span class="line"><span>VAR2:=HHV(HIGH,9)-CLOSE;</span></span>
<span class="line"><span>VAR3:=CLOSE-LLV(LOW,9);</span></span>
<span class="line"><span>VAR4:=((VAR2)/(VAR1))*(100)-70;</span></span>
<span class="line"><span>VAR5:=((CLOSE-LLV(LOW,60))/(HHV(HIGH,60)-LLV(LOW,60)))*(100);</span></span>
<span class="line"><span>VAR6:=((2)*(CLOSE)+HIGH+LOW)/(4);</span></span>
<span class="line"><span>VAR7:=SMA(((VAR3)/(VAR1))*(100),3,1);</span></span>
<span class="line"><span>VAR8:=LLV(LOW,34);</span></span>
<span class="line"><span>VAR9:=SMA(VAR7,3,1)-SMA(VAR4,9,1);</span></span>
<span class="line"><span>VAR10:=IF((VAR9&gt;100),VAR9-100,0);</span></span>
<span class="line"><span>VAR11:=HHV(HIGH,34);</span></span>
<span class="line"><span>B1:=EMA(((VAR6-VAR8)/(VAR11-VAR8))*(100),8);</span></span>
<span class="line"><span>B2:EMA(B1,5),COLORFF7000;</span></span>
<span class="line"><span>STICKLINE(B1-B2&gt;0,B1,B2,2,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(B1-B2&lt;0,B1,B2,2,0),COLORGREEN;</span></span>
<span class="line"><span>V1:=MA(C,5)=HHV(MA(C,5),20);</span></span>
<span class="line"><span>V2:=MA(C,5)&gt;MA(C,10);</span></span>
<span class="line"><span>V3:=MA(V,5)&gt;MA(V,40)*1.01;</span></span>
<span class="line"><span>V4:=COUNT(MA(C,1)&gt;REF(C,1),2)=2;</span></span>
<span class="line"><span>VV:=V1 AND V2 AND V3 AND V4;</span></span>
<span class="line"><span>A1:=EMA(CLOSE,8);</span></span>
<span class="line"><span>A2:=EMA(A1,20);</span></span>
<span class="line"><span>A3:=CROSS(A1,A2);</span></span>
<span class="line"><span>A4:=A1&lt;EMA(CLOSE,120);</span></span>
<span class="line"><span>A5:=3*SMA((CLOSE-LLV(LOW,18))/(HHV(HIGH,18)-LLV(LOW,18))*100,21,1)-2*SMA(SMA((CLOSE-LLV(LOW,18))/(HHV(HIGH,18)-LLV(LOW,18))*100,20,1),8,1);</span></span>
<span class="line"><span>军师神助 :IF(CROSS(VARC,生命线) AND VARC&gt;VARD AND VARC&lt;55 AND C&gt;O,50,0),COLORRED,STICK,LINETHICK4;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>分析和重写</strong></p><blockquote><p>最后发现算法其实基本上就是KDJ</p></blockquote><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{ 生命线算法的本质类似于KDJ.D(34,13,2) }</span></span>
<span class="line"><span>RSV_34:=((2*CLOSE+HIGH+LOW)/4-LLV(LOW,34))/(HHV(HIGH,34)-LLV(LOW,34))*100; { 典型价的34日相对强弱 }</span></span>
<span class="line"><span>K_13:=EMA(RSV_34,13); { 快线：相对强弱的13日均线 }</span></span>
<span class="line"><span>D_2:=EMA(0.667*REF(K_13,1)+0.333*K_13,2); { 慢线: 对快线进行一阶滤波(α=0.333)+2日指数平滑 }</span></span>
<span class="line"><span>生命线:D_2,COLORFF00FF; { 生命线：本质就是慢线 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>K_8:=EMA(RSV_34,8); { 快线：相对强弱的13日均线 }</span></span>
<span class="line"><span>D_5:EMA(K_8,5),COLORFF7000; { 慢线: 对快线进行5日指数平滑 }</span></span>
<span class="line"><span>STICKLINE(K_8&gt;D_5,K_8,D_5,2,0),COLORRED; { 用快慢线的差值来绘制不同高度的柱状图，表示趋势的强弱 }</span></span>
<span class="line"><span>STICKLINE(K_8&lt;D_5,K_8,D_5,2,0),COLORGREEN;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 买入信号 本质就是K在中位之下的金叉信号 同时要求收阳线 }</span></span>
<span class="line"><span>买入信号:=CROSS(K_13,D_2) AND K_13&gt;D_2 AND K_13&lt;55 AND C&gt;O;</span></span>
<span class="line"><span>军师神助 : IF(买入信号,50,0),COLORRED,STICK,LINETHICK4;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重写代码的最终效果和源代码效果一致</p><p><img src="`+p+'" alt="alt text"><br><img src="'+t+'" alt="alt text"></p>',10)]))}const A=n(c,[["render",d]]),m=JSON.parse('{"path":"/%E4%BA%A4%E6%98%93/%E5%86%9B%E5%B8%88%E7%A5%9E%E5%8A%A9%E6%8C%87%E6%A0%87%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/","title":"军师神助指标源码分析","lang":"zh-CN","frontmatter":{"title":"军师神助指标源码分析","date":"2025-12-07T12:44:00.000Z","article":false,"description":"军师神助指标源码分析 好几次在B站刷到这个指标的视频，单纯好奇副图这根线的意义是什么，如何计算的，搞了份源代码准备研究下。 alt text 源代码 分析和重写 最后发现算法其实基本上就是KDJ 重写代码的最终效果和源代码效果一致 alt text alt text","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"军师神助指标源码分析\\",\\"description\\":\\"军师神助指标源码分析 好几次在B站刷到这个指标的视频，单纯好奇副图这根线的意义是什么，如何计算的，搞了份源代码准备研究下。 alt text 源代码 分析和重写 最后发现算法其实基本上就是KDJ 重写代码的最终效果和源代码效果一致 alt text alt text\\"}"],["meta",{"property":"og:url","content":"https://dingdingdang.online/%E4%BA%A4%E6%98%93/%E5%86%9B%E5%B8%88%E7%A5%9E%E5%8A%A9%E6%8C%87%E6%A0%87%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"军师神助指标源码分析"}],["meta",{"property":"og:description","content":"军师神助指标源码分析 好几次在B站刷到这个指标的视频，单纯好奇副图这根线的意义是什么，如何计算的，搞了份源代码准备研究下。 alt text 源代码 分析和重写 最后发现算法其实基本上就是KDJ 重写代码的最终效果和源代码效果一致 alt text alt text"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-07T12:57:18.000Z"}],["meta",{"property":"article:published_time","content":"2025-12-07T12:44:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-07T12:57:18.000Z"}],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"git":{"createdTime":1765112238000,"updatedTime":1765112238000,"contributors":[{"name":"YiguiDing","username":"YiguiDing","email":"2449695354@qq.com","commits":1,"url":"https://github.com/YiguiDing"}]},"readingTime":{"minutes":2.35,"words":704},"filePathRelative":"交易/军师神助指标源码分析/README.md","excerpt":"","autoDesc":true}');export{A as comp,m as data};
