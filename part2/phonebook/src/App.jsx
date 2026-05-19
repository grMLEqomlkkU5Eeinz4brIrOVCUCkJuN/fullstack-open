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
		{ name: 'Arto Hellas', id: 0, number: "040-1234567" }
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState("");

	const addName = (event) => {
		event.preventDefault();
		if (checkDuplicates(newName, persons, "name")) {
			return alert(`${newName} is already added to phonebook`);
			setNewName("");
			setNewNumber("");
		} else {
			setPersons(persons.concat({ name: newName, id: persons.length, number: newNumber }));
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

	return (
		<div>
			<h2>Phonebook</h2>
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
			<PeopleCollection persons={persons}/>
		</div>
	)
}

export default App