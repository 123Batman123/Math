import MathAttack from './Math';

export default class Magician extends MathAttack {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
