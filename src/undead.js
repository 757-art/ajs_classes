import Character from './index';

export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}
const undead = new Undead('Alex');
console.log(undead);