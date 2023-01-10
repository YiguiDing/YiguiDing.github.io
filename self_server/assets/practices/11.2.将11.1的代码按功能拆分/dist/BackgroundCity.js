import { BackgroundCycleAble } from "./BackgroundCycleAble.js";
import { BackgroundLayerCycleAble } from "./BackgroundLayerCycleAble.js";
// 背景city，由1层构成
export class BackgroundCity extends BackgroundCycleAble {
    constructor(game) {
        super();
        this.layers.push(new BackgroundLayerCycleAble(game, "./imgs/trees.png", 2400, 720, 1.0));
        this.backgroundMoveSpeedX = -0.5;
    }
}
