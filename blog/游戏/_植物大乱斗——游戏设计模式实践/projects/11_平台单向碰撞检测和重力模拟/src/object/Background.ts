import { Camera } from "../Camera";
import { Render } from "../Render";
import { Point } from "../math/Point";

export class Background {
  image!: HTMLImageElement;
  position!: Point;
  setImage(img: HTMLImageElement) {
    this.image = img;
  }
  setPosition(pos: Point) {
    this.position = pos;
  }
  onDraw(render: Render, camera: Camera): void {
    render.drawImageD(camera, this.image, this.position.x, this.position.y);
  }
}
