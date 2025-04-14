// OpenWeatherMap API
const apiKey = '33b1afc256cb6c85f82e6f71b22b7fca'; // Replace with your OpenWeatherMap API key
const city = 'HYDERABAD'; // Replace with your city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('weather').innerText = `Temperature: ${data.main.temp}°C, Condition: ${data.weather[0].main}`;
    })
    .catch(error => console.error('Error fetching weather data:', error));

// FruityVice API
const fruitsApi = 'https://www.fruityvice.com/api/fruit/all';

fetch(fruitsApi)
    .then(response => response.json())
    .then(data => {
        const fruitsList = document.getElementById('fruits');
        data.forEach(fruit => {
            const listItem = document.createElement('li');
            listItem.innerText = `${fruit.name} - ${fruit.nutritions.price}`;
            fruitsList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching fruits data:', error));
