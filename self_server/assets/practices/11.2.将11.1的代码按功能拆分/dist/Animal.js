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
    }
    collisionCheckUpdate() {
        this.collisionCheckPosX = this.posX + this.drawWidth / 2;
        this.collisionCheckPosY = this.posY + this.drawHeight / 2;
        this.collisionCheckRadius = (Math.min(this.drawWidth, this.drawHeight) / 2) * 0.75;
    }
    isCollision(obj) {
        this.collisionCheckUpdate();
        obj.collisionCheckUpdate();
        const dX = this.collisionCheckPosX - obj.collisionCheckPosX;
        const dY = this.collisionCheckPosY - obj.collisionCheckPosY;
        const distance = Math.sqrt(dX * dX + dY * dY);
        return distance < this.collisionCheckRadius + obj.collisionCheckRadius;
    }
    animate(timeInterval) {
        // this.game.Context2D.beginPath();
        // this.game.Context2D.arc(this.collisionCheckPosX, this.collisionCheckPosY, this.collisionCheckRadius, 0, Math.PI * 2);
        // this.game.Context2D.stroke();
        // this.game.Context2D.closePath();
        super.animate(timeInterval);
    }
}
