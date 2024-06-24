import { Camera } from "./Camera";
import { Line } from "./math/Line";
import { Vector2 } from "./math/Vector2";

export class Render {
  public context: CanvasRenderingContext2D;
  constructor(
    private canvas: HTMLCanvasElement,
    public width: number,
    public height: number,
  ) {
    this.context = canvas.getContext("2d")!;
    this.canvas.width = width;
    this.canvas.height = height;
  }
  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }
  drawImageD(camera: Camera, image: HTMLImageElement, dest_x: number, dest_y: number) {
    const camera_pos = camera.getPosition();
    const pos_x = dest_x - camera_pos.x;
    const pos_y = dest_y - camera_pos.y;
    this.context.drawImage(
      image,
      // 目标位置
      pos_x,
      pos_y,
    );
  }
  drawImageDD(camera: Camera, image: HTMLImageElement, dest_x: number, dest_y: number, dest_w: number, dest_h: number) {
    const camera_pos = camera.getPosition();
    const pos_x = dest_x - camera_pos.x;
    const pos_y = dest_y - camera_pos.y;
    this.context.drawImage(
      image,
      // 目标位置
      pos_x,
      pos_y,
      // 目标宽度
      dest_w,
      dest_h,
    );
  }
  drawImageSSDD(camera: Camera, image: HTMLImageElement, src_x: number, src_y: number, src_width: number, src_height: number, dest_x: number, dest_y: number, dest_w: number, dest_h: number) {
    const camera_pos = camera.getPosition();
    const pos_x = dest_x - camera_pos.x;
    const pos_y = dest_y - camera_pos.y;
    this.context.drawImage(
      image,
      // 源位置
      src_x,
      src_y,
      // 源宽度
      src_width,
      src_height,
      // 目标位置
      pos_x,
      pos_y,
      // 目标宽度
      dest_w,
      dest_h,
    );
  }
  line(camera: Camera, line: Line) {
    const camera_pos = camera.getPosition();
    this.context.beginPath(); // Start a new path
    this.context.moveTo(line.start.x - camera_pos.x, line.start.y - camera_pos.x); // Move the pen to
    this.context.lineTo(line.end.x - camera_pos.x, line.end.y - camera_pos.x); // Draw a line to
    this.context.stroke(); // Render the path
  }
}
