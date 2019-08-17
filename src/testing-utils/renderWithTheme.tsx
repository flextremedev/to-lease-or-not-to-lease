import React from "react";
import { ThemeProvider } from "styled-components";
import { Theme, theme as initialTheme } from "../theme";
import { render } from "@testing-library/react";
export const renderWithTheme = (
  node: React.ReactNode,
  theme: Theme = initialTheme
) =>
  render(
    <ThemeProvider theme={theme}>
      <React.Fragment>{node}</React.Fragment>
    </ThemeProvider>
  );
export const rerenderWithTheme = (
  rerender: (ui: React.ReactElement) => void,
  node: React.ReactNode,
  theme: Theme = initialTheme
) =>
  rerender(
    <ThemeProvider theme={theme}>
      <React.Fragment>{node}</React.Fragment>
    </ThemeProvider>
  );
