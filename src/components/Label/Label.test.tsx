import React from "react";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { Label } from "./Label";

describe("Label", () => {
  it("should render", () => {
    const labelText = "Foo";
    const { getByText } = renderWithTheme(<Label>{labelText}</Label>);
    expect(getByText(labelText)).toBeTruthy();
  });
});
