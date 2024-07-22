import { Camera } from "../Camera";
import { Message } from "../Input";
import { Render } from "../Render";
import { HEIGHT, WIDTH } from "../constants";
import { Line } from "../math/Line";
import { Point } from "../math/Point";
import { Background } from "../object/Background";
import { Plantform } from "../object/Plantform";
import { SunflowerPlayer } from "../player/SunflowerPlayer";
import { Player, PlayerDirection, PlayerId } from "../player/Player";
import { resources } from "../resources";
import { Scene } from "./Scene";
import { SceneManager } from "./SceneManager";
import { PlayerType, players } from "./SelectorScene";
import { Vector2 } from "../math/Vector2";

export class GameScene implements Scene {
  players!: Array<Player>; // 玩家
  plantforms!: Array<Plantform>; // 平台
  backgrounds!: Array<Background>; // 背景
  // 平台描述
  platform_descriptions = [
    {
      idx: 0,
      type: "platform_large",
      // 布局描述
      left: 0.5, // 50%
      top: 1, // 100%
      transform_x: -0.5, // -50%
      transform_y: -0.6, // -60%
      ground_offset_x: 0,
      ground_offset_y: 60,
    },
    {
      idx: 1,
      type: "platform_small",
      left: 0.5,
      top: 0.2,
      transform_x: -0.5,
      transform_y: -0.5,
      ground_offset_x: 0,
      ground_offset_y: 10,
    },
    {
      idx: 2,
      type: "platform_small",
      left: 0.25,
      top: 0.45,
      transform_x: -0.5,
      transform_y: -0.5,
      ground_offset_x: 0,
      ground_offset_y: 10,
    },
    {
      idx: 3,
      type: "platform_small",
      left: 0.75,
      top: 0.45,
      transform_x: -0.5,
      transform_y: -0.5,
      ground_offset_x: 0,
      ground_offset_y: 10,
    },
  ];
  // 背景描述
  background_descriptions = [
    {
      idx: 0,
      type: "sky", // 图片名称
      left: 0.5, // 50%
      top: 0.5, // 50%
      transform_x: -0.5, // -50%
      transform_y: -0.5, // -50%
    },
    {
      idx: 1,
      type: "hills",
      left: 0.5, // 50%
      top: 0.5, // 50%
      transform_x: -0.5, // -50%
      transform_y: -0.5, // -50%
    },
  ];
  constructor(
    private sceneManager: SceneManager,
    private camera: Camera,
  ) {
    this.init();
  }
  init(): void {
    console.log("游戏 初始化");
    // 背景初始化
    this.backgrounds = new Array(this.background_descriptions.length);
    this.background_descriptions.forEach((item) => {
      let image = resources.images.get(item.type)!;
      let pos_x = item.left * WIDTH + item.transform_x * image.width;
      let pos_y = item.top * HEIGHT + item.transform_y * image.height;
      this.backgrounds[item.idx] = new Background();
      this.backgrounds[item.idx].setImage(image);
      this.backgrounds[item.idx].setPosition(new Point(pos_x, pos_y));
    });
    // 平台初始化
    this.plantforms = new Array(this.platform_descriptions.length);
    this.platform_descriptions.forEach((item) => {
      let image = resources.images.get(item.type)!;
      let pos_x = item.left * WIDTH + item.transform_x * image.width;
      let pos_y = item.top * HEIGHT + item.transform_y * image.height;
      this.plantforms[item.idx] = new Plantform();
      this.plantforms[item.idx].setImage(image);
      this.plantforms[item.idx].setPosition(new Point(pos_x, pos_y));
      this.plantforms[item.idx].setCollisionShap(
        new Line(
          new Point(pos_x + item.ground_offset_x, pos_y + item.ground_offset_y), // left
          new Point(pos_x + image.width + item.ground_offset_x, pos_y + item.ground_offset_y), // right
        ),
      );
    });
  }
  destory(): void {
    console.log("游戏 销毁");
  }
  onEnter(): void {
    console.log("进入游戏");
    // 玩家初始化
    this.players = players;
    this.players[PlayerId.P1].setPosition(0.25 * WIDTH, 0.6 * HEIGHT).setDirection(PlayerDirection.TrunRight);
    this.players[PlayerId.P2].setPosition(0.75 * WIDTH, 0.6 * HEIGHT).setDirection(PlayerDirection.TrunLeft);
  }
  onUpdate(dt_ms: number): void {
    console.log("游戏 更新");
    this.players.forEach((item) => item.onUpdate(dt_ms));
    this.camera.onUpdate(dt_ms);
  }
  onDraw(render: Render, camera: Camera): void {
    console.log("游戏 绘制");
    this.backgrounds.forEach((item) => item.onDraw(render, camera)); // 绘制背景
    this.plantforms.forEach((item) => item.onDraw(render, camera)); // 绘制平台
    this.players.forEach((item) => item.onDraw(render, camera));
  }
  onInput(message: Message): void {
    console.log("游戏 处理输入");
    this.players.forEach((item) => item.onInput(message));

    if (message.type == "keydown" && message.key == "Escape") {
      // 按下Esc键，回到主菜单场景
      this.sceneManager.switchTo(SceneManager.SceneType.MenuScene);
    }
    if (message.type == "mousedown") {
      this.camera.shake_start(0.2, 1000);
    }
  }
  onExit(): void {
    console.log("游戏 退出");
  }
}
