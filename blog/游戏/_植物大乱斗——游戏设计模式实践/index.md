---
title: 植物大乱斗——游戏设计模式学习笔记
date: 2024-06-18T15:19:00
---

# 植物大乱斗——游戏设计模式学习笔记

> 去年年末的时候还在学《游戏设计模式》这本书，学到最后几章还没学完就跑去实习上班了，几个月前就看到过《从零开始的植物明星大乱斗》这个系列教程，今天看到这个系列教程终于做完了，先导片也在19个小时前发布了，实践大于理论，打算学一下，但是不打算用easyX、c++来实现，照抄代码又不难，所以打算用canvas、js来实现,不知道半个月能不能写完。

> 另外，由于我先前写过一些小游戏，对游戏制作中的一些基本概念已经了解，所以我只关心这个教程中的设计模式，只关心代码，所以这篇笔记应该只有代码和注释。

## 01\_项目搭建

:::code-tabs

@tab `/index.html`
@[code ts](./projects/01_项目搭建/index.html)
@tab `/src/main.ts`
@[code ts](./projects/01_项目搭建/src/main.ts)
@tab `/src/style.less`
@[code ts](./projects/01_项目搭建/src/style.less)

:::

## 02_Scene场景设计

:::code-tabs

@tab /src/main.ts
@[code ts](./projects/02_场景设计/src/main.ts)
@tab /scene/Scene.ts
@[code ts](./projects/02_场景设计/src/scene/Scene.ts)
@tab /scene/MenuScene.ts
@[code ts](./projects/02_场景设计/src/scene/MenuScene.ts)
@tab /scene/Input.ts
@[code ts](./projects/02_场景设计/src/Input.ts)

:::

## 03_SceneManager场景切换

:::code-tabs

@tab `/src/SceneManager.ts`
@[code ts](./projects/03_场景切换/src/scene/SceneManager.ts)
@[code ts](./projects/03_场景切换/src/scene/MenuScene.ts)
@[code ts](./projects/03_场景切换/src/scene/SelectorScene.ts)
@[code ts](./projects/03_场景切换/src/scene/GameScene.ts)
@tab `/Input.ts`
@[code ts](./projects/03_场景切换/src/Input.ts)
@tab `/main.ts`
@[code ts](./projects/03_场景切换/src/main.ts)

:::

## 04_Atlas图像资源容器与Animation图集渲染控制器

:::code-tabs

@tab `src/utils/index.ts`
@[code ts](./projects/04_Atlas图像资源容器与Animation图集渲染控制器/src/utils/index.ts)

@tab `src/object/Atlas.ts`
@[code ts](./projects/04_Atlas图像资源容器与Animation图集渲染控制器/src/object/Atlas.ts)

@tab `src/object/Animation.ts`
@[code ts](./projects/04_Atlas图像资源容器与Animation图集渲染控制器/src/object/Animation.ts)

@tab `src/resources/index.ts`
@[code ts](./projects/04_Atlas图像资源容器与Animation图集渲染控制器/src/resources/index.ts)

@tab `src/scene/GameScene.ts`
@[code ts](./projects/04_Atlas图像资源容器与Animation图集渲染控制器/src/scene/GameScene.ts)

@tab `src/main.ts`
@[code ts](./projects/04_Atlas图像资源容器与Animation图集渲染控制器/src/main.ts)

:::

## 05_Vector2二维矢量与Camera相机

:::code-tabs

@tab `/src/Camera.ts`
@[code ts](./projects/05_摄像机/src/Camera.ts)

@tab `/src/math/Vector2.ts`
@[code ts](./projects/05_摄像机/src/math/Vector2.ts)

@tab `/src/scene/GameScene.ts`
@[code ts](./projects/05_摄像机/src/scene/GameScene.ts)
:::

## 06_Timer定时器与相机抖动效果的实现

:::code-tabs

@tab `/src/timer/Timer.ts`
@[code ts](./projects/06_Timer定时器与相机抖动/src/timer/Timer.ts)

@tab `/src/Camera.ts`
@[code ts](./projects/06_Timer定时器与相机抖动/src/Camera.ts)

@tab `/src/scene/GameScene.ts`
@[code ts](./projects/06_Timer定时器与相机抖动/src/scene/GameScene.ts)
:::

## 07\_主菜单界面和角色选择界面_重构部分代码

:::code-tabs
@tab `/src/scene/MenuScene.ts`
@[code ts](./projects/07_主菜单界面和角色选择界面/src/scene/MenuScene.ts)
@tab `/src/scene/SelectorScene.ts`
@[code ts](./projects/07_主菜单界面和角色选择界面/src/scene/SelectorScene.ts)
@tab `/src/resources/index.ts`
@[code ts](./projects/07_主菜单界面和角色选择界面/src/resources/index.ts)
:::

## 08_角色选择界面动态效果和交互_重构部分代码

:::code-tabs
@tab `/src/scene/SelectorScene.ts`
@[code ts](./projects/08_角色选择界面动态效果及交互/src/scene/SelectorScene.ts)
@tab `实现多线程加载资源`
@[code ts](./projects/08_角色选择界面动态效果及交互/src/resources/index.ts)
@tab `实现加载字体`
@[code ts](./projects/08_角色选择界面动态效果及交互/src/utils/index.ts)
:::

## 09_游戏场景搭建和物理模拟基础_重构部分代码

:::code-tabs
@tab `/src/main.ts`
@[code ts](./projects/09_游戏场景搭建和物理模拟基础/src/main.ts)
@tab `/src/Render.ts`
@[code ts](./projects/09_游戏场景搭建和物理模拟基础/src/Render.ts)
@tab `/src/scene/GameScene.ts`
@[code ts](./projects/09_游戏场景搭建和物理模拟基础/src/scene/GameScene.ts)

:::

## 10_玩家类设计和角色移动基础_重构部分代码

:::code-tabs
@tab `/src/player/Player.ts`
@[code ts](./projects/10_玩家类设计和角色移动基础/src/player/Player.ts)
@tab `/src/player/PeashooterPlayer.ts`
@[code ts](./projects/10_玩家类设计和角色移动基础/src/player/PeashooterPlayer.ts)
@tab `/src/player/SunflowerPlayer.ts`
@[code ts](./projects/10_玩家类设计和角色移动基础/src/player/SunflowerPlayer.ts)
@tab `/src/scene/SelectorScene.ts`
@[code ts](./projects/10_玩家类设计和角色移动基础/src/scene/SelectorScene.ts)
@tab `/src/scene/GameScene.ts`
@[code ts](./projects/10_玩家类设计和角色移动基础/src/scene/GameScene.ts)
:::

## 11_平台单向碰撞检测和重力模拟

:::code-tabs
@tab `/src/object/Plantform.ts`
@[code ts](./projects/11_平台单向碰撞检测和重力模拟/src/object/Plantform.ts)
@tab `/src/player/Player.ts`
@[code ts](./projects/11_平台单向碰撞检测和重力模拟/src/player/Player.ts)
@tab `/src/scene/GameScene.ts`
@[code ts](./projects/11_平台单向碰撞检测和重力模拟/src/scene/GameScene.ts)
@tab `/src/math/Line.ts`
@[code ts](./projects/11_平台单向碰撞检测和重力模拟/src/math/Line.ts)
@tab `/src/math/Point.ts`
@[code ts](./projects/11_平台单向碰撞检测和重力模拟/src/math/Point.ts)
:::

## 12_角色技能设计和子弹基类实现

:::code-tabs
@tab `/src/bullet/Bullet.ts`
@[code ts](./projects/12_角色技能设计和子弹基类实现/src/bullet/Bullet.ts)
:::

## 13_玩家子弹派生类详细实现

:::code-tabs
@[code ts](./projects/13_玩家子弹派生类详细实现/src/bullet/)
Disappear
:::
