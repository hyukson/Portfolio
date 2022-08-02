import styled from "styled-components";

export const IntroductionStyled = styled.section`
  min-height: ${props => props.theme.height};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(to right, #111, #0e0f19);

  @media only screen and (max-width: 600px) {
    min-height: 600px;
  }

  .Introduction_wrap {
    max-width: 62rem;
    width: 100%;
    min-height: 7rem;
    padding: 2rem 3rem;
    margin-bottom: 10rem;

    background: #fff;
    border-radius: 12px;
    box-shadow: 
      0 4px 6px -1px rgba(255,255,255,0.2),
      0 2px 4px -1px rgba(255,255,255,0.06);

    position: relative;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 800px) {
      max-width: 45rem;
    }

    p { 
      font-size: 1.8rem;
      border-right: 2px solid #777;
      padding-right: .4rem;
      animation: cursor .9s infinite steps(2);

      @keyframes cursor {
        from { border-right: 2px solid #fff; }
        to { border-right: 2px solid #777; }
      }
    }

    opacity: 0;
    pointer-events: none;
    transform: scale(.3);
    transition: .6s cubic-bezier(0.560, 2.150, 0.250, 0.715);

    &.show {
      opacity: 1;
      transform: scale(1);
      pointer-events: initial;
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

