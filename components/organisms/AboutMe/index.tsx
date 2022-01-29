import React from "react";
import Image from "next/image";

import { AboutMeStyled } from "./styled";

import userImage from "../../../assets/images/캬트.png";

import SessionTitle from "../../atoms/SessionTitle";

import AboutDetail from "../../molecules/AboutDetail";

import profileIcon from "../../../assets/icons/profile.png";
import careerIcon from "../../../assets/icons/career.png";
import licencsIcon from "../../../assets/icons/licencs.png";

const AboutMe = () => {
  const AboutData = {
    PROFILE: {
      title: "PROFILE",
      icon: {
        src: profileIcon,
        width: profileIcon.width / 5,
        height: profileIcon.height / 5,
      },
      list: [
        { title: "이름", content: "장혁수" },
        {
          title: "나이",
          content: `${new Date().getFullYear() - 2003}세 (2004-01-03)`,
        },
        { title: "주소지", content: "경기도 안산시" },
        { title: "연락처", content: "010-7255-8076" },
        { title: "E-mail", content: "hyuksoo128@gmail.com" },
      ],
    },

    CAREER: {
      title: "CAREER",
      icon: {
        src: careerIcon,
        width: careerIcon.width / 7,
        height: careerIcon.height / 7,
      },
      list: [
        {
          title: "2022",
          content:
            "2022 상하이 국제올림픽 국가대표 선발전 모바일 앱 개발 출전 (2위)",
        },
        {
          title: "2021",
          content:
            "2021 경기도 기능경기대회 금상 (1위) \n 2021 전국 기능경기대회 은상 (2위)",
        },
      ],
    },

    LICENCS: {
      title: "LICENCS",
      icon: {
        src: licencsIcon,
        width: licencsIcon.width / 7,
        height: licencsIcon.height / 7,
      },
      list: [
        { title: "정보처리 기능사" },
        { title: "웹디자인 기능사" },
        { title: "그래픽기술자격(GTQ) 1급" },
      ],
    },
  };

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
