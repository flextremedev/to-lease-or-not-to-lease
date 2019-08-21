import { calculateCostsOverMonths } from "./calculateCostsOverMonths";

it("calculates the costs over months", () => {
  expect(
    Math.round(calculateCostsOverMonths(14758.19, 5000, 36, 344.99, true))
  ).toBe(10397);

  expect(
    Math.round(calculateCostsOverMonths(14758.19, 5000, 36, 344.99, false))
  ).toBe(17420);
});
