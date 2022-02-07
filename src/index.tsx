import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { GlobalStyled } from "./styled";
import { defaultTheme } from "./theme";

import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
