import './topics.css';
import gif from '../assets/JavaScript-frameworks2.gif';
import AudioPlayer from './AudioPlayer';
import Card from './Card';
import LogoForPages from './LogoForPages';
import { reactCards } from '../cards/reactCards';

export default function ReactQuestions() {
	return (
		<>
			<LogoForPages />
			<img src={gif} width={300} height={300} alt='React gif' />
			<h1>React Flashcards</h1>
			<AudioPlayer />
			<Card cards={reactCards} />
		</>
	);
}
