import styled from "styled-components";

export const WeatherAniStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  user-select: none;

  canvas {
    pointer-events: none;
    user-select: none;
  }
`