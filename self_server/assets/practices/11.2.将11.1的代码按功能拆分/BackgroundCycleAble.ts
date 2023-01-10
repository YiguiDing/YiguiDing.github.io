import { BackgroundLayerCycleAble } from "./BackgroundLayerCycleAble.js";
// 可滚动的多层背景
export abstract class BackgroundCycleAble {
	private _backgroundMoveSpeedX = 0; // 背景移动速度
	layers: Array<BackgroundLayerCycleAble> = []; // 背景
	update(timeInterval: number) {
		this.layers.forEach(item => item.update(timeInterval));
	}
	draw(timeInterval: number) {
		this.layers.forEach(item => item.draw(timeInterval));
	}
	refresh(timeInterval: number) {
		this.update(timeInterval);
		this.draw(timeInterval);
	}
	public get backgroundMoveSpeedX() {
		return this._backgroundMoveSpeedX;
	}
	public set backgroundMoveSpeedX(value) {
		// 修改背景的速度就是修改要所有层的移动速度，这里做等值判断是防止for循环浪费性能
		if (this._backgroundMoveSpeedX != value) {
			// 更新所有层的速度
			this.layers.forEach(item => (item.layerMoveSpeedX = value));
			// 更新背景速度
			this._backgroundMoveSpeedX = value;
		}
	}
}
