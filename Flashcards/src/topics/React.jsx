import { useState } from 'react';
import './topics.css';
import gif from '../assets/JavaScript-frameworks.gif';
import AudioPlayer from './AudioPlayer';
import ReactCardFlip from 'react-card-flip';
import logo from '../assets/logo.png';

export default function ReactQuestions() {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [flippedCards, setFlippedCards] = useState([]);

	const handleCardClick = index => {
		const newFlippedCards = [...flippedCards];
		newFlippedCards[index] = !newFlippedCards[index];
		setFlippedCards(newFlippedCards);
	};

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

	const handleLogoClick = () => {
		window.location.href = '/';
	};

	return (
		<>
			<img
				src={logo}
				alt='Logo'
				onClick={handleLogoClick}
				width={300}
				height={300}
			/>

			<img src={gif} width={300} height={300} />
			<AudioPlayer />
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
