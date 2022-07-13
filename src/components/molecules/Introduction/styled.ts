import styled from "styled-components";

export const IntroductionStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(to right, #111, #0e0f19);

  .Introduction_wrap {
    min-width: 50rem;
    min-height: 7rem;
    padding: 2rem 3rem;
    margin-bottom: 4rem;

    background: rgba(255,255,255, .95);
    border-radius: 12px;
    box-shadow: 
      0 4px 6px -1px rgba(255,255,255,0.2),
      0 2px 4px -1px rgba(255,255,255,0.06);

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    p { 
      font-size: 1.8rem;
    }
  }

  // christmas light
  .lights {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    left: 0;
    bottom: -37px;
    padding: 0 1rem;
  }

  .lights > div {
    position: relative;
    width: 28px;
    height: 32px;
    border-radius: 50%;
    transition: .2s;
  }

  .lights > div.off {
    background-color: rgba(255, 255, 255, 0.1) !important;
    box-shadow: none !important;
  }

  .lights > div:before{
    content: '';
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translate(-50%);
    width: 10px;
    height: 8px;
    border-radius: 2px;
    background-color: #ced4da;
  }

  .lights > div::after {
    content: '';
    position: absolute;
    width: .2rem;
    height: .4rem;
    background-color: rgba(255, 255, 255, .4);
    border-radius: 50%;
    top: 0.5rem;
    left: 0.5rem;
    transform: rotate(20deg);
  }
`;
