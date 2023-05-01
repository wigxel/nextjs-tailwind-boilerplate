const fn = (a: number, b: number) => a + b;

test("should return 2", () => {
  expect(fn(1, 1)).toBe(2);
});
