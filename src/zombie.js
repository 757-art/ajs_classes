import Character from './index';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
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
const zombie = new Zombie('Marta');
console.log(zombie);