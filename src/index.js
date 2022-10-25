export default class Character {
  constructor(name, type) {
    this.name = name;
    if (name.length > 10 || name.length < 2) {
      throw new Error('Длинна имени не соответствует условию!');
    }
    const allowedTypes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    this.type = type;
    if (!allowedTypes.includes(type)) {
      throw new Error('Тип не соответствует условию!');
    }
    this.health = 100;
    this.level = 1;
  }
}
