import styled from "styled-components"

const createTranslate = () => {
  let style = "";

  for (let i = 1; i <= 4; i++) {
    style += `
      & > div:nth-child(${i}) {
        top: ${i}rem;
        width: ${70 + (i * 10)}%
      }
    `;
  }

  return style;
}

export const SlideCardWrapStyled = styled.div`
  position: relative;
  perspective: 800px; 

  .cards {
    margin: 0 auto;
    width: 50rem;
    position: relative;
    transform-style: preserve-3d;
    
    display: flex;
    justify-content: center; 

    ${createTranslate()}
  }
`