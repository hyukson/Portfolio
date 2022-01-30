import React, { useEffect, useState } from "react";

const useMoveScroll = () => {
  const [nowNavIdx, setNowNavIdx] = useState(0);
  const [color, setColor] = useState("#fff");

  useEffect(() => {
    window.scrollTo({ top: nowNavIdx * 970, behavior: "smooth" });
  }, [nowNavIdx]);

  console.log(color, nowNavIdx);

  const moveScroll = (e: any) => {
    const max = document.documentElement.scrollHeight / 970 - 1;

    const delta = e.deltaY > 0;

    const NavIdx = nowNavIdx + (delta ? 1 : -1);

    if (0 > NavIdx || NavIdx > max) {
      return;
    }

    setNowNavIdx(NavIdx);
  };

  const changeScrollColor = () => {
    setColor(nowNavIdx % 2 == 0 ? "#fff" : "#000");
  };

  // 이벤트를 추가하지만 중첩을 방지
  useEffect(() => {
    window.addEventListener("mousewheel", moveScroll);
    window.addEventListener("scroll", changeScrollColor);

    return () => {
      window.removeEventListener("mousewheel", moveScroll);
      window.removeEventListener("scroll", changeScrollColor);
    };
  });

  return [nowNavIdx, setNowNavIdx, color] as const;
};

export default useMoveScroll;
