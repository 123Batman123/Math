export default class Character {
  constructor(name, type, health = 100, level = 1) {
    this.name = Character.checkName(name);
    this.type = Character.checkType(type);
    this.health = health;
    this.level = level;
    this.attack = undefined;
    this.defence = undefined;
  }

  static checkName(name) {
    if (name.length >= 2 && name.length <= 10) {
      return name;
    }
    throw new Error('Имя должно быть 2 - 10 символов!');
  }

  static checkType(type) {
    const listChildClass = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (listChildClass.includes(type)) {
      return type;
    }
    throw new Error('Неверный тип!');
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
      return;
    }
    throw new Error('Можно повышать уровень только живого персонажа');
  }

  damage(points) {
    if ((this.health > 0)) {
      this.health -= points * (1 - this.defence / 100);
      return;
    }
    throw new Error('Можно атаковать только живого персонажа');
  }
}
