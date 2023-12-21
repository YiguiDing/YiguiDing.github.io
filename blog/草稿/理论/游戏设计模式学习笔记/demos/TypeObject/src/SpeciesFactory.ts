import { Species } from "./Species";

export class SpeciesFactory {
  ctx = new Map<string, Species>();
  cfg = new Map<string, Species>();
  constructor(config: string) {
    // 解析配置文件，缓存配置
    let list = JSON.parse(config) as Species[];
    list.forEach((item) => this.cfg.set(item.name, item));
  }
  build(species: string): Species {
    // 先判断该物种是否已经构建，有则直接返回
    if (this.ctx.has(species)) {
      return this.ctx.get(species) as Species;
    } else {
      // 否则根据物种名获得其配置，如果需要继承自其父级则需要先构建其父级。
      let cfg = this.cfg.get(species);
      if (!cfg) throw new SyntaxError(`unknow species's name:${species}`);
      let parent: Species | null = null;
      if (cfg.parent_name) {
        parent = this.build(cfg.parent_name);
      }
      return new Species(parent, cfg);
    }
  }
}
