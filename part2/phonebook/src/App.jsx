import { useState } from 'react'

const PersonComponent = ({ name }) => {
	return <div>{name}</div>
}

const PeopleCollection = ({ persons }) => {
	return <div>{persons.map(person => <PersonComponent key={person.id} name={person.name} />)}</div>
}

const checkDuplicates = (nameToAdd, array) => {
	return array.some((element) => nameToAdd === element.name );
}


const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', id: 0 }
	])
	const [newName, setNewName] = useState('')

	const addName = (event) => {
		event.preventDefault();
		if (checkDuplicates(newName, persons)) {
			return alert(`${newName} is already added to phonebook`);
			setNewName("");
		} else {
			setPersons(persons.concat({ name: newName, id: persons.length }));
			setNewName("");
		}
	}

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addName}>
				<div>
					name: <input value={newName}
						onChange={handleNameChange} />
				</div>

				<div><button type="submit">add</button></div>
			</form>
			<h2>Numbers</h2>
			<PeopleCollection persons={persons}/>
		</div>
	)
}

export default App