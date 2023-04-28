import { useState } from 'react';
import './topics.css';
import ReactCardFlip from 'react-card-flip';

export default function Card({ cards }) {
	// Initialize state variables using the useState hook
	const [currentCardIndex, setCurrentCardIndex] = useState(0);
	const [flippedCards, setFlippedCards] = useState([]);

	// Define a click handler for when a card is clicked
	const handleCardClick = index => {
		// Make a copy of the flippedCards array with the spread operator
		const newFlippedCards = [...flippedCards];
		// Toggle the value of the clicked card
		newFlippedCards[index] = !newFlippedCards[index];
		// Update the flippedCards state variable with the new array
		setFlippedCards(newFlippedCards);
	};

	// Define a click handler for the Next button
	const handleNextCard = () => {
		// Check if the current card is not the last card
		if (currentCardIndex < cards.length) {
			// Update the current card index state variable
			setCurrentCardIndex(currentCardIndex + 1);
		}
	};

	// Define a click handler for the Prev button
	const handlePrevCard = () => {
		// Check if the current card is not the first card
		if (currentCardIndex > 0) {
			// Update the current card index state variable
			setCurrentCardIndex(currentCardIndex - 1);
		}
	};

	return (
		<>
			{/* Render a container for the card flip animation */}
			<div className='card-container'>
				{/* Use the ReactCardFlip component to render the card flip animation */}
				<ReactCardFlip
					isFlipped={flippedCards[currentCardIndex]}
					flipDirection='horizontal'>
					{/* Render the front of the card */}
					<div
						className='card front'
						onClick={() => handleCardClick(currentCardIndex)}>
						{/* Render the question text */}
						<h3>{cards[currentCardIndex].question}</h3>
						{/* Render the answer options */}
						{cards[currentCardIndex].options.map((option, index) => (
							<p key={index}>{option}</p>
						))}
					</div>
					{/* Render the back of the card */}
					<div
						className='card back'
						onClick={() => handleCardClick(currentCardIndex)}>
						{/* Render the answer text */}
						<p>Answer: {cards[currentCardIndex].answer}</p>
					</div>
				</ReactCardFlip>
			</div>

			{/* Render a container for the Prev and Next buttons */}
			<div className='button-container'>
				{/* Render the Prev button if the current card is not the first card */}
				{currentCardIndex > 0 && <button onClick={handlePrevCard}>Prev</button>}
				{/* Render the Next button if the current card is not the last card */}
				{currentCardIndex < cards.length - 2 && (
					<button onClick={handleNextCard}>Next</button>
				)}
			</div>
		</>
	);
}
