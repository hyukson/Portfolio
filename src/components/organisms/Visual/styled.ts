import styled from "styled-components";

export const VisualStyled = styled.section`
  min-height: 700px;
  height: 100vh;
  position: relative;
  z-index: 222;
  background-color: #fff;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  .text {
    color: rgba(0, 0, 0, .4);
    font-weight: bold;

    top: 25vh;
    width: 100%;
    position: absolute;

    text-align: center;

    font-weight: 900;
    font-size: 3.8rem;

    h2 {
      -webkit-text-stroke: 3px #febf00;
      transition: transform .3s ease-out;
    }

    h2:first-child {
      -webkit-text-stroke: 3px #9dbfff;
    }
  }

  p {
    color: #fff;
    margin-top: 6.4rem;
  }

  .circle {
    width: 38rem;
    height: 38rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #222;
    box-shadow: .6rem .6rem 3px rgba(0 0 0 / 10%);
    overflow: hidden;
  }
`