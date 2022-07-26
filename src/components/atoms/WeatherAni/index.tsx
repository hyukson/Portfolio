import { useEffect, useRef, useState} from "react";
import { WeatherAniStyled } from "./styled";

interface WeatherAniTypes {
  nowWeather: string
}

const WeatherAni = ({nowWeather}: WeatherAniTypes) => {
  const canvas = useRef() as any;
  const handle = useRef([]) as any;

  const [[width, height], setSize] = useState<number[]>([window.innerWidth, window.innerHeight]);

  const data = [] as any;

  const randomRadius = (defaultSize = 0.5) => Math.random() * 1 + defaultSize;

  useEffect(() => {    
    const showWeather = () => {
      handle?.current?.map((v: number) => clearInterval(v));
      
      [makeSnow, makeStar, makeRain][["snow", "star", "rain"].indexOf(nowWeather)]();
    }

    const resizeing = () => {
      setSize([window.innerWidth, window.innerHeight]);
    }
    
    showWeather();
    
    window.addEventListener("resize", resizeing);

    return () => {
      window.removeEventListener("resize", resizeing);
    }
    
  }, [nowWeather, width, height]);

  const makeRain = () => {
    data.length = 0;

    while(data.length < 200) {
      const x = Math.random() * width;
      const y = Math.random() * height;

      const size = randomRadius(50);
      const speed = Math.random() * 5 + 5;
      
      data.push({x, y, size, speed});
    }

    handle.current.push(setInterval(moveRain, 30));
  }

  const moveRain = () => {
    for (let i = 0; i < data.length; i++) {
      data[i].x += Math.random() * 0.5;
      data[i].y += data[i].speed;

      if (data[i].x > width) {
        data[i].x = 0;
      }
 
      if (data[i].y > height) {
        data[i].y = 0;
      }
    }

    drawRain();
  };

  const drawRain = () => {
    const ctx = canvas?.current?.getContext("2d");  

    ctx.globalCompositeOperation = `source-over`;
    
    ctx.clearRect(0, 0, width, height);
    
    data.forEach((v: any) => {
      ctx.beginPath();
      
      const gradient = ctx.createLinearGradient(v.x, v.y, v.x + 3, v.y + v.size);
      gradient.addColorStop(1, `rgba(255, 255, 255, .2)`);
      gradient.addColorStop(0, `transparent`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(v.x, v.y, 3, v.size);
      ctx.closePath();
    });
  };

  const makeSnow = () => {
    data.length = 0;

    while(data.length < 200) {
      const x = Math.random() * width;
      const y = Math.random() * height;

      const size = randomRadius(1.6);
      const speed = Math.random() * 1 + 0.3;
      const dir = [-1, 1][Math.floor(Math.random() * 2)];
      
      data.push({x, y, size, speed, dir});
    }

    handle.current.push(setInterval(moveSnow, 30));
  }

  const moveSnow = () => {
    for (let i = 0; i < data.length; i++) {
      const speed = data[i].speed;

      data[i].x += data[i].dir * speed;
      data[i].y += speed;
      
      if (Math.floor(Math.random() * 100) === 1) {
        data[i].dir *= -1;
      }

      if (data[i].y > height) {
        data[i].y = -data[i].size;
      }
    }

    drawSnow();
  };

  const drawSnow = () => {
    const ctx = canvas?.current?.getContext("2d");  

    ctx.clearRect(0, 0, width, height);

    data.forEach((v: any) => {
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, .6)`;
      ctx.arc(v.x, v.y, v.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    });
  };

  const makeStar = () => {
    data.length = 0;

    const maxSize = Math.min(width, height);

    while(data.length < 300) {
      const radius = Math.random() * maxSize + 100;

      const deg = Math.random() * 360;
      const size = randomRadius();
      
      data.push({radius, deg, size});
    }

    handle.current.push(setInterval(moveStar, 30));
  }

  const moveStar = () => {
    for (let i = 0; i < data.length; i++) {
      const deg = data[i].deg;

      data[i].deg = deg+0.1 > 360 ? 0 : deg+0.1;
    }

    drawStar();
  };
  
  const drawStar = () => {
    const ctx = canvas?.current?.getContext("2d");  

    ctx.clearRect(0, 0, width, height);

    data.forEach((v: any) => {
      const [x, y] = getPos(v.radius, v.deg);

      ctx.beginPath();
      ctx.fillStyle = `rgba(241, 191, 0, .6)`;
      ctx.arc(x, y, v.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    });
  }

  const getPos = (r: number, deg: number): number[] => {
    const radian = Math.PI / 180 * deg

    return [
      // 반지름 길이, 각도 
      r * Math.cos(radian) + width/2,
      r * Math.sin(radian) + height/2
    ];
  }

  return <WeatherAniStyled>
    <canvas width={width} height={height} ref={canvas}></canvas>
  </WeatherAniStyled>
}

export default WeatherAni;