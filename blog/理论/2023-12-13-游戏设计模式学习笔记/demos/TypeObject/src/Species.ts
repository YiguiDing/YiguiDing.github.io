import { Monster } from "./Monster";

// 第一种实现：在初始化时从父类中获取将子类未初始化的属性
export class Species {
  name!: string;
  parent_name: string | undefined;
  parent: Species | null = null;
  health: number | null = null;
  attack_type: number | null = null;
  constructor(parent: Species | null, config: Species) {
    Object.assign(this, config); // 把配置中属性加载到当前对象上
    // 如果可以继承
    if (parent) {
      for (let key of Object.keys(this)) {
        // 寻找未被初始化的字段并通过父类继承
        // @ts-ignore
        if (this[key] == null && !(this[key] instanceof Function)) {
          // @ts-ignore
          this[key] = parent[key];
        }
      }
    }
  }
  newMonster() {
    return new Monster(this);
  }
  getHealth() {
    return this.health;
  }
  attack() {
    console.log("attack:" + this.attack_type);
  }
}
// 第二种实现：在初始化时直接将子类未初始化的属性从父类中获取
export class Species2 {
  name!: string;
  parent_name: string | undefined;
  parent: Species | null = null;
  health: number | null = null;
  attack_type: number | null = null;
  constructor(parent: Species | null, config: Species) {
    Object.assign(this, config); // 把配置中属性加载到当前对象上
    this.parent = parent; // 记录父级
  }
  newMonster() {
    return new Monster(this);
  }
  getHealth() {
    // 当子类没有改属性则从父类寻找，如果父类没有则至少返回一个数值
    return this.health || this.parent?.getHealth() || 0;
  }
  attack() {
    if (this.attack_type) {
      console.log("attack:" + this.attack_type);
    } else {
      this.parent?.attack();
    }
  }
}
