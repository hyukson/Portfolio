import react from "react";
import Image from "next/image";

import { SkillsItemStyled } from "./styled";

interface SkillsItemTypes {
  title: String;
  items: any;
  setSkill: any;
}

const SkillsItem = ({ title, items, setSkill }: SkillsItemTypes) => {
  return (
    <SkillsItemStyled className="skillsItem">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="skillsImage">
        {items.map((item: any, i: any) => (
          <div className="skillsBlock" onMouseOver={() => setSkill(item)}>
            <Image alt="skills" key={i} src={item.src} layout="fill" />
          </div>
        ))}
      </div>
    </SkillsItemStyled>
  );
};

export default SkillsItem;
