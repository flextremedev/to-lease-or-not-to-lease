import baseStyled, { ThemedStyledInterface } from "styled-components";
export const theme = {
  colors: {
    button: {
      foreground: { color: "#FFFFFF" },
      background: { color: "#0967D2", hover: "#2186EB", active: "#0552B5" },
    },
    input: {
      foreground: { color: "#1F2933" },
      background: { color: "#FFFFFF" },
      border: { color: "#E4E7EB", focus: "#2186EB" },
    },
    background: "#47A3F3",
    backgroundAlt: "#0552B5",
    foreground: "#FFFFFF",
    foregroundAlt: "#1F2933",
    onForeground: "#1F2933",
    onForegroundAlt: "#FFFFFF",
    neutral: "#E4E7EB",
    error: "#D63230",
    success: "#94C426",
  },
  spaces: {
    s: "4px",
    m: "8px",
    l: "16px",
    xl: "32px",
    xxl: "48px",
  },
  fonts: {
    h1: { fontSize: "3rem", fontWeight: 600, fontFamily: "Poppins" },
    h2: { fontSize: "1.875rem", fontWeight: 400, fontFamily: "Poppins" },
    h3: { fontSize: "0.875rem", fontWeight: 500, fontFamily: "Poppins" },
    paragraph: { fontSize: "1rem", fontWeight: 400, fontFamily: "Open Sans" },
    label: { fontSize: "0.875rem", fontWeight: 500, fontFamily: "Poppins" },
    summary: { fontSize: "0.875rem", fontWeight: 400, fontFamily: "Poppins" },
    button: { fontSize: "1rem", fontWeight: 400, fontFamily: "Poppins" },
    input: { fontSize: "1rem", fontWeight: 400, fontFamily: "Poppins" },
  },
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
