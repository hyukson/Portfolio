import styled, { keyframes } from "styled-components";

const dash = keyframes`
  from {
    stroke-dashoffset: 500;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const LineAniStyled = styled.div`
  .lineSvg {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    transition: 0.4s;
  }

  polyline {
    width: 100%;
    height: 100%;
    stroke: ${(props) => props.theme.lineColor};
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }

  .rect1 {
    animation: ${dash} 3s linear forwards;
    animation-delay: 0.3s;
  }

  .rect2 {
    animation: ${dash} 3s linear forwards;
    animation-delay: 0.3s;
  }

  // 920px 반응형
  @media only screen and (max-width: 920px) {
    .lineSvg {
      width: 150%;
    }
  }

  // 720px
  @media only screen and (max-width: 720px) {
    .lineSvg {
      width: 180%;
    }
  }

  // 600px
  @media only screen and (max-width: 600px) {
    .lineSvg {
      width: 230%;
    }
  }
`;
