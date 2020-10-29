import * as React from "react";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";
import { Splitscreen } from "./Splitscreen";

describe("Splitscreen", () => {
  it("should render", () => {
    const { getByText } = renderWithTheme(<Splitscreen>Foo</Splitscreen>);
    expect(getByText("Foo")).toBeTruthy();
  });
});
