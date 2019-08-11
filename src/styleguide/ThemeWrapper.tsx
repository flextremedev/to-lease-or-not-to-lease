import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
export default class ThemeWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>{this.props.children}</React.Fragment>
      </ThemeProvider>
    );
  }
}
