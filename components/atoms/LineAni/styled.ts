import styled from "styled-components";

export const LineAniStyled = styled.div`
  .lineSvg {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
  }

  polyline {
    width: 100%;
    height: 100%;
    stroke: ${(props) => props.theme.lineColor};
    stroke-dasharray: 500;
    stroke-dashoffset: 500;
  }

  .rect1 {
    animation: dash 3s linear forwards;
    animation-delay: 0.3s;
  }

  .rect2 {
    animation: dash 2.3s linear forwards;
    animation-delay: 0.3s;
  }

  .rect3 {
    animation: dash 2.5s linear forwards;
    animation-delay: 1.15s;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: 500;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`;
