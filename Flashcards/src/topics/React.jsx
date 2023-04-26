import { useState } from 'react';
import './topics.css';
import ReactCardFlip from 'react-card-flip';

export default function ReactQuestions() {
	const [flippedCards, setFlippedCards] = useState([]);

	const handleCardClick = index => {
		const newFlippedCards = [...flippedCards];
		newFlippedCards[index] = !newFlippedCards[index];
		setFlippedCards(newFlippedCards);
	};
	return (
		<>
			<h1>React Quiz</h1>
			{/* Question 1 */}
			<ReactCardFlip isFlipped={flippedCards[0]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(0)}>
					<h3>What is React?</h3>
					<p>a) A back-end web development framework</p>
					<p>b) A front-end web development framework</p>
					<p>c) A programming language</p>
					<p>d) A database management system</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(0)}>
					<p>Answer: b) A front-end web development framework</p>
				</div>
			</ReactCardFlip>
			{/* Question 2 */}
			<ReactCardFlip isFlipped={flippedCards[1]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(1)}>
					<h3>What is JSX?</h3>
					<p>a) A programming language</p>
					<p>b) A data structure</p>
					<p>c) A templating engine</p>
					<p>d) A syntax extension for JavaScript</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(1)}>
					<p>Answer: d) A syntax extension for JavaScript</p>
				</div>
			</ReactCardFlip>
			{/* Question 3 */}
			<ReactCardFlip isFlipped={flippedCards[2]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(2)}>
					<h3>What is the purpose of state in React?</h3>
					<p>a) To store data that can be changed over time</p>
					<p>b) To store data that is constant and never changes</p>
					<p>c) To store data related to routing</p>
					<p>d) To store data related to APIs</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(2)}>
					<p>Answer: a) To store data that can be changed over time</p>
				</div>
			</ReactCardFlip>
			{/* Question 4 */}
			<ReactCardFlip isFlipped={flippedCards[3]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(3)}>
					<h3>What is the difference between props and state in React?</h3>
					<p id='q4a'>
						a) Props are used to pass data between components, while state is
						used to store data within a component.
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
				</div>
				<div className='card back' onClick={() => handleCardClick(3)}>
					<p>
						Answer: a) Props are used to pass data between components, while
						state is used to store data within a component.
					</p>
				</div>
			</ReactCardFlip>
			{/* Question 5 */}
			<ReactCardFlip isFlipped={flippedCards[4]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(4)}>
					<h3>What is the virtual DOM in React?</h3>
					<p id='q5a'>a) A physical representation of the DOM used in React</p>
					<p id='q5b'>
						b) A lightweight copy of the DOM used for performance optimization
					</p>
					<p id='q5c'>c) A tool used for debugging React applications</p>
					<p id='q5d'>
						d) A way to communicate between different components in React
					</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(4)}>
					<p>
						Answer: b) A lightweight copy of the DOM used for performance
						optimization
					</p>
				</div>
			</ReactCardFlip>
			{/* Question 6 */}
			<ReactCardFlip isFlipped={flippedCards[5]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(5)}>
					<h3>What is the purpose of a React component?</h3>
					{!flippedCards[5] && (
						<>
							<p id='q6a'>
								a) To encapsulate logic and UI into reusable pieces
							</p>
							<p id='q6b'>
								b) To define the structure and layout of a web page
							</p>
							<p id='q6c'>c) To manage data in a React application</p>
							<p id='q6d'>d) To handle routing in a React application</p>
						</>
					)}
				</div>
				<div className='card back' onClick={() => handleCardClick(5)}>
					<p>Answer: a) To encapsulate logic and UI into reusable pieces</p>
				</div>
			</ReactCardFlip>
			{/* Question 7 */}
			<ReactCardFlip isFlipped={flippedCards[6]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(6)}>
					<h3>
						What is the difference between a class component and a functional
						component in React?
					</h3>
					<p id='q7a'>
						a) Class components use function declarations, while functional
						components use class declarations
					</p>
					<p id='q7b'>
						b) Class components use the this keyword, while functional
						components do not
					</p>
					<p id='q7c'>
						c) Class components are written using a class syntax, while
						functional components are written using a function syntax
					</p>
					<p id='q7d'>
						d) There is no difference between class components and functional
						components
					</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(6)}>
					<p>
						Answer: c) Class components are written using a class syntax, while
						functional components are written using a function syntax
					</p>
				</div>
			</ReactCardFlip>
			{/* Question 8 */}
			<ReactCardFlip isFlipped={flippedCards[7]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(7)}>
					<h3>What is Redux?</h3>
					<p>a) A back-end web development framework</p>
					<p>b) A front-end web development framework</p>
					<p>c) A state management library for JavaScript applications</p>
					<p>d) A testing library for React applications</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(7)}>
					<p>
						Answer: c) A state management library for JavaScript applications
					</p>
				</div>
			</ReactCardFlip>
			{/* Question 9 */}
			<ReactCardFlip isFlipped={flippedCards[8]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(8)}>
					<h3>What is JSX in React?</h3>
					<p>a) A JavaScript library for building user interfaces</p>
					<p>b) A templating language for creating HTML markup</p>
					<p>
						c) A syntax extension for JavaScript that allows for HTML-like code
						to be written in JavaScript
					</p>
					<p>d) A package manager for React applications</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(8)}>
					<p>
						Answer: c) A syntax extension for JavaScript that allows for
						HTML-like code to be written in JavaScript
					</p>
				</div>
			</ReactCardFlip>{' '}
			{/* Question 10 */}
			<ReactCardFlip isFlipped={flippedCards[9]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(9)}>
					<h3>What is the purpose of the useEffect hook in React?</h3>
					<p>a) To handle form submissions in React</p>
					<p>b) To perform side effects in functional components</p>
					<p>c) To manage state in class components</p>
					<p>d) To handle routing in a React application</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(9)}>
					<p>Answer: b) To perform side effects in functional components</p>
				</div>
			</ReactCardFlip>
		</>
	);
}
