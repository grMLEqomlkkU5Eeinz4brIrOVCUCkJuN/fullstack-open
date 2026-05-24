import { useState, useEffect } from "react";
import countriesService from "../services/countriesService";

const Weather = ({ capital, latlng }) => {
	const [weather, setWeather] = useState(null);

	useEffect(() => {
		if (latlng) {
			countriesService
				.getWeather(latlng[0], latlng[1])
				.then(setWeather)
				.catch(() => console.error("Failed to fetch weather"));
		}
	}, [latlng]);

	if (!weather) return null;

	const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

	return (
		<div>
			<h2>Weather in {capital}</h2>
			<p>temperature {weather.main.temp} Celsius</p>
			<img src={iconUrl} alt={weather.weather[0].description} />
			<p>wind {weather.wind.speed} m/s</p>
		</div>
	);
};

export default Weather;