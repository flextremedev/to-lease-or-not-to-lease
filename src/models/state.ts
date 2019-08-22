export const initialResults = {
  totalPrice: { financing: NaN, label: "Gesamtpreis", leasing: NaN },
  residualValue: {
    financing: NaN,
    label: "Restwert nach Laufzeit",
    leasing: NaN,
  },
  costsForRuntime: {
    financing: NaN,
    label: "Kosten für Laufzeit",
    leasing: NaN,
  },
  monthlyCosts: {
    financing: NaN,
    label: "Monatliche Kosten",
    leasing: NaN,
  },
};
export type ResultState = typeof initialResults;
export const initialFormState = {
  finCarPrice: NaN,
  finInitialPayment: NaN,
  finRuntime: NaN,
  finMonthlyRate: NaN,
  finEndingRate: NaN,
  leasCarPrice: NaN,
  leasInitialPayment: NaN,
  leasRuntime: NaN,
  leasMonthlyRate: NaN,
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
export type FormState = typeof initialFormState;
