import Character from './index';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
const zombie = new Zombie('Marta');
console.log(zombie);