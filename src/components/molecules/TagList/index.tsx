import Tag from "../../atoms/Tag";
import { TagListStyled } from "./styled";

interface TagListTypes {
  list: string[];
  category: string;
  setTag: any;
}

const TagList = ({ list, category, setTag }: TagListTypes) => {
  return (
    <TagListStyled>
      {list.map((v, i) => (
        <Tag key={i} title={v} isActive={category == v} setTag={setTag} />
      ))}
    </TagListStyled>
  );
};

export default TagList;
