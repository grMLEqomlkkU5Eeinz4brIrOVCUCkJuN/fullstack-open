import { useState } from 'react'

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const calculateAverage = () => {
		return (good - bad) / (calculateTotal()) || 0;
	}

	const calculatePositiveFeedback = () => {
		return (good) / (calculateTotal()) * 100 || 0;
	}

	const calculateTotal = () => {
		return good + bad + neutral || 0
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
			<div>all {calculateTotal()} </div>
			<div>average {calculateAverage()}</div>
			<div>positive {calculatePositiveFeedback()}</div>
		</div>
	)
}

export default App