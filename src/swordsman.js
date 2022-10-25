import Character from './index';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
  levelup(){
    if(this.health = 0) {
      throw new Error('Нельзя повысить левел умершего');
    } else {
      super.levelup(10,40);
      return;
    }
  }
}
const swordsman = new Swordsman('Ivan');
console.log(swordsman);