import { useEffect, useRef } from "react";
import { ObserverOptionTypes } from "../../../interfaces/ObserverTypes";
import observer from "../../../utils/observer";
import { CodeBlockStyled } from "./styled";

interface CodeBlockTypes {
  codes: string[];
}

const CodeBlock = ({codes}: CodeBlockTypes) => {
  const lineRef = useRef<(HTMLDivElement | null)[]>([]);
  const codeBlockRef = useRef<any>();

  useEffect(() => {
    // 딜레이 기능 ( 마이크로초 )
    function wait(ms: number) {
      return new Promise(res => setTimeout(res, ms))
    }

    // 타이핑 효과
    const typing = async () => {  
      const $text = lineRef.current.shift();

      const letter: string[] = (codes.shift() || "").split("");

      if (!$text) return;

      $text.innerHTML = "";

      $text.classList.add('cursor');

      while (letter.length) {
        await wait(50);

        if (letter[0] === "<") {
          const tags = letter.splice(0, letter.indexOf(">"));

          letter.shift();
          tags.shift();

          const tag = tags.join("");

          while (letter[0] !== "<") {
            await wait(50);
            $text.innerHTML += `<${tag}>${letter.shift()}</${tag}>`;
          }

          letter.splice(0, letter.indexOf(">")+1);
        }

        $text.innerHTML += letter[0] === "&" ? letter.splice(0, 3).join("") : letter.shift() || '';
      }
    
      // 잠시 대기
      await wait(600);

      $text.classList.remove('cursor');

      codes.length && typing();
    };

    const options: ObserverOptionTypes  = {
      root: null,
      rootMargin: "10px",
      threshold: .1,
    };

    const show = (entry: IntersectionObserverEntry) => {
      console.log(entry);
      entry.isIntersecting && typing();
    }
    console.log(codeBlockRef.current);
    observer({options, targets: codeBlockRef.current, callback: show});
  }, [codes]);

  return <CodeBlockStyled ref={codeBlockRef}>
    <div className="header">
      <div className="mac">
        <div></div><div></div><div></div>
      </div>
    </div>

    <div className="codeBlock">
      {codes.map((code: string, k) => (
        <div key={k} className="line">
          <div className="num">{k+1}</div>
          <div className="code" ref={el => lineRef.current[k] = el}></div>
        </div>
      ))}
    </div>
  </CodeBlockStyled>
}

export default CodeBlock;