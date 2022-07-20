import styled from "styled-components";

export const SkillBookStyled = styled.div`
  width: 3.5rem;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .7s cubic-bezier(0.560, 2.150, 0.250, 0.715);
  background: #febf00;
  border-radius: 3px;

  margin: 0 .3rem;
  padding-top: 2rem;

  & > div {
    position: absolute;
    transform-origin: center left;
  }
  
  .spine {
    font-size: 1.2rem;
    font-weight: bold;
    writing-mode: vertical-rl;
    text-orientation: mixed;

    p {
      margin: .4rem;
    }
  }
  
  .top,
  .bottom {
    width: 100%;
    height: calc(14rem - 10px);
    top: 0;
    background: #eee;
    transform: rotateX(90deg) translateZ(calc(7rem - 5px)) translateY(calc(-7rem + 5px));
  }

  .bottom {
    top: 100%;
  }

  // cover
  .cover,
  &:after {
    width: 14rem;
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
      padding: .6rem 1.5rem;
      font-size: 1.2rem;
    }
  }
  
  &:hover,
  &.active {
    transform: rotateX(-15deg) rotateY(-75deg) rotateZ(-15deg) translateY(2rem) translateX(-30px);
    z-index: 1;
  }

  // back cover
  &::after {
    content: "";
    position: absolute;
    transform-origin: center left;
    left: 0%;
  }

  // book line
  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1rem;
    background: #f0f0fa;
  }
`