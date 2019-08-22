import * as React from "react";
import { renderWithTheme } from "../testing-utils/renderWithTheme";
import { Home } from "./Home";
import { fireEvent } from "@testing-library/react";

describe("Home", () => {
  it("should display correct result for given form values", () => {
    const { getByTestId, getByText } = renderWithTheme(<Home />);
    const finCarPrice = getByTestId("finCarPrice");
    const finInitialPayment = getByTestId("finInitialPayment");
    const finRuntime = getByTestId("finRuntime");
    const finMonthlyRate = getByTestId("finMonthlyRate");
    const finEndingRate = getByTestId("finEndingRate");
    const leasCarPrice = getByTestId("leasCarPrice");
    const leasInitialPayment = getByTestId("leasInitialPayment");
    const leasRuntime = getByTestId("leasRuntime");
    const leasMonthlyRate = getByTestId("leasMonthlyRate");
    const button = getByText("Berechnen");
    fireEvent.change(finCarPrice, { target: { value: "56000" } });
    fireEvent.change(finInitialPayment, { target: { value: "754.5" } });
    fireEvent.change(finRuntime, { target: { value: "48" } });
    fireEvent.change(finMonthlyRate, { target: { value: "512.6" } });
    fireEvent.change(finEndingRate, { target: { value: "26320" } });
    fireEvent.change(leasCarPrice, { target: { value: "56000" } });
    fireEvent.change(leasInitialPayment, { target: { value: "754.5" } });
    fireEvent.change(leasRuntime, { target: { value: "48" } });
    fireEvent.change(leasMonthlyRate, { target: { value: "544.76" } });
    fireEvent.click(button);
    expect(getByTestId("totalPrice-financing").textContent).toBe("51679.30");
    expect(getByTestId("totalPrice-label").textContent).toBe("Gesamtpreis");
    expect(getByTestId("totalPrice-leasing").textContent).toBe("-");

    expect(getByTestId("residualValue-financing").textContent).toBe("36009.75");
    expect(getByTestId("residualValue-label").textContent).toBe(
      "Restwert nach Laufzeit"
    );
    expect(getByTestId("residualValue-leasing").textContent).toBe("-");

    expect(getByTestId("costsForRuntime-financing").textContent).toBe(
      "15669.55"
    );
    expect(getByTestId("costsForRuntime-label").textContent).toBe(
      "Kosten für Laufzeit"
    );
    expect(getByTestId("costsForRuntime-leasing").textContent).toBe("26902.98");

    expect(getByTestId("monthlyCosts-financing").textContent).toBe("326.45");
    expect(getByTestId("monthlyCosts-label").textContent).toBe(
      "Monatliche Kosten"
    );
    expect(getByTestId("monthlyCosts-leasing").textContent).toBe("560.48");
    expect(getByText("Erneut berechnen")).toBeTruthy();
  });
});
