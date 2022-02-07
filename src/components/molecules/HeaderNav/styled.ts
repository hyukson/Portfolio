import styled from "styled-components";

export const HeaderNavStyled = styled.header`
  height: 90%;
  padding: 3rem 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 50%;
  right: -100%;
  transition: 0.2s;
  transform: translateY(-50%);
  animation: show 2s forwards;

  background: #171717;
  color: #fff;
  box-shadow: 0 0 0.9rem rgb(0 0 0 / 8%);
  border-top-left-radius: 4rem;
  border-bottom-left-radius: 4rem;
  z-index: 1111;

  .logo h2 {
    font-family: "Impact";
    font-weight: 500;
    font-size: 1.8rem;
    letter-spacing: 0px;
  }

  @keyframes show {
    from {
      right: -100%;
    }
    to {
      right: 0;
    }
  }

  // 반응형
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: 8%;
    padding: 0;

    justify-content: center;

    position: fixed;
    top: 0%;
    transform: translate(-50%, 0);
    left: 50%;

    border-radius: 0;
    border-bottom-left-radius: 4rem;
    border-bottom-right-radius: 4rem;

    nav {
      width: 80%;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }

    .logo {
      display: none;
    }
  }
`;
