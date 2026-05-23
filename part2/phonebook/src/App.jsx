import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import personService from "./services/persons"
import Notification from "./components/Notification"
import { useNotifications } from "./hooks/NotificationsHooks"

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState("")
	const [newNumber, setNewNumber] = useState("")
	const [searchTerm, setSearchTerm] = useState("")
	const { message, setMessage } = useNotifications();

	useEffect(() => {
		personService.getAll().then(setPersons)
	}, [])

	const personsToShow = searchTerm === ""
		? persons
		: persons.filter(person => person.name.toLowerCase().startsWith(searchTerm.toLowerCase()))

	const handleAddPerson = async (event) => {
		event.preventDefault()

		const newPerson = {
			name: newName,
			number: newNumber,
		}

		if (persons.some(person => person.name === newName)) {
			alert(`${newName} is already added to phonebook, replace the old number with a new one?`)
			await personService.updateUserNumberByid(newPerson, persons.find(p => p.name === newName).id)
			// personService.getAll().then(setPersons)
			setPersons(await personService.getAll())
			setNewName("")
			setNewNumber("")
			return
		}

		await personService.create(newPerson).then(createdPerson => {
			setPersons(persons.concat(createdPerson))
			setMessage(`Added ${newPerson.name}.`);
			setTimeout(() => {
				setMessage(null);
			}, 2000);
			setNewName("")
			setNewNumber("")
		})
	}

	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value)
	}

	const handleDelete = (id) => {
		const person = persons.find(p => p.id === id)
		if (window.confirm(`Delete ${person.name}?`)) {
			personService.deleteById(id).then(() => {
				setPersons(persons.filter(p => p.id !== id))
			})
		}
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={message} />
			<Filter value={searchTerm} onChange={handleSearchChange} />

			<h3>Add a new</h3>
			<PersonForm
				onSubmit={handleAddPerson}
				onNameChange={handleNameChange}
				onNumberChange={handleNumberChange}
				newName={newName}
				newNumber={newNumber}
			/>

			<h3>Numbers</h3>
			<Persons persons={personsToShow} onDelete={handleDelete} />
		</div>
	)
}

export default App
