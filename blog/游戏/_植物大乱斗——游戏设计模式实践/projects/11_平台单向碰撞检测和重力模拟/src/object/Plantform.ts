import { Camera } from "../Camera";
import { Render } from "../Render";
import { Line } from "../math/Line";
import { Point } from "../math/Point";
import { Player } from "../player/Player";

export class Plantform {
  shap!: Line;
  position!: Point;
  image!: HTMLImageElement;
  constructor() {}

  // 平台和玩家的碰撞检测
  collision(player: Player) {
    // 水平直线和圆形的碰撞检测
    let cycle = player.getShap(); // 获取玩家的形状（圆形）
    // 直线和圆形碰撞检测
    return (
      this.shap.start.x <= cycle.center.x + cycle.radius && // 平台最左侧 < 玩家最右侧
      this.shap.end.x >= cycle.center.x - cycle.radius && // 平台最右侧 > 玩家最左侧
      this.shap.start.y <= cycle.center.y + cycle.radius && // 平台最上侧 < 玩家最上侧
      this.shap.start.y >= cycle.center.y - cycle.radius // 平台最下侧 > 玩家最下侧
    );
  }
  
  setPosition(pos: Point) {
    this.position = pos;
  }
  setImage(img: HTMLImageElement) {
    this.image = img;
  }
  setCollisionShap(line: Line) {
    this.shap = line;
  }
  onDraw(render: Render, camera: Camera) {
    render.drawImageD(camera, this.image!, this.position.x, this.position.y);
    render.drawLine(camera, this.shap);
  }
}
