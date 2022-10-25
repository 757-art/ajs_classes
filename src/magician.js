import Character from './index';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
const magician = new Magician('Petr');
console.log(magician);