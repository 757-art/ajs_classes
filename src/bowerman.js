import Character from './index';

export default class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
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
const bowerman = new Bowerman('Artem');
console.log(bowerman);