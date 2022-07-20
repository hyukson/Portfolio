import { useState } from "react";
import Rap from "../../atoms/Rap";
import SectionTitle from "../../atoms/SectionTitle";
import SkillBook from "../../atoms/SkillBook";

import { SkillsContentStyled } from "./styled";

interface SkillsContentTypes {
  SkillsData: any;
}

const SkillsContent = ({ SkillsData }: SkillsContentTypes) => {
  const [skills, setSkills] = useState([...SkillsData.Front.items, ...SkillsData.Back.items]);

  return (
    <SkillsContentStyled>
      <Rap>
        <SectionTitle title="SKILLS" />
        
        <div className="bookshelf">
          {skills.map((v: any, key: number) => (
            <SkillBook key={key} item={v}></SkillBook>
          ))}
        </div>
      </Rap>
    </SkillsContentStyled>
  );
};

export default SkillsContent;
