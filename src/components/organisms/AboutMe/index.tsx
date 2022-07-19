import { AboutMeStyled } from "./styled";

// components
import SectionTitle from "../../atoms/SectionTitle";
import Rap from "../../atoms/Rap";

import SlideCardWrap from "../../molecules/SlideCardWrap";

interface AboutMeTypes {
  AboutData: any;
}

const AboutMe = ({ AboutData }: AboutMeTypes) => {
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
