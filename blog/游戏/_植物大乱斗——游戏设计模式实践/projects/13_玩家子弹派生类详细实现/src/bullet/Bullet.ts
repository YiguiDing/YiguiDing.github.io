import { Camera } from "../Camera";
import { Render } from "../Render";
import { Cycle } from "../math/Cycle";
import { Point } from "../math/Point";
import { Vector2 } from "../math/Vector2";
import { Animation } from "../object/Animation";
import { Player, PlayerId } from "../player/Player";

export abstract class BulletState {
  constructor(private self: Bullet) {}
  enter() {}
  leave() {}
  onUpdate(dt_ms: number) {}
  onDraw(render: Render, camera: Camera) {}
}

export abstract class Bullet {
  position = new Vector2(0, 0);
  velocity = new Vector2(0, 0);
  targetId = PlayerId.P1;
  size = 10;
  damage = 10;
  state!: BulletState;
  animation!: Animation;
  callback: Function = () => {};
  constructor() {}
  switchTo(state: BulletState) {
    this.state.leave();
    this.setState(state);
  }
  setState(state: BulletState) {
    this.state = state;
    this.state.enter();
  }
  getShap() {
    return new Cycle(
      new Point(this.position.x + this.size / 2, this.position.y + this.size / 2), //
      this.size,
    );
  }
  // 和玩家、摄像机（屏幕视野）、的碰撞检测
  collision(target: Player | Camera) {
    const cycle_a = target.getShap();
    const cycle_b = this.getShap();
    const dx = cycle_a.center.x - cycle_b.center.x;
    const dy = cycle_a.center.y - cycle_b.center.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < cycle_a.radius + cycle_b.radius;
  }
  getDamage() {
    return this.damage;
  }
  setPosition(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
    return this;
  }
  setTarget(playerId: PlayerId) {
    this.targetId = playerId;
    return this;
  }
  getTarget() {
    return this.targetId;
  }
  getState() {
    return this.state;
  }
  setCallback(callback: Function) {
    this.callback = callback;
    return this;
  }
  onCllide() {
    this.callback && this.callback();
  }
  onUpdate(dt_ms: number) {
    // 位置 += 速度 * 时间
    this.position.add(this.velocity.copy().multiply(dt_ms));
    this.animation.onUpdate(dt_ms);
  }
  onDraw(render: Render, camera: Camera) {
    this.animation.onDraw(camera, render, this.position.x, this.position.y);
  }
}
