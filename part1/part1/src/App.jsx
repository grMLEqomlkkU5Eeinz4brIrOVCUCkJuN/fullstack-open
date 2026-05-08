const Hello = (props) => {

	if (!props.name || !props.age) return <div><p>Nameless</p></div>
	return (
		<div>
			<p>Hello {props.name}, you are {props.age} years old</p>
		</div>
	)
}

const App = () => {
	const nimi = "Peka";
	const ika = 10;

	return (
		<div>
			<h1>Greetings</h1>
			<Hello name="Maya" age={26 + 10}/>
			<Hello name={nimi} age={ika}/>
		</div>
	)
}

export default App



// const App = () => {
// 	// regular javascript that gets executed in the browser
// 	const now = new Date();
// 	const a = 10;
// 	const b = 20;
// 	console.log(now, a + b);

// 	// javascript in the curly braces are embedded upon evaluation

// 	// () with a return statement is done when markup spans multiple lines
// 	return (
// 		<div>
// 			<p>
// 				Hello world, it is {now.toString()}
// 			</p>

// 			<p>
// 				{a} plus {b} is {a + b}
// 			</p>
// 		</div>
// 	)
// }



// the following is the transpiled version of the above, which will also work in jsx. This is typically handled by babel

// const App = () => {
// 	const now = new Date()
// 	const a = 10
// 	const b = 20
// 	return React.createElement(
// 		'div',
// 		null,
// 		React.createElement(
// 			'p', null, 'Hello world, it is ', now.toString()
// 		),
// 		React.createElement(
// 			'p', null, a, ' plus ', b, ' is ', a + b
// 		)
// 	)
//   }

// jsx is more xml like, so every element requires a closing tag, e.g. <br /> <img />

