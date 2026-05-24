import Weather from "./Weather";

const Country = ({ country }) => (
	<div>
		<h1>{country.name.common}</h1>
		<p>capital {country.capital?.[0]}</p>
		<p>area {country.area}</p>
		<h3>languages:</h3>
		<ul>
			{Object.values(country.languages || {}).map(lang => (
				<li key={lang}>{lang}</li>
			))}
		</ul>
		<img src={country.flags.png} alt={`flag of ${country.name.common}`} width="150" />
		<Weather capital={country.capital?.[0]} latlng={country.capitalInfo?.latlng || country.latlng} />
	</div>
);

export default Country;