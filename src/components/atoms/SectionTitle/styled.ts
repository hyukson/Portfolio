import styled from "styled-components";

export const SectionTitleStyled = styled.div`
  padding: 3rem 0 1rem 0;

  h2 {
    font-family: "CookieRunBold";
    font-weight: 500;
    font-size: 4.3rem;
    text-align: center;
    color: ${(props) => props.color || props.theme.subColor};
  }
`;
