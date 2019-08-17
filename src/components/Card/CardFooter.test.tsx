import * as React from "react";
import { CardFooter } from "./CardFooter";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";

describe("CardFooter", () => {
  it("should render", () => {
    const { getByText } = renderWithTheme(<CardFooter>Foo</CardFooter>);
    expect(getByText("Foo")).toBeTruthy();
  });
});
