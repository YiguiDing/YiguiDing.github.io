import { Animater } from "./Animater.js";
// 抽象类 Animal 继承动画类 实现Moveable AliveAble 接口
export class Animal extends Animater {
    constructor() {
        super(...arguments);
        // 移动
        this.moveSpeedX = 0;
        this.moveSpeedY = 0;
        // 存活
        this.aliveFlag = true;
        // 可碰撞检测
        this.collisionCheckPosX = 0;
        this.collisionCheckPosY = 0;
        this.collisionCheckWidth = 0;
        this.collisionCheckHeight = 0;
        this.collisionCheckRadius = 0;
    }
    setAliveFlag(newVal) {
        this.aliveFlag = newVal;
    }
    getAliveFlag() {
        return this.aliveFlag;
    }
    collisionCheckUpdate() {
        // 圆形碰撞检测
        this.collisionCheckPosX = this.posX + this.drawWidth / 2;
        this.collisionCheckPosY = this.posY + this.drawHeight / 2;
        this.collisionCheckRadius = (Math.min(this.drawWidth, this.drawHeight) / 2) * 0.8;
    }
    isCollision(obj) {
        this.collisionCheckUpdate();
        obj.collisionCheckUpdate();
        const dX = this.collisionCheckPosX - obj.collisionCheckPosX;
        const dY = this.collisionCheckPosY - obj.collisionCheckPosY;
        const distance = Math.sqrt(dX * dX + dY * dY);
        return distance < this.collisionCheckRadius + obj.collisionCheckRadius;
    }
    update(timeInterval) {
        this.collisionCheckUpdate();
        super.update(timeInterval);
    }
    draw(Context2D) {
        // Context2D.beginPath();
        // Context2D.arc(this.collisionCheckPosX, this.collisionCheckPosY, this.collisionCheckRadius, 0, Math.PI * 2);
        // Context2D.stroke();
        // Context2D.strokeRect(this.posX, this.posY, this.drawWidth, this.drawHeight);
        super.draw(Context2D);
    }
    // put it on ground();
    setOnGround(groundPosY) {
        this.posY = groundPosY - this.drawHeight;
        return this;
    }
    // 水平和垂直平移
    transform(stepX, stepY) {
        this.posX += stepX;
        this.posY += stepY;
    }
    getName() {
        this.Name;
        return this.Name;
    }
}
