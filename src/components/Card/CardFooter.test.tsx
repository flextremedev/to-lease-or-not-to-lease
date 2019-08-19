import * as React from "react";
import "jest-styled-components";
import { CardFooter } from "./CardFooter";
import {
  renderWithTheme,
  rerenderWithTheme,
} from "../../testing-utils/renderWithTheme";

describe("CardFooter", () => {
  it("should render", () => {
    const { getByText } = renderWithTheme(<CardFooter>Foo</CardFooter>);
    expect(getByText("Foo")).toBeTruthy();
  });
  it("should set height to 164px if prop: expanded is passed", () => {
    const { getByText, rerender } = renderWithTheme(
      <CardFooter>Foo</CardFooter>
    );
    expect(getByText("Foo")).toHaveStyleRule("height", "80px");
    rerenderWithTheme(rerender, <CardFooter expanded>Foo</CardFooter>);
    expect(getByText("Foo")).toHaveStyleRule("height", "164px");
  });
});
