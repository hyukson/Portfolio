import { useState } from "react";

import Rap from "../../atoms/Rap";
import SessionTitle from "../../atoms/SessionTitle";
import SkillsItem from "../../atoms/SkillsItem";
import CircleChart from "../../atoms/CircleChart";

import Image from "next/image";

import { SkillsContentStyled } from "./styled";

interface SkillsContentTypes {
  SkillsData: any;
}

const SkillsContent = ({ SkillsData }: SkillsContentTypes) => {
  const [skill, setSkill] = useState(SkillsData.front.items[0]);

  console.log(skill);

  return (
    <SkillsContentStyled>
      <Rap>
        <SessionTitle title="SKILLS" />

        <div className="flex">
          <SkillsItem skill={skill} setSkill={setSkill} {...SkillsData.front} />

          <div className="sb">
            <SkillsItem
              skill={skill}
              setSkill={setSkill}
              {...SkillsData.back}
            />
            <SkillsItem
              skill={skill}
              setSkill={setSkill}
              {...SkillsData.moblie}
            />
          </div>

          {/* 클릭 시 상세보기 */}
          <div className="infoView">
            <div className="title">
              <h3>저의 SKILL은...</h3>
            </div>

            <div className="artImage">
              <Image
                alt="artBoard"
                src={skill.src}
                layout="fill"
                objectFit="scale-down"
              />
            </div>

            <p>{skill.content}</p>

            <CircleChart {...skill} />
          </div>
        </div>
      </Rap>
    </SkillsContentStyled>
  );
};

export default SkillsContent;
