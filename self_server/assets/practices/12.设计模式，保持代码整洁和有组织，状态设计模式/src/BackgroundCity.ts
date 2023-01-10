import { Background, Layer } from "./Background.js";
// 背景city，由1层构成
export class BackgroundCity extends Background {
	constructor(Context2D: CanvasRenderingContext2D, CANVAS_WIDTH: number, CANVAS_HEIGHT: number) {
		super();
		this.layers.push(new Layer(Context2D, CANVAS_WIDTH, CANVAS_HEIGHT, "./imgs/trees.png", 2400, 720, 1.0));
		this.backgroundMoveSpeedX = -0.5;
	}
}
