import styled from "styled-components";

export const SlideCardStyled = styled.div`
  width: 100%;
  height: 25rem;
  
  position: absolute;
  user-select: none;

  background: #fff; 
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.22);
  border-radius: 1.5rem;
  overflow: hidden;
  transition: 
    transform .2s cubic-bezier(0.560, 2.150, 0.250, 0.715), 
    width .4s cubic-bezier(0.560, 2.150, 0.250, 0.715), 
    top .4s cubic-bezier(0.560, 2.150, 0.250, 0.715);

  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  &.invalid {
    pointer-events: none;
    opacity: 0;
    transition: all .25s;

    &.left {
      left: -350px !important;
      transform: rotate(-3.5deg) !important;
    }

    &.right {
      left: 350px !important;
      transform: rotate(3.5deg) !important;
    }
  }

  &.press {
    transition: none;
    transform: none;

    & > * {
      pointer-events: none;
    }
  }

  .topCard {
    width: 100%;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;

    img {
      margin-right: 1rem;  
    }
  }

  .bottomCard {
    height: 45%;
    background: linear-gradient(140deg, #8310e6, #0026e6, #10bbe6);
    color: #fff;
    font-size: 1.05rem;

    display: flex;
    justify-content: center;
    align-items: center;

    & > div { 
      margin: 0 1.6rem .5rem 0;

      & > p {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        color: #eee;

        &::before {
          content: "";
          display: inline-block;
          width: 5px;
          height: 5px;
          margin-right: .3rem;
          border-radius: 50%;
          background: #eee;
        }
      }
    }  
  }
`;