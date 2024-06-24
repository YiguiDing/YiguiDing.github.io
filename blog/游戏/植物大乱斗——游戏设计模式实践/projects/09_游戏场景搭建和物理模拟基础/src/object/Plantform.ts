import { Camera } from "../Camera";
import { Render } from "../Render";
import { Line } from "../math/Line";
import { Point } from "../math/Point";

export class Plantform {
  shap!: Line;
  position!: Point;
  image!: HTMLImageElement;
  constructor() {}
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
    render.line(camera, this.shap);
  }
}
