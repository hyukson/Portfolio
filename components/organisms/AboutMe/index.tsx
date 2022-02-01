import React from "react";
import Image from "next/image";

import { AboutMeStyled } from "./styled";

import userImage from "../../../assets/images/화면 캡처 2021-01-25 160229.jpg";

// components
import SessionTitle from "../../atoms/SessionTitle";
import AboutDetail from "../../molecules/AboutDetail";

interface AboutMeTypes {
  AboutData: any;
}

const AboutMe = ({ AboutData }: AboutMeTypes) => {
  return (
    <AboutMeStyled>
      <SessionTitle title="ABOUT ME" color="#444" />

      <div className="aboutWrap">
        <div className="userImage">
          <Image src={userImage} alt="Alt Name" layout="fill" />
        </div>

        <div className="subAbout">
          <AboutDetail item={AboutData.PROFILE} />

          <div className="VerticalAbout">
            <AboutDetail item={AboutData.CAREER} />
            <AboutDetail item={AboutData.LICENCS} />
          </div>
        </div>
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;
