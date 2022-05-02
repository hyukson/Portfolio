import React from "react";

import { AboutDetailStyled } from "./styled";

import AboutItem from "../../atoms/AboutItem";

interface AboutDetailTypes {
  item?: any;
}

const AboutDetail = ({ item }: AboutDetailTypes) => {
  return (
    <AboutDetailStyled>
      <div className="card">
        <div className="front">
          <img alt="aboutIcon" {...item.icon} />
          <h2>{item.title}</h2>
        </div>
        <div className="back">
          {item.list.map((item: any, i: any) => (
            <AboutItem key={i} {...item} />
          ))}
        </div>
      </div>
    </AboutDetailStyled>
  );
};

export default AboutDetail;
