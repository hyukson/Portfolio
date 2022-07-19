import styled from "styled-components";

export const SkillsContentStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to right, #111, #0e0f19);

  .bookshelf {
    width: 100%;
    height: 500px;

    display: flex;
    align-items: flex-end;

    & > div:nth-child(2) {
      height: 80%;
      background-color: #f03d3d;
    }

    & > div:nth-child(3) {
      height: 50%;
      background-color: #5013d2;
    }

    & > div:nth-child(4) {
      height: 70%;
      background-color: #47e8e5;
    }

    .book {
      width: 60px;
      height: 100%;
      background: #febf00;
      border-radius: 5px;

      margin: 0 .3rem;
      
      padding-top: 2rem;

      &::before {
        content: "";
        display: inline-block;
        width: 100%;
        height: 2rem;
        background-color: #fff;
      }
    }
  }
`;
