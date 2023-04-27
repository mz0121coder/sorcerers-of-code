import { useState, useEffect } from 'react';
import '../topics/topics.css';
import song from '../topics/music/DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3';
import song2 from '../topics/music/Vassily_Primakov_piano-Felix_Mendelssohn_Songs_Without_Words.mp3';
import song3 from '../topics/music/MusicianStringTrio.mp3';

const AudioPlayer = () => {
  // const audio1 = useRef(null);
	// function handleAudio() {
	// 	console.log('hello', audio1.current);
	// 	audio1.current.pause();
	// }

  
// const [isPlaying, setIsPlaying] = useState(true);

// 	const handleCheckboxClick = () => {
//     setIsPlaying(!isPlaying);

// 	const audioplay = new audioplay("../topics/music/Vassily_Primakov_piano-Felix_Mendelssohn_Songs_Without_Words.mp3");

// 	if (!isPlaying) {
//       audioplay.play();
//     } else {
//       audioplay.pause();
//     }
// }

	const [currentAudio, setCurrentAudio] = useState(null);

	useEffect(() => {
		const audioElements = document.querySelectorAll('audio');

		audioElements.forEach(audio => {
			audio.addEventListener('play', e => {
				setCurrentAudio(e.target);
			});
		});

		return () => {
			audioElements.forEach(audio => {
				audio.removeEventListener('play', e => {
					setCurrentAudio(e.target);
				});
			});
		};
	}, []);

	const handleAudioClick = e => {
		const audio = e.target;

		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	};

	return (
		<div className=''>
			<audio src={song} controls onClick={handleAudioClick}  />
			<audio src={song2} controls onClick={handleAudioClick} />
			<audio src={song3} controls onClick={handleAudioClick} />
		</div>
	);
};

export default AudioPlayer;
