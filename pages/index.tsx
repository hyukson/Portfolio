import type { NextPage } from "next";
import Head from "next/head";

import Visual from "../components/atoms/Visual";
import HeaderNav from "../components/molecules/HeaderNav";

import AboutMe from "../components/organisms/AboutMe";

// 아이콘
import profileIcon from "../public/assets/icons/profile.png";
import careerIcon from "../public/assets/icons/career.png";
import licencsIcon from "../public/assets/icons/licencs.png";

import SkillsContent from "../components/molecules/SkillsContent";
import ProjectContent from "../components/molecules/ProjectContent";

const Home: NextPage = () => {
  const NavList = ["intro", "about me", "skills", "project"];

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
      items: [
        {
          title: "HTML",
          src: "/assets/images/skills/html.png",
          content:
            "기능경기대회를 준비하는 과정에서 HTML를 꾸준히 공부하였고, 반응형 웹사이트에 적합한 구조를 구성할 수 있습니다.",
          skill: 90,
        },
        {
          title: "CSS",
          src: "/assets/images/skills/css.png",
          content:
            "CSS를 사용한 다양한 반응형 레이아웃 구현이 가능하며, 애니메이션 기능을 구현할 수 있습니다.",
          skill: 90,
        },
        {
          title: "JavaScript",
          src: "/assets/images/skills/js.png",
          content:
            "ES6 문법을 사용하여 다양한 기능을 구현, 활용할 수 있으며 해당 언어를 통해 기능 경기대회에서 우수한 성적을 거둔 경험이 있습니다.",
          skill: 90,
        },
        {
          title: "TypeScript",
          src: "/assets/images/skills/typescript.png",
          content:
            "상속과 인터페이스를 사용할 수 있으며, type을 다룰 수 있습니다. 다양한 React, Next.js 프로젝트에서 Typescript 기반으로 기능을 구현한 경험이 있습니다.",
          skill: 70,
        },
        {
          title: "JQUERY",
          src: "/assets/images/skills/jquery.png",
          content:
            "Jquery를 이용한 다양한 기능, DOM 객체 활용과 이벤트 속성을 관리할 수 있습니다.",
          skill: 90,
        },
        {
          title: "SASS",
          src: "/assets/images/skills/sass.png",
          content: "변수 선언과 연산, 상속 등에 대해 이해, 활용할 수 있습니다.",
          skill: 60,
        },
        {
          title: "React",
          src: "/assets/images/skills/react.png",
          content:
            "React Hooks, 컴포넌트, state에 대해 이해와 사용한 경험이 있습니다. ",
          skill: 80,
        },
        {
          title: "Next.js",
          src: "/assets/images/skills/next_js.png",
          content:
            "Next.js를 활용하여 다양한 페이지를 개발한 경험이 있으며, React로 제작한 프로젝트를 Next.js로 리펙토링한 경험이 있습니다.",
          skill: 50,
        },
      ],
    },
    back: {
      title: "Back-end",
      items: [
        {
          title: "PHP",
          src: "/assets/images/skills/php.png",
          content:
            "PHP를 사용하여 Back-end의 기능(데이터베이스 연동, 로그인, 회원가입)등의 기능 구현과 API와 연동, 제작 할 수 있습니다.",
          skill: 80,
        },
        {
          title: "MySQL",
          src: "/assets/images/skills/mysql.png",
          content:
            "MYSQL 활용하여 데이터베이스와 SQL에 대한 이해를 가지고 있으며, SQL를 활용하여 다양한 백엔드 기능을 개발한 경험이 있습니다.",
          skill: 80,
        },
      ],
    },
    moblie: {
      title: "Mobile Application",
      items: [
        {
          title: "Kotlin",
          src: "/assets/images/skills/kotlin.png",
          content:
            "kotlin을 사용하여 리스트 형식의 액티비티를 구성할 수 있으며, API와 연결, 호출이 가능합니다. 라이브러리를 사용하여 다양한 기능 구현을 경험해보았습니다.",
          skill: 40,
        },
        {
          title: "Flutter",
          src: "/assets/images/skills/flutter.png",
          content:
            "flutter을 사용하여 리스트 형식의 액티비티를 구성할 수 있으며, 라이브러리를 사용하여 다양한 기능 구현을 경험해보았습니다.",
          skill: 40,
        },
      ],
    },
  };

  const projectData = [
    {
      title: "포트폴리오",
      description: "저를 소개하기 위해 제작한 포트폴리오용 사이트입니다.",
      image: "/assets/images/portfolio.png",
      mainSkills: [
        "간단한 인적사항과 자기소개",
        "진행한 프로젝트 github 링크",
        "활용 가능한 기술 소개",
      ],
      social: [
        {
          name: "github",
          icon: "/assets/icons/github.png",
          link: "https://github.com/hyukson/portfolio",
        },
      ],
      link: "/",
      useSkills: ["react", "TypeScript", "SCSS", "JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <div className="wrap">
      <Head>
        <title>Portfolio</title>
      </Head>

      <HeaderNav NavList={NavList} />

      <Visual isLineAni={true} />

      <AboutMe AboutData={AboutData} />

      <SkillsContent SkillsData={SkillsData} />

      <ProjectContent projectData={projectData} />
    </div>
  );
};

export default Home;
