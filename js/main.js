const apiKey = "ad01204e87a5287a4a2a15b0f2df9754";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")

const checkWeather = async function(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";

        document.querySelector(".weather").style.display = "none"
    }

    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".country").innerHTML = data.sys.country;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/cloudy.png";
    } else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "img/sun.png";
    } else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png";
    } else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/weather-rain.png";
    } else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "img/cloudy-moon.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    
}
  
// When clicked call function
searchBtn.addEventListener("click", (e) => {
    checkWeather(searchInput.value);
})

