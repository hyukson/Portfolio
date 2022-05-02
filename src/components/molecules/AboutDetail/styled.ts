import styled from "styled-components";

export const AboutDetailStyled = styled.div`
  width: 380px;
  height: 500px;
  position: relative;
  perspective: 1100px;
  margin-right: 4rem;
  margin-top: 4rem;

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
    padding: 1rem 2rem;
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background-color: #f5f5fa;
    border-bottom-left-radius: 3rem;
  }

  .front {
    box-shadow: 2rem 2rem 0.6rem rgba(0 0 0 / 3%);
  }

  .back {
    flex-direction: column;
    align-items: initial;
    transform: rotateY(180deg);
    background-color: #f1f1fa;
  }

  &:hover .card {
    transform: rotateY(180deg);
  }

  .aboutItem:last-child::after {
    height: 0;
  }

  .front {
    flex-direction: column;
  }

  .front h2 {
    margin-top: 0.6rem;
    font-family: "Impact";
    font-weight: 500;
    font-size: 2.2rem;
  }
`;
