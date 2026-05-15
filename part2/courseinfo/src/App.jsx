import { Parts } from "./Components/parts"

const App = () => {
	const course = {
		id: 1,
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3
			},
			{
				name: 'Redux',
				exercises: 11,
				id: 4
			}
		]
	}

	return <div>
		<h1>{course.name}</h1>
		{course.parts.map(partsDet =>
			<Parts key={partsDet.id} name={partsDet.name} exercises={partsDet.exercises} />
		)}

		<p><strong>total of {course.parts.reduce(
			(accumulator, currentValue) => accumulator + currentValue.exercises,
			0)} exercises</strong></p>
	</div>
}

export default App