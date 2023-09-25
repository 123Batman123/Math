import Magician from '../Magician';

test('test create Magician', () => {
  expect(new Magician('Dumbledore')).toEqual({
    name: 'Dumbledore',
    type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    debaff: false,
  });
});

test('test check newAttack not debaff distance 5', () => {
  const mag = new Magician('Dumbledore');
  expect(mag.newAttack(5)).toBe(5);
});

test('test check newAttack debaff distance 2', () => {
  const mag = new Magician('Dumbledore');
  mag.stoned = 'Object debaf';
  expect(mag.newAttack(2)).toBe(3);
});

test('test check newAttack debaff distance 5', () => {
  const mag = new Magician('Dumbledore');
  mag.stoned = 'Object debaf';
  expect(mag.newAttack(5)).toBe(0);
});

test('test check newAttack get stoned', () => {
  const mag = new Magician('Dumbledore');
  mag.stoned = 'Object debaf';
  expect(mag.stoned).toBe('Object debaf');
});
