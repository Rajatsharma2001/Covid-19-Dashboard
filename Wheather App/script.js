async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "your_api_key"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    if (data.cod === "404") {
      document.getElementById("weather-result").innerHTML = "City not found!";
      return;
    }
  
    document.getElementById("weather-result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <p>🌬️ Wind: ${data.wind.speed} m/s</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>☁️ Condition: ${data.weather[0].main}</p>
    `;
  }
  