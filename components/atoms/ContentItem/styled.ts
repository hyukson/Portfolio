import styled from "styled-components";

export const ContentItemStyled = styled.div`
  min-width: 25rem;
  padding: 2.5rem 2rem 1.5rem 2rem;
  border-radius: 10px;
  background: #fff;

  .box {
    margin-bottom: 1.5rem;

    .title {
      max-width: 7rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    p {
      font-size: 1.4rem;
      margin-top: 0.6rem;
    }
  }

  // 920px
  @media only screen and (max-width: 920px) {
    .box .title {
      max-width: 9rem;
    }
  }

  // 760px
  @media only screen and (max-width: 760px) {
    min-width: 28rem;
  }
`;
