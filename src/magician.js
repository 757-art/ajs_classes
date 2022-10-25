import Character from './index';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
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
const magician = new Magician('Petr');
console.log(magician);