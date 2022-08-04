import { useRef } from "react";
import { CodeBlockStyled } from "./styled";

interface CodeBlockTypes {
  codes: string[];
}

const CodeBlock = ({codes}: CodeBlockTypes) => {
  const lineRef = useRef<(HTMLDivElement | null)[]>([]);

  return <CodeBlockStyled>
    <div className="header">
      <div className="mac">
        <div></div><div></div><div></div>
      </div>

      <div className="tabList">
        <div>PROFILE</div>
        <div>CARRER</div>
        <div>LICENSES</div>
      </div>
    </div>

    <div className="codeBlock">
      {codes.map((v, k) => (
        <div className="line" ref={el => lineRef.current.push(el)}>
          <div className="num">{k+1}</div>
          <div className="code">{v}</div>
        </div>
      ))}
      
    </div>
  </CodeBlockStyled>
}

export default CodeBlock;