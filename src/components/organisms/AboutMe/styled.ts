import styled from "styled-components";

const createTranslate = () => {
  let style = "";

  for (let i = 1; i <= 4; i++) {
    style += `
      &:nth-child(${i}) {
        top: ${i}rem;
        width: ${82 + (i * 6)}%
      }
    `;
  }

  return style;
}

export const AboutMeStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to right, #111, #0e0f19);

  user-select: none;
`;
