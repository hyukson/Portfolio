import React, { useEffect, useRef, useState } from "react";

import { AboutMeStyled } from "./styled";

// components
import SectionTitle from "../../atoms/SectionTitle";
import Rap from "../../atoms/Rap";
import { couldStartTrivia } from "typescript";

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
          $target.classList.remove("invalid");

          cardWrapRef.current.prepend($target);

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

  console.log(about)

  return (
    <AboutMeStyled>
      <Rap>
        <SectionTitle title="ABOUT ME" color="#f0f0fa" />

        <div className="cards_inner">
          <div className="wrap" ref={cardWrapRef}>
            {about.map((v, k) => (
              <div className="card_inner" key={v} ref={el => cardRef.current[k] = el}>
                <div className="leftCard">
                  <img title="icon" alt='icon' src={AboutData[v].icon.src} />
                  <h2>{AboutData[v].title}</h2>
                </div>
                <div className="rightCard">
                  {AboutData[v].list.map((x: any) => (
                    <div>{x.title} <div>{x.content}</div></div>
                  ))}
                </div>
              </div>)
            )}
          </div>
        </div>
      </Rap>
    </AboutMeStyled>
  );
};

export default AboutMe;
