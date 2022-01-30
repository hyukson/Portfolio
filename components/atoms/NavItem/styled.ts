import styled from "styled-components";

export const NavItemStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 0.6rem;

  a {
    font-size: 1.2rem;
    color: ${(props) => props.color};
    transition: color 0.3s;
    font-family: "Noto Sans KR";
    font-weight: bold;
  }

  .circle {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 1rem;
    border-radius: 50%;
    background: ${(props) => props.theme.subColor};
  }
`;
