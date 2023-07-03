import './topics.css';
import AudioPlayer from './AudioPlayer';
import Card from './Card';
import LogoForPages from './LogoForPages';
import study2 from '../assets/study2.gif';
import { javascriptCards } from '../cards/javascriptCards';

export default function JS() {
	return (
		<>
			<div className='logo-img-container'>
				{' '}
				<LogoForPages />
				<img
					src={study2}
					className='gif'
					alt='gif of someone studying'
					width={150}
					height={150}
				/>
			</div>
			<h1>JavaScript Flashcards</h1>
			<AudioPlayer />
			<Card cards={javascriptCards} />
		</>
	);
}
