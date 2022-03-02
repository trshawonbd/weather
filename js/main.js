const API_KEYS = `7ce8dc8c3e04caae4bf01bfd3a4ab5e2`;

const searchCity = () => {
    const cityName = document.getElementById('input-city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => showWeather(data))
    document.getElementById('input-city').value = ''
    

}

const getInformation = (inputField, value) =>{
    const setPlace = document.getElementById(inputField)
    setPlace.innerText = value;

}

const showWeather = (weather) =>{
    console.log(weather)
    getInformation('city-name', weather.name);
    getInformation('weather-in-F', Math.round(weather.main.temp));
    getInformation('status', weather.weather[0].main)

    const url = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    const icon = document.getElementById('icon')
    icon.setAttribute('src', url);
}