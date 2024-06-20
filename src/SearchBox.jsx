import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "800d8fabe027c046a9ba4c76bd216ae6";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(city);
    console.log(jsonResponse);

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handlesubmit = async (event) => {
    event.preventDefault();

    console.log(city);
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handlesubmit}>
        <TextField
          id="city"
          label="Search City"
          variant="outlined"
          required
          value={city}
          on
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
