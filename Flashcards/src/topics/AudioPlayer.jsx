import '../topics/topics.css';
// import song from '../topics/music/DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3';
import song2 from '../topics/music/Vassily_Primakov_piano-Felix_Mendelssohn_Songs_Without_Words.mp3';
import song3 from '../topics/music/MusicianStringTrio.mp3';

const AudioPlayer = () => {
	return (
		<div className=''>
			<h3>Study Music</h3>
			{/* <audio className='audio-player-1' src={song} controls /> */}
			<audio className='audio-player-2' src={song2} controls />
			<audio className='audio-player-3' src={song3} controls />
		</div>
	);
};

export default AudioPlayer;
