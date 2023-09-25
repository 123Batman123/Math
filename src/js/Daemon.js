import MathAttack from './Math';

export default class Daemon extends MathAttack {
  constructor(name, type = 'Daemon') {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}
