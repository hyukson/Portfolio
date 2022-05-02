import { TagStyled } from "./styled";

interface TagTypes {
  title: string;
  isActive: boolean;
  setTag: any;
}

const Tag = ({ title, isActive, setTag }: TagTypes) => {
  return (
    <TagStyled
      onClick={() => setTag(title)}
      className={isActive ? "active" : ""}
    >
      <div>{title}</div>
    </TagStyled>
  );
};

export default Tag;
