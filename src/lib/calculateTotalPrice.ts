export const calculateTotalPrice = (
  monthlyRate: number,
  runTime: number,
  initialPayment = 0,
  endingRate = 0
) => {
  return runTime * monthlyRate + initialPayment + endingRate;
};
