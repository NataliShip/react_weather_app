import React, { Component } from 'react';

import './App.css';
import WeatherIcon from './components/WeatherIcon';
import WeatherDetails from './components/WeatherDetails';

class SaintPetersburg extends Component {
	state = {
		icon: '',
		time: 1,
		city: 'Saint Petersburg',
		temperature: '',
		humid:'',
		descript:'',
		windSpeed:'',
		weatherCode: ''
	}

	componentDidMount() {
		this.fetchWeatherData();
	}

	fetchWeatherData = () => {
		const baseUrl = `http://api.openweathermap.org`;
		const path = `/data/2.5/weather`;
		const appId = `459fc1107972f9ca8e39abe5f2583722`;
		const query = `units=metric&lang=ru&appid=${appId}`;

		fetch(`${baseUrl}${path}?q=Saint%20Petersburg&${query}`)
			.then(response => response.json())
			.then(data => {
				const date = new Date();
				const time = date.getHours();

				this.setState({
					time,
					temperature: Math.round(data.main.temp),
					humid: Math.round(data.main.humidity),
					descript: data.weather[0].description,
					windSpeed: data.wind.speed,
					weatherCode: data.weather[0].id
				});
			})
			.catch(error => console.error(error));
	}


	render() {
		const { icon, time, city, temperature, humid, descript, windSpeed, weatherCode } = this.state;

		return (
				<div data-hour={time} className="widget">
					<WeatherIcon
						icon={icon}
						weatherCode={weatherCode}
						time={time} />
					<WeatherDetails
						city={city}
						temperature={temperature}
						humidity={humid}
						descript={descript}
						windSpeed={windSpeed}/>
				</div>
			)
	}
}

export default SaintPetersburg;