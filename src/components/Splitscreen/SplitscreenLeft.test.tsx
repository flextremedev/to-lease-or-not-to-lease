import * as React from "react";
import { SplitscreenLeft } from "./SplitscreenLeft";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";

describe("SplitscreenLeft", () => {
  it("should render", () => {
    const { getByText } = renderWithTheme(
      <SplitscreenLeft>Foo</SplitscreenLeft>
    );
    expect(getByText("Foo")).toBeTruthy();
  });
});
