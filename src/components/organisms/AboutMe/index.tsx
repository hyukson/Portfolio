import { AboutMeStyled } from "./styled";

// components
import SectionTitle from "../../atoms/SectionTitle";
import Rap from "../../atoms/Rap";

import SlideCardWrap from "../../molecules/SlideCardWrap";

import { AboutMeTypes } from "../../../interfaces/AboutMeTypes";

interface AboutDataTypes {
  AboutData: AboutMeTypes;
}

const AboutMe = ({ AboutData }: AboutDataTypes) => {
  return (
    <AboutMeStyled>
      <Rap>
        <SectionTitle title="ABOUT ME" color="#f0f0fa" />

        <SlideCardWrap AboutData={AboutData} />
      </Rap>
    </AboutMeStyled>
  );
};

export default AboutMe;
