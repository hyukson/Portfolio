import { SkillBookStyled } from "./styled";

const SkillBook = ({item}: any) => {
  return (
    <SkillBookStyled>
      <div className="spine">
        <p>{item.title}</p>
      </div>
      <div className="cover">
        <p>{item.content}</p>
      </div>
      <div className="top"></div>
      <div className="bottom"></div>
    </SkillBookStyled>
  );
}

export default SkillBook;