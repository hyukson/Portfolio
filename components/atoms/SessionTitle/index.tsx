import React from "react";
import { DefaultTheme } from "styled-components";

import { SessionTitleStyled } from "./styled";

interface SessionTitleTypes {
  title?: string;
  color?: string;
}

const SessionTitle = ({ title, color }: SessionTitleTypes) => {
  return (
    <SessionTitleStyled color={color}>
      <h1>{title}</h1>
    </SessionTitleStyled>
  );
};

export default SessionTitle;
