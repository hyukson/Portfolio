import React from "react";

import Introduction from "./components/molecules/Introduction";
import HeaderNav from "./components/molecules/HeaderNav";

import AboutMe from "./components/organisms/AboutMe";

import SkillsContent from "./components/molecules/SkillsContent";
import ProjectContent from "./components/molecules/ProjectContent";
import ContactContent from "./components/molecules/ContactContent";
import Visual from "./components/organisms/Visual";

function App() {
  const NavList = ["intro", "about me", "skills", "project", "Contact"];

  // about
  const AboutData = {
    LICENCS: {
      title: "LICENSES",
      icon: {
        src: "/Portfolio/assets/icons/licencs.png",
      },
      list: [
        { title: "정보처리기능사" },
        { title: "정보기기운용기능사" },
        { title: "웹디자인기능사" },
        { title: "그래픽기술자격(GTQ) 1급" },
      ],
    },

    CAREER: {
      title: "CAREER",
      icon: {
        src: "/Portfolio/assets/icons/career.png",
      },
      list: [
        {
          title: "2022",
          content:
            "2022 상하이 국제올림픽 국가대표 선발전 모바일 앱 개발 2위 \n 2022 제2회 모바일 앱 개발 민간기능경기대회 은상 (2위)",
        },
        {
          title: "2021",
          content:
            "2021 경기도 기능경기대회 금상 (1위) \n 2021 전국 기능경기대회 은상 (2위)",
        },
      ],
    },

    PROFILE: {
      title: "PROFILE",
      icon: {
        src: "/Portfolio/assets/icons/profile.png",
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
  };

  // skills
  const SkillsData = {
    Front: {
      title: "Front-end",
      items: [
        {
          title: "HTML",
          src: "/Portfolio/assets/images/skills/html.png",
          useSkill: ["INPUT, SELECT, FROM 등을 사용한 폼을 구현할 수 있습니다.", "반응형 웹사이트에 적합한 구조를 구성하고 구현할 수 있습니다."],
          content:
            "기능경기대회를 준비하는 과정에서 HTML를 꾸준히 공부하였고, 반응형 웹사이트에 적합한 구조를 구성할 수 있습니다.",
        },
        {
          title: "CSS",
          src: "/Portfolio/assets/images/skills/css.png",
          useSkill: [],
          content:
            "CSS를 사용한 다양한 반응형 레이아웃 구현이 가능하며, 애니메이션 기능을 구현할 수 있습니다.",
        },
        {
          title: "JavaScript",
          src: "/Portfolio/assets/images/skills/js.png",
          useSkill: [],
          content:
            "ES6 문법을 사용하여 다양한 기능을 구현, 활용할 수 있으며 해당 언어를 통해 기능 경기대회에서 우수한 성적을 거둔 경험이 있습니다.",
        },
        {
          title: "TypeScript",
          src: "/Portfolio/assets/images/skills/typescript.png",
          useSkill: [],
          content:
            "상속과 인터페이스를 사용할 수 있으며, type을 다룰 수 있습니다. 다양한 React, Next.js 프로젝트에서 Typescript 기반으로 기능을 구현한 경험이 있습니다.",
        },
        {
          title: "JQUERY",
          src: "/Portfolio/assets/images/skills/jquery.png",
          useSkill: [],
          content:
            "Jquery를 이용한 다양한 기능, DOM 객체 활용과 이벤트 속성을 관리할 수 있습니다.",
        },
        {
          title: "SASS",
          src: "/Portfolio/assets/images/skills/sass.png",
          useSkill: [],
          content: "변수 선언과 연산, 상속 등에 대해 이해, 활용할 수 있습니다.",
        },
        {
          title: "React",
          src: "/Portfolio/assets/images/skills/react.png",
          useSkill: [],
          content:
            "React Hooks, 컴포넌트, state에 대해 이해와 사용한 경험이 있습니다. ",
        },
        {
          title: "Next.js",
          src: "/Portfolio/assets/images/skills/next_js.png",
          useSkill: [],
          content:
            "Next.js를 활용하여 다양한 페이지를 개발한 경험이 있으며, React로 제작한 프로젝트를 Next.js로 리펙토링한 경험이 있습니다.",
        },
      ],
    },
    Back: {
      title: "Back-end",
      items: [
        {
          title: "PHP",
          src: "/Portfolio/assets/images/skills/php.png",
          useSkill: [],
          content:
            "PHP를 사용하여 Back-end의 기능(데이터베이스 연동, 로그인, 회원가입)등의 기능 구현과 API와 연동, 제작 할 수 있습니다.",
        },
        {
          title: "MySQL",
          src: "/Portfolio/assets/images/skills/mysql.png",
          useSkill: [],
          content:
            "MYSQL 활용하여 데이터베이스와 SQL에 대한 이해를 가지고 있으며, SQL를 활용하여 다양한 백엔드 기능을 개발한 경험이 있습니다.",
        },
        {
          title: "Node.js",
          src: "/Portfolio/assets/images/skills/node.png",
          useSkill: [],
          content:
            "MYSQL 활용하여 데이터베이스와 SQL에 대한 이해를 가지고 있으며, SQL를 활용하여 다양한 백엔드 기능을 개발한 경험이 있습니다.",
        },
      ],
    },
    // Moblie: {
    //   title: "Mobile Application",
    //   items: [
    //     {
    //       title: "Kotlin",
    //       src: "/Portfolio/assets/images/skills/kotlin.png",
            // useSkill: [],
    //       content:
    //         "kotlin을 사용하여 리스트 형식의 액티비티를 구성할 수 있으며, API와 연결, 호출이 가능합니다. 라이브러리를 사용하여 다양한 기능 구현을 경험했습니다.",
    //     },
    //     {
    //       title: "Flutter",
    //       src: "/Portfolio/assets/images/skills/flutter.png",
              // useSkill: [],
    //       content:
    //         "flutter을 사용하여 리스트 형식의 액티비티를 구성할 수 있으며, 라이브러리를 사용하여 다양한 기능 구현을 경험해보았습니다.",
    //     },
    //   ],
    // },
  };

  // Project
  const projectData = [
    {
      title: "포트폴리오",
      description: "저를 소개하기 위해 제작한 포트폴리오용 사이트입니다.",
      image: "/Portfolio/assets/images/portfolio.png",
      mainSkills: [
        "간단한 인적사항과 자기소개",
        "진행한 프로젝트 github 링크",
        "활용 가능한 기술 소개",
      ],
      social: [
        {
          name: "github",
          icon: "/Portfolio/assets/icons/github.png",
          link: "https://github.com/hyukson/Portfolio",
        },
      ],
      link: "https://hyukson.github.io/Portfolio/",
      useSkills: ["react", "TypeScript", "SCSS", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "영화 추천 사이트",
      description:
        "영화 추천을 받고 싶은 분들을 위해 제작한 Next.js를 사용한 추천사이트입니다.",
      image: "/Portfolio/assets/images/movieInfo.png",
      mainSkills: [
        "다양한 최신 영화의 추천 기능",
        "검색을 통한 정보 찾기",
        "명작 영화를 소개",
      ],
      social: [
        {
          name: "github",
          icon: "/Portfolio/assets/icons/github.png",
          link: "https://github.com/hyukson/MovieInfo",
        },
      ],
      link: "https://main.d5d7mrdnguzvo.amplifyapp.com/",
      useSkills: ["Next.js", "TypeScript", "SCSS", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "동물 달리기 내기 게임",
      description: "동물들이 달리며 내기의 순위를 정해주는 사이트입니다.",
      image: "/Portfolio/assets/images/runGame.png",
      mainSkills: [
        "직접 제작한 귀여운 동물과 함께 즐기는 내기 게임",
        "최대 4명까지의 동물을 선택 가능",
        "빠른 내기 진행이 가능",
      ],
      social: [
        {
          name: "github",
          icon: "/Portfolio/assets/icons/github.png",
          link: "https://github.com/hyukson/RunGame",
        },
      ],
      link: "https://main.dff64qk22x1jb.amplifyapp.com/",
      useSkills: [
        "JavaScript",
        "HTML",
        "CSS",
        "JQuery",
        "Illustrator",
        "PhotoShop",
      ],
    },
    {
      title: "테트리스 게임",
      description: "테트리스 게임을 캔버스를 이용한 JS코드로 제작해보았습니다.",
      image: "/Portfolio/assets/images/tetris.png",
      mainSkills: [
        "캔버스와 JS로 제작한 테트리스 게임",
        "블럭을 최대한 많이 지워 점수 갱신하기",
        "테트리스 조작키를 그대로 계승",
      ],
      social: [
        {
          name: "github",
          icon: "/Portfolio/assets/icons/github.png",
          link: "https://github.com/hyukson/Tetris",
        },
      ],
      link: "https://main.d29a2g0rjiyzes.amplifyapp.com/",
      useSkills: ["JavaScript", "HTML", "CSS"],
    },
  ];

  // Conatct
  const ContactData = [
    {
      title: "연락처",
      icon: "/Portfolio/assets/icons/phone.png",
      content: "010-7255-8076",
    },
    {
      title: "이메일",
      icon: "/Portfolio/assets/icons/email.png",
      content: "hyuksoo128@gmail.com",
    },
  ];

  const socialData = [
    {
      icon: "/Portfolio/assets/icons/github_title.png",
      link: "https://github.com/hyukson",
      content: "제작한 소스 코드를 저장하는 주 공간입니다.",
    },
    // {
    //   icon: "/Portfolio/assets/icons/tistory_title.png",
    //   link: "https://gurtn.tistory.com",
    //   content: "코드와 관련된 지식 공유 목적의 블로그입니다.",
    // },
  ];

  return (
    <div className="wrap">
      <HeaderNav NavList={NavList} />

      <Visual />

      <Introduction />

      <AboutMe AboutData={AboutData} />

      <SkillsContent SkillsData={SkillsData} />

      <ProjectContent projectData={projectData} />

      <ContactContent ContactData={ContactData} socialData={socialData} />
    </div>
  );
}

export default App;
