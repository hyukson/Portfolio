import { NavItemStyled } from "./styled";

interface NavItemTypes {
  title?: String;
  moveScroll: any;
  idx: number;
}

const NavItem = ({ title, moveScroll, idx }: NavItemTypes) => {
  const pad = (number: number) => (number > 10 ? number : `0${number}`);

  return (
    <NavItemStyled onClick={() => moveScroll(idx)}>
      <div>
        <span>{pad(idx + 1)}.</span>
        {title}
      </div>
    </NavItemStyled>
  );
};

export default NavItem;
