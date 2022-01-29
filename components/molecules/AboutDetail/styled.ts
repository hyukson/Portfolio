import styled from "styled-components";

export const AboutDetailStyled = styled.div`
  margin-bottom: 2rem;

  .aboutItem:last-child::after {
    height: 0;
  }

  .aboutHeader {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    h2 {
      margin-left: 0.6rem;
      font-family: "Impact";
      font-weight: 500;
      font-size: 2.2rem;
      color: ${(props) => props.theme.lineColor};
    }
  }
`;
