import { useState } from "react";

import Rap from "../../atoms/Rap";
import SectionTitle from "../../atoms/SectionTitle";
import CircleChart from "../../atoms/CircleChart";

import TagList from "../TagList";

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

        <div className="flex">
          <TagList list={types} category={category} setTag={setCategory} />

          <div className="chartList">
            {skill.map((v: any, i: number) => (
              <div className="chart">
                <CircleChart {...v} key={i} />
              </div>
            ))}
          </div>
        </div>
      </Rap>
    </SkillsContentStyled>
  );
};

export default SkillsContent;
