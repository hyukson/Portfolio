import { TagStyled } from "./styled";

interface TagTypes {
  title: string;
  isActive: boolean;
  setTag: any;
}

const Tag = ({ title, isActive, setTag }: TagTypes) => {
  return (
    <TagStyled className={isActive ? "active" : ""}>
      <div onClick={() => setTag(title)}>{title}</div>
    </TagStyled>
  );
};

export default Tag;
