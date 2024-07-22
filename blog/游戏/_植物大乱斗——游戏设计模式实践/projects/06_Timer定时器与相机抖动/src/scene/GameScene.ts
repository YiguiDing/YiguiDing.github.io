import { Camera } from "../Camera";
import { Message } from "../Input";
import { Animation } from "../object/Animation";
import { resources } from "../resources";
import { Timer, TriggerMode } from "../timer/Timer";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class GameScene implements Scene {
  testTimer!: Timer;
  testCamera!: Camera;
  testAnimation!: Animation;
  constructor() {
    this.init();
  }
  init(): void {
    console.log("游戏 初始化");
    // 测试定时器
    this.testTimer = new Timer();
    this.testTimer.setWaitTime(1000); // 等待时间
    this.testTimer.setTriggerMode(TriggerMode.Cycle); // 触发模式
    this.testTimer.setCallback(() => console.warn("定时器触发！！！"));
    // 测试相机
    this.testCamera = new Camera();
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
    // 更新定时器
    this.testTimer.onUpdate(dt_ms);
    // 更新相机
    this.testCamera.onUpdate(dt_ms);
    // 更新动画
    this.testAnimation.onUpdate(dt_ms);
  }
  onDraw(ctx: CanvasRenderingContext2D): void {
    console.log("游戏 绘制");
    // 绘制动画
    // 获取相机位置
    let cameraPos = this.testCamera.getPosition();
    // 角色位置 - 相机位置 = 角色在屏幕的位置
    this.testAnimation.onDraw(ctx, 100 - cameraPos.x, 100 - cameraPos.y);
  }
  onInput(message: Message): void {
    console.log("游戏 处理输入");
    if (message.type == "keydown") {
      // 按下任意键，进入主菜单场景
      SceneManager.instance.switchTo(SceneManager.SceneType.MenuScene);
    }
    if (message.type == "mousedown") {
      // 按下鼠标，抖动相机
      this.testCamera.shake_start(0.1, 1000);
    }
  }
  onExit(): void {
    console.log("游戏 退出");
  }
}
