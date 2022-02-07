import styled from "styled-components";

export const ContactContentStyled = styled.section`
  min-height: 70vh;
  height: 100%;
  background: #061626;

  .flex {
    display: flex;

    > div {
      margin-right: 2rem;
    }
  }

  .copyright {
    font-size: 1rem;
    margin-top: 9rem;
    color: #eee;

    p {
      margin: 0.2rem 0;
    }
  }
`;
