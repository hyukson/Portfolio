import styled from "styled-components";

export const TagStyled = styled.div`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  margin-bottom: 1rem;
  border-radius: 3rem;
  background: #f9f9f9;
  color: #000;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: ${(props) => props.theme.subColor};
  }

  &.active {
    color: #f9f9f9;
    background: ${(props) => props.theme.primary};
  }
`;
