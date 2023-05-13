import './topics.css';
import AudioPlayer from './AudioPlayer';
import Card from './Card';
import LogoForPages from './LogoForPages';
import study2 from '../assets/study2.gif';
import { javascriptCards } from '../cards/javascriptCards';

export default function JS() {
	return (
		<>
			<LogoForPages />
			<img
				src={study2}
				alt='gif of someone studying'
				width={300}
				height={300}
			/>
			<h1>JavaScript Flashcards</h1>
			<AudioPlayer />
			<Card cards={javascriptCards} />
		</>
	);
}
