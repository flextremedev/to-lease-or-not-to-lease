import baseStyled, { ThemedStyledInterface } from "styled-components";
export const theme = {
  primary: {
    lighter: "#40C3F7",
    base: "#2BB0ED",
    darker: "#1992D4",
  },
  foreground: "#FFFFFF",
  background: "#FFFFFF",
  onPrimary: "#FFFFFF",
  onForeground: "#FFFFFF",
  accent: "#CBD2D9",
  error: "#E12D39",
  info: "#2BB0ED",
  success: "#27AB83",
  warning: "#F0B429",
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
