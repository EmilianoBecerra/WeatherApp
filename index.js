
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(config.API_URL + city + `&appid=${config.API_KEY}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
  } else {
    let data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML =
      Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    switch (data.weather[0].main) {
      case 'Clouds':
        weatherIcon.src = './imgs/clouds.png';
        break;
      case 'Clear':
        weatherIcon.src = './imgs/clear.png';
        break;
      case 'Rain':
        weatherIcon.src = './imgs/rain.png';
        break;
      case 'Drizzle':
        weatherIcon.src = './imgs/drizzle.png';
        break;
      case 'Snow':
        weatherIcon.src = './imgs/snow.png';
        break;
      default:
        break;
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none'
  }
}

searchBtn.addEventListener('click', (ev) => {
  checkWeather(searchBox.value);
});
