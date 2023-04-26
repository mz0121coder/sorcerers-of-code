import './topics.css';

import song from '../topics/music/DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3';
import song2 from '../topics/music/Vassily_Primakov_piano-Felix_Mendelssohn_Songs_Without_Words.mp3';
import song3 from '../topics/music/MusicianStringTrio.mp3';

import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';


export default function CSS() {
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [flippedCards, setFlippedCards] = useState([]);

	const handleCardClick = index => {
		const newFlippedCards = [...flippedCards];
		newFlippedCards[index] = !newFlippedCards[index];
		setFlippedCards(newFlippedCards);
	};

	return (
		<>
		<h3>Study Music</h3>
		<div><audio src={song} loop controls />
		<audio src={song2}  loop controls />
		<audio src={song3} loop controls/></div>
			<h1>CSS</h1>
			{/* // Question 1 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(0)}>
				<h3>What does CSS stand for?</h3>
				{!flippedCards[0] && (
					<>
						<p id='q1a'>a) Creative Style Sheets</p>
						<p id='q1b'>
							<b>b) Cascading Style Sheets</b>
						</p>
						<p id='q1c'>c) Computer Style Sheets</p>
						<p id='q1d'>d) Code Style Sheets</p>
					</>
				)}
				{flippedCards[0] && (
					<div>
						<p>Answer: b) Cascading Style Sheets</p>
					</div>
				)}
			</div>
			{/* // Question 2 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(1)}>
				<h3>
					Which property is used to set the background color of an element in
					CSS?
				</h3>
				{!flippedCards[1] && (
					<>
						{' '}
						<p id='q2a'>
							<b>a) background-color</b>
						</p>
						<p id='q2b'>b) color-background</p>
						<p id='q2c'>c) element-color</p>
						<p id='q2d'>d) background-element</p>
					</>
				)}
				{flippedCards[1] && (
					<div>
						<p>Answer: a) background-color</p>
					</div>
				)}
			</div>
			{/* // Question 3 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(2)}>
				<h3>
					Which of the following is not a valid value for the display property
					in CSS?
				</h3>
				{!flippedCards[2] && (
					<>
						{' '}
						<p id='q3a'>a) block</p>
						<p id='q3b'>b) inline</p>
						<p id='q3c'>c) none</p>
						<p id='q3d'>
							<b>d) underline</b>
						</p>
					</>
				)}
				{flippedCards[2] && (
					<div>
						<p>Answer: d) underline</p>
					</div>
				)}
			</div>
			{/* // Question 4 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(3)}>
				<h3>Which CSS property is used to add shadows to an element?</h3>
				{!flippedCards[3] && (
					<>
						{' '}
						<p id='q4a'>a) shadow</p>
						<p id='q4b'>
							<b>b) box-shadow</b>
						</p>
						<p id='q4c'>c) element-shadow</p>
						<p id='q4d'>d) text-shadow</p>
					</>
				)}
				{flippedCards[3] && (
					<div>
						<p>Answer: b) box-shadow</p>
					</div>
				)}
			</div>
			{/* // Question 5 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(4)}>
				<h3>Which CSS property is used to change the font of an element?</h3>


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
			<h1>CSS Flashcards</h1>

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
				{currentCardIndex < cards.length - 2 && (
					<button onClick={handleNextCard}>Next</button>
				)}
			</div>
		</>
	);

	
}

}

const cards = [
	{
		question: 'What is the box model in CSS?',
		options: [
			'a) A model used for creating 3D boxes with CSS',
			'b) A model used to calculate the size and position of elements in CSS',
			'c) A model used to create rounded corners on elements in CSS',
			'd) A model used to create shadows and gradients on elements in CSS',
		],
		answer:
			'b) A model used to calculate the size and position of elements in CSS',
	},
	{
		question:
			'What is the difference between inline and inline-block display in CSS?',
		options: [
			'a) There is no difference between inline and inline-block display in CSS',
			'b) Inline elements are displayed on a single line, while inline-block elements can have multiple lines and block-level properties',
			'c) Inline elements are displayed as block-level elements, while inline-block elements are displayed as inline elements',
			'd) Inline elements are not affected by the box model, while inline-block elements are affected by the box model',
		],
		answer:
			'b) Inline elements are displayed on a single line, while inline-block elements can have multiple lines and block-level properties',
	},
	{
		question:
			'What is the difference between position: relative and position: absolute in CSS?',
		options: [
			'a) There is no difference between position: relative and position: absolute in CSS',
			"b) Relative positioning is relative to the element's normal position, while absolute positioning is relative to the nearest positioned ancestor element",
			"c) Relative positioning is relative to the viewport, while absolute positioning is relative to the element's containing block",
			'd) Relative positioning is only used for flexbox layouts, while absolute positioning is used for all other layouts',
		],
		answer:
			"b) Relative positioning is relative to the element's normal position, while absolute positioning is relative to the nearest positioned ancestor element",
	},
	{
		question: 'What is the difference between padding and margin in CSS?',
		options: [
			'a) There is no difference between padding and margin in CSS',
			"b) Padding is the space between an element's content and its border, while margin is the space between an element's border and the adjacent elements",
			'c) Padding is used to create space within an element, while margin is used to create space between elements',
			'd) Padding is used to create space between elements, while margin is used to create space within an element',
		],
		answer:
			"b) Padding is the space between an element's content and its border, while margin is the space between an element's border and the adjacent elements",
	},
	{
		question: 'What is the CSS property used to create a floating element?',
		options: ['a) float', 'b) clear', 'c) position', 'd) display'],
		answer: 'a) float',
	},
	{
		question: 'What is the CSS specificity and how is it calculated?',
		options: [
			'a) A measure of how important a selector is',
			'b) A value between 0 and 1 that determines the opacity of an element',
			'c) A measure of how complex a selector is',
			'd) A value that determines the size of an element',
		],
		answer: 'a) A measure of how important a selector is',
	},
	{
		question: 'What are CSS variables and how do you declare them?',
		options: [
			'a) Variables that store values used in CSS stylesheets',
			'b) Variables that store values used in JavaScript functions',
			'c) Variables that store values used in HTML templates',
			'd) Variables that store values used in database queries',
		],
		answer: 'a) Variables that store values used in CSS stylesheets',
	},
	{
		question: 'What is the CSS property used to create animations?',
		options: ['a) animation', 'b) transition', 'c) transform', 'd) keyframes'],
		answer: 'a) animation',
	},
	{
		question: 'What is the CSS property used to create a gradient background?',
		options: [
			'a) background-color',
			'b) background-image',
			'c) background-repeat',
			'd) background-gradient',
		],
		answer: 'b) background-image',
	},
	{
		question: 'What is the CSS property used to create columns in a layout?',
		options: [
			'a) column-count',
			'b) column-gap',
			'c) column-width',
			'd) column-span',
		],
		answer: 'a) column-count',
	},
	{
		question: 'What is the CSS property used to create a sticky element?',
		options: ['a) position', 'b) top', 'c) sticky', 'd) overflow'],
		answer: 'c) sticky',
	},
	{
		question:
			'What is the difference between the :before and :after pseudo-elements in CSS?',
		options: [
			'a) There is no difference between the :before and :after pseudo-elements in CSS',
			'b) :before is used to insert content before the selected element, while :after is used to insert content after the selected element',
			'c) :before is used for elements that come before other elements, while :after is used for elements that come after other elements',
			'd) :before is used to create elements that are positioned before the selected element, while :after is used to create elements that are positioned after the selected element',
		],
		answer:
			'b) :before is used to insert content before the selected element, while :after is used to insert content after the selected element',
	},
	{
		question:
			'What is the difference between the visibility and display properties in CSS?',
		options: [
			'a) There is no difference between the visibility and display properties in CSS',
			'b) visibility is used to show or hide an element, while display is used to define how an element is displayed',
			'c) display is used to show or hide an element, while visibility is used to define how an element is displayed',
			'd) visibility is used to define how an element is displayed, while display is used to show or hide an element',
		],
		answer:
			'b) visibility is used to show or hide an element, while display is used to define how an element is displayed',
	},
	{
		question: 'What is the CSS property used to create a responsive design?',
		options: ['a) media queries', 'b) flexbox', 'c) grid', 'd) position'],
		answer: 'a) media queries',
	},
	{
		question: 'What is the CSS property used to add a shadow to an element?',
		options: [
			'a) box-shadow',
			'b) text-shadow',
			'c) shadow',
			'd) element-shadow',
		],
		answer: 'a) box-shadow',
	},
	{
		question:
			'What is the difference between the :nth-child() and :nth-of-type() selectors in CSS?',
		options: [
			'a) There is no difference between the :nth-child() and :nth-of-type() selectors in CSS',
			'b) :nth-child() selects all children that match the given pattern, while :nth-of-type() selects only the children that match the given pattern and type',
			'c) :nth-child() selects only the children that match the given pattern and type, while :nth-of-type() selects all children that match the given pattern',
			'd) :nth-child() is used to select child elements, while :nth-of-type() is used to select the type of an element',
		],
		answer:
			'b) :nth-child() selects all children that match the given pattern, while :nth-of-type() selects only the children that match the given pattern and type',
	},
	{
		question: 'What is the CSS property used to create a transition?',
		options: ['a) transition', 'b) animation', 'c) transform', 'd) keyframes'],
		answer: 'a) transition',
	},
	{
		question: 'What is the CSS property used to align text within an element?',
		options: [
			'a) text-align',
			'b) vertical-align',
			'c) align-items',
			'd) justify-content',
		],
		answer: 'a) text-align',
	},
];
