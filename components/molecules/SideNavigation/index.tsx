import React, { useEffect, useState } from "react";
import useMoveScroll from "../../../hooks/useMoveScroll";
import NavItem from "../../atoms/NavItem";
import { SideNavigationStyled } from "./styled";

interface SideNavigationTypes {
  NavList: String[];
}

const SideNavigation = ({ NavList }: SideNavigationTypes) => {
  const [nowNavIdx, setNowNavIdx, color] = useMoveScroll();

  const moveScroll = (e: any) => {
    // 현재 클릭한 인덱스 구하기
    const index = [...e.currentTarget.parentElement.childNodes].indexOf(
      e.currentTarget
    );

    setNowNavIdx(index);
  };

  return (
    <SideNavigationStyled>
      {NavList.map((item, i) => (
        <NavItem key={i} color={color} title={item} moveScroll={moveScroll} />
      ))}
    </SideNavigationStyled>
  );
};

export default SideNavigation;
