import * as React from "react";
import "jest-styled-components";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { cleanup } from "@testing-library/react";
import { Heading } from "./Heading";
import { theme } from "../../theme";

describe("Heading", () => {
  it("should render h1", () => {
    const { getByText } = renderWithTheme(<Heading h={1}>Foo</Heading>);
    const component = getByText("Foo");
    expect(component.nodeName).toEqual("H1");
  });
  it("should render h2", () => {
    const { getByText } = renderWithTheme(<Heading h={2}>Foo</Heading>);
    const component = getByText("Foo");
    expect(component.nodeName).toEqual("H2");
  });
  it("should render white if prop: invertColor is passed", () => {
    const { getByText } = renderWithTheme(<Heading h={1}>Foo</Heading>);
    expect(getByText("Foo")).toHaveStyleRule(
      "color",
      theme.colors.onForeground
    );
    cleanup();
    const { getByText: getByTextNew } = renderWithTheme(
      <Heading h={1} invertColor>
        Foo
      </Heading>
    );
    expect(getByTextNew("Foo")).toHaveStyleRule(
      "color",
      theme.colors.onForegroundAlt
    );
  });
});
