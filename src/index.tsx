import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { GlobalStyled } from "./styled";
import { defaultTheme } from "./theme";

import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />

      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
