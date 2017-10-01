import React, { Component } from 'react';

class WeatherIcon extends Component{
	render(){
		const timeOfDay = (this.props.time > 7 && this.props.time < 18) ? 'day' : 'night';
		const className = `weather-icon wi wi-owm-${timeOfDay}-${this.props.weatherCode}`;

		return <i className={className}></i>;
	}
}
export default WeatherIcon;