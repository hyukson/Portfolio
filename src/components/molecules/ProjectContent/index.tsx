import { ProjectItemTypes } from "../../../interfaces/ProjectTypes";
import ProjectItem from "../../atoms/ProjectItem";

import Rap from "../../atoms/Rap";
import SectionTitle from "../../atoms/SectionTitle";

import { ProjectContentStyled } from "./styled";

interface ProjectContentTypes {
  projectData: ProjectItemTypes[];
}

const ProjectContent = ({ projectData }: ProjectContentTypes) => {
  return (
    <ProjectContentStyled>
      <Rap>
        <SectionTitle title="PROJECT" color="#f0f0fa" />

        {projectData.map((item: any, i: any) => (
          <ProjectItem {...item} key={i} />
        ))}
      </Rap>
    </ProjectContentStyled>
  );
};

export default ProjectContent;
