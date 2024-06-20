import { Message } from "../Input";
import { Animation } from "../object/Animation";
import { resources } from "../resources";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class GameScene implements Scene {
  testAnimation!: Animation;
  constructor() {
    this.init();
  }
  init(): void {
    console.log("游戏 初始化");

    // 测试动画
    this.testAnimation = new Animation();
    this.testAnimation.setAtlas(resources.atlas.get("peashooter_run_right")!);
    this.testAnimation.setInterval(1000 / 10);
    this.testAnimation.setLoop(true);
  }
  destory(): void {
    console.log("游戏 销毁");
  }
  onEnter(): void {
    console.log("进入游戏");
  }
  onUpdate(dt_ms: number): void {
    console.log("游戏 更新");
    // 更新动画
    this.testAnimation.onUpdate(dt_ms);
  }
  onDraw(ctx: CanvasRenderingContext2D): void {
    console.log("游戏 绘制");
    // 绘制动画
    this.testAnimation.onDraw(ctx, 100, 100);
  }
  onInput(message: Message): void {
    console.log("游戏 处理输入");
    if (message.type == "keydown") {
      // 按下任意键，进入主菜单场景
      SceneManager.instance.switchTo(SceneManager.SceneType.MenuScene);
    }
  }
  onExit(): void {
    console.log("游戏 退出");
  }
}
