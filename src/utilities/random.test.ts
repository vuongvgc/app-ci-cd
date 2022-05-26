import { randomNumber } from './index';

it("function should return random number", () => {
  expect(randomNumber(1, 5)).toBeLessThanOrEqual(5);
  expect(randomNumber(1, 5)).toBeGreaterThanOrEqual(1);
  expect(randomNumber(1, 5)).toBeTruthy();
});
