const apiKey = '260ed430a859a48858d760e4d9e6af8c'

async function fetchWetherData(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    let data = await response.json()
    uiWeatherUpdate(data)
}

let cityName = document.querySelector(".city-name")
let temperature = document.querySelector(".temperature")
let windspeed = document.querySelector(".wind-speed")
let humidity = document.querySelector(".humidity")
let visibility = document.querySelector(".visibility-distance")
let description = document.querySelector(".description-text")
let date = document.querySelector(".date")

function uiWeatherUpdate(value) {
    console.log(value)
    cityName.textContent = value.name
    temperature.textContent = `${Math.round(value.main.temp)}°C`
    windspeed.textContent = `${value.wind.speed} km/h`
    humidity.textContent = `${value.main.humidity} %`
    visibility.textContent = `${value.visibility / 1000} km/h`
    description.textContent = value.weather[0].description

    const currentDate = new Date()
    date.textContent = currentDate.toDateString()
}

const form = document.querySelector(".search-form")
const input = document.querySelector(".search-text")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let city = input.value
    if (city !== "") {
        fetchWetherData(city)
        input.value = "";
    }
})