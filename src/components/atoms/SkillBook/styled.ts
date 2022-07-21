import styled from "styled-components";

export const SkillBookStyled = styled.div`  
  height: 100%;

  &:hover .book {
    transform: rotateX(-25deg) rotateY(-80deg) rotateZ(-15deg) translateY(.8rem) translateX(-2rem);
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
      width: calc(100% - .1rem);
      height: calc(22rem - 10px);
      top: 3px;
      left: .1rem;
      background: #eee;
      transform: rotateX(90deg) translateZ(calc(11rem - 5px)) translateY(calc(-11rem + 5px));
      pointer-events: none;
    }

    .bottom {
      top: 100%;
    }

    // cover
    .cover,
    &:after {
      width: 22rem;
      height: 100%;
      top: 0;
      left: 100%;
      transform: rotateY(90deg);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background: #fff;
    }

    .cover {
      padding: 1rem 2rem;

      h2 {
        display: inline-block;

        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 6px;
          margin-top: -9px;

          background-color: #febf00;
        }
      }
      
      .list {
        margin: 1rem 0;
        font-size: 1.1rem;

        & > div {
          margin-bottom: .7rem;

          &::before {
            content: "[✦]";
            display: inline-block;
            color: #3452f6;
            font-size: .9rem;
            margin-right: .4rem;
          }
        }
      }

      p {
        margin-top: 2rem;
        font-size: 1.1rem;
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