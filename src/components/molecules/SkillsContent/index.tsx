import { useState } from "react";

import Rap from "../../atoms/Rap";
import SectionTitle from "../../atoms/SectionTitle";

import { SkillsContentStyled } from "./styled";

interface SkillsContentTypes {
  SkillsData: any;
}

const SkillsContent = ({ SkillsData }: SkillsContentTypes) => {
  const types = Object.keys(SkillsData);

  const [category, setCategory] = useState(types[0]);

  const skill = SkillsData[category].items;

  return (
    <SkillsContentStyled>
      <Rap>
        <SectionTitle title="SKILLS" />
        
        <div className="bookshelf">
          <div className="book"></div>

          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
        </div>
      </Rap>
    </SkillsContentStyled>
  );
};

export default SkillsContent;
