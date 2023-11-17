import { Unit } from "./Unit";
import { Animatable } from "./interfaces/Animatable";

export class Player implements Animatable {
    units: Unit[] = []
    constructor() {
        let demo = new Unit(200, 200);
        this.units.push(demo);
    }
    animate(ctx: CanvasRenderingContext2D, dt: number): void {
        this.units.forEach(unit => unit.animate(ctx, dt));
    }
}