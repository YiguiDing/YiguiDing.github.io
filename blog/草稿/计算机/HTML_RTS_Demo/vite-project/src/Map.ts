import { Animatable } from "./interfaces/Animatable"
import map1 from "./maps/map1.jpg"

export class Map implements Animatable {
    color = 'white'
    sWidth = 3000
    sHeight = 2000
    dWidth = this.sWidth * 4
    dHeight = this.sHeight * 4
    image: HTMLImageElement = new Image();
    constructor() {
        this.image.src = map1
    }
    animate(ctx: CanvasRenderingContext2D, dt: number): void {
        ctx.save();
        ctx.drawImage(this.image,
            0, 0,
            this.sWidth, this.sHeight,
            0, 0,
            this.dWidth, this.dHeight
        );
        ctx.restore();
    }
}