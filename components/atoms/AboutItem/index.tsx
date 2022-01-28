import React from "react";

import { AboutItemStyled } from "./styled";

interface AboutItemTypes {
  title?: String;
  content?: String;
}

const AboutItem = ({ title, content }: AboutItemTypes) => {
  return (
    <AboutItemStyled>
      <div>
        <div className="aboutItemTitle">
          <div className="circle"></div>
          <h2>{title}</h2>
        </div>

        <div className="aboutItemContent">{content}</div>
      </div>
    </AboutItemStyled>
  );
};

export default AboutItem;
