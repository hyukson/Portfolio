import styled from "styled-components";

export const SkillsContentStyled = styled.section`
  min-height: 100vh;
  height: 100%;

  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .chartList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
    margin-top: 2rem;
  }

  .chart {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.4rem 1rem;
  }

  // 1400px
  @media only screen and (max-width: 1400px) {
    .chartList {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  // 630px
  @media only screen and (max-width: 630px) {
    .chartList {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
