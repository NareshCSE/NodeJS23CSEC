// App.js
import { useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  const getWeather = async () => {
    const apiKey = 'ef8161082d9844eab1052609250402';
    if (!city) {
      setResult("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&units=metric`);
      const data = await response.json();
      if (data.error) {
        setResult("City not found. Please try again.");
      } else {
        setResult(`Temperature in ${city}: ${data.current.temp_c}°C`);
      }
    } catch (error) {
      setResult("Error fetching weather data.");
    }
  };

  return (
    <div className="container">
      <input 
        type="text" 
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city" 
      />
      <button onClick={getWeather}>Get Weather</button>
      <p id="result">{result}</p>
    </div>
  );
};

export default App;
