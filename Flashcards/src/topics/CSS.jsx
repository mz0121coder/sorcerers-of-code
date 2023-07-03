import './topics.css';
import AudioPlayer from './AudioPlayer';
import Card from './Card';
import LogoForPages from './LogoForPages';
import CSSgif from '../assets/CSS-animation2.gif';
import { cssCards } from '../cards/cssCards';

export default function CSS() {
	return (
		<>
			<div className='logo-img-container'>
				{' '}
				<LogoForPages />
				<img
					src={CSSgif}
					className='gif'
					alt='CSS gif'
					width={150}
					height={150}
				/>
			</div>
			<h1>CSS Flashcards</h1>
			<AudioPlayer />
			<Card cards={cssCards} />
		</>
	);
}
