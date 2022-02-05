import { useState } from "react";
import { CircleChartStyled } from "./styled";

import Image from "next/image";

interface CircleChartTypes {
  title: string;
  skill: Number;
  src: any;
}

const CircleChart = ({ title, skill, src }: CircleChartTypes) => {
  return (
    <CircleChartStyled>
      <svg
        className="chart"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        width="14vw"
        height="14vw"
      >
        <circle className="chart_outer" cx="16" cy="16" r="15"></circle>

        <circle
          className="chart_inner"
          stroke-dasharray={skill + ",100"}
          cx="16"
          cy="16"
          r="15"
        ></circle>

        <image x={10} y={5} width={12} height={12} href={src} />

        <g className="chart_text">
          <text x="16" y="21" alignment-baseline="central">
            {title}
          </text>
          <text x="16" y="25" alignment-baseline="central">
            {skill + "%"}
          </text>
        </g>
      </svg>
    </CircleChartStyled>
  );
};

export default CircleChart;
