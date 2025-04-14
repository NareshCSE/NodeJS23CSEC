import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'bootstrap/dist/css/bootstrap.min.css';

const Weather = () => {
    const apiKey = '751e91b5732623498767717c10c1840c';
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);
    const chartInstanceRef = useRef(null);

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleCitySubmit = (event) => {
        event.preventDefault();
        if (city.trim()) {
            setLoading(true);
            setSubmitClicked(true);
            setWeatherData(null);
            setForecastData(null);
        }
    };

    useEffect(() => {
        if (!submitClicked || !city) return;

        setSubmitClicked(false);

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.main && data.weather) {
                    setWeatherData(data);
                } else {
                    console.error('Error: Invalid weather data');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
                setLoading(false);
            });

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
            .then((response) => response.json())
            .then((data) => setForecastData(data))
            .catch((error) => console.error('Error fetching forecast data:', error));

    }, [submitClicked,city]);

    useEffect(() => {
        if (forecastData && forecastData.list) {
            const labels = [];
            const temperatures = [];

            for (let i = 0; i < 6; i++) {
                const entry = forecastData.list[i];
                if (entry && entry.main && entry.main.temp) {
                    const time = new Date(entry.dt_txt).getHours();
                    labels.push(`${time}:00`);
                    temperatures.push(entry.main.temp);
                }
            }

            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            const ctx = document.getElementById('weatherChart').getContext('2d');
            chartInstanceRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Temperature (°C)',
                        data: temperatures,
                        borderColor: 'rgba(200, 190, 135, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [forecastData]);

    return (
        <div className="content-wrapper">
            <h1>Weather API</h1>

            <div className="weather-container">
                <form onSubmit={handleCitySubmit}>
                    <input
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        placeholder="Enter city name"
                        className="form-control"
                    />
                    <button type="submit" className="btn btn-primary mt-2">Get Weather</button>
                </form>
            </div>

            {loading && <p>Loading weather data...</p>}

            {weatherData && !loading ? (
                <div className="weather-info">
                    <h6>Temperature: {weatherData.main.temp}°C</h6>
                    <p>{weatherData.weather[0].description}</p>
                    <img
                        src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                        alt="Weather Icon"
                    />
                </div>
            ) : null}

            {forecastData && !loading ? (
                <div className="chart-container">
                    <canvas id="weatherChart"></canvas>
                </div>
            ) : null}
        </div>
    );
};

export default Weather;
