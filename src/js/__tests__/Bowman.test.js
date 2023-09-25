import Bowman from '../Bowman';

test('test create Bowman', () => {
  expect(new Bowman('Sniper')).toEqual({
    name: 'Sniper',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});
