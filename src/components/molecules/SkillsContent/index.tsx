import { useEffect, useState } from "react";

import Rap from "../../atoms/Rap";
import SectionTitle from "../../atoms/SectionTitle";
import SkillsItem from "../../atoms/SkillsItem";
import CircleChart from "../../atoms/CircleChart";

import { SkillsContentStyled } from "./styled";

interface SkillsContentTypes {
  SkillsData: any;
}

const SkillsContent = ({ SkillsData }: SkillsContentTypes) => {
  const [skill, setSkill] = useState(SkillsData.front.items[0]);

  return (
    <SkillsContentStyled>
      <Rap>
        <SectionTitle title="SKILLS" />

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

            <div className="chart">
              <CircleChart {...skill} />
            </div>

            <p>{skill.content}</p>
          </div>
        </div>
      </Rap>
    </SkillsContentStyled>
  );
};

export default SkillsContent;
