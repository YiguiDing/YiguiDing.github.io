export class Vector2 {
  constructor(
    public x: number,
    public y: number
  ) {}
  /**
   * 复制
   */
  copy() {
    return new Vector2(this.x, this.y);
  }
  /**
   * 加
   */
  add(vec: Vector2) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }
  /**
   * 减
   */
  minus(vec: Vector2) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }
  /**
   * 乘上系数，放大向量
   */
  multiply(factor: number) {
    this.x *= factor;
    this.y *= factor;
    return this;
  }
  /**
   * 除上系数，缩小向量
   */
  divide(factor: number) {
    this.x /= factor;
    this.y /= factor;
    return this;
  }
  /**
   * 旋转（矢量方向）
   */
  rotate(angle_rad: number) {
    this.x = this.x * Math.cos(angle_rad) - this.y * Math.sin(angle_rad);
    this.y = this.x * Math.sin(angle_rad) + this.x * Math.cos(angle_rad);
    return this;
  }
  /**
   * 角度（矢量方向）
   */
  angle() {
    return Math.atan2(this.y, this.x);
  }
  /**
   * 设置角度（矢量方向）
   */
  setAngle(angle: number) {
    const len = this.length();
    this.x = Math.cos(angle) * len;
    this.y = Math.sin(angle) * len;
    return this;
  }
  /**
   * 向量长度
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * 设置向量长度
   */
  setLength(tarLength: number) {
    const curlength = this.length();
    if (curlength != 0) this.multiply(tarLength / curlength);
    else this.x = this.y = tarLength / Math.sqrt(2); // 1 1 √2
    return this;
  }
  /**
   * 归一化：设置向量长度为1
   */
  normalize() {
    this.setLength(1);
    return this;
  }
}
