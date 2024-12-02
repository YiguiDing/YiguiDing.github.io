---
title: TypeScript写的2D游戏的实现细节笔记
date: 2023-01-10 13:57:00+08:00
cover: ./cover/TypeScript写的2D游戏的实现细节笔记.gif
tag: [笔记]
category: 笔记
star: true
dir:
  order: 3
---

# 1. TypeScript写的2D游戏的实现细节笔记

![](./cover/TypeScript写的2D游戏的实现细节笔记.gif)

## 1.1. 试玩版本

> URL 地址：
> 
> <u>[ShadowDog:0.0.2](./demo_shadowDog/index.html)</u>

## 1.2. 源代码

> 源代码:
> 
> <u>[https://github.com/YiguiDing/shadowDog-Typescript](https://github.com/YiguiDing/shadowDog-Typescript)</u>

## 1.3. 修改记录

> - `0.0.1`: 第一版
> - `0.0.2`: 压缩游戏音乐，优化加载速度，修改粒子特效移动速度和透明度的衰减方式

> **操作**：
>
> - `Enter` 键开始游戏
> - `ESC` 键暂停游戏
> - `Space` 键继续游戏
> - `方向键上下左右`控制人物 跳、蹲、俯冲、前后移动
> - 玩家在**跳起后**`在空中时`按下`Space`键可释放人物技能
> - 释放技能的**过程中**按下方向键`↓`可实现俯冲
> - 人物在**地面时**按下方向键`↓`可蹲下
> - **蹲下后**按下方向键`→` 会有音效

## 1.4. TypeScript写的2D游戏的实现细节笔记

### 1.4.1. 笔记目录

- [1. TypeScript写的2D游戏的实现细节笔记](#1-typescript写的2d游戏的实现细节笔记)
  - [1.1. 试玩版本](#11-试玩版本)
  - [1.2. 源代码](#12-源代码)
  - [1.3. 修改记录](#13-修改记录)
  - [1.4. TypeScript写的2D游戏的实现细节笔记](#14-typescript写的2d游戏的实现细节笔记)
    - [1.4.1. 笔记目录](#141-笔记目录)
    - [1.4.2. Canvas 绘图基本步骤](#142-canvas-绘图基本步骤)
      - [1.4.2.1. 原理](#1421-原理)
      - [1.4.2.2. 优化及渲染所有动图](#1422-优化及渲染所有动图)
      - [1.4.2.3. 封装和抽象](#1423-封装和抽象)
      - [1.4.2.4. 对动画对象 Animater 的封装](#1424-对动画对象-animater-的封装)
      - [1.4.2.5. 继续定义一些列接口并定义 Animal 类](#1425-继续定义一些列接口并定义-animal-类)
      - [1.4.2.6. 使用](#1426-使用)
    - [1.4.3. 敌人的移动模式](#143-敌人的移动模式)
      - [1.4.3.1. 原地静止的物体](#1431-原地静止的物体)
      - [1.4.3.2. 水平直线运动的蠕虫](#1432-水平直线运动的蠕虫)
      - [1.4.3.3. 上下摆动的蝙蝠](#1433-上下摆动的蝙蝠)
      - [1.4.3.4. 随机无规律移动的齿轮](#1434-随机无规律移动的齿轮)
    - [1.4.4. 视差背景原理](#144-视差背景原理)
      - [1.4.4.1. 无限滚动的背景原理](#1441-无限滚动的背景原理)
      - [1.4.4.2. 视差背景的实现](#1442-视差背景的实现)
      - [1.4.4.3. 最终的抽象、封装、实现](#1443-最终的抽象封装实现)
      - [1.4.4.4. 使用封装好的类实现一个视差背景](#1444-使用封装好的类实现一个视差背景)
    - [1.4.5. 碰撞检测](#145-碰撞检测)
      - [1.4.5.1. 矩形碰撞检测](#1451-矩形碰撞检测)
      - [1.4.5.2. 圆形碰撞检测](#1452-圆形碰撞检测)
      - [1.4.5.3. 像素碰撞检测](#1453-像素碰撞检测)
    - [1.4.6. 粒子特效](#146-粒子特效)
      - [1.4.6.1. 定义 Particle 抽象类](#1461-定义-particle-抽象类)
      - [1.4.6.2. 灰尘影子的实现](#1462-灰尘影子的实现)
      - [1.4.6.3. 火焰粒子特效](#1463-火焰粒子特效)
      - [1.4.6.4. 落地的爆炸火花粒子特效](#1464-落地的爆炸火花粒子特效)
      - [1.4.6.5. 爆炸的烟雾粒子特效](#1465-爆炸的烟雾粒子特效)
    - [1.4.7. 输入监听和状态管理的实现](#147-输入监听和状态管理的实现)
      - [1.4.7.1. 输入监听](#1471-输入监听)
      - [1.4.7.2. 状态管理](#1472-状态管理)
      - [1.4.7.3. 使用状态设计模式实现状态管理 Player 类的部分代码](#1473-使用状态设计模式实现状态管理-player-类的部分代码)
      - [1.4.7.4. 使用状态设计模式实现状态管理 Game 类的部分代码](#1474-使用状态设计模式实现状态管理-game-类的部分代码)
    - [1.4.8. Scene 场景](#148-scene-场景)
    - [1.4.9. UI](#149-ui)
    - [1.4.10. 字体](#1410-字体)
    - [1.4.11. Canvas 铺满页面屏幕的实现](#1411-canvas-铺满页面屏幕的实现)
    - [1.4.12. 自写工具类](#1412-自写工具类)

### 1.4.2. Canvas 绘图基本步骤

#### 1.4.2.1. 原理

[原理.html](./practices/1.canvas%EF%BC%9A%E5%8E%9F%E7%90%86/index.html)

```ts
var myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
// 获取2d的上下文环境对象，该对象包含画笔设置和一些方法
var ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D;

// canvas的默认大小为300x150px 需手动修改
const CANVAS_WIDTH = (myCanvas.width = 600);
const CANVAS_HEIGHT = (myCanvas.height = 600);

// 单帧宽高
const Sprite_WIDTH = 575;
const Sprite_HEIGHT = 523;

const imgPlayer = new Image(); // image对象类型为 HTMLImageElement 可以附加到dom中
imgPlayer.src = "./shadow_dog.png";

let frameX = 0;
let frameY = 0;
let frameCount = 0; // 第几帧
let stageFrame = 5; // 交错帧，每隔5帧 切换图片

function animate() {
  // 计算当前要绘制的帧的index
  frameCount = ++frameCount % stageFrame;
  if (!frameCount) frameX = ++frameX % 7;

  //清除上一次绘图痕迹
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    imgPlayer, // img
    frameX * Sprite_WIDTH, //源坐标x
    frameY * Sprite_HEIGHT, //源坐标y
    Sprite_WIDTH, //源图像宽
    Sprite_HEIGHT, //源图像高
    0, // 目的坐标x
    0, // 目的坐标y
    CANVAS_WIDTH, // 绘制宽度w
    CANVAS_HEIGHT // 绘制高度h
  );
  // requestAnimationFrame原理上相当于60fps的setInterval
  requestAnimationFrame(animate);
}
animate();
```

#### 1.4.2.2. 优化及渲染所有动图

[优化.html](./practices/2.animate：优化/index.html)

::: normal-demo 优化及渲染所有动图

```html
<canvas id="myCanvas_2j0923ru48"></canvas>
<div class="animation-box">
  <label for="animations">select animation:</label>
  <select name="" id="animations_djf9498">
    <option value="idle">idle</option>
    <option value="jump">jump</option>
    <option value="fall">fall</option>
    <option value="run">run</option>
    <option value="dizzy">dizzy</option>
    <option value="sit">sit</option>
    <option value="roll">roll</option>
    <option value="bite">bite</option>
    <option value="ko">ko</option>
    <option value="gethit">gethit</option>
  </select>
</div>
<img src="./images/shadow_dog.png" />
```

```js
var myCanvas = document.querySelector("#myCanvas_2j0923ru48");
var ctx = myCanvas.getContext("2d"); // 获取2d的上下文环境对象，该对象包含画笔设置和一些方法
// canvas的默认大小为300x150px 需手动修改
var CANVAS_WIDTH = (myCanvas.width = 250);
var CANVAS_HEIGHT = (myCanvas.height = 250);
var Sprite_WIDTH = 575;
var Sprite_HEIGHT = 523;
var imgPlayer = new Image(); // image对象类型为 HTMLImageElement 可以附加到dom中
imgPlayer.src = "./images/shadow_dog.png";
var playerState = "idle";
var selector = document.querySelector("#animations_djf9498");
selector.addEventListener("change", function () {
  playerState = selector.value;
});
var animations = {
  idle: { rows: 0, cols: 7 },
  jump: { rows: 1, cols: 7 },
  fall: { rows: 2, cols: 7 },
  run: { rows: 3, cols: 9 },
  dizzy: { rows: 4, cols: 11 },
  sit: { rows: 5, cols: 5 },
  roll: { rows: 6, cols: 7 },
  bite: { rows: 7, cols: 7 },
  ko: { rows: 8, cols: 12 },
  gethit: { rows: 9, cols: 4 },
};
var animaIndex = 0; // 动画索引
var frameIndex = 0; // 帧索引
var frameCount = 0; // 总的帧数
var stageFrame = 5; // 交错帧，每隔5帧 切换关键帧
function animate() {
  frameIndex =
    Math.floor(frameCount++ / stageFrame) % animations[playerState].cols;
  animaIndex = animations[playerState].rows;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(
    imgPlayer,
    frameIndex * Sprite_WIDTH,
    animaIndex * Sprite_HEIGHT,
    Sprite_WIDTH,
    Sprite_HEIGHT,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  );
  // requestAnimationFrame效果上相当于60fps的setInterval
  requestAnimationFrame(animate);
}
animate();
```

:::

#### 1.4.2.3. 封装和抽象

#### 1.4.2.4. 对动画对象 Animater 的封装

```ts
import { RandomRange } from "./utils.js";
// 动画对象
export class Animater {
  posX = 0; // 位置x
  posY = 0; // 位置y
  drawWidth: number; // 实际绘制的宽度
  drawHeight: number; // 实际绘制的高度
  img: HTMLImageElement; // 图片
  imgFrameWidth: number; // 一帧的宽度
  imgFrameHeight: number; // 一帧的高度
  animateFramesTotal: Array<number>; // [动画1的总帧数,动画2的总帧数,动画3的...]
  animateNameIndexMap: Array<string>; // 数据结构：{动画名称:该动画是第几个动画}
  animateFrameIndexX = 0; // 当前绘制的是第几帧
  animateFrameIndexY = 0; // 当前绘制的是第几个动画
  animateFrameTimer = 0;
  private _animateFrameFps = 60;
  private animateFrameChangeInterval = 1000 / 60;
  private get animateFrameFps() {
    return this._animateFrameFps;
  }
  private set animateFrameFps(fps) {
    this._animateFrameFps = fps;
    this.animateFrameChangeInterval = 1000 / fps;
  }
  public setFps(fps: number) {
    this.animateFrameFps = fps;
  }
  stopAnimateAtLastFlag = false;
  RewindAnimateFrameFlag = false;
  constructor(
    imgSrc: string,
    imgFrameWidth: number,
    imgFrameHeight: number,
    size: number,
    animateFramesTotal: Array<number>,
    animateNameIndexMap: Array<string>
  ) {
    this.img = new Image();
    this.img.src = imgSrc;
    this.animateFramesTotal = animateFramesTotal;
    this.animateNameIndexMap = animateNameIndexMap;
    this.imgFrameWidth = imgFrameWidth;
    this.imgFrameHeight = imgFrameHeight;
    this.drawWidth = this.imgFrameWidth * size;
    this.drawHeight = this.imgFrameHeight * size;
    this.setFps(60);
  }
  // 更新数据
  update(timeInterval: number): void {
    // 最后一帧则停止切换帧
    if (this.stopAnimateAtLastFlag == true && this.isLastAnimateFrame()) return;
    // 计算下一帧
    if (this.animateFrameTimer >= this.animateFrameChangeInterval) {
      this.animateFrameTimer = 0;
      this.animateFrameIndexX += 1;
      this.animateFrameIndexX %=
        this.animateFramesTotal[this.animateFrameIndexY];
    } else this.animateFrameTimer += timeInterval;
  }
  // 绘制帧
  draw(Context2D: CanvasRenderingContext2D): void {
    Context2D.drawImage(
      this.img,
      this.animateFrameIndexX * this.imgFrameWidth,
      this.animateFrameIndexY * this.imgFrameHeight,
      this.imgFrameWidth,
      this.imgFrameHeight,
      this.posX,
      this.posY,
      this.drawWidth,
      this.drawHeight
    );
  }
  changeAnimateByName(animateName: string) {
    // 根据名称切换动画
    if (this.animateNameIndexMap.includes(animateName))
      this.animateFrameIndexY = this.animateNameIndexMap.indexOf(animateName);
    else throw new Error(`animateName:'${animateName}' is not exist.`);
    this.init();
  }
  // 判断是否为最后一帧
  isLastAnimateFrame() {
    return (
      this.animateFrameIndexX ==
      this.animateFramesTotal[this.animateFrameIndexY] - 1
    );
  }
  // 判断是否为第一帧
  isFirstAnimateFrame() {
    return this.animateFrameIndexX == 0;
  }
  // 初始化状态
  init() {
    this.animateFrameIndexX = 0; // 设置从第一帧开始
  }
  // 请求在渲染到最后一帧的时候停止更新动画
  requestStopAnimateFrameAtLastFrame() {
    this.stopAnimateAtLastFlag = true;
  }
  isOutOfLeftScreem() {
    return this.posX + this.drawWidth < 0;
  }
}
```

#### 1.4.2.5. 继续定义一些列接口并定义 Animal 类

```ts
import { Animater } from "./Animater.js";
import { transformAble } from "./transformAble.js";

// 可移动的
interface MoveAble {
  moveSpeedX: number; // x轴移动速度 单位：像素/毫秒
  moveSpeedY: number; // x轴移动速度 单位：像素/毫秒
  move(timeInterval: number): void; // 移动
}
// 活的
interface AliveAble {
  aliveFlag: boolean;
  getAliveFlag(): boolean; // 用于判断是否存活
  setAliveFlag(newVal: boolean): void;
}
// 圆形碰撞检测
interface CollisionCheckAble {
  collisionCheckPosX: number;
  collisionCheckPosY: number;
  collisionCheckWidth: number;
  collisionCheckHeight: number;
  collisionCheckRadius: number;
  collisionCheckUpdate(): void;
  isCollision(obj: CollisionCheckAble): boolean; // 碰撞检测
}
interface NameAble {
  Name: string;
  getName(): string;
}

// 抽象类 Animal 继承动画类 实现Moveable AliveAble 接口
export abstract class Animal
  extends Animater
  implements MoveAble, AliveAble, CollisionCheckAble, NameAble, transformAble
{
  // 移动
  moveSpeedX = 0;
  moveSpeedY = 0;
  abstract move(timeInterval: number): void;
  // 存活
  aliveFlag = true;
  setAliveFlag(newVal: boolean): void {
    this.aliveFlag = newVal;
  }
  getAliveFlag(): boolean {
    return this.aliveFlag;
  }
  // 可碰撞检测
  collisionCheckPosX = 0;
  collisionCheckPosY = 0;
  collisionCheckWidth = 0;
  collisionCheckHeight = 0;
  collisionCheckRadius = 0;
  collisionCheckUpdate(): void {
    // 圆形碰撞检测
    this.collisionCheckPosX = this.posX + this.drawWidth / 2;
    this.collisionCheckPosY = this.posY + this.drawHeight / 2;
    this.collisionCheckRadius =
      (Math.min(this.drawWidth, this.drawHeight) / 2) * 0.8;
  }
  isCollision(obj: CollisionCheckAble): boolean {
    this.collisionCheckUpdate();
    obj.collisionCheckUpdate();
    const dX = this.collisionCheckPosX - obj.collisionCheckPosX;
    const dY = this.collisionCheckPosY - obj.collisionCheckPosY;
    const distance = Math.sqrt(dX * dX + dY * dY);
    return distance < this.collisionCheckRadius + obj.collisionCheckRadius;
  }
  update(timeInterval: number): void {
    this.collisionCheckUpdate();
    super.update(timeInterval);
  }
  draw(Context2D: CanvasRenderingContext2D): void {
    // Context2D.beginPath();
    // Context2D.arc(this.collisionCheckPosX, this.collisionCheckPosY, this.collisionCheckRadius, 0, Math.PI * 2);
    // Context2D.stroke();
    // Context2D.strokeRect(this.posX, this.posY, this.drawWidth, this.drawHeight);
    super.draw(Context2D);
  }
  // put it on ground();
  setOnGround(groundPosY: number): Animal {
    this.posY = groundPosY - this.drawHeight;
    return this;
  }
  // 水平和垂直平移
  transform(stepX: number, stepY: number) {
    this.posX += stepX;
    this.posY += stepY;
  }
  abstract Name: string;
  getName(): string {
    this.Name;
    return this.Name;
  }
}
```

#### 1.4.2.6. 使用

于是，定义一个游戏角色：蠕虫，就会变得如此简单

```ts
import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";

// 蠕虫 继承 Animal 类
export class Worm extends Animal {
  Name = "Worm";
  constructor(posX: number, posY: number) {
    super("./imgs/Worm.png", 229, 171, 0.5, [6], ["idle"]);
    this.posX = posX;
    this.posY = posY;
    this.moveSpeedX = RandomRange(0.05, 0.1);
  }
  move(timeInterval: number) {
    this.posX -= this.moveSpeedX * timeInterval;
  }
  update(timeInterval: number): void {
    this.move(timeInterval);
    super.update(timeInterval);
  }
}
```

### 1.4.3. 敌人的移动模式

#### 1.4.3.1. 原地静止的物体

```ts
import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";

// 鬼
export class Plant extends Animal {
  Name = "Plant";
  constructor(posX: number, posY: number) {
    super("./imgs/enemy_plant.png", 60, 87, 1.5, [2], ["default"]);
    this.posX = posX;
    this.posY = posY;
    this.setFps(10);
  }
  move(timeInterval: number): void {
    return;
  }
}
```

#### 1.4.3.2. 水平直线运动的蠕虫

```ts
import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";

// 蠕虫 继承 Animal 类
export class Worm extends Animal {
  Name = "Worm";
  constructor(posX: number, posY: number) {
    super("./imgs/Worm.png", 229, 171, 0.5, [6], ["idle"]);
    this.posX = posX;
    this.posY = posY;
    this.moveSpeedX = RandomRange(0.05, 0.1);
  }
  move(timeInterval: number) {
    this.posX -= this.moveSpeedX * timeInterval;
  }
  update(timeInterval: number): void {
    this.move(timeInterval);
    super.update(timeInterval);
  }
}
```

#### 1.4.3.3. 上下摆动的蝙蝠

```ts
import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";

// 蠕虫 继承 Animal 类
export class Bat extends Animal {
  Name = "Bat";
  shakeAngle = 0; // 摆动角度,初始摆动角度 单位: 弧度
  shakeDeltaAngle: number; // 摆动增量 单位:弧度/毫秒
  shakeGapRadius: number; // 摆动范围半径 单位：像素
  constructor(posX: number, posY: number) {
    super("./imgs/Bat.png", 266, 188, 0.5, [6], ["idle"]);
    this.posX = posX;
    this.posY = posY;
    this.moveSpeedX = RandomRange(0.05, 0.1);

    this.shakeAngle = RandomRange(Math.asin(-1), Math.asin(1));
    this.shakeDeltaAngle = RandomRange(Math.asin(0.001), Math.asin(0.003));
    this.shakeGapRadius = RandomRange(2, 5);
  }
  shake(timeInterval: number) {
    this.posY += this.shakeGapRadius * Math.sin(this.shakeAngle);
    this.shakeAngle += this.shakeDeltaAngle * timeInterval;
  }
  move(timeInterval: number) {
    this.posX -= this.moveSpeedX * timeInterval;
  }
  update(timeInterval: number): void {
    this.move(timeInterval);
    this.shake(timeInterval);
    super.update(timeInterval);
  }
}
```

**周期线性运动的蝙蝠**

```ts
import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";

// 蠕虫 继承 Animal 类
export class GhostBird extends Animal {
  Name = "GhostBird";

  asline: {
    angle: number;
    angleIncreaseSpeed: number;
    factorX: number;
    factorY: number;
  } = {
    angle: 0,
    angleIncreaseSpeed: 0,
    factorX: 0,
    factorY: 0,
  };

  CANVAS_WIDTH: number;
  CANVAS_HEIGHT: number;
  offsetY: number;
  offsetX: number;

  constructor(
    posX: number,
    posY: number,
    CANVAS_WIDTH: number,
    CANVAS_HEIGHT: number
  ) {
    super("./imgs/GhostBird.png", 218, 177, 0.5, [6], ["idle"]);
    this.posX = posX;
    this.posY = posY;
    this.CANVAS_WIDTH = CANVAS_WIDTH;
    this.CANVAS_HEIGHT = CANVAS_HEIGHT;
    this.moveSpeedX = RandomRange(0.4, 1);
    // for asline
    this.offsetX = 0; // 相对于屏幕右上角0，0位置的偏移量
    this.offsetY = 0;
    this.asline.angle = (Math.PI / 365) * RandomRange(-365, 365); // 初相角 -1 ~ 1
    this.asline.angleIncreaseSpeed =
      (Math.PI / 365) * RandomRange(30, 90) * Math.sign(RandomRange(-1, 1)); // 移动周期 30~90 感觉不错
    this.asline.factorX = (Math.PI / 365) * 0.45;
    this.asline.factorY = (Math.PI / 365) * 0.35;
  }
  transform(stepX: number, stepY: number): void {
    // this.offsetX += stepX;
    // this.offsetY += stepY;
  }
  move_asline(timeInterval: number) {
    // 线性运动
    this.posX =
      this.offsetX +
      (this.CANVAS_WIDTH / 2) *
        Math.cos(this.asline.angle * this.asline.factorX) +
      (this.CANVAS_WIDTH / 2 - this.drawWidth / 2);
    this.posY =
      this.offsetY +
      (this.CANVAS_HEIGHT / 2) *
        Math.sin(this.asline.angle * this.asline.factorY) +
      (this.CANVAS_HEIGHT / 2 - this.drawHeight / 2);
    const angleStep = this.asline.angleIncreaseSpeed * timeInterval;
    this.asline.angle += angleStep;
  }
  move(timeInterval: number) {
    this.posX -= this.moveSpeedX * timeInterval;
  }
  update(timeInterval: number): void {
    this.move_asline(timeInterval);
    super.update(timeInterval);
  }
}
```

#### 1.4.3.4. 随机无规律移动的齿轮

```ts
import { Animal } from "./Animal.js";
import { RandomRange } from "./utils.js";

// 蠕虫 继承 Animal 类
export class Gear extends Animal {
  Name = "Gear";
  reArrange_NewPosX: number;
  reArrange_NewPosY: number;
  reArrange_MoveSpeed: number; // 移动速度
  reArrange_Timer = 0;
  reArrange_TimeInterval: number;
  CANVAS_WIDTH: number;
  CANVAS_HEIGHT: number;

  constructor(
    posX: number,
    posY: number,
    CANVAS_WIDTH: number,
    CANVAS_HEIGHT: number
  ) {
    super("./imgs/Gear.png", 213, 212, 0.5, [6], ["idle"]);
    this.posX = posX;
    this.posY = posY;
    this.CANVAS_WIDTH = CANVAS_WIDTH;
    this.CANVAS_HEIGHT = CANVAS_HEIGHT;

    this.moveSpeedX = RandomRange(0.4, 1);

    // randomReArrange_ment
    this.reArrange_NewPosX = this.posX;
    this.reArrange_NewPosY = this.posY;
    this.reArrange_TimeInterval = Math.floor(RandomRange(500, 2000)); // 0.5 ~ 2 秒
    this.reArrange_MoveSpeed = RandomRange(0.5, 2.0);
  }
  // 平移
  transform(stepX: number, stepY: number): void {
    return;
    // 决定其是否跟随场景移动的代码
    this.posX += stepX;
    this.posY += stepY;
    this.reArrange_NewPosX += stepX; // dx要根据这个来计算，所以也要平移
    this.reArrange_NewPosY += stepY;
  }
  reArrange(timeInterval: number) {
    // 重新排列
    if ((this.reArrange_Timer += timeInterval) >= this.reArrange_TimeInterval) {
      this.reArrange_Timer = 0;
      // 随机位置，注意其范围区间
      this.reArrange_NewPosX = RandomRange(0, this.CANVAS_WIDTH);
      this.reArrange_NewPosY = RandomRange(0, this.CANVAS_HEIGHT);
      console.log(this.reArrange_NewPosX);
      console.log(this.reArrange_NewPosY);
    }
    const dx = (this.reArrange_NewPosX - this.posX) / 1000;
    const dy = (this.reArrange_NewPosY - this.posY) / 1000;
    const moveStep = this.reArrange_MoveSpeed * timeInterval;
    this.posX += dx * moveStep;
    this.posY += dy * moveStep;
  }
  move(timeInterval: number) {
    this.posX -= this.moveSpeedX * timeInterval;
  }
  update(timeInterval: number): void {
    this.reArrange(timeInterval);
    // this.move(timeInterval);
    super.update(timeInterval);
  }
}
```

### 1.4.4. 视差背景原理

#### 1.4.4.1. 无限滚动的背景原理

[](./practices/3.%E8%A7%86%E5%B7%AE%E8%83%8C%E6%99%AF%EF%BC%9A%E5%8E%9F%E7%90%86/index.html)

```ts
var myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
// 获取2d的上下文环境对象，该对象包含画笔设置和一些方法
var ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D;

// canvas的默认大小为300x150px 需手动修改
const CANVAS_WIDTH = (myCanvas.width = 800);
const CANVAS_HEIGHT = (myCanvas.height = 700);

let gameScrollSpeed = 10;

// 层
const backgroundLayer1 = new Image();
backgroundLayer1.src = "./imgs/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "./imgs/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "./imgs/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "./imgs/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "./imgs/layer-5.png";

let Layer4offsetX1 = 0;
let Layer4offsetX2 = 2400;
(function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer4, Layer4offsetX1, 0);
  ctx.drawImage(backgroundLayer5, Layer4offsetX2, 0);
  // 如果第一张图滚动展示完毕，就将其放到第二张图的后面
  if (Layer4offsetX1 < -2400) Layer4offsetX1 = Layer4offsetX2 + 2400;
  // 如果第二张图滚动展示完毕，就将其放到第一张图的后面
  if (Layer4offsetX2 < -2400) Layer4offsetX2 = Layer4offsetX1 + 2400;
  Layer4offsetX1 -= gameScrollSpeed; // 更新位置
  Layer4offsetX2 -= gameScrollSpeed; // 更新位置
  requestAnimationFrame(animate); // 刷新
})();
```

#### 1.4.4.2. 视差背景的实现

[视差背景.html](./practices/4.视差背景：优化/index.html)

```ts
var myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
var ctx = myCanvas.getContext("2d") as CanvasRenderingContext2D; // 获取2d的上下文环境对象，该对象包含画笔设置和一些方法

// canvas的默认大小为300x150px 需手动修改
const CANVAS_WIDTH = (myCanvas.width = 1080);
const CANVAS_HEIGHT = (myCanvas.height = 720);

let gameScrollSpeed = 10;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "./imgs/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "./imgs/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "./imgs/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "./imgs/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "./imgs/layer-5.png";

let baclkgroundlayers = [
  {
    name: "layer1",
    img: backgroundLayer1,
    imgWidth: 2400,
    Xoffset1: 0,
    Xoffset2: 2400,
    speedModify: 0.1,
  },
  {
    name: "layer2",
    img: backgroundLayer2,
    imgWidth: 2400,
    Xoffset1: 0,
    Xoffset2: 2400,
    speedModify: 0.3,
  },
  {
    name: "layer3-cloud",
    img: backgroundLayer3,
    imgWidth: 2400,
    Xoffset1: 0,
    Xoffset2: 2400,
    speedModify: 0.5,
  },
  {
    name: "layer4",
    img: backgroundLayer4,
    imgWidth: 2400,
    Xoffset1: 0,
    Xoffset2: 2400,
    speedModify: 0.65,
  },
  {
    name: "layer5-floor",
    img: backgroundLayer5,
    imgWidth: 2400,
    Xoffset1: 0,
    Xoffset2: 2400,
    speedModify: 1.0,
  },
];

function refreshBackgroundLayers() {
  // 渲染背景
  baclkgroundlayers.forEach((layerItem) => {
    // 逐层渲染背景
    ctx.drawImage(layerItem.img, layerItem.Xoffset1, 0);
    ctx.drawImage(layerItem.img, layerItem.Xoffset2, 0);
    if (layerItem.Xoffset1 < -layerItem.imgWidth)
      layerItem.Xoffset1 = layerItem.Xoffset2 + layerItem.imgWidth; // 如果第一张图滚动展示完毕，就将其放到第二张图的后面
    if (layerItem.Xoffset2 < -layerItem.imgWidth)
      layerItem.Xoffset2 = layerItem.Xoffset1 + layerItem.imgWidth; // 如果第二张图滚动展示完毕，就将其放到第一张图的后面
    layerItem.Xoffset1 -= gameScrollSpeed * layerItem.speedModify; // 更新位置
    layerItem.Xoffset2 -= gameScrollSpeed * layerItem.speedModify; // 更新位置
  });
}

(function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); // 清除
  refreshBackgroundLayers(); // 渲染背景
  requestAnimationFrame(animate); // 刷新
})();
```

#### 1.4.4.3. 最终的抽象、封装、实现

```ts
// 可滚动的背景层
export class Layer {
  readonly CANVAS_WIDTH: number;
  readonly CANVAS_HEIGHT: number;
  img: HTMLImageElement;
  imgWidth: number;
  imgHeight: number;
  pos1_X: number;
  pox1_Y: number;
  pos2_X: number;
  pox2_Y: number;
  private layerMoveSpeedX = 0; // 层的移动速度,一个背景的所有层的移动速度应当是一致的
  private layerMoveSpeedFactor = 1.0; // 层的移动速度的系数，一个背景有多个层，多个层的移动速度一致，但移动速度的系数可能不一致
  constructor(
    CANVAS_WIDTH: number,
    CANVAS_HEIGHT: number,
    imgSrc: string,
    imgWidth: number,
    imgHeight: number,
    layerMoveSpeedFactor: number
  ) {
    this.CANVAS_WIDTH = CANVAS_WIDTH;
    this.CANVAS_HEIGHT = CANVAS_HEIGHT;
    this.img = new Image();
    this.img.src = imgSrc;
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
    this.layerMoveSpeedFactor = layerMoveSpeedFactor;
    this.pos1_X = 0;
    this.pox1_Y = 0;
    this.pos2_X = this.imgWidth;
    this.pox2_Y = 0;
  }
  update(timeInterval: number) {
    this.pos1_X +=
      this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
    this.pos2_X +=
      this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
    // 图层向左移动，图层出界，向后添加新图层
    if (this.layerMoveSpeedX < 0 && this.pos1_X + this.imgWidth <= 0)
      this.pos1_X = this.pos2_X + this.imgWidth; // 图1出界就将其放置到图2之后
    if (this.layerMoveSpeedX < 0 && this.pos2_X + this.imgWidth <= 0)
      this.pos2_X = this.pos1_X + this.imgWidth; // 图2出界就将其放置到图1之后
    // 图层向右移动，图层出界，向前添加新图层
    if (this.layerMoveSpeedX > 0 && this.pos1_X >= 0)
      this.pos2_X = this.pos1_X - this.imgWidth; // 图1出界就将其放置到图2之后
    if (this.layerMoveSpeedX > 0 && this.pos2_X >= 0)
      this.pos1_X = this.pos2_X - this.imgWidth; // 图2出界就将其放置到图1之后
  }
  draw(Context2D: CanvasRenderingContext2D) {
    Context2D.drawImage(
      this.img,
      0,
      0,
      this.imgWidth,
      this.imgHeight,
      this.pos1_X,
      this.pox1_Y,
      this.imgWidth,
      this.CANVAS_HEIGHT
    );
    Context2D.drawImage(
      this.img,
      0,
      0,
      this.imgWidth,
      this.imgHeight,
      this.pos2_X,
      this.pox2_Y,
      this.imgWidth,
      this.CANVAS_HEIGHT
    );
  }
  setSpeed(newSpeed: number) {
    this.layerMoveSpeedX = newSpeed;
  }
}

// 可滚动的背景，该背景包含多个层
export abstract class Background {
  private _backgroundMoveSpeedX = 0; // 背景移动速度
  layers: Array<Layer> = []; // 背景
  constructor() {
    this.setSpeed(0);
  }
  update(timeInterval: number) {
    this.layers.forEach((layer) => layer.update(timeInterval));
  }
  draw(Context2D: CanvasRenderingContext2D) {
    this.layers.forEach((layer) => layer.draw(Context2D));
  }
  getSpeed() {
    return this._backgroundMoveSpeedX;
  }
  // 修改背景的速度就是修改要所有层的移动速度，这里做等值判断是防止for循环浪费性能
  setSpeed(newSpeed: number) {
    if (this._backgroundMoveSpeedX != newSpeed) {
      this.layers.forEach((item) => item.setSpeed(newSpeed)); // 更新所有层的速度
      this._backgroundMoveSpeedX = newSpeed; // 更新背景速度
    }
  }
  abstract getGroundPosY(): number;
}
```

#### 1.4.4.4. 使用封装好的类实现一个视差背景

现在实现一张视差背景只需要几行最关键的代码

```ts
import { Background, Layer } from "./Background.js";
// 背景city，由1层构成
export class BackgroundCity extends Background {
  CANVAS_WIDTH: number;
  CANVAS_HEIGHT: number;
  constructor(CANVAS_WIDTH: number, CANVAS_HEIGHT: number) {
    super();
    this.layers.push(
      new Layer(
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
        "./imgs/cityLayers/layer-1.png",
        2400,
        720,
        0.0
      )
    );
    this.layers.push(
      new Layer(
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
        "./imgs/cityLayers/layer-2.png",
        2400,
        720,
        0.1
      )
    );
    this.layers.push(
      new Layer(
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
        "./imgs/cityLayers/layer-3.png",
        2400,
        720,
        0.3
      )
    );
    this.layers.push(
      new Layer(
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
        "./imgs/cityLayers/layer-4.png",
        2400,
        720,
        0.5
      )
    );
    this.layers.push(
      new Layer(
        CANVAS_WIDTH,
        CANVAS_HEIGHT,
        "./imgs/cityLayers/layer-5.png",
        2400,
        720,
        1.0
      )
    );
    this.CANVAS_WIDTH = CANVAS_WIDTH;
    this.CANVAS_HEIGHT = CANVAS_HEIGHT;
  }
  getGroundPosY(): number {
    return this.CANVAS_HEIGHT - 120;
  }
}
```

### 1.4.5. 碰撞检测

#### 1.4.5.1. 矩形碰撞检测

```ts
interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}
function RectColisionDetector(reactA: Rect, reactB: Rect) {
  return (
    reactA.x < reactB.x + reactB.w &&
    reactA.x + reactA.w > reactB.x &&
    reactA.y < reactB.y + reactB.h &&
    reactA.y + reactA.h > reactB.y
  );
}
```

#### 1.4.5.2. 圆形碰撞检测

```ts
interface Cycle {
  x: number;
  y: number;
  radius: number;
}

function CycleColisionDetector(cycleA: Cycle, cycleB: Cycle) {
  let distance = Math.sqrt(
    Math.pow(cycleA.x - cycleB.x, 2) + Math.pow(cycleA.y - cycleB.y, 2)
  ); // 求两坐标间距离公式
  return distance < cycleA.radius + cycleB.radius;
}
```

#### 1.4.5.3. 像素碰撞检测

像素碰撞检测依赖于两个 Canvas 图层，绘制对象时，将对象的轮廓和实际图像分开绘制。

对象轮廓图层中的对象填充有颜色，可以认为这个颜色是该对象的唯一标识，

当鼠标点击轮廓图层时可以通过点击事件的坐标获取到点击处的像素值

通过像素值，遍历所有对象，匹配对象的颜色属性值，

就能判断用户是否点击到该对象

```ts
// 像素碰撞检测
function pixelCollsionDetection(
  pixelA: [number, number, number],
  pixelB: [number, number, number]
) {
  return (
    pixelA[0] == pixelB[0] && pixelA[1] == pixelB[1] && pixelA[2] == pixelB[2]
  );
}

// 鼠标点击事件监听，获取点击处的像素点
myCanvas.addEventListener("mousedown", (event) => {
  let pos: Position = { x: event.offsetX, y: event.offsetY };
  let imgdata = ctxCollision.getImageData(pos.x, pos.y, 1, 1); // 获取一个像素颜色
  for (let index = 0; index < enemys.length; index++) {
    const item = enemys[index];
    if (pixelCollsionDetection(item.collisionColor, imgdata)) {
      // 像素碰撞检测

      return;
    }
  }
});
```

### 1.4.6. 粒子特效

#### 1.4.6.1. 定义 Particle 抽象类

```ts
import { Animater } from "./Animater.js";
import { RandomRange } from "./utils.js";
export abstract class Particle {
  posX: number;
  posY: number;
  movespeedX = 0;
  constructor(posX: number, posY: number) {
    this.posX = posX;
    this.posY = posY;
  }
  abstract update(timeInterval: number): void;
  abstract draw(Context2D: CanvasRenderingContext2D): void;
  setSpeedX(newSpeed: number) {
    this.movespeedX = newSpeed;
  }
}
```

#### 1.4.6.2. 灰尘影子的实现

该特效的实现的关键点是透明度的衰减速度和圆形半径的衰减速度，

需要一点一点尝试出来，另外这个地方应该使用全局透明度，而不是字符串拼接`rgba()`

```ts
// 灰尘
export class Dust extends Particle {
  radius: number;
  fillStyleAlpha: number;
  fillStyle: string;
  radiusStep: number;
  fillStyleAlphaStep: number;
  constructor(posX: number, posY: number) {
    super(RandomRange(posX - 50, posX + 50), RandomRange(posY - 20, posY + 20));

    this.radius = RandomRange(10, 20);
    this.radiusStep = RandomRange(0.3, 0.5);

    this.fillStyleAlpha = 1;
    this.fillStyleAlphaStep = 0.01;

    this.fillStyle = `rgba(0,0,0,${this.fillStyleAlpha})`;
  }
  update(timeInterval: number): void {
    if (this.fillStyleAlpha > this.fillStyleAlphaStep) {
      this.fillStyleAlpha -= this.fillStyleAlphaStep;
      this.fillStyle = `rgba(0,0,0,${this.fillStyleAlpha})`;
    }
    if (this.radius > this.radiusStep) this.radius -= this.radiusStep;
  }
  draw(Context2D: CanvasRenderingContext2D): void {
    Context2D.save();
    Context2D.fillStyle = this.fillStyle;
    Context2D.beginPath();
    Context2D.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
    Context2D.fill();
    Context2D.restore();
  }
}
```

#### 1.4.6.3. 火焰粒子特效

关键点同上，

另外代码中似乎应该不需要移动速度，因为火焰的粒子特效是放在场景中的，场景会带着粒子特效移动

```ts
export class FireImg extends Particle {
  img: HTMLImageElement;
  movespeedX: number;
  imgHeight: number;
  imgWidth: number;
  drawHeight: number;
  drawWidth: number;
  globalAlpha: number;
  globalAlphaStep: number;
  drawSize: number;
  drawSizeStep: number;
  constructor(posX: number, posY: number, movespeedX: number) {
    super(RandomRange(posX - 10, posX + 10), RandomRange(posY - 10, posY + 10));
    this.movespeedX = movespeedX;

    this.img = new Image();
    this.img.src = "./imgs/fire.png";
    this.imgWidth = 100;
    this.imgHeight = 90;
    this.drawSize = RandomRange(0, 5);
    this.drawSizeStep = RandomRange(0.01, 0.2);
    this.drawWidth = this.imgWidth * this.drawSize;
    this.drawHeight = this.imgHeight * this.drawSize;

    this.globalAlpha = RandomRange(0.5, 1);
    this.globalAlphaStep = RandomRange(0.01, 0.01);
  }
  update(timeInterval: number): void {
    if (this.globalAlpha > this.globalAlphaStep)
      this.globalAlpha -= this.globalAlphaStep;
    if (this.drawSize > this.drawSizeStep) {
      this.drawSize -= this.drawSizeStep;
      this.drawWidth = this.imgWidth * this.drawSize;
      this.drawHeight = this.imgHeight * this.drawSize;
    }
    this.posX += this.movespeedX * timeInterval;
  }
  draw(Context2D: CanvasRenderingContext2D): void {
    Context2D.save();
    Context2D.globalAlpha = this.globalAlpha;
    Context2D.drawImage(
      this.img,
      0,
      0,
      this.imgWidth,
      this.imgHeight,
      this.posX - this.drawWidth / 2,
      this.posY - this.drawHeight / 2,
      this.drawWidth,
      this.drawHeight
    );
    Context2D.restore();
  }
}
```

#### 1.4.6.4. 落地的爆炸火花粒子特效

这个地方的关键点比较多，除了衰减半径和衰减透明度，还需要考虑火花飞溅的方向，速度，重力影响。

首先水平方向上，火花可以左右飞溅，所以粒子的水平方向的移动速度`movespeedY`的正负性应当是随机的。

另外还需要一个和飞溅速度相反的阻力`movespeedX_f`，来使得火花飞溅速度衰减。

其次考虑垂直方向，由于是撞向地面导致产生的火花粒子，所以粒子的垂直方向的速度`movespeedY`应当是负，

另外重力的方向`movespeedY_weight`应当是正的，用于使得粒子向上移动的速度衰减。

```ts
export class FireImgSpak extends Particle {
  img: HTMLImageElement;
  movespeedX: number;
  imgHeight: number;
  imgWidth: number;
  drawHeight: number;
  drawWidth: number;
  globalAlpha: number;
  globalAlphaStep: number;
  drawSize: number;
  drawSizeStep: number;
  movespeedY: number;
  movespeedX_f: number;
  movespeedY_weight: number;
  constructor(posX: number, posY: number) {
    super(RandomRange(posX, posX), RandomRange(posY, posY));
    this.movespeedX = Math.sign(RandomRange(-1, 1)) * RandomRange(0.1, 2);
    this.movespeedY = -RandomRange(0.1, 2);
    this.movespeedX_f = -Math.sign(this.movespeedX) * 0.1; // 水平方向阻力,方向和移动方向相反
    this.movespeedY_weight = 0.1; //垂直方向的重力,和重力方向一致

    this.img = new Image();
    this.img.src = "./imgs/fire.png";
    this.imgWidth = 100;
    this.imgHeight = 90;
    this.drawSize = RandomRange(1, 2);
    this.drawSizeStep = RandomRange(0.01, 0.3);
    this.drawWidth = this.imgWidth * this.drawSize;
    this.drawHeight = this.imgHeight * this.drawSize;

    this.globalAlpha = RandomRange(0.8, 1);
    this.globalAlphaStep = RandomRange(0.01, 0.01);
  }
  update(timeInterval: number): void {
    // 透明度衰减
    if (this.globalAlpha > this.globalAlphaStep)
      this.globalAlpha -= this.globalAlphaStep;
    // 绘制大小衰减
    if (this.drawSize > this.drawSizeStep) {
      this.drawSize -= this.drawSizeStep;
      this.drawWidth = this.imgWidth * this.drawSize;
      this.drawHeight = this.imgHeight * this.drawSize;
    }
    // 水平方向的移动速度根据阻力衰减，由于这两个速度始终方向相反，所以只需要按照衰减速度的方式理解就行，移动速度和摩擦力相加即可
    if (Math.abs(this.movespeedX) > Math.abs(this.movespeedX_f))
      this.movespeedX += this.movespeedX_f; // 摩擦力和移动方向相反，所以直接相加
    else this.movespeedX = 0; // 步长衰减到最小值，直接设置为0

    // 垂直方向
    if (this.movespeedY <= this.movespeedY_weight)
      this.movespeedY += this.movespeedY_weight; // 重力始终向下，所以相减
    else this.movespeedY = this.movespeedY_weight;

    this.posX += this.movespeedX * timeInterval;
    this.posY += this.movespeedY * timeInterval;
  }
  draw(Context2D: CanvasRenderingContext2D): void {
    Context2D.save();
    Context2D.globalAlpha = this.globalAlpha;
    Context2D.drawImage(
      this.img,
      0,
      0,
      this.imgWidth,
      this.imgHeight,
      this.posX - this.drawWidth / 2,
      this.posY - this.drawHeight / 2,
      this.drawWidth,
      this.drawHeight
    );
    Context2D.restore();
  }
}
```

#### 1.4.6.5. 爆炸的烟雾粒子特效

这里值得一说的是，旋转的实现方法，具体看注释

```ts
export class Explosion extends Animater {
  sound: HTMLAudioElement;
  rotateAngleStep: number;
  rotateAngle = 0;
  constructor(posX: number, posY: number) {
    super("./imgs/boom.png", 200, 179, 1, [6], ["default"]);
    this.posX = posX;
    this.posY = posY;
    this.sound = new Audio();
    this.sound.src = "./sounds/Ice attack 2.wav";
    this.rotateAngleStep =
      Math.sign(RandomRange(-1, 1)) * (Math.PI / 360) * RandomRange(5, 15); // +/-(15° ~ 30°)
    // 动画本身只有五帧，但传入的参数表示有6帧，这里再请求在最后一帧停止渲染，则会渲染空白帧
    this.requestStopAnimateFrameAtLastFrame();
    this.setFps(15);
  }
  update(timeInterval: number): void {
    if (this.isFirstAnimateFrame()) this.sound.play(); // 如果是第一帧 播放音效
    this.rotateAngle += this.rotateAngleStep;
    super.update(timeInterval);
  }
  draw(Context2D: CanvasRenderingContext2D): void {
    Context2D.save(); // 换新笔，旧笔context入栈
    Context2D.translate(
      this.posX + this.drawWidth / 2,
      this.posY + this.drawHeight / 2
    ); //改变原点坐标
    Context2D.rotate(this.rotateAngle); // 旋转画布某角度
    const oldValX = this.posX; // 记录旧值
    const oldValY = this.posY;
    this.posX = -this.drawWidth / 2; // 因为坐标系变了 ，原来的坐标也要变
    this.posY = -this.drawHeight / 2;
    super.draw(Context2D);
    this.posX = oldValX; // 恢复旧值
    this.posY = oldValY;
    Context2D.restore(); // 换回原来的笔，出栈context
  }
}
```

### 1.4.7. 输入监听和状态管理的实现

原本写的很复杂，最终优化后就成这样了，把状态管理和输入监听解耦了，目前来看还是写的比较精简的

#### 1.4.7.1. 输入监听

```ts
import { ValueOf } from "./utils.js";

type KeyMapsValues = ValueOf<typeof InputListener.KeyMaps>;
export class InputListener {
  // 定义一些静态常量
  static KeyMaps = {
    PressRight: "ArrowRight",
    PressLeft: "ArrowLeft",
    PressUp: "ArrowUp",
    PressDown: "ArrowDown",
    PressSpase: " ",
    Enter: "Enter",
    Escape: "Escape",
  } as const; // const 可以保证ValueOf能起作用
  inputs: Array<KeyMapsValues> = [];
  constructor() {
    this.listenning();
  }
  listenning() {
    window.addEventListener("keydown", (event) => {
      if (
        Object.values(InputListener.KeyMaps).includes(
          event.key as KeyMapsValues
        )
      ) {
        this.inputs.unshift(event.key as KeyMapsValues); // 放到开头
      }
    });
    window.addEventListener("keyup", (event) => {
      this.inputs = [];
    });
  }
}
```

#### 1.4.7.2. 状态管理

状态管理指的是一种设计模式，是一个比较宽泛的概念，这里是我用 ts 写的，目前来看比较满意的一种写法

```ts
import { InputListener } from "./InputListener.js";
import { ValueOf } from "./utils.js";
export abstract class State {
  stateName: string | number | symbol;
  constructor(stateName: string | number | symbol) {
    this.stateName = stateName;
  }
  abstract enter(): void;
  abstract update(timeInterval: number): void;
  abstract inputsHandler(
    inputs: Array<ValueOf<typeof InputListener.KeyMaps>>
  ): void;
}
```

#### 1.4.7.3. 使用状态设计模式实现状态管理 Player 类的部分代码

```ts
export class ShadowDog extends Animal {
  Name = "ShadowDog";
  // 静态属性 状态枚举
  static StateNamesEnum = {
    Running: "Running",
    Jumping: "Jumping",
    GetHit: "GetHit",
    PreDizzy: "PreDizzy",
    Dizzy: "Dizzy",
    Diving: "Falling",
    Sitting: "Sitting",
    Barkting: "Barkting",
    Dying: "Dying",
  } as const;
  // 状态map
  StateMap: { [value in ValueOf<typeof ShadowDog.StateNamesEnum>]?: State } =
    {};
  // 当前状态
  currentState!: State;
  constructor() {
    this.StateMap[ShadowDog.StateNamesEnum.Running] = new RunningState(this);
    this.StateMap[ShadowDog.StateNamesEnum.Jumping] = new JumpingState(this);
    this.StateMap[ShadowDog.StateNamesEnum.Diving] = new DivingState(this);
    this.StateMap[ShadowDog.StateNamesEnum.Sitting] = new SittingState(this);
    this.StateMap[ShadowDog.StateNamesEnum.Barkting] = new BarktingState(this);
    this.StateMap[ShadowDog.StateNamesEnum.GetHit] = new GetHitState(this);
    this.StateMap[ShadowDog.StateNamesEnum.PreDizzy] = new PreDizzyState(this);
    this.StateMap[ShadowDog.StateNamesEnum.Dizzy] = new DizzyState(this);
    this.StateMap[ShadowDog.StateNamesEnum.Dying] = new DyingState(this);

    // setState 要放到最后
    this.setState(ShadowDog.StateNamesEnum.Running);
  }
  // 改变状态
  setState(stateName: ValueOf<typeof ShadowDog.StateNamesEnum>) {
    this.currentState = this.StateMap[stateName] as State;
    this.currentState.enter();
  }
  // 更新
  update(timeInterval: number): void {
    // 处理输入
    this.currentState.inputsHandler(this.Game.InputListener.inputs);
    // 更新
    this.currentState.update(timeInterval);
    // 基类的更新
    super.update(timeInterval);
  }
}

class RunningState extends State {
  shadowDog: ShadowDog;
  constructor(shadowDog: ShadowDog) {
    super(ShadowDog.StateNamesEnum.Running);
    this.shadowDog = shadowDog;
  }
  enter(): void {
    // 进入该状态，初始化到该状态
    this.shadowDog.moveSpeedX = 0;
    this.shadowDog.moveSpeedY = 0;
    this.shadowDog.setOnGround();
    this.shadowDog.changeAnimateByName("run");
    // 场景移动速度
    this.shadowDog.Game.Scene.setSceneSpeed(
      -this.shadowDog.maxMoveSpeedX * 0.5
    );
  }
  // 状态的更新
  update(timeInterval: number): void {
    // 添加粒子特效
    this.shadowDog.Game.Scene.particles.unshift(
      new Dust(
        this.shadowDog.posX + this.shadowDog.drawWidth / 2,
        this.shadowDog.posY + this.shadowDog.drawHeight
      )
    );
    // 检测是否收到伤害
    if (this.shadowDog.isGetHit(this.shadowDog.Game.Scene.enemys)) {
      this.shadowDog.setState(ShadowDog.StateNamesEnum.GetHit);
      this.shadowDog.Game.lives--; // 生命值减一
    }
  }
  // 输入处理
  inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>): void {
    // 如果按下右键，改变速度等的值
    if (inputs.includes(InputListener.KeyMaps.PressRight)) {
      this.shadowDog.moveSpeedX = this.shadowDog.maxMoveSpeedX * 0.5;
      this.shadowDog.Game.Scene.setSceneSpeed(
        -this.shadowDog.maxMoveSpeedX * 1.0
      );
    } else if (inputs.includes(InputListener.KeyMaps.PressLeft)) {
      this.shadowDog.moveSpeedX = -this.shadowDog.maxMoveSpeedX * 0.5;
      this.shadowDog.Game.Scene.setSceneSpeed(
        this.shadowDog.maxMoveSpeedX * 0.5
      );
    }
    // 按下上键，进入jump状态
    else if (inputs.includes(InputListener.KeyMaps.PressUp)) {
      this.shadowDog.setState(ShadowDog.StateNamesEnum.Jumping);
    }
    // 按下上键，进入sitting状态
    else if (inputs.includes(InputListener.KeyMaps.PressDown))
      this.shadowDog.setState(ShadowDog.StateNamesEnum.Sitting);
    // 松开左右按键，恢复速度等的值
    else {
      this.shadowDog.moveSpeedX = 0;
      this.shadowDog.Game.Scene.setSceneSpeed(
        -this.shadowDog.maxMoveSpeedX * 0.5
      );
    }
  }
}
```

#### 1.4.7.4. 使用状态设计模式实现状态管理 Game 类的部分代码

```ts
type GameStateEnum = ValueOf<typeof Game.StateEnum>;
export class Game {
  // 定义一些静态常量表示状态
  static StateEnum = {
    Preview: "Preview",
    BeforeRunning: "BeforeRunning",
    Running: "Running",
    Stop: "Stop",
    GameOver: "GameOver",
  } as const;
  allStates: { [key in GameStateEnum]?: State } = {};
  currentState!: State;
  InputListener: InputListener;
  constructor(
    Context2D: CanvasRenderingContext2D,
    CANVAS_WIDTH: number,
    CANVAS_HEIGHT: number
  ) {
    this.InputListener = new InputListener();
    this.UI = new UI(this);

    this.allStates[Game.StateEnum.Preview] = new PreviewStatus(this);
    this.allStates[Game.StateEnum.BeforeRunning] = new BeforeRunning(this);
    this.allStates[Game.StateEnum.Running] = new RunningStatus(this);
    this.allStates[Game.StateEnum.Stop] = new StopStatus(this);
    this.allStates[Game.StateEnum.GameOver] = new GameOverStatus(this);
    this.setState(Game.StateEnum.Preview);
  }
  // 改变状态
  setState(StateName: ValueOf<typeof Game.StateEnum>) {
    console.log("current:" + StateName);
    this.currentState = this.allStates[StateName] as State;
    this.currentState.enter();
  }
  update(timeInterval: number) {
    // 当前状态对输入的处理
    this.currentState.inputsHandler(this.InputListener.inputs);
    // 当前状态的更新
    this.currentState.update(timeInterval);
    this.UI.update(timeInterval);
  }
  draw(Context2D: CanvasRenderingContext2D) {
    this.Scene.draw(Context2D);
    this.player.draw(Context2D);
    this.UI.draw(Context2D);
  }
  start() {
    let lastTimeStampFromStart = 0;
    const refreshDisplay = (currentTimeStampFromStart: number) => {
      const timeInterval = currentTimeStampFromStart - lastTimeStampFromStart; // 计算时间间隔
      lastTimeStampFromStart = currentTimeStampFromStart;
      this.update(timeInterval);
      this.draw(this.Context2D);
      requestAnimationFrame(refreshDisplay);
    };
    refreshDisplay(0);
    console.log("game is started.");
  }
}

class PreviewStatus extends State {
  Game: Game;
  constructor(game: Game) {
    super(Game.StateEnum.Preview);
    this.Game = game;
  }
  enter(): void {
    // 进入该状态
    this.Game.Music.currentTime = 0; // 从头开始播放
    this.Game.score = 0;
    this.Game.lives = 1000000000;
    this.Game.player.setState(ShadowDog.StateNamesEnum.Running);
    this.Game.UI.addScoreInfos = [];
    this.Game.Scene.enemys = [];
    this.Game.Scene.particles = [];
    this.Game.Scene.explosions = [];
    this.Game.Scene.spakParticles = [];
    return;
  }
  update(timeInterval: number): void {
    // 该状态需要更新的信息，如在stopGame状态，则以下两个信息都不更新就好了
    this.Game.Scene.update(timeInterval);
    this.Game.player.update(timeInterval);
  }
  inputsHandler(inputs: Array<ValueOf<typeof InputListener.KeyMaps>>) {
    // 输入处理，按下enter开始游戏
    if (inputs.includes(InputListener.KeyMaps.Enter)) {
      this.Game.setState(Game.StateEnum.BeforeRunning);
    }
  }
}
```

### 1.4.8. Scene 场景

主要是用来处理当背景移动，游戏中敌人应当随着背景一起移动的问题，

这里我写了一个场景类，把需要跟随场景移动的东西都放进去，

由该类来处理场景的移动速度和场景中物体坐标更新的问题

以下是部分代码

```ts
export class Scene {
  Game: Game;
  private SceneSpeed = 0;
  background: Background;
  constructor(Game: Game) {
    this.Game = Game;
    this.background = new BackgroundCity(
      this.Game.GAME_WIDTH,
      this.Game.GAME_HEIGHT
    );
  }
  // 这一步最关键，处理死亡的敌人，
  // 另外还要更具场景移动速度，重新计算场景中敌人的位置
  update(timeInterval: number) {
    // handles
    this.enemysHandle(timeInterval);
    // 最值处理，限制粒子特效的数量
    if (this.particles.length > this.particlesMaxLength)
      this.particles.length = this.particlesMaxLength;
    if (this.spakParticles.length > this.spakParticlesMaxLength)
      this.spakParticles.length = this.spakParticlesMaxLength;
    // 更新
    // 更新背景的移动速度
    this.background.setSpeed(this.SceneSpeed);
    this.background.update(timeInterval);
    // 移除死亡和超出屏幕的敌人
    this.enemys = this.enemys.filter((item) => {
      return !item.isOutOfLeftScreem() && item.getAliveFlag();
    });
    // 更新和重新计算敌人的坐标
    this.enemys.forEach((item) => {
      item.update(timeInterval);
      item.transform(this.SceneSpeed * timeInterval, 0);
    });
    // 更新和重新计算粒子特效的坐标
    this.particles.forEach((item) => {
      item.update(timeInterval);
      item.posX += this.SceneSpeed * timeInterval;
    });
    this.explosions = this.explosions.filter((item) => {
      item.update(timeInterval);
      item.posX += this.SceneSpeed * timeInterval;
      return !item.isLastAnimateFrame();
    });
    this.spakParticles.forEach((item) => {
      item.update(timeInterval);
      item.posX += this.SceneSpeed * timeInterval;
    });
  }
  // 绘制场景中的物体
  draw(Context2D: CanvasRenderingContext2D) {
    this.background.draw(Context2D);
    this.enemys.forEach((item) => item.draw(Context2D));
    this.explosions.forEach((item) => item.draw(Context2D));
    this.particles.forEach((item) => item.draw(Context2D));
    this.spakParticles.forEach((item) => item.draw(Context2D));
  }
  // 设置场景移动速度
  setSceneSpeed(newSpeed: number) {
    this.SceneSpeed = newSpeed;
    return;
  }
  enemysHandle(timeInterval: number) {
    // 周期添加敌人
    if ((this.addEnemyTimer += timeInterval) >= this.addEnemyIntermval) {
      this.addEnemyTimer = 0;
      switch (Math.floor(RandomRange(0, 6))) {
        case 0: // 略
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
      }
    }
  }
}
```

### 1.4.9. UI

UI 这部分代码写的又长又丑，只看结构

```ts
import { Game } from "./Game.js";

type addScoreInfo = { posX: number; posY: number; score: string };
export class UI {
  Game: Game;
  livesImg: HTMLImageElement;
  imgWidth: number;
  imgHeight: number;
  imgDrawWidth: number;
  imgDrawHeight: number;
  addScoreInfos: Array<addScoreInfo> = [];

  constructor(Game: Game) {
    this.Game = Game;
    this.livesImg = new Image();
    this.livesImg.src = "./imgs/heart.png";
    this.imgWidth = 50;
    this.imgHeight = 50;
    this.imgDrawWidth = 40; //this.imgWidth * 0.5;
    this.imgDrawHeight = 40; // this.imgHeight * 0.5;
  }
  // 对漂浮的分数的坐标的计算
  update(timeInterval: number) {
    const targetPosX = 200;
    const moveSpeedX = 0.1;
    const targetPosY = 80;
    const moveSpeedY = 0.1;
    // 这里做的操作是更新数组中的坐标，使其朝着 targetPos 所在的坐标移动
    this.addScoreInfos = this.addScoreInfos
      .map((item) => {
        const stepX = moveSpeedX * timeInterval;
        const stepY = moveSpeedY * timeInterval;
        if (item.posX - targetPosX >= stepX) item.posX -= stepX;
        else if (item.posY - targetPosY <= stepX) item.posX += stepX;
        if (item.posY - targetPosY >= stepY) item.posY -= stepY;
        else if (item.posY - targetPosY <= stepY) item.posY += stepY;

        const gapX = Math.abs(item.posX - targetPosX);
        const gapY = Math.abs(item.posY - targetPosY);
        if (gapX < stepY && gapY < stepX) {
          // 当前坐标和目标坐标之间的距离小于步长，则移除该项
          return null as unknown as addScoreInfo;
        } else {
          return item;
        }
      })
      .filter((item) => item != null);
  }
  draw(Context2D: CanvasRenderingContext2D) {
    Context2D.save();
    const txtSize = 40;
    const ShadowWidth = 2;
    Context2D.font = `${txtSize}px HanaleiFill`;

    if (this.Game.currentState.stateName == Game.StateEnum.Preview) {
      // 预览界面：显示按下什么键开始游戏
    } else if (this.Game.currentState.stateName == Game.StateEnum.Running) {
      // 游戏运行界面
      // 绘制剩余的生命
      for (let index = 0; index < this.Game.lives; index++) {
        Context2D.drawImage(
          this.livesImg,
          0,
          0,
          this.imgWidth,
          this.imgHeight,
          index * (this.imgDrawWidth + 10) + 10,
          5,
          this.imgDrawWidth,
          this.imgDrawHeight
        );
      }
      // 绘制漂浮的得分数字
      this.addScoreInfos.forEach((item) => {
        Context2D.textAlign = "left";
        Context2D.fillStyle = "white";
        Context2D.fillText(item.score, item.posX, item.posY);
        Context2D.fillStyle = "black";
        Context2D.fillText(
          item.score,
          item.posX + ShadowWidth,
          item.posY + ShadowWidth
        );
      });
    } else if (this.Game.currentState.stateName == Game.StateEnum.Stop) {
      // 游戏暂停界面
      // 显示按下什么键继续游戏
    } else if (this.Game.currentState.stateName == Game.StateEnum.GameOver) {
      // 游戏结束界面，显示分数
    }
    Context2D.restore();
  }
}
```

### 1.4.10. 字体

```css
// 这一步相当于是注册了一个字体，而后页面中就可以使用 `HanaleiFill` 这个字体
@font-face {
  font-family: "HanaleiFill";
  src: url(../font/HanaleiFill-Regular.ttf);
}
```

**如**

```ts
Context2D.font = `${txtSize}px HanaleiFill`;
```

**监听页面加载完毕事件和字体加载事件**

`document.fonts` 的值是文档的 FontFaceSet 接口。FontFaceSet 接口 用于 对 加载新字体、检查已加载字体的加载状态。

```ts
window.addEventListener("load", () => {
 // 字体加载完成后的逻辑
 document.fonts.ready.then(() => {
  // 此时DOM中的资源和字体就以加载完毕了
 }
}
```

### 1.4.11. Canvas 铺满页面屏幕的实现

```less
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
}
html,
body {
  position: relative;
  width: 100vw;
  height: 100vh;
  #myCanvas,
  #loading {
    // 居中
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // 关键：设置最大宽度为屏幕宽高的100%
    max-width: 100vw;
    max-height: 100vh;
  }
}
```

### 1.4.12. 自写工具类

没什么好讲的，主要看注释和用例

```ts
export function RandomRange(from: number, to: number) {
  return Math.random() * (to - from) + from;
}

// 注意传入的T需用as const修饰，否则被当做字符串
export type ValueOf<T> = T[keyof T];
```
