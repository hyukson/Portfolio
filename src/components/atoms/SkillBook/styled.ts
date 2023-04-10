import styled from "styled-components";

export const SkillBookStyled = styled.div`  
  height: 26rem;
  margin-bottom: 4rem;
  
  &:hover {
    animation: zIndex .3s forwards;
  }

  @keyframes zIndex {
    to { z-index: 22; }
  }

  &:hover .book {
    transform: rotateX(-25deg) rotateY(-80deg) rotateZ(-15deg) translateY(.8rem) translateX(5rem);

    // back cover
    .coverBack {
      transition: transform 1s cubic-bezier(0.560, 2.150, 0.250, 0.715);
      transition-delay: .2s;
      transform: rotateY(-55deg);
    }
  }

  .book {
    width: 3.5rem;
    height: 100%;

    position: relative;
    transform-style: preserve-3d;
    transition: transform 1s cubic-bezier(0.560, 2.150, 0.250, 0.715), margin .6s cubic-bezier(0.560, 2.150, 0.250, 0.715);
    
    background: #febf00;
    border-radius: 3px;
    
    padding-top: 2rem;
    margin: 0 1rem;

    border-left: 1px solid rgba(255, 255, 255, .2);

    transform: rotateY(30deg) rotateX(-10deg) rotateZ(-10deg); 
    
    & > div {
      position: absolute;
      transform-origin: center left;
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
    .cover {
      width: 22rem;
      height: 100%;
      top: 0;
      left: 100%;
      transform: rotateY(90deg);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .paper {
      background-color: #fff !important;
      padding: 1rem 2rem;
      backface-visibility: hidden;
      pointer-events: none;

      .logo {
        object-fit: scale-down;
        position: absolute;
        right: 1rem;
        bottom: 1rem;
      }

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

    .coverFront {
      content: "";
      left: 1px;
      pointer-events: none;
    }
    
    // back cover
    .coverBack {
      bottom: 0;
      left: 100%;
      transition: transform .4s; 
      pointer-events: none;

      display: flex;
      justify-content: center;
      align-items: center;
      
      .border {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 80%;
        border: .4rem solid rgba(255, 255, 255, .3);

        h2 {
          color: transparent;
          opacity: .8;
          text-shadow: 0 1px 0 #fff,
               0 2px 0 #c9c9c9,
               0 3px 0 #bbb,
               0 4px 0 #b9b9b9,
               0 5px 0 #aaa,
               0 6px 1px rgba(0,0,0,.1),
               0 0 5px rgba(0,0,0,.1),
               0 1px 3px rgba(0,0,0,.3),
               0 3px 5px rgba(0,0,0,.2),
               0 5px 10px rgba(0,0,0,.25),
               0 10px 10px rgba(0,0,0,.2),
               0 20px 20px rgba(0,0,0,.15);
          font-size: 2.5rem;
          transform: scaleX(-1);
        }
      }
    }
  }
`