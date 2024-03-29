import { useEffect, useRef } from "react";
import AniGridLine from "../../atoms/AniGridLine";
import { VisualStyled } from "./styled";

const Visual = () => {
  const leftTextRef = useRef() as any;
  const rightTextRef = useRef() as any;

  const height = window.innerHeight;

  useEffect(() => {
    const scroll = () => {
      leftTextRef.current.style.transform = `translateX(-${
        window.scrollY / 10
      }%)`;
      rightTextRef.current.style.transform = `translateX(${
        window.scrollY / 10
      }%)`;
    };

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <VisualStyled>
      <AniGridLine height={height} />
      <div className="circle"></div>

      <div className="text">
        <h2 ref={leftTextRef}>PORTFOLIO</h2>
        <h2 ref={rightTextRef}>JANG HYUK SOO</h2>

        <p>Move Mouse!</p>
      </div>
    </VisualStyled>
  );
};

export default Visual;
