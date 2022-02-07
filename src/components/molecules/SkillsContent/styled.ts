import styled from "styled-components";

export const SkillsContentStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  background: #061626;

  .flex {
    display: flex;
    flex-wrap: wrap;

    .sb {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      > div:first-child {
        margin-bottom: 2rem;
      }
    }
  }

  .infoView {
    width: 25rem;
    padding: 1rem 2rem;
    border-radius: 10px;
    background: #fff;

    .title {
      border-bottom: 1px solid #eee;
      padding: 1rem 0;
      font-size: 1.2rem;
    }

    .chart {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1.5rem 0;
    }

    > p {
      font-size: 1.2rem;
      line-height: 1.3;
    }
  }

  // 1400px
  @media only screen and (max-width: 1400px) {
    padding-left: 5rem;
    padding-bottom: 5rem;
  }

  // 630px
  @media only screen and (max-width: 630px) {
    .flex > div {
      max-width: 38rem;
      width: 100%;
    }
  }

  // 550px
  @media only screen and (max-width: 550px) {
    .flex > div {
      max-width: 34rem;
    }
  }
`;
