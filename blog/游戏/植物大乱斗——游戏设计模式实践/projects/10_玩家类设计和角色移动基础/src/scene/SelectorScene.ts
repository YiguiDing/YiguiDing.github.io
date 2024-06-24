import { Camera } from "../Camera";
import { Message } from "../Input";
import { Render } from "../Render";
import { Animation } from "../object/Animation";
import { PeashooterPlayer } from "../player/PeashooterPlayer";
import { Player, PlayerId } from "../player/Player";
import { SunflowerPlayer as SunflowerPlayer } from "../player/SunflowerPlayer";
import { resources } from "../resources";
import { restrict } from "../utils";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export const players = new Array<Player>();

export enum PlayerType {
  Peashooter,
  Sunflower,
  Unknow,
}

export class SelectorScene implements Scene {
  // 资源
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
  img_peashooter_selector_background_left = resources.images.get("peashooter_selector_background_left")!;
  img_peashooter_selector_background_right = resources.images.get("peashooter_selector_background_right")!;
  img_sunflower_selector_background_left = resources.images.get("sunflower_selector_background_left")!;
  img_sunflower_selector_background_right = resources.images.get("sunflower_selector_background_right")!;
  img_avatar_peashooter = resources.images.get("avatar_peashooter")!;
  img_avatar_sunflower = resources.images.get("avatar_sunflower")!;
  font_IPix = resources.fonts.get("IPix")!;

  // 角色名
  actor_names = new Array<string>();
  // 角色类型
  p1_player_type = PlayerType.Peashooter;
  p2_player_type = PlayerType.Sunflower;
  // 动画
  p1_animations = new Array<Animation>();
  p2_animations = new Array<Animation>();
  // 滚动背景的偏移量
  p1_scroll_bg_offset_x = 0;
  p2_scroll_bg_offset_x = 0;
  // 滚动背景
  p1_scroll_backgrounds = new Array<HTMLImageElement>();
  p2_scroll_backgrounds = new Array<HTMLImageElement>();
  // 玩家按钮状态
  p1_press_left = false;
  p1_press_right = false;
  p2_press_left = false;
  p2_press_right = false;

  constructor(
    private sceneManager: SceneManager,
    private camera: Camera,
  ) {
    this.init();
  }
  init(): void {
    console.log("角色选择器 初始化");

    this.actor_names[PlayerType.Peashooter] = "豌豆射手";
    this.actor_names[PlayerType.Sunflower] = "向日葵";

    // this.玩家1角色动画[玩家所选角色A] = 角色A动画
    // this.玩家1角色动画[玩家所选角色B] = 角色B动画
    this.p1_animations[PlayerType.Peashooter] = new Animation()
      .setAtlas(resources.atlas.get("peashooter_idle_right")!)
      .setLoop(true)
      .setInterval(100);
    this.p1_animations[PlayerType.Sunflower] = new Animation()
      .setAtlas(resources.atlas.get("sunflower_idle_right")!)
      .setLoop(true)
      .setInterval(100);
    this.p2_animations[PlayerType.Peashooter] = new Animation()
      .setAtlas(resources.atlas.get("peashooter_idle_left")!)
      .setLoop(true)
      .setInterval(100);
    this.p2_animations[PlayerType.Sunflower] = new Animation()
      .setAtlas(resources.atlas.get("sunflower_idle_left")!)
      .setLoop(true)
      .setInterval(100);

    this.p1_scroll_backgrounds[PlayerType.Sunflower] = this.img_sunflower_selector_background_right;
    this.p1_scroll_backgrounds[PlayerType.Peashooter] = this.img_peashooter_selector_background_right;

    this.p2_scroll_backgrounds[PlayerType.Sunflower] = this.img_sunflower_selector_background_left;
    this.p2_scroll_backgrounds[PlayerType.Peashooter] = this.img_peashooter_selector_background_left;
  }
  destory(): void {
    console.log("角色选择器 销毁");
  }
  onEnter(): void {
    console.log("进入角色选择器");
  }
  onUpdate(dt_ms: number): void {
    console.log("角色选择器 更新");
    this.p1_animations[this.p1_player_type].onUpdate(dt_ms);
    this.p2_animations[this.p2_player_type].onUpdate(dt_ms);

    this.p1_scroll_bg_offset_x += 5;
    if (this.p1_scroll_bg_offset_x > this.p1_scroll_backgrounds[this.p1_player_type].width / 2) {
      this.p1_scroll_bg_offset_x = 0;
    }
    this.p2_scroll_bg_offset_x -= 5;
    if (this.p2_scroll_bg_offset_x < -this.p2_scroll_backgrounds[this.p2_player_type].width / 2) {
      this.p2_scroll_bg_offset_x = 0;
    }
  }
  onDraw(render: Render, camera: Camera): void {
    // 背景
    render.drawImageDD(
      camera,
      this.img_selector_background,
      // 平铺
      // width: 100%
      // height: 100%
      0,
      0,
      render.width,
      render.height,
    );

    // 玩家1的背景
    const p1_scroll_background = this.p1_scroll_backgrounds[this.p2_player_type];
    render.drawImageSSDD(
      camera,
      p1_scroll_background,
      -this.p1_scroll_bg_offset_x,
      0,
      p1_scroll_background.width,
      p1_scroll_background.height,
      //
      -50,
      0,
      0.5 * render.width,
      render.height,
    );
    render.drawImageSSDD(
      camera,
      p1_scroll_background,
      //
      p1_scroll_background.width - this.p1_scroll_bg_offset_x,
      0,
      p1_scroll_background.width,
      p1_scroll_background.height,
      //
      -50,
      0,
      0.5 * render.width,
      render.height,
    );

    // 玩家2的背景
    const p2_scroll_background = this.p2_scroll_backgrounds[this.p1_player_type];
    render.drawImageSSDD(
      camera,
      p2_scroll_background,
      //
      -this.p2_scroll_bg_offset_x,
      0,
      p2_scroll_background.width,
      p2_scroll_background.height,
      //
      0.5 * render.width + 50,
      0,
      0.5 * render.width,
      render.height,
    );
    render.drawImageSSDD(
      camera,
      p2_scroll_background,
      //
      -p2_scroll_background.width - this.p2_scroll_bg_offset_x,
      0,
      p2_scroll_background.width,
      p2_scroll_background.height,
      //
      0.5 * render.width + 50,
      0,
      0.5 * render.width,
      render.height,
    );

    // 左墓碑
    render.drawImageD(
      camera,
      this.img_gravestone_left,
      // left 20%
      // top 50%
      0.2 * render.width - 0.5 * this.img_gravestone_left.width,
      0.5 * render.height - 0.5 * this.img_gravestone_left.height,
    );

    // 右墓碑
    render.drawImageD(
      camera,
      this.img_gravestone_right,
      // left 80%
      // top 50%
      0.8 * render.width - 0.5 * this.img_gravestone_right.width,
      0.5 * render.height - 0.5 * this.img_gravestone_right.height,
    );

    // 玩家1[所选角色类型]的动画
    this.p1_animations[this.p1_player_type].onDraw(
      camera,
      render,
      // left 20%
      // top 50%
      0.2 * render.width - 0.5 * this.img_gravestone_left.width + 100,
      0.5 * render.height - 0.5 * this.img_gravestone_left.height + 85,
    );

    // 玩家2[所选角色类型]的动画
    this.p2_animations[this.p2_player_type].onDraw(
      camera,
      render,
      // left 80%
      // top 50%
      0.8 * render.width - 0.5 * this.img_gravestone_right.width + 100,
      0.5 * render.height - 0.5 * this.img_gravestone_right.height + 85,
    );

    // 角色1 的左按钮
    let p1_btn_left = this.p1_press_left ? this.img_1P_selector_btn_down_left : this.img_1P_selector_btn_idle_left;
    render.drawImageD(
      camera,
      p1_btn_left,
      // left 10%
      // top 50%
      0.1 * render.width - 0.5 * p1_btn_left.width,
      0.5 * render.height - 0.5 * p1_btn_left.height,
    );

    // 角色1 的右按钮
    let p1_btn_right = this.p1_press_right ? this.img_1P_selector_btn_down_right : this.img_1P_selector_btn_idle_right;
    render.drawImageD(
      camera,
      p1_btn_right,
      // left 30%
      // top 50%
      0.3 * render.width - 0.5 * p1_btn_right.width,
      0.5 * render.height - 0.5 * p1_btn_right.height,
    );

    // 角色2 的左按钮
    let p2_btn_left = this.p2_press_left ? this.img_2P_selector_btn_down_left : this.img_2P_selector_btn_idle_left;
    render.drawImageD(
      camera,
      p2_btn_left,
      // left 70%
      // top 50%
      0.7 * render.width - 0.5 * p2_btn_left.width,
      0.5 * render.height - 0.5 * p2_btn_left.height,
    );

    // 角色2 的右按钮
    let p2_btn_right = this.p2_press_right ? this.img_2P_selector_btn_down_right : this.img_2P_selector_btn_idle_right;
    render.drawImageD(
      camera,
      p2_btn_right,
      // left 90%
      // top 50%
      0.9 * render.width - 0.5 * p2_btn_right.width,
      0.5 * render.height - 0.5 * p2_btn_right.height,
    );

    render.drawImageD(
      camera,
      this.img_1P,
      // left 20%
      // top 10%
      0.2 * render.width - 0.5 * this.img_1P.width,
      0.1 * render.height - 0.5 * this.img_1P.height,
    );
    render.drawImageD(
      camera,
      this.img_2P,
      // left 80%
      // top 10%
      0.8 * render.width - 0.5 * this.img_2P.width,
      0.1 * render.height - 0.5 * this.img_2P.height,
    );
    render.drawImageD(
      camera,
      this.img_VS,
      // 居中
      // left:50%
      // top:50%
      0.5 * render.width - 0.5 * this.img_VS.width,
      0.5 * render.height - 0.5 * this.img_VS.height,
    );
    render.drawImageD(
      camera,
      this.img_1P_desc,
      // left 20%
      // top 90%
      0.2 * render.width - 0.5 * this.img_1P_desc.width,
      0.9 * render.height - 0.5 * this.img_1P_desc.height,
    );
    render.drawImageD(
      camera,
      this.img_2P_desc,
      // left 80%
      // top 80%
      0.8 * render.width - 0.5 * this.img_2P_desc.width,
      0.9 * render.height - 0.5 * this.img_2P_desc.height,
    );
    render.drawImageD(
      camera,
      this.img_selector_tip,
      // left 50%
      // top 90%
      0.5 * render.width - 0.5 * this.img_selector_tip.width,
      0.9 * render.height - 0.5 * this.img_selector_tip.height,
    );

    // 角色名称
    render.context.font = `20px ${this.font_IPix.family}`;

    const p1_actor_name = this.actor_names[this.p1_player_type];
    render.context.fillStyle = "rgb(45,45,45)";
    render.context.fillText(p1_actor_name, 0.15 * render.width + 3, 0.6 * render.height + 3);
    render.context.fillStyle = "rgb(255,255,255)";
    render.context.fillText(p1_actor_name, 0.15 * render.width, 0.6 * render.height);

    const p2_actor_name = this.actor_names[this.p2_player_type];
    render.context.fillStyle = "rgb(45,45,45)";
    render.context.fillText(p2_actor_name, 0.75 * render.width, 0.6 * render.height);
    render.context.fillStyle = "rgb(255,255,255)";
    render.context.fillText(p2_actor_name, 0.75 * render.width + 3, 0.6 * render.height + 3);
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
      switch (message.key) {
        case "A":
        case "a":
          this.p1_press_left = false;
          this.p1_player_type--;
          break;
        case "D":
        case "d":
          this.p1_press_right = false;
          this.p1_player_type++;
          break;
        case "ArrowLeft":
          this.p2_press_left = false;
          this.p2_player_type--;
          break;
        case "ArrowRight":
          this.p2_press_right = false;
          this.p2_player_type++;
          break;
        case "Enter":
          // 按下Enter键，进入游戏场景
          this.sceneManager.switchTo(SceneManager.SceneType.GameScene);
          break;
      }
      this.audio_ui_switch.currentTime = 0;
      this.audio_ui_switch.play();
      this.p1_player_type = restrict(0, this.p1_player_type, 1);
      this.p2_player_type = restrict(0, this.p2_player_type, 1);
    }
  }
  onExit(): void {
    const player = [new PeashooterPlayer(), new SunflowerPlayer()];
    console.log("角色选择器 退出");
    players[PlayerId.P1] = player[this.p1_player_type].setPlayerId(PlayerId.P1);
    players[PlayerId.P2] = player[this.p2_player_type].setPlayerId(PlayerId.P2);
  }
}
