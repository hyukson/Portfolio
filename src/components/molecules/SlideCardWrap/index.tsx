import { useEffect, useRef, useState } from "react";
import { AboutMeTypes } from "../../../interfaces/AboutMeTypes";
import SlideCard from "../../atoms/SlideCard";

import { SlideCardWrapStyled } from "./styled";

interface AboutDataTypes {
  AboutData: AboutMeTypes;
}

const SlideCardWrap = ({ AboutData }: AboutDataTypes) => {
  const SlideCardWrapRef = useRef() as any;
  const cardRef = useRef([]) as any;

  const [about, setAbout] = useState<string[]>(Object.keys(AboutData));
  
  useEffect(() => {
    let prevPosition = 0;
    let isPress = false;

    const $target = cardRef.current.at(-1);

    const start = (e: any) => {
      prevPosition = e.clientX;
      isPress = true;

      $target.classList.add("press");
    }

    const move = (e: any) => {
      if (!isPress) return;

      const position = prevPosition - e.clientX;

      prevPosition = e.clientX;

      let left = ($target.offsetLeft - position);

      if (Math.abs(left) > 300) {
        left = 300 * (left > 0 ? 1 : -1);
      }

      $target.style.left = `${left}px`;
      $target.style.transform = `rotate(${left / 72}deg)`;
    }

    const end = () => {
      if (!isPress) return;

      isPress = false;

      const left = $target.offsetLeft;

      if (Math.abs(left) > 200) {
        $target.className += ` invalid ${left > 0 ? 'right' : 'left'}`;

        setTimeout(() => {
          $target.classList.remove("invalid", "right", "left");

          SlideCardWrapRef.current.prepend($target);

          setTimeout(() => {
            about.unshift(about.pop() || '');

            setAbout([...about]);
          }, 400);
        }, 260);
      }

      $target.style.left = "";
      $target.style.transform = "";

      $target.classList.remove('press');
    }
    
    $target.addEventListener("mousedown", start);
    $target.addEventListener("mousemove", move);

    $target.addEventListener("mouseup", end);
    $target.addEventListener("mouseleave", end);

    return () => {
      $target.removeEventListener("mousedown", start);
      $target.removeEventListener("mousemove", move);

      $target.removeEventListener("mouseup", end);
      $target.removeEventListener("mouseleave", end);
    }
  }, [about]);

  return (
    <SlideCardWrapStyled>
      <div className="cards" ref={SlideCardWrapRef}>
        {about.map((v, k) => 
          (<SlideCard key={v} item={AboutData[v]} cardRef={cardRef} idx={k}></SlideCard>)
        )}
      </div>
    </SlideCardWrapStyled>
  );
}

export default SlideCardWrap;