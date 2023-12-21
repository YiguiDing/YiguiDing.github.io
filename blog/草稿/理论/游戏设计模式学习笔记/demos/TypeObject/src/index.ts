import { json } from "./config";
import { SpeciesFactory } from "./SpeciesFactory";

enum SpeciesType {
  Troll = "Troll",
  Troll_Archer = "Troll_Archer",
  Troll_Wizard = "Troll_Wizard",
}

function main() {
  // 加载配置文件，初始化物种构建器
  let speciesFactory = new SpeciesFactory(json);
  // 构建物种（会自动处理物种间的继承）
  let Species1 = speciesFactory.build(SpeciesType.Troll);
  let Species2 = speciesFactory.build(SpeciesType.Troll_Archer);
  let Species3 = speciesFactory.build(SpeciesType.Troll_Wizard);
  // 通过物种创建怪物
  let monster1 = Species1.newMonster();
  let monster2 = Species2.newMonster();
  let monster3 = Species3.newMonster();
  // 打印输出
  console.log(monster1.toString());
  monster1.attack();
  console.log(monster2.toString());
  monster2.attack();
  console.log(monster3.toString());
  monster3.attack();
}

main();
