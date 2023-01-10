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
export abstract class Animal extends Animater implements MoveAble, AliveAble, CollisionCheckAble, NameAble, transformAble {
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
		this.collisionCheckRadius = (Math.min(this.drawWidth, this.drawHeight) / 2) * 0.8;
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
