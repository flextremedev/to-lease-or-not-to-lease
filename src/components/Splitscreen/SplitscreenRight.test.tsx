import * as React from "react";
import { SplitscreenRight } from "./SplitscreenRight";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";

describe("SplitscreenRight", () => {
  it("should render", () => {
    const { getByText } = renderWithTheme(
      <SplitscreenRight>Foo</SplitscreenRight>
    );
    expect(getByText("Foo")).toBeTruthy();
  });
});
