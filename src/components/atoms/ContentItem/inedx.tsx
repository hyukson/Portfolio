import { ContentItemStyled } from "./styled";

interface ContentItemTypes {
  data: any;
}

const ContentItem = ({ data }: ContentItemTypes) => {
  return (
    <ContentItemStyled>
      {data.map((item: any, key: number) => (
        <div className="box" key={key}>
          <div className="title">
            <img src={item.icon} alt="icon" />
            <h2>{item.title}</h2>
          </div>
          <p>- {item.content}</p>
        </div>
      ))}
    </ContentItemStyled>
  );
};

export default ContentItem;
