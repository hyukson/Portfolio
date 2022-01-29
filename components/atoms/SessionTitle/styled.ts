import styled from "styled-components";

export const SessionTitleStyled = styled.div`
  padding: 5rem 0 2rem 0;

  h1 {
    font-family: "Impact";
    font-weight: 500;
    font-size: 4.3rem;
    color: ${(props) => props.color || props.theme.subColor};
  }
`;
