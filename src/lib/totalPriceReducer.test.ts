import { FormState, ResultState, initialResults } from "../models/state";
import { totalPriceReducer } from "./totalPriceReducer";
describe("totalPriceReducer", () => {
  it("returns the updated state", () => {
    const formState: FormState = {
      finMonthlyRate: 400,
      finRuntime: 48,
      finInitialPayment: 10000,
      finEndingRate: 5000,
      leasMonthlyRate: 400,
      leasRuntime: 48,
      leasInitialPayment: 10000,
      finCarPrice: 30000,
      leasCarPrice: 30000,
    };
    const resultState: ResultState = { ...initialResults };
    const expected = { financing: 34200, label: "Gesamtpreis", leasing: NaN };
    expect(totalPriceReducer(resultState["totalPrice"], formState)).toEqual(
      expected
    );
  });
});
