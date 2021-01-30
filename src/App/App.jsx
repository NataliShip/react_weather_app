import React, {Component} from 'react'
import Widget from './components/Widget'
import './App.css'

const cities = ['Москва', 'Санкт Петербург']

class App extends Component {
	state = {
		time: 1,
		minutes: '',
		city: '',
		temperature: '',
		humid:'',
		weatherCode: '',
		descript:'',
		windSpeed:'',
		fetching: true
	}

	componentDidMount() {
		this.fetchIP()
	}

	fetchWeatherData = city => {
		const baseUrl = `http://api.openweathermap.org`
		const path = `/data/2.5/weather`
		const appId = `0ce0696e903175c9d64f88fccfa096a9`
		const query = `units=metric&lang=ru&appid=${appId}`

		fetch(`${baseUrl}${path}?q=${city}&${query}`)
			.then(response => response.json())
			.then(data => {
				const date = new Date()
				const time = date.getHours()
				let minutes = date.getMinutes()
				if (minutes < 10) {
					minutes = '0'+ minutes
				}

				this.setState({
					time,
					minutes,
					city,
					temperature: Math.round(data.main.temp),
					humid: Math.round(data.main.humidity),
					descript: data.weather[0].description,
					weatherCode: data.weather[0].id,
					windSpeed: data.wind.speed,
					fetching: false
				})
			})
			.catch(error => console.error(error))
	}

	fetchIP = () => {
		fetch('https://freegeoip.app/json/')
			.then(response => response.json())
			.then(({city}) => this.fetchWeatherData(city))
			.catch(error => console.log(error))
	}

	render() {
		const {
			fetching,
			time,
			minutes,
			city,
			temperature,
			humid,
			descript,
			windSpeed,
			weatherCode
		} = this.state

		if (!cities.includes(city) && city) {
			cities.push(city)
		}

		return fetching
			? <div className="app">Загрузка...</div>
			: <div className="app" data-hour={time}>
				{
					cities.map(c =>
						<Widget
							key={c}
							{...{weatherCode, time, city: c, temperature, humid, descript, windSpeed}}
						/>
					)
				}
				<div className="time">
					Последнее обновление {time}:{minutes}
				</div>
			</div>
	}
}

export default App
