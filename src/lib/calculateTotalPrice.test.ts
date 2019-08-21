import { calculateTotalPrice } from "./calculateTotalPrice";

describe("calculateTotlaPrice()", () => {
  it("should return expected value", () => {
    const expected = 19200;
    expect(calculateTotalPrice(400, 48)).toBe(expected);
  });
  it("should return expected value with initialPayment", () => {
    const expected = 29200;
    expect(calculateTotalPrice(400, 48, 10000)).toBe(expected);
  });
  it("should return expected value with initialPayment and ending rate", () => {
    const expected = 34200;
    expect(calculateTotalPrice(400, 48, 10000, 5000)).toBe(expected);
  });
});
