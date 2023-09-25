import Swordsman from '../Swordsman';

test('test create Swordsman', () => {
  expect(new Swordsman('Paladin')).toEqual({
    name: 'Paladin',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});
