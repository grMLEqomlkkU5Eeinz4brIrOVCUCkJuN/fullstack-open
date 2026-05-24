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
	const { notification, setNotification } = useNotifications();

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
			if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
				const existingPerson = persons.find(p => p.name === newName)
				personService.updateUserNumberByid(newPerson, existingPerson.id)
					.then(updatedPerson => {
						setPersons(persons.map(p => p.id !== existingPerson.id ? p : updatedPerson))
						setNotification({ message: `Updated ${updatedPerson.name}.`, type: "success" });
						setTimeout(() => setNotification({ message: null, type: "success" }), 5000);
						setNewName("")
						setNewNumber("")
					})
					.catch(error => {
						setNotification({ message: `Information of ${newName} has already been removed from server`, type: "error" });
						setTimeout(() => setNotification({ message: null, type: "success" }), 5000);
						setPersons(persons.filter(p => p.id !== existingPerson.id))
					})
			}
			return
		}

		personService.create(newPerson)
			.then(createdPerson => {
				setPersons(persons.concat(createdPerson))
				setNotification({ message: `Added ${newPerson.name}.`, type: "success" });
				setTimeout(() => setNotification({ message: null, type: "success" }), 5000);
				setNewName("")
				setNewNumber("")
			})
			.catch(error => {
				setNotification({ message: `Error adding ${newPerson.name}: ${error.response?.data?.error || error.message}`, type: "error" });
				setTimeout(() => setNotification({ message: null, type: "success" }), 5000);
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
			personService.deleteById(id)
				.then(() => {
					setPersons(persons.filter(p => p.id !== id))
					setNotification({ message: `Deleted ${person.name}.`, type: "success" });
					setTimeout(() => setNotification({ message: null, type: "success" }), 5000);
				})
				.catch(error => {
					setNotification({ message: `Information of ${person.name} has already been removed from server`, type: "error" });
					setTimeout(() => setNotification({ message: null, type: "success" }), 5000);
					setPersons(persons.filter(p => p.id !== id))
				})
		}
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification notification={notification} />
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
