import { SectionTitleStyled } from "./styled";

interface SectionTitleTypes {
  title?: string;
  color?: string;
}

const SectionTitle = ({ title, color }: SectionTitleTypes) => {
  return (
    <SectionTitleStyled color={color}>
      <h1>{title}</h1>
    </SectionTitleStyled>
  );
};

export default SectionTitle;
