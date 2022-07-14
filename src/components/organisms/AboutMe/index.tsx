import React from "react";

import { AboutMeStyled } from "./styled";

// components
import SectionTitle from "../../atoms/SectionTitle";
import Rap from "../../atoms/Rap";

interface AboutMeTypes {
  AboutData: any;
}

const AboutMe = ({ AboutData }: AboutMeTypes) => {
  return (
    <AboutMeStyled>
      <Rap>
        <SectionTitle title="ABOUT ME" color="#f0f0fa" />

        <div className="cards_inner">
          <div className="wrap">
            <div className="card_inner"></div>
            <div className="card_inner"></div>
            <div className="card_inner"></div>
            <div className="card_inner"></div>
          </div>
        </div>

        <div className="aboutWrap">
          <h2>마우스를 올려 자세한 내용을 확인해보세요!</h2>
        </div>
      </Rap>
    </AboutMeStyled>
  );
};

export default AboutMe;
