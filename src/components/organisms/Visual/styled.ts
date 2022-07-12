import styled from "styled-components";

export const VisualStyled = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  background: linear-gradient(to right, #111, #0e0f19);
  overflow: hidden;

  .text {
    /* color: #febf00; */
    color: #111;
    font-weight: bold;

    top: 25vh;
    width: 100%;
    position: absolute;

    text-align: center;

    font-weight: 900;
    font-size: 6rem;

    -webkit-text-stroke: 4px #febf00;
  }

`