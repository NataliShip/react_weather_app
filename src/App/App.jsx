import React, {useEffect, useState} from 'react'
import Widget from './components/Widget'
import { fetchIP } from '../helpers'
import './App.css'

const cities = ['Москва', 'Санкт Петербург']

const App = () => {
	const [data, setData] = useState({time: 0, minutes: '', city: '',})

	useEffect(() => {
		fetchIP(setData)
	}, [])

	if (!cities.includes(data.city) && data.city) {
		cities.push(data.city)
	}

	return (
		<div className="app" data-hour={data.time}>
			{
				cities.map(c =>
					<Widget key={c} city={c} />
				)
			}
			<div className="time">
				Последнее обновление {data.time}:{data.minutes}
			</div>
		</div>
	)
}

export default App
