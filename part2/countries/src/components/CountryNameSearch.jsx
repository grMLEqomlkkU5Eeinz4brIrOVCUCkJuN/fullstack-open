const CountryNameSearch = ({ search, onChange }) => (
	<div>
		find countries <input value={search} onChange={onChange} />
	</div>
);

export default CountryNameSearch;