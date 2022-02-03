import react from "react";
import Image from "next/image";

import { SkillsItemStyled } from "./styled";

interface SkillsItemTypes {
  title: String;
  images: any;
}

const SkillsItem = ({ title, images }: SkillsItemTypes) => {
  return (
    <SkillsItemStyled className="skillsItem">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="skillsImage">
        {images.map((item: any, i: any) => (
          <div className="skillsBlock">
            <Image alt="skills" key={i} src={item} layout="fill" />
          </div>
        ))}
      </div>
    </SkillsItemStyled>
  );
};

export default SkillsItem;
