import { useEffect, useRef } from "react";
import { ObserverOptionTypes } from "../../../interfaces/observerOptionTypes";

import Rap from "../../atoms/Rap";
import SectionTitle from "../../atoms/SectionTitle";
import SkillBook from "../../atoms/SkillBook";

import { SkillsContentStyled } from "./styled";

interface SkillsContentTypes {
  SkillsData: any;
}

const SkillsContent = ({ SkillsData }: SkillsContentTypes) => {
  const bookshelfRef = useRef() as any;
  
  const skills = [...SkillsData.Front.items, ...SkillsData.Back.items];
 
  useEffect(() => {
    const options: ObserverOptionTypes  = {
      root: null,
      rootMargin: "10px",
      threshold: .5,
    };
      
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList[entry.isIntersecting ? "add" : "remove"]("view");
      });
    }, options);  

    observer.observe(bookshelfRef.current);
  }, []);

  return (
    <SkillsContentStyled>
      <Rap>
        <SectionTitle title="SKILLS" />
        
        <div className="bookshelf" ref={bookshelfRef}>
          {skills.map((v: any, key: number) => (
            <SkillBook key={key} item={v}></SkillBook>
          ))}
        </div>
      </Rap>
    </SkillsContentStyled>
  );
};

export default SkillsContent;
