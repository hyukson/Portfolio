import styled from "styled-components";

export const ContactContentStyled = styled.section`
  min-height: 70vh;
  height: 100%;
  padding-bottom: 1rem;
  background: #061626;

  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > div {
      margin-right: 2rem;
      margin-bottom: 2rem;
    }
  }

  .copyright {
    font-size: 1rem;
    margin-top: 6rem;
    color: #eee;
    text-align: center;

    p {
      margin: 0.2rem 0;
    }
  }
`;
