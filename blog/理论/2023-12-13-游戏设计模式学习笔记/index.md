---
title: 《游戏设计模式》学习笔记
description: 《游戏设计模式(game-programming-patterns)》学习笔记
date: 2023-12-13T21:21:00+08:00
cover: /cover/gameprogrammingpatterns.png
tag:
  - 笔记
  - 游戏
  - 设计模式
category: 笔记
---

# 《游戏设计模式（game-programming-patterns）》学习笔记

![Alt text](cover/gameprogrammingpatterns.png)

**关于原书作者**

> Bob Nystrom。在EA工作的8年, 他在EA工作时，就开始写这本书了。

## 目录

- [《游戏设计模式（game-programming-patterns）》学习笔记](#游戏设计模式game-programming-patterns学习笔记)
  - [目录](#目录)
  - [前言：架构，性能和游戏](#前言架构性能和游戏)
  - [重访设计模式](#重访设计模式)
    - [命令模式](#命令模式)
      - [配置输入](#配置输入)
      - [使用命令模式改写优化](#使用命令模式改写优化)
      - [和玩家解耦](#和玩家解耦)
      - [通过命令模式完成撤销操作](#通过命令模式完成撤销操作)
      - [对多重撤销操作的支持](#对多重撤销操作的支持)
      - [闭包函数与命令模式](#闭包函数与命令模式)
    - [享元模式](#享元模式)
      - [使用享元模式来节省内存](#使用享元模式来节省内存)
      - [地形生成](#地形生成)
    - [观察者模式](#观察者模式)
      - [成就解锁](#成就解锁)
    - [原型模式](#原型模式)
      - [怪物生产者](#怪物生产者)
      - [使用原型模式重构](#使用原型模式重构)
    - [单例模式](#单例模式)
    - [状态模式](#状态模式)
      - [为什么要用状态模式？](#为什么要用状态模式)
      - [有限状态机FSMs](#有限状态机fsms)
      - [并发状态机](#并发状态机)
      - [分层状态机](#分层状态机)
  - [序列模式](#序列模式)
    - [双缓冲模式](#双缓冲模式)
  - [行为模式](#行为模式)
    - [类型对象（Type Object）](#类型对象type-object)
      - [从JSON配置中加载并构建物种](#从json配置中加载并构建物种)

## 前言：架构，性能和游戏

**关于架构**

- 本书是讨论的是如何组织代码的，或者说是关于架构的
- ==“程序都有一定架构”== ， ==“将所有东西都塞到main()中”== 也是一种架构
- 架构好坏的评判： ==“评价架构设计的好坏就是评价它应对改动有多么轻松。”==

**关于解耦**

- 两块代码是耦合的， 意味着需要阅读理解两块代码
- 如果解耦了它们俩，就可以单独地只阅读理解其中一个部分
- ==“软件架构的关键目标： 最小化在编写代码前需要了解的信息。”==
- 解耦的目标：
  - ==“当一块代码有改动时，不需要修改另一块代码。”== (或者说需要修改的代码很少)
  - ==“耦合程度越小，改动会波及的范围就越小。”==

**追求完美架构的代价**

- 维持好的游戏架构，使其可扩展、可维护、低耦合，需要花费大量精力。
- 无限制的在代码中引入接口、抽象、虚函数，可能最后不仅毫无用处，甚至可能会污染代码，不要提前优化，提前假设某处未来可能会有功能扩展。

**开发的灵活性与运行的高效性**

- ==“ 让代码更灵活的许多模式依靠虚拟调度、 接口、 指针、 消息和其他机制， 它们都会加大运行时开销。”==
- 为了让程序高效的执行，可以 ==“保持代码灵活直到确定设计，再去除抽象层来提高性能。”==

**糟糕代码的优势**

- ==“编写架构良好的代码需要仔细地思考，这会消耗时间。”==
- ==“原型——一坨勉强拼凑在一起，只能完成某个点子的简单代码。”== 可以节约时间。
- 原型代码看上去能工作，但不能被维护，必须重写

**关于平衡**

- 保持代码可读性，需要好的架构。
- 保证代码执行效率,需要好的优化。
- 需要快速将需求实现
- 这些目标至少是部分对立的:
  - 好的架构长期来看提高了生产力， 也意味着每个改动都需要消耗更多努力保持代码整洁。
  - 高度优化的代码不灵活，很难改动。
  - 如果尽可能快地实现特性， 代码库就会充满黑魔法，漏洞和混乱，阻碍未来的产出。
- 没有简单的答案，只有权衡。

## 重访设计模式

> 这里部分主要讨论《设计模式：可复用面向对象软件的基础》中某些设计模式在游戏中的具体应用

### 命令模式

#### 配置输入

一个用命令模式优化的案例

![](./images/command-buttons-one.png)

```ts
// 这个函数通常在游戏循环中每帧调用一次
function handleInput() {
  if (isPressed(BUTTON_X)) jump();
  else if (isPressed(BUTTON_Y)) fireGun();
  else if (isPressed(BUTTON_A)) swapWeapon();
  else if (isPressed(BUTTON_B)) lurchIneffectively();
}
```

:::tip 缺点

- 用户的输入和程序行为硬编码在一起了,
- 这导致无法让玩家自定义按键的功能。
  :::

#### 使用命令模式改写优化

> **为了支持玩家配置按键的功能**，可以使用命令模式，  
> 将这些对jump()和fireGun()的直接调用转化为==可替换==的东西。

:::tabs

@tab 定义Command

```ts
// 定义基类代表可触发的游戏行为
interface Command {
  void execute();
}
```

@tab 定义Command子类

然后我们为不同的游戏行为定义相应的子类：

```ts
class JumpCommand implements Command {
    void execute() {
        jump();
    }
};

class FireCommand implements Command {
    void execute() {
        fireGun();
    }
};
```

@tab:active 重写输入处理

在代码的输入处理部分，为每个按键存储一个命令。

```ts
class InputHandler {
  // 绑定命令的方法……
   buttonX_ = new JumpCommand();
   buttonY_ = new FireCommand();
   buttonA_ = new swapWeaponCommand();
   buttonB_ = new lurchIneffectivelyCommand();
  void handleInput(){
    // 现在输入处理部分这样处理：
    if (isPressed(BUTTON_X)) buttonX_.execute();
    else if (isPressed(BUTTON_Y)) buttonY_.execute();
    else if (isPressed(BUTTON_A)) buttonA_.execute();
    else if (isPressed(BUTTON_B)) buttonB_.execute();
  };
};
```

这样，相比于之前的硬编码导致每个输入直接调用函数，现在可以修改按键实际所执行的操作：

![](./images/command-buttons-two.png)
:::

#### 和玩家解耦

> 之前的写法其实是假设在execute()函数能够直接操作玩家  
> 现在要进一步解耦，使得命令可以操作除玩家自己之外的角色

```ts
interface Command {
  void execute(Player player);
}
```

现在，可以使用这个类让游戏中的任何角色跳来跳去了。

```ts
class JumpCommand implements Command {
    void execute(Player player) {
        player.jump();
    }
};
```

修改handleInput()，让它可以返回命令：

```ts
class InputHandler {
  // 绑定命令的方法……
  buttonX_ = new JumpCommand();
  buttonY_ = new FireCommand();
  buttonA_ = new swapWeaponCommand();
  buttonB_ = new lurchIneffectivelyCommand();
  handleInput(): Command {
    if (isPressed(BUTTON_X)) return buttonX_;
    if (isPressed(BUTTON_Y)) return buttonY_;
    if (isPressed(BUTTON_A)) return buttonA_;
    if (isPressed(BUTTON_B)) return buttonB_;
    // 没有按下任何按键，就什么也不做
    return NULL;
  }
}
```

可以让玩家控制游戏中的任何角色，只需向命令传入不同的角色。

```ts
Command cmd = inputHandler.handleInput();
cmd && cmd.execute(this);
```

现在玩家和AI可以使用相同的命令；AI代码只需生成Command对象。

```ts
class Player{
    update(dt:number){
        Command cmd = inputHandler.handleInput();
        cmd && cmd.execute(this);
    }
}
class AI{
    update(dt:number){
        Command cmd = getNextCommand();
        cmd && cmd.execute(this);
    }
}
```

通过命令流，解耦消费者和生产者。

- 控制器或者AI，产生一系列命令放入流中
- 调度器或者角色自身，调用并消耗命令

![](images/command-stream.png)

#### 通过命令模式完成撤销操作

一个可以实现撤销操作的案例代码

```ts
class MoveUnitCommand implements Command
{
  Unit unit_;
  int x_, y_,xBefore_,yBefore_;
  constructor(Unit unit, int x, int y){
    // 记录被操作的对象
    unit_ = unit;
    // 记录目标位置
    x_ = x;
    y_ = y;
    // 记录当前位置
    xBefore_ = unit_.x;
    yBefore_ = unit_.y;
  };
  void execute(){
    unit_.moveTo(x_, y_);
  }
  void undo(){
    // 撤销操作
    unit_.moveTo(xBefore_, yBefore_);
  }
};
```

```ts
Command handleInput()
{
  Unit unit = getSelectedUnit();
  if (isPressed(BUTTON_UP)) {
    // 向上移动单位
    int destY = unit.y - 1;
    return new MoveUnitCommand(unit, unit.x, destY);
  }
  if (isPressed(BUTTON_DOWN)) {
    // 向下移动单位
    int destY = unit.y + 1;
    return new MoveUnitCommand(unit, unit.x, destY);
  }
  // 其他的移动……
  return NULL;
}

Command cmd = handleInput()
cmd.execute()
cmd.undo()
```

#### 对多重撤销操作的支持

> 可以用于游戏地图、关卡编辑器

支持多重的撤销也不太难。 我们不单单记录最后一条指令，还要记录指令列表，然后用一个引用指向 “当前” 的那个。 当玩家执行一条命令，我们将其添加到列表，然后将代表 “当前” 的指针指向它。

![](images/command-undo.png)

#### 闭包函数与命令模式

> 在某种程度上说，命令模式是为一些没有闭包的语言模拟闭包。

```ts
function makeMoveUnitCommand(unit, x, y) {
  var xBefore, yBefore;
  // 这里返回的就是一个命令对象
  return {
    execute: function () {
      xBefore = unit.x();
      yBefore = unit.y();
      unit.moveTo(x, y);
    },
    undo: function () {
      unit.moveTo(xBefore, yBefore);
    },
  };
}
```

```ts
Command handleInput()
{
  Unit unit = getSelectedUnit();
  if (isPressed(BUTTON_UP)) {
    // 向上移动单位
    int destY = unit.y - 1;
    return makeMoveUnitCommand(unit, unit.x, destY);
  }
  return NULL;
}
Command cmd = handleInput()
cmd.execute()
cmd.undo()
```

### 享元模式

> 这个部分的内容，个人感觉，总结成一句话，就是要把游戏中的某些相同的对象的共有的不变的属性抽取出来，在内存中共用一份，节省内存。

#### 使用享元模式来节省内存

:::tabs

@tab **一种表示树的方式**

```cpp
class Tree {
  private:
    Mesh mesh_;
    Texture bark_;
    Texture leaves_;

    Vector position_;
    double height_;
    double thickness_;
    Color barkTint_;
    Color leafTint_;
};
```

![](images/flyweight-trees.png)

@tab **另一种表示方式**

> 把共有的部分抽取出来，只在内存中保留一份

```cpp
class TreeModel {
  private:
    Mesh mesh_;
    Texture bark_;
    Texture leaves_;
};

class Tree {
  private:
    TreeModel* model_;

    Vector position_;
    double height_;
    double thickness_;
    Color barkTint_;
    Color leafTint_;
};
```

![](images/flyweight-tree-model.png)

:::

#### 地形生成

**定义地形**

```ts
enum Terrain {
  TERRAIN_GRASS,
  TERRAIN_HILL,
  TERRAIN_RIVER,
  // ......
}
```

**定义地图**

```ts
class World {
  Terrain tiles_[WIDTH][HEIGHT];
}
```

**一种获取移动成本和判断是否是水地的算法**

```ts
class World {
  int getMovementCost(int x, int y) {
    switch (tiles_[x][y])
    {
      case TERRAIN_GRASS: return 1;
      case TERRAIN_HILL:  return 3;
      case TERRAIN_RIVER: return 2;
        // 其他地形……
    }
  }

  bool isWater(int x, int y) {
    switch (tiles_[x][y])
    {
      case TERRAIN_GRASS: return false;
      case TERRAIN_HILL:  return false;
      case TERRAIN_RIVER: return true;
        // 其他地形……
    }
  }
};
```

**优化：定义实际的地形类，使得可以方便的获取移动成本**

```ts
class Terrain
{
  int movementCost_;
  bool isWater_;
  Texture texture_;
  Terrain(int movementCost,bool isWater,Texture texture){
    movementCost_=movementCost;
    isWater_=isWater;
    texture_=texture;
  }
  int getMovementCost() const { return movementCost_; }
  bool isWater() const { return isWater_; }
  Texture getTexture() const { return texture_; }
};
```

一种简单的地形生成算法

```ts
// 也可以把这个枚举定义成World的属性,使其生命周期和world保持一致
enum Terrain
{
  TERRAIN_GRASS = new GRASS(1, false, GRASS_TEXTURE),
  TERRAIN_HILL = new HILL(3, false, HILL_TEXTURE),
  TERRAIN_RIVER = new RIVER(2, false, RIVER_TEXTURE)
  // ......
};

class World {
  Terrain tiles_[WIDTH][HEIGHT];
  // 生成地形
  void generateTerrain() {
    for (int x = 0; x < WIDTH; x++) {
      for (int y = 0; y < HEIGHT; y++) {
        if (random(10) == 0) {
          // 加入一些丘陵
          tiles_[x][y] = Terrain.TERRAIN_HILL;
        } else {
          // 将地面填满草皮.
          tiles_[x][y] = Terrain.TERRAIN_GRASS;
        }
      }
    }
    // 放置河流
    int x = random(WIDTH);
    for (int y = 0; y < HEIGHT; y++) {
      tiles_[x][y] = Terrain.TERRAIN_RIVER;
    }
  }
}
```

用这种方式，World不再与各种地形的细节耦合。

```ts
class World {
  Terrain tiles_[WIDTH][HEIGHT];
  // 获取某个位置的地形
  void getTile(int x, int y) {
    return tiles_[x][y];
  }
}
```

**获取经过某地的成本**

```ts
// 获取经过某地的成本
int cost = world.getTile(2, 3).getMovementCost();
```

### 观察者模式

#### 成就解锁

实现一个成就系统，可能需要在触发一些事件后去判断是否可以解锁某些成就，比如在物理引擎的地方判断玩家是否落水，但把解锁某些成就的代码直接夹杂在这些地方可能会导致代码的高耦合不可维护，解决办法就是使用观察者模式来解耦，以下是作者提供的一个案例。

::: tabs

@tab:active Physics.ts

```ts
class Physics extends Subject{
  void updateEntity(Entity& entity){
    bool wasOnSurface = entity.isOnSurface();
    entity.accelerate(GRAVITY);
    entity.update();
    bool isOnSurface = entity.isOnSurface();
    // 说明有物体从地表坠入深渊
    if (wasOnSurface && !isOnSurface) {
      notify(entity, EVENT_START_FALL);
    }
  }
}
```

@tab Subject.ts

```ts
class Subject{
  observers = []
  void addObserver(observer){ observers.push(observer); }
  void delObserver(observer){ observers.remove(observer); }
  void notify(Entity entity, Event event){
    observers.forEach(
      item => item.onNotify(entity,event)
    );
  }
}
```

@tab Achievements.ts

```ts
class Achievements implements Observer{
  bool heroIsOnBridge_;
  void onNotify(Entity entity, Event event) {
    switch (event) {
      case EVENT_ENTITY_FELL:
        if (entity.isHero() && heroIsOnBridge_)
          unlock(ACHIEVEMENT_FELL_OFF_BRIDGE);
        break;
      case XXX:
        // 处理其他事件，更新heroIsOnBridge_变量……
    }
  }
  void unlock(Achievement achievement) {
    // 如果还没有解锁，那就解锁成就……
  }
}
```

@tab Observer.ts

```ts
interface Observer{
  void onNotify(Entity entity, Event event);
}
```

:::

**总的来说**，就是在物理引擎检测到发生了什么事件之后，调用notify()函数，遍历所有观察者，通知所有观察者这个事件发生了。

![images/observer-list.png](images/observer-list.png)

**优点**

- 不存在比如“事件”，“消息”的概念，没有使用队列，或者为每个通知动态分配内存。
- 发送通知只需简单地遍历列表，调用方法。

**缺点**

- 观察者模式是同步的。 被观察者直接调用了观察者上的方法，这意味着直到所有观察者的通知方法返回后， 被观察者才会继续自己的工作。==观察者会阻塞被观察者的运行==。
- 当你有耗时的操作要执行时，应当将这些操作推到另一个线程或工作队列中去。
- 需要小心地在观察者中混合线程和锁。
  - 如果观察者试图获得被观察者拥有的锁，游戏就进入死锁了。
  - 在多线程引擎中，你最好使用事件队列来做异步通信。

**“它做了太多动态分配”**

> 观察者列表随着观察者的添加和删除而动态地增长和缩短。 这种内存的分配吓坏了一些人，觉得：“它做了太多动态分配”。  
> 实际上，需要注意的事情是只在观察者加入时分配内存。 发送通知无需内存分配——只需一个方法调用。 如果你在游戏一开始就加入观察者而不乱动它们，分配的总量是很小的。  
> 下面是一种无需任何动态分配的方式来增加和删除观察者的方法。

**链式观察者**

单链表结构的链式观察者
![images/observer-linked.png](images/observer-linked.png)

单链表结构的链式观察者
::: tabs

@tab Subject.ts

```ts
class Subject {
  head = null;
  // 附加观察者
  addObserver(Observer observer) {
    observer.next = head;
    head = observer;
  }
  // 删除观察者
  delObserver(Observer observer) {
    // 删头节点
    if(observer==head){
      head = observer.next
      observer.next = null
      return;
    }
    // 删非头节点
    Observer cur = head;
    while(cur) {
      if(cur.next == observer) {
        cur.next = observer.next
        observer.next = null
        break;
      }
      cur = cur.next
    }
  }
  // 通知
  notify() {
    Observer cur = head;
    while(cur) {
      cur.onNotify();
      cur = cur.next;
    }
  }
}
```

@tab Observer.ts

```ts
class Observer {
  next = null;
  onNotify();
}
```

:::

双链表结构的链式观察者

::: tabs

@tab Subject.ts

```ts
class Subject{
  head = null;
  // 附加观察者
  addObserver(Observer observer){
    if(head!=null) head.prev = observer
    observer.next = head;
    head = observer;
  }
  // 删除观察者
  delObserver(Observer observer){
    // 调整前后两节点的指针
    if(observer.prev) observer.prev.next = observer.next
    if(observer.next) observer.next.prev = observer.prev
    // 处理删除头节点的特殊情况
    if(observer==head) head = observer.next
  }
  // 通知
  notify(){
    Observer cur = head;
    while(cur){
      cur.onNotify();
      cur = cur.next;
    }
  }
}
```

@tab Observer.ts

```ts
// 双链表结构
class Observer {
  prev = null;
  next = null;
  onNotify();
}
```

:::

::: tip 链式观察者的缺点

由于观察者的后继指针是观察者的一个属性，这意味着一个观察者同时只能存在于一条链中，也就是说一个观察者只能观察一个被观察者。

:::

**链表节点池**

> 为了解决上述问题，链式观察者的实现方式会使得一个观察者只能观察一个对象，这里的解决方案就是，定义一个链表节点对象，让其指针域指向真正的观察者，这样一个观察者可以被多个节点对象所指，那他就可以在多条链上，就可以观察多个对象。  
> 这样,避免频繁动态分配就变得简单了，现在每个链表节点的大小就是固定的了，可以预先在对象池中分配它们。以便重用、随用随取

![images/observer-nodes.png](images/observer-nodes.png)

**销毁被观察者或观察者对另一半的影响**

- 使用delete删除观察者后，
  - 被观察者想通知观察者时，观察者的地址已经悬空了。
- 使用delete删除被观察者，
  - 观察者可能不保存被观察者的引用，所以影响不大。
  - 观察者如果仍然保存被观察者的引用，则该地址也悬空了。
  - 观察者可能不知情，仍然期待收到通知

对于第一种情况，解决的办法就是，观察者在被销毁时，需要把自己从观察者列表中删除。

对于第二种情况，解决的办法就是，在被观察者销毁时，向所有观察者发送“死亡通知”。

- 更安全的方案是在每个被观察者销毁时，让观察者自动取消注册。可以在观察者基类中实现了这个逻辑。这需要在观察者中维护一个被观察者的列表。

这样就做到了：

- 观察者在被销毁时，被观察者要在其所维护的观察者列表中删除它。
- 被观察者在被销毁时，观察者要在其所维护的被观察者列表中删除它。

**失效监听者问题**

开发者可能认为自己所使用的语言有垃圾回收机制就不用关心上述问题，实际上，这里原书作者给了一个案例，场景类中有一个UI类，UI类是一个观察者，玩家类是一个被观察者，玩家进入场景，UI类被注册成为玩家类的观察者，玩家受到攻击后，通知UI类更新血量。这看起来没什么问题。
但是如果玩家离开场景，进入新的场景的话，UI类没有取消注册为观察者，那么玩家类就始终保留着上一个场景UI类的引用，那么这些失效的UI类将始终不会被垃圾回收机制清理，玩家的任何状态变化将会发送给这些UI类上。

### 原型模式

#### 怪物生产者

假设我们游戏中每种怪物都有不同的类——Ghost，Demon，Sorcerer，每种敌人有不同的生产者。

以下是一种暴力实现方式

:::tabs

@tab 怪物

```ts
class Monster {}

class Ghost extends Monster {}

class Demon extends Monster {}

class Sorcerer extends Monster {}
```

@tab 怪物产卵者

```ts
class Spawner {
  spawnMonster(): Spawner;
}

class Ghost_Spawner extends Spawner {
  spawnMonster() {
    return new Ghost();
  }
}

class Demon_Spawner extends Spawner {
  spawnMonster() {
    return new Demon();
  }
}

class Sorcerer_Spawner extends Spawner {
  spawnMonster() {
    return new Sorcerer();
  }
}
```

:::

:::info 这种写法所存在的问题

众多类，众多引用，众多冗余，众多副本，众多重复自我……

:::

#### 使用原型模式重构

![](images/prototype-spawner.png)

:::tabs

@tab 怪物

```ts
interface Monster {
  clone(): Monster;
}
```

@tab Ghost.ts

```ts
class Ghost implements Monster {
  health;
  speed;
  Ghost clone(){
    return new Ghost(health,speed);
  };
};
```

@tab:active 怪物产卵者

```ts
class Spawner {
  self: Monster;
  constructor(self: Monster) {
    this.self = self;
  }
  spawnMonster() {
    return this.self.clone();
  }
}
```

@tab 创建各种生产者

> 这种模式就意味着可以创建一个生产者，生产快速鬼魂，虚弱鬼魂，慢速鬼魂，而只需创建一个合适的原型鬼魂。

```ts
Spawner ghostSpawner = new Spawner(new Ghost(15, 3));
```

:::

**编写clone()的痛苦**

这种优化方式虽然不需要为每个怪物创建单独的生产者类了。
但确需要在每个怪物类中实现clone()。 这和使用生产者方法比起来也没节约多少代码量。

原书作者对这种模式提到了三个问题：

- 深拷贝和浅拷贝的问题
- 使用这个模式需要以每个怪物拥有独立的类作为前提
- 使用庞杂的类层次来组织游戏非常痛苦

原书内容：

> 当你坐下来试着写一个正确的clone()，会遇见令人不快的语义漏洞。 做深层拷贝还是浅层拷贝呢？换言之，如果恶魔拿着叉子，克隆恶魔也要克隆叉子吗？
>
> 同时，这看上去没减少已存问题上的代码， 事实上还增添了些人为的问题。 我们需要将每个怪物有独立的类作为前提条件。 这绝对不是当今大多数游戏引擎运作的方法。
>
> 我们中大部分痛苦地学到，这样庞杂的类层次管理起来很痛苦， 那就是我们为什么用组件模式和类型对象为不同的实体建模，这样无需一一建构自己的类。

**生产函数的写法**

> 这种写法实际上和上面的差不多

:::tabs

@tab spawnGhost

```ts
function spawnGhost() {
  return new Ghost();
}
```

@tab Spawner

```ts
class Spawner {
  constructor(private func:Function){}
  Monster spawnMonster(){
    return func();
  }
}
```

@tab 构建生产者

```ts
Spawner ghostSpawner = new Spawner(spawnGhost);
```

:::

**原型语言范式**

- “面向对象编程”和“类”不是同义词
- 面向对象的特性是它将状态和行为紧紧地绑在一起。
- 但基于类的语言实际将状态和行为割裂开来。

**基于类的面向对象**

基于类的面向对象实际上是把实例对象的状态和方法分来存储的

![](images/prototype-class.png)

**Self语言**

> 从定义上来说，这是一种比基于类的语言更加面向对象的语言。

Self语言将一个对象的状态和方法绑定在了一起

![](images/prototype-object.png)

Self中通过委托来实现继承，一个对象获取一个属性或方法，先在对象内部找，找不到就去父级找，直到没有父对象为止。

![](images/prototype-delegate.png)

**Self语言的优点**

- 创建新的实例的方式是使用克隆。
- 每个对象都自动支持原型设计模式。
- 无需自己实现clone()；就实现了原型模式，原型被内建在系统中。

**在Self语言中创建对象**

> 在Self语言中，就好像每个对象都自动支持原型设计模式。 任何对象都能被克隆。为了获得一堆相似的对象，你：
>
> - 将对象塑造成你想要的状态。你可以直接克隆系统内建的基本Object，然后向其中添加字段和方法。
> - 克隆它来产出……额……随你想要多少就克隆多少个对象。

```ts
// 根据上述论述，我猜写法大概是这样的。
function creatMyObj() {
  let obj = {};
  obj.xxx = 123;
  obj.say = function () {
    console.log("say....");
  };
  return obj;
}
let obj1 = creatMyObj();
let obj2 = obj1.clone();
let obj3 = obj1.clone();
let obj4 = obj1.clone();
```

**JavaScript**

> Brendan Eich，JavaScript的缔造者， 从Self语言中直接汲取灵感，很多JavaScript的语义都是基于原型的。

- js是有原型的函数，但是没有clone()方法
- 每个对象都有属性的集合,这些属性可以是字段也可以是方法
- 但实践中，JavaScript更像是基于类的而不是基于原型的语言。
- 因为它除去了基于原型语言的核心操作“克隆”。

在JavaScript中定义类和创建对象的经典方法：

```ts
// 构造器函数
function Weapon(range, damage) {
  this.range = range;
  this.damage = damage;
}
// 在其原型对象上定义方法
Weapon.prototype.attack = function (target) {
  if (distanceTo(target) > this.range) {
    console.log("Out of range!");
  } else {
    target.health -= this.damage;
  }
};
let sword = new Weapon(10, 16);
```

![images/prototype-weapon.png](images/prototype-weapon.png)

**new 操作所作的事**

```ts
// new 操作所作的事
function myNew(constructor, ...args) {
  // 创建一个空对象
  let obj = {};
  // 链接原型链
  obj.__proto__ = constructor.prototype;
  // 绑定this
  let result = constructor.apply(obj, args);
  return result;
}
```

**为数据模型构建原型**

- 早期的游戏在程序中生成几乎所有东西
- 今日的游戏中代码只是驱动游戏的“引擎”，游戏是完全由数据定义的。
- 游戏数据达到一定规模时，可以使用原型和委托来重用数据。
  - 可以使用JSON定义数据模型
  - 可以为对象添加"prototype"字段，记录委托对象的名字。 如果在此对象内没找到一个字段，那就去委托对象中查找。

```json
{
  "name": "goblin grunt",
  "minHealth": 20,
  "maxHealth": 30,
  "resists": ["cold", "poison"],
  "weaknesses": ["fire", "light"]
}
{
  "name": "goblin wizard",
  "prototype": "goblin grunt", // 原型
  "spells": ["fire ball", "lightning bolt"]
}
{
  "name": "goblin archer",
  "prototype": "goblin grunt", // 原型
  "attacks": ["short bow"]
}
```

### 单例模式

> 这一章作者主要介绍了为什么要避免使用单例模式。

**缺点**

- 单例模式实际上是全局变量，
  - 全局变量使得理解代码更加困难
  - 促进了耦合的发生，比如要完成需求：“岩石撞击地面时播放声音”，新入行的游戏开发者可能会直接在物理引擎中引入Audio单例播放声音，这使得两个不相关的部分耦合了。
  - 单例全局变量在多线程的环境下可能导致死锁的发生。
- 惰性加载的单例剥夺了你对游戏性能的控制权：如果初始化一个音频需要几百毫秒，那么这在游戏中造成的延迟会降低玩家的游戏体验。

**有时候你可能不需要名为管理类的各种单例**

> 管理器类有时是有用的，但通常它们只是反映出作者对OOP的不熟悉。

:::tabs

@tab 常见的管理类写法

```cpp
class Bullet
{
  public:
    int getX() const { return x_; }
    int getY() const { return y_; }

    void setX(int x) { x_ = x; }
    void setY(int y) { y_ = y; }

  private:
    int x_, y_;
};

class BulletManager
{
  public:
    Bullet* create(int x, int y)
    {
      Bullet* bullet = new Bullet();
      bullet->setX(x);
      bullet->setY(y);

      return bullet;
    }

    bool isOnScreen(Bullet& bullet)
    {
      return bullet.getX() >= 0 &&
             bullet.getX() < SCREEN_WIDTH &&
             bullet.getY() >= 0 &&
             bullet.getY() < SCREEN_HEIGHT;
    }

    void move(Bullet& bullet)
    {
      bullet.setX(bullet.getX() + 5);
    }
};
```

@tab 管理类完全可以被优化掉

```cpp
class Bullet
{
  public:
    Bullet(int x, int y) : x_(x), y_(y) {}

    bool isOnScreen()
    {
      return x_ >= 0 && x_ < SCREEN_WIDTH &&
             y_ >= 0 && y_ < SCREEN_HEIGHT;
    }

    void move() { x_ += 5; }

  private:
    int x_, y_;
};
```

:::

**将类限制为单一的实例**

- 上面讨论了单例模式的特性全局访问的缺点。
- 下面这种方式通过保证类只被初始化一次来创建单例避免了全局访问，甚至可以是私有的。
- 缺点是只在运行时检测

```ts
class FileSystem {
  static bool instantiated_ = false;
  constructor(){
    if(instantiated_) throw new Error("该类只能被初始化一次")
    instantiated_ = true;
  }
  destory(){
    instantiated_ = false;
  }
};
```

**单例模式其他替代选项**

> 便利的访问是使用单例的一个主要原因。但便利的代价是，在不想要的地方也能轻易使用。

1. **作为参数传进来**，大概意思就是 `something.update(game,player,ctx);`
2. **把单例放在基类中**

   - 这可以保证其是单例
   - 还可以实现所有派生类都可以方便的访问到
   - 还可以保证类之外无法访问

   ```ts
    class GameObject {
      private static Log log_;
      protected Log getLog() { return log_; }
    }
    class Enemy extends GameObject {
      void doSomething() {
        getLog().write("I can log!");
      }
    };
   ```

3. **直接从全局获取**

   - 完全移除所有全局变量并不显示
   - 游戏中总有一些东西是全局可见的。
   - 可以让现有的全局对象捎带需要的东西，来减少全局变量类的数目。

   ```ts
   class Game {
    static Game instance_;
    Log         *log_;
    FileSystem  *fileSystem_;
    AudioPlayer *audioPlayer_;
    // game是全局可见的单例
    static Game& instance() { return instance_; }
    // log是非全局可见的单例
    Log&         getLog()         { return *log_; }
    FileSystem&  getFileSystem()  { return *fileSystem_; }
    AudioPlayer& getAudioPlayer() { return *audioPlayer_; }
   };
   ```

   ```ts
   // 只有Game是全局可见的。 函数可以通过它访问其他系统。
   Game::instance().getAudioPlayer().play(VERY_LOUD_BANG);
   ```

4. **从服务定位器中获得。**
   - 另一种选项是定义一个类，存在的唯一目标就是为对象提供全局访问。 这种常见的模式被称为服务定位器模式

### 状态模式

#### 为什么要用状态模式？

> 先看一段冗长的代码
>
> - 这种代码比较难维护，需要判断各种特殊情况.
> - 添加新功能非常困难，修改代码需要理清所有分支的关系来防止bug发生。

```ts
class Heroine{
   void handleInput(Input input){
    // 按下B
     if (input == PRESS_B){
      // 不处于跳跃和卧倒状态（特殊情况判断）
       if (!isJumping_ && !isDucking_){
          isJumping_ = true;// 标记为跳跃状态
         setGraphics(IMAGE_JUMP);
         jump();
       }
     }
    //  按下卧倒键
     else if (input == PRESS_DOWN){
      // 判断保证不处于跳跃状态（特殊情况判断）
       if (!isJumping_){
         isDucking_ = true;// 标记为卧倒状态
         setGraphics(IMAGE_DUCK);
         duck();
       } else {
        // 如果处于跳跃状态则切换到下落状态
         isJumping_ = false;
         setGraphics(IMAGE_DIVE);
         falling();
       }
     }
    //  如果松开卧倒键
     else if (input == RELEASE_DOWN){
      // 则从卧倒切换到站立状态（特殊情况判断）
       if (isDucking_){
        // 站立……
        setGraphics(IMAGE_STAND);
        stand();
       }
     }
   }
}
```

#### 有限状态机FSMs

如何画流程图

给英雄每件能做的事情都画了一个盒子：站立，跳跃，俯卧，跳斩。 当角色在能响应按键的状态时，你从那个盒子画出一个箭头，标记上按键，然后连接到她变到的状态。

![](images/state-flowchart.png)

**状态机的要点**

- 定义状态机所有可能状态。
- 状态机同时只能在一个状态。
- 状态机将处理输入。
- 根据不同的输入和当前的状态，状态将发生转移。

**枚举和分支**

上面一个案例的错误之处在于把if和各种标识符混在一起了，实际上,结合枚举状态和Switch分支就能改成状态模式,

这是实现状态机最简单的方法:

**简易状态模式**

```ts
enum State {
  STATE_STANDING,
  STATE_JUMPING,
  STATE_DUCKING,
  STATE_DIVING
};

class Heroine{

  // 当前状态
  state_ = State.STATE_STANDING;

  void handleInput(Input input){
    switch (state_) {
      // 当前处于站立状态
      case STATE_STANDING:
        // 处理输入
        if (input == PRESS_B) {
          // 切换状态
          state_ = STATE_JUMPING;
          // 进入状态
          yVelocity_ = JUMP_VELOCITY;
          setGraphics(IMAGE_JUMP);
        }
        // 处理输入
        else if (input == PRESS_DOWN) {
          // 切换状态
          state_ = STATE_DUCKING;
          // 进入状态
          setGraphics(IMAGE_DUCK);
        }
        break;

      case STATE_JUMPING:
        if (input == PRESS_DOWN) {
          state_ = STATE_DIVING;
          setGraphics(IMAGE_DIVE);
        }
        break;

      case STATE_DUCKING:
        if (input == RELEASE_DOWN) {
          state_ = STATE_STANDING;
          setGraphics(IMAGE_STAND);
        }
        break;
      }
   }
}
```

**上述写法的不完美之处**

> 考虑一个新的需求，玩家可以在俯卧时充能。

**这需要：**

1. 添加一个字段记录充能的时长
2. 在进入俯卧状态时将字段清空
3. 在俯卧状态时将字段自增
4. 在充能完毕后释放技能

总之，为了增加这个充能攻击的新特性，需要修改添加一个字段，需要修改两个状态的相关代码。

```ts
class Heroine{

  // 当前状态
  state_ = State.STATE_STANDING;
  // 1.添加一个字段记录充能的时长
  chargeTime = 0;

  void handleInput(Input input){
    switch (state_) {
      // 处于站立状态
      case STATE_STANDING:
        if (input == PRESS_DOWN) {
          // 切换到俯卧状态
          state_ = STATE_DUCKING;
          // 进入俯卧状态
          setGraphics(IMAGE_DUCK);
          // 2. 在进入俯卧状态时将字段清空
          chargeTime = 0;
        }
        break;
      // 处于俯卧状态
      case STATE_DUCKING:
        // 3. 在俯卧状态时将字段自增
        chargeTime++;
        if (chargeTime_ > MAX_CHARGE) {
          // 4. 在充能完毕后释放技能
          superBomb();
        }
        if (input == RELEASE_DOWN) {
          state_ = STATE_STANDING;
          setGraphics(IMAGE_STAND);
        }
        break;
      }
   }
}
```

**面向对象的状态设计模式**

:::tabs

@tab 定义状态接口

```ts
interface PlayerState {
  void handleInput(Player player, Input input);
  void update(Player player);
};
```

@tab 为每个状态编写类

```ts
class DuckingState extends PlayerState{
  // 将chargeTime放到了DuckingState类中
  chargeTime = 0;
  void handleInput(Player player, Input input) {
  }
  void update(Player player) {
    chargeTime_++;
    if (chargeTime_ > MAX_CHARGE) {
      player.superBomb();
    }
  }
}
```

@tab 状态委托

```ts
// 由于只有一个玩家，所以可以写成玩家的全局静态，
// 如果有多个玩家，且状态中保存着玩家独有的状态信息，则应当写成玩家类的实例属性,
// 否则两个玩家会共享同一个状态信息
enum PlayerState{
  STATE_STANDING = new standingState(),
  STATE_JUMPING = new jumping_state(),
  STATE_DUCKING = new ducking_state(),
  STATE_DIVING = new diving_state()
}
class Player{
  PlayerState state_ = PlayerState.STATE_STANDING;

  void handleInput(Input input) {
    // 状态委托：把输入交个状态处理
    state_.handleInput(this, input);
  }

  void update() {
    // 状态委托：把更新交个状态来处理
    state_.update(this);
  }
}
```

@tab 切换状态

> 如果状态是静态的，可以直接由状态自己切换

```ts
class DuckingState extends PlayerState{
  // 将chargeTime放到了DuckingState类中
  chargeTime = 0;
  void handleInput(Player player, Input input) {
    if (input == PRESS_B) {
      // 切换贴图
      player.setGraphics(IMAGE_STAND);
      // 直接切换状态
     player.state_ = PlayerState.STATE_JUMPING;
   }
  }
  void update(Player player) {
  }
}
```

> 如果状态是实例对象的，则需要由Player删除状态，因为状态不能删除自己

```ts
class DuckingState extends PlayerState{
  // 将chargeTime放到了DuckingState类中
  chargeTime = 0;
  PlayerState handleInput(Player player, Input input) {
    if (input == PRESS_B) {
      // 切换贴图
      player.setGraphics(IMAGE_STAND);
      // 返回要切换到的状态
      return new standingState();
   }
   return null;
  }
  void update(Player player) {
  }
}
class Player{
  PlayerState state_ = PlayerState.STATE_STANDING;

  void handleInput(Input input) {
    // 状态委托：把输入交个状态处理
    let newState = state_.handleInput(this, input);
    if(newState!=null) {
      delete state_; // 删除之前的状态
      state_ = newState; // 切换到新的状态
    }
  }

  void update() {
  }
}
```

@tab 进入和离开状态

状态模式的目标是将状态的行为和数据封装到单一类中。

现在，当玩家改变状态时，其实也改变他的贴图。但贴图的切换是由前一个状态来完成的，这可以认为是进入该状态所需要完成的一些初始化工作，应当由状态本身来完成，否则如果有多个状态可以切换到同一个状态，那么进入这个状态就所要完成的初始化操作就将散落在别处。

**原先的写法**

```ts
class DuckingState extends PlayerState{
  void handleInput(Player player, Input input) {
    if (input == PRESS_B) {
      // 切换贴图
      player.setGraphics(IMAGE_STAND);
      // 返回要切换到的状态
      return new standingState();
   }
   return null;
  }
  void update(Player player) {
  }
}
```

**改进**

```ts
class StandingState extends PLayerState
{
  // 初始化由状态类来完成
  void enter(Player player) {
    player.setGraphics(IMAGE_STAND);
  }
  void leave(){

  }
};

class Player{
  PlayerState state_ = PlayerState.STATE_STANDING;
  void handleInput(Input input) {
    let newState = state_.handleInput(this, input);
    if(newState!=null) {
      state_.leave(this);// 离开状态 (也许有用吧)
      delete state_;
      state_ = newState;
      state_.enter(this); // 进入状态
    }
  }

  void update() {
  }
}
```

:::

#### 并发状态机

> 没有什么是一个状态机解决不了的问题，如果有，那就用两个。

对于每个现有状态，我们需要另一个她持枪状态：站立，持枪站立，跳跃，持枪跳跃，多加几种武器，状态就会指数爆炸。不但增加了大量的状态，也增加了大量的冗余： 持枪和不持枪的状态是完全一样的，只是多了一点负责射击的代码。解决的办法非常简单，再加一个状态。

```ts
class Player {
  state_: PlayerState;
  equipment_: PlayerState;
  handleInput(input: Input) {
    state_.handleInput(this, input);
    equipment_.handleInput(this, input);
  }
}
```

:::tip 多个状态机之间的交互

状态有时需要交互。 举个例子，也许她在跳跃时不能开火，或者她在持枪时不能跳斩攻击。 为了完成这个，你可以在状态的代码中做一些粗糙的if测试其他状态来协同，虽然不够优雅，但一定有效。

:::

#### 分层状态机

分层状态机简单来说就是有父类的状态机，比如说，在地上跑，在地上跳，他们都有一个共同的状态就是在地上，而在地上需要做的更新操作可能包括:玩家受到重力的影响，受到摩擦力的影响而减速。另外可能在地上可以根据输入转换到跳起的状态。这里提到的更新操作和对输入的响应相关的代码应该只有一份而不是多份。而通过继承就可以实现这种代码的复用。

```ts {22,27}
class OnGroundState {
  handleInput(input) {
    if (input == PRESS_A) {
      return new JumpState();
    } else if (input == PRESS_B) {
      return new SpeedUpState();
    } else {
      return null;
    }
  }
  update() {
    gravity(); // 重力影响
  }
}

class RunningOnGround extends OnGroundState {
  handleInput() {
    if (input == XXX) {
      return new SomeState();
    } else {
      // 子类无法响应的输入事件派发给父类完成
      return super.handleInput(input);
    }
  }
  update() {
    doSomething();
    super.update(); // 交给父类做其所需的更新
  }
}
```

:::tip

不一定要使用继承，使用栈也可以实现这种效果，大概来说就是，栈顶元素是当前状态，栈的下层元素就是其直接父类，子类无法处理的输入事件需要派发给父类处理，可能和上面一样，父类也需要做状态更新。

根据我的理解，暂时可以想到这几种情况状态切换的情况：

- 下一个状态和当前状态没有血缘关系，则弹出栈顶元素，将新状态入栈；
- 下一个状态是当前状态子状态，则当前状态保持不变，新状态入栈；
- 下一个状态是当前状态兄弟状态，则弹出当前元素，将兄弟状态入栈；
- 接收到了一个输入，该输入子类不能处理，派发给父级处理，父级状态根据该输入将转换到另一个状态，则将该栈中当前状态和其上所有状态全部弹出，压入新状态。

:::

**下推自动机**

> 这是另一种使用的栈的状态机，这和上面要解决的问题完全不同。下推自动机是为了记住之前的状态，比如玩家原本的状态是站立、奔跑、跳跃、跳斩，然后切换切换到开火状态，然后松开按键，然后玩家应当回到最初的状态。

**解决办法**

- 笨的办法就是创建大量在状态：站立开火，奔跑开火，跳跃开火，松开按键后回到原先状态
- 更高效的办法是，将新状态压入栈，栈顶为当前状态，弹出栈顶为销毁状态，然后就回到了原先的状态。

![images/state-pushdown.png](images/state-pushdown.png)

:::tip 状态机的局限性和使用场景

状态机的作用仍然是有限的，今日游戏AI可能会使用行为树和规划系统等更加高级的技术。

有限状态机在以下情况有用：

- 你有个实体，它的行为基于一些内在状态。
- 状态可以被严格地分割为相对较少的不相干项目。
- 实体响应一系列输入或事件。

:::

:::tip 状态机其他用处

在游戏中，状态机因在AI中使用而闻名。

但状态机也常用于其他领域， 比如**处理玩家输入**，**导航菜单界面**，**分析文字**，网络协议以及其他异步行为。

:::

## 序列模式

### 双缓冲模式

这一部分作者用了两个例子来说明双缓冲的作用，其中一个例子是关于计算机渲染和显示图像的，另一个例子是说在一个游戏一帧的更新之内，对象的更新可能会导致相互影响。

**计算机渲染和显示图像**

计算机显示图像的过程实际上是往显存中按字节填入RGB数据，但是显卡不会等你填完数据才把数据显示出来，显卡会按自己的节奏周期性的将显存中的数据显示到显示器上。这就导致可能你才往显存中写了一半的数据，显卡就已经把图像显示出来了。解决的办法就是使用两片显存区域。就像舞台一样，一块是前台，一块是后台。场景在后台被布置，布置好了之后把幕布拉开就成了前台，然后工作人员继续在后台工作，场景布置完毕，再次拉开幕布。这样观众就永远不会看到后台的布置过程。

**游戏中的角色在一帧之内相互影响**

其实关于这一点，在之前写的《元胞自动机----生命游戏》中遇到过同样的问题。游戏场景是在一个二维数组中，数组中的一个位置代表一个细胞，他有两个状态，生或死，此外它还有一些更新策略，如果一个细胞周围的细胞过多，那么该细胞为因资源枯竭而死，如果过少，会因无法繁殖而死，如果一个空位周围恰好有指定数量的活细胞，则该空位会诞生一个活细胞。这些规则中所描述的状态的变化其实实际上都是基于上一帧的状态而发生的。如果采用原地更新策略更新了一个细胞的状态，那么去更新下一个细胞的状态时，就会受到上一层更新所造成的影响。举例来说，第二个细胞周围细胞很多，它在下一帧中应当因资源枯竭而死去，但是在更新第一个细胞时发现，第一个细胞周围的活细胞太少了，第一个细胞因孤单而死去，更新完第一个，接着更新第二个时，发现由于因第一个细胞的死去，第二个细胞周围的活细胞个数恰到好处，第二个细胞活下来了。

## 行为模式

### 类型对象（Type Object）

**存粹通过继承来实现游戏中物种多样性存在的问题**

- 每定义一个新物种就要编写一个新类，如果需要成百上千个物种就要编写成百上千个类。
- 即使你可以通过继承一个功能完备的基类来省去大量代码的编写，你仍然要编写这个类。
- 修改成本很高，某物种的某属性值需要改变，你不得不重新编译整个游戏。

**通过继承来实现物种多样性的具体案例：**

:::::: tabs

@tab 继承关系图

::: warning

- 当你需要的物种越多，需要定义的类就越多。
- 当你需要修改某参数，须重新编译整个游戏。

:::

::: tip 虽然不完美，但足够简单

其实我感觉，如果你的游戏足够简单，完全不用担心这些，这种写法足够了。

:::

![](images/type-object-subclasses.png)

@tab Monster.cpp

```cpp
class Monster
{
public:
  virtual ~Monster() {}
  virtual const char* getAttack() = 0;

protected:
  Monster(int startingHealth)
  : health_(startingHealth)
  {}

private:
  int health_; // 当前血值
};
```

@tab 物种s.cpp

```cpp
class Dragon : public Monster
{
public:
  Dragon() : Monster(230) {}

  virtual const char* getAttack()
  {
    return "The dragon breathes fire!";
  }
};

class Troll : public Monster
{
public:
  Troll() : Monster(48) {}

  virtual const char* getAttack()
  {
    return "The troll clubs you!";
  }
};
```

::::::

**为类型建类（A class for a class）**

> 为了解决上述提到的问题，这里作者给了一种方案，我简单总结为：
>
> - 创建一个怪物类，让其拥有大量属性和方法；
> - 创建一个物种类，用于加载配置文件；配置的参数不同，代表的物种就不同。
> - 怪物类需要通过物种类来初始化其参数，使用不同的物种类，就能得到不同物种的怪物。
> - 这样就仅通过两个类实现了不同物种的怪物。

:::tabs

@tab 类图

![images/type-object-breed.png](images/type-object-breed.png)

@tab 简易实现

```ts
// 物种（类型对象）
class Species {
  constructor(health: number, attack: AttackType) {
    this.health = health;
    this.attack = attack;
  }
  getHealth() {
    return this.health;
  }
  getAttack() {
    return this.attack;
  }
}
// 怪物
class Monster {
  species: Species;
  constructor(species: Species) {
    this.health = species.getHealth();
    this.species = species;
  }
  getAttack() {
    return this.species.getAttack();
  }
}
```

@tab 使用

```ts
// 现在这样使用
Monster monster = new Monster(someBreed);
```

@tab 私有构造器

```ts
class Breed {
  // 作者称：`That’s our “constructor” factory method.`
  newMonster() {
    return new Monster(this);
  }

  // 其实我感觉物种类不需要实例对象，他应该只负责加载物种配置文件，
  // 把参数存到静态变量上，所以方法也应该写成静态的：
  static newMonster() {
    return new Monster(Breed);
  }
  // 不对，这样加载第二个配置文件不就把第一个给覆盖了吗？
}
```

```cpp
// 这里其实是用了c++的概念，难以翻译成ts,作者其实就是想让Monster只能被Breed类实例化。
class Monster {
  // 表示Breed是Monster的友元。
  friend: class Breed;
  // 私有化构造器，使得只有友元能调用构造器。
  private: Monster(Breed breed){}
  private: Breed breed;
}
```

其实没太理解这部分，似乎Monster可以直接舍弃掉？直接由Breed加载配置，然后实例化？

不对，这样每实例化一个Breed就都要加载一次配置文件啊！

@tab 使用

```ts
// 现在只有某个物种的实例对象能创建Monster
Monster monster = someBreed.newMonster();
```

:::

:::tip 优点

如果你的游戏需要支持资料包，而资料包有新的怪物品种，这种模式可以很好的支持

- 可能有未知的类型将在后续添加
- 不必改变代码并重新编译

:::

:::tip 缺点

- 现在游戏中只有Monster的实例对象，在开发中若想则必须手动追踪一个物种。
- 更难为每个物种定义行为，
  - 因为你写到配置文件中的只能字符串，只能预定义一些行为，然后填写行为的id。
  - 如果需要让不同的物种行为是不同的AI,也只能预定义一些AI,然后填写其编号。
  - 否则考虑行为模式中的解释器和字节码模式。

:::

**两种实现继承的方法**

:::tabs

@tab 方法一：动态地从父类上获取

> 这种方式使得运行过程中，父类物种发生了改变，子类中也会同步的改变。缺点显然就是效率会低一些。

```ts
class Species {
  constructor(parent: Species, health: number, attack: AttackType) {
    this.parent = parent;
    this.health = health;
    this.attack = attack;
  }
  // 下面的两种写法其实是一个意思。
  getHealth() {
    // 自己没有该属性，但有父类，就问父类要
    if (this.health == undefined && this.parent) return this.parent.getHealth();
    else return this.health;
  }
  getAttack() {
    // 没有父类，或者拥有该属性，就用自己的
    if (!this.parent || this.attack) return this.attack;
    else return this.parent.getAttack();
  }
}
```

@tab 方法二：在初始化时从父类获取

> 这种方式使得配置文件中没有为子类定义的属性，子类会在初始化时就自动的去从父类中寻找值来初始化，且只会寻找一次。

```ts
class Species {
  constructor(parent: Species, health: number, attack: AttackType) {
    // 优先用传给自己的值，否则到父级上去获取。
    this.health = health || parent?.getHealth();
    this.attack = attack || parent?.getAttack();
    // 现在不再需要给父品种字段了,因为已经拷贝了它的所有属性。
    // this.parent = parent;
  }
  getHealth() {
    return this.health;
  }
  getAttack() {
    return this.attack;
  }
}
```

:::

#### 从JSON配置中加载并构建物种

假设游戏引擎从品种的JSON文件加载设置然后创建类型。它看上去是这样的：

这描述三个物种之间的继承关系，由于派生类的血量为0，所以其血量会从父类继承，这也意味这改变父类的血量将影响到所有子类的血量，这就非常完美。

```json
{
  "Troll": {
    "health": 25,
    "attack": "The troll hits you!"
  },
  "Troll Archer": {
    "parent": "Troll",
    "health": 0,
    "attack": "The troll archer fires an arrow!"
  },
  "Troll Wizard": {
    "parent": "Troll", // 这表示父类是谁
    "health": 0, // 这表示该字段的值将从父类继承
    "attack": "The troll wizard casts a spell on you!"
  }
}
```

**尝试实现**

> 以下是我尝试在ts中实现的根据JSON字符串自动构建物种实例的案例，实现了:
>
> - 通过SpeciesFactory来加载配置文件
> - 通过SpeciesFactory来构建物种
> - 构建物种时如果需要继承某个父类，则需要预先构建其父类。

:::code-tabs
@tab config.ts
@[code ts](./demos/TypeObject/src/config.ts)
@tab Species.ts
@[code ts](./demos/TypeObject/src/Species.ts)
@tab SpeciesFactory.ts
@[code ts](./demos/TypeObject/src/SpeciesFactory.ts)
@tab Monster.ts
@[code ts](./demos/TypeObject/src/Monster.ts)
@tab index.ts
@[code ts](./demos/TypeObject/src/index.ts)
@tab output.txt
@[code sh](./demos/TypeObject/output.txt)
:::
