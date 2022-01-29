import React, { useEffect, useState } from "react";
import { SideNavigationStyled } from "./styled";

interface SideNavigationTypes {
  NavList: String[];
}

const SideNavigation = ({ NavList }: SideNavigationTypes) => {
  const nowNav: String = "";

  // 스크롤 시 체크
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <SideNavigationStyled>
      {NavList.map((item, i) => (
        <div>
          <div className="circle" />
          <p>Intro</p>
        </div>
      ))}
    </SideNavigationStyled>
  );
};

export default SideNavigation;
