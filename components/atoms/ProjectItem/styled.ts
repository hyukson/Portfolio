import styled from "styled-components";

export const ProjectItemStyled = styled.div`
  width: 75vw;
  height: 70vh;
  display: flex;
  margin-bottom: 5rem;
  box-shadow: 0 0 15px rgba(0 0 0 / 10%);
  border-radius: 20px;
  overflow: hidden;

  .projectImage {
    width: 50%;
    height: 100%;
    position: relative;
    transition: 0.5s;
  }

  .projectContent {
    padding: 0 4rem;
    text-transform: capitalize;

    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
      font-size: 3rem;
      font-family: "GmarketBold";
    }

    .description {
      font-size: 1.5rem;
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
      font-family: "GmarketBold";
      color: ${(props) => props.theme.lineColor};
    }
  }
`;