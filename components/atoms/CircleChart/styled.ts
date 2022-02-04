import styled, { keyframes } from "styled-components";

const chartKeyframes = keyframes`
  to {
    stroke-dasharray: 0 100;
  }
`;

export const CircleChartStyled = styled.div`
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
    animation: ${chartKeyframes} 1.5s reverse;
    transform: rotate(-90deg);
    transform-origin: center;
  }

  .chart_text > text {
    text-anchor: middle;
    letter-spacing: 0px;
    font-size: 0.3rem;
  }
`;
