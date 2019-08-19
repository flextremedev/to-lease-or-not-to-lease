import * as React from "react";
import "jest-styled-components";
import { SlideAnimation } from "./SlideAnimation";
import {
  renderWithTheme,
  rerenderWithTheme,
} from "../../testing-utils/renderWithTheme";

describe("SlideAnimation", () => {
  it("should render", () => {
    const { getByText } = renderWithTheme(<SlideAnimation>Foo</SlideAnimation>);
    expect(getByText("Foo")).toBeTruthy();
  });
  it("should have height: 0px when prop: condition is true", () => {
    const { getByText } = renderWithTheme(
      <SlideAnimation condition>Foo</SlideAnimation>
    );
    expect(getByText("Foo")).toHaveStyleRule("height", "0px");
  });
  it("should have height: auto when prop: useAsFrom is true", () => {
    const { getByText } = renderWithTheme(
      <SlideAnimation useAsFrom>Foo</SlideAnimation>
    );
    expect(getByText("Foo")).toHaveStyleRule("height", "auto");
  });
  it("should have width: 100% when prop: fullWidth is true", () => {
    const { getByText, rerender } = renderWithTheme(
      <SlideAnimation>Foo</SlideAnimation>
    );
    expect(getByText("Foo")).toHaveStyleRule("width", "auto");
    rerenderWithTheme(rerender, <SlideAnimation fullWidth>Foo</SlideAnimation>);
    expect(getByText("Foo")).toHaveStyleRule("width", "100%");
  });
  it("should have transform: none by default", () => {
    const { getByText } = renderWithTheme(<SlideAnimation>Foo</SlideAnimation>);
    expect(getByText("Foo")).toHaveStyleRule("transform", "none");
  });
  it("should have transform: translate(0px,0px) if prop: useAsFrom is true", () => {
    const { getByText } = renderWithTheme(
      <SlideAnimation useAsFrom>Foo</SlideAnimation>
    );
    expect(getByText("Foo")).toHaveStyleRule("transform", "translate(0px,0px)");
  });
  it("should have transform: translate(0px,0px) when prop: condition is true", () => {
    const { getByText } = renderWithTheme(
      <SlideAnimation condition>Foo</SlideAnimation>
    );
    expect(getByText("Foo")).toHaveStyleRule("transform", "translate(0px,0px)");
  });
  it("should have transform: none when prop: condition and useAsFrom is true", () => {
    const { getByText } = renderWithTheme(
      <SlideAnimation condition useAsFrom>
        Foo
      </SlideAnimation>
    );
    expect(getByText("Foo")).toHaveStyleRule("transform", "none");
  });
  it("should have transform: translate(5px,10px) when prop: condition = true, xAmount = 5 and yAmount = 10", () => {
    const { getByText } = renderWithTheme(
      <SlideAnimation condition xAmount={5} yAmount={10}>
        Foo
      </SlideAnimation>
    );
    expect(getByText("Foo")).toHaveStyleRule(
      "transform",
      "translate(5px,10px)"
    );
  });
  it("should have transition: transform 0ms ease by default", () => {
    const { getByText } = renderWithTheme(<SlideAnimation>Foo</SlideAnimation>);
    expect(getByText("Foo")).toHaveStyleRule(
      "transition",
      "transform 0ms ease"
    );
  });
  it("should have transition: transform 350ms ease by default", () => {
    const { getByText } = renderWithTheme(
      <SlideAnimation duration={350}>Foo</SlideAnimation>
    );
    expect(getByText("Foo")).toHaveStyleRule(
      "transition",
      "transform 350ms ease"
    );
  });
});
