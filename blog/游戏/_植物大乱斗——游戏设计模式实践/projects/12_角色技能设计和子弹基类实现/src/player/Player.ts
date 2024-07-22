import { Camera } from "../Camera";
import { Message } from "../Input";
import { Render } from "../Render";
import { Cycle } from "../math/Cycle";
import { Point } from "../math/Point";
import { Vector2 } from "../math/Vector2";
import { Animation } from "../object/Animation";
import { Plantform } from "../object/Plantform";

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
  width = 100;
  height = 100;
  size = 40;
  jump_speed = -0.85;
  move_speed = 0.55;
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
  getShap() {
    let center = new Point(this.position.x + this.width / 2, this.position.y + this.height / 2);
    return new Cycle(center, this.size);
  }
  onGravity(gravity: number, dt_ms: number) {
    // speed += 加速度*时间
    this.velocity.y += gravity * dt_ms;
    console.log(this.velocity);
  }
  /**
   * 碰撞检测
   */
  onColision(plantforms: Array<Plantform>) {
    plantforms.forEach((plantform) => {
      // 下坠速度 > 0 且 和平台发生碰撞
      if (this.velocity.y > 0 && plantform.collision(this)) {
        this.velocity.y = 0; // 下则速度设置为0
      }
    });
  }
  onUpdate(dt_ms: number) {
    // 位置更新
    this.position.add(this.velocity.copy().multiply(dt_ms)); // 位置 += 速度 x 时间
    // 方向更新
    if (this.pressRight) {
      this.direction = PlayerDirection.TrunRight;
      this.velocity.x = this.move_speed;
    } else if (this.pressLeft) {
      this.direction = PlayerDirection.TrunLeft;
      this.velocity.x = -this.move_speed;
    } else {
      this.velocity.x = 0;
    }
    if (this.pressUp && this.velocity.y == 0 /* 下落速度为0可以认为在地面 */) {
      this.velocity.y += this.jump_speed;
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

    render.drawCycle(camera, this.getShap());
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
