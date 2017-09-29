import React, { Component } from 'react';
import WeatherDetails from './components/WeatherDetails';

import './App.css';

class App extends Component {
	state = {
		city: 'Kirov',
		temperature: '12'
	}

	render() {
		const { city, temperature } = this.state;
		return (
			<div className="app">
				<div className="widget">
					<div>Погода сегодня</div>
					<WeatherDetails
						temperature={temperature}
						city={city}/>
				</div>
			</div>
		)
	}

}
export default App;


