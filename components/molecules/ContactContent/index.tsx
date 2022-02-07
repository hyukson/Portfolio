import react from "react";

import Rap from "../../atoms/Rap";

import SectionTitle from "../../atoms/SectionTitle";

import SocialItem from "../../atoms/SocialItem/inedx";
import ContentItem from "../../atoms/ContentItem/inedx";

import { ContactContentStyled } from "./styled";

interface ContactContentTypes {}

const ContactContent = ({}: ContactContentTypes) => {
  const data = [
    { title: "PHONE", content: "010-7255-8076" },
    { title: "EMAIL", content: "hyuksoo128@gmail.com" },
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
      </Rap>
    </ContactContentStyled>
  );
};

export default ContactContent;
