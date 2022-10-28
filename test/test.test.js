import Character from '../src/index';
import Magician from '../src/magician';
import Bowerman from '../src/bowerman';


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

test('levelUp повышает уровнень на 1, увеличиваем атаку и защиту на 20%, здоровье до 100', () => {
    const bowerman = new Bowerman('Artem');
    expect(bowerman.level).toBe(1);
    bowerman.levelup();
    expect(bowerman.level).toBe(2);
    expect(bowerman.attack).toBe(30);
    expect(bowerman.defence).toBe(30);
    expect(bowerman.health).toBe(100);
});

test('leveup выкидывает ошибку, если health == 0', () => {
    const bowerman = new Bowerman('Artem');
    bowerman.health = 0;
    expect(()=>bowerman.levelup()).toThrow('Нельзя повысить левел умершего');
});

test('Проверка damage на корректность выполнения, если health = 0', () =>{
    const bowerman = new Bowerman('Artem');
    bowerman.health = 0;
    bowerman.damage(30);
    expect(bowerman.health).toBe(0);
});

test('Проверка damage на корректность выполнения, если health = 0', () =>{
    const bowerman = new Bowerman('Artem');
    bowerman.health = 10;
    bowerman.damage(20);
    expect(bowerman.health).toBe(-5);
});