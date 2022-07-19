import { useEffect, useRef, useState } from "react";
import { IntroductionStyled } from "./styled";

interface observerOptionTypes {
  root: Element | Document | null,
  rootMargin: string,
  threshold: number
};

const Introduction = () => {
  const colors: number[][] = [
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

  // 글자 모음
  const letters: string[] = [
    "무언가를 끊임없이 기획하고 아이디어 내는, <b>프론트엔드 개발자</b>를 꿈꾸고 있습니다.", 
    "문제에 부딪혀도 해결할 수 있는 실력을 가지기 위해서 노력하고 있습니다.", 
    "공부하고 배운 것을 <b>공유하고 기록</b>하는 것을 좋아합니다.",
  ];

  // 글자 입력 속도
  const speed: number = 70;

  // 타이핑 효과
  const typing = async () => {  
    const $text = lightRef.current.children[0];

    const letter: string[] = letters[0].split("");

    while (letter.length) {
      await wait(speed);

      if (letter[0] === "<") {
        letter.splice(0, 3);

        while (letter[0] !== "<") {
          await wait(speed);
          $text.innerHTML += `<b>${letter.shift()}</b>`;
        }

        letter.splice(0, 4);
      }

      $text.innerHTML += letter.shift();
    }
    
    // 잠시 대기
    await wait(2000);
    
    // 지우는 효과
    remove();
  }

  // 글자 지우는 효과
  const remove = async () => {
    const $text = lightRef.current.children[0];

    const letter: string[] = letters[0].split("");
    
    while (letter.length) {
      await wait(speed - 30);
      
      if (letter.pop() === ">") {
        letter.reverse().splice(0, 3);

        while (letter[0] !== ">") {
          await wait(speed - 30);
          
          letter.shift();
          $text.innerHTML = [...letter].reverse().join("") + '</b>';
        }  

        letter.reverse().splice(letter.length-3, 3);
      }

      $text.innerHTML = letter.join("");
    }
    
    await wait(100);

    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    letters.push(letters.shift() || '');
    typing();
  }

  // 딜레이 기능 ( 마이크로초 )
  function wait(ms: number) {
    return new Promise(res => setTimeout(res, ms))
  }

  useEffect(() => {
    setTimeout(() => setLights(lights.map(v => !v)), colors.length * 100 + 400);
  }, [lights]);

  useEffect(() => {
    const options: observerOptionTypes  = {
      root: null,
      rootMargin: "10px",
      threshold: .5,
    };
      
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList[entry.isIntersecting ? "add" : "remove"]("show");
      });
    }, options);  

    observer.observe(lightRef.current);

    typing();
  }, []);

  return (
    <IntroductionStyled>
      <div className="Introduction_wrap" ref={lightRef}>
        <p></p>

        <div className="lights">
          {lights.map((v, key) => (
            <div key={key} className={v ? 'on' : 'off'} style={{
              background: `rgb(${colors[key]})`, 
              boxShadow: `0 .3rem 1rem rgba(${colors[key]}, .7)`,
              transitionDelay: `${Math.floor(key/10)}.${key % 10}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="block-list">
        <div className="block-container">
          <div className="btn-back btn-back-1"></div>
          <div className="btn-front">
            <i className="fas fa-cloud-showers-heavy"></i>
          </div>
        </div>
        <div className="block-container">
          <div className="btn-back btn-back-2"></div>
          <div className="btn-front">
            <i className="fas fa-snowflake"></i>
          </div>
        </div>
        <div className="block-container">
          <div className="btn-back btn-back-3"></div>
          <div className="btn-front">
            <i className="fas fa-moon"></i>
          </div>
        </div>
      </div>
    </IntroductionStyled>
  );
};

export default Introduction;
