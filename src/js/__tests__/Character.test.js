import Character from '../Character';

test('test check create main class parent Character', () => {
  expect(new Character('Test', 'Bowman')).toEqual({
    name: 'Test',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  });
});

test('test Error name', () => {
  expect(() => { new Character('T', 'Bowman'); }).toThrowError('Имя должно быть 2 - 10 символов!');
});

test('test Error type', () => {
  expect(() => { new Character('Test', 'Test'); }).toThrowError('Неверный тип!');
});

test('test levelUp', () => {
  const bowman = new Character('Pirat', 'Bowman', 100, 1);
  bowman.attack = 50;
  bowman.defence = 2;
  bowman.levelUp();
  expect(bowman).toEqual({
    name: 'Pirat',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 60,
    defence: 2.4,
  });
});

test('test levelUp check health < 0', () => {
  const bowman = new Character('Pirat', 'Bowman', -100, 1);
  bowman.attack = 50;
  bowman.defence = 2;
  expect(() => { bowman.levelUp(); }).toThrowError();
});

test('test damage', () => {
  const bowman = new Character('Pirat', 'Bowman', 100, 1);
  bowman.attack = 50;
  bowman.defence = 2;
  bowman.damage(10);
  expect(bowman).toEqual({
    name: 'Pirat',
    type: 'Bowman',
    health: 90.2,
    level: 1,
    attack: 50,
    defence: 2,
  });
});

test('test damage check health < 0', () => {
  const bowman = new Character('Pirat', 'Bowman', -100, 1);
  bowman.attack = 50;
  bowman.defence = 2;
  expect(() => { bowman.damage(); }).toThrowError();
});
