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
class FireYelow extends Particle {
	radius: number;
	movespeedX: number;
	fillStyleAlpha: number;
	fillStyle: string;
	alphaStep: number;
	radiusStep: number;
	constructor(posX: number, posY: number, movespeedX: number) {
		super(RandomRange(posX - 50, posX + 50), RandomRange(posY - 50, posY + 50));
		this.movespeedX = movespeedX;

		this.radius = RandomRange(0, 125);
		this.radiusStep = RandomRange(0.01, 5);

		this.fillStyleAlpha = RandomRange(0.8, 1);
		this.alphaStep = RandomRange(0.01, 0.1);

		this.fillStyle = `rgba(255,255,0,${this.fillStyleAlpha})`;
	}
	update(timeInterval: number): void {
		if (this.fillStyleAlpha > this.alphaStep) {
			this.fillStyleAlpha -= this.alphaStep;
			this.fillStyle = `rgba(255,255,0,${this.fillStyleAlpha})`;
		}
		if (this.radius > this.radiusStep) this.radius -= this.radiusStep;

		this.posX += this.movespeedX * timeInterval;
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
		if (this.globalAlpha > this.globalAlphaStep) this.globalAlpha -= this.globalAlphaStep;
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
		if (this.globalAlpha > this.globalAlphaStep) this.globalAlpha -= this.globalAlphaStep;
		if (this.drawSize > this.drawSizeStep) {
			this.drawSize -= this.drawSizeStep;
			this.drawWidth = this.imgWidth * this.drawSize;
			this.drawHeight = this.imgHeight * this.drawSize;
		}
		if (Math.abs(this.movespeedX) > Math.abs(this.movespeedX_f)) this.movespeedX += this.movespeedX_f; // 摩擦力和移动方向相反，所以直接相加
		else this.movespeedX = 0;
		if (this.movespeedY <= this.movespeedY_weight) this.movespeedY += this.movespeedY_weight; // 重力始终向下，所以相减
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
		this.rotateAngleStep = Math.sign(RandomRange(-1, 1)) * (Math.PI / 360) * RandomRange(5, 15); // +/-(15° ~ 30°)
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
		Context2D.translate(this.posX + this.drawWidth / 2, this.posY + this.drawHeight / 2); //改变原点坐标
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
