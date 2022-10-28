import Character from './index';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}
const swordsman = new Swordsman('Ivan');
console.log(swordsman);