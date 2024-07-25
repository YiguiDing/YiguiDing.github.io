import{_ as t,r as p,c as r,a as s,d as a,w as l,b as i,o as c,e as n}from"./app-DTZtoZLC.js";const v="/assets/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0-D27SzjIn.gif",h={},m=i('<h1 id="_1-typescript写的2d游戏的实现细节笔记" tabindex="-1"><a class="header-anchor" href="#_1-typescript写的2d游戏的实现细节笔记"><span>1. TypeScript写的2D游戏的实现细节笔记</span></a></h1><p><img src="'+v+'" alt=""></p><h2 id="_1-1-试玩版本" tabindex="-1"><a class="header-anchor" href="#_1-1-试玩版本"><span>1.1. 试玩版本</span></a></h2>',3),u=s("p",null,"URL 地址：",-1),E=i('<h2 id="_1-2-源代码" tabindex="-1"><a class="header-anchor" href="#_1-2-源代码"><span>1.2. 源代码</span></a></h2><blockquote><p>源代码:</p><p><u><a href="https://github.com/YiguiDing/shadowDog-Typescript" target="_blank" rel="noopener noreferrer">https://github.com/YiguiDing/shadowDog-Typescript</a></u></p></blockquote><h2 id="_1-3-修改记录" tabindex="-1"><a class="header-anchor" href="#_1-3-修改记录"><span>1.3. 修改记录</span></a></h2><blockquote><ul><li><code>0.0.1</code>: 第一版</li><li><code>0.0.2</code>: 压缩游戏音乐，优化加载速度，修改粒子特效移动速度和透明度的衰减方式</li></ul></blockquote><blockquote><p><strong>操作</strong>：</p><ul><li><code>Enter</code> 键开始游戏</li><li><code>ESC</code> 键暂停游戏</li><li><code>Space</code> 键继续游戏</li><li><code>方向键上下左右</code>控制人物 跳、蹲、俯冲、前后移动</li><li>玩家在<strong>跳起后</strong><code>在空中时</code>按下<code>Space</code>键可释放人物技能</li><li>释放技能的<strong>过程中</strong>按下方向键<code>↓</code>可实现俯冲</li><li>人物在<strong>地面时</strong>按下方向键<code>↓</code>可蹲下</li><li><strong>蹲下后</strong>按下方向键<code>→</code> 会有音效</li></ul></blockquote><h2 id="_1-4-typescript写的2d游戏的实现细节笔记" tabindex="-1"><a class="header-anchor" href="#_1-4-typescript写的2d游戏的实现细节笔记"><span>1.4. TypeScript写的2D游戏的实现细节笔记</span></a></h2><h3 id="_1-4-1-笔记目录" tabindex="-1"><a class="header-anchor" href="#_1-4-1-笔记目录"><span>1.4.1. 笔记目录</span></a></h3><ul><li><a href="#1-typescript%E5%86%99%E7%9A%842d%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0">1. TypeScript写的2D游戏的实现细节笔记</a><ul><li><a href="#11-%E8%AF%95%E7%8E%A9%E7%89%88%E6%9C%AC">1.1. 试玩版本</a></li><li><a href="#12-%E6%BA%90%E4%BB%A3%E7%A0%81">1.2. 源代码</a></li><li><a href="#13-%E4%BF%AE%E6%94%B9%E8%AE%B0%E5%BD%95">1.3. 修改记录</a></li><li><a href="#14-typescript%E5%86%99%E7%9A%842d%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0">1.4. TypeScript写的2D游戏的实现细节笔记</a><ul><li><a href="#141-%E7%AC%94%E8%AE%B0%E7%9B%AE%E5%BD%95">1.4.1. 笔记目录</a></li><li><a href="#142-canvas-%E7%BB%98%E5%9B%BE%E5%9F%BA%E6%9C%AC%E6%AD%A5%E9%AA%A4">1.4.2. Canvas 绘图基本步骤</a><ul><li><a href="#1421-%E5%8E%9F%E7%90%86">1.4.2.1. 原理</a></li><li><a href="#1422-%E4%BC%98%E5%8C%96%E5%8F%8A%E6%B8%B2%E6%9F%93%E6%89%80%E6%9C%89%E5%8A%A8%E5%9B%BE">1.4.2.2. 优化及渲染所有动图</a></li><li><a href="#1423-%E5%B0%81%E8%A3%85%E5%92%8C%E6%8A%BD%E8%B1%A1">1.4.2.3. 封装和抽象</a></li><li><a href="#1424-%E5%AF%B9%E5%8A%A8%E7%94%BB%E5%AF%B9%E8%B1%A1-animater-%E7%9A%84%E5%B0%81%E8%A3%85">1.4.2.4. 对动画对象 Animater 的封装</a></li><li><a href="#1425-%E7%BB%A7%E7%BB%AD%E5%AE%9A%E4%B9%89%E4%B8%80%E4%BA%9B%E5%88%97%E6%8E%A5%E5%8F%A3%E5%B9%B6%E5%AE%9A%E4%B9%89-animal-%E7%B1%BB">1.4.2.5. 继续定义一些列接口并定义 Animal 类</a></li><li><a href="#1426-%E4%BD%BF%E7%94%A8">1.4.2.6. 使用</a></li></ul></li><li><a href="#143-%E6%95%8C%E4%BA%BA%E7%9A%84%E7%A7%BB%E5%8A%A8%E6%A8%A1%E5%BC%8F">1.4.3. 敌人的移动模式</a><ul><li><a href="#1431-%E5%8E%9F%E5%9C%B0%E9%9D%99%E6%AD%A2%E7%9A%84%E7%89%A9%E4%BD%93">1.4.3.1. 原地静止的物体</a></li><li><a href="#1432-%E6%B0%B4%E5%B9%B3%E7%9B%B4%E7%BA%BF%E8%BF%90%E5%8A%A8%E7%9A%84%E8%A0%95%E8%99%AB">1.4.3.2. 水平直线运动的蠕虫</a></li><li><a href="#1433-%E4%B8%8A%E4%B8%8B%E6%91%86%E5%8A%A8%E7%9A%84%E8%9D%99%E8%9D%A0">1.4.3.3. 上下摆动的蝙蝠</a></li><li><a href="#1434-%E9%9A%8F%E6%9C%BA%E6%97%A0%E8%A7%84%E5%BE%8B%E7%A7%BB%E5%8A%A8%E7%9A%84%E9%BD%BF%E8%BD%AE">1.4.3.4. 随机无规律移动的齿轮</a></li></ul></li><li><a href="#144-%E8%A7%86%E5%B7%AE%E8%83%8C%E6%99%AF%E5%8E%9F%E7%90%86">1.4.4. 视差背景原理</a><ul><li><a href="#1441-%E6%97%A0%E9%99%90%E6%BB%9A%E5%8A%A8%E7%9A%84%E8%83%8C%E6%99%AF%E5%8E%9F%E7%90%86">1.4.4.1. 无限滚动的背景原理</a></li><li><a href="#1442-%E8%A7%86%E5%B7%AE%E8%83%8C%E6%99%AF%E7%9A%84%E5%AE%9E%E7%8E%B0">1.4.4.2. 视差背景的实现</a></li><li><a href="#1443-%E6%9C%80%E7%BB%88%E7%9A%84%E6%8A%BD%E8%B1%A1%E5%B0%81%E8%A3%85%E5%AE%9E%E7%8E%B0">1.4.4.3. 最终的抽象、封装、实现</a></li><li><a href="#1444-%E4%BD%BF%E7%94%A8%E5%B0%81%E8%A3%85%E5%A5%BD%E7%9A%84%E7%B1%BB%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E8%A7%86%E5%B7%AE%E8%83%8C%E6%99%AF">1.4.4.4. 使用封装好的类实现一个视差背景</a></li></ul></li><li><a href="#145-%E7%A2%B0%E6%92%9E%E6%A3%80%E6%B5%8B">1.4.5. 碰撞检测</a><ul><li><a href="#1451-%E7%9F%A9%E5%BD%A2%E7%A2%B0%E6%92%9E%E6%A3%80%E6%B5%8B">1.4.5.1. 矩形碰撞检测</a></li><li><a href="#1452-%E5%9C%86%E5%BD%A2%E7%A2%B0%E6%92%9E%E6%A3%80%E6%B5%8B">1.4.5.2. 圆形碰撞检测</a></li><li><a href="#1453-%E5%83%8F%E7%B4%A0%E7%A2%B0%E6%92%9E%E6%A3%80%E6%B5%8B">1.4.5.3. 像素碰撞检测</a></li></ul></li><li><a href="#146-%E7%B2%92%E5%AD%90%E7%89%B9%E6%95%88">1.4.6. 粒子特效</a><ul><li><a href="#1461-%E5%AE%9A%E4%B9%89-particle-%E6%8A%BD%E8%B1%A1%E7%B1%BB">1.4.6.1. 定义 Particle 抽象类</a></li><li><a href="#1462-%E7%81%B0%E5%B0%98%E5%BD%B1%E5%AD%90%E7%9A%84%E5%AE%9E%E7%8E%B0">1.4.6.2. 灰尘影子的实现</a></li><li><a href="#1463-%E7%81%AB%E7%84%B0%E7%B2%92%E5%AD%90%E7%89%B9%E6%95%88">1.4.6.3. 火焰粒子特效</a></li><li><a href="#1464-%E8%90%BD%E5%9C%B0%E7%9A%84%E7%88%86%E7%82%B8%E7%81%AB%E8%8A%B1%E7%B2%92%E5%AD%90%E7%89%B9%E6%95%88">1.4.6.4. 落地的爆炸火花粒子特效</a></li><li><a href="#1465-%E7%88%86%E7%82%B8%E7%9A%84%E7%83%9F%E9%9B%BE%E7%B2%92%E5%AD%90%E7%89%B9%E6%95%88">1.4.6.5. 爆炸的烟雾粒子特效</a></li></ul></li><li><a href="#147-%E8%BE%93%E5%85%A5%E7%9B%91%E5%90%AC%E5%92%8C%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E7%9A%84%E5%AE%9E%E7%8E%B0">1.4.7. 输入监听和状态管理的实现</a><ul><li><a href="#1471-%E8%BE%93%E5%85%A5%E7%9B%91%E5%90%AC">1.4.7.1. 输入监听</a></li><li><a href="#1472-%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86">1.4.7.2. 状态管理</a></li><li><a href="#1473-%E4%BD%BF%E7%94%A8%E7%8A%B6%E6%80%81%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AE%9E%E7%8E%B0%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86-player-%E7%B1%BB%E7%9A%84%E9%83%A8%E5%88%86%E4%BB%A3%E7%A0%81">1.4.7.3. 使用状态设计模式实现状态管理 Player 类的部分代码</a></li><li><a href="#1474-%E4%BD%BF%E7%94%A8%E7%8A%B6%E6%80%81%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E5%AE%9E%E7%8E%B0%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86-game-%E7%B1%BB%E7%9A%84%E9%83%A8%E5%88%86%E4%BB%A3%E7%A0%81">1.4.7.4. 使用状态设计模式实现状态管理 Game 类的部分代码</a></li></ul></li><li><a href="#148-scene-%E5%9C%BA%E6%99%AF">1.4.8. Scene 场景</a></li><li><a href="#149-ui">1.4.9. UI</a></li><li><a href="#1410-%E5%AD%97%E4%BD%93">1.4.10. 字体</a></li><li><a href="#1411-canvas-%E9%93%BA%E6%BB%A1%E9%A1%B5%E9%9D%A2%E5%B1%8F%E5%B9%95%E7%9A%84%E5%AE%9E%E7%8E%B0">1.4.11. Canvas 铺满页面屏幕的实现</a></li><li><a href="#1412-%E8%87%AA%E5%86%99%E5%B7%A5%E5%85%B7%E7%B1%BB">1.4.12. 自写工具类</a></li></ul></li></ul></li></ul><h3 id="_1-4-2-canvas-绘图基本步骤" tabindex="-1"><a class="header-anchor" href="#_1-4-2-canvas-绘图基本步骤"><span>1.4.2. Canvas 绘图基本步骤</span></a></h3><h4 id="_1-4-2-1-原理" tabindex="-1"><a class="header-anchor" href="#_1-4-2-1-原理"><span>1.4.2.1. 原理</span></a></h4>',10),b=i(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>var myCanvas = document.querySelector(&quot;#myCanvas&quot;) as HTMLCanvasElement;</span></span>
<span class="line"><span>// 获取2d的上下文环境对象，该对象包含画笔设置和一些方法</span></span>
<span class="line"><span>var ctx = myCanvas.getContext(&quot;2d&quot;) as CanvasRenderingContext2D;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// canvas的默认大小为300x150px 需手动修改</span></span>
<span class="line"><span>const CANVAS_WIDTH = (myCanvas.width = 600);</span></span>
<span class="line"><span>const CANVAS_HEIGHT = (myCanvas.height = 600);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 单帧宽高</span></span>
<span class="line"><span>const Sprite_WIDTH = 575;</span></span>
<span class="line"><span>const Sprite_HEIGHT = 523;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const imgPlayer = new Image(); // image对象类型为 HTMLImageElement 可以附加到dom中</span></span>
<span class="line"><span>imgPlayer.src = &quot;./shadow_dog.png&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let frameX = 0;</span></span>
<span class="line"><span>let frameY = 0;</span></span>
<span class="line"><span>let frameCount = 0; // 第几帧</span></span>
<span class="line"><span>let stageFrame = 5; // 交错帧，每隔5帧 切换图片</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function animate() {</span></span>
<span class="line"><span>  // 计算当前要绘制的帧的index</span></span>
<span class="line"><span>  frameCount = ++frameCount % stageFrame;</span></span>
<span class="line"><span>  if (!frameCount) frameX = ++frameX % 7;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //清除上一次绘图痕迹</span></span>
<span class="line"><span>  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);</span></span>
<span class="line"><span>  ctx.drawImage(</span></span>
<span class="line"><span>    imgPlayer, // img</span></span>
<span class="line"><span>    frameX * Sprite_WIDTH, //源坐标x</span></span>
<span class="line"><span>    frameY * Sprite_HEIGHT, //源坐标y</span></span>
<span class="line"><span>    Sprite_WIDTH, //源图像宽</span></span>
<span class="line"><span>    Sprite_HEIGHT, //源图像高</span></span>
<span class="line"><span>    0, // 目的坐标x</span></span>
<span class="line"><span>    0, // 目的坐标y</span></span>
<span class="line"><span>    CANVAS_WIDTH, // 绘制宽度w</span></span>
<span class="line"><span>    CANVAS_HEIGHT // 绘制高度h</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  // requestAnimationFrame原理上相当于60fps的setInterval</span></span>
<span class="line"><span>  requestAnimationFrame(animate);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>animate();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-2-2-优化及渲染所有动图" tabindex="-1"><a class="header-anchor" href="#_1-4-2-2-优化及渲染所有动图"><span>1.4.2.2. 优化及渲染所有动图</span></a></h4>`,2),o=s("div",{class:"language-html line-numbers-mode","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"<"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"canvas"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," id"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"myCanvas_2j0923ru48"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"></"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"canvas"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"<"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"div"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," class"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"animation-box"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"  <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"label"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," for"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"animations"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"select animation:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"label"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"  <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"select"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," name"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'""'),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," id"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"animations_djf9498"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"idle"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"idle"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"jump"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"jump"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"fall"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"fall"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"run"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"run"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"dizzy"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"dizzy"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"sit"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"sit"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"roll"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"roll"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"bite"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"bite"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"ko"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"ko"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"    <"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"gethit"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"gethit"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"option"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"  </"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"select"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"</"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"div"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}},"<"),s("span",{style:{"--shiki-light":"#85E89D","--shiki-dark":"#569CD6"}},"img"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#9CDCFE"}}," src"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"./images/shadow_dog.png"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#808080"}}," />")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),k=s("div",{class:"language-js line-numbers-mode","data-highlighter":"shiki","data-ext":"js","data-title":"js",style:{"--shiki-light":"#e1e4e8","--shiki-dark":"#E6E6E6","--shiki-light-bg":"#24292e","--shiki-dark-bg":"#222222"}},[s("pre",{class:"shiki shiki-themes github-dark slack-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," myCanvas"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," document"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"querySelector"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"#myCanvas_2j0923ru48"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," ctx"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," myCanvas"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"getContext"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"2d"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"); "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// 获取2d的上下文环境对象，该对象包含画笔设置和一些方法")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// canvas的默认大小为300x150px 需手动修改")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#9CDCFE"}}," CANVAS_WIDTH"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"myCanvas"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"width"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 250"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#9CDCFE"}}," CANVAS_HEIGHT"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," ("),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"myCanvas"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"height"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 250"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," Sprite_WIDTH"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 575"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," Sprite_HEIGHT"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 523"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," imgPlayer"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}}," new"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," Image"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(); "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// image对象类型为 HTMLImageElement 可以附加到dom中")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"imgPlayer"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"src"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "./images/shadow_dog.png"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," playerState"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},' "idle"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," selector"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," document"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"querySelector"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"#animations_djf9498"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"selector"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"addEventListener"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#9ECBFF","--shiki-dark":"#CE9178"}},'"change"'),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"function"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," () {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  playerState"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," selector"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"value"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"});")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," animations"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  idle:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 7"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  jump:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 1"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 7"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  fall:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 2"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 7"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  run:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 3"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 9"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  dizzy:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 4"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 11"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  sit:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 5"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 5"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  roll:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 6"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 7"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  bite:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 7"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 7"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  ko:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 8"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 12"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  gethit:"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," { "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 9"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols:"),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 4"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}}," },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"};")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," animaIndex"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// 动画索引")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," frameIndex"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// 帧索引")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," frameCount"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// 总的帧数")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"var"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," stageFrame"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}}," 5"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"; "),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"// 交错帧，每隔5帧 切换关键帧")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#569CD6"}},"function"),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}}," animate"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"() {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  frameIndex"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," =")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    Math"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"floor"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"frameCount"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"++"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," /"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," stageFrame"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},") "),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}},"%"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," animations"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"["),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"playerState"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"]."),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"cols"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  animaIndex"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," ="),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," animations"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"["),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"playerState"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"]."),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"rows"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  ctx"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"clearRect"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}},"0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}},"0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#9CDCFE"}},"CANVAS_WIDTH"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},", "),s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#9CDCFE"}},"CANVAS_HEIGHT"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"  ctx"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"."),s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"drawImage"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"(")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    imgPlayer"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    frameIndex"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," *"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," Sprite_WIDTH"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    animaIndex"),s("span",{style:{"--shiki-light":"#F97583","--shiki-dark":"#D4D4D4"}}," *"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}}," Sprite_HEIGHT"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    Sprite_WIDTH"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"    Sprite_HEIGHT"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}},"    0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#B5CEA8"}},"    0"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#9CDCFE"}},"    CANVAS_WIDTH"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#79B8FF","--shiki-dark":"#9CDCFE"}},"    CANVAS_HEIGHT")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"  );")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"  // requestAnimationFrame效果上相当于60fps的setInterval")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"  requestAnimationFrame"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"("),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#9CDCFE"}},"animate"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"}")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B392F0","--shiki-dark":"#DCDCAA"}},"animate"),s("span",{style:{"--shiki-light":"#E1E4E8","--shiki-dark":"#E6E6E6"}},"();")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),g=i(`<h4 id="_1-4-2-3-封装和抽象" tabindex="-1"><a class="header-anchor" href="#_1-4-2-3-封装和抽象"><span>1.4.2.3. 封装和抽象</span></a></h4><h4 id="_1-4-2-4-对动画对象-animater-的封装" tabindex="-1"><a class="header-anchor" href="#_1-4-2-4-对动画对象-animater-的封装"><span>1.4.2.4. 对动画对象 Animater 的封装</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { RandomRange } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span>// 动画对象</span></span>
<span class="line"><span>export class Animater {</span></span>
<span class="line"><span>  posX = 0; // 位置x</span></span>
<span class="line"><span>  posY = 0; // 位置y</span></span>
<span class="line"><span>  drawWidth: number; // 实际绘制的宽度</span></span>
<span class="line"><span>  drawHeight: number; // 实际绘制的高度</span></span>
<span class="line"><span>  img: HTMLImageElement; // 图片</span></span>
<span class="line"><span>  imgFrameWidth: number; // 一帧的宽度</span></span>
<span class="line"><span>  imgFrameHeight: number; // 一帧的高度</span></span>
<span class="line"><span>  animateFramesTotal: Array&lt;number&gt;; // [动画1的总帧数,动画2的总帧数,动画3的...]</span></span>
<span class="line"><span>  animateNameIndexMap: Array&lt;string&gt;; // 数据结构：{动画名称:该动画是第几个动画}</span></span>
<span class="line"><span>  animateFrameIndexX = 0; // 当前绘制的是第几帧</span></span>
<span class="line"><span>  animateFrameIndexY = 0; // 当前绘制的是第几个动画</span></span>
<span class="line"><span>  animateFrameTimer = 0;</span></span>
<span class="line"><span>  private _animateFrameFps = 60;</span></span>
<span class="line"><span>  private animateFrameChangeInterval = 1000 / 60;</span></span>
<span class="line"><span>  private get animateFrameFps() {</span></span>
<span class="line"><span>    return this._animateFrameFps;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  private set animateFrameFps(fps) {</span></span>
<span class="line"><span>    this._animateFrameFps = fps;</span></span>
<span class="line"><span>    this.animateFrameChangeInterval = 1000 / fps;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  public setFps(fps: number) {</span></span>
<span class="line"><span>    this.animateFrameFps = fps;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  stopAnimateAtLastFlag = false;</span></span>
<span class="line"><span>  RewindAnimateFrameFlag = false;</span></span>
<span class="line"><span>  constructor(</span></span>
<span class="line"><span>    imgSrc: string,</span></span>
<span class="line"><span>    imgFrameWidth: number,</span></span>
<span class="line"><span>    imgFrameHeight: number,</span></span>
<span class="line"><span>    size: number,</span></span>
<span class="line"><span>    animateFramesTotal: Array&lt;number&gt;,</span></span>
<span class="line"><span>    animateNameIndexMap: Array&lt;string&gt;</span></span>
<span class="line"><span>  ) {</span></span>
<span class="line"><span>    this.img = new Image();</span></span>
<span class="line"><span>    this.img.src = imgSrc;</span></span>
<span class="line"><span>    this.animateFramesTotal = animateFramesTotal;</span></span>
<span class="line"><span>    this.animateNameIndexMap = animateNameIndexMap;</span></span>
<span class="line"><span>    this.imgFrameWidth = imgFrameWidth;</span></span>
<span class="line"><span>    this.imgFrameHeight = imgFrameHeight;</span></span>
<span class="line"><span>    this.drawWidth = this.imgFrameWidth * size;</span></span>
<span class="line"><span>    this.drawHeight = this.imgFrameHeight * size;</span></span>
<span class="line"><span>    this.setFps(60);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 更新数据</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    // 最后一帧则停止切换帧</span></span>
<span class="line"><span>    if (this.stopAnimateAtLastFlag == true &amp;&amp; this.isLastAnimateFrame()) return;</span></span>
<span class="line"><span>    // 计算下一帧</span></span>
<span class="line"><span>    if (this.animateFrameTimer &gt;= this.animateFrameChangeInterval) {</span></span>
<span class="line"><span>      this.animateFrameTimer = 0;</span></span>
<span class="line"><span>      this.animateFrameIndexX += 1;</span></span>
<span class="line"><span>      this.animateFrameIndexX %=</span></span>
<span class="line"><span>        this.animateFramesTotal[this.animateFrameIndexY];</span></span>
<span class="line"><span>    } else this.animateFrameTimer += timeInterval;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 绘制帧</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D): void {</span></span>
<span class="line"><span>    Context2D.drawImage(</span></span>
<span class="line"><span>      this.img,</span></span>
<span class="line"><span>      this.animateFrameIndexX * this.imgFrameWidth,</span></span>
<span class="line"><span>      this.animateFrameIndexY * this.imgFrameHeight,</span></span>
<span class="line"><span>      this.imgFrameWidth,</span></span>
<span class="line"><span>      this.imgFrameHeight,</span></span>
<span class="line"><span>      this.posX,</span></span>
<span class="line"><span>      this.posY,</span></span>
<span class="line"><span>      this.drawWidth,</span></span>
<span class="line"><span>      this.drawHeight</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  changeAnimateByName(animateName: string) {</span></span>
<span class="line"><span>    // 根据名称切换动画</span></span>
<span class="line"><span>    if (this.animateNameIndexMap.includes(animateName))</span></span>
<span class="line"><span>      this.animateFrameIndexY = this.animateNameIndexMap.indexOf(animateName);</span></span>
<span class="line"><span>    else throw new Error(\`animateName:&#39;\${animateName}&#39; is not exist.\`);</span></span>
<span class="line"><span>    this.init();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 判断是否为最后一帧</span></span>
<span class="line"><span>  isLastAnimateFrame() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      this.animateFrameIndexX ==</span></span>
<span class="line"><span>      this.animateFramesTotal[this.animateFrameIndexY] - 1</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 判断是否为第一帧</span></span>
<span class="line"><span>  isFirstAnimateFrame() {</span></span>
<span class="line"><span>    return this.animateFrameIndexX == 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 初始化状态</span></span>
<span class="line"><span>  init() {</span></span>
<span class="line"><span>    this.animateFrameIndexX = 0; // 设置从第一帧开始</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 请求在渲染到最后一帧的时候停止更新动画</span></span>
<span class="line"><span>  requestStopAnimateFrameAtLastFrame() {</span></span>
<span class="line"><span>    this.stopAnimateAtLastFlag = true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  isOutOfLeftScreem() {</span></span>
<span class="line"><span>    return this.posX + this.drawWidth &lt; 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-2-5-继续定义一些列接口并定义-animal-类" tabindex="-1"><a class="header-anchor" href="#_1-4-2-5-继续定义一些列接口并定义-animal-类"><span>1.4.2.5. 继续定义一些列接口并定义 Animal 类</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Animater } from &quot;./Animater.js&quot;;</span></span>
<span class="line"><span>import { transformAble } from &quot;./transformAble.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可移动的</span></span>
<span class="line"><span>interface MoveAble {</span></span>
<span class="line"><span>  moveSpeedX: number; // x轴移动速度 单位：像素/毫秒</span></span>
<span class="line"><span>  moveSpeedY: number; // x轴移动速度 单位：像素/毫秒</span></span>
<span class="line"><span>  move(timeInterval: number): void; // 移动</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 活的</span></span>
<span class="line"><span>interface AliveAble {</span></span>
<span class="line"><span>  aliveFlag: boolean;</span></span>
<span class="line"><span>  getAliveFlag(): boolean; // 用于判断是否存活</span></span>
<span class="line"><span>  setAliveFlag(newVal: boolean): void;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 圆形碰撞检测</span></span>
<span class="line"><span>interface CollisionCheckAble {</span></span>
<span class="line"><span>  collisionCheckPosX: number;</span></span>
<span class="line"><span>  collisionCheckPosY: number;</span></span>
<span class="line"><span>  collisionCheckWidth: number;</span></span>
<span class="line"><span>  collisionCheckHeight: number;</span></span>
<span class="line"><span>  collisionCheckRadius: number;</span></span>
<span class="line"><span>  collisionCheckUpdate(): void;</span></span>
<span class="line"><span>  isCollision(obj: CollisionCheckAble): boolean; // 碰撞检测</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>interface NameAble {</span></span>
<span class="line"><span>  Name: string;</span></span>
<span class="line"><span>  getName(): string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 抽象类 Animal 继承动画类 实现Moveable AliveAble 接口</span></span>
<span class="line"><span>export abstract class Animal</span></span>
<span class="line"><span>  extends Animater</span></span>
<span class="line"><span>  implements MoveAble, AliveAble, CollisionCheckAble, NameAble, transformAble</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  // 移动</span></span>
<span class="line"><span>  moveSpeedX = 0;</span></span>
<span class="line"><span>  moveSpeedY = 0;</span></span>
<span class="line"><span>  abstract move(timeInterval: number): void;</span></span>
<span class="line"><span>  // 存活</span></span>
<span class="line"><span>  aliveFlag = true;</span></span>
<span class="line"><span>  setAliveFlag(newVal: boolean): void {</span></span>
<span class="line"><span>    this.aliveFlag = newVal;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  getAliveFlag(): boolean {</span></span>
<span class="line"><span>    return this.aliveFlag;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 可碰撞检测</span></span>
<span class="line"><span>  collisionCheckPosX = 0;</span></span>
<span class="line"><span>  collisionCheckPosY = 0;</span></span>
<span class="line"><span>  collisionCheckWidth = 0;</span></span>
<span class="line"><span>  collisionCheckHeight = 0;</span></span>
<span class="line"><span>  collisionCheckRadius = 0;</span></span>
<span class="line"><span>  collisionCheckUpdate(): void {</span></span>
<span class="line"><span>    // 圆形碰撞检测</span></span>
<span class="line"><span>    this.collisionCheckPosX = this.posX + this.drawWidth / 2;</span></span>
<span class="line"><span>    this.collisionCheckPosY = this.posY + this.drawHeight / 2;</span></span>
<span class="line"><span>    this.collisionCheckRadius =</span></span>
<span class="line"><span>      (Math.min(this.drawWidth, this.drawHeight) / 2) * 0.8;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  isCollision(obj: CollisionCheckAble): boolean {</span></span>
<span class="line"><span>    this.collisionCheckUpdate();</span></span>
<span class="line"><span>    obj.collisionCheckUpdate();</span></span>
<span class="line"><span>    const dX = this.collisionCheckPosX - obj.collisionCheckPosX;</span></span>
<span class="line"><span>    const dY = this.collisionCheckPosY - obj.collisionCheckPosY;</span></span>
<span class="line"><span>    const distance = Math.sqrt(dX * dX + dY * dY);</span></span>
<span class="line"><span>    return distance &lt; this.collisionCheckRadius + obj.collisionCheckRadius;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    this.collisionCheckUpdate();</span></span>
<span class="line"><span>    super.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D): void {</span></span>
<span class="line"><span>    // Context2D.beginPath();</span></span>
<span class="line"><span>    // Context2D.arc(this.collisionCheckPosX, this.collisionCheckPosY, this.collisionCheckRadius, 0, Math.PI * 2);</span></span>
<span class="line"><span>    // Context2D.stroke();</span></span>
<span class="line"><span>    // Context2D.strokeRect(this.posX, this.posY, this.drawWidth, this.drawHeight);</span></span>
<span class="line"><span>    super.draw(Context2D);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // put it on ground();</span></span>
<span class="line"><span>  setOnGround(groundPosY: number): Animal {</span></span>
<span class="line"><span>    this.posY = groundPosY - this.drawHeight;</span></span>
<span class="line"><span>    return this;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 水平和垂直平移</span></span>
<span class="line"><span>  transform(stepX: number, stepY: number) {</span></span>
<span class="line"><span>    this.posX += stepX;</span></span>
<span class="line"><span>    this.posY += stepY;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  abstract Name: string;</span></span>
<span class="line"><span>  getName(): string {</span></span>
<span class="line"><span>    this.Name;</span></span>
<span class="line"><span>    return this.Name;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-2-6-使用" tabindex="-1"><a class="header-anchor" href="#_1-4-2-6-使用"><span>1.4.2.6. 使用</span></a></h4><p>于是，定义一个游戏角色：蠕虫，就会变得如此简单</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Animal } from &quot;./Animal.js&quot;;</span></span>
<span class="line"><span>import { RandomRange } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 蠕虫 继承 Animal 类</span></span>
<span class="line"><span>export class Worm extends Animal {</span></span>
<span class="line"><span>  Name = &quot;Worm&quot;;</span></span>
<span class="line"><span>  constructor(posX: number, posY: number) {</span></span>
<span class="line"><span>    super(&quot;./imgs/Worm.png&quot;, 229, 171, 0.5, [6], [&quot;idle&quot;]);</span></span>
<span class="line"><span>    this.posX = posX;</span></span>
<span class="line"><span>    this.posY = posY;</span></span>
<span class="line"><span>    this.moveSpeedX = RandomRange(0.05, 0.1);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  move(timeInterval: number) {</span></span>
<span class="line"><span>    this.posX -= this.moveSpeedX * timeInterval;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    this.move(timeInterval);</span></span>
<span class="line"><span>    super.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-3-敌人的移动模式" tabindex="-1"><a class="header-anchor" href="#_1-4-3-敌人的移动模式"><span>1.4.3. 敌人的移动模式</span></a></h3><h4 id="_1-4-3-1-原地静止的物体" tabindex="-1"><a class="header-anchor" href="#_1-4-3-1-原地静止的物体"><span>1.4.3.1. 原地静止的物体</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Animal } from &quot;./Animal.js&quot;;</span></span>
<span class="line"><span>import { RandomRange } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 鬼</span></span>
<span class="line"><span>export class Plant extends Animal {</span></span>
<span class="line"><span>  Name = &quot;Plant&quot;;</span></span>
<span class="line"><span>  constructor(posX: number, posY: number) {</span></span>
<span class="line"><span>    super(&quot;./imgs/enemy_plant.png&quot;, 60, 87, 1.5, [2], [&quot;default&quot;]);</span></span>
<span class="line"><span>    this.posX = posX;</span></span>
<span class="line"><span>    this.posY = posY;</span></span>
<span class="line"><span>    this.setFps(10);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  move(timeInterval: number): void {</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-3-2-水平直线运动的蠕虫" tabindex="-1"><a class="header-anchor" href="#_1-4-3-2-水平直线运动的蠕虫"><span>1.4.3.2. 水平直线运动的蠕虫</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Animal } from &quot;./Animal.js&quot;;</span></span>
<span class="line"><span>import { RandomRange } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 蠕虫 继承 Animal 类</span></span>
<span class="line"><span>export class Worm extends Animal {</span></span>
<span class="line"><span>  Name = &quot;Worm&quot;;</span></span>
<span class="line"><span>  constructor(posX: number, posY: number) {</span></span>
<span class="line"><span>    super(&quot;./imgs/Worm.png&quot;, 229, 171, 0.5, [6], [&quot;idle&quot;]);</span></span>
<span class="line"><span>    this.posX = posX;</span></span>
<span class="line"><span>    this.posY = posY;</span></span>
<span class="line"><span>    this.moveSpeedX = RandomRange(0.05, 0.1);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  move(timeInterval: number) {</span></span>
<span class="line"><span>    this.posX -= this.moveSpeedX * timeInterval;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    this.move(timeInterval);</span></span>
<span class="line"><span>    super.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-3-3-上下摆动的蝙蝠" tabindex="-1"><a class="header-anchor" href="#_1-4-3-3-上下摆动的蝙蝠"><span>1.4.3.3. 上下摆动的蝙蝠</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Animal } from &quot;./Animal.js&quot;;</span></span>
<span class="line"><span>import { RandomRange } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 蠕虫 继承 Animal 类</span></span>
<span class="line"><span>export class Bat extends Animal {</span></span>
<span class="line"><span>  Name = &quot;Bat&quot;;</span></span>
<span class="line"><span>  shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度</span></span>
<span class="line"><span>  shakeDeltaAngle: number; // 摆动增量 单位:弧度/毫秒</span></span>
<span class="line"><span>  shakeGapRadius: number; // 摆动范围半径 单位：像素</span></span>
<span class="line"><span>  constructor(posX: number, posY: number) {</span></span>
<span class="line"><span>    super(&quot;./imgs/Bat.png&quot;, 266, 188, 0.5, [6], [&quot;idle&quot;]);</span></span>
<span class="line"><span>    this.posX = posX;</span></span>
<span class="line"><span>    this.posY = posY;</span></span>
<span class="line"><span>    this.moveSpeedX = RandomRange(0.05, 0.1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.shakeAngle = RandomRange(Math.asin(-1), Math.asin(1));</span></span>
<span class="line"><span>    this.shakeDeltaAngle = RandomRange(Math.asin(0.001), Math.asin(0.003));</span></span>
<span class="line"><span>    this.shakeGapRadius = RandomRange(2, 5);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  shake(timeInterval: number) {</span></span>
<span class="line"><span>    this.posY += this.shakeGapRadius * Math.sin(this.shakeAngle);</span></span>
<span class="line"><span>    this.shakeAngle += this.shakeDeltaAngle * timeInterval;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  move(timeInterval: number) {</span></span>
<span class="line"><span>    this.posX -= this.moveSpeedX * timeInterval;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    this.move(timeInterval);</span></span>
<span class="line"><span>    this.shake(timeInterval);</span></span>
<span class="line"><span>    super.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>周期线性运动的蝙蝠</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Animal } from &quot;./Animal.js&quot;;</span></span>
<span class="line"><span>import { RandomRange } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 蠕虫 继承 Animal 类</span></span>
<span class="line"><span>export class GhostBird extends Animal {</span></span>
<span class="line"><span>  Name = &quot;GhostBird&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  asline: {</span></span>
<span class="line"><span>    angle: number;</span></span>
<span class="line"><span>    angleIncreaseSpeed: number;</span></span>
<span class="line"><span>    factorX: number;</span></span>
<span class="line"><span>    factorY: number;</span></span>
<span class="line"><span>  } = {</span></span>
<span class="line"><span>    angle: 0,</span></span>
<span class="line"><span>    angleIncreaseSpeed: 0,</span></span>
<span class="line"><span>    factorX: 0,</span></span>
<span class="line"><span>    factorY: 0,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  CANVAS_WIDTH: number;</span></span>
<span class="line"><span>  CANVAS_HEIGHT: number;</span></span>
<span class="line"><span>  offsetY: number;</span></span>
<span class="line"><span>  offsetX: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(</span></span>
<span class="line"><span>    posX: number,</span></span>
<span class="line"><span>    posY: number,</span></span>
<span class="line"><span>    CANVAS_WIDTH: number,</span></span>
<span class="line"><span>    CANVAS_HEIGHT: number</span></span>
<span class="line"><span>  ) {</span></span>
<span class="line"><span>    super(&quot;./imgs/GhostBird.png&quot;, 218, 177, 0.5, [6], [&quot;idle&quot;]);</span></span>
<span class="line"><span>    this.posX = posX;</span></span>
<span class="line"><span>    this.posY = posY;</span></span>
<span class="line"><span>    this.CANVAS_WIDTH = CANVAS_WIDTH;</span></span>
<span class="line"><span>    this.CANVAS_HEIGHT = CANVAS_HEIGHT;</span></span>
<span class="line"><span>    this.moveSpeedX = RandomRange(0.4, 1);</span></span>
<span class="line"><span>    // for asline</span></span>
<span class="line"><span>    this.offsetX = 0; // 相对于屏幕右上角0，0位置的偏移量</span></span>
<span class="line"><span>    this.offsetY = 0;</span></span>
<span class="line"><span>    this.asline.angle = (Math.PI / 365) * RandomRange(-365, 365); // 初相角 -1 ~ 1</span></span>
<span class="line"><span>    this.asline.angleIncreaseSpeed =</span></span>
<span class="line"><span>      (Math.PI / 365) * RandomRange(30, 90) * Math.sign(RandomRange(-1, 1)); // 移动周期 30~90 感觉不错</span></span>
<span class="line"><span>    this.asline.factorX = (Math.PI / 365) * 0.45;</span></span>
<span class="line"><span>    this.asline.factorY = (Math.PI / 365) * 0.35;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  transform(stepX: number, stepY: number): void {</span></span>
<span class="line"><span>    // this.offsetX += stepX;</span></span>
<span class="line"><span>    // this.offsetY += stepY;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  move_asline(timeInterval: number) {</span></span>
<span class="line"><span>    // 线性运动</span></span>
<span class="line"><span>    this.posX =</span></span>
<span class="line"><span>      this.offsetX +</span></span>
<span class="line"><span>      (this.CANVAS_WIDTH / 2) *</span></span>
<span class="line"><span>        Math.cos(this.asline.angle * this.asline.factorX) +</span></span>
<span class="line"><span>      (this.CANVAS_WIDTH / 2 - this.drawWidth / 2);</span></span>
<span class="line"><span>    this.posY =</span></span>
<span class="line"><span>      this.offsetY +</span></span>
<span class="line"><span>      (this.CANVAS_HEIGHT / 2) *</span></span>
<span class="line"><span>        Math.sin(this.asline.angle * this.asline.factorY) +</span></span>
<span class="line"><span>      (this.CANVAS_HEIGHT / 2 - this.drawHeight / 2);</span></span>
<span class="line"><span>    const angleStep = this.asline.angleIncreaseSpeed * timeInterval;</span></span>
<span class="line"><span>    this.asline.angle += angleStep;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  move(timeInterval: number) {</span></span>
<span class="line"><span>    this.posX -= this.moveSpeedX * timeInterval;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    this.move_asline(timeInterval);</span></span>
<span class="line"><span>    super.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-3-4-随机无规律移动的齿轮" tabindex="-1"><a class="header-anchor" href="#_1-4-3-4-随机无规律移动的齿轮"><span>1.4.3.4. 随机无规律移动的齿轮</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Animal } from &quot;./Animal.js&quot;;</span></span>
<span class="line"><span>import { RandomRange } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 蠕虫 继承 Animal 类</span></span>
<span class="line"><span>export class Gear extends Animal {</span></span>
<span class="line"><span>  Name = &quot;Gear&quot;;</span></span>
<span class="line"><span>  reArrange_NewPosX: number;</span></span>
<span class="line"><span>  reArrange_NewPosY: number;</span></span>
<span class="line"><span>  reArrange_MoveSpeed: number; // 移动速度</span></span>
<span class="line"><span>  reArrange_Timer = 0;</span></span>
<span class="line"><span>  reArrange_TimeInterval: number;</span></span>
<span class="line"><span>  CANVAS_WIDTH: number;</span></span>
<span class="line"><span>  CANVAS_HEIGHT: number;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(</span></span>
<span class="line"><span>    posX: number,</span></span>
<span class="line"><span>    posY: number,</span></span>
<span class="line"><span>    CANVAS_WIDTH: number,</span></span>
<span class="line"><span>    CANVAS_HEIGHT: number</span></span>
<span class="line"><span>  ) {</span></span>
<span class="line"><span>    super(&quot;./imgs/Gear.png&quot;, 213, 212, 0.5, [6], [&quot;idle&quot;]);</span></span>
<span class="line"><span>    this.posX = posX;</span></span>
<span class="line"><span>    this.posY = posY;</span></span>
<span class="line"><span>    this.CANVAS_WIDTH = CANVAS_WIDTH;</span></span>
<span class="line"><span>    this.CANVAS_HEIGHT = CANVAS_HEIGHT;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.moveSpeedX = RandomRange(0.4, 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // randomReArrange_ment</span></span>
<span class="line"><span>    this.reArrange_NewPosX = this.posX;</span></span>
<span class="line"><span>    this.reArrange_NewPosY = this.posY;</span></span>
<span class="line"><span>    this.reArrange_TimeInterval = Math.floor(RandomRange(500, 2000)); // 0.5 ~ 2 秒</span></span>
<span class="line"><span>    this.reArrange_MoveSpeed = RandomRange(0.5, 2.0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 平移</span></span>
<span class="line"><span>  transform(stepX: number, stepY: number): void {</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>    // 决定其是否跟随场景移动的代码</span></span>
<span class="line"><span>    this.posX += stepX;</span></span>
<span class="line"><span>    this.posY += stepY;</span></span>
<span class="line"><span>    this.reArrange_NewPosX += stepX; // dx要根据这个来计算，所以也要平移</span></span>
<span class="line"><span>    this.reArrange_NewPosY += stepY;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  reArrange(timeInterval: number) {</span></span>
<span class="line"><span>    // 重新排列</span></span>
<span class="line"><span>    if ((this.reArrange_Timer += timeInterval) &gt;= this.reArrange_TimeInterval) {</span></span>
<span class="line"><span>      this.reArrange_Timer = 0;</span></span>
<span class="line"><span>      // 随机位置，注意其范围区间</span></span>
<span class="line"><span>      this.reArrange_NewPosX = RandomRange(0, this.CANVAS_WIDTH);</span></span>
<span class="line"><span>      this.reArrange_NewPosY = RandomRange(0, this.CANVAS_HEIGHT);</span></span>
<span class="line"><span>      console.log(this.reArrange_NewPosX);</span></span>
<span class="line"><span>      console.log(this.reArrange_NewPosY);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    const dx = (this.reArrange_NewPosX - this.posX) / 1000;</span></span>
<span class="line"><span>    const dy = (this.reArrange_NewPosY - this.posY) / 1000;</span></span>
<span class="line"><span>    const moveStep = this.reArrange_MoveSpeed * timeInterval;</span></span>
<span class="line"><span>    this.posX += dx * moveStep;</span></span>
<span class="line"><span>    this.posY += dy * moveStep;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  move(timeInterval: number) {</span></span>
<span class="line"><span>    this.posX -= this.moveSpeedX * timeInterval;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    this.reArrange(timeInterval);</span></span>
<span class="line"><span>    // this.move(timeInterval);</span></span>
<span class="line"><span>    super.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-4-视差背景原理" tabindex="-1"><a class="header-anchor" href="#_1-4-4-视差背景原理"><span>1.4.4. 视差背景原理</span></a></h3><h4 id="_1-4-4-1-无限滚动的背景原理" tabindex="-1"><a class="header-anchor" href="#_1-4-4-1-无限滚动的背景原理"><span>1.4.4.1. 无限滚动的背景原理</span></a></h4>`,21),y=i(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>var myCanvas = document.querySelector(&quot;#myCanvas&quot;) as HTMLCanvasElement;</span></span>
<span class="line"><span>// 获取2d的上下文环境对象，该对象包含画笔设置和一些方法</span></span>
<span class="line"><span>var ctx = myCanvas.getContext(&quot;2d&quot;) as CanvasRenderingContext2D;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// canvas的默认大小为300x150px 需手动修改</span></span>
<span class="line"><span>const CANVAS_WIDTH = (myCanvas.width = 800);</span></span>
<span class="line"><span>const CANVAS_HEIGHT = (myCanvas.height = 700);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let gameScrollSpeed = 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 层</span></span>
<span class="line"><span>const backgroundLayer1 = new Image();</span></span>
<span class="line"><span>backgroundLayer1.src = &quot;./imgs/layer-1.png&quot;;</span></span>
<span class="line"><span>const backgroundLayer2 = new Image();</span></span>
<span class="line"><span>backgroundLayer2.src = &quot;./imgs/layer-2.png&quot;;</span></span>
<span class="line"><span>const backgroundLayer3 = new Image();</span></span>
<span class="line"><span>backgroundLayer3.src = &quot;./imgs/layer-3.png&quot;;</span></span>
<span class="line"><span>const backgroundLayer4 = new Image();</span></span>
<span class="line"><span>backgroundLayer4.src = &quot;./imgs/layer-4.png&quot;;</span></span>
<span class="line"><span>const backgroundLayer5 = new Image();</span></span>
<span class="line"><span>backgroundLayer5.src = &quot;./imgs/layer-5.png&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let Layer4offsetX1 = 0;</span></span>
<span class="line"><span>let Layer4offsetX2 = 2400;</span></span>
<span class="line"><span>(function animate() {</span></span>
<span class="line"><span>  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);</span></span>
<span class="line"><span>  ctx.drawImage(backgroundLayer4, Layer4offsetX1, 0);</span></span>
<span class="line"><span>  ctx.drawImage(backgroundLayer5, Layer4offsetX2, 0);</span></span>
<span class="line"><span>  // 如果第一张图滚动展示完毕，就将其放到第二张图的后面</span></span>
<span class="line"><span>  if (Layer4offsetX1 &lt; -2400) Layer4offsetX1 = Layer4offsetX2 + 2400;</span></span>
<span class="line"><span>  // 如果第二张图滚动展示完毕，就将其放到第一张图的后面</span></span>
<span class="line"><span>  if (Layer4offsetX2 &lt; -2400) Layer4offsetX2 = Layer4offsetX1 + 2400;</span></span>
<span class="line"><span>  Layer4offsetX1 -= gameScrollSpeed; // 更新位置</span></span>
<span class="line"><span>  Layer4offsetX2 -= gameScrollSpeed; // 更新位置</span></span>
<span class="line"><span>  requestAnimationFrame(animate); // 刷新</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-4-2-视差背景的实现" tabindex="-1"><a class="header-anchor" href="#_1-4-4-2-视差背景的实现"><span>1.4.4.2. 视差背景的实现</span></a></h4>`,2),A=i(`<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>var myCanvas = document.querySelector(&quot;#myCanvas&quot;) as HTMLCanvasElement;</span></span>
<span class="line"><span>var ctx = myCanvas.getContext(&quot;2d&quot;) as CanvasRenderingContext2D; // 获取2d的上下文环境对象，该对象包含画笔设置和一些方法</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// canvas的默认大小为300x150px 需手动修改</span></span>
<span class="line"><span>const CANVAS_WIDTH = (myCanvas.width = 1080);</span></span>
<span class="line"><span>const CANVAS_HEIGHT = (myCanvas.height = 720);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let gameScrollSpeed = 10;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const backgroundLayer1 = new Image();</span></span>
<span class="line"><span>backgroundLayer1.src = &quot;./imgs/layer-1.png&quot;;</span></span>
<span class="line"><span>const backgroundLayer2 = new Image();</span></span>
<span class="line"><span>backgroundLayer2.src = &quot;./imgs/layer-2.png&quot;;</span></span>
<span class="line"><span>const backgroundLayer3 = new Image();</span></span>
<span class="line"><span>backgroundLayer3.src = &quot;./imgs/layer-3.png&quot;;</span></span>
<span class="line"><span>const backgroundLayer4 = new Image();</span></span>
<span class="line"><span>backgroundLayer4.src = &quot;./imgs/layer-4.png&quot;;</span></span>
<span class="line"><span>const backgroundLayer5 = new Image();</span></span>
<span class="line"><span>backgroundLayer5.src = &quot;./imgs/layer-5.png&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let baclkgroundlayers = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;layer1&quot;,</span></span>
<span class="line"><span>    img: backgroundLayer1,</span></span>
<span class="line"><span>    imgWidth: 2400,</span></span>
<span class="line"><span>    Xoffset1: 0,</span></span>
<span class="line"><span>    Xoffset2: 2400,</span></span>
<span class="line"><span>    speedModify: 0.1,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;layer2&quot;,</span></span>
<span class="line"><span>    img: backgroundLayer2,</span></span>
<span class="line"><span>    imgWidth: 2400,</span></span>
<span class="line"><span>    Xoffset1: 0,</span></span>
<span class="line"><span>    Xoffset2: 2400,</span></span>
<span class="line"><span>    speedModify: 0.3,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;layer3-cloud&quot;,</span></span>
<span class="line"><span>    img: backgroundLayer3,</span></span>
<span class="line"><span>    imgWidth: 2400,</span></span>
<span class="line"><span>    Xoffset1: 0,</span></span>
<span class="line"><span>    Xoffset2: 2400,</span></span>
<span class="line"><span>    speedModify: 0.5,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;layer4&quot;,</span></span>
<span class="line"><span>    img: backgroundLayer4,</span></span>
<span class="line"><span>    imgWidth: 2400,</span></span>
<span class="line"><span>    Xoffset1: 0,</span></span>
<span class="line"><span>    Xoffset2: 2400,</span></span>
<span class="line"><span>    speedModify: 0.65,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    name: &quot;layer5-floor&quot;,</span></span>
<span class="line"><span>    img: backgroundLayer5,</span></span>
<span class="line"><span>    imgWidth: 2400,</span></span>
<span class="line"><span>    Xoffset1: 0,</span></span>
<span class="line"><span>    Xoffset2: 2400,</span></span>
<span class="line"><span>    speedModify: 1.0,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function refreshBackgroundLayers() {</span></span>
<span class="line"><span>  // 渲染背景</span></span>
<span class="line"><span>  baclkgroundlayers.forEach((layerItem) =&gt; {</span></span>
<span class="line"><span>    // 逐层渲染背景</span></span>
<span class="line"><span>    ctx.drawImage(layerItem.img, layerItem.Xoffset1, 0);</span></span>
<span class="line"><span>    ctx.drawImage(layerItem.img, layerItem.Xoffset2, 0);</span></span>
<span class="line"><span>    if (layerItem.Xoffset1 &lt; -layerItem.imgWidth)</span></span>
<span class="line"><span>      layerItem.Xoffset1 = layerItem.Xoffset2 + layerItem.imgWidth; // 如果第一张图滚动展示完毕，就将其放到第二张图的后面</span></span>
<span class="line"><span>    if (layerItem.Xoffset2 &lt; -layerItem.imgWidth)</span></span>
<span class="line"><span>      layerItem.Xoffset2 = layerItem.Xoffset1 + layerItem.imgWidth; // 如果第二张图滚动展示完毕，就将其放到第一张图的后面</span></span>
<span class="line"><span>    layerItem.Xoffset1 -= gameScrollSpeed * layerItem.speedModify; // 更新位置</span></span>
<span class="line"><span>    layerItem.Xoffset2 -= gameScrollSpeed * layerItem.speedModify; // 更新位置</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>(function animate() {</span></span>
<span class="line"><span>  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 清除</span></span>
<span class="line"><span>  refreshBackgroundLayers(); // 渲染背景</span></span>
<span class="line"><span>  requestAnimationFrame(animate); // 刷新</span></span>
<span class="line"><span>})();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-4-3-最终的抽象、封装、实现" tabindex="-1"><a class="header-anchor" href="#_1-4-4-3-最终的抽象、封装、实现"><span>1.4.4.3. 最终的抽象、封装、实现</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 可滚动的背景层</span></span>
<span class="line"><span>export class Layer {</span></span>
<span class="line"><span>  readonly CANVAS_WIDTH: number;</span></span>
<span class="line"><span>  readonly CANVAS_HEIGHT: number;</span></span>
<span class="line"><span>  img: HTMLImageElement;</span></span>
<span class="line"><span>  imgWidth: number;</span></span>
<span class="line"><span>  imgHeight: number;</span></span>
<span class="line"><span>  pos1_X: number;</span></span>
<span class="line"><span>  pox1_Y: number;</span></span>
<span class="line"><span>  pos2_X: number;</span></span>
<span class="line"><span>  pox2_Y: number;</span></span>
<span class="line"><span>  private layerMoveSpeedX = 0; // 层的移动速度,一个背景的所有层的移动速度应当是一致的</span></span>
<span class="line"><span>  private layerMoveSpeedFactor = 1.0; // 层的移动速度的系数，一个背景有多个层，多个层的移动速度一致，但移动速度的系数可能不一致</span></span>
<span class="line"><span>  constructor(</span></span>
<span class="line"><span>    CANVAS_WIDTH: number,</span></span>
<span class="line"><span>    CANVAS_HEIGHT: number,</span></span>
<span class="line"><span>    imgSrc: string,</span></span>
<span class="line"><span>    imgWidth: number,</span></span>
<span class="line"><span>    imgHeight: number,</span></span>
<span class="line"><span>    layerMoveSpeedFactor: number</span></span>
<span class="line"><span>  ) {</span></span>
<span class="line"><span>    this.CANVAS_WIDTH = CANVAS_WIDTH;</span></span>
<span class="line"><span>    this.CANVAS_HEIGHT = CANVAS_HEIGHT;</span></span>
<span class="line"><span>    this.img = new Image();</span></span>
<span class="line"><span>    this.img.src = imgSrc;</span></span>
<span class="line"><span>    this.imgWidth = imgWidth;</span></span>
<span class="line"><span>    this.imgHeight = imgHeight;</span></span>
<span class="line"><span>    this.layerMoveSpeedFactor = layerMoveSpeedFactor;</span></span>
<span class="line"><span>    this.pos1_X = 0;</span></span>
<span class="line"><span>    this.pox1_Y = 0;</span></span>
<span class="line"><span>    this.pos2_X = this.imgWidth;</span></span>
<span class="line"><span>    this.pox2_Y = 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number) {</span></span>
<span class="line"><span>    this.pos1_X +=</span></span>
<span class="line"><span>      this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;</span></span>
<span class="line"><span>    this.pos2_X +=</span></span>
<span class="line"><span>      this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;</span></span>
<span class="line"><span>    // 图层向左移动，图层出界，向后添加新图层</span></span>
<span class="line"><span>    if (this.layerMoveSpeedX &lt; 0 &amp;&amp; this.pos1_X + this.imgWidth &lt;= 0)</span></span>
<span class="line"><span>      this.pos1_X = this.pos2_X + this.imgWidth; // 图1出界就将其放置到图2之后</span></span>
<span class="line"><span>    if (this.layerMoveSpeedX &lt; 0 &amp;&amp; this.pos2_X + this.imgWidth &lt;= 0)</span></span>
<span class="line"><span>      this.pos2_X = this.pos1_X + this.imgWidth; // 图2出界就将其放置到图1之后</span></span>
<span class="line"><span>    // 图层向右移动，图层出界，向前添加新图层</span></span>
<span class="line"><span>    if (this.layerMoveSpeedX &gt; 0 &amp;&amp; this.pos1_X &gt;= 0)</span></span>
<span class="line"><span>      this.pos2_X = this.pos1_X - this.imgWidth; // 图1出界就将其放置到图2之后</span></span>
<span class="line"><span>    if (this.layerMoveSpeedX &gt; 0 &amp;&amp; this.pos2_X &gt;= 0)</span></span>
<span class="line"><span>      this.pos1_X = this.pos2_X - this.imgWidth; // 图2出界就将其放置到图1之后</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>    Context2D.drawImage(</span></span>
<span class="line"><span>      this.img,</span></span>
<span class="line"><span>      0,</span></span>
<span class="line"><span>      0,</span></span>
<span class="line"><span>      this.imgWidth,</span></span>
<span class="line"><span>      this.imgHeight,</span></span>
<span class="line"><span>      this.pos1_X,</span></span>
<span class="line"><span>      this.pox1_Y,</span></span>
<span class="line"><span>      this.imgWidth,</span></span>
<span class="line"><span>      this.CANVAS_HEIGHT</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    Context2D.drawImage(</span></span>
<span class="line"><span>      this.img,</span></span>
<span class="line"><span>      0,</span></span>
<span class="line"><span>      0,</span></span>
<span class="line"><span>      this.imgWidth,</span></span>
<span class="line"><span>      this.imgHeight,</span></span>
<span class="line"><span>      this.pos2_X,</span></span>
<span class="line"><span>      this.pox2_Y,</span></span>
<span class="line"><span>      this.imgWidth,</span></span>
<span class="line"><span>      this.CANVAS_HEIGHT</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  setSpeed(newSpeed: number) {</span></span>
<span class="line"><span>    this.layerMoveSpeedX = newSpeed;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 可滚动的背景，该背景包含多个层</span></span>
<span class="line"><span>export abstract class Background {</span></span>
<span class="line"><span>  private _backgroundMoveSpeedX = 0; // 背景移动速度</span></span>
<span class="line"><span>  layers: Array&lt;Layer&gt; = []; // 背景</span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    this.setSpeed(0);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number) {</span></span>
<span class="line"><span>    this.layers.forEach((layer) =&gt; layer.update(timeInterval));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>    this.layers.forEach((layer) =&gt; layer.draw(Context2D));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  getSpeed() {</span></span>
<span class="line"><span>    return this._backgroundMoveSpeedX;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 修改背景的速度就是修改要所有层的移动速度，这里做等值判断是防止for循环浪费性能</span></span>
<span class="line"><span>  setSpeed(newSpeed: number) {</span></span>
<span class="line"><span>    if (this._backgroundMoveSpeedX != newSpeed) {</span></span>
<span class="line"><span>      this.layers.forEach((item) =&gt; item.setSpeed(newSpeed)); // 更新所有层的速度</span></span>
<span class="line"><span>      this._backgroundMoveSpeedX = newSpeed; // 更新背景速度</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  abstract getGroundPosY(): number;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-4-4-使用封装好的类实现一个视差背景" tabindex="-1"><a class="header-anchor" href="#_1-4-4-4-使用封装好的类实现一个视差背景"><span>1.4.4.4. 使用封装好的类实现一个视差背景</span></a></h4><p>现在实现一张视差背景只需要几行最关键的代码</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Background, Layer } from &quot;./Background.js&quot;;</span></span>
<span class="line"><span>// 背景city，由1层构成</span></span>
<span class="line"><span>export class BackgroundCity extends Background {</span></span>
<span class="line"><span>  CANVAS_WIDTH: number;</span></span>
<span class="line"><span>  CANVAS_HEIGHT: number;</span></span>
<span class="line"><span>  constructor(CANVAS_WIDTH: number, CANVAS_HEIGHT: number) {</span></span>
<span class="line"><span>    super();</span></span>
<span class="line"><span>    this.layers.push(</span></span>
<span class="line"><span>      new Layer(</span></span>
<span class="line"><span>        CANVAS_WIDTH,</span></span>
<span class="line"><span>        CANVAS_HEIGHT,</span></span>
<span class="line"><span>        &quot;./imgs/cityLayers/layer-1.png&quot;,</span></span>
<span class="line"><span>        2400,</span></span>
<span class="line"><span>        720,</span></span>
<span class="line"><span>        0.0</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    this.layers.push(</span></span>
<span class="line"><span>      new Layer(</span></span>
<span class="line"><span>        CANVAS_WIDTH,</span></span>
<span class="line"><span>        CANVAS_HEIGHT,</span></span>
<span class="line"><span>        &quot;./imgs/cityLayers/layer-2.png&quot;,</span></span>
<span class="line"><span>        2400,</span></span>
<span class="line"><span>        720,</span></span>
<span class="line"><span>        0.1</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    this.layers.push(</span></span>
<span class="line"><span>      new Layer(</span></span>
<span class="line"><span>        CANVAS_WIDTH,</span></span>
<span class="line"><span>        CANVAS_HEIGHT,</span></span>
<span class="line"><span>        &quot;./imgs/cityLayers/layer-3.png&quot;,</span></span>
<span class="line"><span>        2400,</span></span>
<span class="line"><span>        720,</span></span>
<span class="line"><span>        0.3</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    this.layers.push(</span></span>
<span class="line"><span>      new Layer(</span></span>
<span class="line"><span>        CANVAS_WIDTH,</span></span>
<span class="line"><span>        CANVAS_HEIGHT,</span></span>
<span class="line"><span>        &quot;./imgs/cityLayers/layer-4.png&quot;,</span></span>
<span class="line"><span>        2400,</span></span>
<span class="line"><span>        720,</span></span>
<span class="line"><span>        0.5</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    this.layers.push(</span></span>
<span class="line"><span>      new Layer(</span></span>
<span class="line"><span>        CANVAS_WIDTH,</span></span>
<span class="line"><span>        CANVAS_HEIGHT,</span></span>
<span class="line"><span>        &quot;./imgs/cityLayers/layer-5.png&quot;,</span></span>
<span class="line"><span>        2400,</span></span>
<span class="line"><span>        720,</span></span>
<span class="line"><span>        1.0</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    this.CANVAS_WIDTH = CANVAS_WIDTH;</span></span>
<span class="line"><span>    this.CANVAS_HEIGHT = CANVAS_HEIGHT;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  getGroundPosY(): number {</span></span>
<span class="line"><span>    return this.CANVAS_HEIGHT - 120;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-5-碰撞检测" tabindex="-1"><a class="header-anchor" href="#_1-4-5-碰撞检测"><span>1.4.5. 碰撞检测</span></a></h3><h4 id="_1-4-5-1-矩形碰撞检测" tabindex="-1"><a class="header-anchor" href="#_1-4-5-1-矩形碰撞检测"><span>1.4.5.1. 矩形碰撞检测</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>interface Rect {</span></span>
<span class="line"><span>  x: number;</span></span>
<span class="line"><span>  y: number;</span></span>
<span class="line"><span>  w: number;</span></span>
<span class="line"><span>  h: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function RectColisionDetector(reactA: Rect, reactB: Rect) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    reactA.x &lt; reactB.x + reactB.w &amp;&amp;</span></span>
<span class="line"><span>    reactA.x + reactA.w &gt; reactB.x &amp;&amp;</span></span>
<span class="line"><span>    reactA.y &lt; reactB.y + reactB.h &amp;&amp;</span></span>
<span class="line"><span>    reactA.y + reactA.h &gt; reactB.y</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-5-2-圆形碰撞检测" tabindex="-1"><a class="header-anchor" href="#_1-4-5-2-圆形碰撞检测"><span>1.4.5.2. 圆形碰撞检测</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>interface Cycle {</span></span>
<span class="line"><span>  x: number;</span></span>
<span class="line"><span>  y: number;</span></span>
<span class="line"><span>  radius: number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function CycleColisionDetector(cycleA: Cycle, cycleB: Cycle) {</span></span>
<span class="line"><span>  let distance = Math.sqrt(</span></span>
<span class="line"><span>    Math.pow(cycleA.x - cycleB.x, 2) + Math.pow(cycleA.y - cycleB.y, 2)</span></span>
<span class="line"><span>  ); // 求两坐标间距离公式</span></span>
<span class="line"><span>  return distance &lt; cycleA.radius + cycleB.radius;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-5-3-像素碰撞检测" tabindex="-1"><a class="header-anchor" href="#_1-4-5-3-像素碰撞检测"><span>1.4.5.3. 像素碰撞检测</span></a></h4><p>像素碰撞检测依赖于两个 Canvas 图层，绘制对象时，将对象的轮廓和实际图像分开绘制。</p><p>对象轮廓图层中的对象填充有颜色，可以认为这个颜色是该对象的唯一标识，</p><p>当鼠标点击轮廓图层时可以通过点击事件的坐标获取到点击处的像素值</p><p>通过像素值，遍历所有对象，匹配对象的颜色属性值，</p><p>就能判断用户是否点击到该对象</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 像素碰撞检测</span></span>
<span class="line"><span>function pixelCollsionDetection(</span></span>
<span class="line"><span>  pixelA: [number, number, number],</span></span>
<span class="line"><span>  pixelB: [number, number, number]</span></span>
<span class="line"><span>) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    pixelA[0] == pixelB[0] &amp;&amp; pixelA[1] == pixelB[1] &amp;&amp; pixelA[2] == pixelB[2]</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 鼠标点击事件监听，获取点击处的像素点</span></span>
<span class="line"><span>myCanvas.addEventListener(&quot;mousedown&quot;, (event) =&gt; {</span></span>
<span class="line"><span>  let pos: Position = { x: event.offsetX, y: event.offsetY };</span></span>
<span class="line"><span>  let imgdata = ctxCollision.getImageData(pos.x, pos.y, 1, 1); // 获取一个像素颜色</span></span>
<span class="line"><span>  for (let index = 0; index &lt; enemys.length; index++) {</span></span>
<span class="line"><span>    const item = enemys[index];</span></span>
<span class="line"><span>    if (pixelCollsionDetection(item.collisionColor, imgdata)) {</span></span>
<span class="line"><span>      // 像素碰撞检测</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-6-粒子特效" tabindex="-1"><a class="header-anchor" href="#_1-4-6-粒子特效"><span>1.4.6. 粒子特效</span></a></h3><h4 id="_1-4-6-1-定义-particle-抽象类" tabindex="-1"><a class="header-anchor" href="#_1-4-6-1-定义-particle-抽象类"><span>1.4.6.1. 定义 Particle 抽象类</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Animater } from &quot;./Animater.js&quot;;</span></span>
<span class="line"><span>import { RandomRange } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span>export abstract class Particle {</span></span>
<span class="line"><span>  posX: number;</span></span>
<span class="line"><span>  posY: number;</span></span>
<span class="line"><span>  movespeedX = 0;</span></span>
<span class="line"><span>  constructor(posX: number, posY: number) {</span></span>
<span class="line"><span>    this.posX = posX;</span></span>
<span class="line"><span>    this.posY = posY;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  abstract update(timeInterval: number): void;</span></span>
<span class="line"><span>  abstract draw(Context2D: CanvasRenderingContext2D): void;</span></span>
<span class="line"><span>  setSpeedX(newSpeed: number) {</span></span>
<span class="line"><span>    this.movespeedX = newSpeed;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-6-2-灰尘影子的实现" tabindex="-1"><a class="header-anchor" href="#_1-4-6-2-灰尘影子的实现"><span>1.4.6.2. 灰尘影子的实现</span></a></h4><p>该特效的实现的关键点是透明度的衰减速度和圆形半径的衰减速度，</p><p>需要一点一点尝试出来，另外这个地方应该使用全局透明度，而不是字符串拼接<code>rgba()</code></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>// 灰尘</span></span>
<span class="line"><span>export class Dust extends Particle {</span></span>
<span class="line"><span>  radius: number;</span></span>
<span class="line"><span>  fillStyleAlpha: number;</span></span>
<span class="line"><span>  fillStyle: string;</span></span>
<span class="line"><span>  radiusStep: number;</span></span>
<span class="line"><span>  fillStyleAlphaStep: number;</span></span>
<span class="line"><span>  constructor(posX: number, posY: number) {</span></span>
<span class="line"><span>    super(RandomRange(posX - 50, posX + 50), RandomRange(posY - 20, posY + 20));</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.radius = RandomRange(10, 20);</span></span>
<span class="line"><span>    this.radiusStep = RandomRange(0.3, 0.5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.fillStyleAlpha = 1;</span></span>
<span class="line"><span>    this.fillStyleAlphaStep = 0.01;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.fillStyle = \`rgba(0,0,0,\${this.fillStyleAlpha})\`;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    if (this.fillStyleAlpha &gt; this.fillStyleAlphaStep) {</span></span>
<span class="line"><span>      this.fillStyleAlpha -= this.fillStyleAlphaStep;</span></span>
<span class="line"><span>      this.fillStyle = \`rgba(0,0,0,\${this.fillStyleAlpha})\`;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (this.radius &gt; this.radiusStep) this.radius -= this.radiusStep;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D): void {</span></span>
<span class="line"><span>    Context2D.save();</span></span>
<span class="line"><span>    Context2D.fillStyle = this.fillStyle;</span></span>
<span class="line"><span>    Context2D.beginPath();</span></span>
<span class="line"><span>    Context2D.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);</span></span>
<span class="line"><span>    Context2D.fill();</span></span>
<span class="line"><span>    Context2D.restore();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-6-3-火焰粒子特效" tabindex="-1"><a class="header-anchor" href="#_1-4-6-3-火焰粒子特效"><span>1.4.6.3. 火焰粒子特效</span></a></h4><p>关键点同上，</p><p>另外代码中似乎应该不需要移动速度，因为火焰的粒子特效是放在场景中的，场景会带着粒子特效移动</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>export class FireImg extends Particle {</span></span>
<span class="line"><span>  img: HTMLImageElement;</span></span>
<span class="line"><span>  movespeedX: number;</span></span>
<span class="line"><span>  imgHeight: number;</span></span>
<span class="line"><span>  imgWidth: number;</span></span>
<span class="line"><span>  drawHeight: number;</span></span>
<span class="line"><span>  drawWidth: number;</span></span>
<span class="line"><span>  globalAlpha: number;</span></span>
<span class="line"><span>  globalAlphaStep: number;</span></span>
<span class="line"><span>  drawSize: number;</span></span>
<span class="line"><span>  drawSizeStep: number;</span></span>
<span class="line"><span>  constructor(posX: number, posY: number, movespeedX: number) {</span></span>
<span class="line"><span>    super(RandomRange(posX - 10, posX + 10), RandomRange(posY - 10, posY + 10));</span></span>
<span class="line"><span>    this.movespeedX = movespeedX;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.img = new Image();</span></span>
<span class="line"><span>    this.img.src = &quot;./imgs/fire.png&quot;;</span></span>
<span class="line"><span>    this.imgWidth = 100;</span></span>
<span class="line"><span>    this.imgHeight = 90;</span></span>
<span class="line"><span>    this.drawSize = RandomRange(0, 5);</span></span>
<span class="line"><span>    this.drawSizeStep = RandomRange(0.01, 0.2);</span></span>
<span class="line"><span>    this.drawWidth = this.imgWidth * this.drawSize;</span></span>
<span class="line"><span>    this.drawHeight = this.imgHeight * this.drawSize;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.globalAlpha = RandomRange(0.5, 1);</span></span>
<span class="line"><span>    this.globalAlphaStep = RandomRange(0.01, 0.01);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    if (this.globalAlpha &gt; this.globalAlphaStep)</span></span>
<span class="line"><span>      this.globalAlpha -= this.globalAlphaStep;</span></span>
<span class="line"><span>    if (this.drawSize &gt; this.drawSizeStep) {</span></span>
<span class="line"><span>      this.drawSize -= this.drawSizeStep;</span></span>
<span class="line"><span>      this.drawWidth = this.imgWidth * this.drawSize;</span></span>
<span class="line"><span>      this.drawHeight = this.imgHeight * this.drawSize;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    this.posX += this.movespeedX * timeInterval;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D): void {</span></span>
<span class="line"><span>    Context2D.save();</span></span>
<span class="line"><span>    Context2D.globalAlpha = this.globalAlpha;</span></span>
<span class="line"><span>    Context2D.drawImage(</span></span>
<span class="line"><span>      this.img,</span></span>
<span class="line"><span>      0,</span></span>
<span class="line"><span>      0,</span></span>
<span class="line"><span>      this.imgWidth,</span></span>
<span class="line"><span>      this.imgHeight,</span></span>
<span class="line"><span>      this.posX - this.drawWidth / 2,</span></span>
<span class="line"><span>      this.posY - this.drawHeight / 2,</span></span>
<span class="line"><span>      this.drawWidth,</span></span>
<span class="line"><span>      this.drawHeight</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    Context2D.restore();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-6-4-落地的爆炸火花粒子特效" tabindex="-1"><a class="header-anchor" href="#_1-4-6-4-落地的爆炸火花粒子特效"><span>1.4.6.4. 落地的爆炸火花粒子特效</span></a></h4><p>这个地方的关键点比较多，除了衰减半径和衰减透明度，还需要考虑火花飞溅的方向，速度，重力影响。</p><p>首先水平方向上，火花可以左右飞溅，所以粒子的水平方向的移动速度<code>movespeedY</code>的正负性应当是随机的。</p><p>另外还需要一个和飞溅速度相反的阻力<code>movespeedX_f</code>，来使得火花飞溅速度衰减。</p><p>其次考虑垂直方向，由于是撞向地面导致产生的火花粒子，所以粒子的垂直方向的速度<code>movespeedY</code>应当是负，</p><p>另外重力的方向<code>movespeedY_weight</code>应当是正的，用于使得粒子向上移动的速度衰减。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>export class FireImgSpak extends Particle {</span></span>
<span class="line"><span>  img: HTMLImageElement;</span></span>
<span class="line"><span>  movespeedX: number;</span></span>
<span class="line"><span>  imgHeight: number;</span></span>
<span class="line"><span>  imgWidth: number;</span></span>
<span class="line"><span>  drawHeight: number;</span></span>
<span class="line"><span>  drawWidth: number;</span></span>
<span class="line"><span>  globalAlpha: number;</span></span>
<span class="line"><span>  globalAlphaStep: number;</span></span>
<span class="line"><span>  drawSize: number;</span></span>
<span class="line"><span>  drawSizeStep: number;</span></span>
<span class="line"><span>  movespeedY: number;</span></span>
<span class="line"><span>  movespeedX_f: number;</span></span>
<span class="line"><span>  movespeedY_weight: number;</span></span>
<span class="line"><span>  constructor(posX: number, posY: number) {</span></span>
<span class="line"><span>    super(RandomRange(posX, posX), RandomRange(posY, posY));</span></span>
<span class="line"><span>    this.movespeedX = Math.sign(RandomRange(-1, 1)) * RandomRange(0.1, 2);</span></span>
<span class="line"><span>    this.movespeedY = -RandomRange(0.1, 2);</span></span>
<span class="line"><span>    this.movespeedX_f = -Math.sign(this.movespeedX) * 0.1; // 水平方向阻力,方向和移动方向相反</span></span>
<span class="line"><span>    this.movespeedY_weight = 0.1; //垂直方向的重力,和重力方向一致</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.img = new Image();</span></span>
<span class="line"><span>    this.img.src = &quot;./imgs/fire.png&quot;;</span></span>
<span class="line"><span>    this.imgWidth = 100;</span></span>
<span class="line"><span>    this.imgHeight = 90;</span></span>
<span class="line"><span>    this.drawSize = RandomRange(1, 2);</span></span>
<span class="line"><span>    this.drawSizeStep = RandomRange(0.01, 0.3);</span></span>
<span class="line"><span>    this.drawWidth = this.imgWidth * this.drawSize;</span></span>
<span class="line"><span>    this.drawHeight = this.imgHeight * this.drawSize;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.globalAlpha = RandomRange(0.8, 1);</span></span>
<span class="line"><span>    this.globalAlphaStep = RandomRange(0.01, 0.01);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    // 透明度衰减</span></span>
<span class="line"><span>    if (this.globalAlpha &gt; this.globalAlphaStep)</span></span>
<span class="line"><span>      this.globalAlpha -= this.globalAlphaStep;</span></span>
<span class="line"><span>    // 绘制大小衰减</span></span>
<span class="line"><span>    if (this.drawSize &gt; this.drawSizeStep) {</span></span>
<span class="line"><span>      this.drawSize -= this.drawSizeStep;</span></span>
<span class="line"><span>      this.drawWidth = this.imgWidth * this.drawSize;</span></span>
<span class="line"><span>      this.drawHeight = this.imgHeight * this.drawSize;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 水平方向的移动速度根据阻力衰减，由于这两个速度始终方向相反，所以只需要按照衰减速度的方式理解就行，移动速度和摩擦力相加即可</span></span>
<span class="line"><span>    if (Math.abs(this.movespeedX) &gt; Math.abs(this.movespeedX_f))</span></span>
<span class="line"><span>      this.movespeedX += this.movespeedX_f; // 摩擦力和移动方向相反，所以直接相加</span></span>
<span class="line"><span>    else this.movespeedX = 0; // 步长衰减到最小值，直接设置为0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 垂直方向</span></span>
<span class="line"><span>    if (this.movespeedY &lt;= this.movespeedY_weight)</span></span>
<span class="line"><span>      this.movespeedY += this.movespeedY_weight; // 重力始终向下，所以相减</span></span>
<span class="line"><span>    else this.movespeedY = this.movespeedY_weight;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.posX += this.movespeedX * timeInterval;</span></span>
<span class="line"><span>    this.posY += this.movespeedY * timeInterval;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D): void {</span></span>
<span class="line"><span>    Context2D.save();</span></span>
<span class="line"><span>    Context2D.globalAlpha = this.globalAlpha;</span></span>
<span class="line"><span>    Context2D.drawImage(</span></span>
<span class="line"><span>      this.img,</span></span>
<span class="line"><span>      0,</span></span>
<span class="line"><span>      0,</span></span>
<span class="line"><span>      this.imgWidth,</span></span>
<span class="line"><span>      this.imgHeight,</span></span>
<span class="line"><span>      this.posX - this.drawWidth / 2,</span></span>
<span class="line"><span>      this.posY - this.drawHeight / 2,</span></span>
<span class="line"><span>      this.drawWidth,</span></span>
<span class="line"><span>      this.drawHeight</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    Context2D.restore();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-6-5-爆炸的烟雾粒子特效" tabindex="-1"><a class="header-anchor" href="#_1-4-6-5-爆炸的烟雾粒子特效"><span>1.4.6.5. 爆炸的烟雾粒子特效</span></a></h4><p>这里值得一说的是，旋转的实现方法，具体看注释</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>export class Explosion extends Animater {</span></span>
<span class="line"><span>  sound: HTMLAudioElement;</span></span>
<span class="line"><span>  rotateAngleStep: number;</span></span>
<span class="line"><span>  rotateAngle = 0;</span></span>
<span class="line"><span>  constructor(posX: number, posY: number) {</span></span>
<span class="line"><span>    super(&quot;./imgs/boom.png&quot;, 200, 179, 1, [6], [&quot;default&quot;]);</span></span>
<span class="line"><span>    this.posX = posX;</span></span>
<span class="line"><span>    this.posY = posY;</span></span>
<span class="line"><span>    this.sound = new Audio();</span></span>
<span class="line"><span>    this.sound.src = &quot;./sounds/Ice attack 2.wav&quot;;</span></span>
<span class="line"><span>    this.rotateAngleStep =</span></span>
<span class="line"><span>      Math.sign(RandomRange(-1, 1)) * (Math.PI / 360) * RandomRange(5, 15); // +/-(15° ~ 30°)</span></span>
<span class="line"><span>    // 动画本身只有五帧，但传入的参数表示有6帧，这里再请求在最后一帧停止渲染，则会渲染空白帧</span></span>
<span class="line"><span>    this.requestStopAnimateFrameAtLastFrame();</span></span>
<span class="line"><span>    this.setFps(15);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    if (this.isFirstAnimateFrame()) this.sound.play(); // 如果是第一帧 播放音效</span></span>
<span class="line"><span>    this.rotateAngle += this.rotateAngleStep;</span></span>
<span class="line"><span>    super.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D): void {</span></span>
<span class="line"><span>    Context2D.save(); // 换新笔，旧笔context入栈</span></span>
<span class="line"><span>    Context2D.translate(</span></span>
<span class="line"><span>      this.posX + this.drawWidth / 2,</span></span>
<span class="line"><span>      this.posY + this.drawHeight / 2</span></span>
<span class="line"><span>    ); //改变原点坐标</span></span>
<span class="line"><span>    Context2D.rotate(this.rotateAngle); // 旋转画布某角度</span></span>
<span class="line"><span>    const oldValX = this.posX; // 记录旧值</span></span>
<span class="line"><span>    const oldValY = this.posY;</span></span>
<span class="line"><span>    this.posX = -this.drawWidth / 2; // 因为坐标系变了 ，原来的坐标也要变</span></span>
<span class="line"><span>    this.posY = -this.drawHeight / 2;</span></span>
<span class="line"><span>    super.draw(Context2D);</span></span>
<span class="line"><span>    this.posX = oldValX; // 恢复旧值</span></span>
<span class="line"><span>    this.posY = oldValY;</span></span>
<span class="line"><span>    Context2D.restore(); // 换回原来的笔，出栈context</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-7-输入监听和状态管理的实现" tabindex="-1"><a class="header-anchor" href="#_1-4-7-输入监听和状态管理的实现"><span>1.4.7. 输入监听和状态管理的实现</span></a></h3><p>原本写的很复杂，最终优化后就成这样了，把状态管理和输入监听解耦了，目前来看还是写的比较精简的</p><h4 id="_1-4-7-1-输入监听" tabindex="-1"><a class="header-anchor" href="#_1-4-7-1-输入监听"><span>1.4.7.1. 输入监听</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { ValueOf } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type KeyMapsValues = ValueOf&lt;typeof InputListener.KeyMaps&gt;;</span></span>
<span class="line"><span>export class InputListener {</span></span>
<span class="line"><span>  // 定义一些静态常量</span></span>
<span class="line"><span>  static KeyMaps = {</span></span>
<span class="line"><span>    PressRight: &quot;ArrowRight&quot;,</span></span>
<span class="line"><span>    PressLeft: &quot;ArrowLeft&quot;,</span></span>
<span class="line"><span>    PressUp: &quot;ArrowUp&quot;,</span></span>
<span class="line"><span>    PressDown: &quot;ArrowDown&quot;,</span></span>
<span class="line"><span>    PressSpase: &quot; &quot;,</span></span>
<span class="line"><span>    Enter: &quot;Enter&quot;,</span></span>
<span class="line"><span>    Escape: &quot;Escape&quot;,</span></span>
<span class="line"><span>  } as const; // const 可以保证ValueOf能起作用</span></span>
<span class="line"><span>  inputs: Array&lt;KeyMapsValues&gt; = [];</span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    this.listenning();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  listenning() {</span></span>
<span class="line"><span>    window.addEventListener(&quot;keydown&quot;, (event) =&gt; {</span></span>
<span class="line"><span>      if (</span></span>
<span class="line"><span>        Object.values(InputListener.KeyMaps).includes(</span></span>
<span class="line"><span>          event.key as KeyMapsValues</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      ) {</span></span>
<span class="line"><span>        this.inputs.unshift(event.key as KeyMapsValues); // 放到开头</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    window.addEventListener(&quot;keyup&quot;, (event) =&gt; {</span></span>
<span class="line"><span>      this.inputs = [];</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-7-2-状态管理" tabindex="-1"><a class="header-anchor" href="#_1-4-7-2-状态管理"><span>1.4.7.2. 状态管理</span></a></h4><p>状态管理指的是一种设计模式，是一个比较宽泛的概念，这里是我用 ts 写的，目前来看比较满意的一种写法</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { InputListener } from &quot;./InputListener.js&quot;;</span></span>
<span class="line"><span>import { ValueOf } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span>export abstract class State {</span></span>
<span class="line"><span>  stateName: string | number | symbol;</span></span>
<span class="line"><span>  constructor(stateName: string | number | symbol) {</span></span>
<span class="line"><span>    this.stateName = stateName;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  abstract enter(): void;</span></span>
<span class="line"><span>  abstract update(timeInterval: number): void;</span></span>
<span class="line"><span>  abstract inputsHandler(</span></span>
<span class="line"><span>    inputs: Array&lt;ValueOf&lt;typeof InputListener.KeyMaps&gt;&gt;</span></span>
<span class="line"><span>  ): void;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-7-3-使用状态设计模式实现状态管理-player-类的部分代码" tabindex="-1"><a class="header-anchor" href="#_1-4-7-3-使用状态设计模式实现状态管理-player-类的部分代码"><span>1.4.7.3. 使用状态设计模式实现状态管理 Player 类的部分代码</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>export class ShadowDog extends Animal {</span></span>
<span class="line"><span>  Name = &quot;ShadowDog&quot;;</span></span>
<span class="line"><span>  // 静态属性 状态枚举</span></span>
<span class="line"><span>  static StateNamesEnum = {</span></span>
<span class="line"><span>    Running: &quot;Running&quot;,</span></span>
<span class="line"><span>    Jumping: &quot;Jumping&quot;,</span></span>
<span class="line"><span>    GetHit: &quot;GetHit&quot;,</span></span>
<span class="line"><span>    PreDizzy: &quot;PreDizzy&quot;,</span></span>
<span class="line"><span>    Dizzy: &quot;Dizzy&quot;,</span></span>
<span class="line"><span>    Diving: &quot;Falling&quot;,</span></span>
<span class="line"><span>    Sitting: &quot;Sitting&quot;,</span></span>
<span class="line"><span>    Barkting: &quot;Barkting&quot;,</span></span>
<span class="line"><span>    Dying: &quot;Dying&quot;,</span></span>
<span class="line"><span>  } as const;</span></span>
<span class="line"><span>  // 状态map</span></span>
<span class="line"><span>  StateMap: { [value in ValueOf&lt;typeof ShadowDog.StateNamesEnum&gt;]?: State } =</span></span>
<span class="line"><span>    {};</span></span>
<span class="line"><span>  // 当前状态</span></span>
<span class="line"><span>  currentState!: State;</span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    this.StateMap[ShadowDog.StateNamesEnum.Running] = new RunningState(this);</span></span>
<span class="line"><span>    this.StateMap[ShadowDog.StateNamesEnum.Jumping] = new JumpingState(this);</span></span>
<span class="line"><span>    this.StateMap[ShadowDog.StateNamesEnum.Diving] = new DivingState(this);</span></span>
<span class="line"><span>    this.StateMap[ShadowDog.StateNamesEnum.Sitting] = new SittingState(this);</span></span>
<span class="line"><span>    this.StateMap[ShadowDog.StateNamesEnum.Barkting] = new BarktingState(this);</span></span>
<span class="line"><span>    this.StateMap[ShadowDog.StateNamesEnum.GetHit] = new GetHitState(this);</span></span>
<span class="line"><span>    this.StateMap[ShadowDog.StateNamesEnum.PreDizzy] = new PreDizzyState(this);</span></span>
<span class="line"><span>    this.StateMap[ShadowDog.StateNamesEnum.Dizzy] = new DizzyState(this);</span></span>
<span class="line"><span>    this.StateMap[ShadowDog.StateNamesEnum.Dying] = new DyingState(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // setState 要放到最后</span></span>
<span class="line"><span>    this.setState(ShadowDog.StateNamesEnum.Running);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 改变状态</span></span>
<span class="line"><span>  setState(stateName: ValueOf&lt;typeof ShadowDog.StateNamesEnum&gt;) {</span></span>
<span class="line"><span>    this.currentState = this.StateMap[stateName] as State;</span></span>
<span class="line"><span>    this.currentState.enter();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 更新</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    // 处理输入</span></span>
<span class="line"><span>    this.currentState.inputsHandler(this.Game.InputListener.inputs);</span></span>
<span class="line"><span>    // 更新</span></span>
<span class="line"><span>    this.currentState.update(timeInterval);</span></span>
<span class="line"><span>    // 基类的更新</span></span>
<span class="line"><span>    super.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class RunningState extends State {</span></span>
<span class="line"><span>  shadowDog: ShadowDog;</span></span>
<span class="line"><span>  constructor(shadowDog: ShadowDog) {</span></span>
<span class="line"><span>    super(ShadowDog.StateNamesEnum.Running);</span></span>
<span class="line"><span>    this.shadowDog = shadowDog;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  enter(): void {</span></span>
<span class="line"><span>    // 进入该状态，初始化到该状态</span></span>
<span class="line"><span>    this.shadowDog.moveSpeedX = 0;</span></span>
<span class="line"><span>    this.shadowDog.moveSpeedY = 0;</span></span>
<span class="line"><span>    this.shadowDog.setOnGround();</span></span>
<span class="line"><span>    this.shadowDog.changeAnimateByName(&quot;run&quot;);</span></span>
<span class="line"><span>    // 场景移动速度</span></span>
<span class="line"><span>    this.shadowDog.Game.Scene.setSceneSpeed(</span></span>
<span class="line"><span>      -this.shadowDog.maxMoveSpeedX * 0.5</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 状态的更新</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    // 添加粒子特效</span></span>
<span class="line"><span>    this.shadowDog.Game.Scene.particles.unshift(</span></span>
<span class="line"><span>      new Dust(</span></span>
<span class="line"><span>        this.shadowDog.posX + this.shadowDog.drawWidth / 2,</span></span>
<span class="line"><span>        this.shadowDog.posY + this.shadowDog.drawHeight</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>    // 检测是否收到伤害</span></span>
<span class="line"><span>    if (this.shadowDog.isGetHit(this.shadowDog.Game.Scene.enemys)) {</span></span>
<span class="line"><span>      this.shadowDog.setState(ShadowDog.StateNamesEnum.GetHit);</span></span>
<span class="line"><span>      this.shadowDog.Game.lives--; // 生命值减一</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 输入处理</span></span>
<span class="line"><span>  inputsHandler(inputs: Array&lt;ValueOf&lt;typeof InputListener.KeyMaps&gt;&gt;): void {</span></span>
<span class="line"><span>    // 如果按下右键，改变速度等的值</span></span>
<span class="line"><span>    if (inputs.includes(InputListener.KeyMaps.PressRight)) {</span></span>
<span class="line"><span>      this.shadowDog.moveSpeedX = this.shadowDog.maxMoveSpeedX * 0.5;</span></span>
<span class="line"><span>      this.shadowDog.Game.Scene.setSceneSpeed(</span></span>
<span class="line"><span>        -this.shadowDog.maxMoveSpeedX * 1.0</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>    } else if (inputs.includes(InputListener.KeyMaps.PressLeft)) {</span></span>
<span class="line"><span>      this.shadowDog.moveSpeedX = -this.shadowDog.maxMoveSpeedX * 0.5;</span></span>
<span class="line"><span>      this.shadowDog.Game.Scene.setSceneSpeed(</span></span>
<span class="line"><span>        this.shadowDog.maxMoveSpeedX * 0.5</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 按下上键，进入jump状态</span></span>
<span class="line"><span>    else if (inputs.includes(InputListener.KeyMaps.PressUp)) {</span></span>
<span class="line"><span>      this.shadowDog.setState(ShadowDog.StateNamesEnum.Jumping);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 按下上键，进入sitting状态</span></span>
<span class="line"><span>    else if (inputs.includes(InputListener.KeyMaps.PressDown))</span></span>
<span class="line"><span>      this.shadowDog.setState(ShadowDog.StateNamesEnum.Sitting);</span></span>
<span class="line"><span>    // 松开左右按键，恢复速度等的值</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>      this.shadowDog.moveSpeedX = 0;</span></span>
<span class="line"><span>      this.shadowDog.Game.Scene.setSceneSpeed(</span></span>
<span class="line"><span>        -this.shadowDog.maxMoveSpeedX * 0.5</span></span>
<span class="line"><span>      );</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-7-4-使用状态设计模式实现状态管理-game-类的部分代码" tabindex="-1"><a class="header-anchor" href="#_1-4-7-4-使用状态设计模式实现状态管理-game-类的部分代码"><span>1.4.7.4. 使用状态设计模式实现状态管理 Game 类的部分代码</span></a></h4><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>type GameStateEnum = ValueOf&lt;typeof Game.StateEnum&gt;;</span></span>
<span class="line"><span>export class Game {</span></span>
<span class="line"><span>  // 定义一些静态常量表示状态</span></span>
<span class="line"><span>  static StateEnum = {</span></span>
<span class="line"><span>    Preview: &quot;Preview&quot;,</span></span>
<span class="line"><span>    BeforeRunning: &quot;BeforeRunning&quot;,</span></span>
<span class="line"><span>    Running: &quot;Running&quot;,</span></span>
<span class="line"><span>    Stop: &quot;Stop&quot;,</span></span>
<span class="line"><span>    GameOver: &quot;GameOver&quot;,</span></span>
<span class="line"><span>  } as const;</span></span>
<span class="line"><span>  allStates: { [key in GameStateEnum]?: State } = {};</span></span>
<span class="line"><span>  currentState!: State;</span></span>
<span class="line"><span>  InputListener: InputListener;</span></span>
<span class="line"><span>  constructor(</span></span>
<span class="line"><span>    Context2D: CanvasRenderingContext2D,</span></span>
<span class="line"><span>    CANVAS_WIDTH: number,</span></span>
<span class="line"><span>    CANVAS_HEIGHT: number</span></span>
<span class="line"><span>  ) {</span></span>
<span class="line"><span>    this.InputListener = new InputListener();</span></span>
<span class="line"><span>    this.UI = new UI(this);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.allStates[Game.StateEnum.Preview] = new PreviewStatus(this);</span></span>
<span class="line"><span>    this.allStates[Game.StateEnum.BeforeRunning] = new BeforeRunning(this);</span></span>
<span class="line"><span>    this.allStates[Game.StateEnum.Running] = new RunningStatus(this);</span></span>
<span class="line"><span>    this.allStates[Game.StateEnum.Stop] = new StopStatus(this);</span></span>
<span class="line"><span>    this.allStates[Game.StateEnum.GameOver] = new GameOverStatus(this);</span></span>
<span class="line"><span>    this.setState(Game.StateEnum.Preview);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 改变状态</span></span>
<span class="line"><span>  setState(StateName: ValueOf&lt;typeof Game.StateEnum&gt;) {</span></span>
<span class="line"><span>    console.log(&quot;current:&quot; + StateName);</span></span>
<span class="line"><span>    this.currentState = this.allStates[StateName] as State;</span></span>
<span class="line"><span>    this.currentState.enter();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number) {</span></span>
<span class="line"><span>    // 当前状态对输入的处理</span></span>
<span class="line"><span>    this.currentState.inputsHandler(this.InputListener.inputs);</span></span>
<span class="line"><span>    // 当前状态的更新</span></span>
<span class="line"><span>    this.currentState.update(timeInterval);</span></span>
<span class="line"><span>    this.UI.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>    this.Scene.draw(Context2D);</span></span>
<span class="line"><span>    this.player.draw(Context2D);</span></span>
<span class="line"><span>    this.UI.draw(Context2D);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  start() {</span></span>
<span class="line"><span>    let lastTimeStampFromStart = 0;</span></span>
<span class="line"><span>    const refreshDisplay = (currentTimeStampFromStart: number) =&gt; {</span></span>
<span class="line"><span>      const timeInterval = currentTimeStampFromStart - lastTimeStampFromStart; // 计算时间间隔</span></span>
<span class="line"><span>      lastTimeStampFromStart = currentTimeStampFromStart;</span></span>
<span class="line"><span>      this.update(timeInterval);</span></span>
<span class="line"><span>      this.draw(this.Context2D);</span></span>
<span class="line"><span>      requestAnimationFrame(refreshDisplay);</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>    refreshDisplay(0);</span></span>
<span class="line"><span>    console.log(&quot;game is started.&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class PreviewStatus extends State {</span></span>
<span class="line"><span>  Game: Game;</span></span>
<span class="line"><span>  constructor(game: Game) {</span></span>
<span class="line"><span>    super(Game.StateEnum.Preview);</span></span>
<span class="line"><span>    this.Game = game;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  enter(): void {</span></span>
<span class="line"><span>    // 进入该状态</span></span>
<span class="line"><span>    this.Game.Music.currentTime = 0; // 从头开始播放</span></span>
<span class="line"><span>    this.Game.score = 0;</span></span>
<span class="line"><span>    this.Game.lives = 1000000000;</span></span>
<span class="line"><span>    this.Game.player.setState(ShadowDog.StateNamesEnum.Running);</span></span>
<span class="line"><span>    this.Game.UI.addScoreInfos = [];</span></span>
<span class="line"><span>    this.Game.Scene.enemys = [];</span></span>
<span class="line"><span>    this.Game.Scene.particles = [];</span></span>
<span class="line"><span>    this.Game.Scene.explosions = [];</span></span>
<span class="line"><span>    this.Game.Scene.spakParticles = [];</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  update(timeInterval: number): void {</span></span>
<span class="line"><span>    // 该状态需要更新的信息，如在stopGame状态，则以下两个信息都不更新就好了</span></span>
<span class="line"><span>    this.Game.Scene.update(timeInterval);</span></span>
<span class="line"><span>    this.Game.player.update(timeInterval);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  inputsHandler(inputs: Array&lt;ValueOf&lt;typeof InputListener.KeyMaps&gt;&gt;) {</span></span>
<span class="line"><span>    // 输入处理，按下enter开始游戏</span></span>
<span class="line"><span>    if (inputs.includes(InputListener.KeyMaps.Enter)) {</span></span>
<span class="line"><span>      this.Game.setState(Game.StateEnum.BeforeRunning);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-8-scene-场景" tabindex="-1"><a class="header-anchor" href="#_1-4-8-scene-场景"><span>1.4.8. Scene 场景</span></a></h3><p>主要是用来处理当背景移动，游戏中敌人应当随着背景一起移动的问题，</p><p>这里我写了一个场景类，把需要跟随场景移动的东西都放进去，</p><p>由该类来处理场景的移动速度和场景中物体坐标更新的问题</p><p>以下是部分代码</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>export class Scene {</span></span>
<span class="line"><span>  Game: Game;</span></span>
<span class="line"><span>  private SceneSpeed = 0;</span></span>
<span class="line"><span>  background: Background;</span></span>
<span class="line"><span>  constructor(Game: Game) {</span></span>
<span class="line"><span>    this.Game = Game;</span></span>
<span class="line"><span>    this.background = new BackgroundCity(</span></span>
<span class="line"><span>      this.Game.GAME_WIDTH,</span></span>
<span class="line"><span>      this.Game.GAME_HEIGHT</span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 这一步最关键，处理死亡的敌人，</span></span>
<span class="line"><span>  // 另外还要更具场景移动速度，重新计算场景中敌人的位置</span></span>
<span class="line"><span>  update(timeInterval: number) {</span></span>
<span class="line"><span>    // handles</span></span>
<span class="line"><span>    this.enemysHandle(timeInterval);</span></span>
<span class="line"><span>    // 最值处理，限制粒子特效的数量</span></span>
<span class="line"><span>    if (this.particles.length &gt; this.particlesMaxLength)</span></span>
<span class="line"><span>      this.particles.length = this.particlesMaxLength;</span></span>
<span class="line"><span>    if (this.spakParticles.length &gt; this.spakParticlesMaxLength)</span></span>
<span class="line"><span>      this.spakParticles.length = this.spakParticlesMaxLength;</span></span>
<span class="line"><span>    // 更新</span></span>
<span class="line"><span>    // 更新背景的移动速度</span></span>
<span class="line"><span>    this.background.setSpeed(this.SceneSpeed);</span></span>
<span class="line"><span>    this.background.update(timeInterval);</span></span>
<span class="line"><span>    // 移除死亡和超出屏幕的敌人</span></span>
<span class="line"><span>    this.enemys = this.enemys.filter((item) =&gt; {</span></span>
<span class="line"><span>      return !item.isOutOfLeftScreem() &amp;&amp; item.getAliveFlag();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    // 更新和重新计算敌人的坐标</span></span>
<span class="line"><span>    this.enemys.forEach((item) =&gt; {</span></span>
<span class="line"><span>      item.update(timeInterval);</span></span>
<span class="line"><span>      item.transform(this.SceneSpeed * timeInterval, 0);</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    // 更新和重新计算粒子特效的坐标</span></span>
<span class="line"><span>    this.particles.forEach((item) =&gt; {</span></span>
<span class="line"><span>      item.update(timeInterval);</span></span>
<span class="line"><span>      item.posX += this.SceneSpeed * timeInterval;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    this.explosions = this.explosions.filter((item) =&gt; {</span></span>
<span class="line"><span>      item.update(timeInterval);</span></span>
<span class="line"><span>      item.posX += this.SceneSpeed * timeInterval;</span></span>
<span class="line"><span>      return !item.isLastAnimateFrame();</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>    this.spakParticles.forEach((item) =&gt; {</span></span>
<span class="line"><span>      item.update(timeInterval);</span></span>
<span class="line"><span>      item.posX += this.SceneSpeed * timeInterval;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 绘制场景中的物体</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>    this.background.draw(Context2D);</span></span>
<span class="line"><span>    this.enemys.forEach((item) =&gt; item.draw(Context2D));</span></span>
<span class="line"><span>    this.explosions.forEach((item) =&gt; item.draw(Context2D));</span></span>
<span class="line"><span>    this.particles.forEach((item) =&gt; item.draw(Context2D));</span></span>
<span class="line"><span>    this.spakParticles.forEach((item) =&gt; item.draw(Context2D));</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 设置场景移动速度</span></span>
<span class="line"><span>  setSceneSpeed(newSpeed: number) {</span></span>
<span class="line"><span>    this.SceneSpeed = newSpeed;</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  enemysHandle(timeInterval: number) {</span></span>
<span class="line"><span>    // 周期添加敌人</span></span>
<span class="line"><span>    if ((this.addEnemyTimer += timeInterval) &gt;= this.addEnemyIntermval) {</span></span>
<span class="line"><span>      this.addEnemyTimer = 0;</span></span>
<span class="line"><span>      switch (Math.floor(RandomRange(0, 6))) {</span></span>
<span class="line"><span>        case 0: // 略</span></span>
<span class="line"><span>        case 1:</span></span>
<span class="line"><span>        case 2:</span></span>
<span class="line"><span>        case 3:</span></span>
<span class="line"><span>        case 4:</span></span>
<span class="line"><span>        case 5:</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-9-ui" tabindex="-1"><a class="header-anchor" href="#_1-4-9-ui"><span>1.4.9. UI</span></a></h3><p>UI 这部分代码写的又长又丑，只看结构</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Game } from &quot;./Game.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type addScoreInfo = { posX: number; posY: number; score: string };</span></span>
<span class="line"><span>export class UI {</span></span>
<span class="line"><span>  Game: Game;</span></span>
<span class="line"><span>  livesImg: HTMLImageElement;</span></span>
<span class="line"><span>  imgWidth: number;</span></span>
<span class="line"><span>  imgHeight: number;</span></span>
<span class="line"><span>  imgDrawWidth: number;</span></span>
<span class="line"><span>  imgDrawHeight: number;</span></span>
<span class="line"><span>  addScoreInfos: Array&lt;addScoreInfo&gt; = [];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(Game: Game) {</span></span>
<span class="line"><span>    this.Game = Game;</span></span>
<span class="line"><span>    this.livesImg = new Image();</span></span>
<span class="line"><span>    this.livesImg.src = &quot;./imgs/heart.png&quot;;</span></span>
<span class="line"><span>    this.imgWidth = 50;</span></span>
<span class="line"><span>    this.imgHeight = 50;</span></span>
<span class="line"><span>    this.imgDrawWidth = 40; //this.imgWidth * 0.5;</span></span>
<span class="line"><span>    this.imgDrawHeight = 40; // this.imgHeight * 0.5;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 对漂浮的分数的坐标的计算</span></span>
<span class="line"><span>  update(timeInterval: number) {</span></span>
<span class="line"><span>    const targetPosX = 200;</span></span>
<span class="line"><span>    const moveSpeedX = 0.1;</span></span>
<span class="line"><span>    const targetPosY = 80;</span></span>
<span class="line"><span>    const moveSpeedY = 0.1;</span></span>
<span class="line"><span>    // 这里做的操作是更新数组中的坐标，使其朝着 targetPos 所在的坐标移动</span></span>
<span class="line"><span>    this.addScoreInfos = this.addScoreInfos</span></span>
<span class="line"><span>      .map((item) =&gt; {</span></span>
<span class="line"><span>        const stepX = moveSpeedX * timeInterval;</span></span>
<span class="line"><span>        const stepY = moveSpeedY * timeInterval;</span></span>
<span class="line"><span>        if (item.posX - targetPosX &gt;= stepX) item.posX -= stepX;</span></span>
<span class="line"><span>        else if (item.posY - targetPosY &lt;= stepX) item.posX += stepX;</span></span>
<span class="line"><span>        if (item.posY - targetPosY &gt;= stepY) item.posY -= stepY;</span></span>
<span class="line"><span>        else if (item.posY - targetPosY &lt;= stepY) item.posY += stepY;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        const gapX = Math.abs(item.posX - targetPosX);</span></span>
<span class="line"><span>        const gapY = Math.abs(item.posY - targetPosY);</span></span>
<span class="line"><span>        if (gapX &lt; stepY &amp;&amp; gapY &lt; stepX) {</span></span>
<span class="line"><span>          // 当前坐标和目标坐标之间的距离小于步长，则移除该项</span></span>
<span class="line"><span>          return null as unknown as addScoreInfo;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>          return item;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      .filter((item) =&gt; item != null);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  draw(Context2D: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>    Context2D.save();</span></span>
<span class="line"><span>    const txtSize = 40;</span></span>
<span class="line"><span>    const ShadowWidth = 2;</span></span>
<span class="line"><span>    Context2D.font = \`\${txtSize}px HanaleiFill\`;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if (this.Game.currentState.stateName == Game.StateEnum.Preview) {</span></span>
<span class="line"><span>      // 预览界面：显示按下什么键开始游戏</span></span>
<span class="line"><span>    } else if (this.Game.currentState.stateName == Game.StateEnum.Running) {</span></span>
<span class="line"><span>      // 游戏运行界面</span></span>
<span class="line"><span>      // 绘制剩余的生命</span></span>
<span class="line"><span>      for (let index = 0; index &lt; this.Game.lives; index++) {</span></span>
<span class="line"><span>        Context2D.drawImage(</span></span>
<span class="line"><span>          this.livesImg,</span></span>
<span class="line"><span>          0,</span></span>
<span class="line"><span>          0,</span></span>
<span class="line"><span>          this.imgWidth,</span></span>
<span class="line"><span>          this.imgHeight,</span></span>
<span class="line"><span>          index * (this.imgDrawWidth + 10) + 10,</span></span>
<span class="line"><span>          5,</span></span>
<span class="line"><span>          this.imgDrawWidth,</span></span>
<span class="line"><span>          this.imgDrawHeight</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 绘制漂浮的得分数字</span></span>
<span class="line"><span>      this.addScoreInfos.forEach((item) =&gt; {</span></span>
<span class="line"><span>        Context2D.textAlign = &quot;left&quot;;</span></span>
<span class="line"><span>        Context2D.fillStyle = &quot;white&quot;;</span></span>
<span class="line"><span>        Context2D.fillText(item.score, item.posX, item.posY);</span></span>
<span class="line"><span>        Context2D.fillStyle = &quot;black&quot;;</span></span>
<span class="line"><span>        Context2D.fillText(</span></span>
<span class="line"><span>          item.score,</span></span>
<span class="line"><span>          item.posX + ShadowWidth,</span></span>
<span class="line"><span>          item.posY + ShadowWidth</span></span>
<span class="line"><span>        );</span></span>
<span class="line"><span>      });</span></span>
<span class="line"><span>    } else if (this.Game.currentState.stateName == Game.StateEnum.Stop) {</span></span>
<span class="line"><span>      // 游戏暂停界面</span></span>
<span class="line"><span>      // 显示按下什么键继续游戏</span></span>
<span class="line"><span>    } else if (this.Game.currentState.stateName == Game.StateEnum.GameOver) {</span></span>
<span class="line"><span>      // 游戏结束界面，显示分数</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    Context2D.restore();</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-10-字体" tabindex="-1"><a class="header-anchor" href="#_1-4-10-字体"><span>1.4.10. 字体</span></a></h3><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">// 这一步相当于是注册了一个字体，而后页面中就可以使用 \`HanaleiFill\` 这个字体</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#C586C0;">@font-face</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  font-family</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#9ECBFF;--shiki-dark:#CE9178;">&quot;HanaleiFill&quot;</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">;</span></span>
<span class="line"><span style="--shiki-light:#79B8FF;--shiki-dark:#9CDCFE;">  src</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">: </span><span style="--shiki-light:#79B8FF;--shiki-dark:#DCDCAA;">url</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#FFAB70;--shiki-dark:#9CDCFE;">../font/HanaleiFill-Regular.ttf</span><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#E1E4E8;--shiki-dark:#E6E6E6;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>Context2D.font = \`\${txtSize}px HanaleiFill\`;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>监听页面加载完毕事件和字体加载事件</strong></p><p><code>document.fonts</code> 的值是文档的 FontFaceSet 接口。FontFaceSet 接口 用于 对 加载新字体、检查已加载字体的加载状态。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>window.addEventListener(&quot;load&quot;, () =&gt; {</span></span>
<span class="line"><span> // 字体加载完成后的逻辑</span></span>
<span class="line"><span> document.fonts.ready.then(() =&gt; {</span></span>
<span class="line"><span>  // 此时DOM中的资源和字体就以加载完毕了</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-11-canvas-铺满页面屏幕的实现" tabindex="-1"><a class="header-anchor" href="#_1-4-11-canvas-铺满页面屏幕的实现"><span>1.4.11. Canvas 铺满页面屏幕的实现</span></a></h3><div class="language-less line-numbers-mode" data-highlighter="shiki" data-ext="less" data-title="less" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>* {</span></span>
<span class="line"><span>  padding: 0;</span></span>
<span class="line"><span>  margin: 0;</span></span>
<span class="line"><span>  box-sizing: border-box;</span></span>
<span class="line"><span>  overflow: hidden;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>html,</span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>  position: relative;</span></span>
<span class="line"><span>  width: 100vw;</span></span>
<span class="line"><span>  height: 100vh;</span></span>
<span class="line"><span>  #myCanvas,</span></span>
<span class="line"><span>  #loading {</span></span>
<span class="line"><span>    // 居中</span></span>
<span class="line"><span>    position: absolute;</span></span>
<span class="line"><span>    left: 50%;</span></span>
<span class="line"><span>    top: 50%;</span></span>
<span class="line"><span>    transform: translate(-50%, -50%);</span></span>
<span class="line"><span>    // 关键：设置最大宽度为屏幕宽高的100%</span></span>
<span class="line"><span>    max-width: 100vw;</span></span>
<span class="line"><span>    max-height: 100vh;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-12-自写工具类" tabindex="-1"><a class="header-anchor" href="#_1-4-12-自写工具类"><span>1.4.12. 自写工具类</span></a></h3><p>没什么好讲的，主要看注释和用例</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>export function RandomRange(from: number, to: number) {</span></span>
<span class="line"><span>  return Math.random() * (to - from) + from;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 注意传入的T需用as const修饰，否则被当做字符串</span></span>
<span class="line"><span>export type ValueOf&lt;T&gt; = T[keyof T];</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,71);function C(D,S){const e=p("RouteLink"),d=p("CodeDemo");return c(),r("div",null,[m,s("blockquote",null,[u,s("p",null,[s("u",null,[a(e,{to:"/%E9%A1%B9%E7%9B%AE/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0/demo_shadowDog/"},{default:l(()=>[n("ShadowDog:0.0.2")]),_:1})])])]),E,s("p",null,[a(e,{to:"/%E9%A1%B9%E7%9B%AE/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0/practices/1.canvas%EF%BC%9A%E5%8E%9F%E7%90%86/"},{default:l(()=>[n("原理.html")]),_:1})]),b,s("p",null,[a(e,{to:"/%E9%A1%B9%E7%9B%AE/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0/practices/2.animate%EF%BC%9A%E4%BC%98%E5%8C%96/"},{default:l(()=>[n("优化.html")]),_:1})]),a(d,{id:"code-demo-347",type:"normal",title:"%E4%BC%98%E5%8C%96%E5%8F%8A%E6%B8%B2%E6%9F%93%E6%89%80%E6%9C%89%E5%8A%A8%E5%9B%BE",code:"eJyFlf1P20YYx/+VU6ZJYWVxCKQUllZCjI1I7TQNtP0wT8jYl8Tg2Jl9eaEoEtJalQGDaQtofVG1IapO2pZQddICabd/xnaSn/Yv9Lk7v8RpaCTE2ff9PHePn7dsxwqkqMXmYxlZ0iuShVTlphgrbi2yt7XURnIuNW2WZ26IsVsZgTO3RD2jqBUka5JlAS3palEiqqF/uG7UgBN1hDKatI41lDPMQcAC1cIalgkK9uYzAmO5mafqUhGDoRjj/oQHrCkbubmZOeoO5cHCKFEBVSStTE1URcMg0iUjcO0KcqNcLAFJlzFkTtI0IOkyhjTLOoDwfwynqHfvbgHJ1jGspRIaNpWMu9tgXtJlDLmuEhojuowhNw3gNo0xVB6TAnOSP0TojMBTSotGgKqhq1rMI8uUwTIhQGLz2BKsgqQY1TXFyCdKeh7yLgAYm4xtWFCbFclEfkmim0gx5HIR6yTxbRmbWyvseMOMi7H3RtbtxEci7JlIJjUw9pEE+Lpo6ATXCFimFMohQUC9w3+co5OU0n10z27v2e199+RB97DlnH7ntC56L377/9VBr/WMPzsH950f/+g2Ot0/G73mv93XTeenA7u9Y18+dk8u3JfHog4n8qaB8/qdX3rNM+fsuXN+ZLcvp5PJ2lQ6Waqh/pMd9/t9Z+93+7+m27jg7i4ufPblwsraV9mPV5fB73jgeFVVSAF2Uumk/2keu7yU/XR5NQIXsJovkCi9UjIh88HJ6dl0VAiOSaemPQUy9rkmbWETdnVcRVmatTiPGMsgD0j3Rcd5ug/fhpZX79xm0JKGaa6Qc9SyO8/6D+85e786u+eKUbTbf4nQ197BCSgIOPwdJeG5UmL4CpEIZjxveE/ktWZQN6+uklHThMbGN05IirJUAdPbqkWwjqmRXJD0PNwziXJlXWbVH59A27TCow4Fh7DmgFPrftjDawFjltT1ebSNTKNqzaPkJJINDR5mUX2SynQyhfLUsEzHUSinhmUYQqE67atznsoGT6jP+PrUlAfAvAnltC+n/cNhyITy9eG76WQJ5dlhedMIxRvBzSlP5UMkJOZ8YoYB9cFwZnUF065OskqEDqLN+Pep8wpaj0I5E35IhqD287eIRaMMJeoT7k4HuhU49/jcKysCFfkJJWlXMMi+POs3HgIEA8FtHfUfNdLwgpzdB+4Pp879l/1GE95FPSgXnn5oGp77Qc/4VL0jkUIipxlQpKFT164hYeD6CfT+QB19PVB63yRokCA2KBqZq2gaW0bDWEzIGpbML6Bu41CE8Dc4e4I3PhZoNXMjxZSqfA5w/4NWZlmMfOEHkZnj6QNuBjq/wwNG2IzCkkNrxPnIFjejW/wrII0mhvFgkQU/SizK7vGu+/QJjP/u47bz+mf78vB6MleiI9zCJAu/GSY0N2uDUdZxL9P0jrqoB3mH11j9DSVKeWY="},{default:l(()=>[o,k]),_:1}),g,s("p",null,[a(e,{to:"/%E9%A1%B9%E7%9B%AE/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0/practices/3.%E8%A7%86%E5%B7%AE%E8%83%8C%E6%99%AF%EF%BC%9A%E5%8E%9F%E7%90%86/"})]),y,s("p",null,[a(e,{to:"/%E9%A1%B9%E7%9B%AE/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0/practices/4.%E8%A7%86%E5%B7%AE%E8%83%8C%E6%99%AF%EF%BC%9A%E4%BC%98%E5%8C%96/"},{default:l(()=>[n("视差背景.html")]),_:1})]),A])}const B=t(h,[["render",C],["__file","TypeScript写的2D游戏的实现细节笔记.html.vue"]]),f=JSON.parse('{"path":"/%E9%A1%B9%E7%9B%AE/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0.html","title":"TypeScript写的2D游戏的实现细节笔记","lang":"zh-CN","frontmatter":{"title":"TypeScript写的2D游戏的实现细节笔记","date":"2023-01-10T05:57:00.000Z","cover":"./cover/TypeScript写的2D游戏的实现细节笔记.gif","tag":["笔记"],"category":"笔记","star":true,"description":"1. TypeScript写的2D游戏的实现细节笔记 1.1. 试玩版本 URL 地址： 1.2. 源代码 源代码: https://github.com/YiguiDing/shadowDog-Typescript 1.3. 修改记录 0.0.1: 第一版 0.0.2: 压缩游戏音乐，优化加载速度，修改粒子特效移动速度和透明度的衰减方式 操作： En...","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E9%A1%B9%E7%9B%AE/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0/TypeScript%E5%86%99%E7%9A%842D%E6%B8%B8%E6%88%8F%E7%9A%84%E5%AE%9E%E7%8E%B0%E7%BB%86%E8%8A%82%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"TypeScript写的2D游戏的实现细节笔记"}],["meta",{"property":"og:description","content":"1. TypeScript写的2D游戏的实现细节笔记 1.1. 试玩版本 URL 地址： 1.2. 源代码 源代码: https://github.com/YiguiDing/shadowDog-Typescript 1.3. 修改记录 0.0.1: 第一版 0.0.2: 压缩游戏音乐，优化加载速度，修改粒子特效移动速度和透明度的衰减方式 操作： En..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T09:30:40.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:published_time","content":"2023-01-10T05:57:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T09:30:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TypeScript写的2D游戏的实现细节笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-10T05:57:00.000Z\\",\\"dateModified\\":\\"2024-03-18T09:30:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"1.1. 试玩版本","slug":"_1-1-试玩版本","link":"#_1-1-试玩版本","children":[]},{"level":2,"title":"1.2. 源代码","slug":"_1-2-源代码","link":"#_1-2-源代码","children":[]},{"level":2,"title":"1.3. 修改记录","slug":"_1-3-修改记录","link":"#_1-3-修改记录","children":[]},{"level":2,"title":"1.4. TypeScript写的2D游戏的实现细节笔记","slug":"_1-4-typescript写的2d游戏的实现细节笔记","link":"#_1-4-typescript写的2d游戏的实现细节笔记","children":[{"level":3,"title":"1.4.1. 笔记目录","slug":"_1-4-1-笔记目录","link":"#_1-4-1-笔记目录","children":[]},{"level":3,"title":"1.4.2. Canvas 绘图基本步骤","slug":"_1-4-2-canvas-绘图基本步骤","link":"#_1-4-2-canvas-绘图基本步骤","children":[]},{"level":3,"title":"1.4.3. 敌人的移动模式","slug":"_1-4-3-敌人的移动模式","link":"#_1-4-3-敌人的移动模式","children":[]},{"level":3,"title":"1.4.4. 视差背景原理","slug":"_1-4-4-视差背景原理","link":"#_1-4-4-视差背景原理","children":[]},{"level":3,"title":"1.4.5. 碰撞检测","slug":"_1-4-5-碰撞检测","link":"#_1-4-5-碰撞检测","children":[]},{"level":3,"title":"1.4.6. 粒子特效","slug":"_1-4-6-粒子特效","link":"#_1-4-6-粒子特效","children":[]},{"level":3,"title":"1.4.7. 输入监听和状态管理的实现","slug":"_1-4-7-输入监听和状态管理的实现","link":"#_1-4-7-输入监听和状态管理的实现","children":[]},{"level":3,"title":"1.4.8. Scene 场景","slug":"_1-4-8-scene-场景","link":"#_1-4-8-scene-场景","children":[]},{"level":3,"title":"1.4.9. UI","slug":"_1-4-9-ui","link":"#_1-4-9-ui","children":[]},{"level":3,"title":"1.4.10. 字体","slug":"_1-4-10-字体","link":"#_1-4-10-字体","children":[]},{"level":3,"title":"1.4.11. Canvas 铺满页面屏幕的实现","slug":"_1-4-11-canvas-铺满页面屏幕的实现","link":"#_1-4-11-canvas-铺满页面屏幕的实现","children":[]},{"level":3,"title":"1.4.12. 自写工具类","slug":"_1-4-12-自写工具类","link":"#_1-4-12-自写工具类","children":[]}]}],"git":{"createdTime":1710750676000,"updatedTime":1710754240000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":2}]},"readingTime":{"minutes":25.15,"words":7546},"filePathRelative":"项目/TypeScript写的2D游戏的实现细节笔记/TypeScript写的2D游戏的实现细节笔记.md","localizedDate":"2023年1月10日","excerpt":"","autoDesc":true}');export{B as comp,f as data};
