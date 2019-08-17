import * as React from "react";
import "jest-styled-components";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { Paragraph } from "./Paragraph";
import { theme } from "../../theme";
import { cleanup } from "@testing-library/react";
describe("Paragraph", () => {
  it("renders correctly", () => {
    const { getByText } = renderWithTheme(
      <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
    );
    expect(getByText(/Lorem ipsum/)).toBeTruthy();
  });
  it("should render white if prop: invertColor is passed", () => {
    const { getByText } = renderWithTheme(<Paragraph>Foo</Paragraph>);
    expect(getByText("Foo")).toHaveStyleRule(
      "color",
      theme.colors.onForeground
    );
    cleanup();
    const { getByText: getByTextNew } = renderWithTheme(
      <Paragraph invertColor>Foo</Paragraph>
    );
    expect(getByTextNew("Foo")).toHaveStyleRule(
      "color",
      theme.colors.onForegroundAlt
    );
  });
});
