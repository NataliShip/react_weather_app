import React, { Component } from 'react';

import WeatherDetails from './components/WeatherDetails';
import WeatherIcon from './components/WeatherIcon';
import './App.css';

class App extends Component {
	state = {
		icon: '',
		time: 1,
		minutes: '',
		city: '',
		temperature: '',
		fetching: true,
		weatherCode: ''
	}

	componentDidMount() {
		this.fetchIP();
	}

	fetchWeatherData = city => {
		const baseUrl = `http://api.openweathermap.org`;
		const path = `/data/2.5/weather`;
		const appId = `0ce0696e903175c9d64f88fccfa096a9`;
		const query = `units=metric&lang=ru&appid=${appId}`;

		fetch(`${baseUrl}${path}?q=${city}&${query}`)
			.then(response => response.json())
			.then(data => {
				const date = new Date();
				const time = date.getHours();
				let minutes = date.getMinutes();
				if (minutes<10) {minutes = '0'+ minutes}

				this.setState({
					time,
					minutes,
					city,
					temperature: Math.round(data.main.temp),
					weatherCode: data.weather[0].id,
					fetching: false
				});
			})
			.catch(error => console.error(error));
	}

	fetchIP = () => {
		fetch('//freegeoip.net/json/')
			.then(response => response.json())
			.then(({city}) => this.fetchWeatherData(city))
			.catch(error => console.log(error));
	}

	render() {
		const { city, icon, time, minutes, temperature, fetching, weatherCode } = this.state;
		return fetching ?
			<div className="app">Загрузка...</div>
			:
			<div className="app" data-hour={time}>
				<div className="widget">
					<WeatherIcon
						icon={icon}
						weatherCode={weatherCode}
						time={time}/>
					<WeatherDetails
						temperature={temperature}
						city={city}/>
				</div>
				<div className="time">
					Последнее обновление {time}:{minutes}
				</div>
			</div>;
	}

}
export default App;


