import { Message } from "../Input";
import { Animation } from "../object/Animation";
import { resources } from "../resources";
import { restrict } from "../utils";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export enum PlayerType {
  Peashooter,
  Sunflower,
  Unknow,
}

export class SelectorScene implements Scene {
  img_VS = resources.images.get("VS")!;
  img_1P = resources.images.get("1P")!;
  img_2P = resources.images.get("2P")!;
  img_1P_desc = resources.images.get("1P_desc")!;
  img_2P_desc = resources.images.get("2P_desc")!;
  img_gravestone_left = resources.images.get("gravestone_left")!;
  img_gravestone_right = resources.images.get("gravestone_right")!;
  img_selector_tip = resources.images.get("selector_tip")!;
  img_selector_background = resources.images.get("selector_background")!;
  img_1P_selector_btn_idle_left = resources.images.get("1P_selector_btn_idle_left")!;
  img_1P_selector_btn_idle_right = resources.images.get("1P_selector_btn_idle_right")!;
  img_1P_selector_btn_down_right = resources.images.get("1P_selector_btn_down_right")!;
  img_1P_selector_btn_down_left = resources.images.get("1P_selector_btn_down_left")!;
  img_2P_selector_btn_idle_left = resources.images.get("2P_selector_btn_idle_left")!;
  img_2P_selector_btn_idle_right = resources.images.get("2P_selector_btn_idle_right")!;
  img_2P_selector_btn_down_right = resources.images.get("2P_selector_btn_down_right")!;
  img_2P_selector_btn_down_left = resources.images.get("2P_selector_btn_down_left")!;
  audio_ui_switch = resources.audios.get("ui_switch")!;
  img_peashooter_selector_background_left = resources.images.get(
    "peashooter_selector_background_left",
  )!;
  img_peashooter_selector_background_right = resources.images.get(
    "peashooter_selector_background_right",
  )!;
  img_sunflower_selector_background_left = resources.images.get(
    "sunflower_selector_background_left",
  )!;
  img_sunflower_selector_background_right = resources.images.get(
    "sunflower_selector_background_right",
  )!;
  img_avatar_peashooter = resources.images.get("avatar_peashooter")!;
  img_avatar_sunflower = resources.images.get("avatar_sunflower")!;

  left_scroll_background_offset_x = 0;
  right_scroll_background_offset_x = 0;
  animation_peashooter_right!: Animation;
  animation_sunflower_right!: Animation;
  animation_peashooter_left!: Animation;
  animation_sunflower_left!: Animation;

  p1_press_left = false;
  p1_press_right = false;

  p2_press_left = false;
  p2_press_right = false;

  player_p1_type = PlayerType.Peashooter;
  player_p2_type = PlayerType.Sunflower;

  constructor(private sceneManager: SceneManager) {
    this.init();
  }
  init(): void {
    console.log("角色选择器 初始化");
    this.animation_peashooter_right = new Animation();
    this.animation_peashooter_right.setAtlas(resources.atlas.get("peashooter_idle_right")!);
    this.animation_peashooter_right.setLoop(true);
    this.animation_peashooter_right.setInterval(100);
    this.animation_sunflower_right = new Animation();
    this.animation_sunflower_right.setAtlas(resources.atlas.get("sunflower_idle_right")!);
    this.animation_sunflower_right.setLoop(true);
    this.animation_sunflower_right.setInterval(100);
    this.animation_peashooter_left = new Animation();
    this.animation_peashooter_left.setAtlas(resources.atlas.get("peashooter_idle_left")!);
    this.animation_peashooter_left.setLoop(true);
    this.animation_peashooter_left.setInterval(100);
    this.animation_sunflower_left = new Animation();
    this.animation_sunflower_left.setAtlas(resources.atlas.get("sunflower_idle_left")!);
    this.animation_sunflower_left.setLoop(true);
    this.animation_sunflower_left.setInterval(100);
  }
  destory(): void {
    console.log("角色选择器 销毁");
  }
  onEnter(): void {
    console.log("进入角色选择器");
  }
  onUpdate(dt_ms: number): void {
    console.log("角色选择器 更新");
    this.animation_peashooter_right.onUpdate(dt_ms);
    this.animation_sunflower_right.onUpdate(dt_ms);
    this.animation_peashooter_left.onUpdate(dt_ms);
    this.animation_sunflower_left.onUpdate(dt_ms);

    this.left_scroll_background_offset_x += 5;
    if (
      this.left_scroll_background_offset_x >
      this.img_sunflower_selector_background_left.width / 2
    ) {
      this.left_scroll_background_offset_x = 0;
    }
    this.right_scroll_background_offset_x -= 5;
    if (
      this.right_scroll_background_offset_x <
      -this.img_sunflower_selector_background_right.width / 2
    ) {
      this.right_scroll_background_offset_x = 0;
    }
  }
  onDraw(ctx: CanvasRenderingContext2D): void {
    // 这部分代码简直不能看，这也叫设计模式？？？

    const screen_width = ctx.canvas.width;
    const screen_height = ctx.canvas.height;
    console.log("角色选择器 绘制");
    ctx.drawImage(
      this.img_selector_background,
      // 平铺
      // width: 100%
      // height: 100%
      0,
      0,
      screen_width,
      screen_height,
    );

    let left_scroll_background =
      this.player_p1_type == PlayerType.Peashooter
        ? this.img_sunflower_selector_background_left
        : this.img_peashooter_selector_background_left;
    ctx.drawImage(
      left_scroll_background,
      -this.left_scroll_background_offset_x,
      0,
      left_scroll_background.width,
      left_scroll_background.height,
      0,
      0,
      0.45 * screen_width,
      screen_height,
    );
    ctx.drawImage(
      left_scroll_background,
      left_scroll_background.width - this.left_scroll_background_offset_x,
      0,
      left_scroll_background.width,
      left_scroll_background.height,
      0,
      0,
      0.45 * screen_width,
      screen_height,
    );
    let right_scroll_background =
      this.player_p2_type == PlayerType.Peashooter
        ? this.img_sunflower_selector_background_right
        : this.img_peashooter_selector_background_right;
    ctx.drawImage(
      right_scroll_background,
      -this.right_scroll_background_offset_x,
      0,
      right_scroll_background.width,
      right_scroll_background.height,
      0.55 * screen_width,
      0,
      0.5 * screen_width,
      screen_height,
    );
    ctx.drawImage(
      right_scroll_background,
      -right_scroll_background.width - this.right_scroll_background_offset_x,
      0,
      right_scroll_background.width,
      right_scroll_background.height,
      0.55 * screen_width,
      0,
      0.5 * screen_width,
      screen_height,
    );
    ctx.drawImage(
      this.img_gravestone_left,
      // left 20%
      // top 50%
      0.2 * screen_width - 0.5 * this.img_gravestone_left.width,
      0.5 * screen_height - 0.5 * this.img_gravestone_left.height,
    );
    ctx.drawImage(
      this.img_gravestone_right,
      // left 80%
      // top 50%
      0.8 * screen_width - 0.5 * this.img_gravestone_right.width,
      0.5 * screen_height - 0.5 * this.img_gravestone_right.height,
    );

    (this.player_p1_type == PlayerType.Peashooter
      ? this.animation_peashooter_left
      : this.animation_sunflower_left
    ).onDraw(
      ctx,
      // left 20%
      // top 50%
      0.2 * screen_width - 0.5 * this.img_gravestone_left.width + 100,
      0.5 * screen_height - 0.5 * this.img_gravestone_left.height + 85,
    );

    (this.player_p2_type == PlayerType.Peashooter
      ? this.animation_peashooter_right
      : this.animation_sunflower_right
    ).onDraw(
      ctx,
      // left 80%
      // top 50%
      0.8 * screen_width - 0.5 * this.img_gravestone_right.width + 100,
      0.5 * screen_height - 0.5 * this.img_gravestone_right.height + 85,
    );

    let img_1P_selector_btn_left = this.p1_press_left
      ? this.img_1P_selector_btn_down_right
      : this.img_1P_selector_btn_idle_right;
    ctx.drawImage(
      img_1P_selector_btn_left,
      // left 10%
      // top 50%
      0.1 * screen_width - 0.5 * img_1P_selector_btn_left.width,
      0.5 * screen_height - 0.5 * img_1P_selector_btn_left.height,
    );

    let img_1P_selector_btn_right = this.p1_press_right
      ? this.img_1P_selector_btn_down_left
      : this.img_1P_selector_btn_idle_left;
    ctx.drawImage(
      img_1P_selector_btn_right,
      // left 30%
      // top 50%
      0.3 * screen_width - 0.5 * img_1P_selector_btn_right.width,
      0.5 * screen_height - 0.5 * img_1P_selector_btn_right.height,
    );

    let img_2P_selector_btn_left = this.p2_press_left
      ? this.img_2P_selector_btn_down_right
      : this.img_2P_selector_btn_idle_right;
    ctx.drawImage(
      img_2P_selector_btn_left,
      // left 70%
      // top 50%
      0.7 * screen_width - 0.5 * img_2P_selector_btn_left.width,
      0.5 * screen_height - 0.5 * img_2P_selector_btn_left.height,
    );

    let img_2P_selector_btn_right = this.p2_press_right
      ? this.img_2P_selector_btn_down_left
      : this.img_2P_selector_btn_idle_left;
    ctx.drawImage(
      img_2P_selector_btn_right,
      // left 90%
      // top 50%
      0.9 * screen_width - 0.5 * img_2P_selector_btn_right.width,
      0.5 * screen_height - 0.5 * img_2P_selector_btn_right.height,
    );

    ctx.drawImage(
      this.img_1P,
      // left 20%
      // top 10%
      0.2 * screen_width - 0.5 * this.img_1P.width,
      0.1 * screen_height - 0.5 * this.img_1P.height,
    );
    ctx.drawImage(
      this.img_2P,
      // left 80%
      // top 10%
      0.8 * screen_width - 0.5 * this.img_2P.width,
      0.1 * screen_height - 0.5 * this.img_2P.height,
    );
    ctx.drawImage(
      this.img_VS,
      // 居中
      // left:50%
      // top:50%
      0.5 * screen_width - 0.5 * this.img_VS.width,
      0.5 * screen_height - 0.5 * this.img_VS.height,
    );
    ctx.drawImage(
      this.img_1P_desc,
      // left 20%
      // top 90%
      0.2 * screen_width - 0.5 * this.img_1P_desc.width,
      0.9 * screen_height - 0.5 * this.img_1P_desc.height,
    );
    ctx.drawImage(
      this.img_2P_desc,
      // left 80%
      // top 80%
      0.8 * screen_width - 0.5 * this.img_2P_desc.width,
      0.9 * screen_height - 0.5 * this.img_2P_desc.height,
    );
    ctx.drawImage(
      this.img_selector_tip,
      // left 50%
      // top 90%
      0.5 * screen_width - 0.5 * this.img_selector_tip.width,
      0.9 * screen_height - 0.5 * this.img_selector_tip.height,
    );
  }
  onInput(message: Message): void {
    console.log("角色选择器 处理输入");
    if (message.type == "keydown") {
      switch (message.key) {
        case "A":
        case "a":
          this.p1_press_left = true;
          break;
        case "D":
        case "d":
          this.p1_press_right = true;
          break;
        case "ArrowLeft":
          this.p2_press_left = true;
          break;
        case "ArrowRight":
          this.p2_press_right = true;
          break;
      }
    }
    if (message.type == "keyup") {
      this.audio_ui_switch.currentTime = 0;
      this.audio_ui_switch.play();
      switch (message.key) {
        case "A":
        case "a":
          this.p1_press_left = false;
          this.player_p1_type--;
          this.player_p1_type = restrict(
            PlayerType.Peashooter,
            this.player_p1_type,
            PlayerType.Sunflower,
          );
          break;
        case "D":
        case "d":
          this.p1_press_right = false;
          this.player_p1_type++;
          this.player_p1_type = restrict(
            PlayerType.Peashooter,
            this.player_p1_type,
            PlayerType.Sunflower,
          );
          break;
        case "ArrowLeft":
          this.p2_press_left = false;
          this.player_p2_type--;
          this.player_p2_type = restrict(
            PlayerType.Peashooter,
            this.player_p2_type,
            PlayerType.Sunflower,
          );
          break;
        case "ArrowRight":
          this.p2_press_right = false;
          this.player_p2_type++;
          this.player_p2_type = restrict(
            PlayerType.Peashooter,
            this.player_p2_type,
            PlayerType.Sunflower,
          );
          break;
        case "Enter":
          // 按下Enter键，进入游戏场景
          this.sceneManager.switchTo(SceneManager.SceneType.GameScene);
          break;
      }
    }
  }
  onExit(): void {
    console.log("角色选择器 退出");
  }
}
