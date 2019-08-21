import { calculateValueAfterMonths } from "./calculateValueAfterMonths";

it("calculates the value after months", () => {
  expect(Math.round(calculateValueAfterMonths(29516.38, 36))).toBe(19979);
});
