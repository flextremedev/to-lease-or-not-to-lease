import * as React from "react";
import { renderWithTheme } from "../testing-utils/renderWithTheme";
import { Home } from "./Home";
import { fireEvent, cleanup } from "@testing-library/react";

describe("Home", () => {
  afterEach(() => {
    cleanup();
  });
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
    const button = getByText("Calculate");
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
    expect(getByTestId("totalPrice-leasing").textContent).toBe("-");

    expect(getByTestId("residualValue-financing").textContent).toBe("36009.75");
    expect(getByTestId("residualValue-leasing").textContent).toBe("-");

    expect(getByTestId("costsForRuntime-financing").textContent).toBe(
      "15669.55"
    );
    expect(getByTestId("costsForRuntime-leasing").textContent).toBe("26902.98");

    expect(getByTestId("monthlyCosts-financing").textContent).toBe("326.45");
    expect(getByTestId("monthlyCosts-leasing").textContent).toBe("560.48");
    expect(getByText("Recalculate")).toBeTruthy();
  });
  it("should display correct result for empty form values", () => {
    const { getByTestId, getByText } = renderWithTheme(<Home />);
    const button = getByText("Calculate");
    fireEvent.click(button);
    expect(getByTestId("totalPrice-financing").textContent).toBe("-");
    expect(getByTestId("totalPrice-leasing").textContent).toBe("-");

    expect(getByTestId("residualValue-financing").textContent).toBe("-");
    expect(getByTestId("residualValue-leasing").textContent).toBe("-");

    expect(getByTestId("costsForRuntime-financing").textContent).toBe("-");
    expect(getByTestId("costsForRuntime-leasing").textContent).toBe("-");

    expect(getByTestId("monthlyCosts-financing").textContent).toBe("-");
    expect(getByTestId("monthlyCosts-leasing").textContent).toBe("-");
    expect(getByText("Recalculate")).toBeTruthy();
  });
  it("should display empty string in TextField when number deleted", () => {
    const { getByTestId } = renderWithTheme(<Home />);
    const finCarPrice = getByTestId("finCarPrice") as HTMLInputElement;
    fireEvent.change(finCarPrice, { target: { value: "5" } });
    expect(finCarPrice.value).toBe("5");
    fireEvent.change(finCarPrice, { target: { value: "" } });
    expect(finCarPrice.value).toBe("");
  });
});
