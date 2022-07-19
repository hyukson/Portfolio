import { SlideCardStyled } from "./styled"

interface SlideCardTypes {
  item: any;
  cardRef: any;
  idx: number; 
}

const SlideCard = ({item, cardRef, idx}: SlideCardTypes) => {
  return (
    <SlideCardStyled ref={el => cardRef.current[idx] = el}>
      <div className="topCard">
        <img title="icon" alt='icon' src={item.icon.src} />
        <h2>{item.title}</h2>
      </div>
      <div className="bottomCard">
        {item.list.map((x: any) => (
          <div>
            <p>{x.title}</p>
            <div className="list">
              {x.content?.split("\n").map((content: string) => (
                <p>{content}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SlideCardStyled>
  );
}

export default SlideCard;