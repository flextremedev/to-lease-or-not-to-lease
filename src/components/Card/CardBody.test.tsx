import * as React from "react";
import "jest-styled-components";
import { CardBody } from "./CardBody";
import {
  renderWithTheme,
  rerenderWithTheme,
} from "../../testing-utils/renderWithTheme";

describe("CardBody", () => {
  it("should render", () => {
    const { getByText } = renderWithTheme(<CardBody>Foo</CardBody>);
    expect(getByText("Foo")).toBeTruthy();
  });
  it("should have padding: 32px when prop: usePadding is true", () => {
    const { getByText, rerender } = renderWithTheme(<CardBody>Foo</CardBody>);
    expect(getByText("Foo")).toHaveStyleRule("padding", "0px");
    rerenderWithTheme(rerender, <CardBody usePadding>Foo</CardBody>);
    expect(getByText("Foo")).toHaveStyleRule("padding", "32px");
  });
});
