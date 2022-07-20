import styled from "styled-components";

export const SkillBookStyled = styled.div`  
  height: 100%;

  &:hover .book {
    transform: rotateX(-15deg) rotateY(-75deg) rotateZ(-15deg) translateY(.8rem) translateX(-2rem);
  }

  .book {
    width: 3.5rem;
    height: 100%;

    position: relative;
    transform-style: preserve-3d;
    transition: transform .7s cubic-bezier(0.560, 2.150, 0.250, 0.715), margin .6s cubic-bezier(0.560, 2.150, 0.250, 0.715);
    
    background: #febf00;
    border-radius: 3px;
    
    padding-top: 2rem;
    margin: 0 -1.2rem;

    border-left: 1px solid rgba(255, 255, 255, .2);
    
    transform: rotateY(30deg) rotateX(-10deg) rotateZ(-10deg);
        
    & > div {
      position: absolute;
      transform-origin: center left;
      backface-visibility: hidden;
    }
    
    .spine {
      font-size: 1.4rem;
      font-weight: bold;
      writing-mode: vertical-rl;
      text-orientation: mixed;

      user-select: none;

      p {
        margin: .5rem;
      }
    }
    
    .top,
    .bottom {
      width: 100%;
      height: calc(20rem - 10px);
      top: 0;
      background: #eee;
      transform: rotateX(90deg) translateZ(calc(10rem - 5px)) translateY(calc(-10rem + 5px));
      pointer-events: none;
    }

    .bottom {
      top: 100%;
    }

    // cover
    .cover,
    &:after {
      width: 20rem;
      height: 100%;
      top: 0;
      left: 100%;
      transform: rotateY(90deg);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: #fff;
    }

    .cover {
      p {
        padding: 1rem 2rem;
        font-size: 1.2rem;
      }
    }

    // back cover
    &::after {
      content: "";
      position: absolute;
      transform-origin: center left;
      left: 1px;
      pointer-events: none;
    }
  }
`