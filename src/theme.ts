import baseStyled, { ThemedStyledInterface } from "styled-components";
export const theme = {
  primary: {
    lighter: "#40C3F7",
    base: "#2BB0ED",
    darker: "#1992D4",
  },
  foreground: "#FDFFFC",
  background: "#FDFFFC",
  onPrimary: "#FDFFFC",
  onForeground: "#FDFFFC",
  accent: "#C9C9C9",
  error: "#F21B3F",
  info: "#02A9EA",
  success: "#29BF12",
  warning: "#FF9914",
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
