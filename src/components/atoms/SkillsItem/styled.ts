import styled from "styled-components";

export const SkillsItemStyled = styled.div`
  max-width: 34rem;
  padding: 1rem 2rem 2rem 2rem;
  margin-right: 2rem;
  border-radius: 10px;
  background: #fff;
  transition: 0.4s;

  .title {
    width: 100%;
    border-bottom: 1px solid #eee;
    margin-bottom: 1.2rem;
    padding: 1rem 0;

    h2 {
      font-size: 1.8rem;
      font-family: "PretendardBold";
      color: ${(props) => props.theme.lineColor};
    }
  }

  .skillsImage {
    display: flex;
    flex-wrap: wrap;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
  }

  .skillsBlock {
    width: 9rem;
    height: 9rem;
    position: relative;
    margin: 0.4rem;
    box-shadow: 0 0 15px rgb(0 0 0 / 8%);
    border-radius: 0.8rem;
    cursor: pointer;
    transition: 0.2s;
    user-select: none;

    :hover {
      box-shadow: 0 0 0.9rem rgba(53, 65, 255, 0.4);
    }
    &.active {
      box-shadow: 0 0 0.9rem ${(props) => props.theme.subColor};
    }
  }

  // 1400px
  @media only screen and (max-width: 1400px) {
    margin-bottom: 2rem;
  }

  // 940px
  @media only screen and (max-width: 950px) {
    max-width: 51rem;
  }

  // 810px
  @media only screen and (max-width: 630px) {
    max-width: 38rem;
    width: 100%;
  }

  @media only screen and (max-width: 550px) {
    margin-right: 0;
    max-width: 34rem;
  }
`;
