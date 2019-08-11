import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment></React.Fragment>
    </ThemeProvider>
  );
};

export default App;
