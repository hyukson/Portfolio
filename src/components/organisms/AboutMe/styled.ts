import styled from "styled-components";

export const AboutMeStyled = styled.section`
  min-height: 100vh;
  height: 100%;
  background: linear-gradient(to right, #111, #0e0f19);

  .aboutWrap {
    display: flex;
    flex-wrap: wrap;

    > h2 {
      opacity: 0.8;
      margin-top: 8rem;
    }
  }

  // 1400px
  @media only screen and (max-width: 1400px) {
    padding-left: 5rem;

    .userImage {
      width: 25rem;
      height: 15rem;
      margin-bottom: 1rem;

      img {
        object-fit: scale-down;
      }
    }
  }

  // 920px
  @media only screen and (max-width: 920px) {
    .userImage {
      width: 20rem;
    }
  }

  @media only screen and (max-width: 550px) {
    .aboutItemContent {
      font-size: 1.4rem;
    }
  }
`;
