import react from "react";

import Image from "next/image";

import { ProjectItemStyled } from "./styled";

interface ProjectItemTypes {
  title: string;
  description: string;
  image: string;
  mainSkills: Array<string>;
  social: any;
  link: string;
  useSkills: Array<string>;
}

const ProjectItem = ({
  title,
  description,
  image,
  mainSkills,
  social,
  link,
  useSkills,
}: ProjectItemTypes) => {
  return (
    <ProjectItemStyled>
      <div className="projectImage">
        <Image src={image} layout="fill" alt="projectImage" objectFit="cover" />
      </div>

      <div className="projectContent">
        <div className="name">{title}</div>
        <div className="description">{description}</div>
        <div className="mainSkills">
          <div className="title">주요 기능</div>

          {mainSkills.map((item: any) => (
            <p>{item}</p>
          ))}
        </div>
        <div className="useSkills">
          <div className="title">사용한 기술</div>

          <div className="box">
            {useSkills.map((item: any) => (
              <span>{item}</span>
            ))}
          </div>
        </div>
        <div className="social">
          <a href={link} target="_blank" className="btn">
            웹 사이트 바로가기
          </a>

          {social.map((item: any) => (
            <a href={item.link} target="_blank" className="btn">
              {item.icon && <img src={item.icon} alt="icon" />}
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </ProjectItemStyled>
  );
};

export default ProjectItem;
