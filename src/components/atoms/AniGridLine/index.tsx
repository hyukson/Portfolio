import { useEffect, useRef } from "react";
import { AniGridLineStyled } from "./styled";

interface AniGridLineTypes {
  width: number;
  height: number;
}

interface lineDataTypes {
  color: string;
  stack: Array<number[]>;
  process: number;
}

const AniGridLine = ({width, height}: AniGridLineTypes) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [stacks, setStacks] = useState<lineDataTypes[]>([]);
  let stacks = [] as lineDataTypes[];

  const speed: number = 4;
  const line: number = 80;
  
  const [cw, ch]: number[] = [width, height];
  const rowSize: number = cw / line;

  useEffect(() => draw(), []);
  
  const AnimateDraw = (lineData: lineDataTypes) => {
    const ctx = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D;
    
    const { color, stack, process } = lineData;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 4;
  
    ctx.beginPath();  
    ctx.moveTo(...(stack.shift() as [0, 0]));
  
    stack.slice(0, process).forEach(line => ctx.lineTo(line[0], line[1]));
    
    if (process < 20) lineData.process++;
    
    ctx.stroke();
    ctx.closePath();

    return stacks.length;
  }

  const draw = () => {
    drawLine();
    
    stacks = stacks.filter(v => v.stack[0] && AnimateDraw(v));
    
    window.requestAnimationFrame(draw);
  }
  
  const drawLine = () => {
    const ctx = canvasRef.current?.getContext("2d") as CanvasRenderingContext2D;

    ctx.clearRect(0, 0, cw, ch);
    
    ctx.strokeStyle = "#f0f5ff";
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    
    // 바둑판 선 그리기
    for (let linePos = 0; linePos <= cw; linePos += rowSize) {
      // 가로선
      ctx.moveTo(linePos, 0);
      ctx.lineTo(linePos, ch);
  
      // 세로선
      ctx.moveTo(0, linePos);
      ctx.lineTo(cw, linePos);
    }
    
    ctx.stroke();
    ctx.closePath();
  }
  
  const newMake = (x: number = 0, y: number = 0): lineDataTypes => {
    const stack: Array<number[]> = [];
    
    const dirX = [1, -1][Math.floor(Math.random() * 2)];
    
    const line = rowSize / speed;
    
    while (!(cw <= x || x <= 0 || ch <= y || y <= 0)) {
      const dirY = [1, -1, 0][Math.floor(Math.random() * 3)];
      
      const moveLinePos = (Math.floor(Math.random() * 2) + 2) * speed;
      
      for (let cols = 0; cols < line; cols++) {
        x += dirX * moveLinePos;
        stack.push([x, y]);
      }
      
      if (dirY === 0) { 
        continue;
      }
  
      for (let cols = 0; cols < line; cols++) {
        y += dirY * moveLinePos;
        stack.push([x, y]);
      }
    }
    
    const colors = [
      '#7400b8',
      '#6930c3',
      '#5e60ce',
      '#5390d9',
      '#4ea8de',
      '#48bfe3',
      '#56cfe1',
      '#64dfdf',
      '#72efdd',
      '#80ffdb'
    ];
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return {stack, color, process: 1};
  }

  const makeLine = (e: any) => {    
    if (stacks.filter(v => v.stack.length).length > 50) {
      return;
    }

    const stack = newMake( 
      Math.round(e.nativeEvent.offsetX / rowSize) * rowSize,
      Math.round(e.nativeEvent.offsetY / rowSize) * rowSize
    );

    stacks.push(stack);
  }
  
  return (
    <AniGridLineStyled>
      {/*clone coding - https://robertcooper.me/ */}
      <canvas ref={canvasRef} onMouseMove={makeLine} width={width} height={height} />
    </AniGridLineStyled>
  );
}

AniGridLine.defaultProps = {
  width: 1920,
  height: 360,
};

export default AniGridLine;
