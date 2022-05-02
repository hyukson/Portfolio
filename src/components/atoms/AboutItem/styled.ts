import styled from "styled-components";

export const AboutItemStyled = styled.div`
  position: relative;

  .aboutItemTitle {
    display: flex;
    align-items: center;

    h2 {
      font-size: 1.3rem;
      color: #000;
    }

    .circle {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      /* border: 2px solid ${(props) => props.theme.lineColor}; */
      background: ${(props) => props.theme.lineColor};
      margin-right: 1rem;
    }
  }

  .aboutItemContent {
    padding: 0 0 2rem 1rem;
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;
