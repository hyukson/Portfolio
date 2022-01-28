import React from "react";
import Image from "next/image";

import { AboutMeStyled } from "./styled";
import userImage from "../../../assets/images/화면 캡처 2021-01-25 160229.jpg";

import SessionTitle from "../../atoms/SessionTitle";

import AboutDetail from "../../molecules/AboutDetail";

import profileIcon from "../../../assets/icons/profile.png";

const AboutMe = () => {
  const tmpData = {
    PROFILE: {
      title: "PROFILE",
      icon: { src: profileIcon, width: 555 / 4, height: 450 / 4 },
      list: [{ title: "Name", content: "장혁수" }],
    },
  };

  return (
    <AboutMeStyled>
      <SessionTitle title="ABOUT ME" color="#444" />

      <div className="aboutWrap">
        <div className="userImage">
          <Image src={userImage} alt="Alt Name" layout="fill" />
        </div>

        <AboutDetail item={tmpData.PROFILE} />
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;
