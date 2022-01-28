import styled from "styled-components";

export const AboutDetailStyled = styled.div`
  .aboutHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    h2 {
      font-family: "Impact";
      letter-spacing: 0;
      font-size: 2.5rem;
      color: ${(props) => props.theme.lineColor};
    }
  }
`;
