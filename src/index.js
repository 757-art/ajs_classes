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

  levelup() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.level += 1;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    if (this.health === 0) {
      this.health = 0;
    }
  }
}