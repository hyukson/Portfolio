import styled from "styled-components";

const createTranslate = () => {
  let style = "";

  for (let i = 1; i <= 4; i++) {
    style += `
      &:nth-child(${i}) {
        top: ${i}rem;
        transform: translateZ(-${(4-i) * 4}rem);
      }
    `;
  }

  return style;
}

export const AboutMeStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to right, #111, #0e0f19);

  text-align: center;
  user-select: none;

  .cards_inner {
    position: relative;
    perspective: 800px;

    .wrap {
      margin: 0 auto;
      width: 40rem;
      position: relative;
      transform-style: preserve-3d;
    }
    
    .card_inner {
      width: 100%;
      height: 20rem;
      
      position: absolute;

      background: #fff; 
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.22);
      border-radius: .6rem;
      transition: transform .2s cubic-bezier(0.560, 2.150, 0.250, 0.715), top .4s cubic-bezier(0.560, 2.150, 0.250, 0.715);;

      display: flex;
      justify-content: center;
      align-items: center;
      
      cursor: grab;

      &.invalid {
        pointer-events: none;
        opacity: 0;
        transition: all .25s;
      }

      &.invalid.left {
        left: -350px !important;
        transform: rotate(-3.5deg) !important;
      }

      &.invalid.right {
        left: 350px !important;
        transform: rotate(3.5deg) !important;
      }

      &:active {
        cursor: grabbing;
      }

      ${createTranslate()}
    }

    .card_inner.press {
      transition: none;
      transform: none;

      & > * {
        pointer-events: none;
      }
    }
  }
`;
