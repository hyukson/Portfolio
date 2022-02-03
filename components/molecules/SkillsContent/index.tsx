import readt from "react";
import Rap from "../../atoms/Rap";
import SessionTitle from "../../atoms/SessionTitle";
import SkillsItem from "../../atoms/SkillsItem";
import { SkillsContentStyled } from "./styled";

interface SkillsContentTypes {
  SkillsData: any;
}

const SkillsContent = ({ SkillsData }: SkillsContentTypes) => {
  return (
    <SkillsContentStyled>
      <Rap>
        <SessionTitle title="SKILLS" />

        <div className="flex">
          <SkillsItem {...SkillsData.front} />

          <div>
            <SkillsItem {...SkillsData.back} />
            <SkillsItem {...SkillsData.moblie} />
          </div>
        </div>
      </Rap>
    </SkillsContentStyled>
  );
};

export default SkillsContent;
