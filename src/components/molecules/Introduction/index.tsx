import { useEffect, useRef, useState } from "react";
import { IntroductionStyled } from "./styled";

interface observerOptionTypes {
  root: Element | Document | null,
  rootMargin: string,
  threshold: number
};

const Introduction = () => {
  const colors = [
    [249, 65, 68],
    [144, 190, 109],
    [249, 199, 79],
    [67, 170, 139],
    [187, 92, 183],
    [88, 180, 209],
    [249, 65, 68],
    [249, 199, 79],
    [67, 170, 139],
    [187, 92, 183],
  ];

  const lightRef = useRef() as any;

  const [lights, setLights] = useState(new Array(colors.length).fill(false));

  useEffect(() => {
    setTimeout(() => setLights(lights.map(v => !v)), colors.length * 100 + 400);
  }, [lights]);

  useEffect(() => {
    const options: observerOptionTypes  = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
      });
    }, options);  

    observer.observe(lightRef.current);
  }, []);

  return (
    <IntroductionStyled>
      <div className="Introduction_wrap">
        <p>무언가를 끊임없이 기획하고 아이디어 내는, <b>성장하는 개발자</b>를 꿈꾸고 있습니다.</p>

        <div className="lights" ref={lightRef}>
          {lights.map((v, key) => (
            <div key={key} className={v ? 'on' : 'off'} style={{
              background: `rgb(${colors[key]})`, 
              boxShadow: `0 .3rem 1rem rgba(${colors[key]}, .7)`,
              transitionDelay: `${Math.floor(key/10)}.${key % 10}s`
            }}></div>
          ))}
        </div>
      </div>
    </IntroductionStyled>
  );
};

export default Introduction;
