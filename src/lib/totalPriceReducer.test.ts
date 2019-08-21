import { FormState, ResultState, initialResults } from "../models/state";
import { totalPriceReducer } from "./totalPriceReducer";
describe("totalPriceReducer", () => {
  it("returns the updated state", () => {
    const formState: FormState = {
      finMonthlyRate: 400,
      finRunTime: 48,
      finInitialPayment: 10000,
      finEndingRate: 5000,
      leasMonthlyRate: 400,
      leasRunTime: 48,
      leasInitialPayment: 10000,
      finCarPrice: 30000,
      leasCarPrice: 30000,
    };
    const resultState: ResultState = { ...initialResults };
    const expected = { financing: 34200, label: "Gesamtpreis", leasing: 29200 };
    expect(totalPriceReducer(resultState["totalPrice"], formState)).toEqual(
      expected
    );
  });
});