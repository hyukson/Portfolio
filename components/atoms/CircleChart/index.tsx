import { CircleChartStyled } from "./styled";

interface CircleChartTypes {
  title: string;
  skill: Number;
}

const CircleChart = ({ title, skill }: CircleChartTypes) => {
  return (
    <CircleChartStyled>
      <svg
        className={"chart"}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        width="10vw"
        height="10vw"
      >
        <circle className="chart_outer" cx="16" cy="16" r="15"></circle>

        <circle
          className="chart_inner"
          stroke-dasharray={skill + ",100"}
          cx="16"
          cy="16"
          r="15"
        ></circle>

        <g className="chart_text">
          <text x="16" y="15" alignment-baseline="central">
            {title}
          </text>
          <text x="16" y="20" alignment-baseline="central">
            {skill}
          </text>
        </g>
      </svg>
    </CircleChartStyled>
  );
};

export default CircleChart;
