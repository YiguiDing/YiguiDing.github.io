// 模拟的JSON字符串
export const json = JSON.stringify([
  {
    name: "Troll",
    health: 25,
    attack_type: "攻击方式1",
  },
  {
    name: "Troll_Archer",
    parent_name: "Troll",
    health: 123,
    // attack_type: "攻击方式2",
  },
  {
    name: "Troll_Wizard",
    parent_name: "Troll",
    health: 111,
    attack_type: "攻击方式3",
  },
]);
