export const fetchWeatherData = (city, setData) => {
  const baseUrl = `http://api.openweathermap.org`
  const path = `/data/2.5/weather`
  const appId = `0ce0696e903175c9d64f88fccfa096a9`
  const query = `units=metric&lang=ru&appid=${appId}`

  fetch(`${baseUrl}${path}?q=${city}&${query}`)
    .then(response => response.json())
    .then(data => {
      const date = new Date()
      const time = date.getHours()
      let minutes = date.getMinutes()
      if (minutes < 10) {
        minutes = '0'+ minutes
      }

      setData({
        time,
        minutes,
        city,
        temperature: Math.round(data.main.temp),
        humid: Math.round(data.main.humidity),
        descript: data.weather[0].description,
        weatherCode: data.weather[0].id,
        windSpeed: data.wind.speed
      })
    })
    .catch(error => console.error(error))
}

export const fetchIP = (setData) => {
  fetch('https://freegeoip.app/json/')
    .then(response => response.json())
    .then(({city}) => fetchWeatherData(city, setData))
    .catch(error => console.log(error))
}
