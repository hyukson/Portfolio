import styled from "styled-components";

export const ProjectItemStyled = styled.div`
  width: 75vw;
  min-height: 70vh;
  display: flex;
  margin-bottom: 5rem;
  box-shadow: 0 0 15px rgba(0 0 0 / 10%);
  border-radius: 20px;
  overflow: hidden;

  .projectImage {
    width: 40%;
    height: 70vh;
    position: relative;
    transition: 0.5s;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .projectContent {
    padding: 2rem 4rem;
    text-transform: capitalize;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
      font-size: 3rem;
      font-weight: bold;
    }

    .description {
      font-size: 1.4rem;
    }

    // 주요기능
    .mainSkills {
      font-size: 1.2rem;

      p {
        display: flex;
        align-items: center;
        position: relative;
        margin-bottom: 0.3rem;

        :before {
          content: "";
          width: 0.4rem;
          height: 0.4rem;
          display: block;
          margin-right: 1rem;
          border-radius: 50%;
          background: #555;
        }
      }
    }

    // 사용한 기술
    .useSkills {
      .box span {
        margin-right: 1rem;
        margin-bottom: 1rem;
        display: inline-block;
        font-size: 1.2rem;
        color: #666;

        :nth-child(-n + 3) {
          color: #000;

          :after {
            content: "";
            width: 100%;
            height: 2px;
            display: block;
            background-color: ${(props) => props.theme.subColor};
            transition: width 0.5s;
          }
        }
      }
    }

    // 소셜 버튼
    .social {
      margin-top: 2rem;

      .btn {
        display: inline-block;
        margin-right: 1rem;
        padding: 0.6rem 1.5rem;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 5px;
        box-shadow: 0 0 0.7rem rgba(0 0 0 / 10%);
        cursor: pointer;

        img {
          width: 1.2rem;
          height: 1.2rem;
          margin-right: 0.4rem;
          transform: translateY(0.2rem);
        }

        &:first-child {
          background: #febf00;
          box-shadow: none;
        }
      }
    }

    .title {
      margin-top: 2.5rem;
      padding: 0.6rem 0;
      font-size: 1rem;
      font-weight: bold;
      color: ${(props) => props.theme.lineColor};
    }
  }

  // 920px
  @media only screen and (max-width: 950px) {
    display: block;
    height: 65rem;

    .projectImage {
      width: 100%;
      height: 50%;
    }

    .projectContent {
      padding: 2rem 3rem;
    }
  }

  // 750px
  @media only screen and (max-width: 750px) and (min-width: 600px) {
    width: 70vw;
  }

  // 600px
  @media only screen and (max-width: 600px) {
    // 주요기능
    .projectContent .mainSkills {
      font-size: 1.4rem;
    }
  }
`;
