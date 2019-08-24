export const calculateTotalPrice = (
  monthlyRate?: number,
  runtime?: number,
  initialPayment = 0,
  endingRate = 0
) => {
  if (runtime !== undefined && monthlyRate !== undefined) {
    return runtime * monthlyRate + initialPayment + endingRate;
  }
  return NaN;
};
