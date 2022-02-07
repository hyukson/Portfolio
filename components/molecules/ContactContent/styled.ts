import styled from "styled-components";

export const ContactContentStyled = styled.section`
  min-height: 70vh;
  height: 100%;
  padding-bottom: 1rem;
  background: #061626;

  .flex {
    display: flex;
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

    p {
      margin: 0.2rem 0;
    }
  }

  // 1400px
  @media only screen and (max-width: 1400px) {
    padding-left: 5rem;
  }
`;
