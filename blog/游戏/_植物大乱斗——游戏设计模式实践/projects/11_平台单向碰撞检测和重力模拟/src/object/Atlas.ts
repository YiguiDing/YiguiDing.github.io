import { flipImage, loadImage } from "../utils";

/**
 * 图集容器类
 */
export class Atlas {
  imgs = new Array<HTMLImageElement>();

  /**
   * 私有化构造函数
   */
  private constructor() {}

  /**
   * 依次加载图片
   */
  static async load(paths: Array<string>) {
    const atlas = new Atlas();
    for (let index = 0; index < paths.length; index++) {
      const path = paths[index];
      atlas.imgs.push(await loadImage(path));
    }
    return atlas;
  }
  /**
   * 依次加载图片,并翻转
   */
  static async loadFlipAtlas(paths: Array<string>) {
    const atlas = new Atlas();
    for (let index = 0; index < paths.length; index++) {
      const path = paths[index];
      atlas.imgs.push(flipImage(await loadImage(path)));
    }
    return atlas;
  }
  /**
   * 清除容器
   */
  clear() {
    this.imgs.length = 0;
  }
  /**
   * 获取大小
   */
  getSize() {
    return this.imgs.length;
  }
  /**
   * 获取容器中某张图片
   */
  getImage(idx: number) {
    if (idx < 0 || idx >= this.imgs.length) return null;
    return this.imgs[idx];
  }
  /**
   * 向容器添加图片
   */
  addImg(img: HTMLImageElement) {
    this.imgs.push(img);
  }
}
