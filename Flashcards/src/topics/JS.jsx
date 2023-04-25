import { useState } from 'react';
import CardList from './CardList';

const JsQuestions = [
	{id: 1, question: "What does CSS stand for?", answers: ["a) Creative Style Sheets", "b) Cascading Style Sheets", "c) Computer Style Sheets", "d) Code Style Sheets"], correctAnswer: "b) Cascading Style Sheets"},
];

export default function CSS() {
	const [cards, setCards] = useState(JsQuestions);

	return (
		<CardList cards={cards}/>
	)
}