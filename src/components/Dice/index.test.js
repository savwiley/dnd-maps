const rollDice = require('./rollDice');

test('rolls dice', () => {
  expect(rollDice(1, 20, 2)).toBeGreaterThan(2);
  expect(rollDice(1, 20, 2)).toBeLessThan(22);
});