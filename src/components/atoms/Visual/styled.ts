import styled from "styled-components";

export const VisualStyled = styled.section`
  min-height: 100vh;
  height: 100%;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  overflow: hidden;

  .visual_wrap {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
    align-items: center;
  }

  .main_text {
    h1 {
      font-size: 5rem;
    }

    .sub_text {
      margin-top: 3rem;
      font-size: 1.6rem;
    }
  }

  .userImage {
    width: 28rem;
    height: 28rem;
    border-radius: 50%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  // 1150px
  @media only screen and (max-width: 1150px) {
    .visual_wrap {
      flex-direction: column-reverse;
      align-items: flex-start;
      padding-left: 5rem;
    }

    .userImage {
      width: 15rem;
      height: 15rem;
      margin-bottom: 1rem;
    }
  }

  // 600px
  @media only screen and (max-width: 600px) {
    .main_text {
      h1 {
        font-size: 4.5rem;
      }

      .sub_text {
        margin-top: 3rem;
        font-size: 1.8rem;
      }
    }
  }
`;
