import { useEffect, useRef } from "react";
import AniGridLine from "../../atoms/AniGridLine";
import { VisualStyled } from "./styled";

const Visual = () => {
  const leftTextRef = useRef() as any;
  const rightTextRef = useRef() as any;

  useEffect(() => {
    const scroll = () => {
      leftTextRef.current.style.transform = `translateX(-${window.scrollY / 10}%)`;
      rightTextRef.current.style.transform = `translateX(${window.scrollY / 10}%)`;
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll)
    }
  }, []);

  return (
    <VisualStyled>
      <AniGridLine height={window.innerHeight} />
      <div className="circle"></div>
      <div className="text">
        <h2 ref={leftTextRef}>PORTFOLIO</h2>
        <h2 ref={rightTextRef}>JANG HYUK SOO!</h2>
      </div>
      <img src="/Portfolio/assets/images/man2.png" alt="projectImage" />
    </VisualStyled>
  );
}

export default Visual;