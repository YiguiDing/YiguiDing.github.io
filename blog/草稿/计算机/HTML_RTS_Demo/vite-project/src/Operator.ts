import { Game } from "./Game";
import { ScrollToBtomState, ScrollToCeilState, ScrollToLeftState, ScrollToRighState, ScrollToRsetState } from "./BattleField";
import { Animatable } from "./interfaces/Animatable";
export class Operator implements Animatable {
    cusorWidth = 15;
    cusorHeigh = 15;
    cusorX = 0;
    cusorY = 0;
    cusorR = 0;
    color = 'white'
    mouseDown = false;
    left = 0; top = 0;
    right = 0; bottom = 0;
    selected = [];
    constructor(public game: Game) {
        game.registAnimater(this);
        this.bindInputHandler(game.canvas);
    }
    bindInputHandler(canvas: HTMLCanvasElement) {
        canvas.addEventListener("mousemove", e => {
            let k1 = this.game.GAME_WIDTH / canvas.clientWidth
            let k2 = this.game.GAME_HEIGH / canvas.clientHeight
            this.cusorX = k1 * e.offsetX
            this.cusorY = k2 * e.offsetY
        })
        canvas.addEventListener("mousedown", () => {
            this.mouseDown = true;
            this.left = this.cusorX;
            this.top = this.cusorY;
            this.right = this.left;
            this.bottom = this.top;
            let update = () => {
                this.right = this.cusorX;
                this.bottom = this.cusorY;
            }
            canvas.addEventListener("mousemove", update);
            window.addEventListener("mouseup", () => {
                this.mouseDown = false;
                canvas.removeEventListener("mousemove", update);
                this.selectObjs();
            })
        })
        canvas.addEventListener("mousedown", () => {
            if (this.selected.length == 0) return;
        })
        canvas.addEventListener("mousemove", (e) => {
            if (e.offsetX < 0 + 50)
                this.game.battleField.stateManager.setState(new ScrollToLeftState())
            else if (e.offsetX > canvas.clientWidth - 50)
                this.game.battleField.stateManager.setState(new ScrollToRighState());
            else if (e.offsetY < 0 + 50)
                this.game.battleField.stateManager.setState(new ScrollToCeilState());
            else if (e.offsetY > canvas.clientHeight - 50)
                this.game.battleField.stateManager.setState(new ScrollToBtomState());
            else this.game.battleField.stateManager.setState(new ScrollToRsetState())
        })
    }
    selectObjs() {

    }
    animate(ctx: CanvasRenderingContext2D, dt: number): void {
        ctx.save();
        if (this.mouseDown) {
            ctx.strokeStyle = this.color;
            ctx.strokeRect(this.left, this.top, this.right - this.left, this.bottom - this.top)
        }
        ctx.translate(this.cusorX, this.cusorY)
        ctx.rotate(this.cusorR)
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.cusorWidth / 2, -this.cusorHeigh / 2, this.cusorWidth, this.cusorHeigh);
        ctx.rotate(this.cusorR + Math.PI / 4)
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.cusorWidth / 2, -this.cusorHeigh / 2, this.cusorWidth, this.cusorHeigh);
        ctx.rotate(this.cusorR + Math.PI / 8)
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.cusorWidth / 2, -this.cusorHeigh / 2, this.cusorWidth, this.cusorHeigh);
        this.cusorR += 0.01 * Math.PI
        ctx.restore();
    }
}