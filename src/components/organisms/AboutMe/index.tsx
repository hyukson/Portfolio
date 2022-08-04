import { AboutMeStyled } from "./styled";

// components
import SectionTitle from "../../atoms/SectionTitle";
import Rap from "../../atoms/Rap";

import CodeBlock from "../../molecules/CodeBlock";

import { AboutMeItemTypes } from "../../../interfaces/AboutMeTypes";
import { useEffect, useState } from "react";

interface AboutDataTypes {
  AboutData: AboutMeItemTypes[];
}

const AboutMe = ({ AboutData }: AboutDataTypes) => {
  const [codes, setCodes] = useState<string[]>([]);

  useEffect(() => {
    AboutData.map(v => {
      console.log(v);
    });

    setCodes([
      "안녕하세요.",
      "안녕하세요."
    ])
  }, []);

  return (
    <AboutMeStyled>
      <Rap>
        <SectionTitle title="ABOUT ME" color="#f0f0fa" />

        <CodeBlock codes={codes}></CodeBlock>
      </Rap>
    </AboutMeStyled>
  );
};

export default AboutMe;
