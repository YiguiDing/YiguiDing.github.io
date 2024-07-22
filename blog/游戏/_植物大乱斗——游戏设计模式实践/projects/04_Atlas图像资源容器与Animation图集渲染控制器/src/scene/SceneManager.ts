import { Message } from "../Input";
import { Scene } from "./Scene";
import { GameScene } from "./GameScene";
import { MenuScene } from "./MenuScene";
import { SelectorScene } from "./SelectorScene";

enum SceneType {
  MenuScene,
  SelectorScene,
  GameScene,
}

export class SceneManager {
  static SceneType = SceneType;
  scenes = new Array<Scene>(); // 用来保存所有场景
  curentScene: null | Scene = null; // 当前场景
  static instance = new SceneManager(); // 单例
  private constructor() {
    this.init();
  }
  private init() {
    // 初始化所有场景
    this.scenes = [new MenuScene(), new SelectorScene(), new GameScene()];
    // 设置初始场景为菜单场景
    this.setCurentScene(SceneType.MenuScene);
  }
  destory(): void {
    // 销毁所有场景
    this.scenes.forEach((scene) => scene.destory());
  }
  // 设置当前场景
  setCurentScene(sceneType: SceneType) {
    this.curentScene = this.scenes[sceneType];
    this.curentScene.onEnter();
  }
  // 切换场景
  switchTo(sceneType: SceneType) {
    this.curentScene?.onExit();
    this.curentScene = this.scenes[sceneType];
    this.curentScene.onEnter();
  }
  //   场景更新
  onUpdate(dt_ms: number) {
    this.curentScene?.onUpdate(dt_ms);
  }
  //   场景绘制
  onDraw(ctx: CanvasRenderingContext2D): void {
    this.curentScene?.onDraw(ctx);
  }
  //   场景输入
  onInput(message: Message): void {
    this.curentScene?.onInput(message);
  }
}
