import { SocialTypes } from "../../../interfaces/SocialTypes";
import { SocialItemStyled } from "./styled";

const SocialItem = ({ icon, link, content }: SocialTypes) => {
  return (
    <SocialItemStyled>
      <a href={link} className="socialImage">
        <img src={icon} alt="icon" />
      </a>
      <p>{content}</p>
      <a href={link}>Link : {link}</a>
    </SocialItemStyled>
  );
};

export default SocialItem;
