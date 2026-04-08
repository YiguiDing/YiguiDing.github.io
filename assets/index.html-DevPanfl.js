import{ah as n,ai as a,ap as i,aj as l}from"./app-CfkHjtyy.js";const p="/assets/image-BWna1iSA.png",e="/assets/image-1-DwzDqwKj.png",c="/assets/image-2-OjvYQE9B.png",d="/assets/image-3-wbYMQJ8h.png",v="/assets/image-4-C9Ib-xlG.png",t="/assets/image-5-CEz24r7_.png",r="/assets/image-6-Bmk2H9J9.png",O="/assets/image-7-C1JKg-U6.png",E="/assets/image-8-DiDQBnnG.png",L="/assets/image-9-CYckwXqY.png",m="/assets/image-10-D7rO5IUP.png",u="/assets/image-11-DTtSU3W3.png",b="/assets/image-12-BHAalGLv.png",N="/assets/image-13-DG68VmtB.png",A="/assets/image-14-sJbzhh_X.png",g="/assets/image-15-BsYd1-vj.png",C="/assets/image-16-DaDWqZO9.png",R="/assets/image-17-BAuHZJhd.png",S="/assets/image-18-Bl2cW1Ka.png",D="/assets/image-19--674SuSa.png",I="/assets/image-20-DcNujC4F.png",o="/assets/image-21-BOaf-R34.png",F="/assets/image-22-dkoro55O.png",h="/assets/image-23-DvAoanww.png",_="/assets/image-24-zCxIs__F.png",T="/assets/image-26-Dbi7yX6R.png",X="/assets/image-27-C3YXPKAb.png",H="/assets/image-28-1TibSZZ8.png",M="/assets/image-29-DbHXqCSE.png",V="/assets/image-30-Bdj-F159.png",k="/assets/image-31-D9qDWvfp.png",W="/assets/image-32-DYzt0Jhh.png",G="/assets/image-33-BUqf7zVR.png",B="/assets/image-34-jgWGpVJN.png",K="/assets/image-35--KUx9e2r.png",x="/assets/image-36-FikSRBya.png",f="/assets/image-37-DrwRrAKE.png",U="/assets/image-38-EkNKajla.png",P="/assets/image-39-JrGPcE2E.png",Y="/assets/image-40-A3MlD_Vq.png",y="/assets/image-41-d8Ko0Ww6.png",J="/assets/image-42-CIlubPr0.png",q={};function w(j,s){return l(),a("div",null,s[0]||(s[0]=[i('<blockquote><p>说明：</p><ul><li>指标作者是我的券商投顾（华兴证券），</li><li>开始并不太信，但通过长期观察发现其推荐的股票后续涨幅确实可观，</li><li>所以在此对其发布课程内容做个学习笔记，</li><li>同时尝试研究和逐行分析其编写的指标。</li></ul></blockquote><h1 id="大阳主图交易体系学习笔记和通达信代码破解分析" tabindex="-1"><a class="header-anchor" href="#大阳主图交易体系学习笔记和通达信代码破解分析"><span>大阳主图交易体系学习笔记和通达信代码破解分析</span></a></h1><h2 id="大阳主图作者-张向阳-简介" tabindex="-1"><a class="header-anchor" href="#大阳主图作者-张向阳-简介"><span>大阳主图作者（张向阳）简介</span></a></h2><p><img src="'+p+'" alt="alt text"></p><h2 id="主图标识和应用" tabindex="-1"><a class="header-anchor" href="#主图标识和应用"><span>主图标识和应用</span></a></h2><h3 id="标识" tabindex="-1"><a class="header-anchor" href="#标识"><span>标识</span></a></h3><p><strong>注册制涨停标识</strong></p><ul><li>红色柱子：涨停（10cm 20cm 30cm）</li><li>粉(紫)色柱子：大于10cm上涨</li><li>青色柱子：跌停 及 超过 10cm下跌</li><li><img src="'+e+'" alt="alt text"></li></ul><p><strong>主板涨停标识</strong></p><ul><li>粉红色：涨停(10cm)</li><li>淡粉红色：一字涨停</li><li>蓝色：10cm跌停</li><li>淡青色：一字跌停</li><li><img src="'+c+'" alt="alt text"></li></ul><p><strong>四条线</strong></p><ul><li>上下轨（蓝色）</li><li>主力操作线（中轨，下跌绿色，上涨红色）</li><li>主力成本线（红）</li></ul><p><strong>买卖信号</strong></p><ul><li>地量突破信号（B） <ul><li>出现地量+突破</li></ul></li><li>量价突破信号 (↑) <ul><li>量价齐升的突破</li><li>上涨趋势非常有效</li><li>下跌趋势慎用</li></ul></li><li>超买超卖信号（手指）</li><li>底分型 <ul><li>强势底分型</li><li>弱势不显示</li></ul></li><li>图穷匕见</li><li>黄金柱 <ul><li>比量价齐升更强势</li></ul></li></ul><p><img src="'+d+'" alt="alt text"><br><img src="'+v+'" alt="alt text"></p><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h3><h4 id="主力操作线-中轨-应用" tabindex="-1"><a class="header-anchor" href="#主力操作线-中轨-应用"><span>主力操作线（中轨）应用</span></a></h4><p><strong>上涨趋势</strong></p><ul><li>主力操作线（中轨）是趋势线</li><li><strong>向上突破主力操盘线进入可买入区</strong></li><li>中轨之上持股待涨，若出现顶部形态可减仓</li><li>中轨之上是低吸高抛的机会</li><li>调整到中轨构成支撑，回踩向上买入，向下跌破离场。</li><li>防止骗线，当日跌破&gt;2%才算有效跌破</li><li>跌破少于2%，看第二天收盘能否收回，否则离场。</li></ul><p><strong>案例</strong></p><ul><li>联创股份 <ul><li>大阳主图视角</li><li><img src="'+t+'" alt="alt text"></li><li>Z哥三线视角</li><li><img src="'+r+'" alt="alt text"></li></ul></li><li>亚光科技 <ul><li>大阳主图视角</li><li><img src="'+O+'" alt="alt text"></li><li>Z哥三线视角</li><li><img src="'+E+'" alt="alt text"></li></ul></li></ul><p><strong>下跌趋势</strong></p><ul><li>下跌趋势，股价在中轨以下不买；（例外：格兰维尔八法则上涨趋势的买点3）</li><li>上涨趋势，股价在中轨以下，大多数情况不可买入，但符合战法、k线形态、量能结构可买入。</li><li>如果趋势向下，每次反弹都受到中轨压制，一定要等待中轨走平以及股价站上才有买入价值。</li><li>在中轨之下的抄底都要当成短线交易。</li><li>格兰维尔八法则 <ul><li>上涨趋势：3买1卖</li><li>下跌趋势：3卖1买</li><li><img src="'+L+'" alt="alt text"></li></ul></li><li><img src="'+m+'" alt="alt text"></li></ul><h4 id="主力成本线应用" tabindex="-1"><a class="header-anchor" href="#主力成本线应用"><span>主力成本线应用</span></a></h4><p><strong>上涨趋势</strong></p><ul><li>主力成本线是生命线，也是牛熊转折线。 <ul><li>站上为牛，跌破为熊。</li></ul></li><li>低位站上主力成本线，走强。</li><li>中轨和主力成本线低位金叉，买入信号。</li><li>中轨高于主力成本线是强势区。</li><li>最后的防守线，不跌破生息尚存，受到支撑作用向上反弹可买入，跌破一定要离场。</li><li><img src="'+u+'" alt="alt text"></li></ul><p><strong>下跌趋势</strong></p><ul><li>下跌趋势，主力成本线下不买；（例外：格兰维尔八法则上涨趋势的买点3）</li><li>主力成本线和中轨死叉是卖出信号；进入弱势区，尽量不买入。</li><li>如果中长线的股价走势一直在主力成本线之下受到压制，要等待主力成本线走平，以及股价站上才可买入。</li><li>在主力成本线之下的抄底都必须按短线做。</li><li><img src="'+b+'" alt="alt text"></li></ul><h5 id="主力操作线-主力成本线规律总结" tabindex="-1"><a class="header-anchor" href="#主力操作线-主力成本线规律总结"><span>主力操作线/主力成本线规律总结</span></a></h5><p><strong>上涨趋势规律：</strong></p><ul><li>股价站上中轨，可操作，</li><li>再站上主力成本线，可加仓；</li><li>随后主力成本线金叉中轨，形成多头排列，可持股待涨。</li></ul><p><strong>下跌趋势规律：</strong></p><ul><li>股价跌破中轨，减仓，</li><li>再跌破主力成本线，离场；</li><li>随后主力成本线死叉中轨，形成空头排列，等待下个周期。</li></ul><h4 id="超买超卖信号应用" tabindex="-1"><a class="header-anchor" href="#超买超卖信号应用"><span>超买超卖信号应用</span></a></h4><p><strong>超买超卖信号</strong></p><ul><li><img src="'+N+'" alt="alt text"></li><li>属于技术上的信号 <ul><li>如：macd,kdj等的超买超卖信号</li><li>任何指标不能指导买卖，连续大涨就会超买，连续大跌就会超卖。</li><li>超卖存在技术修复的可能，超买也存在调整的可能。</li><li>超卖超卖信号是MACD、KDJ技术指标的反应，技术指标是K线形态的反应，K线形态才是最重要的。</li></ul></li><li>只代表技术上的超买超买信号，未必是大顶或大低。</li><li>需结合趋势、形态应用。</li><li>可用于做t,或者波段的加仓/减仓操作。 <ul><li>越大涨，越降低仓位。</li><li>否则一个回撤所有利润消失。</li></ul></li><li>单边行情出现信号无效。 <ul><li>单边一字板的上涨/下跌</li><li>单边沿着上轨/下轨的下跌</li></ul></li><li><img src="'+A+'" alt="alt text"><ul><li>做股票的习惯，抄底不重要，而是一只好票能一直拿住，吃到整个鱼身更重要。从鱼头吃到鱼尾难度极大，多数情况靠猜。</li></ul></li><li><img src="'+g+'" alt="alt text"></li></ul><h2 id="堆量爆发买入形态" tabindex="-1"><a class="header-anchor" href="#堆量爆发买入形态"><span>堆量爆发买入形态</span></a></h2><p><strong>堆量爆发形态</strong></p><ul><li>堆量爆发是最重要，也是最常见的好形态之一是大资金常用的建仓或洗盘模式，会伴随其他好形态。是很重要的买入好形态。</li><li>堆量: 指成交量的堆积，阶段成交量大幅增加；</li><li>形态: 大多是诸如红箭头突破后的放量区间震荡；</li><li>特点: 多出现在建仓或出货阶段;属于主动做盘; <ul><li>主动做盘：有意识的主动收集筹码和震荡洗盘</li></ul></li><li>位置: 中低位是好机会; 高位大多是对倒出货，有风险；</li><li>买入时机：突破是好买点，可潜伏，特别是热点题材；</li><li>止损设置: 震荡区间的下沿或大阳主图的中轨、下轨等。</li></ul><p><strong>堆量的本质</strong></p><ul><li>堆量是资金建仓的好形态，出现在高位就不符合逻辑</li><li>堆量也是高位出货最常见的形态</li><li>低位才是博弈的机会;</li><li>高位极具风险；</li><li>结合下一节很重要的课---高风险形态</li><li>高 位 不 信故事</li><li>低 位 不 惧 利 空</li></ul><p><strong>低位堆量案例</strong></p><ul><li>健康元 <img src="'+C+'" alt="alt text"></li><li>双成药业 <img src="'+R+'" alt="alt text"></li><li>清水源 <img src="'+S+'" alt="alt text"></li><li>引力传媒 <img src="'+D+'" alt="alt text"></li><li>天风证券 <img src="'+I+'" alt="alt text"></li><li>财富趋势 <img src="'+o+'" alt="alt text"></li><li>软通动力 <img src="'+F+'" alt="alt text"></li><li>凯胜科技 <img src="'+h+'" alt="alt text"></li><li>天利科技 <img src="'+_+'" alt="alt text"></li><li>赢时胜 <img src="'+T+'" alt="alt text"></li></ul><p><strong>高位堆量案例</strong></p><ul><li>宏业期货 <img src="'+X+'" alt="alt text"></li><li>科蓝软件 <img src="'+H+'" alt="alt text"></li><li>常山北明 <img src="'+M+'" alt="alt text"></li></ul><p><strong>总结</strong></p><ul><li>常见的形态，长短期皆可，短期易识别，中长期不易识别;</li><li>突破买入很直观;止损容易设置;性价比合理;</li><li>中低位多是资金建仓;往往能抓住大牛股，</li><li>一般是价格先出现突破，再出现堆量；</li><li>中低位才是博弈的好位置:高位常用于震荡出货，务必小心;</li><li>前期有过大幅拉升（翻倍以上），则难以判断（老庄出货？新庄入场？），尽量找确定性;</li><li>叠加热点题材成功率高</li></ul><h2 id="高风险卖出形态" tabindex="-1"><a class="header-anchor" href="#高风险卖出形态"><span>高风险卖出形态</span></a></h2><blockquote><p>高位不信故事、低位不惧利空</p></blockquote><p><strong>高位高风险形态</strong></p><ul><li><strong>高位</strong>是指游资或资金抱团使得股价短期翻倍及以上的位置。</li><li>资金把股价短期炒到<strong>高位</strong>，一定不是为了当股东，而是为了出货；</li><li>会做出各种<strong>假象</strong>，吸引投资者接盘，一旦买入往往深度套牢；这些形态就是高风险形态。</li><li>识别这些高位高风险形态，有助于规避风险，避免接盘。</li></ul><p><strong>常见高位高风险形态</strong></p><ul><li>1、高位冲高回落；</li><li>2、高位高开回落；</li><li>3、大涨低开下杀;</li><li>4、高位震荡高换手；</li><li>5、高位M头;</li><li>6、一字板加速；</li><li>7、高位假突破;</li><li>8、高位首次跌停;</li><li>9、顶分型;</li><li>10、破位形态;</li><li>11、高位长下影线； <ul><li>低位说明有支撑；</li><li>高位说明出货没出完，拉起来继续出货；</li></ul></li><li>12、最阴险的形态；</li></ul><p><strong>高风险形态的判断</strong></p><ul><li>很少单独一种高风险形态，往往是多种高风险形态结合;</li><li>判断要结合位置高低;</li><li>结合炒作情绪;</li><li>结合指数形态;</li><li>结合热点题材;</li><li>结合同板块龙头表现;</li></ul><p><strong>高位各种风险形态的应对方法</strong></p><ul><li>减仓: <ul><li>有高位风险形态，减仓总不会错，只可能早了点</li><li>两手准备，如果继续向上，还有部分仓位；</li></ul></li><li>离场: <ul><li>高位风险形态保住收益很重要;</li><li>一旦离场就不再恋战，寻找新的机会；</li></ul></li></ul><p><strong>高风险形态走势实例</strong></p><ul><li>财富趋势 <ul><li><strong>T字板长下引线</strong>和次日的<strong>大幅低开</strong>都是加速上涨后<strong>动能衰竭</strong>信号</li><li><img src="'+V+'" alt="alt text"></li></ul></li><li>软通动力 <ul><li><img src="'+k+'" alt="alt text"></li></ul></li><li>天风证券 <ul><li><img src="'+W+'" alt="alt text"></li></ul></li><li>赢时胜 <ul><li>从一字板到下引线T字板，到小幅低开的光头实体阳线，已经能够充分说明主升浪上涨动能的衰竭，需要引起警惕，因为可以明显看出主力的筹码在低位，次日的大幅低开需毫不犹豫减仓。</li><li><img src="'+G+'" alt="alt text"></li></ul></li><li>科蓝软件 <ul><li><img src="'+B+'" alt="alt text"></li></ul></li><li>引力传媒 <ul><li><img src="'+K+'" alt="alt text"></li></ul></li><li>清水源 <ul><li><img src="'+x+'" alt="alt text"></li></ul></li><li>天利科技 <ul><li><img src="'+f+'" alt="alt text"></li></ul></li><li>弘业期货 <ul><li><img src="'+U+'" alt="alt text"></li></ul></li><li>汇纳科技 <ul><li><img src="'+P+'" alt="alt text"></li></ul></li><li>常山北明 <ul><li><img src="'+Y+'" alt="alt text"></li></ul></li><li>双成药业 <ul><li><img src="'+y+'" alt="alt text"></li></ul></li></ul><h2 id="代码解析" tabindex="-1"><a class="header-anchor" href="#代码解析"><span>代码解析</span></a></h2><p>真正的源代码为完全加密，此处展示的源代码为通过特殊方式提取，仅供个人学习研究。</p><p><img src="'+J+`" alt="alt text"></p><h3 id="大阳主图" tabindex="-1"><a class="header-anchor" href="#大阳主图"><span>大阳主图</span></a></h3><p><strong>反编译源代码</strong></p><blockquote><p>注：其中的中文字符提取后变成了数字，如DRAWTEXT_FIX中3、4、5、6、7，以及CODELIKE(8),需猜测修改。</p></blockquote><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{公式名称: 大阳主图黑1</span></span>
<span class="line"><span>公式描述: 大阳内部客户专用</span></span>
<span class="line"><span>无参数</span></span>
<span class="line"><span>公式类型: 技术指标公式-其他类型</span></span>
<span class="line"><span>画线方法: 主图叠加</span></span>
<span class="line"><span>公式版本: 0</span></span>
<span class="line"><span>显示小数: 缺省位数</span></span>
<span class="line"><span>坐标线位置: 自动</span></span>
<span class="line"><span>额外Y轴分界: 无</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数精灵:无</span></span>
<span class="line"><span>用法注释:无</span></span>
<span class="line"><span>公式源码:}</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0,0,0,HYBLOCK);</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,1,0,0,DYBLOCK);</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0,2,0,GNBLOCK);</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0,0,3,FGBLOCK);</span></span>
<span class="line"><span>X_1:=IF(DATE&lt;=1291231,1,0);</span></span>
<span class="line"><span>PE:DYNAINFO(39),NODRAW;</span></span>
<span class="line"><span>X_2:=FINANCE(43);</span></span>
<span class="line"><span>PEG:DYNAINFO(39)/FINANCE(43),NODRAW;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.05,0,0,3),COLORRED;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.05,0.06,0,CON2STR(FINANCE(20)/100000000,2)),COLORRED;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.125,0,0,4),COLORMAGENTA;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.125,0.06,0,CON2STR((FINANCE(20)-FINANCE(21))/FINANCE(20)*100,2)),COLORMAGENTA;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.2,0,0,5),COLORBLUE;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.2,0.06,0,CON2STR(FINANCE(44),2)),COLORBLUE;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.275,0,0,6),COLORGREEN;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.275,0.06,0,CON2STR(CLOSE*FINANCE(1)/FINANCE(20),2)),COLORGREEN;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.325,0,0,7),COLORRED;</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0.325,0.06,0,CON2STR(FINANCE(43),2)),COLORRED;</span></span>
<span class="line"><span>X_3:=MA(CLOSE,5);</span></span>
<span class="line"><span>主力操作线:EMA(CLOSE,14)*X_1,COLORLIGRAY;</span></span>
<span class="line"><span>X_4:=主力操作线;</span></span>
<span class="line"><span>X_5:=MA(CLOSE,25)*X_1;</span></span>
<span class="line"><span>X_6:=MA(CLOSE,30)*X_1;</span></span>
<span class="line"><span>X_7:=EMA(CLOSE,204)*X_1;</span></span>
<span class="line"><span>主力成本线:EMA(CLOSE,55)*X_1,COLORRED;</span></span>
<span class="line"><span>X_8:=MA(CLOSE,14);</span></span>
<span class="line"><span>压力:X_8+2*STD(CLOSE,14),DOTLINE,COLORYELLOW;</span></span>
<span class="line"><span>支撑:X_8-2*STD(CLOSE,14),DOTLINE,COLORYELLOW;</span></span>
<span class="line"><span>IF(X_4&gt;REF(X_4,1),X_4,DRAWNULL),COLORMAGENTA;</span></span>
<span class="line"><span>IF(X_4&lt;REF(X_4,1),X_4,DRAWNULL),COLORGREEN;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&lt;1.105 AND CLOSE/REF(CLOSE,1)&gt;1.095 AND CLOSE=HIGH,CLOSE,OPEN,2,0),COLORLIMAGENTA;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&gt;1.105 AND OPEN&lt;CLOSE,CLOSE,OPEN,2,0),COLORMAGENTA;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&gt;1.095 AND LOW=HIGH AND CLOSE=HIGH,CLOSE,OPEN*0.97,2,0),COLORLIRED;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&gt;1.19 AND CLOSE=HIGH,CLOSE,OPEN,2,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&gt;0.895 AND CLOSE/REF(CLOSE,1)&lt;0.905 AND CLOSE=LOW,CLOSE,OPEN,2,0),COLORBLUE;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&lt;0.895,CLOSE,OPEN,2,0),COLORLIBLUE;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&lt;0.905 AND LOW=HIGH AND CLOSE=HIGH,CLOSE,OPEN*0.97,2,0),COLORCYAN;</span></span>
<span class="line"><span>X_9:=REF(CLOSE,1)/REF(CLOSE,2)&gt;1.045 AND REF(LOW,1)=REF(HIGH,1) AND REF(CLOSE,1)=REF(HIGH,1);</span></span>
<span class="line"><span>X_10:=CLOSE/REF(CLOSE,1)&gt;1.045 AND CLOSE=HIGH;</span></span>
<span class="line"><span>DRAWICON(CLOSE=HHV(CLOSE,10) AND HIGH=HHV(HIGH,10) AND NOT(CLOSE=HIGH AND CLOSE=LOW) AND (CLOSE&gt;OPEN*1.015 OR CLOSE&gt;MAX(REF(CLOSE,1),REF(OPEN,1))*1.03) AND VOL&gt;=HHV(VOL,5) AND VOL&gt;REF(VOL,1)*1.8,LOW*0.975,1);</span></span>
<span class="line"><span>X_11:=3*SMA((CLOSE-LLV(LOW,14))/(HHV(HIGH,14)-LLV(LOW,14))*100,5,1)-2*SMA(SMA((CLOSE-LLV(LOW,14))/(HHV(HIGH,14)-LLV(LOW,14))*100,5,1),3,1);</span></span>
<span class="line"><span>DRAWICON(X_11&gt;90 AND BARSCOUNT(CLOSE)&gt;30 AND REF(X_11,2)&lt;REF(X_11,1) AND X_11&lt;REF(X_11,1),HIGH*1.02,12);</span></span>
<span class="line"><span>DRAWICON(X_11&lt;10 AND BARSCOUNT(CLOSE)&gt;30 AND REF(X_11,2)&gt;REF(X_11,1) AND X_11&gt;REF(X_11,1) AND CLOSE&gt;REF(CLOSE,1) AND CLOSE&gt;OPEN,LOW*0.99,11);</span></span>
<span class="line"><span>X_12:=MIN(CLOSE,OPEN)&gt;MAX(REF(CLOSE,1),REF(OPEN,1));</span></span>
<span class="line"><span>DRAWICON(DYNAINFO(8)&gt;0 AND BARSCOUNT(CLOSE)&gt;30 AND HIGH&gt;REF(HIGH,1) AND (CLOSE&gt;=OPEN OR X_12) AND CLOSE&gt;REF(CLOSE,1) AND NOT(REF(CLOSE,1)=REF(HIGH,1) OR REF(CLOSE,1)=REF(LOW,1)) AND NOT(REF(LOW,1)=REF(CLOSE,1) AND REF(CLOSE,1)&lt;REF(CLOSE,2)*0.95) AND EXIST(VOL&lt;REF(LLV(VOL,21),1),2) AND VOL&gt;REF(VOL,1),LOW*0.985,7);</span></span>
<span class="line"><span>DRAWTEXT(DYNAINFO(8)&gt;0 AND BARSCOUNT(CLOSE)&gt;30 AND REF(LOW,1)=LLV(LOW,10) AND REF(HIGH,2)&gt;REF(HIGH,1) AND HIGH&gt;REF(HIGH,1) AND CLOSE&gt;=REF(HIGH,2)*1.01 AND CLOSE&gt;OPEN AND FINANCE(7)&lt;24999999488,LOW*0.96,2),COLORRED;</span></span>
<span class="line"><span>X_13:=IF(CODELIKE(8),1.4,1.2);</span></span>
<span class="line"><span>X_14:=IF(CODELIKE(8),0.95,0.97);</span></span>
<span class="line"><span>DRAWICON(DYNAINFO(8)&gt;1 AND BARSCOUNT(CLOSE)&gt;30 AND CLOSE&gt;2 AND IF(NAMELIKE(9),0,1) AND IF(NAMELIKE(10),0,1) AND VOL&gt;=REF(VOL,1)*1.8 AND CLOSE&gt;=REF(CLOSE,1)*1.05 AND CLOSE&gt;OPEN AND CLOSE&gt;HIGH*X_14 AND CLOSE=HHV(CLOSE,3) AND HIGH&lt;REF(HIGH,2)*X_13 AND FINANCE(7)&lt;24999999488,LOW*0.95,9);</span></span>
<span class="line"><span>DRAWICON(DYNAINFO(8)&gt;1 AND BARSCOUNT(CLOSE)&gt;30 AND CLOSE&gt;2 AND IF(NAMELIKE(9),0,1) AND IF(NAMELIKE(10),0,1) AND (REF(LOW,1)=LLV(LOW,10) OR LOW=LLV(LOW,10)) AND REF(CLOSE,1)&lt;REF(OPEN,1)*0.97 AND CLOSE&gt;OPEN AND CLOSE&gt;REF(CLOSE,1)*1.03 AND FINANCE(7)&lt;24999999488,LOW*0.95,25);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重写并添加个人理解和注释</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{ =======================四根线======================= }</span></span>
<span class="line"><span>主力成本线:EMA(CLOSE,55),COLORRED;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>主力操盘线:EMA(CLOSE,14),COLORLIGRAY;</span></span>
<span class="line"><span>IF(主力操盘线&gt;REF(主力操盘线,1),主力操盘线,DRAWNULL),COLORMAGENTA;</span></span>
<span class="line"><span>IF(主力操盘线&lt;REF(主力操盘线,1),主力操盘线,DRAWNULL),COLORGREEN;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>压力:MA(CLOSE,14)+2*STD(CLOSE,14),DOTLINE,COLORYELLOW;</span></span>
<span class="line"><span>支撑:MA(CLOSE,14)-2*STD(CLOSE,14),DOTLINE,COLORYELLOW;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ =======================行业板块======================= }</span></span>
<span class="line"><span>{ 板块 := 行业 + 地域 + 概念 + 风格}</span></span>
<span class="line"><span>HY:=STRCAT(&#39; 行业：&#39;,HYBLOCK);</span></span>
<span class="line"><span>DY:=STRCAT(&#39; 地域：&#39;,DYBLOCK);</span></span>
<span class="line"><span>GN:=STRCAT(&#39; 概念：&#39;,GNBLOCK);</span></span>
<span class="line"><span>FG:=STRCAT(&#39; 风格：&#39;,FGBLOCK);</span></span>
<span class="line"><span>BK:=STRCAT(HY,STRCAT(DY,STRCAT(GN,FG)));</span></span>
<span class="line"><span>DRAWTEXT_FIX(ISLASTBAR,0,0,0,BK),COLOR00C0C0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ =======================基本面======================= }</span></span>
<span class="line"><span>PE:DYNAINFO(39),NODRAW,COLORRED; { 市盈(动) }</span></span>
<span class="line"><span>PEG:DYNAINFO(39)/FINANCE(43),NODRAW,COLORMAGENTA; { 市盈(动)/利润同比% }</span></span>
<span class="line"><span>营收（亿）:CON2STR(FINANCE(20)/100000000,2),NODRAW,COLORRED;</span></span>
<span class="line"><span>主营毛利率:CON2STR((FINANCE(20)-FINANCE(21))/FINANCE(20)*100,2),NODRAW,COLORMAGENTA; { 营业收入-营业成本/营业收入 }</span></span>
<span class="line"><span>收入同比增长率:CON2STR(FINANCE(44),2),NODRAW,COLORRED;</span></span>
<span class="line"><span>市销率:CON2STR(CLOSE*FINANCE(1)/FINANCE(20),2),NODRAW,COLORMAGENTA; {收盘价 * 总股本 / 营业收入}</span></span>
<span class="line"><span>净利同比增长率:CON2STR(FINANCE(43),2),NODRAW,COLORRED;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ =======================K线颜色======================= }</span></span>
<span class="line"><span>{ 当日涨幅∈(9.5%,10.5%) 的 收盘为最高价的光头阳线 COLORLIMAGENTA }</span></span>
<span class="line"><span>{ 当日涨幅&gt;10.5% 的 收盘价大于开盘价的阳线 COLORMAGENTA }</span></span>
<span class="line"><span>{ 当日涨幅&gt;10.5% 的 最高价等于最高价 且 收盘价等于最高价的 一字板 COLORLIRED }</span></span>
<span class="line"><span>{ 当日涨幅&gt;19.0% 的 收盘价等于最高价的 光头阳 COLORRED }</span></span>
<span class="line"><span>{ 当日涨幅∈(-10.5%,-9.5%) 的 收盘价等于最低价的 光头阴 COLORBLUE }</span></span>
<span class="line"><span>{ 当日涨幅&lt;-10.5% 的 阴线 COLORLIBLUE }</span></span>
<span class="line"><span>{ 当日涨幅&lt;-10.5% 的 最低价等于最高价 且 收盘价等于最高价 一字跌停 COLORCYAN }</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1) &lt; 1.105 AND CLOSE/REF(CLOSE,1) &gt; 1.095 AND CLOSE=HIGH,CLOSE,OPEN,2,0),COLORLIMAGENTA;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1) &gt; 1.105 AND OPEN&lt;CLOSE,CLOSE,OPEN,2,0),COLORMAGENTA;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1) &gt; 1.095 AND LOW=HIGH AND CLOSE=HIGH,CLOSE,OPEN*0.97,2,0),COLORLIRED;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1) &gt; 1.19 AND CLOSE=HIGH,CLOSE,OPEN,2,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1) &gt; 0.895 AND CLOSE/REF(CLOSE,1) &lt; 0.905 AND CLOSE=LOW,CLOSE,OPEN,2,0),COLORBLUE;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1) &lt; 0.895,CLOSE,OPEN,2,0),COLORLIBLUE;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1) &lt; 0.905 AND LOW=HIGH AND CLOSE=HIGH,CLOSE,OPEN*0.97,2,0),COLORCYAN;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ =======================主图标识======================= }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 量价突破信号 ↑ }</span></span>
<span class="line"><span>DRAWICON(</span></span>
<span class="line"><span>    CLOSE=HHV(CLOSE,10) AND HIGH=HHV(HIGH,10) { 收盘价和最高价均为10日最高价 }</span></span>
<span class="line"><span>    AND VOL&gt;=HHV(VOL,5) { 成交量是5日最高 }</span></span>
<span class="line"><span>    AND VOL&gt;REF(VOL,1)*1.8 { 成交量是昨日1.8倍以上 }</span></span>
<span class="line"><span>    AND NOT(CLOSE=HIGH AND CLOSE=LOW) { 不是一字板 NOT(收盘价=最高价=最低价) }</span></span>
<span class="line"><span>    AND (CLOSE&gt;OPEN*1.015 OR CLOSE&gt;MAX(REF(CLOSE,1),REF(OPEN,1))*1.03), { 当日实体涨幅&gt;1.5% 或 两日累计实体涨幅超过昨日K线实体最大值的3% }</span></span>
<span class="line"><span>    LOW*0.975,</span></span>
<span class="line"><span>    1</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  X_11:=3*SMA((CLOSE-LLV(LOW,14))/(HHV(HIGH,14)-LLV(LOW,14))*100,5,1)-2*SMA(SMA((CLOSE-LLV(LOW,14))/(HHV(HIGH,14)-LLV(LOW,14))*100,5,1),3,1);</span></span>
<span class="line"><span>  X_11的本质为J:=KDJ.J(14,5,3);</span></span>
<span class="line"><span>  即：</span></span>
<span class="line"><span>  RSV_14 := (CLOSE-LLV(LOW,14))/(HHV(HIGH,14)-LLV(LOW,14))*100;</span></span>
<span class="line"><span>  K_5 := SMA(RSV_14,5,1);</span></span>
<span class="line"><span>  D_3 := SMA(K_5,3,1);</span></span>
<span class="line"><span>  X_11 := 3 * K_5 - 2 * D_3;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>J:=KDJ.J(14,5,3);</span></span>
<span class="line"><span>{ 超买信号 👇 }</span></span>
<span class="line"><span>DRAWICON(</span></span>
<span class="line"><span>    J&gt;90 { 超买区 }</span></span>
<span class="line"><span>    AND REF(J,2)&lt;REF(J,1) AND REF(J,1)&gt;J { J顶部拐头：前天 &lt; 昨天 &gt; 今天 }</span></span>
<span class="line"><span>    { 过滤股票 }</span></span>
<span class="line"><span>    AND BARSCOUNT(CLOSE)&gt;30, { 有至少30根K线收盘数据 }</span></span>
<span class="line"><span>    HIGH*1.02,</span></span>
<span class="line"><span>    12</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 超卖信号👆 }</span></span>
<span class="line"><span>DRAWICON(</span></span>
<span class="line"><span>    J&lt;10  { 超卖区 }</span></span>
<span class="line"><span>    AND REF(J,2)&gt;REF(J,1) AND REF(J,1) &lt; J { J底部拐头：前天 &gt; 昨天 &lt; 今天 }</span></span>
<span class="line"><span>    AND CLOSE&gt;REF(CLOSE,1) AND OPEN&lt;CLOSE { 收出真阳线：收盘价大于开盘价 大于昨天收盘价 }</span></span>
<span class="line"><span>    { 过滤股票 }</span></span>
<span class="line"><span>    AND BARSCOUNT(CLOSE)&gt;30, { 有至少30根K线收盘数据 }</span></span>
<span class="line"><span>    LOW*0.99,</span></span>
<span class="line"><span>    11</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ </span></span>
<span class="line"><span>  实体向上跳空缺口：今日K线实体完全在昨日K线实体上方</span></span>
<span class="line"><span>  忽略两天盘中波动造成的上下引线，只看开盘价和收盘价</span></span>
<span class="line"><span>  因为，开盘价是集合竞价资金博弈的结果，收盘价是日内资金博弈的结果</span></span>
<span class="line"><span>  上下影线都看作是噪音</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 地量启动信号B }</span></span>
<span class="line"><span>实体跳空:=MIN(CLOSE,OPEN)&gt;MAX(REF(CLOSE,1),REF(OPEN,1));</span></span>
<span class="line"><span>DRAWICON(</span></span>
<span class="line"><span>    CLOSE&gt;REF(CLOSE,1)    { 真阳线：收盘价上涨 }</span></span>
<span class="line"><span>    AND (CLOSE&gt;=OPEN OR 实体跳空 )   { 阳线 或 有实体向上跳空缺口 }</span></span>
<span class="line"><span>    AND HIGH&gt;REF(HIGH,1)    { 最高价创昨日新高：最高价突破昨日最高价 }</span></span>
<span class="line"><span>    AND NOT(REF(CLOSE,1)=REF(HIGH,1) OR REF(CLOSE,1)=REF(LOW,1))   { 昨日不是光头光脚K线 }</span></span>
<span class="line"><span>    AND REF(NOT(LOW=CLOSE AND CLOSE&lt;REF(CLOSE,1)*0.95),1)   { 昨日不是光头阴线且跌幅&lt;5% }</span></span>
<span class="line"><span>    AND VOL&gt;REF(VOL,1)    { 相比昨天放量 }</span></span>
<span class="line"><span>    AND EXIST(VOL&lt;REF(LLV(VOL,21),1),2)   { 近2日内出现过地量：量能小于近21日最低量 }</span></span>
<span class="line"><span>    { 过滤股票 }</span></span>
<span class="line"><span>    AND DYNAINFO(8)&gt;0   { 没有停牌：最新成交量&gt;0手 }</span></span>
<span class="line"><span>    AND BARSCOUNT(CLOSE)&gt;30,    { 有至少30根K线收盘数据 }</span></span>
<span class="line"><span>    LOW*0.985,</span></span>
<span class="line"><span>    7</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 强势的底分型 }</span></span>
<span class="line"><span>DRAWTEXT(</span></span>
<span class="line"><span>    CLOSE&gt;OPEN   { 收阳线 }</span></span>
<span class="line"><span>    { 近3日的最高点V型走势且收盘价有效突破：前日高点 &gt; 昨日高点 &lt; 今日高点 且 收盘价有效突破前日高点1% }</span></span>
<span class="line"><span>    AND REF(HIGH,2)&gt;REF(HIGH,1) AND REF(HIGH,1)&lt;HIGH AND CLOSE&gt;=REF(HIGH,2)*1.01</span></span>
<span class="line"><span>    AND REF(LOW,1)=LLV(LOW,10)   { 昨日是10日低点 }</span></span>
<span class="line"><span>    { 过滤股票 }</span></span>
<span class="line"><span>    AND DYNAINFO(8)&gt;0  { 没有停牌：最新成交量&gt;0手 }</span></span>
<span class="line"><span>    AND BARSCOUNT(CLOSE)&gt;30   { 有至少30根K线收盘数据 }</span></span>
<span class="line"><span>    AND FINANCE(7)&lt;24999999488,  { 小盘股：流通股本（股）&lt; 25亿股 }</span></span>
<span class="line"><span>    LOW*0.96,</span></span>
<span class="line"><span>    &#39;强&#39;</span></span>
<span class="line"><span>),COLORRED;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 黄金柱💰 比量价齐升更强势的信号 }</span></span>
<span class="line"><span>DRAWICON(</span></span>
<span class="line"><span>    CLOSE&gt;OPEN   { 收阳线 }</span></span>
<span class="line"><span>    AND CLOSE&gt;=REF(CLOSE,1)*1.05   { 实际涨幅≥5% }</span></span>
<span class="line"><span>    AND CLOSE=HHV(CLOSE,3)   { 收盘价是3日最高 }</span></span>
<span class="line"><span>    AND VOL&gt;=REF(VOL,1)*1.8   { 成交量相比昨天放大1.8倍 }</span></span>
<span class="line"><span>    AND CLOSE&gt;HIGH*(IF(CODELIKE(&#39;300&#39;) OR CODELIKE(&#39;688&#39;),0.95,0.97))   { 上影线短：从最高点回落到收盘跌幅不超过5%/3%  创业科创板/其他 }</span></span>
<span class="line"><span>    AND HIGH&lt;REF(HIGH,2)*(IF(CODELIKE(&#39;300&#39;) OR CODELIKE(&#39;688&#39;),1.4,1.2))   { 没有主升：最高价未突破前日最高价的40%/20% 创业科创板/其他 }</span></span>
<span class="line"><span>    { 过滤股票 }</span></span>
<span class="line"><span>    AND IF(NAMELIKE(&#39;ST&#39;),0,1)   { 排除ST股 }</span></span>
<span class="line"><span>    AND IF(NAMELIKE(&#39;*ST&#39;),0,1)   { 排除*ST股 }</span></span>
<span class="line"><span>    AND DYNAINFO(8)&gt;0  { 没有停牌：最新成交量&gt;0手 }</span></span>
<span class="line"><span>    AND BARSCOUNT(CLOSE)&gt;30   { 有至少30根K线收盘数据 }</span></span>
<span class="line"><span>    AND FINANCE(7)&lt;24999999488  { 流通股本（股）&lt; 25亿股 }</span></span>
<span class="line"><span>    AND CLOSE&gt;2,  { 股价&gt;2元 (流通市值&gt;50亿) }</span></span>
<span class="line"><span>    LOW*0.95,</span></span>
<span class="line"><span>    9</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 图穷匕见💎 }</span></span>
<span class="line"><span>DRAWICON(</span></span>
<span class="line"><span>    CLOSE&gt;OPEN { 收阳 }</span></span>
<span class="line"><span>    AND CLOSE&gt;REF(CLOSE,1)*1.03 { 今日涨幅&gt;3% }</span></span>
<span class="line"><span>    AND (REF(LOW,1)=LLV(LOW,10) OR LOW=LLV(LOW,10)) { 昨日或今日是10日低点 }</span></span>
<span class="line"><span>    AND REF(CLOSE,1)&lt;REF(OPEN,1)*0.97 { 昨日阴线跌幅&gt;3% }</span></span>
<span class="line"><span>    { 过滤股票 }</span></span>
<span class="line"><span>    AND IF(NAMELIKE(&#39;ST&#39;),0,1)   { 排除ST股 }</span></span>
<span class="line"><span>    AND IF(NAMELIKE(&#39;*ST&#39;),0,1)   { 排除*ST股 }</span></span>
<span class="line"><span>    AND DYNAINFO(8)&gt;0  { 没有停牌：最新成交量&gt;0手 }</span></span>
<span class="line"><span>    AND BARSCOUNT(CLOSE)&gt;30   { 有至少30根K线收盘数据 }</span></span>
<span class="line"><span>    AND FINANCE(7)&lt;24999999488  { 流通股本（股）&lt; 25亿股 }</span></span>
<span class="line"><span>    AND CLOSE&gt;2,  { 股价&gt;2元 (流通市值&gt;50亿) }</span></span>
<span class="line"><span>    LOW*0.95,</span></span>
<span class="line"><span>    25</span></span>
<span class="line"><span>);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="大阳成交量" tabindex="-1"><a class="header-anchor" href="#大阳成交量"><span>大阳成交量</span></a></h3><p><strong>反编译源代码</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{公式名称: 大阳成交量1</span></span>
<span class="line"><span>公式描述: 内部客户专用</span></span>
<span class="line"><span>无参数</span></span>
<span class="line"><span>公式类型: 技术指标公式-其他类型</span></span>
<span class="line"><span>画线方法: 副图</span></span>
<span class="line"><span>公式版本: 0</span></span>
<span class="line"><span>显示小数: 缺省位数</span></span>
<span class="line"><span>坐标线位置: 自动</span></span>
<span class="line"><span>额外Y轴分界: 无</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数精灵:无</span></span>
<span class="line"><span>用法注释:无</span></span>
<span class="line"><span>公式源码:}</span></span>
<span class="line"><span>X_1:=IF(CURRBARSCOUNT=1 AND PERIOD=5,VOL*240/FROMOPEN,DRAWNULL);</span></span>
<span class="line"><span>STICKLINE(CURRBARSCOUNT=1 AND PERIOD=5,X_1,0,(-1),(-1)),COLOR00C0C0;</span></span>
<span class="line"><span>VOLUME:VOL,VOLSTICK;</span></span>
<span class="line"><span>X_2:=VOL&gt;=REF(VOL,1)*1.91 AND CLOSE&gt;REF(CLOSE,1);</span></span>
<span class="line"><span>X_3:=VOL&lt;REF(LLV(VOL,21),1);</span></span>
<span class="line"><span>X_4:=VOL&lt;REF(LLV(VOL,55),1);</span></span>
<span class="line"><span>X_5:=ABS(VOL-REF(VOL,1))/REF(VOL,1)&lt;=0.05;</span></span>
<span class="line"><span>STICKLINE(X_2,0,VOL,1,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(X_3,0,VOL,0.7,0),COLORYELLOW;</span></span>
<span class="line"><span>STICKLINE(X_4,0,VOL,0.7,0),COLORMAGENTA;</span></span>
<span class="line"><span>X_6:=MA(VOL,5);</span></span>
<span class="line"><span>X_7:=IF(WINNER(CLOSE),WINNER(CLOSE)*100,20);</span></span>
<span class="line"><span>X_8:=VOL;</span></span>
<span class="line"><span>X_9:=MIN(REF(X_8,1),REF(X_8,2));</span></span>
<span class="line"><span>X_10:=MIN(REF(X_8,3),REF(X_8,4));</span></span>
<span class="line"><span>X_11:=MIN(REF(X_8,5),REF(X_8,6));</span></span>
<span class="line"><span>X_12:=MIN(REF(X_8,7),REF(X_8,8));</span></span>
<span class="line"><span>X_13:=MIN(REF(X_8,9),REF(X_8,10));</span></span>
<span class="line"><span>X_14:=MIN(REF(X_8,11),REF(X_8,12));</span></span>
<span class="line"><span>X_15:=MIN(REF(X_8,13),REF(X_8,14));</span></span>
<span class="line"><span>X_16:=MIN(REF(X_8,15),REF(X_8,16));</span></span>
<span class="line"><span>X_17:=MIN(MIN(X_9,X_10),MIN(X_11,X_12));</span></span>
<span class="line"><span>X_18:=MIN(MIN(X_13,X_14),MIN(X_15,X_16));</span></span>
<span class="line"><span>X_19:=LLV(VOL,16);</span></span>
<span class="line"><span>X_20:=HHV(VOL,16);</span></span>
<span class="line"><span>X_21:=REF(MA(VOL,5),1);</span></span>
<span class="line"><span>地量:(X_19*3+X_21)/4,COLORMAGENTA;</span></span>
<span class="line"><span>天量:(X_20*3+X_21)/4,COLORRED;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重写并添加个人理解和注释</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>VOLUME:VOL,VOLSTICK;</span></span>
<span class="line"><span>地量:(3*LLV(VOL,16)+REF(MA(VOL,5),1))/4,COLORMAGENTA; { 地量=(3倍的16日最低量+5日均量前值)/4 }</span></span>
<span class="line"><span>天量:(3*HHV(VOL,16)+REF(MA(VOL,5),1))/4,COLORRED;{ 天量=(3倍的16日最高量+5日均量前值)/4 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 在 日线 最后一根位置  预估当日收盘成交量  宽度默认 画虚线空心柱  }</span></span>
<span class="line"><span>STICKLINE(PERIOD=5 AND CURRBARSCOUNT=1,VOL*240/FROMOPEN,0,(-1),(-1)),COLOR00C0C0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>{ 放量(+91%) 上涨(收盘价) 宽度1 实心 COLORRED  }</span></span>
<span class="line"><span>STICKLINE(VOL&gt;=REF(VOL,1)*1.91 AND CLOSE&gt;REF(CLOSE,1),0,VOL,1,0),COLORRED;</span></span>
<span class="line"><span>{ 地量(低于21日最低量) 宽度0.7 实心 COLORYELLOW  }</span></span>
<span class="line"><span>STICKLINE(VOL&lt;REF(LLV(VOL,21),1),0,VOL,0.7,0),COLORYELLOW;</span></span>
<span class="line"><span>{ 地量(低于55日最低量) 宽度0.7 实心 COLORMAGENTA  }</span></span>
<span class="line"><span>STICKLINE(VOL&lt;REF(LLV(VOL,55),1),0,VOL,0.7,0),COLORMAGENTA;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="堆量爆发选股" tabindex="-1"><a class="header-anchor" href="#堆量爆发选股"><span>堆量爆发选股</span></a></h3><p><strong>反编译源代码</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{公式名称: 堆量爆发</span></span>
<span class="line"><span>公式描述: 大阳内部客户战法专用</span></span>
<span class="line"><span>无参数</span></span>
<span class="line"><span>公式类型: 条件选股公式-其他类型</span></span>
<span class="line"><span>公式版本: 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数精灵:无</span></span>
<span class="line"><span>用法注释:无</span></span>
<span class="line"><span>公式源码:}</span></span>
<span class="line"><span>X_1:=COUNT(DYNAINFO(37)&gt;0.02,5)&gt;=2 AND SUM(DYNAINFO(37),5)&gt;0.2 AND (MA(VOL,10)*10-MA(VOL,5)*5)/(MA(VOL,5)*5)&lt;0.5 AND EXIST(HIGH&gt;REF(CLOSE,1)*1.05,5);</span></span>
<span class="line"><span>X_2:=COUNT(DYNAINFO(37)&gt;0.02,10)&gt;=3 AND SUM(DYNAINFO(37),10)&gt;0.3 AND (MA(VOL,20)*20-MA(VOL,10)*10)/(MA(VOL,10)*10)&lt;0.5 AND EXIST(HIGH&gt;REF(CLOSE,1)*1.05,10);</span></span>
<span class="line"><span>XG:DYNAINFO(8)&gt;10 AND BARSCOUNT(CLOSE)&gt;30 AND CLOSE&gt;2 AND FINANCE(34)&gt;1 AND IF(NAMELIKE(10),0,1) AND IF(NAMELIKE(9),0,1) AND IF(CODELIKE(11),0,1) AND IF(CODELIKE(12),0,1) AND (X_1 OR X_2) AND FINANCE(7)&lt;24999999488;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重写并添加个人理解和注释</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{</span></span>
<span class="line"><span>  关于堆量表达式 (MA(VOL,10)*10-MA(VOL,5)*5)/(MA(VOL,5)*5)&lt;0.5 的理解</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  理解方式1：近5日成交总量 是 前5日的成交总量 的 2倍</span></span>
<span class="line"><span>  近10日成交总量 = 10*MA(VOL,10)</span></span>
<span class="line"><span>  近5日成交总量 = 5*MA(VOL,5)</span></span>
<span class="line"><span>  前5日的成交总量 = 近10日成交总量 - 近5日成交总量 = 10*MA(VOL,10) - 5*MA(VOL,5)</span></span>
<span class="line"><span>  原式：(MA(VOL,10)*10-MA(VOL,5)*5)/(MA(VOL,5)*5)&lt;0.5</span></span>
<span class="line"><span>  =&gt; 前5日的成交总量/近5日成交总量 &lt; 1/2</span></span>
<span class="line"><span>  =&gt; 近5日成交总量/前5日的成交总量 &gt; 2倍</span></span>
<span class="line"><span>  即: (5*MA(VOL,5))/(10*MA(VOL,10) - 5*MA(VOL,5)) &gt; 2</span></span>
<span class="line"><span>  =&gt; 近5日成交总量 &gt; 2倍 前5日的成交总量</span></span>
<span class="line"><span>  即: (5*MA(VOL,5)) &gt; 2 * (10*MA(VOL,10) - 5*MA(VOL,5))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  理解方式2： 近5日成交总量 占 近10日成交总量 2/3（66%）以上 </span></span>
<span class="line"><span>  原式：(MA(VOL,10)*10-MA(VOL,5)*5)/(MA(VOL,5)*5)&lt;0.5</span></span>
<span class="line"><span>  =&gt; (MA(VOL,10)*10)/(MA(VOL,5)*5)&lt;1.5</span></span>
<span class="line"><span>  =&gt; (MA(VOL,10)*10)&lt;1.5*(MA(VOL,5)*5)</span></span>
<span class="line"><span>  =&gt; 1&lt;1.5*(MA(VOL,5)*5)/(MA(VOL,10)*10)</span></span>
<span class="line"><span>  =&gt; 1/1.5&lt;(MA(VOL,5)*5)/(MA(VOL,10)*10)</span></span>
<span class="line"><span>  即: 0.6667 &lt; (MA(VOL,5)*5)/(MA(VOL,10)*10)</span></span>
<span class="line"><span>  即: (MA(VOL,5)*5) &gt; 0.6667 * (MA(VOL,10)*10)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DLBF_05:=</span></span>
<span class="line"><span>  COUNT(DYNAINFO(37)&gt;0.02,5)&gt;=2  { 近5日至少2天单日换手率&gt;2% }</span></span>
<span class="line"><span>  AND SUM(DYNAINFO(37),5)&gt;0.2 { 近5日累计换手率&gt;20% }</span></span>
<span class="line"><span>  AND ((5*MA(VOL,5))/(10*MA(VOL,10)-5*MA(VOL,5))&gt;2 ) { 堆量异动 }</span></span>
<span class="line"><span>  AND EXIST(HIGH&gt;REF(CLOSE,1)*1.05,5) { 建仓分时图：最近5天存在大于5%拉升（昨日收盘价到今日最高价） }</span></span>
<span class="line"><span>;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DLBF_10:=</span></span>
<span class="line"><span>  COUNT(DYNAINFO(37)&gt;0.02,10)&gt;=3 { 近10日至少3天单日换手率&gt;2% }</span></span>
<span class="line"><span>  AND SUM(DYNAINFO(37),10)&gt;0.3 { 近10日累计换手率&gt;10% }</span></span>
<span class="line"><span>  AND ((10*MA(VOL,10))/(20*MA(VOL,20)-10*MA(VOL,10))&gt;2) { 堆量异动 }</span></span>
<span class="line"><span>  AND EXIST(HIGH&gt;REF(CLOSE,1)*1.05,10) { 建仓分时图：最近10天存在大于5%拉升（昨日收盘价到今日最高价） }</span></span>
<span class="line"><span>;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>XG:</span></span>
<span class="line"><span>  ( DLBF_05 OR DLBF_10 )</span></span>
<span class="line"><span>  { 过滤股票 }</span></span>
<span class="line"><span>  AND DYNAINFO(8)&gt;10 { 没有停牌：最新成交量&gt;10手 }</span></span>
<span class="line"><span>  AND IF(NAMELIKE(&#39;ST&#39;),0,1) </span></span>
<span class="line"><span>  AND IF(NAMELIKE(&#39;*ST&#39;),0,1) </span></span>
<span class="line"><span>  AND IF(CODELIKE(&#39;300&#39;),0,1) </span></span>
<span class="line"><span>  AND IF(CODELIKE(&#39;688&#39;),0,1) </span></span>
<span class="line"><span>  AND FINANCE(34)&gt;1 { 每股净资产&gt;1 }</span></span>
<span class="line"><span>  AND FINANCE(7)&lt;24999999488 { 流通股&gt;25亿 }</span></span>
<span class="line"><span>  AND CLOSE&gt;2 { 股价&gt;2元 流通市值&gt;50亿 }</span></span>
<span class="line"><span>  AND BARSCOUNT(CLOSE)&gt;30 { 上市至少30天 }</span></span>
<span class="line"><span>;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上涨家数比" tabindex="-1"><a class="header-anchor" href="#上涨家数比"><span>上涨家数比</span></a></h3><p><strong>反编译源代码</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{公式名称: 上涨家数比1</span></span>
<span class="line"><span>公式描述: 大阳内部客户专用</span></span>
<span class="line"><span>无参数</span></span>
<span class="line"><span>公式类型: 技术指标公式-其他类型</span></span>
<span class="line"><span>画线方法: 副图</span></span>
<span class="line"><span>公式版本: 0</span></span>
<span class="line"><span>显示小数: 缺省位数</span></span>
<span class="line"><span>坐标线位置: 自动</span></span>
<span class="line"><span>额外Y轴分界: 无</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数精灵:无</span></span>
<span class="line"><span>用法注释7无</span></span>
<span class="line"><span>公式源码:}</span></span>
<span class="line"><span>极端下跌:0.2,DOTLINE,COLORMAGENTA;</span></span>
<span class="line"><span>极端上涨:0.8,DOTLINE,COLORBLUE;</span></span>
<span class="line"><span>上涨家数比:INDEXADV/(INDEXDEC+INDEXADV),COLORMAGENTA;</span></span>
<span class="line"><span>IF(上涨家数比&lt;0.2,上涨家数比,DRAWNULL),COLORRED,LINETHICK2;</span></span>
<span class="line"><span>IF(上涨家数比&gt;0.8,上涨家数比,DRAWNULL),COLORGREEN,LINETHICK2;</span></span>
<span class="line"><span>X_1:=HIGH&lt;FINANCE(34);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重写并添加个人理解和注释</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>略</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="大阳主图-指数" tabindex="-1"><a class="header-anchor" href="#大阳主图-指数"><span>大阳主图-指数</span></a></h3><p><strong>反编译源代码</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{公式名称: 大阳主图指黑1</span></span>
<span class="line"><span>公式描述: 大阳内部客户专用</span></span>
<span class="line"><span>无参数</span></span>
<span class="line"><span>公式类型: 技术指标公式-其他类型</span></span>
<span class="line"><span>画线方法: 主图叠加</span></span>
<span class="line"><span>公式版本: 0</span></span>
<span class="line"><span>显示小数: 缺省位数</span></span>
<span class="line"><span>坐标线位置: 自动</span></span>
<span class="line"><span>额外Y轴分界: 无</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数精灵:无</span></span>
<span class="line"><span>用法7⑹�:无</span></span>
<span class="line"><span>公式源码:}</span></span>
<span class="line"><span>X_1:=MA(CLOSE,5);</span></span>
<span class="line"><span>主力操作线:EMA(CLOSE,14),COLORLIGRAY;</span></span>
<span class="line"><span>X_2:=主力操作线;</span></span>
<span class="line"><span>X_3:=MA(CLOSE,25);</span></span>
<span class="line"><span>X_4:=MA(CLOSE,30);</span></span>
<span class="line"><span>X_5:=EMA(CLOSE,204);</span></span>
<span class="line"><span>主力成本线:EMA(CLOSE,55),COLORRED;</span></span>
<span class="line"><span>X_6:=MA(CLOSE,14);</span></span>
<span class="line"><span>压力:X_6+2*STD(CLOSE,14),DOTLINE,COLORYELLOW;</span></span>
<span class="line"><span>支撑:X_6-2*STD(CLOSE,14),DOTLINE,COLORYELLOW;</span></span>
<span class="line"><span>IF(X_2&gt;REF(X_2,1),X_2,DRAWNULL),COLORMAGENTA;</span></span>
<span class="line"><span>IF(X_2&lt;REF(X_2,1),X_2,DRAWNULL),COLORGREEN;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&lt;1.105 AND CLOSE/REF(CLOSE,1)&gt;1.095 AND CLOSE=HIGH,CLOSE,OPEN,2,0),COLORLIMAGENTA;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&gt;1.105 AND OPEN&lt;CLOSE,CLOSE,OPEN,2,0),COLORMAGENTA;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&gt;1.095 AND LOW=HIGH AND CLOSE=HIGH,CLOSE,OPEN*0.97,2,0),COLORLIRED;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&gt;1.19 AND CLOSE=HIGH,CLOSE,OPEN,2,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&gt;0.895 AND CLOSE/REF(CLOSE,1)&lt;0.905 AND CLOSE=LOW,CLOSE,OPEN,2,0),COLORBLUE;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&lt;0.895,CLOSE,OPEN,2,0),COLORLIBLUE;</span></span>
<span class="line"><span>STICKLINE(CLOSE/REF(CLOSE,1)&lt;0.905 AND LOW=HIGH AND CLOSE=HIGH,CLOSE,OPEN*0.97,2,0),COLORCYAN;</span></span>
<span class="line"><span>X_7:=REF(CLOSE,1)/REF(CLOSE,2)&gt;1.045 AND REF(LOW,1)=REF(HIGH,1) AND REF(CLOSE,1)=REF(HIGH,1);</span></span>
<span class="line"><span>X_8:=CLOSE/REF(CLOSE,1)&gt;1.045 AND CLOSE=HIGH;</span></span>
<span class="line"><span>X_9:=3*SMA((CLOSE-LLV(LOW,14))/(HHV(HIGH,14)-LLV(LOW,14))*100,5,1)-2*SMA(SMA((CLOSE-LLV(LOW,14))/(HHV(HIGH,14)-LLV(LOW,14))*100,5,1),3,1);</span></span>
<span class="line"><span>X_10:=X_6+2*STD(CLOSE,14);</span></span>
<span class="line"><span>X_11:=X_6-2*STD(CLOSE,14);</span></span>
<span class="line"><span>X_12:=X_10/X_11;</span></span>
<span class="line"><span>X_13:=MIN(CLOSE,OPEN)&gt;MAX(REF(CLOSE,1),REF(OPEN,1));</span></span>
<span class="line"><span>DRAWICON(DYNAINFO(8)&gt;0 AND BARSCOUNT(CLOSE)&gt;30 AND HIGH&gt;REF(HIGH,1) AND (CLOSE&gt;=OPEN OR X_13) AND CLOSE&gt;REF(CLOSE,1) AND NOT(REF(CLOSE,1)=REF(HIGH,1) AND REF(CLOSE,1)=REF(LOW,1)) AND REF(CLOSE,1)&lt;REF(OPEN,1)*1.03 AND NOT(REF(LOW,1)=REF(CLOSE,1) AND REF(CLOSE,1)&lt;REF(CLOSE,2)*0.95) AND EXIST(VOL&lt;REF(LLV(VOL,21),1),2) AND VOL&gt;REF(VOL,1),LOW*0.995,7);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重写并添加个人理解和注释</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>略</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="大阳成交额-指数" tabindex="-1"><a class="header-anchor" href="#大阳成交额-指数"><span>大阳成交额-指数</span></a></h3><p><strong>反编译源代码</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>{公式名称: 大阳成交金额1</span></span>
<span class="line"><span>公式描述: 指数用，大阳内部客户专用</span></span>
<span class="line"><span>无参数</span></span>
<span class="line"><span>公式类型: 技术指标公式-其他类型</span></span>
<span class="line"><span>画线方法: 副图</span></span>
<span class="line"><span>公式版本: 0</span></span>
<span class="line"><span>显示小数: 缺省位数</span></span>
<span class="line"><span>坐标线位置: 自动</span></span>
<span class="line"><span>额外Y轴分界: 无</span></span>
<span class="line"><span></span></span>
<span class="line"><span>参数精灵:无</span></span>
<span class="line"><span>用法注释:无</span></span>
<span class="line"><span>公式源码:}</span></span>
<span class="line"><span>X_1:=IF(CURRBARSCOUNT=1 AND PERIOD=5,AMOUNT*240/FROMOPEN,DRAWNULL);</span></span>
<span class="line"><span>STICKLINE(CURRBARSCOUNT=1 AND PERIOD=5,X_1,0,(-1),(-1)),COLOR00C0C0;</span></span>
<span class="line"><span>成交金额:AMOUNT,VOLSTICK;</span></span>
<span class="line"><span>X_2:=AMOUNT&gt;=REF(AMOUNT,1)*1.91 AND CLOSE&gt;REF(CLOSE,1);</span></span>
<span class="line"><span>X_3:=AMOUNT&lt;REF(LLV(AMOUNT,21),1);</span></span>
<span class="line"><span>X_4:=AMOUNT&lt;REF(LLV(AMOUNT,55),1);</span></span>
<span class="line"><span>X_5:=ABS(AMOUNT-REF(AMOUNT,1))/REF(AMOUNT,1)&lt;=0.05;</span></span>
<span class="line"><span>STICKLINE(X_2,0,AMOUNT,0.8,0),COLORRED;</span></span>
<span class="line"><span>STICKLINE(X_3,0,AMOUNT,0.8,0),COLORYELLOW;</span></span>
<span class="line"><span>STICKLINE(X_4,0,AMOUNT,0.8,0),COLORMAGENTA;</span></span>
<span class="line"><span>X_6:=LLV(AMOUNT,16);</span></span>
<span class="line"><span>X_7:=HHV(AMOUNT,16);</span></span>
<span class="line"><span>X_8:=REF(MA(AMOUNT,5),1);</span></span>
<span class="line"><span>地量:(X_6*3+X_8)/4,COLORMAGENTA;</span></span>
<span class="line"><span>天量:(X_7*3+X_8)/4,COLORRED;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>重写并添加个人理解和注释</strong></p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" style="--shiki-light:#4c4f69;--shiki-dark:#E6E6E6;--shiki-light-bg:#eff1f5;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes catppuccin-latte slack-dark vp-code"><code class="language-vba"><span class="line"><span>略</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,93)]))}const z=n(q,[["render",w]]),Q=JSON.parse('{"path":"/%E4%BA%A4%E6%98%93/%E5%A4%A7%E9%98%B3%E4%B8%BB%E5%9B%BE%E4%BB%A3%E7%A0%81%E7%A0%B4%E8%A7%A3%E5%92%8C%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/","title":"大阳主图交易体系学习笔记和通达信代码破解分析","lang":"zh-CN","frontmatter":{"title":"大阳主图交易体系学习笔记和通达信代码破解分析","date":"2025-12-01T15:23:00.000Z","article":false,"description":"说明： 指标作者是我的券商投顾（华兴证券）， 开始并不太信，但通过长期观察发现其推荐的股票后续涨幅确实可观， 所以在此对其发布课程内容做个学习笔记， 同时尝试研究和逐行分析其编写的指标。 大阳主图交易体系学习笔记和通达信代码破解分析 大阳主图作者（张向阳）简介 alt text 主图标识和应用 标识 注册制涨停标识 红色柱子：涨停（10cm 20cm ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"大阳主图交易体系学习笔记和通达信代码破解分析\\",\\"description\\":\\"说明： 指标作者是我的券商投顾（华兴证券）， 开始并不太信，但通过长期观察发现其推荐的股票后续涨幅确实可观， 所以在此对其发布课程内容做个学习笔记， 同时尝试研究和逐行分析其编写的指标。 大阳主图交易体系学习笔记和通达信代码破解分析 大阳主图作者（张向阳）简介 alt text 主图标识和应用 标识 注册制涨停标识 红色柱子：涨停（10cm 20cm ...\\"}"],["meta",{"property":"og:url","content":"https://dingdingdang.online/%E4%BA%A4%E6%98%93/%E5%A4%A7%E9%98%B3%E4%B8%BB%E5%9B%BE%E4%BB%A3%E7%A0%81%E7%A0%B4%E8%A7%A3%E5%92%8C%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"大阳主图交易体系学习笔记和通达信代码破解分析"}],["meta",{"property":"og:description","content":"说明： 指标作者是我的券商投顾（华兴证券）， 开始并不太信，但通过长期观察发现其推荐的股票后续涨幅确实可观， 所以在此对其发布课程内容做个学习笔记， 同时尝试研究和逐行分析其编写的指标。 大阳主图交易体系学习笔记和通达信代码破解分析 大阳主图作者（张向阳）简介 alt text 主图标识和应用 标识 注册制涨停标识 红色柱子：涨停（10cm 20cm ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-12-06T21:24:44.000Z"}],["meta",{"property":"article:published_time","content":"2025-12-01T15:23:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-12-06T21:24:44.000Z"}],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"git":{"createdTime":1764731398000,"updatedTime":1765056284000,"contributors":[{"name":"YiguiDing","username":"YiguiDing","email":"2449695354@qq.com","commits":5,"url":"https://github.com/YiguiDing"}]},"readingTime":{"minutes":23.84,"words":7152},"filePathRelative":"交易/大阳主图代码破解和学习笔记/README.md","excerpt":"","autoDesc":true}');export{z as comp,Q as data};
