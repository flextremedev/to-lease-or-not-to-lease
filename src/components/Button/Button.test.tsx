import React from "react";
import { Button } from "./Button";
import { fireEvent } from "@testing-library/react";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
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
});
