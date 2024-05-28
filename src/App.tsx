import Loader from "./components/atoms/Loader";

import HeaderNav from "./components/molecules/HeaderNav";
import SkillsContent from "./components/molecules/SkillsContent";
import ProjectContent from "./components/molecules/ProjectContent";
import ContactContent from "./components/molecules/ContactContent";
import WeatherBox from "./components/molecules/WeatherBox";

import AboutMe from "./components/organisms/AboutMe";
import Visual from "./components/organisms/Visual";

import { SkillsDataTypes } from "./interfaces/SkillsTypes";
import { SocialTypes } from "./interfaces/SocialTypes";
import { ProjectItemTypes } from "./interfaces/ProjectTypes";

function App() {
  const NavList: string[] = ["visual", "about me", "skills", "project", "Contact"];

  // skills
  const SkillsData: SkillsDataTypes[] = [
    {
      title: "Front-end",
      items: [
        {
          title: "HTML",
          src: "/Portfolio/assets/images/skills/html.png",
          useSkill: ["웹 표준과 웹 접근성을 준수하는 구조설계를 작성할 수 있습니다.", "반응형 웹사이트에 적합한 구조를 구성하고 구현할 수 있습니다."],
          content:
            "기능경기대회를 준비하는 과정에서 HTML를 꾸준히 공부하였고, 반응형 웹사이트에 적합한 구조를 구성할 수 있습니다.",
        },
        {
          title: "CSS",
          src: "/Portfolio/assets/images/skills/css.png",
          useSkill: ["반응형 레이아웃에 맞는 적절한 스타일을 적용할 수 있습니다.", "HTML와 같이 활용하여 효율적인 구조를 사용할 수 있습니다."],
          content:
            "다양한 웹사이트를 구현하는데 CSS를 사용하였고, CSS를 사용한 다양한 반응형 레이아웃 구현이 가능하며, 애니메이션 기능을 구현할 수 있습니다.",
        },
        {
          title: "JavaScript",
          src: "/Portfolio/assets/images/skills/js.png",
          useSkill: ["ES6 문법을 사용한 다양한 기능을 구현할 수 있습니다.", "Promise문을 이용하여 데이터 처리를 할 수 있습니다."],
          content:
            "기능경기대회를 준비하며 구현한 다양한 기능과 백엔드와의 연결, React를 활용한 다양한 작품을 만들 수 있습니다. ",
        },
        {
          title: "TypeScript",
          src: "/Portfolio/assets/images/skills/typescript.png",
          useSkill: ["상속과 인터페이스를 사용할 수 있습니다."],
          content:
            "기존에 지니고 있던 JavaScript 지식에 더해 다양한 타입을 지정할 수 있으며 React, Next.js 프로젝트에서 Typescript 기반으로 기능을 구현한 경험이 있습니다.",
        },
        {
          title: "JQUERY",
          src: "/Portfolio/assets/images/skills/jquery.png",
          useSkill: ["Jquery-ui 기능을 구현 및 응용할 수 있습니다."],
          content:
            "Jquery를 이용한 다양한 기능, DOM 객체 활용과 이벤트 속성을 관리할 수 있습니다.",
        },
        {
          title: "SASS",
          src: "/Portfolio/assets/images/skills/sass.png",
          useSkill: ["SASS를 활용해 페이지를 디자인 할 수 있습니다."],
          content: "변수 선언과 연산, 상속 등에 대해 이해, 활용할 수 있습니다.",
        },
        {
          title: "React",
          src: "/Portfolio/assets/images/skills/react.png",
          useSkill: ["다양한 디자인 패턴을 활용해 React를 사용할 수 있습니다."],
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
    {
      title: "Back-end",
      items: [
        {
          title: "PHP",
          src: "/Portfolio/assets/images/skills/php.png",
          useSkill: ["페이지 구현 및 백엔드 기능을 구현할 수 있습니다."],
          content:
            "PHP를 사용하여 Back-end의 기능(데이터베이스 연동, 로그인, 회원가입)등의 기능 구현과 API와 연동, 제작 할 수 있습니다.",
        },
        {
          title: "MySQL",
          src: "/Portfolio/assets/images/skills/mysql.png",
          useSkill: ["데이터베이스를 구축하여 백엔드와 연결한 경험이 있습니다."],
          content:
            "MYSQL 활용하여 데이터베이스와 SQL에 대한 이해를 가지고 있으며, SQL를 활용하여 다양한 백엔드 기능을 개발한 경험이 있습니다.",
        },
        {
          title: "Node.js",
          src: "/Portfolio/assets/images/skills/node.png",
          useSkill: ["API를 제작하고 다양한 라이브러리를 활용하여 개발을 할 수 있습니다."],
          content:
            "MYSQL 활용하여 데이터베이스와 SQL에 대한 이해를 가지고 있으며, SQL를 활용하여 다양한 백엔드 기능을 개발한 경험이 있습니다.",
        },
      ],
    },
  ];

  // Project
  const projectData: ProjectItemTypes[] = [
    {
      title: "포트폴리오",
      description: "저를 소개하기 위해 제작한 포트폴리오용 사이트입니다.",
      image: "/Portfolio/assets/images/portfolio.png",
      mainSkills: [
        "React와 Typescript를 활용하여 구현하였습니다.",
        "styled-components와 router-dom 라이브러리를 활용하였습니다.",
        "SCSS를 활용하여 반응형 페이지를 구현하였습니다.",
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
        "Next.JS의 Pages 기능을 이용한 페이지를 구현하였습니다.",
        "Movie API와 Axios를 응용하여 구현하였습니다.",
      ],
      social: [
        {
          name: "github",
          icon: "/Portfolio/assets/icons/github.png",
          link: "https://github.com/hyukson/MovieInfo",
        },
      ],
      link: "https://movie-info-mu-roan.vercel.app/",
      useSkills: ["Next.js", "TypeScript", "SCSS", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "다른 색깔 찾기 게임",
      description: "색깔이 다른 박스를 찾아 최대한 오래 버티는 게임입니다.",
      image: "/Portfolio/assets/images/color_diff.png",
      mainSkills: [
        "JS로 구현한 기능을 React로 리펙토리 하였습니다.",
        "useEffect, useCallback, useMemo로 렌더링을 최적화 하였습니다.",
      ],
      social: [
        {
          name: "github",
          icon: "/Portfolio/assets/icons/github.png",
          link: "https://github.com/hyukson/color_diff",
        },
      ],
      link: "https://main.d18xumb8hyzm93.amplifyapp.com/",
      useSkills: ["React", "TypeScript", "SCSS", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "동물 달리기 내기 게임",
      description: "동물들이 달리며 내기의 순위를 정해주는 사이트입니다.",
      image: "/Portfolio/assets/images/runGame.png",
      mainSkills: [
        "Jquery를 이용한 DOM을 활용할 수 있습니다.",
      ],
      social: [
        {
          name: "github",
          icon: "/Portfolio/assets/icons/github.png",
          link: "https://github.com/hyukson/RunGame",
        },
      ],
      link: "https://main.d20gbq82ups5ju.amplifyapp.com/",
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
        "Canavs를 베이스로 JavaScript를 이용하여 제작하였습니다.",
      ],
      social: [
        {
          name: "github",
          icon: "/Portfolio/assets/icons/github.png",
          link: "https://github.com/hyukson/Tetris",
        },
      ],
      link: "https://main.d3ghfd65sa1mqc.amplifyapp.com/",
      useSkills: ["JavaScript", "HTML", "CSS"],
    },
  ];

  // contact
  const socialData: SocialTypes[] = [
    {
      icon: "/Portfolio/assets/icons/github_title.png",
      link: "https://github.com/hyukson",
      content: "제작한 소스 코드를 저장하는 주 공간입니다.",
    },
    {
      icon: "/Portfolio/assets/icons/tistory_title.png",
      link: "https://gurtn.tistory.com",
      content: "기록과 지식 공유 목적의 블로그입니다.",
    },
  ];

  return (
    <div className="wrap">
      <Loader />

      <HeaderNav NavList={NavList} />

      <Visual />

      <WeatherBox />

      <AboutMe />

      <SkillsContent SkillsData={SkillsData} />

      <ProjectContent projectData={projectData} />

      <ContactContent socialData={socialData} />
    </div>
  );
}

export default App;
