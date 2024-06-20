---
title: 植物大乱斗——游戏设计模式实践
date: 2024-06-18T15:19:00
---

> 去年年末的时候还在学《游戏设计模式》这本书，学到最后几章还没学完就跑去实习上班了，几个月前就看到过《从零开始的植物明星大乱斗》这个系列教程，今天看到这个系列教程终于做完了，先导片也在19个小时前发布了，实践大于理论，打算学一下，但是不打算用easyX、c++来实现，照抄代码又不难，打算用canvas、js来实现,不知道半个月能不能写完。

## 01\_项目搭建

:::code-tabs

@tab `/index.html`
@[code ts](./projects/01_项目搭建/index.html)
@tab `/src/main.ts`
@[code ts](./projects/01_项目搭建/src/main.ts)
@tab `/src/style.less`
@[code ts](./projects/01_项目搭建/src/style.less)

:::

## 02\_场景设计

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

## 03\_场景切换

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
