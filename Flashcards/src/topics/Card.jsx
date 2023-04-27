import { useState } from 'react';
import './topics.css';
import ReactCardFlip from 'react-card-flip';

export default function Card({ cards }) {
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

	return (
		<>
			<div className='card-container'>
				<ReactCardFlip
					isFlipped={flippedCards[currentCardIndex]}
					flipDirection='horizontal'>
					<div
						className='card front'
						onClick={() => handleCardClick(currentCardIndex)}>
						<h3>{cards[currentCardIndex].question}</h3>
						{cards[currentCardIndex].options.map((option, index) => (
							<p key={index}>{option}</p>
						))}
					</div>
					<div
						className='card back'
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
