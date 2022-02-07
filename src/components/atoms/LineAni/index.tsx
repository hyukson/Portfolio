import React from "react";

import { LineAniStyled } from "./styled";

const LineAni = () => {
  return (
    <LineAniStyled>
      <svg
        className="lineSvg"
        height="100vh"
        xmlns="http://w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 120 120"
      >
        <polyline
          className="rect1"
          fill="none"
          points="100,-10 45,115 -70,115"
          stroke-width="10"
        />

        <polyline
          className="rect2"
          points="182,-10 90,200"
          stroke-width="130"
        />
      </svg>
    </LineAniStyled>
  );
};

export default LineAni;
