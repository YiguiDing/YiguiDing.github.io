import { Camera } from "../Camera";
import { Message } from "../Input";
import { Render } from "../Render";
import { Animation } from "../object/Animation";
import { resources } from "../resources";
import { Player, PlayerDirection, PlayerState } from "./Player";

export class PeashooterPlayer extends Player {
  state: PlayerState = PlayerState.Idle;
  direction: PlayerDirection = PlayerDirection.TrunLeft;
  animationMap: Animation[][];
  constructor() {
    super();
    this.animationMap ??= [];
    this.animationMap[PlayerState.Idle] ??= [];
    this.animationMap[PlayerState.Idle][PlayerDirection.TrunLeft] = new Animation()
      .setAtlas(resources.atlas.get("peashooter_idle_left")!)
      .setInterval(70)
      .setLoop(true);
    this.animationMap[PlayerState.Idle][PlayerDirection.TrunRight] = new Animation()
      .setAtlas(resources.atlas.get("peashooter_idle_right")!)
      .setInterval(70)
      .setLoop(true);
    this.animationMap[PlayerState.Run] ??= [];
    this.animationMap[PlayerState.Run][PlayerDirection.TrunLeft] = new Animation()
      .setAtlas(resources.atlas.get("peashooter_run_left")!)
      .setInterval(70)
      .setLoop(true);
    this.animationMap[PlayerState.Run][PlayerDirection.TrunLeft] = new Animation()
      .setAtlas(resources.atlas.get("peashooter_run_right")!)
      .setInterval(70)
      .setLoop(true);
  }
  onUpdate(dt_ms: number): void {
    super.onUpdate(dt_ms);
  }
  onDraw(render: Render, camera: Camera): void {
    super.onDraw(render, camera);
  }
  onInput(message: Message): void {
    super.onInput(message);
  }
}
