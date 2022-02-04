import react from "react";
import Image from "next/image";

import { SkillsItemStyled } from "./styled";

interface SkillsItemTypes {
  title: String;
  items: any;
  setSkill: any;
  skill: any;
}

const SkillsItem = ({ title, items, setSkill, skill }: SkillsItemTypes) => {
  return (
    <SkillsItemStyled>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="skillsImage">
        {items.map((item: any, i: any) => (
          <div
            className={
              "skillsBlock " + (skill.content == item.content && " active")
            }
            onClick={() => setSkill(item)}
          >
            <Image alt="skills" key={i} src={item.src} layout="fill" />
          </div>
        ))}
      </div>
    </SkillsItemStyled>
  );
};

export default SkillsItem;
