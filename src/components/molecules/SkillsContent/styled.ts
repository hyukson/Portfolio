import styled from "styled-components";

export const SkillsContentStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to right, #111, #0e0f19);

  .bookshelf {
    width: 100%;
    height: 30rem;
    margin-top: 7rem;

    display: flex;
    /* justify-content: space-between; */
    align-items: flex-end;

    & > div:nth-child(1) {
      height: 80%;
      background-color: #f03d3d;
    }

    & > div:nth-child(2) {
      height: 70%;
      background-color: #febf00;
    }

    & > div:nth-child(3) {
      height: 100%;
      background-color: #5013d2;
    }

    & > div:nth-child(4) {
      height: 75%;
      background-color: #47e8e5;
    }

    & > div:nth-child(5) {
      height: 90%;
      background-color: #673ab7;
    }

    & > div:nth-child(6) {
      height: 60%;
      background-color: #8bc34a;
    }

    & > div:nth-child(7) {
      height: 75%;
      background-color: #009688;
    }

    & > div:nth-child(8) {
      height: 60%;
      background-color: #ff9800;
    }

    & > div:nth-child(9) {
      height: 70%;
      background-color: #d05bb3;
    }

    & > div:nth-child(10) {
      height: 55%;
      background-color: #b3ff00;
    }

    & > div:nth-child(11) {
      height: 40%;
      background-color: #fab;
    }
  }
`;
