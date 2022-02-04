import styled from "styled-components";

export const NavItemStyled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap");
  cursor: pointer;

  a {
    display: inline-block;
    position: relative;
    margin-bottom: 1rem;
    font-family: "Poppins";
    font-size: 1rem;
    font-weight: 400;
    text-transform: capitalize;

    span {
      display: block;
      font-family: "Poppins";
      font-size: 14px;
      font-weight: 200;
      line-height: 1;
      color: #e9e9e9;
    }

    :after {
      content: "";
      width: 0;
      height: 2px;
      display: block;
      background-color: ${(props) => props.theme.subColor};
      transition: width 0.5s;
    }

    :hover:after {
      width: 100%;
    }
  }
`;
