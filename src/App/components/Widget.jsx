import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import WeatherIcon from './WeatherIcon'
import WeatherDetails from './WeatherDetails'
import { fetchWeatherData } from '../../helpers'

const initialState = {
  time: 0,
  temperature: 0,
  humid: 0,
  weatherCode: 0,
  descript:'',
  windSpeed: 0,
}

const Widget = ({city}) => {
  const [data, setData] = useState({...initialState})

  useEffect(() => {
    fetchWeatherData(city, setData)
  }, [])

  return (
    <div className="widget">
      <WeatherIcon
        weatherCode={data.weatherCode}
        time={data.time}/>
      <WeatherDetails
        city={city}
        temperature={data.temperature}
        humidity={data.humid}
        descript={data.descript}
        windSpeed={data.windSpeed}/>
    </div>
  )
}

Widget.propTypes = {
  city: PropTypes.string.isRequired
}

export default Widget
