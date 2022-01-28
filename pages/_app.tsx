import { GlobalStyled } from "../styled";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <GlobalStyled>
      <Component {...pageProps} />
    </GlobalStyled>
  );
};

export default MyApp;
