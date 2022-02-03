import type { NextPage } from "next";
import Head from "next/head";

import Visual from "../components/atoms/Visual";
import SideNavigation from "../components/molecules/SideNavigation";

import AboutMe from "../components/organisms/AboutMe";

// 아이콘
import profileIcon from "../public/assets/icons/profile.png";
import careerIcon from "../public/assets/icons/career.png";
import licencsIcon from "../public/assets/icons/licencs.png";

// SKILLS Icon
import html from "../public/assets/images/skills/html.png";
import css from "../public/assets/images/skills/css.png";
import js from "../public/assets/images/skills/js.png";
import jquery from "../public/assets/images/skills/jquery.png";
import sass from "../public/assets/images/skills/sass.png";
import react from "../public/assets/images/skills/react.png";
import next_js from "../public/assets/images/skills/next_js.png";
import php from "../public/assets/images/skills/php.png";
import mysql from "../public/assets/images/skills/mysql.png";
import kotlin from "../public/assets/images/skills/kotlin.png";
import flutter from "../public/assets/images/skills/flutter.png";

import SkillsContent from "../components/molecules/SkillsContent";

const Home: NextPage = () => {
  const NavList = ["INTRO", "ABOUT ME", "SKILLS"];

  const AboutData = {
    PROFILE: {
      title: "PROFILE",
      icon: {
        src: profileIcon,
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
      },
      list: [
        { title: "정보처리 기능사" },
        { title: "웹디자인 기능사" },
        { title: "그래픽기술자격(GTQ) 1급" },
      ],
    },
  };

  const SkillsData = {
    front: {
      title: "Front-end",
      images: [html, css, js, jquery, sass, react, next_js],
    },
    back: {
      title: "Back-end",
      images: [php, mysql],
    },
    moblie: {
      title: "Mobile Application",
      images: [kotlin, flutter],
    },
  };

  return (
    <div className="wrap">
      <Head>
        <title>Portfolio</title>
      </Head>

      <SideNavigation NavList={NavList} />

      <Visual isLineAni={true} />

      <AboutMe AboutData={AboutData} />

      <SkillsContent SkillsData={SkillsData} />
    </div>
  );
};

export default Home;
