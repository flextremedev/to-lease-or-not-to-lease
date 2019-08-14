import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Home } from "./routes/Home";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Home />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
