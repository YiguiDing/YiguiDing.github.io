import { Species } from "./Species";

export class Monster {
  species: Species;
  constructor(species: Species) {
    this.species = species;
    Object.assign(this, species);
  }
  getHealth() {
    return this.species.getHealth();
  }
  attack() {
    this.species.attack();
  }
  toString() {
    return `Monster${JSON.stringify(this.species, undefined, 2)}`;
  }
}
