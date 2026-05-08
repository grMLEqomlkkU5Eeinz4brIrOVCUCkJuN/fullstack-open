// React component names must always begin with a capital letter, attempting to create components
// with a non-capitalized name will result in them getting treated like html elements instead
const Hello = (props) => {

	if (!props.name || !props.age) return <div><p>Nameless</p></div>
	return (
		<div>
			<p>Hello {props.name}, you are {props.age} years old</p>
		</div>
	)
}

// const App = () => {
// 	const nimi = "Peka";
// 	const ika = 10;

// 	// react should usually contain a single root element, so if we tried to define app without an outer div, it would result in an error
// 	return (
// 		<div>
// 			<h1>Greetings</h1>
// 			<Hello name="Maya" age={26 + 10} />
// 			<Hello name={nimi} age={ika} />
// 		</div>
// 	)
// }
// alternative syntax if needed
// const App = () => {
// 	return [
// 		<h1>Greetings</h1>,
// 		<Hello name="Maya" age={26 + 10} />,
// 		<Footer />
// 	]
//   }


// const App = () => {
// 	const name = 'Pekka'
// 	const age = 10

// 	return (
// 		<>
// 			<h1>Greetings</h1>
// 			<Hello name="Maya" age={26 + 10} />
// 			<Hello name={name} age={age} />
// 			<Footer />
// 		</>
// 	)
// }



// warning against rendering objects, they are not valid children
// all rendered items must be premitives only

const App = () => {
	const friends = [
		{ name: "Leevi", age: 4 },
		{ name: "Venla", age: 10 }
	];

	return (
		<div>
			<p>{friends[0].name} {friends[0].age}</p>
			<p>{friends[1].name} {friends[1].age}</p>
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

// react also allows the rendering of items from arrays directly if the content within the arrays are eligible
// const App = () => {
// 	const friends = ['Leevi', 'Venla']

// 	return (
// 		<div>
// 			<p>{friends}</p>
// 		</div>
// 	)
//   }