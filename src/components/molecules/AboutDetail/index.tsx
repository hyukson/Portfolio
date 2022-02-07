import React from "react";

import { AboutDetailStyled } from "./styled";

import AboutItem from "../../atoms/AboutItem";

interface AboutDetailTypes {
  item?: any;
}

const AboutDetail = ({ item }: AboutDetailTypes) => {
  return (
    <AboutDetailStyled>
      <div className="aboutHeader">
        <img alt="aboutIcon" {...item.icon} />
        <h2>{item.title}</h2>
      </div>

      {item.list.map((item: any, i: any) => (
        <AboutItem key={i} {...item} />
      ))}
    </AboutDetailStyled>
  );
};

export default AboutDetail;
