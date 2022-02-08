import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

  @font-face {
    font-family: "NotoReg";
    src: url("/Portfolio/fonts/NotoSansKR/NotoSansKR-Regular.otf");
  }

  @font-face {
    font-family: "NotoBold";
    src: url("/Portfolio/fonts/NotoSansKR/NotoSansKR-Bold.otf");
  }

  @font-face {
    font-family: "GMarketReg";
    src: url("/Portfolio/fonts/GmarketSans/GmarketSansMedium.otf");
  }

  @font-face {
    font-family: "GMarketBold";
    src: url("/Portfolio/fonts/GmarketSans/GmarketSansBold.otf");
  }

  @font-face {
    font-family: "PretendardBold";
    src: url("/Portfolio/fonts/Pretendard/Pretendard-Bold.otf");
  }

  @font-face {
    font-family: "PretendardReg";
    src: url("/Portfolio/fonts/Pretendard/Pretendard-Regular.otf");
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

  a {
    text-decoration: none;
    color: inherit;
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

  // 1150px 반응형
  @media only screen and (max-width: 1150px) {
    html, body {
      font-size: 14px;
    }
  }

  // 920px 반응형
  @media only screen and (max-width: 920px) {
    html, body {
      font-size: 12px;
    }
  }

  // 720px 반응형
  @media only screen and (max-width: 720px) {
    html, body {
      font-size: 11px;
    }
  }

  // 600px 반응형
  @media only screen and (max-width: 600px) {
    html, body {
      font-size: 10px;
    }
  }
`;
