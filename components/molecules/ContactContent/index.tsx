import react from "react";

import Rap from "../../atoms/Rap";

import SectionTitle from "../../atoms/SectionTitle";

import SocialItem from "../../atoms/SocialItem/inedx";
import ContentItem from "../../atoms/ContentItem/inedx";

import { ContactContentStyled } from "./styled";

interface ContactContentTypes {}

const ContactContent = ({}: ContactContentTypes) => {
  const data = [
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

  const social = [
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
    <ContactContentStyled>
      <Rap>
        <SectionTitle title="CONTACT" />

        <div className="flex">
          <ContentItem data={data} />

          {social.map((item: any, i: number) => (
            <SocialItem {...item} key={i} />
          ))}
        </div>

        <div className="copyright">
          <p>COPYRIGHT 2022. 장혁수 ALL RIGHTS RESERVED.</p>
          <p>
            본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
          </p>
          <p>
            사용된 일부 이미지 및 폰트 등은 별도의 출처가 있음을 밝혀 드립니다.
          </p>
        </div>
      </Rap>
    </ContactContentStyled>
  );
};

export default ContactContent;
