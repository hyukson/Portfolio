import styled from "styled-components";

export const AboutItemStyled = styled.div`
  position: relative;

  ::after {
    content: "";
    position: absolute;
    top: calc(1rem + 3px);
    width: 3px;
    height: calc(100% - 1rem + 3px);
    margin-left: calc(0.5rem - 1.5px);
    background: ${(props) => props.theme.lineColor};
  }

  .aboutItemTitle {
    display: flex;
    align-items: center;

    h2 {
      font-size: 1.3rem;
      color: #222;
    }

    .circle {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 3px solid ${(props) => props.theme.lineColor};
      margin-right: 1rem;
    }
  }

  .aboutItemContent {
    padding: 0 0 3rem 2.5rem;
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;
