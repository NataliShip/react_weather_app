import React, { Component } from 'react';

class WeatherDetails extends Component{
	render(){
		return(
			<div className="weather-details">
				<div className="city">{this.props.city}</div>
				<div className="temperature">{this.props.temperature} &deg; C</div>
			</div>
		)
	}
}
export default WeatherDetails;

