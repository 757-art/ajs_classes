import Character from './index';

export default class Bowerman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}
const bowerman = new Bowerman('Artem');
console.log(bowerman);