import { Sum } from "./Sum";

test("adds 1 + 2 to equal 3", () => {
  expect(Sum(1, 2)).toBe(3);
});

test("adds 5 + 7 to equal 12", () => {
  expect(Sum(5, 7)).toBe(12);
});

test("adds 0 + 0 to equal 0", () => {
  expect(Sum(0, 0)).toBe(0);
});
