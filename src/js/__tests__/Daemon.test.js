import Daemon from '../Daemon';

test('test create Daemon', () => {
  expect(new Daemon('Chaos')).toEqual({
    name: 'Chaos',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    debaff: false,
  });
});

test('test check newAttack not debaff distance 5', () => {
  const daemon = new Daemon('Chaos');
  expect(daemon.newAttack(5)).toBe(5);
});

test('test check newAttack debaff distance 2', () => {
  const daemon = new Daemon('Chaos');
  daemon.stoned = 'Object debaf';
  expect(daemon.newAttack(2)).toBe(3);
});

test('test check newAttack debaff distance 5', () => {
  const daemon = new Daemon('Chaos');
  daemon.stoned = 'Object debaf';
  expect(daemon.newAttack(5)).toBe(0);
});

test('test check newAttack get stoned', () => {
  const daemon = new Daemon('Chaos');
  daemon.stoned = 'Object debaf';
  expect(daemon.stoned).toBe('Object debaf');
});
