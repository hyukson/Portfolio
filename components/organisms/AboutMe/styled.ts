import styled from "styled-components";

export const AboutMeStyled = styled.section`
  height: 100vh;

  .aboutWrap {
    display: flex;
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
    justify-content: space-between;
  }
`;
