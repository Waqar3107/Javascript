const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "25d6c554d24dc35a2b13d7163e96ce99";

weatherForm.addEventListener("submit", event => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    getWeatherData(city);
  } else {
    displayError("Please enter a city");
  }
});

function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => displayWeather(data))
    .catch(error => displayError(error.message));
}
function displayWeather(data) {
  const cityName = data.name;
  const temperature = Math.round(data.main.temp) + "°F";
  const humidity = "Humidity: " + data.main.humidity + "%";
  const description = capitalize(data.weather[0].description);
  const emoji = getWeatherEmoji(data.weather[0].main);
  card.innerHTML = `
    <h1 class="cityDisplay">${cityName}</h1>
    <p class="tempDisplay">${temperature}</p>
    <p class="humidityDisplay">${humidity}</p>
    <p class="descDisplay">${description}</p>
    <p class="weatherEmoji">${emoji}</p>
  `;
  card.style.display = "flex";
}
function displayError(message) {
  card.innerHTML = `<p class="errorDisplay">${message}</p>`;
  card.style.display = "flex";
}
function getWeatherEmoji(condition) {
  switch (condition.toLowerCase()) {
    case "clear": return "🌞";
    case "clouds": return "☁️";
    case "rain": return "🌧️";
    case "drizzle": return "🌦️";
    case "thunderstorm": return "⛈️";
    case "snow": return "❄️";
    case "mist":
    case "fog": return "🌫️";
    default: return "🌈";
  }
}
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}