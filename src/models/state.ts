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
    label: "Monatliche Kosten (effektiv)",
    leasing: NaN,
  },
};
export type ResultState = typeof initialResults;
export const initialFormState = {
  finCarPrice: NaN,
  finInitialPayment: NaN,
  finRunTime: NaN,
  finMonthlyRate: NaN,
  finEndingRate: NaN,
  leasCarPrice: NaN,
  leasInitialPayment: NaN,
  leasRunTime: NaN,
  leasMonthlyRate: NaN,
};
export type FormState = typeof initialFormState;
