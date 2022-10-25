import Character from './index';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
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
const daemon = new Daemon('Serg');
console.log(daemon);