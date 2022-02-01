import readt from "react";
import SessionTitle from "../../atoms/SessionTitle";
import { SkillsContentStyled } from "./styled";

interface SkillsContentTypes {}

const SkillsContent = () => {
  return (
    <SkillsContentStyled>
      <SessionTitle title="SKILLS" />
    </SkillsContentStyled>
  );
};

export default SkillsContent;
