import { useState } from 'react';
import './topics.css';
import song from '../topics/DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3';


export default function CSS() {
	const [flippedCards, setFlippedCards] = useState([]);

	const handleCardClick = index => {
		const newFlippedCards = [...flippedCards];
		newFlippedCards[index] = !newFlippedCards[index];
		setFlippedCards(newFlippedCards);
	};
	return (
		<>
		<h3>Study Music</h3>
		<div><audio src={song} autoPlay loop controls /></div>
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

				{!flippedCards[4] && (
					<>
						{' '}
						<p id='q5a'>a) font-family</p>
						<p id='q5b'>
							<b>b) font-style</b>
						</p>
						<p id='q5c'>c) font-color</p>
						<p id='q5d'>d) font-size</p>
					</>
				)}
				{flippedCards[4] && (
					<div>
						<p>Answer: b) font-style</p>
					</div>
				)}
			</div>
			{/* // Question 6 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(5)}>
				<h3>What is the default value of the position property in CSS?</h3>

				{!flippedCards[5] && (
					<>
						{' '}
						<p id='q6a'>a) static</p>
						<p id='q6b'>b) absolute</p>
						<p id='q6c'>
							<b>c) relative</b>
						</p>
						<p id='q6d'>d) fixed</p>
					</>
				)}
				{flippedCards[5] && (
					<div>
						<p>Answer: c) relative</p>
					</div>
				)}
			</div>
			{/* // Question 7 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(6)}>
				<h3>
					What is the CSS property used to control the spacing between elements?
				</h3>

				{!flippedCards[6] && (
					<>
						{' '}
						<p id='q7a'>a) margin</p>
						<p id='q7b'>b) padding</p>
						<p id='q7c'>
							<b>c) both margin and padding</b>
						</p>
						<p id='q7d'>d) spacing</p>
					</>
				)}
				{flippedCards[6] && (
					<div>
						<p>Answer: c) both margin and padding</p>
					</div>
				)}
			</div>
			{/* // Question 8 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(7)}>
				<h3>Which CSS property is used to make text bold?</h3>

				{!flippedCards[7] && (
					<>
						{' '}
						<p id='q8a'>a) font-style</p>
						<p id='q8b'>
							<b>b) font-weight</b>
						</p>
						<p id='q8c'>c) text-style</p>
						<p id='q8d'>d) text-weight</p>
					</>
				)}
				{flippedCards[7] && (
					<div>
						<p>Answer: b) font-weight</p>
					</div>
				)}
			</div>
			{/* // Question 9 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(8)}>
				<h3>
					What is the CSS property used to add background color to an element?
				</h3>

				{!flippedCards[8] && (
					<>
						{' '}
						<p id='q9a'>a) text-color</p>
						<p id='q9b'>b) background-color</p>
						<p id='q9c'>c) color-background</p>
						<p id='q9d'>
							<b>d) background</b>
						</p>
					</>
				)}
				{flippedCards[8] && (
					<div>
						<p>Answer: d) background</p>
					</div>
				)}
			</div>
			{/* // Question 10 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(9)}>
				<h3>Which CSS property is used to set the height of an element?</h3>

				{!flippedCards[9] && (
					<>
						{' '}
						<p id='q10a'>a) width</p>
						<p id='q10b'>b) size</p>
						<p id='q10c'>
							<b>c) height</b>
						</p>
						<p id='q10d'>d) length</p>
					</>
				)}

				{flippedCards[9] && (
					<div>
						<p>Answer: c) height</p>
					</div>
				)}
			</div>
		</>
	);
}