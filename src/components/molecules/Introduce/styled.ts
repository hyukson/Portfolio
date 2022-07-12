import styled from "styled-components";

export const IntroduceStyled = styled.section`
  min-height: 400px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;

  .Introduce_wrap {
    padding: 2rem 3rem;
    margin-bottom: 4rem;

    background: rgba(255,255,255, .95);
    box-shadow: 
      0 4px 6px -1px rgba(0,0,0,0.1),
      0 2px 4px -1px rgba(0,0,0,0.06);

    position: relative;

    p { 
      font-size: 1.8rem;
    }
  }

  // 1150px
  @media only screen and (max-width: 1150px) {
    .Introduce_wrap {
      flex-direction: column-reverse;
      align-items: flex-start;
      padding-left: 5rem;
    }
  }

  // 600px
  @media only screen and (max-width: 600px) {
    .main_text {
      h1 {
        font-size: 4.5rem;
      }

      .sub_text {
        margin-top: 3rem;
        font-size: 1.8rem;
      }
    }
  }
`;
