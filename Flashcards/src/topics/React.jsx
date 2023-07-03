import './topics.css';
import gif from '../assets/JavaScript-frameworks2.gif';
import AudioPlayer from './AudioPlayer';
import Card from './Card';
import LogoForPages from './LogoForPages';
import { reactCards } from '../cards/reactCards';

export default function ReactQuestions() {
	return (
		<>
			<div className='logo-img-container'>
				<LogoForPages />
				<img
					src={gif}
					width={150}
					className='gif'
					height={150}
					alt='React gif'
				/>
			</div>
			<h1>React Flashcards</h1>
			<AudioPlayer />
			<Card cards={reactCards} />
		</>
	);
}
