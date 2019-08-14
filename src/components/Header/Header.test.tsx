import * as React from "react";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { Header } from "./Header";
describe("Header", () => {
  it("should render", () => {
    expect(renderWithTheme(<Header />)).toBeTruthy();
  });
});
