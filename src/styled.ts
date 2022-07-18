import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");

  @font-face {
    font-family: 'CookieRunBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/CookieRunOTF-Bold00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  // Pretendard font
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");

  body::-webkit-scrollbar {
    width: 8px;  /* 스크롤바의 너비 */
  }

  body::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #febf00; /* 스크롤바의 색상 */
    
    border-radius: 10px;
  }

  body::-webkit-scrollbar-track {
    background: #fff;  /*스크롤바 뒷 배경 색상*/
  }

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Pretendard;

    outline: none;
    letter-spacing: -1px;
    word-break: break-all;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  b {
    font-family: "CookieRunBold";
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
