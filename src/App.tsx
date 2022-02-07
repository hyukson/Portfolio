import React from "react";

import Visual from "./components/atoms/Visual";
import HeaderNav from "./components/molecules/HeaderNav";

import AboutMe from "./components/organisms/AboutMe";

import SkillsContent from "./components/molecules/SkillsContent";
import ProjectContent from "./components/molecules/ProjectContent";
import ContactContent from "./components/molecules/ContactContent";

function App() {
  const NavList = ["intro", "about me", "skills", "project", "Contact"];

  // about
  const AboutData = {
    PROFILE: {
      title: "PROFILE",
      icon: {
        src: "/assets/icons/profile.png",
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
        src: "/assets/icons/career.png",
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
        src: "/assets/icons/licencs.png",
      },
      list: [
        { title: "정보처리 기능사" },
        { title: "웹디자인 기능사" },
        { title: "그래픽기술자격(GTQ) 1급" },
      ],
    },
  };

  // skills
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

  // Project
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
    {
      title: "카드 짝 맞추기",
      description: "카드를 뒤집어 같은 뒷면을 찾아 맞추는 게임입니다.",
      image: "/assets/images/card-match.png",
      mainSkills: [
        "카드를 클릭해 뒷면을 확인",
        "같은 짝을 맞추는 게임",
        "난이도를 선택 가능",
      ],
      social: [
        {
          name: "github",
          icon: "/assets/icons/github.png",
          link: "https://github.com/hyukson/match-card",
        },
      ],
      link: "/",
      useSkills: ["JavaScript", "HTML", "CSS"],
    },
  ];

  // Conatct
  const ContactData = [
    {
      title: "연락처",
      icon: "assets/icons/phone.png",
      content: "010-7255-8076",
    },
    {
      title: "이메일",
      icon: "assets/icons/email.png",
      content: "hyuksoo128@gmail.com",
    },
  ];

  const socialData = [
    {
      icon: "/assets/icons/github_title.png",
      link: "https://github.com/hyukson",
      content: "제작한 소스 코드를 저장하는 주 공간입니다.",
    },
    {
      icon: "/assets/icons/tistory_title.png",
      link: "https://github.com/hyukson",
      content: "코드와 관련된 지식 공유 목적의 블로그입니다.",
    },
  ];

  return (
    <div className="wrap">
      <HeaderNav NavList={NavList} />

      <Visual isLineAni={true} />

      <AboutMe AboutData={AboutData} />

      <SkillsContent SkillsData={SkillsData} />

      <ProjectContent projectData={projectData} />

      <ContactContent ContactData={ContactData} socialData={socialData} />
    </div>
  );
}

export default App;
