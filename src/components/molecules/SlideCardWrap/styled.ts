import styled from "styled-components"

const colors = [
  ["#8310e6", "#0026e6", "#10bbe6"],
  ["#febf00", "#dd2c00", "#e610bf"],
  ["#8310e6", "#0026e6", "#10bbe6"],
];

const createTranslate = () => {
  let style = "";

  for (let i = 1; i <= 4; i++) {
    style += `
      & > div:nth-child(${i}) {
        top: ${(i * 2.2) - 2}rem;
        transform: scale(${70 + (i * 10)}%);
      }
    `;

    // & .bottomCard {
    //   background: linear-gradient(140deg, ${(colors.shift() || []).join(",")});
    // }
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

    
    @media only screen and (max-width: 800px) {
      max-width: 45rem;
    }

    ${createTranslate()}
  }
`