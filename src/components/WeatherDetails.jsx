import React, { Component } from 'react';

class WeatherDetails extends Component{
	render(){
		return(
			<div className="weather-details">
				<div className="city">{this.props.city}</div>
				<div className="temperature">{this.props.temperature} &deg; C</div>
				<div className="descript">{this.props.descript}</div>
				<div className="humidity">Влажность {this.props.humidity} %</div>
				<div className="windSpeed">Скорость ветра {this.props.windSpeed} м/c</div>
			</div>
		)
	}
}
export default WeatherDetails;

