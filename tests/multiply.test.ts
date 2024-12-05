import { multiply } from '../src/multiply';

test('multiply function should multiply two numbers', () => {
  expect(multiply(4, 6)).toBe(24);
});
