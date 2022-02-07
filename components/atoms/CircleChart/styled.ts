import styled, { keyframes } from "styled-components";

const chartKeyframes = keyframes`
  to {
    stroke-dasharray: 0 100;
  }
`;

export const CircleChartStyled = styled.div`
  svg {
    width: 14rem;
    height: 14rem;
  }

  .chart_outer {
    stroke: #efefef;
    stroke-width: 2;
    fill: none;
  }

  .chart_inner {
    stroke-width: 2;
    fill: none;
    stroke: ${(props) => props.theme.subColor};
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;

    &.animate {
      animation: ${chartKeyframes} 1.5s reverse;
    }
  }

  .chart_text > text {
    text-anchor: middle;
    letter-spacing: 0px;
    font-size: 0.2rem;

    :last-child {
      font-weight: 700;
      font-size: 0.22rem;
    }
  }
`;
