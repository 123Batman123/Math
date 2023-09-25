import Zombie from '../Zombie';

test('test create Zombie', () => {
  expect(new Zombie('Zombie')).toEqual({
    name: 'Zombie',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});
