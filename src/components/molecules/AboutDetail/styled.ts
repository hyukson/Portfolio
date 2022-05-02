import styled from "styled-components";

export const AboutDetailStyled = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
  perspective: 1100px;
  margin: 2rem;

  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: 0.4s;
    transform-style: preserve-3d;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    box-shadow: 0 0 1rem rgba(0 0 0 / 15%);
    padding: 1rem 2rem;
    border-radius: 1rem;
  }

  .front {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .back {
    transform: rotateY(180deg);
  }

  &:hover .card {
    transform: rotateY(180deg);
  }

  .aboutItem:last-child::after {
    height: 0;
  }

  .aboutHeader {
    margin-bottom: 2rem;

    h2 {
      margin-left: 1.2rem;
      font-family: "Impact";
      font-weight: 500;
      font-size: 2.2rem;
      color: ${(props) => props.theme.lineColor};
    }
  }
`;
