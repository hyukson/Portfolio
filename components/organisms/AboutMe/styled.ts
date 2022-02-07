import styled from "styled-components";

export const AboutMeStyled = styled.section`
  min-height: 100vh;
  height: 100%;

  .aboutWrap {
    display: flex;
    flex-wrap: wrap;
  }

  .userImage {
    width: 25rem;
    height: 36rem;
    overflow: hidden;
    border-radius: 15px;
    position: relative;
    margin-right: 6rem;
  }

  .subAbout {
    width: calc(55rem);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
