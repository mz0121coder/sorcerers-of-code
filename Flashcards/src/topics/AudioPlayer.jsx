import '../topics/topics.css';
import song from '../topics/music/DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3';
import song2 from '../topics/music/Vassily_Primakov_piano-Felix_Mendelssohn_Songs_Without_Words.mp3';
import song3 from '../topics/music/MusicianStringTrio.mp3';

const AudioPlayer = () => {
	return (
		<div className=''>
			<h2>Study Music</h2>
			<audio src={song} controls />
			<audio src={song2} controls />
			<audio src={song3} controls />
		</div>
	);
};

export default AudioPlayer;
