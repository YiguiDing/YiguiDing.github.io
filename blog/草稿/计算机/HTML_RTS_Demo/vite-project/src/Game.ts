import { Operator } from "./Operator";
import { BattleField } from "./BattleField";
import { Animatable } from "./interfaces/Animatable";

export class Game implements Animatable {
    GAME_WIDTH = 1920;
    GAME_HEIGH = 1080;
    canvas = document.createElement("canvas");
    ctx = this.canvas.getContext('2d');
    operator: Operator;
    battleField: BattleField;
    animaters: Animatable[] = [];
    constructor() {
        this.canvas.width = this.GAME_WIDTH;
        this.canvas.height = this.GAME_HEIGH;
        this.battleField = new BattleField(this);
        this.operator = new Operator(this);
        this.Animation();
    }
    registAnimater(obj: Animatable) {
        this.animaters.push(obj);
    }
    animate(ctx: CanvasRenderingContext2D, dt: number) {
        ctx.clearRect(0, 0, this.GAME_WIDTH, this.GAME_HEIGH);
        this.animaters.forEach(obj => obj.animate(ctx, dt));
    }
    Animation() {
        let previousT = 0;
        let refreshFun = (currentT: number) => {
            this.animate(this.ctx as CanvasRenderingContext2D, currentT - previousT);
            previousT = currentT;
            requestAnimationFrame(refreshFun);
        }
        requestAnimationFrame(refreshFun)
    }
    getHTMLCanvasElement() {
        return this.canvas;
    }
}