import { Message } from "../Input";
import { Animation } from "../object/Animation";
import { resources } from "../resources";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

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

  atlas_avatar_peashooter = resources.atlas.get("peashooter")!;
  atlas_avatar_sunflower = resources.atlas.get("sunflower")!;
  animation_peashooter!: Animation;
  animation_sunflower!: Animation;
  constructor(private sceneManager: SceneManager) {
    this.init();
  }
  init(): void {
    console.log("角色选择器 初始化");
  }
  destory(): void {
    console.log("角色选择器 销毁");
  }
  onEnter(): void {
    console.log("进入角色选择器");
  }
  onUpdate(): void {
    console.log("角色选择器 更新");
  }
  onDraw(ctx: CanvasRenderingContext2D): void {
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
    ctx.drawImage(
      this.img_VS,
      // 居中
      // left:50%
      // top:50%
      0.5 * screen_width - 0.5 * this.img_VS.width,
      0.5 * screen_height - 0.5 * this.img_VS.height,
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
    // 按下Enter键，进入游戏场景
    if (message.type == "keyup" && message.key == "Enter") {
      this.sceneManager.switchTo(SceneManager.SceneType.GameScene);
    }
  }
  onExit(): void {
    console.log("角色选择器 退出");
  }
}
