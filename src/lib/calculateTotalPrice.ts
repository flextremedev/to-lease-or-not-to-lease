export const calculateTotalPrice = (
  monthlyRate: number,
  runtime: number,
  initialPayment = 0,
  endingRate = 0
) => {
  return runtime * monthlyRate + initialPayment + endingRate;
};
