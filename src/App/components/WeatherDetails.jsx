import React from 'react'
import PropTypes from 'prop-types'

const WeatherDetails = ({city, temperature, humidity, descript, windSpeed}) => {
	return(
		<div className="weather-details">
			<div className="city">{city}</div>
			<div className="temperature">{temperature} &deg; C</div>
			<div className="descript">{descript}</div>
			<div className="humidity">Влажность {humidity} %</div>
			<div className="windSpeed">Скорость ветра {windSpeed} м/c</div>
		</div>
	)
}

WeatherDetails.propTypes = {
	city: PropTypes.string.isRequired,
	temperature: PropTypes.number,
	humid: PropTypes.number,
	descript: PropTypes.string.isRequired,
	windSpeed: PropTypes.number
}

export default WeatherDetails
