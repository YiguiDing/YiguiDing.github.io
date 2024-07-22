import { Camera } from "../Camera";
import { Message } from "../Input";
import { Render } from "../Render";
import { resources } from "../resources";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";

export class MenuScene implements Scene {
  backgroud: HTMLImageElement = resources.images.get("menu_background")!;
  bgm_menu: HTMLAudioElement = resources.audios.get("bgm_menu")!;
  ui_confirm: HTMLAudioElement = resources.audios.get("ui_confirm")!;
  constructor(
    private sceneManager: SceneManager,
    private camera: Camera,
  ) {
    this.init();
  }
  init(): void {
    console.log("主菜单 初始化");
  }
  destory(): void {
    console.log("主菜单 销毁");
  }
  onEnter(): void {
    console.log("进入主菜单");
    this.bgm_menu.currentTime = 0; // 定位到开头位置
    this.bgm_menu.loop = true; // 循环播放
    this.bgm_menu.play(); // 播放入场音效
  }
  onUpdate(): void {
    console.log("主菜单 更新");
  }
  onDraw(render: Render, camera: Camera): void {
    console.log("主菜单 绘制");
    render.drawImageDD(camera, this.backgroud, 0, 0, render.width, render.height);
  }
  onInput(message: Message): void {
    console.log("主菜单 处理输入");
    // 按下任意键
    if (message.type == "keydown") {
      // 播放音效
      this.ui_confirm.currentTime = 0; // 定位到开头位置
      this.ui_confirm.loop = false; // 不循环播放
      this.ui_confirm.play(); // 播放确认音效
      //进入角色选择场景
      this.sceneManager.switchTo(SceneManager.SceneType.SelectorScene);
    }
  }
  onExit(): void {
    this.bgm_menu.pause(); // 结束播放
    console.log("主菜单 退出");
  }
}
