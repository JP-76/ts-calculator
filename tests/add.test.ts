import { add } from '../src/add';

test('add function should add two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
