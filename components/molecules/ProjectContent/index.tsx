import react from "react";
import ProjectItem from "../../atoms/ProjectItem";

import Rap from "../../atoms/Rap";
import SessionTitle from "../../atoms/SessionTitle";

import { ProjectContentStyled } from "./styled";

interface ProjectContentTypes {
  projectData: any;
}

const ProjectContent = ({ projectData }: ProjectContentTypes) => {
  return (
    <ProjectContentStyled>
      <Rap>
        <SessionTitle title="PROJECT" color="#444" />

        {projectData.map((item: any, i: any) => (
          <ProjectItem {...item} key={i} />
        ))}
      </Rap>
    </ProjectContentStyled>
  );
};

export default ProjectContent;
