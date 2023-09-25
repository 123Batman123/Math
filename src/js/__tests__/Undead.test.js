import Undead from '../Undead';

test('test create Undead', () => {
  expect(new Undead('Skeleton')).toEqual({
    name: 'Skeleton',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});
