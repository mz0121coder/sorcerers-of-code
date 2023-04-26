
import { useState ,useRef} from 'react';
import './topics.css';
import song from '../topics/music/DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3';
import song2 from '../topics/music/Vassily_Primakov_piano-Felix_Mendelssohn_Songs_Without_Words.mp3'

import './topics.css';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';


export default function ReactQuestions() {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [flippedCards, setFlippedCards] = useState([]);

	const handleCardClick = index => {
		const newFlippedCards = [...flippedCards];
		newFlippedCards[index] = !newFlippedCards[index];
		setFlippedCards(newFlippedCards);
	};

	const audio1 = useRef(null)
	function handleAudio(){
		console.log("hello",audio1.current)
		audio1.current.pause()
	}
	return (
		<>
		<h3>Study Music</h3>
		{/* const [isPlaying, setIsPlaying] = useState(true); */}
		<div onClick={handleAudio}><audio src={song}  loop controls  ref={audio1}/></div>
		<div><audio src={song2}  loop controls /></div>
			<h1>React Quiz</h1>
			{/* Question 1 */} 
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(0)}>
				<h3>What is React?</h3>
				{!flippedCards[0] && (
					<>
						{' '}
						<p id='q1a'>a) A back-end web development framework</p>
						<p id='q1b'>
							<b>b) A front-end web development framework</b>
						</p>
						<p id='q1c'>c) A programming language</p>
						<p id='q1d'>d) A database management system</p>
					</>
				)}
				{flippedCards[0] && (
					<div>
						<p>Answer: b) A front-end web development framework</p>
					</div>
				)}
			</div>
			{/* Question 2 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(1)}>
				<h3>What is JSX?</h3>
				{!flippedCards[1] && (
					<>
						{' '}
						<p id='q2a'>a) A programming language</p>
						<p id='q2b'>b) A data structure</p>
						<p id='q2c'>c) A templating engine</p>
						<p id='q2d'>
							<b>d) A syntax extension for JavaScript</b>
						</p>
					</>
				)}
				{flippedCards[1] && (
					<div>
						<p>Answer: d) A syntax extension for JavaScript</p>
					</div>
				)}
			</div>
			{/* Question 3 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(2)}>
				<h3>What is the purpose of state in React?</h3>
				{!flippedCards[2] && (
					<>
						{' '}
						<p id='q3a'>
							<b>a) To store data that can be changed over time</b>
						</p>
						<p id='q3b'>b) To store data that is constant and never changes</p>
						<p id='q3c'>c) To store data related to routing</p>
						<p id='q3d'>d) To store data related to APIs</p>
					</>
				)}
				{flippedCards[2] && (
					<div>
						<p>Answer: a) To store data that can be changed over time</p>
					</div>
				)}
			</div>
			{/* Question 4 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(3)}>
				<h3>What is the difference between props and state in React?</h3>
				{!flippedCards[3] && (
					<>
						{' '}
						<p id='q4a'>
							<b>
								a) Props are used to pass data between components, while state
								is used to store data within a component.
							</b>
						</p>
						<p id='q4b'>
							b) State is used to pass data between components, while props is
							used to store data within a component.
						</p>
						<p id='q4c'>
							c) Props and state are interchangeable and can be used in the same
							way.
						</p>
						<p id='q4d'>d) Props and state are not used in React.</p>
					</>
				)}
				{flippedCards[3] && (
					<div>
						<p>
							Answer: a) Props are used to pass data between components, while
							state is used to store data within a component.
						</p>
					</div>
				)}
			</div>
			{/* Question 5 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(4)}>
				<h3>What is the virtual DOM in React?</h3>
				{!flippedCards[4] && (
					<>
						{' '}
						<p id='q5a'>
							a) A physical representation of the DOM used in React
						</p>
						<p id='q5b'>
							<b>
								b) A lightweight copy of the DOM used for performance
								optimization
							</b>
						</p>
						<p id='q5c'>c) A tool used for debugging React applications</p>
						<p id='q5d'>
							d) A way to communicate between different components in React
						</p>
					</>
				)}
				{flippedCards[4] && (
					<div>
						<p>
							Answer: b) A lightweight copy of the DOM used for performance
							optimization
						</p>
					</div>
				)}
			</div>
			{/* Question 6 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(5)}>
				<h3>What is the purpose of a React component?</h3>
				{!flippedCards[5] && (
					<>
						{' '}
						<p id='q6a'>
							<b>a) To encapsulate logic and UI into reusable pieces</b>
						</p>
						<p id='q6b'>b) To define the structure and layout of a web page</p>
						<p id='q6c'>c) To manage data in a React application</p>
						<p id='q6d'>d) To handle routing in a React application</p>
					</>
				)}
				{flippedCards[5] && (
					<div>
						<p>Answer: a) To encapsulate logic and UI into reusable pieces</p>
					</div>
				)}
			</div>
			{/* Question 7 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(6)}>
				<h3>
					What is the difference between a class component and a functional
					component in React?
				</h3>
				{!flippedCards[6] && (
					<>
						{' '}
						<p id='q7a'>
							a) Class components use function declarations, while functional
							components use class declarations
						</p>
						<p id='q7b'>
							b) Class components use the this keyword, while functional
							components do not
						</p>
						<p id='q7c'>
							<b>
								c) Class components are written using a class syntax, while
								functional components are written using a function syntax
							</b>
						</p>
						<p id='q7d'>
							d) There is no difference between class components and functional
							components
						</p>
					</>
				)}
				{flippedCards[6] && (
					<div>
						<p>
							Answer: c) Class components are written using a class syntax,
							while functional components are written using a function syntax
						</p>
					</div>
				)}
			</div>
			{/* Question 8 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(7)}>
				<h3>What is Redux?</h3>
				{!flippedCards[7] && (
					<>
						{' '}
						<p id='q8a'>a) A back-end web development framework</p>
						<p id='q8b'>b) A front-end web development framework</p>
						<p id='q8c'>
							<b>c) A state management library for JavaScript applications</b>
						</p>
						<p id='q8d'>d) A testing library for React applications</p>
					</>
				)}
				{flippedCards[7] && (
					<div>
						<p>
							Answer: c) A state management library for JavaScript applications
						</p>


	const handleNextCard = () => {
		if (currentCardIndex < cards.length) {
			setCurrentCardIndex(currentCardIndex + 1);
		}
	};

	const handlePrevCard = () => {
		if (currentCardIndex > 0) {
			setCurrentCardIndex(currentCardIndex - 1);
		}
	};

	return (
		<>
			<header>
				<button>Go back to homepage</button>
			</header>
			<h1>React Flashcards</h1>

			<div className='card-container'>
				<ReactCardFlip
					isFlipped={flippedCards[currentCardIndex]}
					flipDirection='horizontal'>
					<div
						className='card front'
						style={{ backgroundColor: 'lightgrey' }}
						onClick={() => handleCardClick(currentCardIndex)}>
						<h3>{cards[currentCardIndex].question}</h3>
						{cards[currentCardIndex].options.map((option, index) => (
							<p key={index}>{option}</p>
						))}

					</div>
					<div
						className='card back'
						style={{ backgroundColor: 'lightgrey' }}
						onClick={() => handleCardClick(currentCardIndex)}>
						<p>Answer: {cards[currentCardIndex].answer}</p>
					</div>
				</ReactCardFlip>
			</div>

			<div className='button-container'>
				{currentCardIndex > 0 && <button onClick={handlePrevCard}>Prev</button>}
				{currentCardIndex < cards.length - 1 && (
					<button onClick={handleNextCard}>Next</button>
				)}
			</div>
		</>
	);
}

const cards = [
	{
		question: 'What is React?',
		options: [
			'a) A front-end web development framework',
			'b) A back-end web development framework',
			'c) A database management system',
			'd) A programming language',
		],
		answer: 'a) A front-end web development framework',
	},
	{
		question: 'What is the purpose of the render() method in React?',
		options: [
			'a) To handle user input in a React application',
			'b) To update the DOM with new React elements',
			'c) To handle HTTP requests in a React application',
			'd) To manage state in a React component',
		],
		answer: 'b) To update the DOM with new React elements',
	},
	{
		question: 'What is a state in React?',
		options: [
			'a) An object that holds data for a component',
			'b) A function that returns a React element',
			'c) A method that updates the DOM',
			'd) A function that handles user input',
		],
		answer: 'a) An object that holds data for a component',
	},
	{
		question: 'What is a prop in React?',
		options: [
			'a) An object that holds data for a component',
			'b) A function that returns a React element',
			'c) A method that updates the DOM',
			'd) A function that handles user input',
		],
		answer: 'a) An object that holds data for a component',
	},
	{
		question: 'What is JSX in React?',
		options: [
			'a) A JavaScript library for building user interfaces',
			'b) A syntax extension for JavaScript',
			'c) A CSS framework for styling React components',
			'd) A package manager for React applications',
		],
		answer: 'b) A syntax extension for JavaScript',
	},
	{
		question: 'What is the purpose of keys in React?',
		options: [
			'a) To identify elements in an array',
			'b) To add unique identifiers to components',
			'c) To manage state in a React component',
			'd) To handle user input in a React application',
		],
		answer: 'a) To identify elements in an array',
	},
	{
		question: 'What is a React hook?',
		options: [
			'a) A function that handles user input',
			'b) A way to add state to a functional component',
			'c) A method that updates the DOM',
			'd) A library for managing HTTP requests in a React application',
		],
		answer: 'b) A way to add state to a functional component',
	},
	{
		question: 'What is the purpose of useEffect in React?',
		options: [
			'a) To handle user input in a React application',
			'b) To perform side effects in functional components',
			'c) To manage state in class components',
			'd) To handle routing in a React application',
		],
		answer: 'b) To perform side effects in functional components',
	},
	{
		question: 'What is a React component?',
		options: [
			'a) A function that handles user input',
			'b) A way to reuse UI code',
			'c) A method that updates the DOM',
			'd) A library for managing HTTP requests in a React application',
		],
		answer: 'b) A way to reuse UI code',
	},
	{
		question:
			'What is the difference between a functional component and a class component in React?',
		options: [
			'a) A functional component can have state, while a class component cannot',
			'b) A class component can have state, while a functional component cannot',
			'c) A functional component is faster than a class component',
			'd) A class component is faster than a functional component',
		],
		answer:
			'b) A class component can have state, while a functional component cannot',
	},
	{
		question: 'What is the virtual DOM in React?',
		options: [
			'a) A virtual environment where React components are tested',
			'b) A JavaScript object that represents the actual DOM',
			'c) A way to optimize React rendering performance',
			'd) A library for managing HTTP requests in a React application',
		],
		answer: 'b) A JavaScript object that represents the actual DOM',
	},
	{
		question: 'What is the difference between props and state in React?',
		options: [
			'a) Props are used to pass data from parent to child components, while state is used for managing data within a component',
			'b) Props are used to manage data within a component, while state is used to pass data from parent to child components',
			'c) Props and state are the same thing in React',
			'd) Props are used for handling user input, while state is used for managing data within a component',
		],
		answer:
			'a) Props are used to pass data from parent to child components, while state is used for managing data within a component',
	},
	{
		question: 'What is the purpose of conditional rendering in React?',
		options: [
			'a) To improve the performance of React applications',
			'b) To add dynamic behavior to React components',
			'c) To handle user input in a React application',
			'd) To conditionally display elements in a React component',
		],
		answer: 'd) To conditionally display elements in a React component',
	},
	{
		question:
			'What is the purpose of the shouldComponentUpdate() method in React?',
		options: [
			'a) To update the DOM with new React elements',
			'b) To handle user input in a React application',
			'c) To determine whether a component should re-render',
			'd) To manage state in a React component',
		],
		answer: 'c) To determine whether a component should re-render',
	},
];
