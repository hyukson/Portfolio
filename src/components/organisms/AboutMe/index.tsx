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
        <SectionTitle title="ABOUT ME" color="#333" />

        <div className="aboutWrap">
          {/* <div className="userImage">
            <img src="/Portfolio/assets/images/화면2.png" alt="Alt Name" />
          </div> */}

          <AboutDetail item={AboutData.PROFILE} />
          <AboutDetail item={AboutData.CAREER} />
          <AboutDetail item={AboutData.LICENCS} />

          <h2>마우스를 올려 자세한 내용을 확인해보세요!</h2>
        </div>
      </Rap>
    </AboutMeStyled>
  );
};

export default AboutMe;
