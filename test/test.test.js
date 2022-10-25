import Character from '../src/index';
import Bowerman from '../src/bowerman';
import Daemon from '../src/daemon';
import Magician from '../src/magician';
import Swordsman from '../src/swordsman';
import Undead from '../src/undead';
import Zombie from '../src/zombie';

test('name length', () => {
    expect(() => {
        const magician = new Magician('Namsdfsdfsdfsdfsdfe');
    }).toThrow('Длинна имени не соответствует условию!');
});
test('type name', () => {
    expect(() => {
        class Magician extends Character {
            constructor(name) {
              super(name, 'Magician1111');
              this.attack = 10;
              this.defence = 40;
            }
          }
        const magician = new Magician('Name');
        magician instanceof Character;
    }).toThrow('Тип не соответствует условию!');
});

test('levelUp', () => {
    expect(levelup(attack, defence)).toBe()
})
