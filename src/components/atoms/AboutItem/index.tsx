import React from "react";

import { AboutItemStyled } from "./styled";

interface AboutItemTypes {
  title?: String;
  content?: String;
}

const AboutItem = ({ title, content }: AboutItemTypes) => {
  return (
    <AboutItemStyled className="aboutItem">
      <div className="aboutItemTitle">
        <div className="circle"></div>
        <h2>{title}</h2>
      </div>

      <div className="aboutItemContent">
        {content?.split("\n").map((item, key) => (
          <p key={key}>- {item}</p>
        ))}
      </div>
    </AboutItemStyled>
  );
};

export default AboutItem;
