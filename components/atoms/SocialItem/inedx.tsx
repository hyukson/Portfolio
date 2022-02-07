import react from "react";

import { SocialItemStyled } from "./styled";

interface SocialItemTypes {
  icon: string;
  link: string;
  content: string;
}

const SocialItem = ({ icon, link, content }: SocialItemTypes) => {
  return (
    <SocialItemStyled>
      <div className="socialImage">
        <img src={icon} alt="#" />
      </div>
      <p>{content}</p>
      <a href={link}>Link : {link}</a>
    </SocialItemStyled>
  );
};

export default SocialItem;
