import{_ as c,r,c as h,d as e,w as i,b as p,a as s,o as u,e as n}from"./app-B95iU7Vh.js";const k="/assets/gameprogrammingpatterns-BOxmWpGA.png",v="/assets/command-buttons-one-hJADnqUe.png",E="/assets/command-buttons-two-Cpvj6t3G.png",m="/assets/command-stream-Bz6FSpqs.png",b="/assets/command-undo-BcSlxQ_C.png",o="/assets/flyweight-trees-B_agxvch.png",g="/assets/flyweight-tree-model-8efpS4UF.png",y="/assets/observer-list-ejZaXli6.png",C="/assets/observer-linked-CaXQNRpC.png",A="/assets/observer-nodes-CAJqlAif.png",D="/assets/prototype-spawner-CQDR2Ep9.png",F="/assets/prototype-class-CsU4TAVq.png",_="/assets/prototype-object--qbdR5Dz.png",B="/assets/prototype-delegate-DP75LY-K.png",f="/assets/prototype-weapon-fdY26dcE.png",S="/assets/state-flowchart-DTU4SFLS.png",x="/assets/state-pushdown-DMwnMK-L.png",T="/assets/type-object-subclasses-BRUxUfyN.png",I="/assets/type-object-breed-CO0yEMQb.png",q="/assets/data-locality-chart-D4ZS4joS.png",w="/assets/data-locality-pointer-chasing-CTeKExdy.png",N="/assets/data-locality-component-arrays.png-B0qpl0fL.png",P={},G=p('<h1 id="《游戏设计模式-game-programming-patterns-》学习笔记" tabindex="-1"><a class="header-anchor" href="#《游戏设计模式-game-programming-patterns-》学习笔记"><span>《游戏设计模式（game-programming-patterns）》学习笔记</span></a></h1><p><img src="'+k+'" alt=""></p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ul><li><a href="#%E6%B8%B8%E6%88%8F%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8Fgame-programming-patterns%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0">《游戏设计模式（game-programming-patterns）》学习笔记</a><ul><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#%E5%89%8D%E8%A8%80%E6%9E%B6%E6%9E%84%E6%80%A7%E8%83%BD%E5%92%8C%E6%B8%B8%E6%88%8F">前言：架构，性能和游戏</a></li><li><a href="#%E9%87%8D%E8%AE%BF%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F">重访设计模式</a><ul><li><a href="#%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F">命令模式</a><ul><li><a href="#%E9%85%8D%E7%BD%AE%E8%BE%93%E5%85%A5">配置输入</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F%E6%94%B9%E5%86%99%E4%BC%98%E5%8C%96">使用命令模式改写优化</a></li><li><a href="#%E5%92%8C%E7%8E%A9%E5%AE%B6%E8%A7%A3%E8%80%A6">和玩家解耦</a></li><li><a href="#%E9%80%9A%E8%BF%87%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F%E5%AE%8C%E6%88%90%E6%92%A4%E9%94%80%E6%93%8D%E4%BD%9C">通过命令模式完成撤销操作</a></li><li><a href="#%E5%AF%B9%E5%A4%9A%E9%87%8D%E6%92%A4%E9%94%80%E6%93%8D%E4%BD%9C%E7%9A%84%E6%94%AF%E6%8C%81">对多重撤销操作的支持</a></li><li><a href="#%E9%97%AD%E5%8C%85%E5%87%BD%E6%95%B0%E4%B8%8E%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F">闭包函数与命令模式</a></li></ul></li><li><a href="#%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F">享元模式</a><ul><li><a href="#%E4%BD%BF%E7%94%A8%E4%BA%AB%E5%85%83%E6%A8%A1%E5%BC%8F%E6%9D%A5%E8%8A%82%E7%9C%81%E5%86%85%E5%AD%98">使用享元模式来节省内存</a></li><li><a href="#%E5%9C%B0%E5%BD%A2%E7%94%9F%E6%88%90">地形生成</a></li></ul></li><li><a href="#%E8%A7%82%E5%AF%9F%E8%80%85%E6%A8%A1%E5%BC%8F">观察者模式</a><ul><li><a href="#%E6%88%90%E5%B0%B1%E8%A7%A3%E9%94%81">成就解锁</a></li></ul></li><li><a href="#%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F">原型模式</a><ul><li><a href="#%E6%80%AA%E7%89%A9%E7%94%9F%E4%BA%A7%E8%80%85">怪物生产者</a></li><li><a href="#%E4%BD%BF%E7%94%A8%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F%E9%87%8D%E6%9E%84">使用原型模式重构</a></li></ul></li><li><a href="#%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F">单例模式</a></li><li><a href="#%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F">状态模式</a><ul><li><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%A8%E7%8A%B6%E6%80%81%E6%A8%A1%E5%BC%8F">为什么要用状态模式？</a></li><li><a href="#%E6%9C%89%E9%99%90%E7%8A%B6%E6%80%81%E6%9C%BAfsms">有限状态机FSMs</a></li><li><a href="#%E5%B9%B6%E5%8F%91%E7%8A%B6%E6%80%81%E6%9C%BA">并发状态机</a></li><li><a href="#%E5%88%86%E5%B1%82%E7%8A%B6%E6%80%81%E6%9C%BA">分层状态机</a></li></ul></li></ul></li><li><a href="#%E5%BA%8F%E5%88%97%E6%A8%A1%E5%BC%8F">序列模式</a><ul><li><a href="#%E5%8F%8C%E7%BC%93%E5%86%B2%E6%A8%A1%E5%BC%8F">双缓冲模式</a></li></ul></li><li><a href="#%E8%A1%8C%E4%B8%BA%E6%A8%A1%E5%BC%8F">行为模式</a><ul><li><a href="#%E7%B1%BB%E5%9E%8B%E5%AF%B9%E8%B1%A1type-object">类型对象（Type Object）</a><ul><li><a href="#%E4%BB%8Ejson%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%8A%A0%E8%BD%BD%E5%B9%B6%E6%9E%84%E5%BB%BA%E7%89%A9%E7%A7%8D">从JSON配置中加载并构建物种</a></li></ul></li></ul></li><li><a href="#%E8%A7%A3%E8%80%A6%E6%A8%A1%E5%BC%8F">解耦模式</a><ul><li><a href="#%E7%BB%84%E4%BB%B6%E6%A8%A1%E5%BC%8F">组件模式</a></li><li><a href="#%E4%BA%8B%E4%BB%B6%E9%98%9F%E5%88%97">事件队列</a></li><li><a href="#%E6%9C%8D%E5%8A%A1%E5%AE%9A%E4%BD%8D%E5%99%A8">服务定位器</a></li></ul></li><li><a href="#%E4%BC%98%E5%8C%96%E6%A8%A1%E5%BC%8F">优化模式</a><ul><li><a href="#%E6%95%B0%E6%8D%AE%E5%B1%80%E9%83%A8%E6%80%A7">数据局部性</a><ul><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E6%95%B0%E6%8D%AE%E5%B1%80%E9%83%A8%E6%80%A7">什么是数据局部性？</a></li><li><a href="#%E4%B8%8D%E8%80%83%E8%99%91%E6%95%B0%E6%8D%AE%E5%B1%80%E9%83%A8%E6%80%A7%E5%AF%BC%E8%87%B4%E5%BD%B1%E5%93%8D%E6%80%A7%E8%83%BD%E7%9A%84%E6%A1%88%E4%BE%8B">不考虑数据局部性导致影响性能的案例</a></li><li><a href="#%E8%80%83%E8%99%91%E6%95%B0%E6%8D%AE%E5%B1%80%E9%83%A8%E6%80%A7%E7%9A%84%E4%BC%98%E5%8C%96%E6%96%B9%E6%B3%95%E4%BD%BF%E7%94%A8%E6%95%B0%E7%BB%84">考虑数据局部性的优化方法：使用数组</a></li><li><a href="#%E8%80%83%E8%99%91%E6%95%B0%E6%8D%AE%E5%B1%80%E9%83%A8%E6%80%A7%E7%9A%84%E4%BC%98%E5%8C%96%E6%96%B9%E6%B3%95%E6%89%93%E5%8C%85%E6%95%B0%E6%8D%AE">考虑数据局部性的优化方法：打包数据</a></li><li><a href="#%E5%86%B7%E7%83%AD%E5%88%86%E9%9A%94">冷热分隔</a></li><li><a href="#%E8%AE%BE%E8%AE%A1%E5%86%B3%E7%AD%96">设计决策</a></li></ul></li></ul></li></ul></li></ul><h2 id="前言-架构-性能和游戏" tabindex="-1"><a class="header-anchor" href="#前言-架构-性能和游戏"><span>前言：架构，性能和游戏</span></a></h2><p><strong>关于架构</strong></p><ul><li>本书是讨论的是如何组织代码的，或者说是关于架构的</li><li><mark>“程序都有一定架构”</mark> ， <mark>“将所有东西都塞到main()中”</mark> 也是一种架构</li><li>架构好坏的评判： <mark>“评价架构设计的好坏就是评价它应对改动有多么轻松。”</mark></li></ul><p><strong>关于解耦</strong></p><ul><li>两块代码是耦合的， 意味着需要阅读理解两块代码</li><li>如果解耦了它们俩，就可以单独地只阅读理解其中一个部分</li><li><mark>“软件架构的关键目标： 最小化在编写代码前需要了解的信息。”</mark></li><li>解耦的目标： <ul><li><mark>“当一块代码有改动时，不需要修改另一块代码。”</mark> (或者说需要修改的代码很少)</li><li><mark>“耦合程度越小，改动会波及的范围就越小。”</mark></li></ul></li></ul><p><strong>追求完美架构的代价</strong></p><ul><li>维持好的游戏架构，使其可扩展、可维护、低耦合，需要花费大量精力。</li><li>无限制的在代码中引入接口、抽象、虚函数，可能最后不仅毫无用处，甚至可能会污染代码，不要提前优化，提前假设某处未来可能会有功能扩展。</li></ul><p><strong>开发的灵活性与运行的高效性</strong></p><ul><li><mark>“ 让代码更灵活的许多模式依靠虚拟调度、 接口、 指针、 消息和其他机制， 它们都会加大运行时开销。”</mark></li><li>为了让程序高效的执行，可以 <mark>“保持代码灵活直到确定设计，再去除抽象层来提高性能。”</mark></li></ul><p><strong>糟糕代码的优势</strong></p><ul><li><mark>“编写架构良好的代码需要仔细地思考，这会消耗时间。”</mark></li><li><mark>“原型——一坨勉强拼凑在一起，只能完成某个点子的简单代码。”</mark> 可以节约时间。</li><li>原型代码看上去能工作，但不能被维护，必须重写</li></ul><p><strong>关于平衡</strong></p><ul><li>保持代码可读性，需要好的架构。</li><li>保证代码执行效率,需要好的优化。</li><li>需要快速将需求实现</li><li>这些目标至少是部分对立的: <ul><li>好的架构长期来看提高了生产力， 也意味着每个改动都需要消耗更多努力保持代码整洁。</li><li>高度优化的代码不灵活，很难改动。</li><li>如果尽可能快地实现特性， 代码库就会充满黑魔法，漏洞和混乱，阻碍未来的产出。</li></ul></li><li>没有简单的答案，只有权衡。</li></ul><h2 id="重访设计模式" tabindex="-1"><a class="header-anchor" href="#重访设计模式"><span>重访设计模式</span></a></h2><blockquote><p>这里部分主要讨论《设计模式：可复用面向对象软件的基础》中某些设计模式在游戏中的具体应用</p></blockquote><h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式"><span>命令模式</span></a></h3><h4 id="配置输入" tabindex="-1"><a class="header-anchor" href="#配置输入"><span>配置输入</span></a></h4><p>一个用命令模式优化的案例</p><p><img src="'+v+`" alt=""></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 这个函数通常在游戏循环中每帧调用一次</span></span>
<span class="line"><span>function handleInput() {</span></span>
<span class="line"><span>  if (isPressed(BUTTON_X)) jump();</span></span>
<span class="line"><span>  else if (isPressed(BUTTON_Y)) fireGun();</span></span>
<span class="line"><span>  else if (isPressed(BUTTON_A)) swapWeapon();</span></span>
<span class="line"><span>  else if (isPressed(BUTTON_B)) lurchIneffectively();</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">缺点</p><ul><li>用户的输入和程序行为硬编码在一起了,</li><li>这导致无法让玩家自定义按键的功能。</li></ul></div><h4 id="使用命令模式改写优化" tabindex="-1"><a class="header-anchor" href="#使用命令模式改写优化"><span>使用命令模式改写优化</span></a></h4><blockquote><p><strong>为了支持玩家配置按键的功能</strong>，可以使用命令模式，<br> 将这些对jump()和fireGun()的直接调用转化为<mark>可替换</mark>的东西。</p></blockquote>`,27),M=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"// 定义基类代表可触发的游戏行为")]),n(`
`),s("span",{class:"line"},[s("span",null,"interface Command {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void execute();")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),O=s("p",null,"然后我们为不同的游戏行为定义相应的子类：",-1),R=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class JumpCommand implements Command {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    void execute() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        jump();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"};")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class FireCommand implements Command {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    void execute() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        fireGun();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),j=s("p",null,"在代码的输入处理部分，为每个按键存储一个命令。",-1),U=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class InputHandler {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 绑定命令的方法……")]),n(`
`),s("span",{class:"line"},[s("span",null,"   buttonX_ = new JumpCommand();")]),n(`
`),s("span",{class:"line"},[s("span",null,"   buttonY_ = new FireCommand();")]),n(`
`),s("span",{class:"line"},[s("span",null,"   buttonA_ = new swapWeaponCommand();")]),n(`
`),s("span",{class:"line"},[s("span",null,"   buttonB_ = new lurchIneffectivelyCommand();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void handleInput(){")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 现在输入处理部分这样处理：")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (isPressed(BUTTON_X)) buttonX_.execute();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    else if (isPressed(BUTTON_Y)) buttonY_.execute();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    else if (isPressed(BUTTON_A)) buttonA_.execute();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    else if (isPressed(BUTTON_B)) buttonB_.execute();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  };")]),n(`
`),s("span",{class:"line"},[s("span",null,"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),H=s("p",null,"这样，相比于之前的硬编码导致每个输入直接调用函数，现在可以修改按键实际所执行的操作：",-1),L=s("p",null,[s("img",{src:E,alt:""})],-1),W=p(`<h4 id="和玩家解耦" tabindex="-1"><a class="header-anchor" href="#和玩家解耦"><span>和玩家解耦</span></a></h4><blockquote><p>之前的写法其实是假设在execute()函数能够直接操作玩家<br> 现在要进一步解耦，使得命令可以操作除玩家自己之外的角色</p></blockquote><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>interface Command {</span></span>
<span class="line"><span>  void execute(Player player);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，可以使用这个类让游戏中的任何角色跳来跳去了。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class JumpCommand implements Command {</span></span>
<span class="line"><span>    void execute(Player player) {</span></span>
<span class="line"><span>        player.jump();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改handleInput()，让它可以返回命令：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class InputHandler {</span></span>
<span class="line"><span>  // 绑定命令的方法……</span></span>
<span class="line"><span>  buttonX_ = new JumpCommand();</span></span>
<span class="line"><span>  buttonY_ = new FireCommand();</span></span>
<span class="line"><span>  buttonA_ = new swapWeaponCommand();</span></span>
<span class="line"><span>  buttonB_ = new lurchIneffectivelyCommand();</span></span>
<span class="line"><span>  handleInput(): Command {</span></span>
<span class="line"><span>    if (isPressed(BUTTON_X)) return buttonX_;</span></span>
<span class="line"><span>    if (isPressed(BUTTON_Y)) return buttonY_;</span></span>
<span class="line"><span>    if (isPressed(BUTTON_A)) return buttonA_;</span></span>
<span class="line"><span>    if (isPressed(BUTTON_B)) return buttonB_;</span></span>
<span class="line"><span>    // 没有按下任何按键，就什么也不做</span></span>
<span class="line"><span>    return NULL;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以让玩家控制游戏中的任何角色，只需向命令传入不同的角色。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>Command cmd = inputHandler.handleInput();</span></span>
<span class="line"><span>cmd &amp;&amp; cmd.execute(this);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在玩家和AI可以使用相同的命令；AI代码只需生成Command对象。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Player{</span></span>
<span class="line"><span>    update(dt:number){</span></span>
<span class="line"><span>        Command cmd = inputHandler.handleInput();</span></span>
<span class="line"><span>        cmd &amp;&amp; cmd.execute(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class AI{</span></span>
<span class="line"><span>    update(dt:number){</span></span>
<span class="line"><span>        Command cmd = getNextCommand();</span></span>
<span class="line"><span>        cmd &amp;&amp; cmd.execute(this);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过命令流，解耦消费者和生产者。</p><ul><li>控制器或者AI，产生一系列命令放入流中</li><li>调度器或者角色自身，调用并消耗命令</li></ul><p><img src="`+m+`" alt=""></p><h4 id="通过命令模式完成撤销操作" tabindex="-1"><a class="header-anchor" href="#通过命令模式完成撤销操作"><span>通过命令模式完成撤销操作</span></a></h4><p>一个可以实现撤销操作的案例代码</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class MoveUnitCommand implements Command</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  Unit unit_;</span></span>
<span class="line"><span>  int x_, y_,xBefore_,yBefore_;</span></span>
<span class="line"><span>  constructor(Unit unit, int x, int y){</span></span>
<span class="line"><span>    // 记录被操作的对象</span></span>
<span class="line"><span>    unit_ = unit;</span></span>
<span class="line"><span>    // 记录目标位置</span></span>
<span class="line"><span>    x_ = x;</span></span>
<span class="line"><span>    y_ = y;</span></span>
<span class="line"><span>    // 记录当前位置</span></span>
<span class="line"><span>    xBefore_ = unit_.x;</span></span>
<span class="line"><span>    yBefore_ = unit_.y;</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  void execute(){</span></span>
<span class="line"><span>    unit_.moveTo(x_, y_);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  void undo(){</span></span>
<span class="line"><span>    // 撤销操作</span></span>
<span class="line"><span>    unit_.moveTo(xBefore_, yBefore_);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>Command handleInput()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  Unit unit = getSelectedUnit();</span></span>
<span class="line"><span>  if (isPressed(BUTTON_UP)) {</span></span>
<span class="line"><span>    // 向上移动单位</span></span>
<span class="line"><span>    int destY = unit.y - 1;</span></span>
<span class="line"><span>    return new MoveUnitCommand(unit, unit.x, destY);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (isPressed(BUTTON_DOWN)) {</span></span>
<span class="line"><span>    // 向下移动单位</span></span>
<span class="line"><span>    int destY = unit.y + 1;</span></span>
<span class="line"><span>    return new MoveUnitCommand(unit, unit.x, destY);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 其他的移动……</span></span>
<span class="line"><span>  return NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Command cmd = handleInput()</span></span>
<span class="line"><span>cmd.execute()</span></span>
<span class="line"><span>cmd.undo()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对多重撤销操作的支持" tabindex="-1"><a class="header-anchor" href="#对多重撤销操作的支持"><span>对多重撤销操作的支持</span></a></h4><blockquote><p>可以用于游戏地图、关卡编辑器</p></blockquote><p>支持多重的撤销也不太难。 我们不单单记录最后一条指令，还要记录指令列表，然后用一个引用指向 “当前” 的那个。 当玩家执行一条命令，我们将其添加到列表，然后将代表 “当前” 的指针指向它。</p><p><img src="`+b+`" alt=""></p><h4 id="闭包函数与命令模式" tabindex="-1"><a class="header-anchor" href="#闭包函数与命令模式"><span>闭包函数与命令模式</span></a></h4><blockquote><p>在某种程度上说，命令模式是为一些没有闭包的语言模拟闭包。</p></blockquote><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>function makeMoveUnitCommand(unit, x, y) {</span></span>
<span class="line"><span>  var xBefore, yBefore;</span></span>
<span class="line"><span>  // 这里返回的就是一个命令对象</span></span>
<span class="line"><span>  return {</span></span>
<span class="line"><span>    execute: function () {</span></span>
<span class="line"><span>      xBefore = unit.x();</span></span>
<span class="line"><span>      yBefore = unit.y();</span></span>
<span class="line"><span>      unit.moveTo(x, y);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    undo: function () {</span></span>
<span class="line"><span>      unit.moveTo(xBefore, yBefore);</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>Command handleInput()</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  Unit unit = getSelectedUnit();</span></span>
<span class="line"><span>  if (isPressed(BUTTON_UP)) {</span></span>
<span class="line"><span>    // 向上移动单位</span></span>
<span class="line"><span>    int destY = unit.y - 1;</span></span>
<span class="line"><span>    return makeMoveUnitCommand(unit, unit.x, destY);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return NULL;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>Command cmd = handleInput()</span></span>
<span class="line"><span>cmd.execute()</span></span>
<span class="line"><span>cmd.undo()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="享元模式" tabindex="-1"><a class="header-anchor" href="#享元模式"><span>享元模式</span></a></h3><blockquote><p>这个部分的内容，个人感觉，总结成一句话，就是要把游戏中的某些相同的对象的共有的不变的属性抽取出来，在内存中共用一份，节省内存。</p></blockquote><h4 id="使用享元模式来节省内存" tabindex="-1"><a class="header-anchor" href="#使用享元模式来节省内存"><span>使用享元模式来节省内存</span></a></h4>`,29),V=s("strong",null,"一种表示树的方式",-1),J=s("strong",null,"另一种表示方式",-1),X=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Tree"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Mesh mesh_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Texture bark_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Texture leaves_;")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Vector position_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    double"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," height_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    double"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," thickness_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Color barkTint_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Color leafTint_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Y=s("p",null,[s("img",{src:o,alt:""})],-1),K=s("blockquote",null,[s("p",null,"把共有的部分抽取出来，只在内存中保留一份")],-1),z=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," TreeModel"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Mesh mesh_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Texture bark_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Texture leaves_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Tree"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    TreeModel"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"*"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," model_;")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Vector position_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    double"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," height_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    double"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," thickness_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Color barkTint_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    Color leafTint_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Z=s("p",null,[s("img",{src:g,alt:""})],-1),Q=p(`<h4 id="地形生成" tabindex="-1"><a class="header-anchor" href="#地形生成"><span>地形生成</span></a></h4><p><strong>定义地形</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>enum Terrain {</span></span>
<span class="line"><span>  TERRAIN_GRASS,</span></span>
<span class="line"><span>  TERRAIN_HILL,</span></span>
<span class="line"><span>  TERRAIN_RIVER,</span></span>
<span class="line"><span>  // ......</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义地图</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class World {</span></span>
<span class="line"><span>  Terrain tiles_[WIDTH][HEIGHT];</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>一种获取移动成本和判断是否是水地的算法</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class World {</span></span>
<span class="line"><span>  int getMovementCost(int x, int y) {</span></span>
<span class="line"><span>    switch (tiles_[x][y])</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      case TERRAIN_GRASS: return 1;</span></span>
<span class="line"><span>      case TERRAIN_HILL:  return 3;</span></span>
<span class="line"><span>      case TERRAIN_RIVER: return 2;</span></span>
<span class="line"><span>        // 其他地形……</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  bool isWater(int x, int y) {</span></span>
<span class="line"><span>    switch (tiles_[x][y])</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      case TERRAIN_GRASS: return false;</span></span>
<span class="line"><span>      case TERRAIN_HILL:  return false;</span></span>
<span class="line"><span>      case TERRAIN_RIVER: return true;</span></span>
<span class="line"><span>        // 其他地形……</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>优化：定义实际的地形类，使得可以方便的获取移动成本</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Terrain</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  int movementCost_;</span></span>
<span class="line"><span>  bool isWater_;</span></span>
<span class="line"><span>  Texture texture_;</span></span>
<span class="line"><span>  Terrain(int movementCost,bool isWater,Texture texture){</span></span>
<span class="line"><span>    movementCost_=movementCost;</span></span>
<span class="line"><span>    isWater_=isWater;</span></span>
<span class="line"><span>    texture_=texture;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  int getMovementCost() const { return movementCost_; }</span></span>
<span class="line"><span>  bool isWater() const { return isWater_; }</span></span>
<span class="line"><span>  Texture getTexture() const { return texture_; }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一种简单的地形生成算法</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 也可以把这个枚举定义成World的属性,使其生命周期和world保持一致</span></span>
<span class="line"><span>enum Terrain</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  TERRAIN_GRASS = new GRASS(1, false, GRASS_TEXTURE),</span></span>
<span class="line"><span>  TERRAIN_HILL = new HILL(3, false, HILL_TEXTURE),</span></span>
<span class="line"><span>  TERRAIN_RIVER = new RIVER(2, false, RIVER_TEXTURE)</span></span>
<span class="line"><span>  // ......</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class World {</span></span>
<span class="line"><span>  Terrain tiles_[WIDTH][HEIGHT];</span></span>
<span class="line"><span>  // 生成地形</span></span>
<span class="line"><span>  void generateTerrain() {</span></span>
<span class="line"><span>    for (int x = 0; x &lt; WIDTH; x++) {</span></span>
<span class="line"><span>      for (int y = 0; y &lt; HEIGHT; y++) {</span></span>
<span class="line"><span>        if (random(10) == 0) {</span></span>
<span class="line"><span>          // 加入一些丘陵</span></span>
<span class="line"><span>          tiles_[x][y] = Terrain.TERRAIN_HILL;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          // 将地面填满草皮.</span></span>
<span class="line"><span>          tiles_[x][y] = Terrain.TERRAIN_GRASS;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 放置河流</span></span>
<span class="line"><span>    int x = random(WIDTH);</span></span>
<span class="line"><span>    for (int y = 0; y &lt; HEIGHT; y++) {</span></span>
<span class="line"><span>      tiles_[x][y] = Terrain.TERRAIN_RIVER;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用这种方式，World不再与各种地形的细节耦合。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class World {</span></span>
<span class="line"><span>  Terrain tiles_[WIDTH][HEIGHT];</span></span>
<span class="line"><span>  // 获取某个位置的地形</span></span>
<span class="line"><span>  void getTile(int x, int y) {</span></span>
<span class="line"><span>    return tiles_[x][y];</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取经过某地的成本</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 获取经过某地的成本</span></span>
<span class="line"><span>int cost = world.getTile(2, 3).getMovementCost();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式"><span>观察者模式</span></a></h3><h4 id="成就解锁" tabindex="-1"><a class="header-anchor" href="#成就解锁"><span>成就解锁</span></a></h4><p>实现一个成就系统，可能需要在触发一些事件后去判断是否可以解锁某些成就，比如在物理引擎的地方判断玩家是否落水，但把解锁某些成就的代码直接夹杂在这些地方可能会导致代码的高耦合不可维护，解决办法就是使用观察者模式来解耦，以下是作者提供的一个案例。</p>`,18),$=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Physics extends Subject{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void updateEntity(Entity& entity){")]),n(`
`),s("span",{class:"line"},[s("span",null,"    bool wasOnSurface = entity.isOnSurface();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    entity.accelerate(GRAVITY);")]),n(`
`),s("span",{class:"line"},[s("span",null,"    entity.update();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    bool isOnSurface = entity.isOnSurface();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 说明有物体从地表坠入深渊")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (wasOnSurface && !isOnSurface) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      notify(entity, EVENT_START_FALL);")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ss=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Subject{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  observers = []")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void addObserver(observer){ observers.push(observer); }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void delObserver(observer){ observers.remove(observer); }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void notify(Entity entity, Event event){")]),n(`
`),s("span",{class:"line"},[s("span",null,"    observers.forEach(")]),n(`
`),s("span",{class:"line"},[s("span",null,"      item => item.onNotify(entity,event)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    );")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ns=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Achievements implements Observer{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  bool heroIsOnBridge_;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void onNotify(Entity entity, Event event) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    switch (event) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      case EVENT_ENTITY_FELL:")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if (entity.isHero() && heroIsOnBridge_)")]),n(`
`),s("span",{class:"line"},[s("span",null,"          unlock(ACHIEVEMENT_FELL_OFF_BRIDGE);")]),n(`
`),s("span",{class:"line"},[s("span",null,"        break;")]),n(`
`),s("span",{class:"line"},[s("span",null,"      case XXX:")]),n(`
`),s("span",{class:"line"},[s("span",null,"        // 处理其他事件，更新heroIsOnBridge_变量……")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void unlock(Achievement achievement) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 如果还没有解锁，那就解锁成就……")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),is=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"interface Observer{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void onNotify(Entity entity, Event event);")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),as=p('<p><strong>总的来说</strong>，就是在物理引擎检测到发生了什么事件之后，调用notify()函数，遍历所有观察者，通知所有观察者这个事件发生了。</p><p><img src="'+y+'" alt="images/observer-list.png"></p><p><strong>优点</strong></p><ul><li>不存在比如“事件”，“消息”的概念，没有使用队列，或者为每个通知动态分配内存。</li><li>发送通知只需简单地遍历列表，调用方法。</li></ul><p><strong>缺点</strong></p><ul><li>观察者模式是同步的。 被观察者直接调用了观察者上的方法，这意味着直到所有观察者的通知方法返回后， 被观察者才会继续自己的工作。<mark>观察者会阻塞被观察者的运行</mark>。</li><li>当你有耗时的操作要执行时，应当将这些操作推到另一个线程或工作队列中去。</li><li>需要小心地在观察者中混合线程和锁。 <ul><li>如果观察者试图获得被观察者拥有的锁，游戏就进入死锁了。</li><li>在多线程引擎中，你最好使用事件队列来做异步通信。</li></ul></li></ul><p><strong>“它做了太多动态分配”</strong></p><blockquote><p>观察者列表随着观察者的添加和删除而动态地增长和缩短。 这种内存的分配吓坏了一些人，觉得：“它做了太多动态分配”。<br> 实际上，需要注意的事情是只在观察者加入时分配内存。 发送通知无需内存分配——只需一个方法调用。 如果你在游戏一开始就加入观察者而不乱动它们，分配的总量是很小的。<br> 下面是一种无需任何动态分配的方式来增加和删除观察者的方法。</p></blockquote><p><strong>链式观察者</strong></p><p>单链表结构的链式观察者<br><img src="'+C+'" alt="images/observer-linked.png"></p><p>单链表结构的链式观察者</p>',11),ls=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Subject {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  head = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 附加观察者")]),n(`
`),s("span",{class:"line"},[s("span",null,"  addObserver(Observer observer) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    observer.next = head;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    head = observer;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 删除观察者")]),n(`
`),s("span",{class:"line"},[s("span",null,"  delObserver(Observer observer) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 删头节点")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if(observer==head){")]),n(`
`),s("span",{class:"line"},[s("span",null,"      head = observer.next")]),n(`
`),s("span",{class:"line"},[s("span",null,"      observer.next = null")]),n(`
`),s("span",{class:"line"},[s("span",null,"      return;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 删非头节点")]),n(`
`),s("span",{class:"line"},[s("span",null,"    Observer cur = head;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    while(cur) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      if(cur.next == observer) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        cur.next = observer.next")]),n(`
`),s("span",{class:"line"},[s("span",null,"        observer.next = null")]),n(`
`),s("span",{class:"line"},[s("span",null,"        break;")]),n(`
`),s("span",{class:"line"},[s("span",null,"      }")]),n(`
`),s("span",{class:"line"},[s("span",null,"      cur = cur.next")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 通知")]),n(`
`),s("span",{class:"line"},[s("span",null,"  notify() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    Observer cur = head;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    while(cur) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      cur.onNotify();")]),n(`
`),s("span",{class:"line"},[s("span",null,"      cur = cur.next;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),es=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Observer {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  next = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  onNotify();")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ps=s("p",null,"双链表结构的链式观察者",-1),ts=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Subject{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  head = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 附加观察者")]),n(`
`),s("span",{class:"line"},[s("span",null,"  addObserver(Observer observer){")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if(head!=null) head.prev = observer")]),n(`
`),s("span",{class:"line"},[s("span",null,"    observer.next = head;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    head = observer;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 删除观察者")]),n(`
`),s("span",{class:"line"},[s("span",null,"  delObserver(Observer observer){")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 调整前后两节点的指针")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if(observer.prev) observer.prev.next = observer.next")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if(observer.next) observer.next.prev = observer.prev")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 处理删除头节点的特殊情况")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if(observer==head) head = observer.next")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 通知")]),n(`
`),s("span",{class:"line"},[s("span",null,"  notify(){")]),n(`
`),s("span",{class:"line"},[s("span",null,"    Observer cur = head;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    while(cur){")]),n(`
`),s("span",{class:"line"},[s("span",null,"      cur.onNotify();")]),n(`
`),s("span",{class:"line"},[s("span",null,"      cur = cur.next;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ds=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"// 双链表结构")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Observer {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  prev = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  next = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  onNotify();")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),rs=p('<div class="hint-container tip"><p class="hint-container-title">链式观察者的缺点</p><p>由于观察者的后继指针是观察者的一个属性，这意味着一个观察者同时只能存在于一条链中，也就是说一个观察者只能观察一个被观察者。</p></div><p><strong>链表节点池</strong></p><blockquote><p>为了解决上述问题，链式观察者的实现方式会使得一个观察者只能观察一个对象，这里的解决方案就是，定义一个链表节点对象，让其指针域指向真正的观察者，这样一个观察者可以被多个节点对象所指，那他就可以在多条链上，就可以观察多个对象。<br> 这样,避免频繁动态分配就变得简单了，现在每个链表节点的大小就是固定的了，可以预先在对象池中分配它们。以便重用、随用随取</p></blockquote><p><img src="'+A+'" alt="images/observer-nodes.png"></p><p><strong>销毁被观察者或观察者对另一半的影响</strong></p><ul><li>使用delete删除观察者后， <ul><li>被观察者想通知观察者时，观察者的地址已经悬空了。</li></ul></li><li>使用delete删除被观察者， <ul><li>观察者可能不保存被观察者的引用，所以影响不大。</li><li>观察者如果仍然保存被观察者的引用，则该地址也悬空了。</li><li>观察者可能不知情，仍然期待收到通知</li></ul></li></ul><p>对于第一种情况，解决的办法就是，观察者在被销毁时，需要把自己从观察者列表中删除。</p><p>对于第二种情况，解决的办法就是，在被观察者销毁时，向所有观察者发送“死亡通知”。</p><ul><li>更安全的方案是在每个被观察者销毁时，让观察者自动取消注册。可以在观察者基类中实现了这个逻辑。这需要在观察者中维护一个被观察者的列表。</li></ul><p>这样就做到了：</p><ul><li>观察者在被销毁时，被观察者要在其所维护的观察者列表中删除它。</li><li>被观察者在被销毁时，观察者要在其所维护的被观察者列表中删除它。</li></ul><p><strong>失效监听者问题</strong></p><p>开发者可能认为自己所使用的语言有垃圾回收机制就不用关心上述问题，实际上，这里原书作者给了一个案例，场景类中有一个UI类，UI类是一个观察者，玩家类是一个被观察者，玩家进入场景，UI类被注册成为玩家类的观察者，玩家受到攻击后，通知UI类更新血量。这看起来没什么问题。<br> 但是如果玩家离开场景，进入新的场景的话，UI类没有取消注册为观察者，那么玩家类就始终保留着上一个场景UI类的引用，那么这些失效的UI类将始终不会被垃圾回收机制清理，玩家的任何状态变化将会发送给这些UI类上。</p><h3 id="原型模式" tabindex="-1"><a class="header-anchor" href="#原型模式"><span>原型模式</span></a></h3><h4 id="怪物生产者" tabindex="-1"><a class="header-anchor" href="#怪物生产者"><span>怪物生产者</span></a></h4><p>假设我们游戏中每种怪物都有不同的类——Ghost，Demon，Sorcerer，每种敌人有不同的生产者。</p><p>以下是一种暴力实现方式</p>',17),cs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Monster {}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Ghost extends Monster {}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Demon extends Monster {}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Sorcerer extends Monster {}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),hs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Spawner {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  spawnMonster(): Spawner;")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Ghost_Spawner extends Spawner {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  spawnMonster() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return new Ghost();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Demon_Spawner extends Spawner {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  spawnMonster() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return new Demon();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Sorcerer_Spawner extends Spawner {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  spawnMonster() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return new Sorcerer();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),us=p('<div class="hint-container info"><p class="hint-container-title">这种写法所存在的问题</p><p>众多类，众多引用，众多冗余，众多副本，众多重复自我……</p></div><h4 id="使用原型模式重构" tabindex="-1"><a class="header-anchor" href="#使用原型模式重构"><span>使用原型模式重构</span></a></h4><p><img src="'+D+'" alt=""></p>',3),ks=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"interface Monster {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  clone(): Monster;")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),vs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Ghost implements Monster {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  health;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  speed;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  Ghost clone(){")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return new Ghost(health,speed);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  };")]),n(`
`),s("span",{class:"line"},[s("span",null,"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Es=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Spawner {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  self: Monster;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(self: Monster) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.self = self;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  spawnMonster() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return this.self.clone();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ms=s("blockquote",null,[s("p",null,"这种模式就意味着可以创建一个生产者，生产快速鬼魂，虚弱鬼魂，慢速鬼魂，而只需创建一个合适的原型鬼魂。")],-1),bs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"Spawner ghostSpawner = new Spawner(new Ghost(15, 3));")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),os=p("<p><strong>编写clone()的痛苦</strong></p><p>这种优化方式虽然不需要为每个怪物创建单独的生产者类了。<br> 但确需要在每个怪物类中实现clone()。 这和使用生产者方法比起来也没节约多少代码量。</p><p>原书作者对这种模式提到了三个问题：</p><ul><li>深拷贝和浅拷贝的问题</li><li>使用这个模式需要以每个怪物拥有独立的类作为前提</li><li>使用庞杂的类层次来组织游戏非常痛苦</li></ul><p>原书内容：</p><blockquote><p>当你坐下来试着写一个正确的clone()，会遇见令人不快的语义漏洞。 做深层拷贝还是浅层拷贝呢？换言之，如果恶魔拿着叉子，克隆恶魔也要克隆叉子吗？</p><p>同时，这看上去没减少已存问题上的代码， 事实上还增添了些人为的问题。 我们需要将每个怪物有独立的类作为前提条件。 这绝对不是当今大多数游戏引擎运作的方法。</p><p>我们中大部分痛苦地学到，这样庞杂的类层次管理起来很痛苦， 那就是我们为什么用组件模式和类型对象为不同的实体建模，这样无需一一建构自己的类。</p></blockquote><p><strong>生产函数的写法</strong></p><blockquote><p>这种写法实际上和上面的差不多</p></blockquote>",8),gs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"function spawnGhost() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  return new Ghost();")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ys=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Spawner {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(private func:Function){}")]),n(`
`),s("span",{class:"line"},[s("span",null,"  Monster spawnMonster(){")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return func();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Cs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"Spawner ghostSpawner = new Spawner(spawnGhost);")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"})])],-1),As=p('<p><strong>原型语言范式</strong></p><ul><li>“面向对象编程”和“类”不是同义词</li><li>面向对象的特性是它将状态和行为紧紧地绑在一起。</li><li>但基于类的语言实际将状态和行为割裂开来。</li></ul><p><strong>基于类的面向对象</strong></p><p>基于类的面向对象实际上是把实例对象的状态和方法分来存储的</p><p><img src="'+F+'" alt=""></p><p><strong>Self语言</strong></p><blockquote><p>从定义上来说，这是一种比基于类的语言更加面向对象的语言。</p></blockquote><p>Self语言将一个对象的状态和方法绑定在了一起</p><p><img src="'+_+'" alt=""></p><p>Self中通过委托来实现继承，一个对象获取一个属性或方法，先在对象内部找，找不到就去父级找，直到没有父对象为止。</p><p><img src="'+B+`" alt=""></p><p><strong>Self语言的优点</strong></p><ul><li>创建新的实例的方式是使用克隆。</li><li>每个对象都自动支持原型设计模式。</li><li>无需自己实现clone()；就实现了原型模式，原型被内建在系统中。</li></ul><p><strong>在Self语言中创建对象</strong></p><blockquote><p>在Self语言中，就好像每个对象都自动支持原型设计模式。 任何对象都能被克隆。为了获得一堆相似的对象，你：</p><ul><li>将对象塑造成你想要的状态。你可以直接克隆系统内建的基本Object，然后向其中添加字段和方法。</li><li>克隆它来产出……额……随你想要多少就克隆多少个对象。</li></ul></blockquote><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 根据上述论述，我猜写法大概是这样的。</span></span>
<span class="line"><span>function creatMyObj() {</span></span>
<span class="line"><span>  let obj = {};</span></span>
<span class="line"><span>  obj.xxx = 123;</span></span>
<span class="line"><span>  obj.say = function () {</span></span>
<span class="line"><span>    console.log(&quot;say....&quot;);</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  return obj;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let obj1 = creatMyObj();</span></span>
<span class="line"><span>let obj2 = obj1.clone();</span></span>
<span class="line"><span>let obj3 = obj1.clone();</span></span>
<span class="line"><span>let obj4 = obj1.clone();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript</strong></p><blockquote><p>Brendan Eich，JavaScript的缔造者， 从Self语言中直接汲取灵感，很多JavaScript的语义都是基于原型的。</p></blockquote><ul><li>js是有原型的函数，但是没有clone()方法</li><li>每个对象都有属性的集合,这些属性可以是字段也可以是方法</li><li>但实践中，JavaScript更像是基于类的而不是基于原型的语言。</li><li>因为它除去了基于原型语言的核心操作“克隆”。</li></ul><p>在JavaScript中定义类和创建对象的经典方法：</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 构造器函数</span></span>
<span class="line"><span>function Weapon(range, damage) {</span></span>
<span class="line"><span>  this.range = range;</span></span>
<span class="line"><span>  this.damage = damage;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 在其原型对象上定义方法</span></span>
<span class="line"><span>Weapon.prototype.attack = function (target) {</span></span>
<span class="line"><span>  if (distanceTo(target) &gt; this.range) {</span></span>
<span class="line"><span>    console.log(&quot;Out of range!&quot;);</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    target.health -= this.damage;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>let sword = new Weapon(10, 16);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+f+`" alt="images/prototype-weapon.png"></p><p><strong>new 操作所作的事</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// new 操作所作的事</span></span>
<span class="line"><span>function myNew(constructor, ...args) {</span></span>
<span class="line"><span>  // 创建一个空对象</span></span>
<span class="line"><span>  let obj = {};</span></span>
<span class="line"><span>  // 链接原型链</span></span>
<span class="line"><span>  obj.__proto__ = constructor.prototype;</span></span>
<span class="line"><span>  // 绑定this</span></span>
<span class="line"><span>  let result = constructor.apply(obj, args);</span></span>
<span class="line"><span>  return result;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为数据模型构建原型</strong></p><ul><li>早期的游戏在程序中生成几乎所有东西</li><li>今日的游戏中代码只是驱动游戏的“引擎”，游戏是完全由数据定义的。</li><li>游戏数据达到一定规模时，可以使用原型和委托来重用数据。 <ul><li>可以使用JSON定义数据模型</li><li>可以为对象添加&quot;prototype&quot;字段，记录委托对象的名字。 如果在此对象内没找到一个字段，那就去委托对象中查找。</li></ul></li></ul><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">{</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;name&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;goblin grunt&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;minHealth&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#B5CEA8;">20</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;maxHealth&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#B5CEA8;">30</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;resists&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: [</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;cold&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;poison&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">],</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;weaknesses&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: [</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;fire&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;light&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">]</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">}</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">{</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;name&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;goblin wizard&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;prototype&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;goblin grunt&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">// 原型</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;spells&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: [</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;fire ball&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;lightning bolt&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">]</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">}</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">{</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;name&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;goblin archer&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;prototype&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;goblin grunt&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">// 原型</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;attacks&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: [</span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;short bow&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">]</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式"><span>单例模式</span></a></h3><blockquote><p>这一章作者主要介绍了为什么要避免使用单例模式。</p></blockquote><p><strong>缺点</strong></p><ul><li>单例模式实际上是全局变量， <ul><li>全局变量使得理解代码更加困难</li><li>促进了耦合的发生，比如要完成需求：“岩石撞击地面时播放声音”，新入行的游戏开发者可能会直接在物理引擎中引入Audio单例播放声音，这使得两个不相关的部分耦合了。</li><li>单例全局变量在多线程的环境下可能导致死锁的发生。</li></ul></li><li>惰性加载的单例剥夺了你对游戏性能的控制权：如果初始化一个音频需要几百毫秒，那么这在游戏中造成的延迟会降低玩家的游戏体验。</li></ul><p><strong>有时候你可能不需要名为管理类的各种单例</strong></p><blockquote><p>管理器类有时是有用的，但通常它们只是反映出作者对OOP的不熟悉。</p></blockquote>`,33),Ds=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Bullet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    int"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," getX"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"const"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"return"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," x_; }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    int"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," getY"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"const"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"return"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," y_; }")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    void"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," setX"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," x"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") { x_ "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," x; }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    void"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," setY"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," y"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") { y_ "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," y; }")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    int"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," x_, y_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," BulletManager")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"    Bullet"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," create"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," x"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," y"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"      Bullet"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"*"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," bullet "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," new"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," Bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"      bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"setX"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(x);")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"      bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"setY"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(y);")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"      return"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," bullet;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    }")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    bool"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," isOnScreen"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"Bullet"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"&"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"      return"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"getX"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},">="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," &&")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"             bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"getX"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," SCREEN_WIDTH "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"&&")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"             bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"getY"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},">="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," &&")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"             bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"getY"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," SCREEN_HEIGHT;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    }")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    void"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," move"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"Bullet"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"&"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"      bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"setX"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"getX"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"+"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 5"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Fs=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Bullet")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"    Bullet"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," x"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," y"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") : "),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"x_"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(x), "),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"y_"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(y) {}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    bool"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," isOnScreen"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"      return"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," x_ "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},">="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," &&"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," x_ "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," SCREEN_WIDTH "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"&&")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"             y_ "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},">="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," &&"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," y_ "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," SCREEN_HEIGHT;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"    }")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    void"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," move"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() { x_ "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"+="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 5"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; }")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"    int"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," x_, y_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),_s=p(`<p><strong>将类限制为单一的实例</strong></p><ul><li>上面讨论了单例模式的特性全局访问的缺点。</li><li>下面这种方式通过保证类只被初始化一次来创建单例避免了全局访问，甚至可以是私有的。</li><li>缺点是只在运行时检测</li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class FileSystem {</span></span>
<span class="line"><span>  static bool instantiated_ = false;</span></span>
<span class="line"><span>  constructor(){</span></span>
<span class="line"><span>    if(instantiated_) throw new Error(&quot;该类只能被初始化一次&quot;)</span></span>
<span class="line"><span>    instantiated_ = true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  destory(){</span></span>
<span class="line"><span>    instantiated_ = false;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>单例模式其他替代选项</strong></p><blockquote><p>便利的访问是使用单例的一个主要原因。但便利的代价是，在不想要的地方也能轻易使用。</p></blockquote><ol><li><p><strong>作为参数传进来</strong>，大概意思就是 <code>something.update(game,player,ctx);</code></p></li><li><p><strong>把单例放在基类中</strong></p><ul><li>这可以保证其是单例</li><li>还可以实现所有派生类都可以方便的访问到</li><li>还可以保证类之外无法访问</li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span> class GameObject {</span></span>
<span class="line"><span>   private static Log log_;</span></span>
<span class="line"><span>   protected Log getLog() { return log_; }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> class Enemy extends GameObject {</span></span>
<span class="line"><span>   void doSomething() {</span></span>
<span class="line"><span>     getLog().write(&quot;I can log!&quot;);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span> };</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>直接从全局获取</strong></p><ul><li>完全移除所有全局变量并不显示</li><li>游戏中总有一些东西是全局可见的。</li><li>可以让现有的全局对象捎带需要的东西，来减少全局变量类的数目。</li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Game {</span></span>
<span class="line"><span> static Game instance_;</span></span>
<span class="line"><span> Log         *log_;</span></span>
<span class="line"><span> FileSystem  *fileSystem_;</span></span>
<span class="line"><span> AudioPlayer *audioPlayer_;</span></span>
<span class="line"><span> // game是全局可见的单例</span></span>
<span class="line"><span> static Game&amp; instance() { return instance_; }</span></span>
<span class="line"><span> // log是非全局可见的单例</span></span>
<span class="line"><span> Log&amp;         getLog()         { return *log_; }</span></span>
<span class="line"><span> FileSystem&amp;  getFileSystem()  { return *fileSystem_; }</span></span>
<span class="line"><span> AudioPlayer&amp; getAudioPlayer() { return *audioPlayer_; }</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 只有Game是全局可见的。 函数可以通过它访问其他系统。</span></span>
<span class="line"><span>Game::instance().getAudioPlayer().play(VERY_LOUD_BANG);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>从服务定位器中获得。</strong></p><ul><li>另一种选项是定义一个类，存在的唯一目标就是为对象提供全局访问。 这种常见的模式被称为服务定位器模式</li></ul></li></ol><h3 id="状态模式" tabindex="-1"><a class="header-anchor" href="#状态模式"><span>状态模式</span></a></h3><h4 id="为什么要用状态模式" tabindex="-1"><a class="header-anchor" href="#为什么要用状态模式"><span>为什么要用状态模式？</span></a></h4><blockquote><p>先看一段冗长的代码</p><ul><li>这种代码比较难维护，需要判断各种特殊情况.</li><li>添加新功能非常困难，修改代码需要理清所有分支的关系来防止bug发生。</li></ul></blockquote><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Heroine{</span></span>
<span class="line"><span>   void handleInput(Input input){</span></span>
<span class="line"><span>    // 按下B</span></span>
<span class="line"><span>     if (input == PRESS_B){</span></span>
<span class="line"><span>      // 不处于跳跃和卧倒状态（特殊情况判断）</span></span>
<span class="line"><span>       if (!isJumping_ &amp;&amp; !isDucking_){</span></span>
<span class="line"><span>          isJumping_ = true;// 标记为跳跃状态</span></span>
<span class="line"><span>         setGraphics(IMAGE_JUMP);</span></span>
<span class="line"><span>         jump();</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>    //  按下卧倒键</span></span>
<span class="line"><span>     else if (input == PRESS_DOWN){</span></span>
<span class="line"><span>      // 判断保证不处于跳跃状态（特殊情况判断）</span></span>
<span class="line"><span>       if (!isJumping_){</span></span>
<span class="line"><span>         isDucking_ = true;// 标记为卧倒状态</span></span>
<span class="line"><span>         setGraphics(IMAGE_DUCK);</span></span>
<span class="line"><span>         duck();</span></span>
<span class="line"><span>       } else {</span></span>
<span class="line"><span>        // 如果处于跳跃状态则切换到下落状态</span></span>
<span class="line"><span>         isJumping_ = false;</span></span>
<span class="line"><span>         setGraphics(IMAGE_DIVE);</span></span>
<span class="line"><span>         falling();</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>    //  如果松开卧倒键</span></span>
<span class="line"><span>     else if (input == RELEASE_DOWN){</span></span>
<span class="line"><span>      // 则从卧倒切换到站立状态（特殊情况判断）</span></span>
<span class="line"><span>       if (isDucking_){</span></span>
<span class="line"><span>        // 站立……</span></span>
<span class="line"><span>        setGraphics(IMAGE_STAND);</span></span>
<span class="line"><span>        stand();</span></span>
<span class="line"><span>       }</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="有限状态机fsms" tabindex="-1"><a class="header-anchor" href="#有限状态机fsms"><span>有限状态机FSMs</span></a></h4><p>如何画流程图</p><p>给英雄每件能做的事情都画了一个盒子：站立，跳跃，俯卧，跳斩。 当角色在能响应按键的状态时，你从那个盒子画出一个箭头，标记上按键，然后连接到她变到的状态。</p><p><img src="`+S+`" alt=""></p><p><strong>状态机的要点</strong></p><ul><li>定义状态机所有可能状态。</li><li>状态机同时只能在一个状态。</li><li>状态机将处理输入。</li><li>根据不同的输入和当前的状态，状态将发生转移。</li></ul><p><strong>枚举和分支</strong></p><p>上面一个案例的错误之处在于把if和各种标识符混在一起了，实际上,结合枚举状态和Switch分支就能改成状态模式,</p><p>这是实现状态机最简单的方法:</p><p><strong>简易状态模式</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>enum State {</span></span>
<span class="line"><span>  STATE_STANDING,</span></span>
<span class="line"><span>  STATE_JUMPING,</span></span>
<span class="line"><span>  STATE_DUCKING,</span></span>
<span class="line"><span>  STATE_DIVING</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Heroine{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 当前状态</span></span>
<span class="line"><span>  state_ = State.STATE_STANDING;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void handleInput(Input input){</span></span>
<span class="line"><span>    switch (state_) {</span></span>
<span class="line"><span>      // 当前处于站立状态</span></span>
<span class="line"><span>      case STATE_STANDING:</span></span>
<span class="line"><span>        // 处理输入</span></span>
<span class="line"><span>        if (input == PRESS_B) {</span></span>
<span class="line"><span>          // 切换状态</span></span>
<span class="line"><span>          state_ = STATE_JUMPING;</span></span>
<span class="line"><span>          // 进入状态</span></span>
<span class="line"><span>          yVelocity_ = JUMP_VELOCITY;</span></span>
<span class="line"><span>          setGraphics(IMAGE_JUMP);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 处理输入</span></span>
<span class="line"><span>        else if (input == PRESS_DOWN) {</span></span>
<span class="line"><span>          // 切换状态</span></span>
<span class="line"><span>          state_ = STATE_DUCKING;</span></span>
<span class="line"><span>          // 进入状态</span></span>
<span class="line"><span>          setGraphics(IMAGE_DUCK);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      case STATE_JUMPING:</span></span>
<span class="line"><span>        if (input == PRESS_DOWN) {</span></span>
<span class="line"><span>          state_ = STATE_DIVING;</span></span>
<span class="line"><span>          setGraphics(IMAGE_DIVE);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      case STATE_DUCKING:</span></span>
<span class="line"><span>        if (input == RELEASE_DOWN) {</span></span>
<span class="line"><span>          state_ = STATE_STANDING;</span></span>
<span class="line"><span>          setGraphics(IMAGE_STAND);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>上述写法的不完美之处</strong></p><blockquote><p>考虑一个新的需求，玩家可以在俯卧时充能。</p></blockquote><p><strong>这需要：</strong></p><ol><li>添加一个字段记录充能的时长</li><li>在进入俯卧状态时将字段清空</li><li>在俯卧状态时将字段自增</li><li>在充能完毕后释放技能</li></ol><p>总之，为了增加这个充能攻击的新特性，需要修改添加一个字段，需要修改两个状态的相关代码。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Heroine{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 当前状态</span></span>
<span class="line"><span>  state_ = State.STATE_STANDING;</span></span>
<span class="line"><span>  // 1.添加一个字段记录充能的时长</span></span>
<span class="line"><span>  chargeTime = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  void handleInput(Input input){</span></span>
<span class="line"><span>    switch (state_) {</span></span>
<span class="line"><span>      // 处于站立状态</span></span>
<span class="line"><span>      case STATE_STANDING:</span></span>
<span class="line"><span>        if (input == PRESS_DOWN) {</span></span>
<span class="line"><span>          // 切换到俯卧状态</span></span>
<span class="line"><span>          state_ = STATE_DUCKING;</span></span>
<span class="line"><span>          // 进入俯卧状态</span></span>
<span class="line"><span>          setGraphics(IMAGE_DUCK);</span></span>
<span class="line"><span>          // 2. 在进入俯卧状态时将字段清空</span></span>
<span class="line"><span>          chargeTime = 0;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      // 处于俯卧状态</span></span>
<span class="line"><span>      case STATE_DUCKING:</span></span>
<span class="line"><span>        // 3. 在俯卧状态时将字段自增</span></span>
<span class="line"><span>        chargeTime++;</span></span>
<span class="line"><span>        if (chargeTime_ &gt; MAX_CHARGE) {</span></span>
<span class="line"><span>          // 4. 在充能完毕后释放技能</span></span>
<span class="line"><span>          superBomb();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (input == RELEASE_DOWN) {</span></span>
<span class="line"><span>          state_ = STATE_STANDING;</span></span>
<span class="line"><span>          setGraphics(IMAGE_STAND);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>面向对象的状态设计模式</strong></p>`,28),Bs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"interface PlayerState {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void handleInput(Player player, Input input);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void update(Player player);")]),n(`
`),s("span",{class:"line"},[s("span",null,"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),fs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class DuckingState extends PlayerState{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 将chargeTime放到了DuckingState类中")]),n(`
`),s("span",{class:"line"},[s("span",null,"  chargeTime = 0;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void handleInput(Player player, Input input) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void update(Player player) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    chargeTime_++;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (chargeTime_ > MAX_CHARGE) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      player.superBomb();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ss=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"// 由于只有一个玩家，所以可以写成玩家的全局静态，")]),n(`
`),s("span",{class:"line"},[s("span",null,"// 如果有多个玩家，且状态中保存着玩家独有的状态信息，则应当写成玩家类的实例属性,")]),n(`
`),s("span",{class:"line"},[s("span",null,"// 否则两个玩家会共享同一个状态信息")]),n(`
`),s("span",{class:"line"},[s("span",null,"enum PlayerState{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  STATE_STANDING = new standingState(),")]),n(`
`),s("span",{class:"line"},[s("span",null,"  STATE_JUMPING = new jumping_state(),")]),n(`
`),s("span",{class:"line"},[s("span",null,"  STATE_DUCKING = new ducking_state(),")]),n(`
`),s("span",{class:"line"},[s("span",null,"  STATE_DIVING = new diving_state()")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Player{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  PlayerState state_ = PlayerState.STATE_STANDING;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void handleInput(Input input) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 状态委托：把输入交个状态处理")]),n(`
`),s("span",{class:"line"},[s("span",null,"    state_.handleInput(this, input);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void update() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 状态委托：把更新交个状态来处理")]),n(`
`),s("span",{class:"line"},[s("span",null,"    state_.update(this);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),xs=s("blockquote",null,[s("p",null,"如果状态是静态的，可以直接由状态自己切换")],-1),Ts=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class DuckingState extends PlayerState{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 将chargeTime放到了DuckingState类中")]),n(`
`),s("span",{class:"line"},[s("span",null,"  chargeTime = 0;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void handleInput(Player player, Input input) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (input == PRESS_B) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 切换贴图")]),n(`
`),s("span",{class:"line"},[s("span",null,"      player.setGraphics(IMAGE_STAND);")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 直接切换状态")]),n(`
`),s("span",{class:"line"},[s("span",null,"     player.state_ = PlayerState.STATE_JUMPING;")]),n(`
`),s("span",{class:"line"},[s("span",null,"   }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void update(Player player) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Is=s("blockquote",null,[s("p",null,"如果状态是实例对象的，则需要由Player删除状态，因为状态不能删除自己")],-1),qs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class DuckingState extends PlayerState{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 将chargeTime放到了DuckingState类中")]),n(`
`),s("span",{class:"line"},[s("span",null,"  chargeTime = 0;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  PlayerState handleInput(Player player, Input input) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (input == PRESS_B) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 切换贴图")]),n(`
`),s("span",{class:"line"},[s("span",null,"      player.setGraphics(IMAGE_STAND);")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 返回要切换到的状态")]),n(`
`),s("span",{class:"line"},[s("span",null,"      return new standingState();")]),n(`
`),s("span",{class:"line"},[s("span",null,"   }")]),n(`
`),s("span",{class:"line"},[s("span",null,"   return null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void update(Player player) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Player{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  PlayerState state_ = PlayerState.STATE_STANDING;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void handleInput(Input input) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 状态委托：把输入交个状态处理")]),n(`
`),s("span",{class:"line"},[s("span",null,"    let newState = state_.handleInput(this, input);")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if(newState!=null) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      delete state_; // 删除之前的状态")]),n(`
`),s("span",{class:"line"},[s("span",null,"      state_ = newState; // 切换到新的状态")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void update() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),ws=s("p",null,"状态模式的目标是将状态的行为和数据封装到单一类中。",-1),Ns=s("p",null,"现在，当玩家改变状态时，其实也改变他的贴图。但贴图的切换是由前一个状态来完成的，这可以认为是进入该状态所需要完成的一些初始化工作，应当由状态本身来完成，否则如果有多个状态可以切换到同一个状态，那么进入这个状态就所要完成的初始化操作就将散落在别处。",-1),Ps=s("p",null,[s("strong",null,"原先的写法")],-1),Gs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class DuckingState extends PlayerState{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void handleInput(Player player, Input input) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (input == PRESS_B) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 切换贴图")]),n(`
`),s("span",{class:"line"},[s("span",null,"      player.setGraphics(IMAGE_STAND);")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 返回要切换到的状态")]),n(`
`),s("span",{class:"line"},[s("span",null,"      return new standingState();")]),n(`
`),s("span",{class:"line"},[s("span",null,"   }")]),n(`
`),s("span",{class:"line"},[s("span",null,"   return null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void update(Player player) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ms=s("p",null,[s("strong",null,"改进")],-1),Os=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class StandingState extends PLayerState")]),n(`
`),s("span",{class:"line"},[s("span",null,"{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 初始化由状态类来完成")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void enter(Player player) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    player.setGraphics(IMAGE_STAND);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void leave(){")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"};")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Player{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  PlayerState state_ = PlayerState.STATE_STANDING;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void handleInput(Input input) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    let newState = state_.handleInput(this, input);")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if(newState!=null) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      state_.leave(this);// 离开状态 (也许有用吧)")]),n(`
`),s("span",{class:"line"},[s("span",null,"      delete state_;")]),n(`
`),s("span",{class:"line"},[s("span",null,"      state_ = newState;")]),n(`
`),s("span",{class:"line"},[s("span",null,"      state_.enter(this); // 进入状态")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  void update() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Rs=p(`<h4 id="并发状态机" tabindex="-1"><a class="header-anchor" href="#并发状态机"><span>并发状态机</span></a></h4><blockquote><p>没有什么是一个状态机解决不了的问题，如果有，那就用两个。</p></blockquote><p>对于每个现有状态，我们需要另一个她持枪状态：站立，持枪站立，跳跃，持枪跳跃，多加几种武器，状态就会指数爆炸。不但增加了大量的状态，也增加了大量的冗余： 持枪和不持枪的状态是完全一样的，只是多了一点负责射击的代码。解决的办法非常简单，再加一个状态。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Player {</span></span>
<span class="line"><span>  state_: PlayerState;</span></span>
<span class="line"><span>  equipment_: PlayerState;</span></span>
<span class="line"><span>  handleInput(input: Input) {</span></span>
<span class="line"><span>    state_.handleInput(this, input);</span></span>
<span class="line"><span>    equipment_.handleInput(this, input);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">多个状态机之间的交互</p><p>状态有时需要交互。 举个例子，也许她在跳跃时不能开火，或者她在持枪时不能跳斩攻击。 为了完成这个，你可以在状态的代码中做一些粗糙的if测试其他状态来协同，虽然不够优雅，但一定有效。</p></div><h4 id="分层状态机" tabindex="-1"><a class="header-anchor" href="#分层状态机"><span>分层状态机</span></a></h4><p>分层状态机简单来说就是有父类的状态机，比如说，在地上跑，在地上跳，他们都有一个共同的状态就是在地上，而在地上需要做的更新操作可能包括:玩家受到重力的影响，受到摩擦力的影响而减速。另外可能在地上可以根据输入转换到跳起的状态。这里提到的更新操作和对输入的响应相关的代码应该只有一份而不是多份。而通过继承就可以实现这种代码的复用。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class OnGroundState {</span></span>
<span class="line"><span>  handleInput(input) {</span></span>
<span class="line"><span>    if (input == PRESS_A) {</span></span>
<span class="line"><span>      return new JumpState();</span></span>
<span class="line"><span>    } else if (input == PRESS_B) {</span></span>
<span class="line"><span>      return new SpeedUpState();</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      return null;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update() {</span></span>
<span class="line"><span>    gravity(); // 重力影响</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RunningOnGround extends OnGroundState {</span></span>
<span class="line"><span>  handleInput() {</span></span>
<span class="line"><span>    if (input == XXX) {</span></span>
<span class="line"><span>      return new SomeState();</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      // 子类无法响应的输入事件派发给父类完成</span></span>
<span class="line highlighted"><span>      return super.handleInput(input);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update() {</span></span>
<span class="line"><span>    doSomething();</span></span>
<span class="line highlighted"><span>    super.update(); // 交给父类做其所需的更新</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>不一定要使用继承，使用栈也可以实现这种效果，大概来说就是，栈顶元素是当前状态，栈的下层元素就是其直接父类，子类无法处理的输入事件需要派发给父类处理，可能和上面一样，父类也需要做状态更新。</p><p>根据我的理解，暂时可以想到这几种情况状态切换的情况：</p><ul><li>下一个状态和当前状态没有血缘关系，则弹出栈顶元素，将新状态入栈；</li><li>下一个状态是当前状态子状态，则当前状态保持不变，新状态入栈；</li><li>下一个状态是当前状态兄弟状态，则弹出当前元素，将兄弟状态入栈；</li><li>接收到了一个输入，该输入子类不能处理，派发给父级处理，父级状态根据该输入将转换到另一个状态，则将该栈中当前状态和其上所有状态全部弹出，压入新状态。</li></ul></div><p><strong>下推自动机</strong></p><blockquote><p>这是另一种使用的栈的状态机，这和上面要解决的问题完全不同。下推自动机是为了记住之前的状态，比如玩家原本的状态是站立、奔跑、跳跃、跳斩，然后切换切换到开火状态，然后松开按键，然后玩家应当回到最初的状态。</p></blockquote><p><strong>解决办法</strong></p><ul><li>笨的办法就是创建大量在状态：站立开火，奔跑开火，跳跃开火，松开按键后回到原先状态</li><li>更高效的办法是，将新状态压入栈，栈顶为当前状态，弹出栈顶为销毁状态，然后就回到了原先的状态。</li></ul><p><img src="`+x+'" alt="images/state-pushdown.png"></p><div class="hint-container tip"><p class="hint-container-title">状态机的局限性和使用场景</p><p>状态机的作用仍然是有限的，今日游戏AI可能会使用行为树和规划系统等更加高级的技术。</p><p>有限状态机在以下情况有用：</p><ul><li>你有个实体，它的行为基于一些内在状态。</li><li>状态可以被严格地分割为相对较少的不相干项目。</li><li>实体响应一系列输入或事件。</li></ul></div><div class="hint-container tip"><p class="hint-container-title">状态机其他用处</p><p>在游戏中，状态机因在AI中使用而闻名。</p><p>但状态机也常用于其他领域， 比如<strong>处理玩家输入</strong>，<strong>导航菜单界面</strong>，<strong>分析文字</strong>，网络协议以及其他异步行为。</p></div><h2 id="序列模式" tabindex="-1"><a class="header-anchor" href="#序列模式"><span>序列模式</span></a></h2><h3 id="双缓冲模式" tabindex="-1"><a class="header-anchor" href="#双缓冲模式"><span>双缓冲模式</span></a></h3><p>这一部分作者用了两个例子来说明双缓冲的作用，其中一个例子是关于计算机渲染和显示图像的，另一个例子是说在一个游戏一帧的更新之内，对象的更新可能会导致相互影响。</p><p><strong>计算机渲染和显示图像</strong></p><p>计算机显示图像的过程实际上是往显存中按字节填入RGB数据，但是显卡不会等你填完数据才把数据显示出来，显卡会按自己的节奏周期性的将显存中的数据显示到显示器上。这就导致可能你才往显存中写了一半的数据，显卡就已经把图像显示出来了。解决的办法就是使用两片显存区域。就像舞台一样，一块是前台，一块是后台。场景在后台被布置，布置好了之后把幕布拉开就成了前台，然后工作人员继续在后台工作，场景布置完毕，再次拉开幕布。这样观众就永远不会看到后台的布置过程。</p><p><strong>游戏中的角色在一帧之内相互影响</strong></p><p>其实关于这一点，在之前写的《元胞自动机----生命游戏》中遇到过同样的问题。游戏场景是在一个二维数组中，数组中的一个位置代表一个细胞，他有两个状态，生或死，此外它还有一些更新策略，如果一个细胞周围的细胞过多，那么该细胞为因资源枯竭而死，如果过少，会因无法繁殖而死，如果一个空位周围恰好有指定数量的活细胞，则该空位会诞生一个活细胞。这些规则中所描述的状态的变化其实实际上都是基于上一帧的状态而发生的。如果采用原地更新策略更新了一个细胞的状态，那么去更新下一个细胞的状态时，就会受到上一层更新所造成的影响。举例来说，第二个细胞周围细胞很多，它在下一帧中应当因资源枯竭而死去，但是在更新第一个细胞时发现，第一个细胞周围的活细胞太少了，第一个细胞因孤单而死去，更新完第一个，接着更新第二个时，发现由于因第一个细胞的死去，第二个细胞周围的活细胞个数恰到好处，第二个细胞活下来了。</p><h2 id="行为模式" tabindex="-1"><a class="header-anchor" href="#行为模式"><span>行为模式</span></a></h2><h3 id="类型对象-type-object" tabindex="-1"><a class="header-anchor" href="#类型对象-type-object"><span>类型对象（Type Object）</span></a></h3><p><strong>存粹通过继承来实现游戏中物种多样性存在的问题</strong></p><ul><li>每定义一个新物种就要编写一个新类，如果需要成百上千个物种就要编写成百上千个类。</li><li>即使你可以通过继承一个功能完备的基类来省去大量代码的编写，你仍然要编写这个类。</li><li>修改成本很高，某物种的某属性值需要改变，你不得不重新编译整个游戏。</li></ul><p><strong>通过继承来实现物种多样性的具体案例：</strong></p>',28),js=s("div",{class:"hint-container warning"},[s("p",{class:"hint-container-title"},"注意"),s("ul",null,[s("li",null,"当你需要的物种越多，需要定义的类就越多。"),s("li",null,"当你需要修改某参数，须重新编译整个游戏。")])],-1),Us=s("div",{class:"hint-container tip"},[s("p",{class:"hint-container-title"},"虽然不完美，但足够简单"),s("p",null,"其实我感觉，如果你的游戏足够简单，完全不用担心这些，这种写法足够了。")],-1),Hs=s("p",null,[s("img",{src:T,alt:""})],-1),Ls=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Monster")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  virtual"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," ~Monster"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  virtual"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," const"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," char*"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," getAttack"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"protected:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"  Monster"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," startingHealth"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},")")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  : "),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"health_"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(startingHealth)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  {}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  int"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," health_;"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}}," // 当前血值")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ws=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Dragon"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," : "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Monster")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"  Dragon"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() : "),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"Monster"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}},"230"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") {}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  virtual"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," const"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," char*"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," getAttack"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"    return"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "The dragon breathes fire!"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Troll"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," : "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Monster")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"  Troll"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() : "),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"Monster"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}},"48"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") {}")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  virtual"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," const"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," char*"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," getAttack"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"    return"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "The troll clubs you!"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Vs=s("p",null,[s("strong",null,"为类型建类（A class for a class）")],-1),Js=s("blockquote",null,[s("p",null,"为了解决上述提到的问题，这里作者给了一种方案，我简单总结为："),s("ul",null,[s("li",null,"创建一个怪物类，让其拥有大量属性和方法；"),s("li",null,"创建一个物种类，用于加载配置文件；配置的参数不同，代表的物种就不同。"),s("li",null,"怪物类需要通过物种类来初始化其参数，使用不同的物种类，就能得到不同物种的怪物。"),s("li",null,"这样就仅通过两个类实现了不同物种的怪物。")])],-1),Xs=s("p",null,[s("img",{src:I,alt:"images/type-object-breed.png"})],-1),Ys=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"// 物种（类型对象）")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Species {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(health: number, attack: AttackType) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.health = health;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.attack = attack;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getHealth() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return this.health;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getAttack() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return this.attack;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"// 怪物")]),n(`
`),s("span",{class:"line"},[s("span",null,"class Monster {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  species: Species;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(species: Species) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.health = species.getHealth();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.species = species;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getAttack() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return this.species.getAttack();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Ks=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"// 现在这样使用")]),n(`
`),s("span",{class:"line"},[s("span",null,"Monster monster = new Monster(someBreed);")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),zs=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Breed {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 作者称：`That’s our “constructor” factory method.`")]),n(`
`),s("span",{class:"line"},[s("span",null,"  newMonster() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return new Monster(this);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 其实我感觉物种类不需要实例对象，他应该只负责加载物种配置文件，")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 把参数存到静态变量上，所以方法也应该写成静态的：")]),n(`
`),s("span",{class:"line"},[s("span",null,"  static newMonster() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return new Monster(Breed);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 不对，这样加载第二个配置文件不就把第一个给覆盖了吗？")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Zs=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// 这里其实是用了c++的概念，难以翻译成ts,作者其实就是想让Monster只能被Breed类实例化。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Monster"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 表示Breed是Monster的友元。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  friend"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},": "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," Breed"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 私有化构造器，使得只有友元能调用构造器。")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  private:"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," Monster"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(Breed breed){}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  private:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," Breed breed;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Qs=s("p",null,"其实没太理解这部分，似乎Monster可以直接舍弃掉？直接由Breed加载配置，然后实例化？",-1),$s=s("p",null,"不对，这样每实例化一个Breed就都要加载一次配置文件啊！",-1),sn=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"// 现在只有某个物种的实例对象能创建Monster")]),n(`
`),s("span",{class:"line"},[s("span",null,"Monster monster = someBreed.newMonster();")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),nn=p('<div class="hint-container tip"><p class="hint-container-title">优点</p><p>如果你的游戏需要支持资料包，而资料包有新的怪物品种，这种模式可以很好的支持</p><ul><li>可能有未知的类型将在后续添加</li><li>不必改变代码并重新编译</li></ul></div><div class="hint-container tip"><p class="hint-container-title">缺点</p><ul><li>现在游戏中只有Monster的实例对象，在开发中若想则必须手动追踪一个物种。</li><li>更难为每个物种定义行为， <ul><li>因为你写到配置文件中的只能字符串，只能预定义一些行为，然后填写行为的id。</li><li>如果需要让不同的物种行为是不同的AI,也只能预定义一些AI,然后填写其编号。</li><li>否则考虑行为模式中的解释器和字节码模式。</li></ul></li></ul></div><p><strong>两种实现继承的方法</strong></p>',3),an=s("blockquote",null,[s("p",null,"这种方式使得运行过程中，父类物种发生了改变，子类中也会同步的改变。缺点显然就是效率会低一些。")],-1),ln=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Species {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(parent: Species, health: number, attack: AttackType) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.parent = parent;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.health = health;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.attack = attack;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 下面的两种写法其实是一个意思。")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getHealth() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 自己没有该属性，但有父类，就问父类要")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (this.health == undefined && this.parent) return this.parent.getHealth();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    else return this.health;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getAttack() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 没有父类，或者拥有该属性，就用自己的")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (!this.parent || this.attack) return this.attack;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    else return this.parent.getAttack();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),en=s("blockquote",null,[s("p",null,"这种方式使得配置文件中没有为子类定义的属性，子类会在初始化时就自动的去从父类中寻找值来初始化，且只会寻找一次。")],-1),pn=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Species {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(parent: Species, health: number, attack: AttackType) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 优先用传给自己的值，否则到父级上去获取。")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.health = health || parent?.getHealth();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.attack = attack || parent?.getAttack();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 现在不再需要给父品种字段了,因为已经拷贝了它的所有属性。")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // this.parent = parent;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getHealth() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return this.health;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getAttack() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return this.attack;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),tn=p(`<h4 id="从json配置中加载并构建物种" tabindex="-1"><a class="header-anchor" href="#从json配置中加载并构建物种"><span>从JSON配置中加载并构建物种</span></a></h4><p>假设游戏引擎从品种的JSON文件加载设置然后创建类型。它看上去是这样的：</p><p>这描述三个物种之间的继承关系，由于派生类的血量为0，所以其血量会从父类继承，这也意味这改变父类的血量将影响到所有子类的血量，这就非常完美。</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">{</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;Troll&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: {</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">    &quot;health&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#B5CEA8;">25</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">    &quot;attack&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;The troll hits you!&quot;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">  },</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;Troll Archer&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: {</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">    &quot;parent&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;Troll&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">    &quot;health&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">    &quot;attack&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;The troll archer fires an arrow!&quot;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">  },</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  &quot;Troll Wizard&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: {</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">    &quot;parent&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;Troll&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">// 这表示父类是谁</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">    &quot;health&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#B5CEA8;">0</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">// 这表示该字段的值将从父类继承</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">    &quot;attack&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;The troll wizard casts a spell on you!&quot;</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">  }</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>尝试实现</strong></p><blockquote><p>以下是我尝试在ts中实现的根据JSON字符串自动构建物种实例的案例，实现了:</p><ul><li>通过SpeciesFactory来加载配置文件</li><li>通过SpeciesFactory来构建物种</li><li>构建物种时如果需要继承某个父类，则需要预先构建其父类。</li></ul></blockquote>`,6),dn=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"// 模拟的JSON字符串")]),n(`
`),s("span",{class:"line"},[s("span",null,"export const json = JSON.stringify([")]),n(`
`),s("span",{class:"line"},[s("span",null,"  {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    name: "Troll",')]),n(`
`),s("span",{class:"line"},[s("span",null,"    health: 25,")]),n(`
`),s("span",{class:"line"},[s("span",null,'    attack_type: "攻击方式1",')]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    name: "Troll_Archer",')]),n(`
`),s("span",{class:"line"},[s("span",null,'    parent_name: "Troll",')]),n(`
`),s("span",{class:"line"},[s("span",null,"    health: 123,")]),n(`
`),s("span",{class:"line"},[s("span",null,'    // attack_type: "攻击方式2",')]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"  {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    name: "Troll_Wizard",')]),n(`
`),s("span",{class:"line"},[s("span",null,'    parent_name: "Troll",')]),n(`
`),s("span",{class:"line"},[s("span",null,"    health: 111,")]),n(`
`),s("span",{class:"line"},[s("span",null,'    attack_type: "攻击方式3",')]),n(`
`),s("span",{class:"line"},[s("span",null,"  },")]),n(`
`),s("span",{class:"line"},[s("span",null,"]);")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),rn=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,'import { Monster } from "./Monster";')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"// 第一种实现：在初始化时从父类中获取将子类未初始化的属性")]),n(`
`),s("span",{class:"line"},[s("span",null,"export class Species {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  name!: string;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  parent_name: string | undefined;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  parent: Species | null = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  health: number | null = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  attack_type: number | null = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(parent: Species | null, config: Species) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    Object.assign(this, config); // 把配置中属性加载到当前对象上")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 如果可以继承")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (parent) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      for (let key of Object.keys(this)) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        // 寻找未被初始化的字段并通过父类继承")]),n(`
`),s("span",{class:"line"},[s("span",null,"        // @ts-ignore")]),n(`
`),s("span",{class:"line"},[s("span",null,"        if (this[key] == null && !(this[key] instanceof Function)) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"          // @ts-ignore")]),n(`
`),s("span",{class:"line"},[s("span",null,"          this[key] = parent[key];")]),n(`
`),s("span",{class:"line"},[s("span",null,"        }")]),n(`
`),s("span",{class:"line"},[s("span",null,"      }")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  newMonster() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return new Monster(this);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getHealth() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return this.health;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  attack() {")]),n(`
`),s("span",{class:"line"},[s("span",null,'    console.log("attack:" + this.attack_type);')]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span",null,"// 第二种实现：在初始化时直接将子类未初始化的属性从父类中获取")]),n(`
`),s("span",{class:"line"},[s("span",null,"export class Species2 {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  name!: string;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  parent_name: string | undefined;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  parent: Species | null = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  health: number | null = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  attack_type: number | null = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(parent: Species | null, config: Species) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    Object.assign(this, config); // 把配置中属性加载到当前对象上")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.parent = parent; // 记录父级")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  newMonster() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return new Monster(this);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getHealth() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 当子类没有改属性则从父类寻找，如果父类没有则至少返回一个数值")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return this.health || this.parent?.getHealth() || 0;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  attack() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (this.attack_type) {")]),n(`
`),s("span",{class:"line"},[s("span",null,'      console.log("attack:" + this.attack_type);')]),n(`
`),s("span",{class:"line"},[s("span",null,"    } else {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      this.parent?.attack();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),cn=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,'import { Species } from "./Species";')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"export class SpeciesFactory {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ctx = new Map<string, Species>();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  cfg = new Map<string, Species>();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(config: string) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 解析配置文件，缓存配置")]),n(`
`),s("span",{class:"line"},[s("span",null,"    let list = JSON.parse(config) as Species[];")]),n(`
`),s("span",{class:"line"},[s("span",null,"    list.forEach((item) => this.cfg.set(item.name, item));")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  build(species: string): Species {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 先判断该物种是否已经构建，有则直接返回")]),n(`
`),s("span",{class:"line"},[s("span",null,"    if (this.ctx.has(species)) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      return this.ctx.get(species) as Species;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    } else {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 否则根据物种名获得其配置，如果需要继承自其父级则需要先构建其父级。")]),n(`
`),s("span",{class:"line"},[s("span",null,"      let cfg = this.cfg.get(species);")]),n(`
`),s("span",{class:"line"},[s("span",null,"      if (!cfg) throw new SyntaxError(`unknow species's name:${species}`);")]),n(`
`),s("span",{class:"line"},[s("span",null,"      let parent: Species | null = null;")]),n(`
`),s("span",{class:"line"},[s("span",null,"      if (cfg.parent_name) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        parent = this.build(cfg.parent_name);")]),n(`
`),s("span",{class:"line"},[s("span",null,"      }")]),n(`
`),s("span",{class:"line"},[s("span",null,"      return new Species(parent, cfg);")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),hn=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,'import { Species } from "./Species";')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"export class Monster {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  species: Species;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  constructor(species: Species) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.species = species;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    Object.assign(this, species);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  getHealth() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return this.species.getHealth();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  attack() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    this.species.attack();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  toString() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return `Monster${JSON.stringify(this.species, undefined, 2)}`;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),un=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,'import { json } from "./config";')]),n(`
`),s("span",{class:"line"},[s("span",null,'import { SpeciesFactory } from "./SpeciesFactory";')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"enum SpeciesType {")]),n(`
`),s("span",{class:"line"},[s("span",null,'  Troll = "Troll",')]),n(`
`),s("span",{class:"line"},[s("span",null,'  Troll_Archer = "Troll_Archer",')]),n(`
`),s("span",{class:"line"},[s("span",null,'  Troll_Wizard = "Troll_Wizard",')]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"function main() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 加载配置文件，初始化物种构建器")]),n(`
`),s("span",{class:"line"},[s("span",null,"  let speciesFactory = new SpeciesFactory(json);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 构建物种（会自动处理物种间的继承）")]),n(`
`),s("span",{class:"line"},[s("span",null,"  let Species1 = speciesFactory.build(SpeciesType.Troll);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  let Species2 = speciesFactory.build(SpeciesType.Troll_Archer);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  let Species3 = speciesFactory.build(SpeciesType.Troll_Wizard);")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 通过物种创建怪物")]),n(`
`),s("span",{class:"line"},[s("span",null,"  let monster1 = Species1.newMonster();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  let monster2 = Species2.newMonster();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  let monster3 = Species3.newMonster();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 打印输出")]),n(`
`),s("span",{class:"line"},[s("span",null,"  console.log(monster1.toString());")]),n(`
`),s("span",{class:"line"},[s("span",null,"  monster1.attack();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  console.log(monster2.toString());")]),n(`
`),s("span",{class:"line"},[s("span",null,"  monster2.attack();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  console.log(monster3.toString());")]),n(`
`),s("span",{class:"line"},[s("span",null,"  monster3.attack();")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"main();")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),kn=s("div",{class:"language-sh line-numbers-mode","data-highlighter":"shiki","data-ext":"sh","data-title":"sh",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"Monster"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "parent"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," null,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "health"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," 25,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "attack_type"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "攻击方式1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "name"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "Troll"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"attack:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"攻击方式1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"Monster"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "parent"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'    "parent"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," null,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'    "health"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," 25,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'    "attack_type"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "攻击方式1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'    "name"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "Troll"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "health"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," 123,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "attack_type"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "攻击方式1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "name"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "Troll_Archer",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "parent_name"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "Troll"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"attack:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"攻击方式1")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"Monster"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},"{")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "parent"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'    "parent"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," null,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'    "health"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," 25,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'    "attack_type"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "攻击方式1",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'    "name"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "Troll"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "health"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}}," 111,")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "attack_type"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "攻击方式3",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "name"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "Troll_Wizard",')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},'  "parent_name"'),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#DCDCAA"}},":"),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "Troll"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"attack:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"攻击方式3")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),vn=p(`<h2 id="解耦模式" tabindex="-1"><a class="header-anchor" href="#解耦模式"><span>解耦模式</span></a></h2><h3 id="组件模式" tabindex="-1"><a class="header-anchor" href="#组件模式"><span>组件模式</span></a></h3><p>这里的组件模式，我简单总结为：</p><p>为了避免一个函数中太多不相关的部分（物理、渲染、声音等）交织在一起，可以将这些部分拆分为组件，分别管理。</p><p><strong>比如</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Hero {</span></span>
<span class="line"><span>  update() {</span></span>
<span class="line"><span>    // 物理，渲染，声音....在此处产生了耦合</span></span>
<span class="line"><span>    // 这使得理解代码变得困难</span></span>
<span class="line"><span>    // 也使得某些函数的实现不能轻易修改</span></span>
<span class="line"><span>    if (collidingWithFloor() &amp;&amp; getRenderState() != INVISIBLE) {</span></span>
<span class="line"><span>      playSound(HIT_FLOOR);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件模式</strong></p><ul><li>优点 <ul><li>组件现在可以复用到其他的类中，</li><li>组件甚至可以通过继承来实现更强大的功能。</li></ul></li><li>组合优于继承。 <ul><li>考虑一个案例：</li><li>装饰：玩家可见，不可交互的部分。灌木 ，杂物。<code>渲染组件</code></li><li>区域：看不见，但可互动。<code>物理组件</code></li><li>道具：可见，可交互。箱子，树木。<code>渲染组件 + 物理组件</code></li></ul></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// GameObject基类，包含位置和方向之类的通用部分。</span></span>
<span class="line"><span>class GameObject {</span></span>
<span class="line"><span>  pos: Vector2D;</span></span>
<span class="line"><span>  input: InputComponent | null;</span></span>
<span class="line"><span>  sounds: SoundsComponent | null;</span></span>
<span class="line"><span>  physics: PhysicsComponent | null;</span></span>
<span class="line"><span>  graphics: GraphicsComponent | null;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 物理组件</span></span>
<span class="line"><span>class PhysicsComponent {</span></span>
<span class="line"><span>  update(obj: GameObject) {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 渲染组件</span></span>
<span class="line"><span>class GraphicsComponent {</span></span>
<span class="line"><span>  update(obj: GameObject) {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 音效组件</span></span>
<span class="line"><span>class SoundsComponent {</span></span>
<span class="line"><span>  update(obj: GameObject) {}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 输入组件</span></span>
<span class="line"><span>class InputComponent {</span></span>
<span class="line"><span>  update(obj: GameObject) {}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">复杂度的提升和性能的降低</p><ul><li>对象的实例化变复杂了，组件间的沟通变得复杂了</li><li>对于大型游戏，为了解耦和重用，这种付出是值得的</li><li>使用这种模式导致多了一层函数调用，这将导致性能降低</li><li>要防止过度设计，要考虑是否真的需要这种模式</li></ul></div><p><strong>伪代码案例</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Hero extends GameObject {</span></span>
<span class="line"><span>  pos: Vendor2d; // 位置</span></span>
<span class="line"><span>  dir: Vendor2d; // 方向</span></span>
<span class="line"><span>  vel: Vendor2d; // 速度</span></span>
<span class="line"><span>  // 面向接口编程</span></span>
<span class="line"><span>  input: InputComponent;</span></span>
<span class="line"><span>  physics = new PhysicsComponent();</span></span>
<span class="line"><span>  graphics = new GraphicsComponent();</span></span>
<span class="line"><span>  comstructor(input: InputComponent) {</span></span>
<span class="line"><span>    // 这使得双人游戏、演示模式可以很好的实现</span></span>
<span class="line"><span>    this.input = input;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(world: World, graphics: Graphics, dt: number) {</span></span>
<span class="line"><span>    // 这样就防止了不同部分的代码全部挤在这里的update方法里。</span></span>
<span class="line"><span>    input.update(this);</span></span>
<span class="line"><span>    physics.update(this, world, dt);</span></span>
<span class="line"><span>    graphics.update(this, graphics);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class HeroPhysicsComponent extends PhysicsComponent {</span></span>
<span class="line"><span>  volume: number;</span></span>
<span class="line"><span>  update(hero: Hero, world: World, dt: number) {</span></span>
<span class="line"><span>    // 获取当前位置的速度衰减系数</span></span>
<span class="line"><span>    let k = world.getDecFactor(hero.pos);</span></span>
<span class="line"><span>    // 速度衰减 v(t) = v(t0) * e^(-kt)</span></span>
<span class="line"><span>    this.vel.mul(Math.pow(Math.E, -1 * k * dt));</span></span>
<span class="line"><span>    // 计算位移</span></span>
<span class="line"><span>    hero.pos.add(hero.vel.mut(dt));</span></span>
<span class="line"><span>    // 处理碰撞</span></span>
<span class="line"><span>    world.resolveCollision(volume, hero.pos, hero.velocity);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class HeroGraphicsComponent extends GraphicsComponent {</span></span>
<span class="line"><span>  sprites = [spriteStand, spriteWalkLeft, spriteWalkRight];</span></span>
<span class="line"><span>  update(hero: Hero, ctx: Graphics) {</span></span>
<span class="line"><span>    let sprite = sprites[0];</span></span>
<span class="line"><span>    if (hero.vel.len() &lt; 0) {</span></span>
<span class="line"><span>      sprite = sprites[1];</span></span>
<span class="line"><span>    } else if (hero.vel.len() &gt; 0) {</span></span>
<span class="line"><span>      sprite = sprites[2];</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ctx.draw(sprite, hero.pos);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class HeroInputComponent extends InputComponent {</span></span>
<span class="line"><span>  WALK_ACCELERATION = 1;</span></span>
<span class="line"><span>  update(hero: Hero) {</span></span>
<span class="line"><span>    switch (Controller.getJoystickDirection()) {</span></span>
<span class="line"><span>      case DIR_LEFT:</span></span>
<span class="line"><span>        hero.vel.add(-WALK_ACCELERATION);</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case DIR_RIGHT:</span></span>
<span class="line"><span>        hero.vel.add(+WALK_ACCELERATION);</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>演示模式</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 玩家操作</span></span>
<span class="line"><span>hero = new Hero(new HeroInputComponent());</span></span>
<span class="line"><span>// 演示模式</span></span>
<span class="line"><span>hero = new Hero(new DemoInputComponent());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删掉Hero</strong></p><p>上述写法显然使得Hero类成了一个空壳子，这使得移除这个类成为可能。</p><p>另外，就像在上一章“类型对象”中说讨论的那样，移除类有很多优点，可以使得游戏从由代码驱动转变为由数据驱动。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class GameObject {</span></span>
<span class="line"><span>  pos: Vendor2d; // 位置</span></span>
<span class="line"><span>  dir: Vendor2d; // 方向</span></span>
<span class="line"><span>  vel: Vendor2d; // 速度</span></span>
<span class="line"><span>  input: InputComponent;</span></span>
<span class="line"><span>  physics: PhysicsComponent;</span></span>
<span class="line"><span>  graphics: GraphicsComponent;</span></span>
<span class="line"><span>  private comstructor(</span></span>
<span class="line"><span>    input: InputComponent,</span></span>
<span class="line"><span>    physics: PhysicsComponent,</span></span>
<span class="line"><span>    graphics: GraphicsComponent,</span></span>
<span class="line"><span>  ) {</span></span>
<span class="line"><span>    this.input = input;</span></span>
<span class="line"><span>    this.physics = physics;</span></span>
<span class="line"><span>    this.graphics = graphics;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(world: World, graphics: Graphics, dt: number) {</span></span>
<span class="line"><span>    input.update(this);</span></span>
<span class="line"><span>    physics.update(this, world, dt);</span></span>
<span class="line"><span>    graphics.update(this, graphics);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class GameObject {</span></span>
<span class="line"><span>  // 这样只要传入相应的组件，就能创建游戏对象。</span></span>
<span class="line"><span>  static creat(</span></span>
<span class="line"><span>    input: InputComponent,</span></span>
<span class="line"><span>    physics: PhysicsComponent,</span></span>
<span class="line"><span>    graphics: GraphicsComponent,</span></span>
<span class="line"><span>  ) {</span></span>
<span class="line"><span>    return new GameObject(input, physics, graphics);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>组件初始化的时机</strong></p><ul><li>一旦选择将单个对象拆分成多个分离的组件，就需要考虑什么时候来初始化组件的问题。</li><li>有类自己初始化自己所需的组件。 <ul><li>这保证了类一定能拿到自己所需的组件</li><li>但如果要替换其中的组件需要做额外的操作。</li></ul></li><li>由外部初始化类的组件 <ul><li>这使得对象更灵活，可以通过多种不同的组合方式得到不同特性的对象。</li><li>对象和具体的类型解耦了，因为此时对象的组件一定是面向接口编程的。</li></ul></li></ul><p><strong>几种组件间的通信方式</strong></p><blockquote><p>拆分组件前，这些组件属于一个整体，就已经说明了他们可能需要互相协作。</p></blockquote><ol><li>共享容器对象的状态。 <ul><li>比如：输入处理组件修改角色的速度，物理组件根据速度重新计算位置。</li><li>优点：<strong>保持了组件之间的解耦</strong>，输入组件和物理组件都不知道互相的存在。</li><li>缺点： <ul><li><strong>浪费内存空间</strong>：因为这使得只要任何两组件间需要交流，就需要在父组件中新定义一个状态，如果组件是可以替换的话，甚至有可能使得存在一个状态但却不被任何组件使用的情况。</li><li><strong>依赖执行顺序</strong>：假设类中存在一个组件去修改某个状态，称之为状态生产者，有两个组件读取该状态，称为状态消耗者。在一帧之内的更新中，如果消耗状态组件的更新函数在生产状态的之后调用，那么在这一帧之内，如果第一个状态消耗组件在消耗状态后初始化状态，那么第二个状态消耗组件就不能接收到这条消息。</li></ul></li><li>使用场景：对于容器中本身就必然存在的状态就可以使用这种方式，比如位置，速度，方向。</li></ul></li><li><strong>让组件互相引用</strong><ul><li>比如，渲染组件在更新时需要询问物理组件玩家是否在地面，那就在渲染组件初始化时，直接把物理组件传给他（有时不用传，如果物理组件在容器对象上，组件可以获取到容器对象。），然后直接调用物理组件上的方法来询问。</li><li>优点，简单，高效</li><li>缺点，使得组件之间产生了耦合。</li><li>使用场景：对于动画和渲染，输入和AI,物理和粒子，这些组件虽然被拆分为单独的部分，但联系仍然紧密，互相引用会比较方便。</li></ul></li><li><strong>发送消息</strong><ul><li>在容器类中建小的消息系统，允许组件相互发送消息。</li><li>优点： <ul><li>同级组件解耦：这里所谓的解耦是相对于上面说的&quot;让组件相互引用&quot;的方法。</li><li>使得容器类简洁：所谓的简洁，也是相对于上面所说的&quot;共享容器对象的状态&quot;的方法</li></ul></li><li>使用场景：对于不重要的通信很有用，比如物理组件、输入组件通知音效组件播放音效。</li></ul></li></ol><p><strong>发送消息</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// class GameObject{</span></span>
<span class="line"><span>class ContainerObject {</span></span>
<span class="line"><span>  components = new Array&lt;Component&gt;();</span></span>
<span class="line"><span>  // 像所有组件发送消息</span></span>
<span class="line"><span>  boadcast(msg: Message | number) {</span></span>
<span class="line"><span>    this.components.forEach((comp) =&gt; comp.receive(msg));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface Component {</span></span>
<span class="line"><span>  void receive(msg: Message | number);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>我猜应该这么使用：</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Hero extends ContainerObject {</span></span>
<span class="line"><span>  components = [new HeroPhysicsComponent(), new HeroGraphicsComponent()];</span></span>
<span class="line"><span>  update(ctx: Context) {</span></span>
<span class="line"><span>    this.components.forEach((comp) =&gt; comp.update(this, ctx));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class HeroPhysicsComponent {</span></span>
<span class="line"><span>  update(hero: Hero, physics: PhysicsEngin) {</span></span>
<span class="line"><span>    if (physics.collision(hero)) {</span></span>
<span class="line"><span>      // 通知组件，发生了碰撞</span></span>
<span class="line"><span>      hero.boadcast(COLLISION);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class HeroGraphicsComponent {</span></span>
<span class="line"><span>  update(){</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  void receive(msg: Message | number){</span></span>
<span class="line"><span>    switch(msg){</span></span>
<span class="line"><span>      // 收到消息发生了碰撞</span></span>
<span class="line"><span>      case COLLISION:</span></span>
<span class="line"><span>        // 切换动画</span></span>
<span class="line"><span>        sprite = COLLISION_SPRITE;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件队列" tabindex="-1"><a class="header-anchor" href="#事件队列"><span>事件队列</span></a></h3><div class="hint-container tip"><p class="hint-container-title">总结</p><ul><li>其本质为观察者模式的异步实现。类似与go语言中的“channel通信”</li><li>实现方式：添加一个队列</li><li>要点：不要让程序的其他部分直接操作队列</li><li>优点： <ul><li>可以方便的拆分到单独的线程</li><li>解决了同步函数阻塞游戏循环的问题。</li></ul></li></ul></div><p><strong>为什么需要事件队列？</strong></p><blockquote><p>或者说，直接调用函数播放声音有什么问题？</p></blockquote><ul><li><strong>同步阻塞和波形叠加：</strong><ul><li>如果播放音频的操作是同步的（就是说播放完毕前函数不会返回），则会导致阻塞，使得游戏卡住</li><li>如果播放音频不是同步的，这也存在两个声音在一帧之内同时播放导致波形叠加，声音刺耳的问题。</li></ul></li><li><strong>线程安全问题：</strong><ul><li>一般来说游戏引擎在多核处理器上运行时会存在渲染线程、物理线程等的多个线程，</li><li>这些线程可能同时调用该函数，但该函数是没有锁的，无法保证执行顺序，可能造成潜在的问题；</li><li>但如果单独为声音分配一个线程，这又可能导致，在其他线程都忙于处理各种任务时，音频线程可能会无所作为，无法充分利用多核机器的优势。</li></ul></li><li><strong>立即执行在多线程环境中存在的问题：</strong><ul><li>调用者准备好调用声音播放函数了，但是被调用者可能没有准备好。</li><li>比如说正在被另一个线程所调用。如果有锁，则当前线程需要等待，如果没锁，则会造成线程安全问题。</li></ul></li></ul><p><strong>不使用事件队列，直接调用函数播放声音的案例</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Audio {</span></span>
<span class="line"><span>  static PlaySound(id: SoundId, volume: number) {</span></span>
<span class="line"><span>    let resource: ResourceId = loadSound(id);</span></span>
<span class="line"><span>    let channel: number = findOpenChannel();</span></span>
<span class="line"><span>    if (channel == -1) return;</span></span>
<span class="line"><span>    startSound(resource, channel, volume);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Menu {</span></span>
<span class="line"><span>  onSelect(index: number) {</span></span>
<span class="line"><span>    Audio.playSound(SOUND_BLOOP, VOL_MAX);</span></span>
<span class="line"><span>    // ......</span></span>
<span class="line"><span>    // ...</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update() {</span></span>
<span class="line"><span>    if (鼠标移入选项框) {</span></span>
<span class="line"><span>      this.onSelect();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>事件队列示例代码</strong></p><ul><li>原文中使用固定长度数组实现了一个循环消息队列，这个不难；</li><li>但我这里直接使用js的列表了，因为方便和清晰明了。</li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Audio {</span></span>
<span class="line"><span>  queue = new Array&lt;PlayMessage&gt;();</span></span>
<span class="line"><span>  playSound(id: SoundId, volume: int) {</span></span>
<span class="line"><span>    queue.enQueue({ id, volume }); // 入队</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update() {</span></span>
<span class="line"><span>    if (queue.length == 0) return;</span></span>
<span class="line"><span>    let playMessage = queue.deQueue(); // 出队</span></span>
<span class="line"><span>    // 播放</span></span>
<span class="line"><span>    play(playMessage.id);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>合并请求:防止声音波形叠加</strong></p><ul><li>注意这里是在请求入队时合并，而不是处理时。 <ul><li>在入队时判断则只需要判断入队消息是否和其他重复，时间复杂度O(N)</li><li>在处理时判断，需要判断所有消息是否两两不重复，时间复杂度O(N^2)</li></ul></li></ul><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Audio {</span></span>
<span class="line"><span>  queue = new Array&lt;PlayMessage&gt;();</span></span>
<span class="line"><span>  playSound(id: SoundId, volume: int) {</span></span>
<span class="line"><span>    // 根据id去重，防止声音波形叠加</span></span>
<span class="line"><span>    // 当有两个请求播放同一音频时，将它们合并成只保留声音最大的请求。</span></span>
<span class="line"><span>    for (let idx = 0; i &lt; queue.lenght; idx++) {</span></span>
<span class="line"><span>      let item = queue[idx];</span></span>
<span class="line"><span>      if (item.id == id) {</span></span>
<span class="line"><span>        item.volume = max(item.volume, volume);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    queue.enQueue({ id, volume }); // 入队</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><ul><li>如果队列很长，入队操作会因合并操作导致耗时较长， <ul><li>解决方法： <ul><li>可能在update中合并较为合理</li><li>可以通过其他数据结构，比如hashMap来优化，或者双链表+Map来优化。</li></ul></li></ul></li><li>另外： <ul><li>队列长度、请求的处理速度，会影响合并的频率，</li><li>因为请求速度慢就会导致消息堆积在队列中，队列过长就允许了过多的消息，就有更多的合并机会，更高的合并频率。</li><li>所以这个参数可能需要合理的设置</li></ul></li></ul></div><p><strong>中心事件队列</strong></p><ul><li>就是一个全局的消息队列</li><li>好处是，游戏中所有对象都能收到消息</li><li>坏处是，尽管队列被作为一个属性封装在一个类中，但它仍然是全局可访问的，全局对象存在各种问题，比如线程安全。</li></ul><p><strong>事件队列中的状态可能是滞后的</strong></p><ul><li><strong>事件消息中应该包含足够多的信息</strong></li><li>如果游戏中事件发生的非常频繁，这就可能导致事件的积压；当被积压的消息被处理时，游戏中各种状态可能已经改变了，这使得消息是滞后于实际游戏状态的。</li><li>事件消息中应该尽可能提供多的信息，比如怪物被击杀时，消息中应包含怪物的各种属性，以便在&quot;计算处理经验加成的系统&quot;收到消息时可以直接根据这些属性来计算，否则就需要再从新去找到那个怪物单位，但是由于消息的滞后性，处理消息时怪物可能已经消失了。</li></ul><p><strong>消息闭环</strong></p><ul><li>如果A发生消息给B,B处理消息后又发送消息给A,A收到消息后又向B响应，这就会导致消息闭环。</li><li>如果消息是同步的，这会造成栈溢出。</li><li>如果消息是异步的，游戏仍然能运行。</li><li>避免消息闭环的发生，就要避免在处理消息时发送消息。</li></ul><p><strong>将音频处理拆分到单独的线程</strong></p><ul><li>当前消息的发送者和消息的接受处理者在同一个线程，如果播放音频的API是同步的，这将导致游戏主循环阻塞卡顿。</li><li>所以，也是一般来说，音频处理会被拆分到一个单独的线程。</li><li>目前，在这种事件队列的设计模式下，可以比较轻松的完成。因为： <ol><li><strong>请求播放音频的代码和实际执行播放音频的代码是分离的。</strong> A线程调用请求播放音频不用担心被阻塞，因为播放音频的代码在B线程被执行。</li><li><strong>队列充当了缓冲区</strong>，队列的存在帮助管理并发问题，确保请求的有序处理。</li><li><strong>队列是和程序的其他部分隔离的</strong></li></ol></li><li>唯一需要做的操作可能就是：<strong>给队列加锁</strong>，因为可能有多个线程同时调用请求播放音频的代码，这会操作队列，音频线程也可能在这时去读取队列,这就需要保证线程安全。</li></ul><h3 id="服务定位器" tabindex="-1"><a class="header-anchor" href="#服务定位器"><span>服务定位器</span></a></h3><p><strong>为什么需要服务定位器？</strong></p><blockquote><p>传统方式访问服务点的缺点?</p></blockquote><p>考虑音频作为例子。 它要接触一大堆游戏系统。</p><ul><li>滚石撞击地面（物理）。</li><li>NPC开枪（AI）。</li><li>用户选择菜单项时的反馈（UI）。</li></ul><p>每处都需要用像下面这样的东西调用音频系统：</p><div class="language-c++ line-numbers-mode" data-highlighter="shiki" data-ext="c++" data-title="c++" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">// 使用静态函数</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#E6E6E6;">AudioSystem</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">::</span><span style="--shiki-light:#B392F0;--shiki-dark:#DCDCAA;">playSound</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">(VERY_LOUD_BANG);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">// 使用单例</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#E6E6E6;">AudioSystem</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">::</span><span style="--shiki-light:#B392F0;--shiki-dark:#DCDCAA;">instance</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">()-&gt;</span><span style="--shiki-light:#B392F0;--shiki-dark:#DCDCAA;">playSound</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">(VERY_LOUD_BANG);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个调用音频系统的游戏部分直接引用了具体的AudioSystem类，和依赖访问它的机制(静态类or单例?)。</p><p>需要耦合到某些东西上来播放声音， 但是<strong>直接接触到具体的音频实现，就好像给了一百个陌生人你家的地址，只是为了让他们在门口放一封信。 这不仅仅是隐私问题，在你搬家后，需要告诉每个人新地址是个更加痛苦的问题。</strong></p><p><strong>模式</strong></p><ul><li>服务 类定义了一堆操作的抽象接口。</li><li>具体的服务提供者实现这个接口。</li><li>分离的服务定位器提供了通过查询获取服务的方法，同时隐藏了服务提供者的具体细节和定位它的过程。</li></ul><p><strong>案例代码</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>interface Audio {</span></span>
<span class="line"><span>  playSound(soundID: int);</span></span>
<span class="line"><span>  stopSound(soundID: int);</span></span>
<span class="line"><span>  stopAllSounds();</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class NullAudio implements Audio {</span></span>
<span class="line"><span>  playSound(soundID: int) {</span></span>
<span class="line"><span>    /* 什么也不做 */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  stopSound(soundID: int) {</span></span>
<span class="line"><span>    /* 什么也不做 */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  stopAllSounds() {</span></span>
<span class="line"><span>    /* 什么也不做 */</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class ConsoleAudio implements Audio {</span></span>
<span class="line"><span>  playSound(soundID: int) {</span></span>
<span class="line"><span>    // 使用主机音频API播放声音……</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  stopSound(soundID: int) {</span></span>
<span class="line"><span>    // 使用主机音频API停止声音……</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  stopAllSounds() {</span></span>
<span class="line"><span>    // 使用主机音频API停止所有声音……</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Locator {</span></span>
<span class="line"><span>  static service = new NullAudio();</span></span>
<span class="line"><span>  static getAudio() {</span></span>
<span class="line"><span>    return service;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  static provide(service: Audio) {</span></span>
<span class="line"><span>    // 防止service为空</span></span>
<span class="line"><span>    this.service = service || new NullAudio();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>class Game{</span></span>
<span class="line"><span>  init(){</span></span>
<span class="line"><span>    if(isDevMode){</span></span>
<span class="line"><span>      Locator::provide(new ConsoleAudio());</span></span>
<span class="line"><span>    }else{</span></span>
<span class="line"><span>      Locator::provide(new RealAudio());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Locator::getAudio().playSound(GAME_INIT_DONE);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="优化模式" tabindex="-1"><a class="header-anchor" href="#优化模式"><span>优化模式</span></a></h2><h3 id="数据局部性" tabindex="-1"><a class="header-anchor" href="#数据局部性"><span>数据局部性</span></a></h3><ul><li><strong>目的：</strong> 加速内存读取</li><li><strong>方法：</strong> 通过合理组织数据，充分利用CPU缓存</li><li><strong>原因：</strong> 芯片速度递增，但RAM读取速度增长缓慢，导致数据获取成为性能瓶颈。</li></ul><p><strong>CPU和RAM性能极度不匹配的问题：</strong></p><ul><li>从1980年到2010年，CPU速度迅速增长，而RAM速度增长相对缓慢。</li><li>硬件巨头未强调数据获取速度的不足，导致软件无法充分利用硬件性能提升。</li><li><img src="`+q+'" alt=""></li></ul><p><strong>CPU缓存：</strong></p><ul><li><strong>缓存工作原理：</strong><ul><li>芯片内部有小块高速存储器（缓存），比RAM读取速度更快。</li><li>缓存分为多层，每一层更大但速度更慢。</li><li>缓存通过加载一整块内存（cache line）提高效率。</li></ul></li><li><strong>缓存不命中：</strong><ul><li>缓存不命中会导致CPU等待几百个周期直到从RAM获取数据。</li><li>CPU在缓存不命中时空转，影响性能。</li></ul></li></ul><h4 id="什么是数据局部性" tabindex="-1"><a class="header-anchor" href="#什么是数据局部性"><span>什么是数据局部性？</span></a></h4><ul><li>数据局部性是指在程序执行过程中，对同一块内存区域的重复访问。</li><li>数据局部性的概念是为了更有效地利用计算机内存层次结构中的缓存系统而提出的。 <ul><li>计算机的缓存系统通常按照块（cache line）的方式工作，即一次性加载一块内存数据到缓存中</li></ul></li><li>在设计程序时考虑并利用数据局部性，可以减少缓存未命中的发生，进而提高程序的执行效率和性能。</li><li>在许多算法和数据结构的设计中，都考虑了数据局部性以优化内存访问模式。</li><li>有两种主要的数据局部性： <ul><li><strong>时间局部性（Temporal Locality）：</strong> 如果一个数据在最近的过去被访问过，那么在短期内它很可能会再次被访问。这种情况下，程序倾向于多次使用相同的数据。时间局部性是指程序在时间维度上对同一数据的重复访问。</li><li><strong>空间局部性（Spatial Locality）：</strong> 如果一个数据被访问，那么与该数据相邻的数据也很可能会被访问。在空间局部性中，程序倾向于访问相邻的数据，即使这些数据不是直接相关的。空间局部性是指程序在空间维度上对相邻数据的重复访问。</li></ul></li></ul><p><strong>数据的组织方式直接影响性能：</strong></p><ul><li>因为芯片总是获取一整块cache line，如果数据的组织方式不合理，就会导致缓存不命中，就会导致CPU缓存不命中，影响性能。</li><li>所以在组织数据的存储方式的时候，应当使即将被处理的数据紧密相邻，以提高读取速度。</li></ul><p><strong>在单线程和多线程环境下如何组织数据？</strong></p><ul><li>在单线程环境下，应当使得数据使其在同一cache line上紧密排列。</li><li>在多线程环境中，可能需要考虑让相邻数据在多个cache line上，以避免线程争夺同一cache line的问题。</li></ul><h4 id="不考虑数据局部性导致影响性能的案例" tabindex="-1"><a class="header-anchor" href="#不考虑数据局部性导致影响性能的案例"><span>不考虑数据局部性导致影响性能的案例</span></a></h4><p><strong>完全不考虑数据局部性,导致缓存频繁不命中的案例：</strong></p>',79),En=s("strong",null,"游戏主循环",-1),mn=s("strong",null,"游戏实体",-1),bn=s("strong",null,"接口定义",-1),on=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"while"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"!"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"gameOver) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 处理AI")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"  for"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," numEntities; i"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"++"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    entities"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"[i]->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"ai"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"()->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"update"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 更新物理")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"  for"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," numEntities; i"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"++"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    entities"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"[i]->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"physics"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"()->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"update"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 绘制屏幕")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"  for"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," numEntities; i"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"++"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    entities"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"[i]->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"render"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"()->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"render"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 其他和时间有关的游戏循环机制……")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),gn=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," GameEntity"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"  GameEntity"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"AIComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," ai"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"             PhysicsComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," physics"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"             RenderComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," render"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"):")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"          ai_"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(ai),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"          physics_"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(physics),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"          render_"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(render)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  {}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"  AIComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," ai"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() { "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"return"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ai_; }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"  PhysicsComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," physics"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() { "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"return"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," physics_; }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"  RenderComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," render"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() { "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"return"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," render_; }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  AIComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"*"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ai_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  PhysicsComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"*"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," physics_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  RenderComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"*"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," render_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),yn=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," AIComponent"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  void"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," update"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() {"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}}," /* 处理并修改状态…… */"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 目标，情绪，等等……")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," PhysicsComponent"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  void"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," update"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() {"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}}," /* 处理并修改状态…… */"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 刚体，速度，质量，等等……")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," RenderComponent"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"  void"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," render"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() {"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}}," /* 处理并修改状态…… */"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 网格，纹理，着色器，等等……")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Cn=p('<p>这张图反映了上面的代码的实质：<strong>过多的指针运算</strong></p><p><img src="'+w+'" alt=""></p><p>上面的案例中，缓存不命中频繁发生，导致性能降低</p><ul><li>缓存不命中的主要原因是因为程序在频繁对指针执行<strong>解引用运算符（dereference operator）运算</strong></li><li>在游戏主循环中，由于遍历的实体数组实际上是实体的指针，要获取实体，就要对指针做解引用运算，也就是从内存中去加载这个游戏实体，这导致缓存不命中，CPU空转。</li><li>当得到了游戏实体对象后，需要执行游戏实体上的组件的更新函数，但由于这些组件也是指针，于是又要到内存去加载他们，缓存不命中，CPU空转。</li><li>然后来到第二个游戏实体的指针，上述步骤循环......</li><li>随着实体在内存中的分布变得混乱，缓存不命中的几率将会加剧 <ul><li>实体和组件在内存中的分布是随机的，随着实体的分配和释放，堆的组织会变乱。</li><li>一堆杂乱的对象散布在内存的各处，使用指针彼此相连。</li></ul></li></ul><h4 id="考虑数据局部性的优化方法-使用数组" tabindex="-1"><a class="header-anchor" href="#考虑数据局部性的优化方法-使用数组"><span>考虑数据局部性的优化方法：使用数组</span></a></h4><blockquote><p>直接遍历组件的数组，而不是组件的指针的数组</p></blockquote><p><img src="'+N+'" alt=""></p>',7),An=s("strong",null,"定义组件的数组",-1),Dn=s("strong",null,"游戏主循环",-1),Fn=s("strong",null,"游戏实体",-1),_n=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// 使用组件数组，而不是组件的指针的数组")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"AIComponent aiComponents[] "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," new"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," AIComponent"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"[MAX_ENTITIES];")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"PhysicsComponent physicsComponents[] "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," new"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," PhysicsComponent"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"[MAX_ENTITIES];")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"RenderComponent renderComponents[] "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," new"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," RenderComponent"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"[MAX_ENTITIES];")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Bn=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"while"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"!"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"gameOver) {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 处理AI")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"  for"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," numEntities; i"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"++"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    aiComponents"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"[i]."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"update"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 更新物理")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"  for"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," numEntities; i"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"++"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    physicsComponents"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"[i]->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"physics"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"()->"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"update"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 绘制屏幕")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#C586C0"}},"  for"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"int"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; i "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"<"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," numEntities; i"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"++"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    renderComponents"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"[i]."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"update"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // 其他和时间有关的游戏循环机制……")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),fn=s("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// 游戏实体依然可以保持良好的封装")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"class"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}}," GameEntity"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"public:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"  GameEntity"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"AIComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," ai"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"             PhysicsComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," physics"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#4EC9B0"}},"             RenderComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"*"),s("span",{style:{"--shiki-light":"#FFAB70","--shiki-dark":"#9CDCFE"}}," render"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"){}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"private:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  AIComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"*"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ai_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  PhysicsComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"*"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," physics_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  RenderComponent"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"*"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," render_;")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),Sn=s("h4",{id:"考虑数据局部性的优化方法-打包数据",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#考虑数据局部性的优化方法-打包数据"},[s("span",null,"考虑数据局部性的优化方法：打包数据")])],-1),xn=s("strong",null,"ParticleSystem类",-1),Tn=s("strong",null,"游戏主循环",-1),In=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"class Particle {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  update() {}")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class ParticleSystem {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  static MAX_PARTICLES = 100000;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  particles = new Particle[MAX_PARTICLES]();")]),n(`
`),s("span",{class:"line"},[s("span",null,"  numParticles = 0;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 写法1：基本的写法")]),n(`
`),s("span",{class:"line"},[s("span",null,"  update_base() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    for (let i = 0; i < numParticles; i++) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      particles_[i].update();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 写法2：部分更新的写法")]),n(`
`),s("span",{class:"line"},[s("span",null,"  update_v2() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    for (let i = 0; i < numParticles; i++) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 但是这样写的缺点就在于仍然可能导致大量不需要被更新的数据被加载到缓存")]),n(`
`),s("span",{class:"line"},[s("span",null,"      if (particles_[i].isActive()) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        particles_[i].update();")]),n(`
`),s("span",{class:"line"},[s("span",null,"      }")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 写法3：让整个数组有序，活跃的粒子始终靠前")]),n(`
`),s("span",{class:"line"},[s("span",null,"  update_v3() {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    for (let i = 0; i < numActive; i++) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      particles_[i].update();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 保持数组有序：激活一个粒子")]),n(`
`),s("span",{class:"line"},[s("span",null,"  activateParticle(index: number) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 将它和第一个未激活的粒子交换")]),n(`
`),s("span",{class:"line"},[s("span",null,"    let temp = particles_[numActive_];")]),n(`
`),s("span",{class:"line"},[s("span",null,"    particles_[numActive_] = particles_[index];")]),n(`
`),s("span",{class:"line"},[s("span",null,"    particles_[index] = temp;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 现在多了一个激活粒子")]),n(`
`),s("span",{class:"line"},[s("span",null,"    numActive_++;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"  // 保持数组有序：反激活一个粒子")]),n(`
`),s("span",{class:"line"},[s("span",null,"  deactivateParticle(index: number) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 现在少了一个激活粒子")]),n(`
`),s("span",{class:"line"},[s("span",null,"    numActive_--;")]),n(`
`),s("span",{class:"line"},[s("span",null,"    // 将它和最后一个激活粒子交换")]),n(`
`),s("span",{class:"line"},[s("span",null,"    let temp = particles_[numActive_];")]),n(`
`),s("span",{class:"line"},[s("span",null,"    particles_[numActive_] = particles_[index];")]),n(`
`),s("span",{class:"line"},[s("span",null,"    particles_[index] = temp;")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),qn=s("div",{class:"language-ts line-numbers-mode","data-highlighter":"shiki","data-ext":"ts","data-title":"ts",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"let particleSystem = new ParticleSystem();")]),n(`
`),s("span",{class:"line"},[s("span",null,"while (true) {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  particleSystem.update();")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),wn=p('<p><strong>缺点：</strong></p><p>上述写法放弃了一定的面向对象思想，Particle类的实例对象不能激活或反激活自己。</p><h4 id="冷热分隔" tabindex="-1"><a class="header-anchor" href="#冷热分隔"><span>冷热分隔</span></a></h4><p>总结成一句话，就是可能某个游戏实体的组件中存在一些属性，而这些属性在游戏主循环中并不常用，那么可以将这些属性封装到一个结构体中，并且只存储一个指针，这样可以防止大量不必要的数据被加载到cpu缓存中，提高cpu缓存的利用率。比如说玩家死亡后掉落什么物品，这些数据就可以做冷热分割。</p><h4 id="设计决策" tabindex="-1"><a class="header-anchor" href="#设计决策"><span>设计决策</span></a></h4><p>如何处理多态？</p><ul><li>多态是有用工具，但多态的动态调用总会带来一些代价。</li><li>最简单的解决方案：<strong>不使用多态</strong><ul><li>优点 <ul><li>简洁，安全。所有类在内存中占用的字节数是相同的。</li><li>更快。多态的动态调用意味着在跳转表中寻找方法，然后跟着指针寻找特定的代码，这种消耗在不同硬件上区别很大，但动态调用总会带来一些代价。</li></ul></li><li>缺点 <ul><li>不灵活</li></ul></li></ul></li><li>使用多态，但把他们<strong>按类型放在独自的数组中</strong>。<code>ChildClassA[] childs</code><ul><li>优点 <ul><li>仍然可以保证同类型的对象在内存中紧密排列</li><li>静态调度。这种方式就是已经知道了对象的类型，不必再使用多态：<code>ChildClassA a=childs[idx]; a.update();</code></li></ul></li><li>缺点： <ul><li>麻烦，需要为子类分别管理独立的数组。</li><li>必须关注每个子类单独的集合，无法解耦他们。多态原本的优点就是可以这样写：<code>Parent child[]</code></li></ul></li></ul></li><li><strong>使用指针的集合</strong>，只用指针类型的数组，指向基类或接口就获得了想要的多态。 <ul><li>优点: 灵活，可以支持任何子类或者接口的实现。</li><li>缺点：对缓存不友好，因为存在频繁的指针跳转。</li></ul></li></ul><p>如何定义组织游戏实体？</p><ul><li>当在游戏中使用这种模式，即把游戏组件实体类放入连续数组的做法，这将使得游戏实体类变得看起来可有可无。</li><li>但实际上，游戏代码的其他部分可能仍然期待获得一个游戏实体，所以仍然需要一个概念上的实体。</li><li>第一种：让游戏实体拥有组件的地址 <ul><li>优点： <ul><li>可以将游戏实体存放到连续数组中。</li><li></li></ul></li></ul></li></ul>',9);function Nn(Pn,Gn){const t=r("Tabs"),d=r("CodeTabs");return u(),h("div",null,[G,e(t,{id:"447",data:[{id:"定义Command"},{id:"定义Command子类"},{id:"重写输入处理"}],active:2},{title0:i(({value:a,isActive:l})=>[n("定义Command")]),title1:i(({value:a,isActive:l})=>[n("定义Command子类")]),title2:i(({value:a,isActive:l})=>[n("重写输入处理")]),tab0:i(({value:a,isActive:l})=>[M]),tab1:i(({value:a,isActive:l})=>[O,R]),tab2:i(({value:a,isActive:l})=>[j,U,H,L]),_:1}),W,e(t,{id:"556",data:[{id:"<strong>一种表示树的方式</strong>"},{id:"<strong>另一种表示方式</strong>"}]},{title0:i(({value:a,isActive:l})=>[V]),title1:i(({value:a,isActive:l})=>[J]),tab0:i(({value:a,isActive:l})=>[X,Y]),tab1:i(({value:a,isActive:l})=>[K,z,Z]),_:1}),Q,e(t,{id:"615",data:[{id:"Physics.ts"},{id:"Subject.ts"},{id:"Achievements.ts"},{id:"Observer.ts"}],active:0},{title0:i(({value:a,isActive:l})=>[n("Physics.ts")]),title1:i(({value:a,isActive:l})=>[n("Subject.ts")]),title2:i(({value:a,isActive:l})=>[n("Achievements.ts")]),title3:i(({value:a,isActive:l})=>[n("Observer.ts")]),tab0:i(({value:a,isActive:l})=>[$]),tab1:i(({value:a,isActive:l})=>[ss]),tab2:i(({value:a,isActive:l})=>[ns]),tab3:i(({value:a,isActive:l})=>[is]),_:1}),as,e(t,{id:"699",data:[{id:"Subject.ts"},{id:"Observer.ts"}]},{title0:i(({value:a,isActive:l})=>[n("Subject.ts")]),title1:i(({value:a,isActive:l})=>[n("Observer.ts")]),tab0:i(({value:a,isActive:l})=>[ls]),tab1:i(({value:a,isActive:l})=>[es]),_:1}),ps,e(t,{id:"710",data:[{id:"Subject.ts"},{id:"Observer.ts"}]},{title0:i(({value:a,isActive:l})=>[n("Subject.ts")]),title1:i(({value:a,isActive:l})=>[n("Observer.ts")]),tab0:i(({value:a,isActive:l})=>[ts]),tab1:i(({value:a,isActive:l})=>[ds]),_:1}),rs,e(t,{id:"819",data:[{id:"怪物"},{id:"怪物产卵者"}]},{title0:i(({value:a,isActive:l})=>[n("怪物")]),title1:i(({value:a,isActive:l})=>[n("怪物产卵者")]),tab0:i(({value:a,isActive:l})=>[cs]),tab1:i(({value:a,isActive:l})=>[hs]),_:1}),us,e(t,{id:"838",data:[{id:"怪物"},{id:"Ghost.ts"},{id:"怪物产卵者"},{id:"创建各种生产者"}],active:2},{title0:i(({value:a,isActive:l})=>[n("怪物")]),title1:i(({value:a,isActive:l})=>[n("Ghost.ts")]),title2:i(({value:a,isActive:l})=>[n("怪物产卵者")]),title3:i(({value:a,isActive:l})=>[n("创建各种生产者")]),tab0:i(({value:a,isActive:l})=>[ks]),tab1:i(({value:a,isActive:l})=>[vs]),tab2:i(({value:a,isActive:l})=>[Es]),tab3:i(({value:a,isActive:l})=>[ms,bs]),_:1}),os,e(t,{id:"905",data:[{id:"spawnGhost"},{id:"Spawner"},{id:"构建生产者"}]},{title0:i(({value:a,isActive:l})=>[n("spawnGhost")]),title1:i(({value:a,isActive:l})=>[n("Spawner")]),title2:i(({value:a,isActive:l})=>[n("构建生产者")]),tab0:i(({value:a,isActive:l})=>[gs]),tab1:i(({value:a,isActive:l})=>[ys]),tab2:i(({value:a,isActive:l})=>[Cs]),_:1}),As,e(t,{id:"1128",data:[{id:"常见的管理类写法"},{id:"管理类完全可以被优化掉"}]},{title0:i(({value:a,isActive:l})=>[n("常见的管理类写法")]),title1:i(({value:a,isActive:l})=>[n("管理类完全可以被优化掉")]),tab0:i(({value:a,isActive:l})=>[Ds]),tab1:i(({value:a,isActive:l})=>[Fs]),_:1}),_s,e(t,{id:"1345",data:[{id:"定义状态接口"},{id:"为每个状态编写类"},{id:"状态委托"},{id:"切换状态"},{id:"进入和离开状态"}]},{title0:i(({value:a,isActive:l})=>[n("定义状态接口")]),title1:i(({value:a,isActive:l})=>[n("为每个状态编写类")]),title2:i(({value:a,isActive:l})=>[n("状态委托")]),title3:i(({value:a,isActive:l})=>[n("切换状态")]),title4:i(({value:a,isActive:l})=>[n("进入和离开状态")]),tab0:i(({value:a,isActive:l})=>[Bs]),tab1:i(({value:a,isActive:l})=>[fs]),tab2:i(({value:a,isActive:l})=>[Ss]),tab3:i(({value:a,isActive:l})=>[xs,Ts,Is,qs]),tab4:i(({value:a,isActive:l})=>[ws,Ns,Ps,Gs,Ms,Os]),_:1}),Rs,e(t,{id:"1549",data:[{id:"继承关系图"},{id:"Monster.cpp"},{id:"物种s.cpp"}]},{title0:i(({value:a,isActive:l})=>[n("继承关系图")]),title1:i(({value:a,isActive:l})=>[n("Monster.cpp")]),title2:i(({value:a,isActive:l})=>[n("物种s.cpp")]),tab0:i(({value:a,isActive:l})=>[js,Us,Hs]),tab1:i(({value:a,isActive:l})=>[Ls]),tab2:i(({value:a,isActive:l})=>[Ws]),_:1}),Vs,Js,e(t,{id:"1611",data:[{id:"类图"},{id:"简易实现"},{id:"使用"},{id:"私有构造器"},{id:"使用"}]},{title0:i(({value:a,isActive:l})=>[n("类图")]),title1:i(({value:a,isActive:l})=>[n("简易实现")]),title2:i(({value:a,isActive:l})=>[n("使用")]),title3:i(({value:a,isActive:l})=>[n("私有构造器")]),title4:i(({value:a,isActive:l})=>[n("使用")]),tab0:i(({value:a,isActive:l})=>[Xs]),tab1:i(({value:a,isActive:l})=>[Ys]),tab2:i(({value:a,isActive:l})=>[Ks]),tab3:i(({value:a,isActive:l})=>[zs,Zs,Qs,$s]),tab4:i(({value:a,isActive:l})=>[sn]),_:1}),nn,e(t,{id:"1688",data:[{id:"方法一：动态地从父类上获取"},{id:"方法二：在初始化时从父类获取"}]},{title0:i(({value:a,isActive:l})=>[n("方法一：动态地从父类上获取")]),title1:i(({value:a,isActive:l})=>[n("方法二：在初始化时从父类获取")]),tab0:i(({value:a,isActive:l})=>[an,ln]),tab1:i(({value:a,isActive:l})=>[en,pn]),_:1}),tn,e(d,{id:"1741",data:[{id:"config.ts"},{id:"Species.ts"},{id:"SpeciesFactory.ts"},{id:"Monster.ts"},{id:"index.ts"},{id:"output.txt"}]},{title0:i(({value:a,isActive:l})=>[n("config.ts")]),title1:i(({value:a,isActive:l})=>[n("Species.ts")]),title2:i(({value:a,isActive:l})=>[n("SpeciesFactory.ts")]),title3:i(({value:a,isActive:l})=>[n("Monster.ts")]),title4:i(({value:a,isActive:l})=>[n("index.ts")]),title5:i(({value:a,isActive:l})=>[n("output.txt")]),tab0:i(({value:a,isActive:l})=>[dn]),tab1:i(({value:a,isActive:l})=>[rn]),tab2:i(({value:a,isActive:l})=>[cn]),tab3:i(({value:a,isActive:l})=>[hn]),tab4:i(({value:a,isActive:l})=>[un]),tab5:i(({value:a,isActive:l})=>[kn]),_:1}),vn,e(d,{id:"2575",data:[{id:"<strong>游戏主循环</strong>"},{id:"<strong>游戏实体</strong>"},{id:"<strong>接口定义</strong>"}]},{title0:i(({value:a,isActive:l})=>[En]),title1:i(({value:a,isActive:l})=>[mn]),title2:i(({value:a,isActive:l})=>[bn]),tab0:i(({value:a,isActive:l})=>[on]),tab1:i(({value:a,isActive:l})=>[gn]),tab2:i(({value:a,isActive:l})=>[yn]),_:1}),Cn,e(d,{id:"2645",data:[{id:"<strong>定义组件的数组</strong>"},{id:"<strong>游戏主循环</strong>"},{id:"<strong>游戏实体</strong>"}]},{title0:i(({value:a,isActive:l})=>[An]),title1:i(({value:a,isActive:l})=>[Dn]),title2:i(({value:a,isActive:l})=>[Fn]),tab0:i(({value:a,isActive:l})=>[_n]),tab1:i(({value:a,isActive:l})=>[Bn]),tab2:i(({value:a,isActive:l})=>[fn]),_:1}),Sn,e(d,{id:"2659",data:[{id:"<strong>ParticleSystem类</strong>"},{id:"<strong>游戏主循环</strong>"}]},{title0:i(({value:a,isActive:l})=>[xn]),title1:i(({value:a,isActive:l})=>[Tn]),tab0:i(({value:a,isActive:l})=>[In]),tab1:i(({value:a,isActive:l})=>[qn]),_:1}),wn])}const On=c(P,[["render",Nn],["__file","index.html.vue"]]),Rn=JSON.parse('{"path":"/%E7%90%86%E8%AE%BA/2023-12-13-%E6%B8%B8%E6%88%8F%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/","title":"《游戏设计模式》学习笔记","lang":"zh-CN","frontmatter":{"title":"《游戏设计模式》学习笔记","description":"《游戏设计模式(game-programming-patterns)》学习笔记","date":"2023-12-13T13:21:00.000Z","cover":"/cover/gameprogrammingpatterns.png","tag":["笔记","游戏","设计模式"],"category":"笔记","star":true,"head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E7%90%86%E8%AE%BA/2023-12-13-%E6%B8%B8%E6%88%8F%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"《游戏设计模式》学习笔记"}],["meta",{"property":"og:description","content":"《游戏设计模式(game-programming-patterns)》学习笔记"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://dingdingdang.online/cover/gameprogrammingpatterns.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T09:30:40.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://dingdingdang.online/cover/gameprogrammingpatterns.png"}],["meta",{"name":"twitter:image:alt","content":"《游戏设计模式》学习笔记"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:tag","content":"游戏"}],["meta",{"property":"article:tag","content":"设计模式"}],["meta",{"property":"article:published_time","content":"2023-12-13T13:21:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T09:30:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《游戏设计模式》学习笔记\\",\\"image\\":[\\"https://dingdingdang.online/cover/gameprogrammingpatterns.png\\"],\\"datePublished\\":\\"2023-12-13T13:21:00.000Z\\",\\"dateModified\\":\\"2024-03-18T09:30:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"前言：架构，性能和游戏","slug":"前言-架构-性能和游戏","link":"#前言-架构-性能和游戏","children":[]},{"level":2,"title":"重访设计模式","slug":"重访设计模式","link":"#重访设计模式","children":[{"level":3,"title":"命令模式","slug":"命令模式","link":"#命令模式","children":[]},{"level":3,"title":"享元模式","slug":"享元模式","link":"#享元模式","children":[]},{"level":3,"title":"观察者模式","slug":"观察者模式","link":"#观察者模式","children":[]},{"level":3,"title":"原型模式","slug":"原型模式","link":"#原型模式","children":[]},{"level":3,"title":"单例模式","slug":"单例模式","link":"#单例模式","children":[]},{"level":3,"title":"状态模式","slug":"状态模式","link":"#状态模式","children":[]}]},{"level":2,"title":"序列模式","slug":"序列模式","link":"#序列模式","children":[{"level":3,"title":"双缓冲模式","slug":"双缓冲模式","link":"#双缓冲模式","children":[]}]},{"level":2,"title":"行为模式","slug":"行为模式","link":"#行为模式","children":[{"level":3,"title":"类型对象（Type Object）","slug":"类型对象-type-object","link":"#类型对象-type-object","children":[]}]},{"level":2,"title":"解耦模式","slug":"解耦模式","link":"#解耦模式","children":[{"level":3,"title":"组件模式","slug":"组件模式","link":"#组件模式","children":[]},{"level":3,"title":"事件队列","slug":"事件队列","link":"#事件队列","children":[]},{"level":3,"title":"服务定位器","slug":"服务定位器","link":"#服务定位器","children":[]}]},{"level":2,"title":"优化模式","slug":"优化模式","link":"#优化模式","children":[{"level":3,"title":"数据局部性","slug":"数据局部性","link":"#数据局部性","children":[]}]}],"git":{"createdTime":1700226391000,"updatedTime":1710754240000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":5}]},"readingTime":{"minutes":59.19,"words":17758},"filePathRelative":"理论/2023-12-13-游戏设计模式学习笔记/index.md","localizedDate":"2023年12月13日","excerpt":""}');export{On as comp,Rn as data};
