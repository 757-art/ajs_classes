import Character from './index';

export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
const daemon = new Daemon('Serg');
console.log(daemon);