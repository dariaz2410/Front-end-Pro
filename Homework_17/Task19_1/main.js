const cityName = document.querySelector(".cityName")
const sun = document.querySelector(".sunrise")
const time = document.querySelector(".localTime")
const localData = document.querySelector(".day")
const humidity = document.querySelector(".humidity")
const pressure = document.querySelector(".pressure")
const wind = document.querySelector(".wind")
const image = document.querySelector(".myImage");
const temperature = document.querySelector(".temperature");
const tempFeelsLike = document.querySelector(".tempFeelsLike");
const weatherConditions = document.querySelector(".weatherConditions");
const btn = document.querySelector(".btn");
const currentTime = document.querySelector(".currentTime");

async function fetchData() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=48.46&lon=35.03&appid=a388e85cfbee9c17eb2e1985283bc481');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();

    cityName.textContent = data.name

    const miliseconds = 1000
    
    const date = new Date((data.sys.sunrise * miliseconds) + (data.timezone * miliseconds));
    
    function addZero(time) {
        if (time < 10) {
            time = "0" + time
            return time
        } else {
            return time
        }
    }

    let sunriseHours = addZero(date.getUTCHours())

    let sunriseMinutes = addZero(date.getUTCMinutes())
  
    sun.textContent = `Sunrise ${sunriseHours}:${sunriseMinutes}`
    
    const utcDate = new Date();
    const localTime = new Date(utcDate.getTime() + (data.timezone * miliseconds))

    let hours = addZero(localTime.getUTCHours())

    let minutes = addZero(localTime.getUTCMinutes())

    time.textContent = `${hours} : ${minutes}`
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];

    const weekday  = weekdays[localTime.getUTCDay()]
    const month = months[localTime.getUTCMonth()]
    const day = localTime.getUTCDate()
    const year = localTime.getUTCFullYear()
    
    localData.textContent = `${month} ${day}, ${year} - ${weekday}`

    humidity.textContent = `Humidity: ${data.main.humidity}%`
    pressure.textContent = `Pressure: ${data.main.pressure} hPa`
    wind.textContent = `Wind: ${data.wind.speed} km/h`

    const img = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    image.setAttribute("src", img);
    
    const meltingTemp = 273.15
    temperature.textContent = `${Math.round(data.main.temp - meltingTemp)} °C`
    tempFeelsLike.textContent = `Feels like: ${Math.round(data.main.feels_like - meltingTemp)} °C`
    weatherConditions.textContent = data.weather[0].main

    currentTime.textContent = `${month} ${day}, ${hours}:${minutes}`

    btn.addEventListener('click', function() {
      fetchData()
    });

  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

fetchData();