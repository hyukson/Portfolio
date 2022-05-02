import styled from "styled-components";

export const TagStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  border-radius: 3rem;
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  transition: 0.4s;

  &.active {
    color: #f9f9f9;
    background: ${(props) => props.theme.primary};
  }
`;
