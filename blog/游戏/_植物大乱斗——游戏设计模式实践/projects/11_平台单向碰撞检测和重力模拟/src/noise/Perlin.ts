/**
 * 柏林噪声算法
 *
 * https://adrianb.io/2014/08/09/perlinnoise.html
 * https://gist.github.com/Flafla2/f0260a861be0ebdeef76
 * https://mrl.cs.nyu.edu/~perlin/noise/
 */
export class Perlin {
  private readonly repeat: number;
  private static readonly permutation: number[] = [
    131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8,
    99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94,
    252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20,
    125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146,
    158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46,
    245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132,
    187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109,
    198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118,
    126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
    223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155,
    167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178,
    185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191,
    179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181,
    199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138,
    236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61,
    156, 180,
  ];
  private static p: number[];
  constructor(repeat = -1) {
    this.repeat = repeat;
    if (!Perlin.p) {
      Perlin.p = new Array(512);
      for (let x = 0; x < 512; x++) {
        Perlin.p[x] = Perlin.permutation[x % 256];
      }
    }
  }

  public octavePerlin(
    x: number,
    y: number,
    z: number,
    octaves: number,
    persistence: number
  ): number {
    let total = 0;
    let frequency = 1;
    let amplitude = 1;
    let maxValue = 0;

    for (let i = 0; i < octaves; i++) {
      total +=
        this.perlin(x * frequency, y * frequency, z * frequency) * amplitude;

      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= 2;
    }

    return total / maxValue;
  }

  private perlin(x: number, y: number, z: number): number {
    if (this.repeat > 0) {
      x %= this.repeat;
      y %= this.repeat;
      z %= this.repeat;
    }

    const xi = Math.floor(x) & 255;
    const yi = Math.floor(y) & 255;
    const zi = Math.floor(z) & 255;
    const xf = x - Math.floor(x);
    const yf = y - Math.floor(y);
    const zf = z - Math.floor(z);
    const u = this.fade(xf);
    const v = this.fade(yf);
    const w = this.fade(zf);

    const aaa =
      Perlin.p[Perlin.p[Perlin.p[/*     */ xi] + /*     */ yi] + /*     */ zi];
    const aba =
      Perlin.p[Perlin.p[Perlin.p[/*     */ xi] + this.inc(yi)] + /*     */ zi];
    const aab =
      Perlin.p[Perlin.p[Perlin.p[/*     */ xi] + /*     */ yi] + this.inc(zi)];
    const abb =
      Perlin.p[Perlin.p[Perlin.p[/*     */ xi] + this.inc(yi)] + this.inc(zi)];
    const baa =
      Perlin.p[Perlin.p[Perlin.p[this.inc(xi)] + /*     */ yi] + /*     */ zi];
    const bba =
      Perlin.p[Perlin.p[Perlin.p[this.inc(xi)] + this.inc(yi)] + /*     */ zi];
    const bab =
      Perlin.p[Perlin.p[Perlin.p[this.inc(xi)] + /*     */ yi] + this.inc(zi)];
    const bbb =
      Perlin.p[Perlin.p[Perlin.p[this.inc(xi)] + this.inc(yi)] + this.inc(zi)];

    const x1 = this.lerp(
      Perlin.grad(aaa, xf, yf, zf),
      Perlin.grad(baa, xf - 1, yf, zf),
      u
    );
    const x2 = this.lerp(
      Perlin.grad(aba, xf, yf - 1, zf),
      Perlin.grad(bba, xf - 1, yf - 1, zf),
      u
    );
    const y1 = this.lerp(x1, x2, v);

    const x3 = this.lerp(
      Perlin.grad(aab, xf, yf, zf - 1),
      Perlin.grad(bab, xf - 1, yf, zf - 1),
      u
    );
    const x4 = this.lerp(
      Perlin.grad(abb, xf, yf - 1, zf - 1),
      Perlin.grad(bbb, xf - 1, yf - 1, zf - 1),
      u
    );
    const y2 = this.lerp(x3, x4, v);

    return (this.lerp(y1, y2, w) + 1) / 2;
  }

  private inc(num: number): number {
    num++;
    if (this.repeat > 0) num %= this.repeat;
    return num;
  }

  private static grad(hash: number, x: number, y: number, z: number): number {
    // Source: http://riven8192.blogspot.com/2010/08/calculate-perlinnoise-twice-as-fast.html
    switch (hash & 0xf) {
      case 0x0:
        return x + y;
      case 0x1:
        return -x + y;
      case 0x2:
        return x - y;
      case 0x3:
        return -x - y;
      case 0x4:
        return x + z;
      case 0x5:
        return -x + z;
      case 0x6:
        return x - z;
      case 0x7:
        return -x - z;
      case 0x8:
        return y + z;
      case 0x9:
        return -y + z;
      case 0xa:
        return y - z;
      case 0xb:
        return -y - z;
      case 0xc:
        return y + x;
      case 0xd:
        return -y + z;
      case 0xe:
        return y - x;
      case 0xf:
        return -y - z;
      default:
        return 0; // never happens
    }

    const h = hash & 15;
    const u = h < 8 /* 0b1000 */ ? x : y;
    let v;
    if (h < 4 /* 0b0100 */) v = y;
    else if (h == 12 /* 0b1100 */ || h == 14 /* 0b1110*/) v = x;
    else v = z;
    return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10); // 6t^5 - 15t^4 + 10t^3
  }

  private lerp(a: number, b: number, x: number): number {
    return a + x * (b - a);
  }
}
