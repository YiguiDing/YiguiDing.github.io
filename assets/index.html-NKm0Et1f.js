import{_ as a,r as e,c as i,a as s,d as l,w as p,b as t,o as c,e as d}from"./app-B95iU7Vh.js";const r="/assets/%E6%89%93%E7%A0%96%E5%9D%97%E5%B0%8F%E6%B8%B8%E6%88%8FDemo%E5%AE%9E%E7%8E%B0%E8%AE%B0%E5%BD%95-DNXHC52B.gif",v={},u=s("h2",{id:"打砖块小游戏-demo-实现记录",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#打砖块小游戏-demo-实现记录"},[s("span",null,"打砖块小游戏 Demo 实现记录")])],-1),m=s("p",null,[s("img",{src:r,alt:""})],-1),o=t(`<h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span>目录</span></a></h2><ul><li><a href="#%E6%89%93%E7%A0%96%E5%9D%97%E5%B0%8F%E6%B8%B8%E6%88%8F-demo-%E5%AE%9E%E7%8E%B0%E8%AE%B0%E5%BD%95">打砖块小游戏 Demo 实现记录</a></li><li><a href="#%E7%9B%AE%E5%BD%95">目录</a></li><li><a href="#indexts">index.ts</a></li><li><a href="#gamets">Game.ts</a></li><li><a href="#inputlistenerts">InputListener.ts</a></li><li><a href="#utilsts">utils.ts</a></li><li><a href="#ballts">Ball.ts</a></li><li><a href="#wallts">Wall.ts</a></li></ul><h2 id="index-ts" tabindex="-1"><a class="header-anchor" href="#index-ts"><span>index.ts</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Game } from &quot;./Game.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>document.addEventListener(&quot;DOMContentLoaded&quot;, () =&gt; {</span></span>
<span class="line"><span> var canvas = document.getElementById(&quot;canvas&quot;) as HTMLCanvasElement;</span></span>
<span class="line"><span> var context = canvas.getContext(&quot;2d&quot;) as CanvasRenderingContext2D;</span></span>
<span class="line"><span> new Game(canvas, context).start();</span></span>
<span class="line"><span>});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="game-ts" tabindex="-1"><a class="header-anchor" href="#game-ts"><span>Game.ts</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { Ball } from &quot;./Ball.js&quot;;</span></span>
<span class="line"><span>import { Wall } from &quot;./Wall.js&quot;;</span></span>
<span class="line"><span>import { Processor } from &quot;./Processor.js&quot;;</span></span>
<span class="line"><span>import { InputListener } from &quot;./InputListener.js&quot;;</span></span>
<span class="line"><span>import { Player } from &quot;./Player.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export class Game {</span></span>
<span class="line"><span> GAME_WIDTH = 1080;</span></span>
<span class="line"><span> GAME_HEIGHT = 760;</span></span>
<span class="line"><span> ball: Ball;</span></span>
<span class="line"><span> wall: Wall;</span></span>
<span class="line"><span> player: Player;</span></span>
<span class="line"><span> inputListener = new InputListener();</span></span>
<span class="line"><span> processor = new Processor();</span></span>
<span class="line"><span> constructor(private canvas: HTMLCanvasElement, private context: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>  this.canvas = canvas;</span></span>
<span class="line"><span>  this.context = context;</span></span>
<span class="line"><span>  this.canvas.width = this.GAME_WIDTH;</span></span>
<span class="line"><span>  this.canvas.height = this.GAME_HEIGHT;</span></span>
<span class="line"><span>  this.wall = new Wall(10, 10, this.GAME_WIDTH, 300, this.GAME_WIDTH, this.GAME_HEIGHT);</span></span>
<span class="line"><span>  this.ball = new Ball(this.GAME_WIDTH / 2, this.GAME_HEIGHT * 0.9, this.GAME_WIDTH, this.GAME_HEIGHT);</span></span>
<span class="line"><span>  this.player = new Player(this.GAME_WIDTH / 2, this.GAME_HEIGHT * 0.9, this.GAME_WIDTH, this.GAME_HEIGHT);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> update(timeInterval: number) {</span></span>
<span class="line"><span>  this.ball.update(timeInterval);</span></span>
<span class="line"><span>  this.player.update(timeInterval);</span></span>
<span class="line"><span>  this.processor.process(this);</span></span>
<span class="line"><span>  this.processor.inputHandler(this, this.inputListener.inputs);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> draw(context: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>  context.clearRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGHT);</span></span>
<span class="line"><span>  this.ball.draw(context);</span></span>
<span class="line"><span>  this.wall.draw(context);</span></span>
<span class="line"><span>  this.player.draw(context);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> refresh(timeInterval: number, context: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>  this.update(timeInterval);</span></span>
<span class="line"><span>  this.draw(context);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> start() {</span></span>
<span class="line"><span>  let self = this;</span></span>
<span class="line"><span>  let last = 0;</span></span>
<span class="line"><span>  function animate(current: number) {</span></span>
<span class="line"><span>   self.refresh(current - last, self.context);</span></span>
<span class="line"><span>   last = current;</span></span>
<span class="line"><span>   requestAnimationFrame(animate);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  animate(0);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inputlistener-ts" tabindex="-1"><a class="header-anchor" href="#inputlistener-ts"><span>InputListener.ts</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { ValueOf } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export type KeyMapValue = ValueOf&lt;typeof InputListener.KeyMap&gt;;</span></span>
<span class="line"><span>export type TypeInputs = Array&lt;KeyMapValue&gt;;</span></span>
<span class="line"><span>export class InputListener {</span></span>
<span class="line"><span> static KeyMap = {</span></span>
<span class="line"><span>  PressRight: &quot;ArrowRight&quot;,</span></span>
<span class="line"><span>  PressLeft: &quot;ArrowLeft&quot;,</span></span>
<span class="line"><span>  PressUp: &quot;ArrowUp&quot;,</span></span>
<span class="line"><span>  PressDown: &quot;ArrowDown&quot;,</span></span>
<span class="line"><span>  PressSpace: &quot; &quot;,</span></span>
<span class="line"><span>  Enter: &quot;Enter&quot;,</span></span>
<span class="line"><span>  Escape: &quot;Escape&quot;</span></span>
<span class="line"><span> } as const; // const 可以保证ValueOf能起作用</span></span>
<span class="line"><span> inputs: TypeInputs = [];</span></span>
<span class="line"><span> constructor() {</span></span>
<span class="line"><span>  this.listening();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> listening() {</span></span>
<span class="line"><span>  window.addEventListener(&quot;keydown&quot;, event =&gt; {</span></span>
<span class="line"><span>   let key = event.key as KeyMapValue;</span></span>
<span class="line"><span>   if (Object.values(InputListener.KeyMap).includes(key) &amp;&amp; !this.inputs.includes(key)) {</span></span>
<span class="line"><span>    this.inputs.unshift(key); // 放到开头，表示先按下的键优先级高</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  window.addEventListener(&quot;keyup&quot;, event =&gt; {</span></span>
<span class="line"><span>   let key = event.key as KeyMapValue;</span></span>
<span class="line"><span>   if (this.inputs.includes(key)) {</span></span>
<span class="line"><span>    this.inputs.splice(this.inputs.indexOf(key), 1);</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="utils-ts" tabindex="-1"><a class="header-anchor" href="#utils-ts"><span>utils.ts</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>export function RandomRange(from: number, to: number) {</span></span>
<span class="line"><span> return Math.random() * (to - from) + from;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export type ValueOf&lt;T&gt; = T[keyof T];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export type Rect = { posX: number; posY: number; width: number; height: number };</span></span>
<span class="line"><span>export type Point = { posX: number; posY: number };</span></span>
<span class="line"><span>export type Circle = { posX: number; posY: number; radius: number };</span></span>
<span class="line"><span>// 碰撞检测,判断一个坐标是否在一个矩形内</span></span>
<span class="line"><span>function collision_Rect_Point(rect: Rect, point: Point) {</span></span>
<span class="line"><span> return rect.posX &lt; point.posX &amp;&amp; point.posX &lt; rect.posX + rect.width &amp;&amp; rect.posY &lt; point.posY &amp;&amp; point.posY &lt; rect.posY + rect.height;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// 碰撞检测，判断一个圆和一个矩形是否碰撞</span></span>
<span class="line"><span>export function collision_Rect_Circle(rect: Rect, circle: Circle) {</span></span>
<span class="line"><span> // 只需要判断这个圆的中心坐标是否在一个大矩形之内，这个大矩形就是将原矩形上下左右的边长拓宽圆的一倍半径</span></span>
<span class="line"><span> return collision_Rect_Point(</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>   posX: rect.posX - circle.radius,</span></span>
<span class="line"><span>   posY: rect.posY - circle.radius,</span></span>
<span class="line"><span>   width: rect.width + 2 * circle.radius,</span></span>
<span class="line"><span>   height: rect.height + 2 * circle.radius</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  { ...circle }</span></span>
<span class="line"><span> );</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ball-ts" tabindex="-1"><a class="header-anchor" href="#ball-ts"><span>Ball.ts</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>import { RandomRange, Rect } from &quot;./utils.js&quot;;</span></span>
<span class="line"><span>export class Ball {</span></span>
<span class="line"><span> radius: number = 10;</span></span>
<span class="line"><span> fillStyle: string = &quot;white&quot;;</span></span>
<span class="line"><span> strokeStyle: string = &quot;whitesmoke&quot;;</span></span>
<span class="line"><span> speedX: number = Math.sign(RandomRange(-1, 1)) * RandomRange(0.4, 0.5);</span></span>
<span class="line"><span> speedY: number = Math.sign(RandomRange(-1, 1)) * RandomRange(0.4, 0.5);</span></span>
<span class="line"><span> constructor(public posX: number, public posY: number, public GAME_WIDTH: number, public GAME_HEIGHT: number) {</span></span>
<span class="line"><span>  this.posX = posX;</span></span>
<span class="line"><span>  this.posY = posY;</span></span>
<span class="line"><span>  this.GAME_HEIGHT = GAME_HEIGHT;</span></span>
<span class="line"><span>  this.GAME_WIDTH = GAME_WIDTH;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> reverseSpeedX() {</span></span>
<span class="line"><span>  this.speedX = -this.speedX;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> reverseSpeedY() {</span></span>
<span class="line"><span>  this.speedY = -this.speedY;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> move(timeInterval: number) {</span></span>
<span class="line"><span>  this.posX += this.speedX * timeInterval;</span></span>
<span class="line"><span>  this.posY += this.speedY * timeInterval;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> _update(timeInterval: number) {</span></span>
<span class="line"><span>  this.move(timeInterval);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> update(timeInterval: number) {</span></span>
<span class="line"><span>  let step = 1; // 按1ms模拟</span></span>
<span class="line"><span>  do {</span></span>
<span class="line"><span>   this._update(step);</span></span>
<span class="line"><span>   timeInterval -= step;</span></span>
<span class="line"><span>  } while (timeInterval &gt; 0);</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> draw(context: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>  context.save();</span></span>
<span class="line"><span>  context.beginPath();</span></span>
<span class="line"><span>  context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);</span></span>
<span class="line"><span>  context.closePath();</span></span>
<span class="line"><span>  context.strokeStyle = this.strokeStyle;</span></span>
<span class="line"><span>  context.stroke();</span></span>
<span class="line"><span>  context.fillStyle = this.fillStyle;</span></span>
<span class="line"><span>  context.fill();</span></span>
<span class="line"><span>  context.restore();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wall-ts" tabindex="-1"><a class="header-anchor" href="#wall-ts"><span>Wall.ts</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#e1e4e8;--shiki-dark:#E6E6E6;--shiki-light-bg:#24292e;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes github-dark slack-dark vp-code"><code><span class="line"><span>export class Block {</span></span>
<span class="line"><span> constructor(</span></span>
<span class="line"><span>  public posX: number,</span></span>
<span class="line"><span>  public posY: number,</span></span>
<span class="line"><span>  public width: number,</span></span>
<span class="line"><span>  public height: number,</span></span>
<span class="line"><span>  public fillStyle: string,</span></span>
<span class="line"><span>  public strokeStyle: string</span></span>
<span class="line"><span> ) {</span></span>
<span class="line"><span>  this.posX = posX;</span></span>
<span class="line"><span>  this.posY = posY;</span></span>
<span class="line"><span>  this.width = width;</span></span>
<span class="line"><span>  this.height = height;</span></span>
<span class="line"><span>  this.fillStyle = fillStyle;</span></span>
<span class="line"><span>  this.strokeStyle = strokeStyle;</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> update(timeInterval: number) {}</span></span>
<span class="line"><span> draw(context: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>  context.save();</span></span>
<span class="line"><span>  context.fillStyle = this.fillStyle;</span></span>
<span class="line"><span>  context.fillRect(this.posX, this.posY, this.width, this.height);</span></span>
<span class="line"><span>  context.strokeStyle = this.strokeStyle;</span></span>
<span class="line"><span>  context.strokeRect(this.posX, this.posY, this.width, this.height);</span></span>
<span class="line"><span>  context.restore();</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export class Wall {</span></span>
<span class="line"><span> blocks: Array&lt;Block&gt; = [];</span></span>
<span class="line"><span> constructor(</span></span>
<span class="line"><span>  public width: number,</span></span>
<span class="line"><span>  public height: number,</span></span>
<span class="line"><span>  public WALL_MAX_WIDTH: number,</span></span>
<span class="line"><span>  public WALL_MAX_HEIGHT: number,</span></span>
<span class="line"><span>  public GAME_WIDTH: number,</span></span>
<span class="line"><span>  public GAME_HEIGHT: number</span></span>
<span class="line"><span> ) {</span></span>
<span class="line"><span>  this.width = width;</span></span>
<span class="line"><span>  this.height = height;</span></span>
<span class="line"><span>  this.WALL_MAX_WIDTH = WALL_MAX_WIDTH;</span></span>
<span class="line"><span>  this.WALL_MAX_HEIGHT = WALL_MAX_HEIGHT;</span></span>
<span class="line"><span>  this.GAME_WIDTH = GAME_WIDTH;</span></span>
<span class="line"><span>  this.GAME_HEIGHT = GAME_HEIGHT;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let BLOCK_WIDTH = this.WALL_MAX_WIDTH / this.width;</span></span>
<span class="line"><span>  let BLOCK_HEIGHT = this.WALL_MAX_HEIGHT / this.height;</span></span>
<span class="line"><span>  for (var i = 0; i &lt; this.width; i++) {</span></span>
<span class="line"><span>   for (var j = 0; j &lt; this.height; j++) {</span></span>
<span class="line"><span>    this.blocks.push(new Block(i * BLOCK_WIDTH, j * BLOCK_HEIGHT, BLOCK_WIDTH, BLOCK_HEIGHT, &quot;gray&quot;, &quot;black&quot;));</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> update(){</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span> }</span></span>
<span class="line"><span> draw(context: CanvasRenderingContext2D) {</span></span>
<span class="line"><span>  this.blocks.forEach(item =&gt; item.draw(context));</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function b(h,E){const n=e("RouteLink");return c(),i("div",null,[u,m,s("p",null,[l(n,{to:"/%E9%A1%B9%E7%9B%AE/zip%E5%BD%92%E6%A1%A3/%E4%B8%8D%E5%80%BC%E4%B8%80%E6%8F%90%E7%9A%84%E5%B0%8F%E6%B8%B8%E6%88%8F/%E6%89%93%E7%A0%96%E5%9D%97%E5%B0%8F%E6%B8%B8%E6%88%8FDemo%E5%AE%9E%E7%8E%B0%E8%AE%B0%E5%BD%95/demo_jdfowefjwi/"},{default:p(()=>[d("Demo地址")]),_:1})]),o])}const k=a(v,[["render",b],["__file","index.html.vue"]]),x=JSON.parse('{"path":"/%E9%A1%B9%E7%9B%AE/zip%E5%BD%92%E6%A1%A3/%E4%B8%8D%E5%80%BC%E4%B8%80%E6%8F%90%E7%9A%84%E5%B0%8F%E6%B8%B8%E6%88%8F/%E6%89%93%E7%A0%96%E5%9D%97%E5%B0%8F%E6%B8%B8%E6%88%8FDemo%E5%AE%9E%E7%8E%B0%E8%AE%B0%E5%BD%95/","title":"打砖块小游戏Demo实现记录","lang":"zh-CN","frontmatter":{"title":"打砖块小游戏Demo实现记录","date":"2023-01-22T12:58:00.000Z","cover":"./cover/打砖块小游戏Demo实现记录.gif","tag":["笔记","demo","game","canvas"],"category":"笔记","description":"打砖块小游戏 Demo 实现记录 目录 打砖块小游戏 Demo 实现记录 目录 index.ts Game.ts InputListener.ts utils.ts Ball.ts Wall.ts index.ts Game.ts InputListener.ts utils.ts Ball.ts Wall.ts","head":[["meta",{"property":"og:url","content":"https://dingdingdang.online/%E9%A1%B9%E7%9B%AE/zip%E5%BD%92%E6%A1%A3/%E4%B8%8D%E5%80%BC%E4%B8%80%E6%8F%90%E7%9A%84%E5%B0%8F%E6%B8%B8%E6%88%8F/%E6%89%93%E7%A0%96%E5%9D%97%E5%B0%8F%E6%B8%B8%E6%88%8FDemo%E5%AE%9E%E7%8E%B0%E8%AE%B0%E5%BD%95/"}],["meta",{"property":"og:site_name","content":"YiguiDing的Blog小站"}],["meta",{"property":"og:title","content":"打砖块小游戏Demo实现记录"}],["meta",{"property":"og:description","content":"打砖块小游戏 Demo 实现记录 目录 打砖块小游戏 Demo 实现记录 目录 index.ts Game.ts InputListener.ts utils.ts Ball.ts Wall.ts index.ts Game.ts InputListener.ts utils.ts Ball.ts Wall.ts"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T08:31:16.000Z"}],["meta",{"property":"article:author","content":"丁毅桂"}],["meta",{"property":"article:tag","content":"笔记"}],["meta",{"property":"article:tag","content":"demo"}],["meta",{"property":"article:tag","content":"game"}],["meta",{"property":"article:tag","content":"canvas"}],["meta",{"property":"article:published_time","content":"2023-01-22T12:58:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T08:31:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"打砖块小游戏Demo实现记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-01-22T12:58:00.000Z\\",\\"dateModified\\":\\"2024-03-18T08:31:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"丁毅桂\\",\\"email\\":\\"2449695354@qq.com\\"}]}"],["meta",{"name":"baidu-site-verification","content":"codeva-PwE9Ts6nMl"}]]},"headers":[{"level":2,"title":"打砖块小游戏 Demo 实现记录","slug":"打砖块小游戏-demo-实现记录","link":"#打砖块小游戏-demo-实现记录","children":[]},{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"index.ts","slug":"index-ts","link":"#index-ts","children":[]},{"level":2,"title":"Game.ts","slug":"game-ts","link":"#game-ts","children":[]},{"level":2,"title":"InputListener.ts","slug":"inputlistener-ts","link":"#inputlistener-ts","children":[]},{"level":2,"title":"utils.ts","slug":"utils-ts","link":"#utils-ts","children":[]},{"level":2,"title":"Ball.ts","slug":"ball-ts","link":"#ball-ts","children":[]},{"level":2,"title":"Wall.ts","slug":"wall-ts","link":"#wall-ts","children":[]}],"git":{"createdTime":1700226391000,"updatedTime":1710750676000,"contributors":[{"name":"YiguiDing","email":"2449695354@qq.com","commits":1}]},"readingTime":{"minutes":2.77,"words":831},"filePathRelative":"项目/zip归档/不值一提的小游戏/打砖块小游戏Demo实现记录/index.md","localizedDate":"2023年1月22日","excerpt":"","autoDesc":true}');export{k as comp,x as data};
