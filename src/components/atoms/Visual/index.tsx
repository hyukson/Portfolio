import React from "react";

import { VisualStyled } from "./styled";

import Rap from "../Rap";
import LineAni from "../LineAni";

interface VisualTypes {
  isLineAni: Boolean;
}

const Visual = ({ isLineAni }: VisualTypes) => {
  return (
    <VisualStyled>
      {isLineAni && <LineAni />}
      <Rap>
        <div className="visual_wrap">
          <div className="main_text">
            <h1>안녕하세요!</h1>
            <h1>
              <b>장혁수</b>입니다.
            </h1>

            <div className="sub_text">
              <p>저의 포트폴리오에 오신 것을 환영합니다.</p>
              <p>
                <b>프론트엔드 개발자</b>를 꿈꾸며 고등학생부터 작업한
              </p>
              <p>노력이 가득한 결과물들을 보실 수 있습니다.</p>
            </div>
          </div>

          <div className="userImage">
            <img src="/Portfolio/assets/images/화면.png" alt="Alt Name" />
          </div>
        </div>
      </Rap>
    </VisualStyled>
  );
};

export default Visual;
