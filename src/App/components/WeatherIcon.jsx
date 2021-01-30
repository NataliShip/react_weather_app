import React from 'react'
import PropTypes from 'prop-types'

const WeatherIcon = ({time, weatherCode}) => {
	const timeOfDay = (time > 7 && time < 18) ? 'day' : 'night'
	const className = `weather-icon wi wi-owm-${timeOfDay}-${weatherCode}`

	return <i className={className} />
}

WeatherIcon.propTypes = {
	weatherCode: PropTypes.number,
	time: PropTypes.number
}

export default WeatherIcon
