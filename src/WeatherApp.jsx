import SearchBox from "./SearchBox";

import InfoBox from "./Infobox";
import { useState } from "react";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Julana",
    feelslike: 24.05,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 22.0,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App By Ankit</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
