import { SkillBookStyled } from "./styled";

const SkillBook = ({item}: any) => {
  return (
    <SkillBookStyled>
      <div className="book">
        <div className="spine">
          <p>{item.title}</p>
        </div>

        <div className="cover coverFront"></div>
        <div className="cover paper">
          <img className="logo" src={item.src}></img>

          <h2>{item.title}</h2>

          <div className="list">
            {item?.useSkill.map((v: string, i: number) => (
              <div key={i}>{v}</div>
            ))}
          </div>
          <p>{item.content}</p>
        </div>
        
        <div className="cover coverBack">
          <div className="border">
            <h2>{item.title}</h2>
          </div>
        </div>
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </SkillBookStyled>
  );
}

export default SkillBook;