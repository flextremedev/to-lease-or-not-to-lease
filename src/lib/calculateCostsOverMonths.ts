import { calculateValueAfterMonths } from "./calculateValueAfterMonths";

export const calculateCostsOverMonths = (
  endingRate: number,
  initialPayment: number,
  months: number,
  rate: number,
  isFinancing: boolean
) => {
  return Math.round(
    isFinancing === true
      ? months * rate +
          initialPayment +
          endingRate -
          calculateValueAfterMonths(
            months * rate + initialPayment + endingRate,
            months
          )
      : months * rate + initialPayment
  );
};
