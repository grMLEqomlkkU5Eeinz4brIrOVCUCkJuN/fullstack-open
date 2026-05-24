import axios from "axios";

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api";

const getAll = () => axios.get(`${BASE_URL}/all`).then(res => res.data);

const getWeather = (lat, lon) => {
	const apiKey = import.meta.env.VITE_SOME_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
	return axios.get(url).then(res => res.data);
};

export default { getAll, getWeather };