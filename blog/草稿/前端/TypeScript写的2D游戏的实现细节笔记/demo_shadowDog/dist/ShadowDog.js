import { Animal } from "./Animal.js";
import { State } from "./State.js";
import { InputListener } from "./InputListener.js";
import { RandomRange } from "./utils.js";
import { Game } from "./Game.js";
import { Dust, FireImg, FireImgSpak, Explosion } from "./Particle.js";
export class ShadowDog extends Animal {
    constructor(Game, CANVAS_WIDTH, CANVAS_HEIGHT) {
        super("./imgs/shadow_dog.png", 575, 523, 0.3, [7, 7, 7, 9, 11, 5, 7, 7, 12, 4], ["idle", "jump", "fall", "run", "dizzy", "sit", "roll", "bite", "ko", "gethit"]);
        this.Name = "ShadowDog";
        // 状态map
        this.StateMap = {};
        this.Game = Game;
        this.CANVAS_WIDTH = CANVAS_WIDTH;
        this.CANVAS_HEIGHT = CANVAS_HEIGHT;
        this.diveAudio = new Audio();
        this.diveAudio.src = "./sounds/dive.wav";
        this.jumpWithFireAudio = new Audio();
        this.jumpWithFireAudio.src = "./sounds/fire.wav";
        this.jumpAudio = new Audio();
        this.jumpAudio.src = "./sounds/jump.mp3";
        this.barkingAudio = new Audio();
        this.barkingAudio.src = "./sounds/dogBark.wav";
        this.dizzyAudio = new Audio();
        this.dizzyAudio.src = "./sounds/dizzy.wav";
        this.DyingAudio = new Audio();
        this.DyingAudio.src = "./sounds/dying.wav";
        this.getHitAudio = new Audio();
        this.getHitAudio.src = "./sounds/getHit.wav";
        this.posX = RandomRange(0, this.drawWidth);
        this.groundPosY = Game.Scene.background.getGroundPosY() - this.drawHeight;
        this.moveSpeedY = 0;
        this.moveSpeedX = 0;
        this.maxMoveSpeedX = 1;
        this.maxMoveSpeedY = 3;
        this.jumpWeight = 0.05;
        this.maxJumpSpeed = 1.6;
        this.setFps(30);
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
    // 移动
    move(timeInterval) {
        this.posX += this.moveSpeedX * timeInterval;
        this.posY += this.moveSpeedY * timeInterval;
    }
    // 改变状态
    setState(stateName) {
        this.currentState = this.StateMap[stateName];
        this.currentState.enter();
    }
    // 更新
    update(timeInterval) {
        this.currentState.inputsHandler(this.Game.InputListener.inputs);
        this.currentState.update(timeInterval);
        this.move(timeInterval);
        this.dragBack();
        super.update(timeInterval);
    }
    draw(Context2D) {
        super.draw(Context2D);
    }
    // 重力影响
    gravityAffect() {
        this.moveSpeedY += this.jumpWeight;
    }
    // put it on ground();
    setOnGround() {
        this.posY = this.groundPosY; // 重置水平位置
        return this;
    }
    isOnGround() {
        return this.posY >= this.groundPosY;
    }
    isfalling() {
        return this.moveSpeedY > 0;
    }
    isGetHit(enemys) {
        // return false;
        for (let index = 0; index < enemys.length; index++) {
            const enemy = enemys[index];
            if (enemy.getAliveFlag() && enemy.isCollision(this))
                return true;
        }
        return false;
    }
    getAliveFlag() {
        return this.aliveFlag;
    }
    // 拉回屏幕 防止越界
    dragBack() {
        // 水平拉回屏幕 防止越界
        if (this.posX < 0)
            this.posX = 0;
        else if (this.posX + this.drawWidth > this.CANVAS_WIDTH)
            this.posX = this.CANVAS_WIDTH - this.drawWidth;
        // 垂直拉回屏幕 防止越界
        if (this.posY < 0)
            this.posY = 0;
        else if (this.posY + this.drawHeight > this.CANVAS_HEIGHT)
            this.posY = this.CANVAS_HEIGHT - this.drawHeight;
    }
}
// 静态属性 状态枚举
ShadowDog.StateNamesEnum = {
    Running: "Running",
    Jumping: "Jumping",
    GetHit: "GetHit",
    PreDizzy: "PreDizzy",
    Dizzy: "Dizzy",
    Diving: "Falling",
    Sitting: "Sitting",
    Barkting: "Barkting",
    Dying: "Dying"
};
// 跑
class RunningState extends State {
    constructor(shadowDog) {
        super(ShadowDog.StateNamesEnum.Running);
        this.shadowDog = shadowDog;
    }
    enter() {
        this.shadowDog.moveSpeedX = 0;
        this.shadowDog.moveSpeedY = 0;
        this.shadowDog.setOnGround();
        this.shadowDog.changeAnimateByName("run");
        this.shadowDog.Game.Scene.setSceneSpeed(-this.shadowDog.maxMoveSpeedX * 0.5);
    }
    update(timeInterval) {
        this.shadowDog.Game.Scene.particles.unshift(new Dust(this.shadowDog.posX + this.shadowDog.drawWidth / 2, this.shadowDog.posY + this.shadowDog.drawHeight));
        if (this.shadowDog.isGetHit(this.shadowDog.Game.Scene.enemys)) {
            this.shadowDog.setState(ShadowDog.StateNamesEnum.GetHit);
            this.shadowDog.Game.lives--; // 生命值减一
        }
    }
    inputsHandler(inputs) {
        if (inputs.includes(InputListener.KeyMaps.PressRight)) {
            this.shadowDog.moveSpeedX = this.shadowDog.maxMoveSpeedX * 0.5;
            this.shadowDog.Game.Scene.setSceneSpeed(-this.shadowDog.maxMoveSpeedX * 1.0);
        }
        else if (inputs.includes(InputListener.KeyMaps.PressLeft)) {
            this.shadowDog.moveSpeedX = -this.shadowDog.maxMoveSpeedX * 0.5;
            this.shadowDog.Game.Scene.setSceneSpeed(this.shadowDog.maxMoveSpeedX * 0.5);
        }
        else if (inputs.includes(InputListener.KeyMaps.PressUp)) {
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Jumping);
        }
        else if (inputs.includes(InputListener.KeyMaps.PressDown))
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Sitting);
        else {
            this.shadowDog.moveSpeedX = 0;
            this.shadowDog.Game.Scene.setSceneSpeed(-this.shadowDog.maxMoveSpeedX * 0.5);
        }
    }
}
class JumpingState extends State {
    constructor(shadowDog) {
        super(ShadowDog.StateNamesEnum.Running);
        this.shadowDog = shadowDog;
    }
    enter() {
        this.shadowDog.jumpAudio.currentTime = 0;
        this.shadowDog.jumpAudio.play();
        this.shadowDog.moveSpeedY = -this.shadowDog.maxJumpSpeed * 1.0; // 高度变化
        this.shadowDog.changeAnimateByName("jump");
    }
    update() {
        this.shadowDog.gravityAffect(); // 重力影响
        if (this.shadowDog.isGetHit(this.shadowDog.Game.Scene.enemys)) {
            this.shadowDog.setState(ShadowDog.StateNamesEnum.GetHit);
            this.shadowDog.Game.lives--; // 生命值减一
        }
    }
    inputsHandler(inputs) {
        if (this.shadowDog.isOnGround())
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Running);
        else if (this.shadowDog.isfalling())
            this.shadowDog.changeAnimateByName("fall");
        else if (inputs.includes(InputListener.KeyMaps.PressSpase))
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Diving);
        else if (inputs.includes(InputListener.KeyMaps.PressRight)) {
            this.shadowDog.moveSpeedX = this.shadowDog.maxMoveSpeedX * 0.4;
            this.shadowDog.Game.Scene.setSceneSpeed(-this.shadowDog.maxMoveSpeedX * 0.8);
            this.shadowDog.changeAnimateByName("jump");
            // this.shadowDog.setState(ShadowDog.StateNamesEnum.JumpingUpToRight);
        }
        else if (inputs.includes(InputListener.KeyMaps.PressLeft)) {
            this.shadowDog.moveSpeedX = -this.shadowDog.maxMoveSpeedX * 0.3;
            this.shadowDog.Game.Scene.setSceneSpeed(this.shadowDog.maxMoveSpeedX * 0.2);
            this.shadowDog.changeAnimateByName("jump");
            // this.shadowDog.setState(ShadowDog.StateNamesEnum.JumpingUpToLeft);
        }
    }
}
class DivingState extends State {
    constructor(shadowDog) {
        super(ShadowDog.StateNamesEnum.Running);
        this.shadowDog = shadowDog;
    }
    enter() {
        this.shadowDog.changeAnimateByName("roll");
    }
    update() {
        // 音效添加
        this.shadowDog.jumpWithFireAudio.play();
        // 添加粒子特效
        this.shadowDog.Game.Scene.particles.unshift(new FireImg(this.shadowDog.posX + this.shadowDog.drawWidth / 2, this.shadowDog.posY + this.shadowDog.drawHeight / 2, -this.shadowDog.maxMoveSpeedX));
        // 消灭敌人,标记敌人为死亡：碰撞检测，特效添加,添加分数
        this.shadowDog.Game.Scene.enemys = this.shadowDog.Game.Scene.enemys.map(enemy => {
            if (enemy.isCollision(this.shadowDog)) {
                enemy.setAliveFlag(false);
                this.shadowDog.Game.Scene.explosions.push(new Explosion(enemy.posX, enemy.posY));
            }
            return enemy;
        });
        this.shadowDog.gravityAffect(); // 重力影响
    }
    inputsHandler(inputs) {
        if (this.shadowDog.isOnGround()) {
            // 落地音效
            this.shadowDog.diveAudio.currentTime = 0.6;
            this.shadowDog.diveAudio.play();
            // 添加落地特效
            for (let index = 0; index < this.shadowDog.Game.Scene.particlesMaxLength / 2; index++) {
                this.shadowDog.Game.Scene.spakParticles.unshift(new FireImgSpak(this.shadowDog.posX + this.shadowDog.drawWidth / 2, this.shadowDog.posY + this.shadowDog.drawHeight));
            }
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Running);
        }
        else if (inputs.includes(InputListener.KeyMaps.PressDown)) {
            this.shadowDog.moveSpeedX = this.shadowDog.maxMoveSpeedX * 0;
            this.shadowDog.moveSpeedY = this.shadowDog.maxMoveSpeedY * 1.0;
            this.shadowDog.Game.Scene.setSceneSpeed(-this.shadowDog.maxMoveSpeedX * 0);
        }
        else if (inputs.includes(InputListener.KeyMaps.PressRight)) {
            this.shadowDog.moveSpeedX = this.shadowDog.maxMoveSpeedX * 1.0;
            this.shadowDog.Game.Scene.setSceneSpeed(-this.shadowDog.maxMoveSpeedX * 1.0);
        }
        else if (inputs.includes(InputListener.KeyMaps.PressLeft)) {
            this.shadowDog.moveSpeedX = -this.shadowDog.maxMoveSpeedX * 1.0;
            this.shadowDog.Game.Scene.setSceneSpeed(this.shadowDog.maxMoveSpeedX * 0.5);
        }
    }
}
class SittingState extends State {
    constructor(shadowDog) {
        super(ShadowDog.StateNamesEnum.Running);
        this.shadowDog = shadowDog;
    }
    enter() {
        this.shadowDog.moveSpeedX = 0;
        this.shadowDog.moveSpeedY = 0;
        this.shadowDog.Game.Scene.setSceneSpeed(0);
        this.shadowDog.changeAnimateByName("sit");
    }
    update(timeInterval) {
        if (this.shadowDog.isGetHit(this.shadowDog.Game.Scene.enemys)) {
            this.shadowDog.setState(ShadowDog.StateNamesEnum.GetHit);
            this.shadowDog.Game.lives--; // 生命值减一
        }
    }
    inputsHandler(inputs) {
        if (inputs.length == 0)
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Running);
        if (inputs.includes(InputListener.KeyMaps.PressRight))
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Barkting);
    }
}
class BarktingState extends State {
    constructor(shadowDog) {
        super(ShadowDog.StateNamesEnum.Running);
        this.shadowDog = shadowDog;
    }
    update(timeInterval) {
        this.shadowDog.barkingAudio.play();
        if (this.shadowDog.isGetHit(this.shadowDog.Game.Scene.enemys)) {
            this.shadowDog.setState(ShadowDog.StateNamesEnum.GetHit);
            this.shadowDog.Game.lives--; // 生命值减一
        }
    }
    enter() {
        this.shadowDog.moveSpeedX = 0;
        this.shadowDog.moveSpeedY = 0;
        this.shadowDog.Game.Scene.setSceneSpeed(0);
        this.shadowDog.changeAnimateByName("bite");
    }
    inputsHandler(inputs) {
        if (inputs.length == 0)
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Running);
    }
}
// ["idle", "jump", "fall", "run", "dizzy", "sit", "roll", "bite", "ko", "gethit"]
class GetHitState extends State {
    constructor(shadowDog) {
        super(ShadowDog.StateNamesEnum.Running);
        this.shadowDog = shadowDog;
    }
    enter() {
        this.shadowDog.moveSpeedY = -0.5; // 反方向远离
        this.shadowDog.moveSpeedX = -0.5; // 反方向远离
        this.shadowDog.Game.Scene.setSceneSpeed(-this.shadowDog.moveSpeedX); // 场景跟随人物移动
        this.shadowDog.changeAnimateByName("gethit"); // 碰撞动画
        this.shadowDog.getHitAudio.play(); // 碰撞音效
    }
    update(timeInterval) {
        // 播放完毕后进入PreDizzy状态
        if (this.shadowDog.isLastAnimateFrame()) {
            this.shadowDog.setState(ShadowDog.StateNamesEnum.PreDizzy);
        }
    }
    inputsHandler(inputs) {
        return;
    }
}
class PreDizzyState extends State {
    constructor(shadowDog) {
        super(ShadowDog.StateNamesEnum.Running);
        this.shadowDog = shadowDog;
    }
    enter() {
        // 如果在地上就直接进入Dizzy状态
        if (this.shadowDog.isOnGround())
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Dizzy);
        // 否则呈现掉落动画
        this.shadowDog.changeAnimateByName("fall"); // 掉落动画
    }
    update(timeInterval) {
        this.shadowDog.gravityAffect(); // 重力
        if (this.shadowDog.isOnGround()) {
            // 如果还有生命值，就进入dizzy状态
            if (this.shadowDog.Game.lives >= 0) {
                this.shadowDog.setState(ShadowDog.StateNamesEnum.Dizzy);
                return;
            }
            // 没有生命值，进入死亡状态
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Dying);
        }
    }
    inputsHandler(inputs) {
        return;
    }
}
class DizzyState extends State {
    constructor(shadowDog) {
        super(ShadowDog.StateNamesEnum.Running);
        this.timer = 0;
        this.dizzyTimeout = 500;
        this.shadowDog = shadowDog;
    }
    enter() {
        this.timer = 0;
        this.shadowDog.setOnGround(); // 保证是在地面
        this.shadowDog.moveSpeedX = 0; // 保证不移动
        this.shadowDog.moveSpeedY = 0;
        this.shadowDog.Game.Scene.setSceneSpeed(0); // 保证场景也不移动
        this.shadowDog.changeAnimateByName("dizzy"); // 播放dizzy动画
        this.shadowDog.dizzyAudio.play();
    }
    update(timeInterval) {
        if ((this.timer += timeInterval) > 1000) {
            this.shadowDog.setState(ShadowDog.StateNamesEnum.Running);
        }
    }
    inputsHandler(inputs) {
        return;
    }
}
class DyingState extends State {
    constructor(shadowDog) {
        super(ShadowDog.StateNamesEnum.Running);
        this.shadowDog = shadowDog;
    }
    enter() {
        this.shadowDog.setOnGround(); // 保证是在地面
        this.shadowDog.moveSpeedX = 0; // 保证不移动
        this.shadowDog.moveSpeedY = 0;
        this.shadowDog.Game.Scene.setSceneSpeed(0); // 保证场景也不移动
        this.shadowDog.changeAnimateByName("ko"); // 播放dizzy动画
        this.shadowDog.DyingAudio.play();
    }
    update(timeInterval) {
        // 是最后一帧，播放完毕就结束游戏
        if (this.shadowDog.isLastAnimateFrame())
            this.shadowDog.Game.setState(Game.StateEnum.GameOver);
    }
    inputsHandler(inputs) {
        return;
    }
}
