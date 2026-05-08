const Header = ({ course }) => {
	return <h1>{course.name}</h1>
}

const Part = ({ name, exercises }) => <p>{name} {exercises}</p>

const Content = ({ course }) => {
	const content = course.parts.map(part => {
		return <Part name={part.part} exercises={part.exercises}/>
	});
	return <div><p>{content}</p></div>
}

const Total = ({ course }) => {
	const total = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
	return <p>{total}</p>
}

const App = () => {

	const course = {
		name: "Half Stack application development",
		parts: [
			{
				part: "Fundamentals of React",
				exercises: 10
			},
			{
				part: "Using props to pass data",
				exercises: 7
			},
			{
				part: "State of a component'",
				exercises: 14
			},
		]
	}

	return (
		<div>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</div>
	)
}

export default App