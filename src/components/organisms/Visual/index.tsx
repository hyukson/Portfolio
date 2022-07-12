import { useEffect, useRef } from "react";
import { VisualStyled } from "./styled";

const Visual = () => {
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const scroll = (e: any) => {
      leftTextRef.current!.style.transform = "translateX("+ window.scrollY / 10 + "%)";
      rightTextRef.current!.style.transform = "translateX("+ window.scrollY / 10 + "%)";
    }

    window.addEventListener("scroll", scroll);

    return (
      window.removeEventListener("scroll", scroll)
    );
  }, []);

  return (
    <VisualStyled>
      <div className="text">
        <h2 ref={leftTextRef}>PORTFOLIO</h2>
        <h2 ref={rightTextRef}>JANG HYUK SOO!</h2>
      </div>
    </VisualStyled>
  );
}

export default Visual;