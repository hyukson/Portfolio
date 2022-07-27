import { useEffect, useRef, useState } from "react";
import AniGridLine from "../../atoms/AniGridLine";
import { VisualStyled } from "./styled";

const Visual = () => {
  const leftTextRef = useRef() as any;
  const rightTextRef = useRef() as any;

  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const scroll = () => {
      leftTextRef.current.style.transform = `translateX(-${window.scrollY / 10}%)`;
      rightTextRef.current.style.transform = `translateX(${window.scrollY / 10}%)`;
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    }
  }, []);

  return (
    <VisualStyled>
      <AniGridLine height={height} />
      <div className="circle"></div>
      
      <div className="text">
        <h2 ref={leftTextRef}>PORTFOLIO</h2>
        <h2 ref={rightTextRef}>JANG HYUK SOO!</h2>
      </div>

      <div className="userImage">
        <img src="/Portfolio/assets/images/man2.png" alt="projectImage" />
      </div>
    </VisualStyled>
  );
}

export default Visual;