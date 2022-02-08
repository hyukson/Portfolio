import React from "react";

import { AboutMeStyled } from "./styled";

// components
import SectionTitle from "../../atoms/SectionTitle";
import AboutDetail from "../../molecules/AboutDetail";
import Rap from "../../atoms/Rap";

interface AboutMeTypes {
  AboutData: any;
}

const AboutMe = ({ AboutData }: AboutMeTypes) => {
  return (
    <AboutMeStyled>
      <Rap>
        <SectionTitle title="ABOUT ME" color="#444" />

        <div className="aboutWrap">
          <div className="userImage">
            <img src="./portfolio/assets/images/화면.png" alt="Alt Name" />
          </div>

          <div className="subAbout">
            <AboutDetail item={AboutData.PROFILE} />

            <div className="VerticalAbout">
              <AboutDetail item={AboutData.CAREER} />
              <AboutDetail item={AboutData.LICENCS} />
            </div>
          </div>
        </div>
      </Rap>
    </AboutMeStyled>
  );
};

export default AboutMe;
