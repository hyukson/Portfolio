import { useEffect, useRef } from "react";
import NavItem from "../../atoms/NavItem";
import { HeaderNavStyled } from "./styled";

interface HeaderNavTypes {
  NavList: String[];
}

const HeaderNav = ({ NavList }: HeaderNavTypes) => {
  const sectionRef = useRef([]) as any;

  useEffect(() => {
    sectionRef.current = document.querySelectorAll("section");
  }, []);

  const moveScroll = (idx: number) => {
    // 네비게이션 이동
    window.scrollTo({
      top: sectionRef.current[idx].offsetTop,
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
        <a href="/Portfolio">
          <h2>HYUKSON</h2>
        </a>
      </div>
    </HeaderNavStyled>
  );
};

export default HeaderNav;
