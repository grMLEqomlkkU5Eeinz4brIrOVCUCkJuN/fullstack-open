import { useState } from 'react'


const Button = ({ label, onClick }) => {
	return <button onClick={onClick}>{label}</button>
}

const StatisticLine = ({ label, value }) => {
	return <tr><td>{label}</td><td>{value}</td></tr>
}

const Statistics = ({ good, bad, neutral }) => {
	const total = good + bad + neutral || 0;

	if (total === 0) return <div>No feedback given</div>
	return (
		<div>
			<table>
				<StatisticLine label="average" value={(good - bad) / total || 0} />
				<StatisticLine label="positive" value={(good / total * 100) || 0} />
				<StatisticLine label="total" value={total || 0} />
			</table>
		</div>
	)
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<div>
			<h1>Give Feedback</h1>

			<Button label="Good" onClick={() => setGood(good + 1)} />
			<Button label="Neutral" onClick={() => setNeutral(neutral + 1)} />
			<Button label="Bad" onClick={() => setBad(bad + 1)} />

			<h1>Statistics</h1>

			<StatisticLine label="good" value={good} />
			<StatisticLine label="neutral" value={neutral} />
			<StatisticLine label="bad" value={bad} />

			<Statistics good={good} bad={bad} neutral={neutral} />
		</div>
	)
}

export default App