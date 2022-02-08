import Rap from "../../atoms/Rap";

import SectionTitle from "../../atoms/SectionTitle";

import SocialItem from "../../atoms/SocialItem/inedx";
import ContentItem from "../../atoms/ContentItem/inedx";

import { ContactContentStyled } from "./styled";

interface ContactContentTypes {
  ContactData: any;
  socialData: any;
}

const ContactContent = ({ ContactData, socialData }: ContactContentTypes) => {
  return (
    <ContactContentStyled>
      <Rap>
        <SectionTitle title="CONTACT" />

        <div className="flex">
          <ContentItem data={ContactData} />

          {socialData.map((item: any, i: number) => (
            <SocialItem {...item} key={i} />
          ))}
        </div>

        <div className="copyright">
          <p>Copyright 2022. 장혁수 all rights reserved.</p>
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
