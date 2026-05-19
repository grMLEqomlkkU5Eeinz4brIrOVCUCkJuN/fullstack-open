import { useState } from 'react'

const PersonComponent = ({ name, number }) => {
	return <div>{name} {number}</div>
}

const PeopleCollection = ({ persons }) => {
	return <div>{persons.map(person => <PersonComponent key={person.id} name={person.name} number={person.number}/>)}</div>
}

const checkDuplicates = (item, array, space) => {
	// such a weird thing to do
	return array.some((element) => item === element[`${space}`]);
}


const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState("");
	const [searchTermInput, setSearchTermInput] = useState("");

	const personsToShow = searchTermInput === ""
		? persons
		: persons.filter(person => person.name.toLowerCase().startsWith(searchTermInput.toLowerCase()));

	const addName = (event) => {
		event.preventDefault();
		if (checkDuplicates(newName, persons, "name")) {
			alert(`${newName} is already added to phonebook`);
			setNewName("");
			setNewNumber("");
			return;
		} else {
			setPersons(persons.concat({ name: newName, id: persons.length + 1, number: newNumber }));
			setNewNumber("");
			setNewName("");
		}
	}

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	}

	const handleSearchChange = (event) => {
		setSearchTermInput(event.target.value);
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					filter shown with
					<input value={searchTermInput} onChange={handleSearchChange}/>
				</div>
			</form>

			<br/>

			<form onSubmit={addName}>
				<div>
					name: <input value={newName}
						onChange={handleNameChange} />
				</div>
				<div>
					number: <input value={newNumber}
						onChange={handleNumberChange} />
				</div>

				<div><button type="submit">add</button></div>
			</form>
			<h2>Numbers</h2>
			<PeopleCollection persons={personsToShow}/>
		</div>
	)
}

export default App