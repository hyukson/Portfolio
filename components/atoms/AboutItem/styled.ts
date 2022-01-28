import styled from "styled-components";

export const AboutItemStyled = styled.div`
  .aboutItemTitle {
    display: flex;
    align-items: center;

    .h2 {
      font-size: 1.4rem;
    }

    .circle {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 3px solid ${(props) => props.theme.lineColor};
      margin-right: 1rem;
    }
  }

  .aboutItemContent {
    border-left: 3px solid ${(props) => props.theme.lineColor};
  }
`;
