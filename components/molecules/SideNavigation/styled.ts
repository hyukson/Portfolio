import styled from "styled-components";

export const SideNavigationStyled = styled.nav`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);

  > div {
    display: flex;
    align-items: center;
    cursor: pointer;

    p {
      font-size: 1.2rem;
    }

    .circle {
      width: 0.6rem;
      height: 0.6rem;
      margin-right: 1rem;
      border-radius: 50%;
      background: ${(props) => props.theme.subColor};
    }
  }
`;
