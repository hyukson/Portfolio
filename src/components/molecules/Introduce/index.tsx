import { IntroduceStyled } from "./styled";

import Rap from "../../atoms/Rap";
import AniGridLine from "../../atoms/AniGridLine";

const Introduce = () => {  
  return (
    <IntroduceStyled>
      <AniGridLine width={1920} height={400} />

      <div className="Introduce_wrap">
        <p>무언가를 끊임없이 기획하고 아이디어 내는,</p>
        <p>
          <b>프론트엔드 개발자</b>를 꿈꾸고 있습니다.
        </p>
      </div>
    </IntroduceStyled>
  );
};

export default Introduce;
