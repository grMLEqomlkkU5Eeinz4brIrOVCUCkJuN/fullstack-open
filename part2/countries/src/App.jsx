import { useState, useEffect } from "react";
import countriesService from "./services/countriesService";
import CountryNameSearch from "./components/CountryNameSearch";
import ResultsCountries from "./components/ResultsCountries";

const App = () => {
	const [search, setSearch] = useState("");
	const [allCountries, setAllCountries] = useState([]);

	useEffect(() => {
		countriesService.getAll().then(setAllCountries);
	}, []);

	const filtered = search
		? allCountries.filter(c =>
				c.name.common.toLowerCase().includes(search.toLowerCase())
			)
		: [];

	return (
		<div>
			<CountryNameSearch search={search} onChange={e => setSearch(e.target.value)} />
			<ResultsCountries countries={filtered} />
		</div>
	);
};

export default App;
