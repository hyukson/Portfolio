import type { NextPage } from "next";
import Head from "next/head";
import LineAni from "../components/atoms/LineAni";

import Rap from "../components/atoms/Rap";
import Visual from "../components/atoms/Visual";
import SideNavigation from "../components/molecules/SideNavigation";

import AboutMe from "../components/organisms/AboutMe";

// 아이콘
import profileIcon from "../assets/icons/profile.png";
import careerIcon from "../assets/icons/career.png";
import licencsIcon from "../assets/icons/licencs.png";
import SkillsContent from "../components/molecules/SkillsContent";

const Home: NextPage = () => {
  const NavList = ["INTRO", "ABOUT ME", "SKILLS"];

  const AboutData = {
    PROFILE: {
      title: "PROFILE",
      icon: {
        src: profileIcon,
        width: profileIcon.width / 6,
        height: profileIcon.height / 6,
      },
      list: [
        { title: "이름", content: "장혁수" },
        {
          title: "나이",
          content: `${new Date().getFullYear() - 2003}세`,
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
        width: careerIcon.width / 10,
        height: careerIcon.height / 10,
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
        width: licencsIcon.width / 10,
        height: licencsIcon.height / 10,
      },
      list: [
        { title: "정보처리 기능사" },
        { title: "웹디자인 기능사" },
        { title: "그래픽기술자격(GTQ) 1급" },
      ],
    },
  };

  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>

      <SideNavigation NavList={NavList} />

      <LineAni />
      <Rap>
        <Visual />

        <AboutMe AboutData={AboutData} />

        <SkillsContent />
      </Rap>
    </div>
  );
};

export default Home;
