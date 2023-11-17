import { Game } from "./Game";
import { Map } from "./Map";
import { Player } from "./Player";
import { Animatable } from "./interfaces/Animatable";

export class BattleField implements Animatable {
    x = 0;
    y = 0;
    scrollSpeed = 0.8
    map: Map;
    players: Animatable[] = [];
    stateManager = new BattleFieldStateManager(this);
    constructor(private game: Game) {
        game.registAnimater(this);
        this.map = new Map();
        this.players.push(new Player())
        this.players.push(new Player())
    }
    update(dt: number) {
        this.stateManager.update(dt);
        this.x = Math.min(Math.max(this.x, -this.map.dWidth + this.game.GAME_WIDTH), 0)
        this.y = Math.min(Math.max(this.y, -this.map.dHeight + this.game.GAME_HEIGH), 0)
    }
    animate(ctx: CanvasRenderingContext2D, dt: number): void {
        this.update(dt);
        ctx.save()
        ctx.translate(this.x, this.y);
        this.map.animate(ctx, dt);
        this.players.forEach(player => player.animate(ctx, dt));
        ctx.restore();
    }
}
interface BattleFieldState {
    update(battleField: BattleField, dt: number): void;
}
class BattleFieldStateManager {
    currentStete: BattleFieldState = new ScrollToRsetState();
    constructor(private battleField: BattleField) { }
    setState(state: BattleFieldState) {
        this.currentStete = state;
    }
    update(dt: number) {
        this.currentStete.update(this.battleField, dt);
    }
}
export class ScrollToLeftState implements BattleFieldState {
    update(battleField: BattleField, dt: number): void {
        battleField.x += battleField.scrollSpeed * dt;
    }
}
export class ScrollToRighState implements BattleFieldState {
    update(battleField: BattleField, dt: number): void {
        battleField.x -= battleField.scrollSpeed * dt;
    }
}
export class ScrollToCeilState implements BattleFieldState {
    update(battleField: BattleField, dt: number): void {
        battleField.y += battleField.scrollSpeed * dt;
    }
}
export class ScrollToBtomState implements BattleFieldState {
    update(battleField: BattleField, dt: number): void {
        battleField.y -= battleField.scrollSpeed * dt;
    }
}
export class ScrollToRsetState implements BattleFieldState {
    update(battleField: BattleField, dt: number): void {
    }
}
