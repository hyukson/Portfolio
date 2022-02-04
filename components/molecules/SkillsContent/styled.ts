import styled from "styled-components";

export const SkillsContentStyled = styled.section`
  height: 100vh;
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
    padding: 1rem 2rem 2rem 2rem;
    border-radius: 10px;
    background: #fff;
    font-size: 1.5rem;

    .title {
      border-bottom: 1px solid #eee;
      padding: 1rem 0;
    }

    .artImage {
      width: 9rem;
      height: 9rem;
      position: relative;
    }
  }
`;
