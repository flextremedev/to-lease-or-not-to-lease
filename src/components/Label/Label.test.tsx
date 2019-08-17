import React from "react";
import "jest-styled-components";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { Label } from "./Label";
import { theme } from "../../theme";
import { cleanup } from "@testing-library/react";

describe("Label", () => {
  it("should render", () => {
    const labelText = "Foo";
    const { getByText } = renderWithTheme(<Label>{labelText}</Label>);
    expect(getByText(labelText)).toBeTruthy();
  });
  it("should render white if prop: invertColor is passed", () => {
    const { getByText } = renderWithTheme(<Label>Foo</Label>);
    expect(getByText("Foo")).toHaveStyleRule(
      "color",
      theme.colors.onForeground
    );
    cleanup();
    const { getByText: getByTextNew } = renderWithTheme(
      <Label invertColor>Foo</Label>
    );
    expect(getByTextNew("Foo")).toHaveStyleRule(
      "color",
      theme.colors.onForegroundAlt
    );
  });
});
