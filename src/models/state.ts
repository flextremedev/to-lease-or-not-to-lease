export const initialResults = {
  totalPrice: { financing: NaN, label: "Total Payment", leasing: NaN },
  residualValue: {
    financing: NaN,
    label: "Residual Value After Term",
    leasing: NaN,
  },
  costsForRuntime: {
    financing: NaN,
    label: "Costs For Term",
    leasing: NaN,
  },
  monthlyCosts: {
    financing: NaN,
    label: "Monthly Costs",
    leasing: NaN,
  },
};
export type ResultState = typeof initialResults;
export const initialFormState = {
  finCarPrice: undefined,
  finInitialPayment: undefined,
  finRuntime: undefined,
  finMonthlyRate: undefined,
  finEndingRate: undefined,
  leasCarPrice: undefined,
  leasInitialPayment: undefined,
  leasRuntime: undefined,
  leasMonthlyRate: undefined,
};
// export const initialFormState = {
//   finCarPrice: 56000,
//   finInitialPayment: 754.5,
//   finRuntime: 48,
//   finMonthlyRate: 512.6,
//   finEndingRate: 26320,
//   leasCarPrice: 56000,
//   leasInitialPayment: 754.5,
//   leasRuntime: 48,
//   leasMonthlyRate: 544.76,
// };
export type FormState = {
  finCarPrice?: number;
  finInitialPayment?: number;
  finRuntime?: number;
  finMonthlyRate?: number;
  finEndingRate?: number;
  leasCarPrice?: number;
  leasInitialPayment?: number;
  leasRuntime?: number;
  leasMonthlyRate?: number;
};
