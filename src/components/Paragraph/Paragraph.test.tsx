import * as React from "react";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { Paragraph } from "./Paragraph";
describe("Paragraph", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithTheme(
      <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
    );
    expect(getByText(/Lorem ipsum/)).toBeTruthy();
  });
});
