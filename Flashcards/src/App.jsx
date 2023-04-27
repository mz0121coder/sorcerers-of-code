import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();

	const handleCssClick = () => navigate('/CSS');
	const handleJsClick = () => navigate('/JS');
	const handleReactClick = () => navigate('/React');

	return (
		// <a href="https://storyset.com/web">Web illustrations by Storyset</a>
		<div className='container'>
			<img
				src='./src/assets/logo.png'
				alt='SoC company logo'
				width={400}
				height={400}
				className='logo'
			/>
			<div className='text-container'>
				<h1 className='title'>Welcome to CodeCards</h1>
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
