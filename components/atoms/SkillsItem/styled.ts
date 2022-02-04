import styled from "styled-components";

export const SkillsItemStyled = styled.div`
  max-width: 32rem;
  padding: 1rem 1.2rem 2.2rem 1.2rem;
  border-radius: 10px;
  transition: transform 0.2s;
  background: #fff;

  :hover {
    transform: translateY(1rem);
  }

  .title {
    width: 100%;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1.2rem;
    padding: 1.2rem 0;

    h2 {
      font-size: 1.5rem;
      color: ${(props) => props.theme.lineColor};
    }
  }

  .skillsImage {
    display: flex;
    flex-wrap: wrap;

    img {
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
    transition: 0.4s;

    :hover {
      background: #febf00;
    }
  }
`;
