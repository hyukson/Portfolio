import React, { useEffect, useRef, useState } from "react";

import { AboutMeStyled } from "./styled";

// components
import SectionTitle from "../../atoms/SectionTitle";
import Rap from "../../atoms/Rap";

interface AboutMeTypes {
  AboutData: any;
}

const AboutMe = ({ AboutData }: AboutMeTypes) => {
  const cardWrapRef = useRef() as any;
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

      if (Math.abs(left) > 250) {
        left = 250 * (left > 0 ? 1 : -1);
      }

      $target.style.left = `${left}px`;
      $target.style.transform = `rotate(${left / 72}deg)`;
    }

    const end = () => {
      const left = $target.offsetLeft;

      if (Math.abs(left) > 200) {
        $target.className += ` invalid ${left > 0 ? 'right' : 'left'}`;

        setTimeout(() => {
          $target.classList.remove("invalid");

          cardWrapRef.current.prepend($target);

          setTimeout(() => {
            about.unshift(about.pop() || '');

            setAbout([...about]);
          }, 400);
        }, 260);
      }

      isPress = false;

      $target.style.left = "";
      $target.style.transform = "";

      $target.classList.remove('press');
    }
    
    console.log($target);

    $target.addEventListener("mousedown", start);
    $target.addEventListener("mousemove", move);

    $target.onmouseup = onmouseleave = end;

    return () => {
      $target.removeEventListener("mousedown", start);
      $target.removeEventListener("mousemove", move);
    }
  }, [about]);

  return (
    <AboutMeStyled>
      <Rap>
        <SectionTitle title="ABOUT ME" color="#f0f0fa" />

        <div className="cards_inner">
          <div className="wrap" ref={cardWrapRef}>
            {about.map((v, k) => (
              <div className="card_inner" key={v} ref={el => cardRef.current[k] = el}>
                <h2>{v}</h2>
              </div>)
            )}
          </div>
        </div>
      </Rap>
    </AboutMeStyled>
  );
};

export default AboutMe;
