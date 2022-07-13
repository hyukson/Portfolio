import styled from "styled-components";

export const IntroductionStyled = styled.section`
  min-height: 800px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(to right, #111, #0e0f19);

  .Introduction_wrap {
    padding: 2rem 3rem;
    margin-bottom: 4rem;

    background: rgba(255,255,255, .95);
    border-radius: 12px;
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
    .Introduction_wrap {
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
