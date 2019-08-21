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
    } = formState;
    const totalPriceFin = calculateTotalPrice(
      finMonthlyRate,
      finRunTime,
      finInitialPayment,
      finEndingRate
    );
    return {
      ...totalPriceState,
      financing: totalPriceFin,
    };
  }
  return totalPriceState;
};
