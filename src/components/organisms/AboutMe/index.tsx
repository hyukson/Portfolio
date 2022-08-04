import { AboutMeStyled } from "./styled";

// components
import SectionTitle from "../../atoms/SectionTitle";
import Rap from "../../atoms/Rap";

import { AboutMeTypes } from "../../../interfaces/AboutMeTypes";

interface AboutDataTypes {
  AboutData: AboutMeTypes;
}

const AboutMe = ({ AboutData }: AboutDataTypes) => {
  return (
    <AboutMeStyled>
      <Rap>
        <SectionTitle title="ABOUT ME" color="#f0f0fa" />

      </Rap>
    </AboutMeStyled>
  );
};

export default AboutMe;
