import styled from "styled-components";

export const ProjectContentStyled = styled.section`
  min-height: ${props => props.theme.height};
  height: 100%;
  background: linear-gradient(to right, #111, #0e0f19);
  padding-bottom: 5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
