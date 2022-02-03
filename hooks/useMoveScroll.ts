import React, { useEffect, useState } from "react";

const useMoveScroll = () => {
  const [nowNavIdx, setNowNavIdx] = useState(0);
  const [color, setColor] = useState("#fff");
  const [bodyHeight, setBodyHeight] = useState(969);

  // 연속되는 휠 페이징 방지
  const [isScroll, setIsScroll] = useState(false);

  // widnow 창 크기 조정
  useEffect(() => {
    windowResize();
  }, []);

  // 스크롤 시 이동
  useEffect(() => {
    window.scrollTo({ top: nowNavIdx * bodyHeight, behavior: "smooth" });
  }, [nowNavIdx, bodyHeight]);

  // 휠에 따른 다음 페이지 지정
  const moveScroll = (e: any) => {
    const max = document.documentElement.scrollHeight / bodyHeight - 1;

    const NavIdx = nowNavIdx + (e.deltaY > 0 ? 1 : -1);

    if (0 > NavIdx || NavIdx > max || isScroll) {
      return;
    }

    setNowNavIdx(NavIdx);

    setIsScroll(true);
  };

  const changeScrollColor = () => {
    setColor(nowNavIdx % 2 == 0 ? "#fff" : "#000");

    setIsScroll(nowNavIdx * bodyHeight != window.scrollY);
  };

  // 윈도우 창 변화
  const windowResize = () => {
    setBodyHeight(document.documentElement.offsetHeight);
  };

  // 이벤트를 추가하지만 중첩을 방지
  useEffect(() => {
    window.addEventListener("mousewheel", moveScroll);
    window.addEventListener("scroll", changeScrollColor);
    window.addEventListener("resize", windowResize);

    return () => {
      window.removeEventListener("mousewheel", moveScroll);
      window.removeEventListener("scroll", changeScrollColor);
      window.removeEventListener("resize", windowResize);
    };
  });

  return [nowNavIdx, setNowNavIdx, color] as const;
};

export default useMoveScroll;
