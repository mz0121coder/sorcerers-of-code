import './topics.css';
import AudioPlayer from './AudioPlayer';
import Card from './Card';
import LogoForPages from './LogoForPages';
import CSSgif from '../assets/CSS-animation2.gif';
import { cssCards } from '../cards/cssCards';

export default function CSS() {
	return (
		<>
			<LogoForPages />
			<img src={CSSgif} alt='CSS gif' width={300} height={300} />
			<h1>CSS Flashcards</h1>
			<AudioPlayer />
			<Card cards={cssCards} />
		</>
	);
}
