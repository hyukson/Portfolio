import React from "react";

import { LineAniStyled } from "./styled";

const LineAni = () => {
  return (
    <LineAniStyled>
      <svg
        className="lineSvg"
        height="1060"
        xmlns="http://w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 120 120"
      >
        <polyline className="rect1" points="100,-10 40,125" stroke-width="10" />
        <polyline
          className="rect2"
          points="182,-10 90,200"
          stroke-width="130"
        />
        <polyline className="rect3" points="45,115 -80,115" stroke-width="10" />
      </svg>
    </LineAniStyled>
  );
};

export default LineAni;
