import { Background, Layer } from "./Background.js";
// 背景city，由1层构成
export class BackgroundCity extends Background {
	CANVAS_WIDTH: number;
	CANVAS_HEIGHT: number;
	constructor(CANVAS_WIDTH: number, CANVAS_HEIGHT: number) {
		super();
		this.layers.push(new Layer(CANVAS_WIDTH, CANVAS_HEIGHT, "./imgs/cityLayers/layer-1.png", 2400, 720, 0.0));
		this.layers.push(new Layer(CANVAS_WIDTH, CANVAS_HEIGHT, "./imgs/cityLayers/layer-2.png", 2400, 720, 0.1));
		this.layers.push(new Layer(CANVAS_WIDTH, CANVAS_HEIGHT, "./imgs/cityLayers/layer-3.png", 2400, 720, 0.3));
		this.layers.push(new Layer(CANVAS_WIDTH, CANVAS_HEIGHT, "./imgs/cityLayers/layer-4.png", 2400, 720, 0.5));
		this.layers.push(new Layer(CANVAS_WIDTH, CANVAS_HEIGHT, "./imgs/cityLayers/layer-5.png", 2400, 720, 1.0));
		this.CANVAS_WIDTH = CANVAS_WIDTH;
		this.CANVAS_HEIGHT = CANVAS_HEIGHT;
	}
	getGroundPosY(): number {
		return this.CANVAS_HEIGHT - 120;
	}
}
