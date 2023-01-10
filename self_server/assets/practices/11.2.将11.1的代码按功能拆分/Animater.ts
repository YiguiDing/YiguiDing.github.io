import { Game } from "./Game.js";
import { RandomRange } from "./utils.js";
// 动画对象
export class Animater {
	readonly game: Game;
	posX = 0; // 位置x
	posY = 0; // 位置y
	drawWidth: number; // 实际绘制的宽度
	drawHeight: number; // 实际绘制的高度
	img: HTMLImageElement; // 图片
	imgFrameWidth: number; // 一帧的宽度
	imgFrameHeight: number; // 一帧的高度
	animateFramesTotal: Array<number>; // [动画1的总帧数,动画2的总帧数,动画3的...]
	animateNameIndexMap: Array<string> = ["idle"]; // 数据结构：{动画名称:该动画是第几个动画}
	animateFrameIndexX = 0; // 当前绘制的是第几帧
	animateFrameIndexY = 0; // 当前绘制的是第几个动画
	animateFrameCount = 0; // 帧计数
	animateFrameStage = 3; // 刷新频率 每隔多少帧绘制下一帧
	animateFrameStageFactor = 1.0; // 刷新频率的系数
	private stopAnimateAtLastFlag = false;
	constructor(
		game: Game,
		imgSrc: string,
		imgFrameWidth: number,
		imgFrameHeight: number,
		size: number,
		animateFramesTotal: Array<number>,
		animateNameIndexMap: Array<string>
	) {
		this.game = game;
		this.img = new Image();
		this.img.src = imgSrc;
		this.animateFramesTotal = animateFramesTotal;
		this.animateNameIndexMap = animateNameIndexMap;
		this.imgFrameWidth = imgFrameWidth;
		this.imgFrameHeight = imgFrameHeight;
		this.drawWidth = this.imgFrameWidth * size;
		this.drawHeight = this.imgFrameHeight * size;
		this.animateFrameStage = Math.floor(RandomRange(3, 8));
	}
	// 更新数据
	update(timeInterval: number): void {
		return;
	}
	// 绘制动画
	animate(timeInterval: number): void {
		if (!(this.stopAnimateAtLastFlag == true && this.isLastAnimateFrame())) {
			this.animateFrameIndexX =
				Math.floor((this.animateFrameCount++ / this.animateFrameStage) * this.animateFrameStageFactor) %
				this.animateFramesTotal[this.animateFrameIndexY];
		}
		this.game.Context2D.drawImage(
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
	// 刷新
	refresh(timeInterval: number): void {
		this.update(timeInterval);
		this.animate(timeInterval);
	}
	changeAnimateByName(animateName: string) {
		// 根据名称切换动画
		if (this.animateNameIndexMap.includes(animateName)) this.animateFrameIndexY = this.animateNameIndexMap.indexOf(animateName);
		else throw new Error(`animateName:'${animateName}' is not exist.`);
	}
	// 判断是否为最后一帧
	isLastAnimateFrame() {
		return this.animateFrameIndexX == this.animateFramesTotal[this.animateFrameIndexY] - 1;
	}
	// 请求渲染第一帧
	requestAnimateFrameAtFirstFrame() {
		this.animateFrameCount = 0; // 设置从第一帧开始
	}
	// 请求在渲染到最后一帧的时候停止更新动画
	requestStopAnimateFrameAtLastFrame() {
		this.stopAnimateAtLastFlag = true;
	}
}
