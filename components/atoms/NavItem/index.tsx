import React from "react";
import { NavItemStyled } from "./styled";

interface NavItemTypes {
  title?: String;
  isActive: Boolean;
  moveScroll: any;
  color: any;
}

const NavItem = ({ title, isActive, moveScroll, color }: NavItemTypes) => {
  return (
    <NavItemStyled
      className={isActive ? "active" : ""}
      color={color || "#000"}
      onClick={moveScroll}
    >
      <p>{title}</p>
    </NavItemStyled>
  );
};

export default NavItem;
