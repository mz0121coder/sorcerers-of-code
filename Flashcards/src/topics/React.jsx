import { useState ,useRef} from 'react';
import './topics.css';
import song from '../topics/music/DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3';
import song2 from '../topics/music/Vassily_Primakov_piano-Felix_Mendelssohn_Songs_Without_Words.mp3'
export default function ReactQuestions() {
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
					</div>
				)}
			</div>
			{/* Question 9 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(8)}>
				<h3>What is JSX in React?</h3>
				{!flippedCards[8] && (
					<>
						{' '}
						<p id='q9a'>a) A JavaScript library for building user interfaces</p>
						<p id='q9b'>b) A templating language for creating HTML markup</p>
						<p id='q9c'>
							<b>
								c) A syntax extension for JavaScript that allows for HTML-like
								code to be written in JavaScript
							</b>
						</p>
						<p id='q9d'>d) A package manager for React applications</p>
					</>
				)}
				{flippedCards[8] && (
					<div>
						<p>
							Answer: c) A syntax extension for JavaScript that allows for
							HTML-like code to be written in JavaScript
						</p>
					</div>
				)}
			</div>
			{/* Question 10 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(9)}>
				<h3>What is the purpose of the useEffect hook in React?</h3>
				{!flippedCards[9] && (
					<>
						{' '}
						<p id='q10a'>a) To handle form submissions in React</p>
						<p id='q10b'>
							<b>b) To perform side effects in functional components</b>
						</p>
						<p id='q10c'>c) To manage state in class components</p>
						<p id='q10d'>d) To handle routing in a React application</p>
					</>
				)}
				{flippedCards[9] && (
					<div>
						<p>Answer: b) To perform side effects in functional components</p>
					</div>
				)}
			</div>
		</>
	);
}




















