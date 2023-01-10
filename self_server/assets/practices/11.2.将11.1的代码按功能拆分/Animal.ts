import { Animater } from "./Animater.js";

// 可移动的
interface MoveAble {
	moveSpeedX: number; // x轴移动速度 单位：像素/毫秒
	moveSpeedY: number; // x轴移动速度 单位：像素/毫秒
	move(timeInterval: number): void; // 移动
}
// 活的
interface AliveAble {
	aliveFlag: boolean;
	isAlive(): boolean; // 用于判断是否存活
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

// 抽象类 Animal 继承动画类 实现Moveable AliveAble 接口
export abstract class Animal extends Animater implements MoveAble, AliveAble, CollisionCheckAble {
	// 移动
	moveSpeedX = 0;
	moveSpeedY = 0;
	abstract move(timeInterval: number): void;
	// 存活
	aliveFlag = true;
	abstract isAlive(): boolean; // 判断是否存活
	// 可碰撞检测
	collisionCheckPosX: number;
	collisionCheckPosY: number;
	collisionCheckWidth: number;
	collisionCheckHeight: number;
	collisionCheckRadius: number;
	collisionCheckUpdate(): void {
		this.collisionCheckPosX = this.posX + this.drawWidth / 2;
		this.collisionCheckPosY = this.posY + this.drawHeight / 2;
		this.collisionCheckRadius = (Math.min(this.drawWidth, this.drawHeight) / 2) * 0.75;
	}
	isCollision(obj: CollisionCheckAble): boolean {
		this.collisionCheckUpdate();
		obj.collisionCheckUpdate();
		const dX = this.collisionCheckPosX - obj.collisionCheckPosX;
		const dY = this.collisionCheckPosY - obj.collisionCheckPosY;
		const distance = Math.sqrt(dX * dX + dY * dY);
		return distance < this.collisionCheckRadius + obj.collisionCheckRadius;
	}
	animate(timeInterval: number): void {
		// this.game.Context2D.beginPath();
		// this.game.Context2D.arc(this.collisionCheckPosX, this.collisionCheckPosY, this.collisionCheckRadius, 0, Math.PI * 2);
		// this.game.Context2D.stroke();
		// this.game.Context2D.closePath();
		super.animate(timeInterval);
	}
}
