import { Animatable } from "./interfaces/Animatable"
export class Unit implements Animatable {
    private width = 100;
    private heigh = 100;
    color = 'white'
    commands: any[] = [];
    constructor(private x: number, private y: number) {
        
    }
    
    executeCommands(){

    }

    animate(ctx: CanvasRenderingContext2D, dt: number): void {
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.translate(this.x, this.y);
        ctx.fillRect(-this.width / 2, -this.heigh / 2, this.width, this.heigh);
        ctx.restore();
    }
}