import * as React from "react";
import { CardBody } from "./CardBody";
import { renderWithTheme } from "../../testing-utils/renderWithTheme";

describe("CardBody", () => {
  it("should render", () => {
    const { getByText } = renderWithTheme(<CardBody>Foo</CardBody>);
    expect(getByText("Foo")).toBeTruthy();
  });
});
