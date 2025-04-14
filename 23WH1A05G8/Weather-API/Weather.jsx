import React, { useEffect, useState } from 'react';
import './styles.css';

function Weather() {
  const [city, setCity] = useState('');  // To store the city input
  const [weatherData, setWeatherData] = useState(null); // To store weather data
  const [error, setError] = useState(null);  // To handle error messages

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeatherData = () => {
    const apiKey = '51d61f340ee9815f08917b41529d5767';  // Replace this with your actual API key
    const encodedCity = encodeURIComponent(city);  // Encode city name for safe URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${apiKey}&units=metric`;  // For temperature in Celsius

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found!');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setError(null); // Reset the error if data is fetched successfully
      })
      .catch((err) => {
        setError(err.message);  // If an error occurs, display it
        setWeatherData(null);
      });
  };

  return (
    <>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </>
  );
}

export default Weather;
