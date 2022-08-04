import styled from "styled-components";

export const LoaderStyled = styled.div`
  /* 로딩 애니메이션 */
  z-index: 10001;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #151314;
  background: #151314;
  animation: color .6s forwards;
  animation-delay: .4s;
  opacity: 0;
  pointer-events: none;
  transition: opacity .4s ease-in-out;

  &.view {
    opacity: 1;
    pointer-events: initial;
  }

  @keyframes color {
    from { color: #151314;}
    to { color: #fff;}
  }

  .box {
    display: flex;
    position: relative;
    overflow: hidden;
    height: calc(6rem + 2px);
  }

  .box > p {
    margin: 0 .3rem;
    font-size: 5rem;
    font-weight: bold;
    line-height: 1.3;
  }

  .blurBox {
    width: 200%;
    height: 6rem;
    display: flex;
    position: absolute;
    left: 6rem;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: move 1.8s forwards cubic-bezier(0.96, 0.39, 0.64, 0.93);
    animation-delay: .8s;
  }

  @keyframes move {
    from {left: 6rem;}
    to {left: 200%;}
  }

  .blurBox > div {
    height: 100%;
    position: relative;
  }

  .blur {
    width: calc(50% - 6rem);
    background: #151314;
    opacity: 1;
    animation: opacity .4s forwards ease-in-out;
    animation-delay: .6s;
  }

  @keyframes opacity {
    from { opacity: 1;}
    to { opacity: .97;}
  }

  .blurBox > .pick {
    width: 6rem;
    animation: scale .4s forwards ease-in-out;
    margin-right: 2px;
    animation-delay: .4s;
  }

  @keyframes scale {
    from {transform: scale(.1)}
    to {transform: scale(1)}
  }

  .blurBox > .pick::before,
  .blurBox > .pick::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #febf00;
  }

  .blurBox > .pick::before {
    width: 2px;
    height: .5rem;
    box-shadow: 0 calc(6rem - .5rem) #febf00, 6rem calc(6rem - .5rem) #febf00, 6rem 0 #febf00;
  }

  .blurBox > .pick::after {
    width: .5rem;
    height: 2px;
    box-shadow: 0 6rem #febf00, calc(6rem - .4rem) 6rem #febf00, calc(6rem - .5rem) 0 #febf00;
  }
/*  */
`