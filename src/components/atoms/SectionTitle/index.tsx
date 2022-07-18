import { SectionTitleStyled } from "./styled";

interface SectionTitleTypes {
  title?: string;
  color?: string;
}

const SectionTitle = ({ title, color }: SectionTitleTypes) => {
  return (
    <SectionTitleStyled color={color}>
      <h2>{title}</h2>
    </SectionTitleStyled>
  );
};

export default SectionTitle;
