import React from "react";
import "jest-styled-components";
import { Button } from "./Button";
import { fireEvent } from "@testing-library/react";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { theme } from "../../theme";
describe("Button", () => {
  it("should display children text as label", () => {
    const { getByText } = renderWithTheme(<Button>Hello</Button>);
    expect(getByText("Hello")).toBeTruthy();
  });
  it("should fire onClick when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = renderWithTheme(
      <Button onClick={handleClick}>Hello</Button>
    );
    fireEvent.click(getByText("Hello"));
    expect(handleClick).toHaveBeenCalled();
  });
  it("should render an outlined button", () => {
    const { container } = renderWithTheme(
      <Button variant="outline">Hello</Button>
    );
    expect(container.firstChild).toHaveStyleRule(
      "color",
      theme.colors.button.background.color
    );
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "rgba(0,0,0,0)"
    );
    expect(container.firstChild).toHaveStyleRule(
      "border",
      `2px solid ${theme.colors.button.background.color}`
    );
  });
  it("should render a text button", () => {
    const { container } = renderWithTheme(
      <Button variant="text">Hello</Button>
    );
    expect(container.firstChild).toHaveStyleRule(
      "color",
      theme.colors.button.background.color
    );
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "rgba(0,0,0,0)"
    );
    expect(container.firstChild).toHaveStyleRule(
      "border",
      "2px solid rgba(0,0,0,0)"
    );
  });
  it("should have width 100% when prop: fullWidth is passed", () => {
    const { container } = renderWithTheme(<Button fullWidth>Hello</Button>);
    expect(container.firstChild).toHaveStyleRule("width", "100%");
  });
  it("should display white text button when prop: invertColor is passed", () => {
    const { container } = renderWithTheme(
      <Button variant="text" invertColor>
        Hello
      </Button>
    );
    expect(container.firstChild).toHaveStyleRule("color", "#FFFFFF");
  });
});
