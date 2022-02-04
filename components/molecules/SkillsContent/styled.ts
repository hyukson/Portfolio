import styled from "styled-components";

export const SkillsContentStyled = styled.section`
  height: 100vh;
  background: #061626;

  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .skillsItem {
    margin-right: 2rem;
    margin-bottom: 2rem;
  }

  .artBoard {
    width: 25rem;
    background: #fff;
    border-radius: 10px;
    padding: 1rem 2rem;
    font-size: 1.5rem;

    > div {
      width: 9rem;
      height: 9rem;
      position: relative;
    }
  }
`;
