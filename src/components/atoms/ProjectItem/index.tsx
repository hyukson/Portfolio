import { ProjectItemTypes } from "../../../interfaces/ProjectTypes";
import { ProjectItemStyled } from "./styled";

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
        <img src={image} alt="projectImage" />
      </div>

      <div className="projectContent">
        <div className="name">{title}</div>
        <div className="description">{description}</div>
        <div className="mainSkills">
          <div className="title">주요 기능</div>

          {mainSkills.map((item: any, key: number) => (
            <p key={key}>{item}</p>
          ))}
        </div>
        <div className="useSkills">
          <div className="title">사용한 기술</div>

          <div className="box">
            {useSkills.map((item: any, key: number) => (
              <span key={key}>{item}</span>
            ))}
          </div>
        </div>
        <div className="social">
          <a href={link} rel="noopener noreferrer" target="_blank" className="btn">
            웹 사이트 바로가기
          </a>

          {social.map((item: any, key: number) => (
            <a key={key} href={item.link} rel="noopener noreferrer" target="_blank" className="btn">
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
