import { AboutMeStyled } from "./styled";

// components
import SectionTitle from "../../atoms/SectionTitle";
import Rap from "../../atoms/Rap";

import CodeBlock from "../../molecules/CodeBlock";

const AboutMe = () => {
  const codes: string[] = [
    "<b>안녕하세요. 저의 포트폴리오에 오신 것을 환영합니다!</b>",
    "",
    "공부하고 배운점을 <span class='pink'>공유하고 기록</span> 하는 것을 좋아하는 장혁수입니다.", 
    "무언가를 끊임없이 기획하고 아이디어 내는, <span class='green'>프론트엔드 개발자</span>를 향해 달리고 있습니다.",
    "개발자로써 문제에 부딪혀도 분석하고 <span class='skyblue'>해결할 수 있는 능력</span>을 키우기 위해서 노력하고 있습니다.",
    "",
    "&lt<span class='script'>script</span>&gt",
    "  <span class='gray'>// PROFILE</span>",
    "  <span class='skyblue'>const</span> PROFILE <span class='script'>=</span> {",
    "      이름:  <span class='lightGreen'>' 장혁수 '</span>,",
    `      나이:  <span class='lightGreen'>' ${new Date().getFullYear() - 2003}세 '</span>,`,
    "      주소지:  <span class='lightGreen'>' 경기도 안산시 '</span>,",
    "      연락처:  <span class='lightGreen'>' 010-7255-8076 '</span>,",
    "      이메일:  <span class='lightGreen'>' hyuksoo128@gmail.com '</span>,",
    "    }",
    "&lt/<span class='script'>script</span>&gt",
  ];

  return (
    <AboutMeStyled>
      <Rap>
        <SectionTitle title="ABOUT ME" color="#f0f0fa" />

        <CodeBlock codes={codes}></CodeBlock>
      </Rap>
    </AboutMeStyled>
  );
};

export default AboutMe;
