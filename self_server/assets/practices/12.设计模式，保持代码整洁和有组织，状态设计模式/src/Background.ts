// 可滚动的背景层
export class Layer {
	readonly Context2D: CanvasRenderingContext2D;
	readonly CANVAS_WIDTH: number;
	readonly CANVAS_HEIGHT: number;
	img: HTMLImageElement;
	imgWidth: number;
	imgHeight: number;
	pos1_X: number;
	pox1_Y: number;
	pos2_X: number;
	pox2_Y: number;
	layerMoveSpeedX = 0; // 层的移动速度,一个背景的所有层的移动速度应当是一致的
	layerMoveSpeedFactor = 1.0; // 层的移动速度的系数，一个背景有多个层，多个层的移动速度一致，但移动速度的系数可能不一致
	constructor(
		Context2D: CanvasRenderingContext2D,
		CANVAS_WIDTH: number,
		CANVAS_HEIGHT: number,
		imgSrc: string,
		imgWidth: number,
		imgHeight: number,
		layerMoveSpeedFactor: number
	) {
		this.Context2D = Context2D;
		this.CANVAS_WIDTH = CANVAS_WIDTH;
		this.CANVAS_HEIGHT = CANVAS_HEIGHT;
		this.img = new Image();
		this.img.src = imgSrc;
		this.imgWidth = imgWidth;
		this.imgHeight = imgHeight;
		this.layerMoveSpeedFactor = layerMoveSpeedFactor;
		this.pos1_X = 0;
		this.pox1_Y = 0;
		this.pos2_X = this.imgWidth;
		this.pox2_Y = 0;
	}
	update(timeInterval: number) {
		this.pos1_X += this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
		this.pos2_X += this.layerMoveSpeedX * this.layerMoveSpeedFactor * timeInterval;
		// 图层向左移动，图层出界，向后添加新图层
		if (this.layerMoveSpeedX < 0 && this.pos1_X + this.imgWidth <= 0) this.pos1_X = this.pos2_X + this.imgWidth; // 图1出界就将其放置到图2之后
		if (this.layerMoveSpeedX < 0 && this.pos2_X + this.imgWidth <= 0) this.pos2_X = this.pos1_X + this.imgWidth; // 图2出界就将其放置到图1之后
		// 图层向右移动，图层出界，向前添加新图层
		if (this.layerMoveSpeedX > 0 && this.pos1_X >= 0) this.pos2_X = this.pos1_X - this.imgWidth; // 图1出界就将其放置到图2之后
		if (this.layerMoveSpeedX > 0 && this.pos2_X >= 0) this.pos1_X = this.pos2_X - this.imgWidth; // 图2出界就将其放置到图1之后
	}
	draw(timeInterval: number) {
		this.Context2D.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.pos1_X, this.pox1_Y, this.imgWidth, this.CANVAS_HEIGHT);
		this.Context2D.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, this.pos2_X, this.pox2_Y, this.imgWidth, this.CANVAS_HEIGHT);
	}
	refresh(timeInterval: number) {
		this.update(timeInterval);
		this.draw(timeInterval);
	}
}

// 可滚动的背景，该背景包含多个层
export abstract class Background {
	private _backgroundMoveSpeedX = 0; // 背景移动速度
	layers: Array<Layer> = []; // 背景
	refresh(timeInterval: number) {
		this.layers.forEach(layer => layer.refresh(timeInterval));
	}
	public get backgroundMoveSpeedX() {
		return this._backgroundMoveSpeedX;
	}
	public set backgroundMoveSpeedX(newValue) {
		// 修改背景的速度就是修改要所有层的移动速度，这里做等值判断是防止for循环浪费性能
		if (this._backgroundMoveSpeedX != newValue) {
			// 更新所有层的速度
			this.layers.forEach(item => (item.layerMoveSpeedX = newValue));
			// 更新背景速度
			this._backgroundMoveSpeedX = newValue;
		}
	}
}
