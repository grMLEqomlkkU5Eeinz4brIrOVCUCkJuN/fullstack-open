import { useState } from 'react'

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)


	const Statistics = ({ good, bad, neutral }) => {
		const total = good + bad + neutral || 0;

		if (total === 0) return <div>No feedback given</div>
		return (
			<div>
				<div>average: { (good - bad) / (total) || 0 }</div>
				<div>positive: { (good) / (total) * 100 || 0 }</div>
				<div>total: { total || 0 }</div>
			</div>
		)
	}

	return (
		<div>
			<h1>Give Feedback</h1>

			<button onClick={() => setGood(good + 1)}>Good</button>
			<button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
			<button onClick={() => setBad(bad + 1)}>Bad</button>

			<h1>Statistics</h1>

			<div>good {good}</div>
			<div>neutral {neutral}</div>
			<div>bad {bad}</div>
			<Statistics />
		</div>
	)
}

export default App