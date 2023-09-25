import Character from './Character';

export default class MathAttack extends Character {
  constructor(name, type) {
    super(name, type);
    this.debaff = false;
  }

  newAttack(distance) {
    let newAttack = this.attack * (1 - distance / 10);
    if (this.debaff) {
      newAttack -= (Math.log2(distance) * 5).toFixed();
    }
    if (newAttack < 0) {
      newAttack = 0;
    }
    return newAttack;
  }

  get stoned() {
    return this.debaff;
  }

  set stoned(stoned) {
    this.debaff = stoned;
  }
}
