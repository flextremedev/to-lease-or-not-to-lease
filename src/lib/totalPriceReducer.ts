import { calculateTotalPrice } from "./calculateTotalPrice";
import { ResultState, FormState } from "../models/state";

export const totalPriceReducer = (
  totalPriceState: ResultState["totalPrice"],
  formState: FormState
): ResultState["totalPrice"] => {
  if (totalPriceState) {
    const {
      finEndingRate,
      finInitialPayment,
      finMonthlyRate,
      finRunTime,
      leasInitialPayment,
      leasMonthlyRate,
      leasRunTime,
    } = formState;
    const totalPriceFin = calculateTotalPrice(
      finMonthlyRate,
      finRunTime,
      finInitialPayment,
      finEndingRate
    );
    const totalPriceLeas = calculateTotalPrice(
      leasMonthlyRate,
      leasRunTime,
      leasInitialPayment
    );
    return {
      ...totalPriceState,
      financing: totalPriceFin,
      leasing: totalPriceLeas,
    };
  }
  return totalPriceState;
};
