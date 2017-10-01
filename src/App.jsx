import React, { Component } from 'react';
import WeatherDetails from './components/WeatherDetails';

import './App.css';

class App extends Component {
	state = {
		city: '',
		temperature: '',
		fetching: true
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
		const { city, temperature, fetching } = this.state;
		return fetching ?
			<div className="app">Загрузка...</div>
			:
			<div className="app">
				<div className="widget">
					<div>Погода сегодня</div>
					<WeatherDetails
						temperature={temperature}
						city={city}/>
				</div>
			</div>;
	}

}
export default App;


