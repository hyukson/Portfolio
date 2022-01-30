import React from "react";
import { NavItemStyled } from "./styled";

interface NavItemTypes {
  title?: String;
  moveScroll: any;
  color: any;
}

const NavItem = ({ title, moveScroll, color }: NavItemTypes) => {
  return (
    <NavItemStyled color={color || "#000"} onClick={moveScroll}>
      <div className="circle" />
      <a>{title}</a>
    </NavItemStyled>
  );
};

export default NavItem;
