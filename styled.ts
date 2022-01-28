import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: "NotoReg";
    src: url("/fonts/NotoSansKR/NotoSansKR-Regular.otf");
  }

  @font-face {
    font-family: "NotoBold";
    src: url("/fonts/NotoSansKR/NotoSansKR-Bold.otf");
  }

  @font-face {
    font-family: "GMarketReg";
    src: url("/fonts/GmarketSans/GmarketSansMedium.otf");
  }

  @font-face {
    font-family: "GMarketBold";
    src: url("/fonts/GmarketSans/GmarketSansBold.otf");
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "NotoReg";

    outline: none;
    letter-spacing: -1px;
    word-break: break-all;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "GMarketBold";
  }

  b {
    font-family: "NotoBold";
  }

  b.G {
    font-family: "GMarketBold";
  }
`;
