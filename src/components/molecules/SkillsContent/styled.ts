import styled from "styled-components";

export const SkillsContentStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  background: #f5f5fa;

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .chartList {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    margin-left: 1rem;
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
