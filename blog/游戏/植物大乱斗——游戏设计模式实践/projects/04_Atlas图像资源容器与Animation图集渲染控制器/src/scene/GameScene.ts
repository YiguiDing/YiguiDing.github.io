import { Message } from "../Input";
import { Animation } from "../object/Animation";
import { atlas_peashooter_run } from "../resourceLoader";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class GameScene implements Scene {
  testAnimation!: Animation;
  constructor() {
    this.init();
  }
  init(): void {
    console.log("游戏 初始化");
    this.testAnimation = new Animation();
    this.testAnimation.setAtlas(atlas_peashooter_run);
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
    this.testAnimation.onUpdate(dt_ms);
  }
  onDraw(ctx: CanvasRenderingContext2D): void {
    console.log("游戏 绘制");
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
