import readt, { useState } from "react";

import Image from "next/image";

import Rap from "../../atoms/Rap";
import SessionTitle from "../../atoms/SessionTitle";
import SkillsItem from "../../atoms/SkillsItem";

import { SkillsContentStyled } from "./styled";

interface SkillsContentTypes {
  SkillsData: any;
}

const SkillsContent = ({ SkillsData }: SkillsContentTypes) => {
  const [skill, setSkill] = useState(SkillsData.front.items[0]);

  return (
    <SkillsContentStyled>
      <Rap>
        <SessionTitle title="SKILLS" />

        <div className="flex">
          <SkillsItem setSkill={setSkill} {...SkillsData.front} />

          <div>
            <SkillsItem setSkill={setSkill} {...SkillsData.back} />
            <SkillsItem setSkill={setSkill} {...SkillsData.moblie} />
          </div>

          <div className="artBoard">
            <div className="artImage">
              <Image
                alt="artBoard"
                src={skill.src}
                layout="fill"
                objectFit="scale-down"
              />
            </div>
            {skill.content}
          </div>
        </div>
      </Rap>
    </SkillsContentStyled>
  );
};

export default SkillsContent;
