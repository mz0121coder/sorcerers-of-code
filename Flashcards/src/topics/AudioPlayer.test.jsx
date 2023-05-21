import AudioPlayer from './AudioPlayer';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('AudioPlayer_function', () => {
	// Tests that the AudioPlayer component renders without errors.
	it('test_audio_player_renders_without_errors', () => {
		render(<AudioPlayer />);
		expect(screen.getByText('Study Music')).toBeInTheDocument();
	});
});
