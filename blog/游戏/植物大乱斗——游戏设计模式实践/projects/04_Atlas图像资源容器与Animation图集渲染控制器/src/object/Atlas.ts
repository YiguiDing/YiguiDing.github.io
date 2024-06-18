import { flipImage, loadImg } from "../utils";

export class Atlas {
  imgs = new Array<HTMLImageElement>();
  constructor() {}
  load(paths: Array<string>) {
    this.clear();
    paths.forEach((path) => {
      this.imgs.push(loadImg(path));
    });
    return this;
  }
  loadFlipAtlas(atlas: Atlas) {
    this.clear();
    atlas.imgs.forEach((img) => this.imgs.push(flipImage(img)));
    return this;
  }
  clear() {
    this.imgs.length = 0;
  }
  getSize() {
    return this.imgs.length;
  }
  getImage(idx: number) {
    if (idx < 0 || idx >= this.imgs.length) return null;
    return this.imgs[idx];
  }
  addImg(img: HTMLImageElement) {
    this.imgs.push(img);
  }
}
