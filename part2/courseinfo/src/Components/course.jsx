import { Parts } from "./parts"

export const Course = ({ course }) => {
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