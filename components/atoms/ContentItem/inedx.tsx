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
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </ContentItemStyled>
  );
};

export default ContentItem;
