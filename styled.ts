import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: "NotoReg";
    src: url("../public/fonts/NotoSansKR/NotoSansKR-Regular.otf");
  }

  @font-face {
    font-family: "NotoBold";
    src: url("../public/fonts/NotoSansKR/NotoSansKR-Bold.otf");
  }

  font-family: "NotoReg";
  outline: none;
  letter-spacing: -1px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  b {
    font-family: "NotoBold";
  }

  word-break: break-all;
  max-width: 460px;
  width: 100%;

  margin: 0 auto;
  margin-top: 7rem;
  padding: 2rem;
  border-radius: 10px;
  background: #fff;

  .title {
    position: absolute;
    font-size: 1rem;
    color: #fff;
    top: 50%;
    transform: translateY(-50%);
    letter-spacing: 1.1rem;
    z-index: -1;

    &.left {
      left: 10%;
    }

    &.right {
      right: 10%;
    }
  }

  .Header {
    h2 {
      font-size: 2rem;
      margin-bottom: 0.4rem;
    }
  }
`;
