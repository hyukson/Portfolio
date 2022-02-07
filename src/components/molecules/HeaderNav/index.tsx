import NavItem from "../../atoms/NavItem";
import { HeaderNavStyled } from "./styled";

interface HeaderNavTypes {
  NavList: String[];
}

const HeaderNav = ({ NavList }: HeaderNavTypes) => {
  const moveScroll = (idx: number) => {
    const section = document.querySelectorAll("section");

    // 네비게이션 이동
    window.scrollTo({
      top: section[idx].offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <HeaderNavStyled>
      <nav>
        {NavList.map((item, i: number) => (
          <NavItem key={i} idx={i} title={item} moveScroll={moveScroll} />
        ))}
      </nav>

      <div className="logo">
        <a href="/">
          <h2>HYUKSON</h2>
        </a>
      </div>
    </HeaderNavStyled>
  );
};

export default HeaderNav;
