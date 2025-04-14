async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "cfe47dda5fe96da396937d517d3b55a2"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
  
      const weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>☁️ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
      `;
    } catch (error) {
      document.getElementById("weather").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
  }
  
