import styled from "styled-components";

export const AboutMeStyled = styled.section`
  min-height: ${props => props.theme.height};
  height: 100%;
  background: linear-gradient(to right, #111, #0e0f19);

  @media only screen and (max-width: 600px) {
    min-height: 500px;
  }
`;
