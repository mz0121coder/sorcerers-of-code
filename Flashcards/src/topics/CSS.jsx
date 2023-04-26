import { useState } from 'react';
import './topics.css';
import ReactCardFlip from 'react-card-flip';
export default function CSS() {
	const [flippedCards, setFlippedCards] = useState([]);

	const handleCardClick = index => {
		const newFlippedCards = [...flippedCards];
		newFlippedCards[index] = !newFlippedCards[index];
		setFlippedCards(newFlippedCards);
	};
	return (
		<>
			<h1>CSS</h1>
			{/* Question 1 */}
			<ReactCardFlip isFlipped={flippedCards[0]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(0)}>
					<h3>What does CSS stand for?</h3>
					<p>a) Creative Style Sheets</p>
					<p>b) Cascading Style Sheets</p>
					<p>c) Computer Style Sheets</p>
					<p>d) Code Style Sheets</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(0)}>
					<p>Answer: b) Cascading Style Sheets</p>
				</div>
			</ReactCardFlip>
			{/* Question 2 */}
			<ReactCardFlip isFlipped={flippedCards[1]} flipDirection='horizontal'>
				<div
					className='card front'
					style={{ backgroundColor: 'lightgrey' }}
					onClick={() => handleCardClick(1)}>
					<h3>
						Which property is used to set the background color of an element in
						CSS?
					</h3>
					<p>a) background-color</p>
					<p>b) color-background</p>
					<p>c) element-color</p>
					<p>d) background-element</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(1)}>
					<p>Answer: a) background-color</p>
				</div>
			</ReactCardFlip>
			{/* Question 3 */}
			<ReactCardFlip isFlipped={flippedCards[2]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(2)}>
					<h3>
						Which of the following is not a valid value for the display property
						in CSS?
					</h3>
					<p>a) block</p>
					<p>b) inline</p>
					<p>c) none</p>
					<p>d) underline</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(2)}>
					<p>Answer: d) underline</p>
				</div>
			</ReactCardFlip>

			{/* Question 4 */}
			<ReactCardFlip isFlipped={flippedCards[3]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(3)}>
					<h3>Which CSS property is used to add shadows to an element?</h3>
					<p>a) shadow</p>
					<p>b) box-shadow</p>
					<p>c) element-shadow</p>
					<p>d) text-shadow</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(3)}>
					<p>Answer: b) box-shadow</p>
				</div>
			</ReactCardFlip>
			{/* Question 5 */}
			<ReactCardFlip isFlipped={flippedCards[4]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(4)}>
					<h3>Which CSS property is used to change the font of an element?</h3>
					{!flippedCards[4] && (
						<>
							<p id='q5a'>a) font-family</p>
							<p id='q5b'>
								<b>b) font-style</b>
							</p>
							<p id='q5c'>c) font-color</p>
							<p id='q5d'>d) font-size</p>
						</>
					)}
				</div>
				<div className='card back' onClick={() => handleCardClick(4)}>
					<p>Answer: b) font-style</p>
				</div>
			</ReactCardFlip>

			{/* Question 6 */}
			<ReactCardFlip isFlipped={flippedCards[5]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(5)}>
					<h3>What is the default value of the position property in CSS?</h3>
					<p>a) static</p>
					<p>b) absolute</p>
					<p>
						<b>c) relative</b>
					</p>
					<p>d) fixed</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(5)}>
					<p>Answer: c) relative</p>
				</div>
			</ReactCardFlip>
			{/* Question 7 */}
			<ReactCardFlip isFlipped={flippedCards[6]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(6)}>
					<h3>
						What is the CSS property used to control the spacing between
						elements?
					</h3>
					<p>a) margin</p>
					<p>b) padding</p>
					<p>c) both margin and padding</p>
					<p>d) spacing</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(6)}>
					<p>Answer: c) both margin and padding</p>
				</div>
			</ReactCardFlip>
			{/* Question 8 */}
			<ReactCardFlip isFlipped={flippedCards[7]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(7)}>
					<h3>Which CSS property is used to make text bold?</h3>
					<p>a) font-style</p>
					<p>
						<b>b) font-weight</b>
					</p>
					<p>c) text-style</p>
					<p>d) text-weight</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(7)}>
					<p>Answer: b) font-weight</p>
				</div>
			</ReactCardFlip>
			{/* Question 9 */}
			<ReactCardFlip isFlipped={flippedCards[8]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(8)}>
					<h3>
						What is the CSS property used to add background color to an element?
					</h3>
					<p>a) text-color</p>
					<p>b) background-color</p>
					<p>c) color-background</p>
					<p>d) background</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(8)}>
					<p>Answer: d) background</p>
				</div>
			</ReactCardFlip>
			{/* Question 10 */}
			<ReactCardFlip isFlipped={flippedCards[9]} flipDirection='horizontal'>
				<div className='card front' onClick={() => handleCardClick(9)}>
					<h3>Which CSS property is used to set the height of an element?</h3>
					<p>a) width</p>
					<p>b) size</p>
					<p>
						<b>c) height</b>
					</p>
					<p>d) length</p>
				</div>
				<div className='card back' onClick={() => handleCardClick(9)}>
					<p>Answer: c) height</p>
				</div>
			</ReactCardFlip>
		</>
	);
}
