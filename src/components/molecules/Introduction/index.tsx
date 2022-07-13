import { IntroductionStyled } from "./styled";

const Introduction = () => {  
  return (
    <IntroductionStyled>
      <div className="Introduction_wrap">
        <p>무언가를 끊임없이 기획하고 아이디어 내는,</p>
        <p>
          <b>성장하는 개발자</b>를 꿈꾸고 있습니다.
        </p>
      </div>
    </IntroductionStyled>
  );
};

export default Introduction;
