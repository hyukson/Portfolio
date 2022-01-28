import { defaultTheme } from "../theme";
import type { AppProps } from "next/app";

import { GlobalStyled } from "../styled";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
