import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import LogoForPages from './LogoForPages.jsx';

describe('LogoForPages', () => {
	it('renders the logo correctly', () => {
		const { getByAltText } = render(<LogoForPages />);
		const logo = getByAltText('Logo');
		expect(logo).toBeInTheDocument();
		expect(logo.src).toContain('logo.png');
	});
});
