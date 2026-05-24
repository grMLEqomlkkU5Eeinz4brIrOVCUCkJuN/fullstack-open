import { useState } from "react";
import Country from "./Country";

const ResultsCountries = ({ countries }) => {
	const [expanded, setExpanded] = useState(null);

	if (countries.length === 0) return null;

	if (countries.length > 10) return <p>Too many matches, specify another filter</p>;

	if (countries.length === 1) return <Country country={countries[0]} />;

	return (
		<div>
			{countries.map(country => (
				<div key={country.cca3}>
					{country.name.common}{" "}
					<button onClick={() => setExpanded(expanded === country.cca3 ? null : country.cca3)}>
						{expanded === country.cca3 ? "hide" : "show"}
					</button>
					{expanded === country.cca3 && <Country country={country} />}
				</div>
			))}
		</div>
	);
};

export default ResultsCountries;