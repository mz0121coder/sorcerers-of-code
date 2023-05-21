import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import Card from './Card';

describe('Card_function', () => {
	// Tests that the card component renders correctly with valid input data.
	it('test_card_renders_with_valid_input', () => {
		// Arrange
		const cards = [
			{
				question: 'Question 1',
				answer: 'Answer 1',
				options: ['Option 1', 'Option 2'],
			},
			{
				question: 'Question 2',
				answer: 'Answer 2',
				options: ['Option 3', 'Option 4'],
			},
		];

		// Act
		render(<Card cards={cards} />);

		// Assert
		expect(screen.getByText('Question 1')).toBeInTheDocument();
		expect(screen.getByText('Option 1')).toBeInTheDocument();
		expect(screen.getByText('Option 2')).toBeInTheDocument();
	});

	// Tests that the card flip animation works correctly.
	it('test_card_flip_animation', () => {
		// Arrange
		const cards = [
			{
				question: 'Question 1',
				answer: 'Answer 1',
				options: ['Option 1', 'Option 2'],
			},
			{
				question: 'Question 2',
				answer: 'Answer 2',
				options: ['Option 3', 'Option 4'],
			},
		];
		const { container } = render(<Card cards={cards} />);
		const cardContainer = container.querySelector('.card-container');

		// Act
		fireEvent.click(cardContainer);

		// Assert
		expect(container.querySelector('.card.back')).toBeInTheDocument();
	});
});
