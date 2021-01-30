import React from 'react'
import PropTypes from 'prop-types'
import WeatherIcon from './WeatherIcon'
import WeatherDetails from './WeatherDetails'

const Widget = ({weatherCode, time, city, temperature, humid, descript, windSpeed}) => {
  return (
    <div className="widget">
      <WeatherIcon
        weatherCode={weatherCode}
        time={time}/>
      <WeatherDetails
        city={city}
        temperature={temperature}
        humidity={humid}
        descript={descript}
        windSpeed={windSpeed}/>
    </div>
  )
}

Widget.propTypes = {
  icon: PropTypes.string,
  weatherCode: PropTypes.number,
  time: PropTypes.number,
  city: PropTypes.string.isRequired,
  temperature: PropTypes.number,
  humid: PropTypes.number,
  descript: PropTypes.string.isRequired,
  windSpeed: PropTypes.number
}

export default Widget
