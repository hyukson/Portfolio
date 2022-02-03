import styled from "styled-components";

export const VisualStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  .visual_wrap {
    display: flex;
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
  }
`;
