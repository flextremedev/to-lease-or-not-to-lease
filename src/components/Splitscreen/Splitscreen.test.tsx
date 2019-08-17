import * as React from "react";
import { render } from "@testing-library/react";
import { Splitscreen } from "./Splitscreen";

describe("Splitscreen", () => {
  it("should render", () => {
    const { getByText } = render(<Splitscreen>Foo</Splitscreen>);
    expect(getByText("Foo")).toBeTruthy();
  });
});
