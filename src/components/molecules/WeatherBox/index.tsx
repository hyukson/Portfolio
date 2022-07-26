import { useState } from "react";

import WeatherAni from "../../atoms/WeatherAni";
import { WeatherBoxStyled } from "./styled";

const WeatherBox = () => {
  const [nowWeather, setNowWeather] = useState<string>("star");

  const click = (weather: string) => {
    setNowWeather(weather);
  }

  const weathers = ["star", "snow", "rain"];
  const icons = ["fas fa-moon", "fas fa-snowflake", "fas fa-cloud-showers-heavy"];

  return <WeatherBoxStyled>
    <WeatherAni nowWeather={nowWeather} />
 
    <div className="block-list">
      {weathers.map((v: string, i: number) => (
        <div key={i} className="block-container" onClick={() => click(v)}>
          <div className="btn-back"></div>
          <div className="btn-front">
            <i className={icons[i]}></i>
          </div>
        </div>
      ))}
    </div>
  </WeatherBoxStyled>;
}

export default WeatherBox;