import { useEffect, useRef } from "react";
import { ObserverOptionTypes } from "../../../interfaces/ObserverTypes";
import { SkillItemTypes, SkillsDataTypes } from "../../../interfaces/SkillsTypes";
import observer from "../../../utils/observer";

import Rap from "../../atoms/Rap";
import SectionTitle from "../../atoms/SectionTitle";
import SkillBook from "../../atoms/SkillBook";

import { SkillsContentStyled } from "./styled";

interface SkillsContentTypes {
  SkillsData: SkillsDataTypes[];
}

const SkillsContent = ({ SkillsData }: SkillsContentTypes) => {
  const bookshelfRef = useRef() as any;
  
  const skills = SkillsData.reduce<SkillItemTypes[]>((acc, v) => [...acc, ...v.items], []);
 
  useEffect(() => {
    const options: ObserverOptionTypes  = {
      root: null,
      rootMargin: "10px",
      threshold: .1,
    };

    const show = (entry: IntersectionObserverEntry) => {
      entry.target.classList[entry.isIntersecting ? "add" : "remove"]("view");
    }

    observer({options, targets: [...bookshelfRef.current.children], callback: show});
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
