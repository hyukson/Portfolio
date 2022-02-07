import styled from "styled-components";

export const SocialItemStyled = styled.div`
  max-width: 30rem;
  padding: 1rem 2rem 3rem 2rem;
  border-radius: 10px;
  background: #fff;

  .socialImage {
    width: 14rem;
    height: 6rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }

  p {
    font-size: 1.4rem;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme.primary};
  }
`;
