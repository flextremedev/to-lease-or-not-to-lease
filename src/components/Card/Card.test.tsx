import * as React from "react";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { Card } from "./Card";

describe("Card", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithTheme(<Card>Foo</Card>);
    expect(getByText("Foo")).toBeTruthy();
  });
});
