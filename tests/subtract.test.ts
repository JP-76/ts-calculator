import { subtract } from '../src/subtract';

test('subtract function should subtract two numbers', () => {
  expect(subtract(8, 5)).toBe(3);
});
