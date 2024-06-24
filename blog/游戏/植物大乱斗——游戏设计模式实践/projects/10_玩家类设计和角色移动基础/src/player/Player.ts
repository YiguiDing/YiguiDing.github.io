import { Camera } from "../Camera";
import { Message } from "../Input";
import { Render } from "../Render";
import { Vector2 } from "../math/Vector2";
import { Animation } from "../object/Animation";

export enum PlayerId {
  P1,
  P2,
}

export enum PlayerDirection {
  TrunRight,
  TrunLeft,
}

export enum PlayerState {
  Idle,
  Run,
}

export class Player {
  position = new Vector2(0, 0);
  velocity = new Vector2(0, 0);
  id!: PlayerId; // 玩家id
  state!: PlayerState; // 状态：idle run ...
  direction!: PlayerDirection; // 方向：left right
  animationMap!: Array<Array<Animation>>; // [[idle_left,idle_right],[run_left,run_right]]
  // 方向键
  pressLeft = false;
  pressRight = false;
  pressUp = false;
  pressDowm = false;
  // 功能键
  pressA = false;
  pressB = false;

  setPosition(x: number, y: number) {
    this.position.x = x;
    this.position.y = y;
    return this;
  }

  setPlayerId(id: PlayerId) {
    this.id = id;
    return this;
  }

  setAnimationMap(animations: Animation[][]) {
    this.animationMap = animations;
    return this;
  }
  setDirection(dir: PlayerDirection) {
    this.direction = dir;
    return this;
  }
  onUpdate(dt_ms: number) {
    // 位置更新
    this.position.add(this.velocity.copy().multiply(dt_ms)); // 位置 += 速度 x 时间
    // 方向更新
    if (this.pressLeft) {
      this.direction = PlayerDirection.TrunLeft;
    }
    if (this.pressRight) {
      this.direction = PlayerDirection.TrunRight;
    }
    // 动画更新
    this.animationMap[this.state][this.direction].onUpdate(dt_ms);
  }
  onDraw(render: Render, camera: Camera) {
    // 绘制动画
    this.animationMap[this.state][this.direction].onDraw(
      camera,
      render, //
      this.position.x,
      this.position.y, //
    );
  }
  onInput(message: Message) {
    if (message.type == "keydown") {
      if (this.id == PlayerId.P1) {
        switch (message.key) {
          case "A":
          case "a":
            this.pressLeft = true;
            break;
          case "D":
          case "d":
            this.pressRight = true;
            break;
          case "W":
          case "w":
            this.pressUp = true;
            break;
          case "F":
          case "f":
            this.pressA = true;
            break;
          case "G":
          case "g":
            this.pressB = true;
            break;
        }
      } else if (this.id == PlayerId.P2) {
        switch (message.key) {
          case "ArrowLeft":
            this.pressLeft = true;
            break;
          case "ArrowRight":
            this.pressRight = true;
            break;
          case "ArrowUp":
            this.pressUp = true;
            break;
          case "ArrowDown":
            this.pressDowm = true;
            break;
          case ".":
            this.pressA = true;
            break;
          case "/":
            this.pressB = true;
            break;
        }
      }
    } else if (message.type == "keyup") {
      if (this.id == PlayerId.P1) {
        switch (message.key) {
          case "A":
          case "a":
            this.pressLeft = false;
            break;
          case "D":
          case "d":
            this.pressRight = false;
            break;
          case "W":
          case "w":
            this.pressUp = false;
            break;
          case "F":
          case "f":
            this.pressA = false;
            break;
          case "G":
          case "g":
            this.pressB = false;
            break;
        }
      } else if (this.id == PlayerId.P2) {
        switch (message.key) {
          case "ArrowLeft":
            this.pressLeft = false;
            break;
          case "ArrowRight":
            this.pressRight = false;
            break;
          case "ArrowUp":
            this.pressUp = false;
            break;
          case "ArrowDown":
            this.pressDowm = false;
            break;
          case ".":
            this.pressA = false;
            break;
          case "/":
            this.pressB = false;
            break;
        }
      }
    }
  }
}
