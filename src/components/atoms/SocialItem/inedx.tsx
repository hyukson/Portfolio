import { SocialItemStyled } from "./styled";

interface SocialItemTypes {
  icon: string;
  link: string;
  content: string;
}

const SocialItem = ({ icon, link, content }: SocialItemTypes) => {
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
