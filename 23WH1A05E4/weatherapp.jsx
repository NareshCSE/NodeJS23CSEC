import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';
const weather = () => {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  
  const API_KEY = 'abf0644cbf46333994ea58b2fe58b96c'; 
  
  const fetchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].description}</p>
          <p><strong>{weather.main.temp}°C</strong></p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default weather;





weather-css
.weather-app{
    background-color:#fff;
    padding: 10px;
    border-radius:10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0,0.1);
    width: 100%;
    max-width:400px;
    text-align:center;
    margin:20px;
}
