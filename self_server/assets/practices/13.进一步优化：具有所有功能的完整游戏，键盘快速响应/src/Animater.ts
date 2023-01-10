import { RandomRange } from "./utils.js";
// 动画对象
export class Animater {
	posX = 0; // 位置x
	posY = 0; // 位置y
	drawWidth: number; // 实际绘制的宽度
	drawHeight: number; // 实际绘制的高度
	img: HTMLImageElement; // 图片
	imgFrameWidth: number; // 一帧的宽度
	imgFrameHeight: number; // 一帧的高度
	animateFramesTotal: Array<number>; // [动画1的总帧数,动画2的总帧数,动画3的...]
	animateNameIndexMap: Array<string>; // 数据结构：{动画名称:该动画是第几个动画}
	animateFrameIndexX = 0; // 当前绘制的是第几帧
	animateFrameIndexY = 0; // 当前绘制的是第几个动画
	animateFrameTimer = 0;
	private _animateFrameFps = 60;
	private animateFrameChangeInterval = 1000 / 60;
	private get animateFrameFps() {
		return this._animateFrameFps;
	}
	private set animateFrameFps(fps) {
		this._animateFrameFps = fps;
		this.animateFrameChangeInterval = 1000 / fps;
	}
	public setFps(fps: number) {
		this.animateFrameFps = fps;
	}
	stopAnimateAtLastFlag = false;
	RewindAnimateFrameFlag = false;
	constructor(
		imgSrc: string,
		imgFrameWidth: number,
		imgFrameHeight: number,
		size: number,
		animateFramesTotal: Array<number>,
		animateNameIndexMap: Array<string>
	) {
		this.img = new Image();
		this.img.src = imgSrc;
		this.animateFramesTotal = animateFramesTotal;
		this.animateNameIndexMap = animateNameIndexMap;
		this.imgFrameWidth = imgFrameWidth;
		this.imgFrameHeight = imgFrameHeight;
		this.drawWidth = this.imgFrameWidth * size;
		this.drawHeight = this.imgFrameHeight * size;
		this.setFps(60);
	}
	// 更新数据
	update(timeInterval: number): void {
		// 最后一帧则停止切换帧
		if (this.stopAnimateAtLastFlag == true && this.isLastAnimateFrame()) return;
		// 计算下一帧
		if (this.animateFrameTimer >= this.animateFrameChangeInterval) {
			this.animateFrameTimer = 0;
			this.animateFrameIndexX += 1;
			this.animateFrameIndexX %= this.animateFramesTotal[this.animateFrameIndexY];
		} else this.animateFrameTimer += timeInterval;
	}
	// 绘制帧
	draw(Context2D: CanvasRenderingContext2D): void {
		Context2D.drawImage(
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
	changeAnimateByName(animateName: string) {
		// 根据名称切换动画
		if (this.animateNameIndexMap.includes(animateName)) this.animateFrameIndexY = this.animateNameIndexMap.indexOf(animateName);
		else throw new Error(`animateName:'${animateName}' is not exist.`);
		this.init();
	}
	// 判断是否为最后一帧
	isLastAnimateFrame() {
		return this.animateFrameIndexX == this.animateFramesTotal[this.animateFrameIndexY] - 1;
	}
	// 判断是否为第一帧
	isFirstAnimateFrame() {
		return this.animateFrameIndexX == 0;
	}
	// 初始化状态
	init() {
		this.animateFrameIndexX = 0; // 设置从第一帧开始
	}
	// 请求在渲染到最后一帧的时候停止更新动画
	requestStopAnimateFrameAtLastFrame() {
		this.stopAnimateAtLastFlag = true;
	}
	isOutOfLeftScreem() {
		return this.posX + this.drawWidth < 0;
	}
}
