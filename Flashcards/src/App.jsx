import './App.css';
import { useNavigate } from 'react-router-dom';
import song4 from './topics/music/ghostwriter_heart_on_my_sleeve.mp3'
import logo from '/logo.png';

function App() {
	const navigate = useNavigate();

	const handleCssClick = () => navigate('/CSS');
	const handleJsClick = () => navigate('/JS');
	const handleReactClick = () => navigate('/React');

	return (
		// <a href="https://storyset.com/web">Web illustrations by Storyset</a>
		<div className='container'>
			<img
				src={logo}
				alt='SoC company logo'
				width={400}
				height={400}
				className='logo'
			/>
			<div>
				<audio className='homeSong' src={song4} controls />
			</div>
			<div className='text-container'>
				<h1 className='title'>
					Welcome to
					<br /> CodeCards
				</h1>
			</div>
			<div className='button-container'>
				<button className='button' onClick={handleCssClick}>
					CSS
				</button>
				<button className='button' onClick={handleJsClick}>
					JavaScript
				</button>
				<button className='button' onClick={handleReactClick}>
					React
				</button>
			</div>
		</div>
	);
}

export default App;
