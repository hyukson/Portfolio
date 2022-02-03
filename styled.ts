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

  @font-face {
    font-family: "PretendardBold";
    src: url("/fonts/Pretendard/Pretendard-Bold.otf");

  }

  @font-face {
    font-family: "PretendardReg";
    src: url("/fonts/Pretendard/Pretendard-Regular.otf");
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "PretendardReg";

    outline: none;
    letter-spacing: -1px;
    word-break: break-all;
  }

  html {
    height: 100%;
  }
  
  body {
    height: 100%;
    overflow: hidden;
    position: relative;
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
