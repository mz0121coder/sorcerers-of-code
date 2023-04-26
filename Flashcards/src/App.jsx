import './App.css';
// import * as React from 'react';
import { useNavigate } from 'react-router-dom';
// import song from './DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3';


function App() {
	const navigate = useNavigate();
	const handleClick = () => navigate('/quizzes');
	const handleCssClick = () => navigate('/CSS');
	const handleJsClick = () => navigate('/JS');
	const handleReactClick = () => navigate('/React');

	return (
	<>	 
			<img
				src='./src/assets/logo.png'
				alt='SoC company logo'
				width={400}
				height={400}
			/>
			<h1>Welcome to CodeCards</h1>
			<button type='button' onClick={handleClick}>
				Quizzes
			</button>
			<button type='button' onClick={handleCssClick}>
				CSS
			</button>
			<button type='button' onClick={handleJsClick}>
				JavaScript
			</button>
			<button type='button' onClick={handleReactClick}>
				React
			</button>
		</>
	);
}

export default App;
