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
    min-width: 62rem;
    min-height: 7rem;
    padding: 2rem 3rem;
    margin-bottom: 10rem;

    background: #fff;
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


  .block-list {
    display: flex;
  }

  .block-container {
    position: relative;
    width: 8rem;
    height: 8rem;
    margin: 3rem;
    transition: 250ms;
    perspective: 500px;

    .btn-back {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      transition: 250ms;
      transform-style: preserve-3d;
      transform-origin: bottom right;
      transform: rotateZ(15deg);
      box-shadow: .8rem 0 2rem rgba(255, 255, 255, .15);
    }

    .btn-back-1 {
      background: linear-gradient(135deg, #5c46eb -20%, #013fff 120%);
    }

    .btn-back-2 {
      background: linear-gradient(135deg, #4682eb -20%, #01beff 120%);
    }

    .btn-back-3 {
      background: linear-gradient(135deg, #ebe046 -20%, #ffac01 120%);
    }

    .btn-front {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      background-color: #ffffff33;
      backdrop-filter: blur(20px);
      transition: 250ms cubic-bezier(0.560, 2.150, 0.250, 0.715);
      transform-style: preserve-3d;
      transform-origin: top left;
      overflow: hidden;

      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: rgba(255, 255, 255, .8);
        font-size: 3rem;
      }
    }

    &:hover {
      & > .btn-back {
        transform: translateZ(20px) rotateZ(15deg) rotateX(-20deg) rotateY(-20deg);
      }

      & > .btn-front {
        transform: translateZ(80px) translateY(-5px) rotateX(15deg) rotateY(15deg);
      }
    }
  }
`;

