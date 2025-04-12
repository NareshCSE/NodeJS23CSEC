import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    const API_KEY = "YOUR_API_KEY";
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    setData(response.data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Temp: {data.main.temp}°C</p>
          <p>Weather: {data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
