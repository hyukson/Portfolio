import react from "react";

import { ContentItemStyled } from "./styled";

interface ContentItemTypes {
  data: any;
}

const ContentItem = ({ data }: ContentItemTypes) => {
  return (
    <ContentItemStyled>
      {data.map((item: any) => (
        <div className="box">
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
