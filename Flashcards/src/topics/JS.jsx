import { useState } from 'react';
import './topics.css';
import song from '../topics/DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3';


export default function JS() {
	const [flippedCards, setFlippedCards] = useState([]);

	const handleCardClick = index => {
		const newFlippedCards = [...flippedCards];
		newFlippedCards[index] = !newFlippedCards[index];
		setFlippedCards(newFlippedCards);
	};
	return (
		<>
		<h3>Study Music</h3>
		<div><audio src={song} autoPlay loop controls /></div>
			<h1>JavaScript</h1>
			{/* Question 1 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(0)}>
				<h3>What does the keyword this refer to in JavaScript?</h3>
				{!flippedCards[0] && (
					<>
						<p id='q1a'>a) The global object</p>
						<p id='q1b'>
							<b>b) The object that called the function</b>
						</p>
						<p id='q1c'>c) The function itself</p>
						<p id='q1d'>d) The object where the function is defined</p>
					</>
				)}
				{flippedCards[0] && (
					<div>
						<p>Answer: b) The object that called the function</p>
					</div>
				)}
			</div>
			{/* Question 2 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(1)}>
				<h3>
					What is the output of the following code: console.log(typeof [])?
				</h3>
				{!flippedCards[1] && (
					<>
						<p id='q2a'>a) Array</p>
						<p id='q2b'>
							<b>b) Object</b>
						</p>
						<p id='q2c'>c) ArrayObject</p>
						<p id='q2d'>d) undefined</p>
					</>
				)}
				{flippedCards[1] && (
					<div>
						<p>Answer: b) Object</p>
					</div>
				)}
			</div>

			{/* Question 3 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(2)}>
				<h3>What is the difference between let and var in JavaScript?</h3>
				{!flippedCards[2] && (
					<>
						<p id='q3a'>
							a) let is block-scoped, while var is function-scoped.
						</p>
						<p id='q3b'>
							<b>
								b) let is block-scoped, while var is function-scoped and can be
								redeclared.
							</b>
						</p>
						<p id='q3c'>
							c) let is function-scoped, while var is block-scoped.
						</p>
						<p id='q3d'>
							d) let and var are completely interchangeable and have no
							differences.
						</p>
					</>
				)}
				{flippedCards[2] && (
					<div>
						<p>
							Answer: b) let is block-scoped, while var is function-scoped and
							can be redeclared.
						</p>
					</div>
				)}
			</div>

			{/* Question 4 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(3)}>
				<h3>What is a closure in JavaScript?</h3>
				{!flippedCards[3] && (
					<>
						<p id='q4a'>a) A data structure used to implement recursion</p>
						<p id='q4b'>
							b) A function that takes in a callback function as an argument
						</p>
						<p id='q4c'>
							<b>
								c) A function that has access to variables in its outer scope
							</b>
						</p>
						<p id='q4d'>
							d) A function that is not bound to an object and has no this
							keyword
						</p>
					</>
				)}
				{flippedCards[3] && (
					<div>
						<p>
							Answer: c) A function that has access to variables in its outer
							scope
						</p>
					</div>
				)}
			</div>

			{/* Question 5 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(4)}>
				<h3>What is the difference between == and === in JavaScript?</h3>
				{!flippedCards[4] && (
					<>
						<p id='q5a'>a) They are the same and can be used interchangeably</p>
						<p id='q5b'>
							b) == compares value and type while === compares only value
						</p>
						<p id='q5c'>
							c) == compares only value while === compares value and type
						</p>
						<p id='q5d'>d) There is no difference between the two</p>
					</>
				)}
				{flippedCards[4] && (
					<div>
						<p>
							Answer: c) == compares only value while === compares value and
							type
						</p>
					</div>
				)}
			</div>

			{/* Question 6 */}

			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(5)}>
				<h3>What is the output of the following code? </h3>
				<pre>
					{`for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}`}
				</pre>
				{!flippedCards[5] && (
					<>
						<p>a) 0 1 2 3 4 5</p>
						<p>b) 0 1 2 3 4 5 6</p>
						<p>c) 1 2 3 4 5 6</p>
						<p>
							<b>d) 1 2 3 4 5</b>
						</p>
					</>
				)}
				{flippedCards[5] && (
					<div>
						<p>Answer: d) 1 2 3 4 5</p>
						<p>
							The code logs 1, 2, 3, 4, and 5 to the console, each after a
							one-second delay.
						</p>
						<p>
							The reason is that the <code>setTimeout</code> function runs after
							the loop is complete, and by that time, the value of{' '}
							<code>i</code> is 6. Therefore, each of the five timeouts logs 6.
						</p>
					</div>
				)}
			</div>
			{/* Question 7 */}

			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(6)}>
				<h3>
					What is the difference between <code>undefined</code> and{' '}
					<code>null</code>?
				</h3>
				{!flippedCards[6] && (
					<>
						<p>
							<b>
								a) <code>undefined</code> means a variable has been declared but
								has not yet been assigned a value, while
								<code>null</code> is an assignment value representing no value
								or no object.
							</b>
						</p>
						<p>
							b) <code>undefined</code> is an assignment value representing no
							value or no object, while <code>null</code>
							means a variable has been declared but has not yet been assigned a
							value.
						</p>
						<p>
							c) There is no difference between the two. They are
							interchangeable.
						</p>
						<p>
							d) <code>undefined</code> is used for undeclared variables, while{' '}
							<code>null</code> is used for declared but uninitialized
							variables.
						</p>
					</>
				)}
				{flippedCards[6] && (
					<div>
						<p>
							Answer: a) <code>undefined</code> means a variable has been
							declared but has not yet been assigned a value, while{' '}
							<code>null</code> is an assignment value representing no value or
							no object.
						</p>
					</div>
				)}
			</div>
			{/* Question 8 */}

			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(7)}>
				<h3>What is the output of the following code?</h3>
				{!flippedCards[7] && (
					<>
						<code>
							{`function test() {
  foo();
  var foo = function() {
    console.log("bar");
  };
}`}
						</code>
						<p>a) TypeError: Cannot read property foo of undefined</p>
						<p>b) TypeError: foo is not a function</p>
						<p>c) undefined</p>
						<p>
							<b>d) ReferenceError: foo is not defined</b>
						</p>
						<pre></pre>
					</>
				)}
				{flippedCards[7] && (
					<div>
						<p>Answer: d) ReferenceError: foo is not defined</p>
						<p>
							In this code, the function <code>foo</code> is declared as a
							variable with <code>var</code>, which means that it is hoisted to
							the top of the function. However, when it is called on the first
							line of the function, it has not yet been defined, so a{' '}
							<code>ReferenceError</code> is thrown.
						</p>
					</div>
				)}
			</div>
			{/* Question 9 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(8)}>
				<h3>
					What is the difference between null and undefined in JavaScript?
				</h3>
				{!flippedCards[8] && (
					<>
						<p id='q9a'>
							a) null means an empty or non-existent value assigned by the
							developer, while undefined means a variable has been declared but
							has not yet been assigned a value.
						</p>
						<p id='q9b'>
							b) undefined means an empty or non-existent value assigned by the
							developer, while null means a variable has been declared but has
							not yet been assigned a value.
						</p>
						<p id='q9c'>
							c) null and undefined are interchangeable and can be used to
							represent an empty or non-existent value.
						</p>
						<p id='q9d'>
							d) null and undefined are both primitive data types in JavaScript,
							but they have different use cases and cannot be used
							interchangeably.
						</p>
					</>
				)}
				{flippedCards[8] && (
					<div>
						<p>
							Answer: a) null means an empty or non-existent value assigned by
							the developer, while undefined means a variable has been declared
							but has not yet been assigned a value.
						</p>
					</div>
				)}
			</div>

			{/* Question 10 */}
			<div
				className='card'
				style={{ backgroundColor: 'lightgrey' }}
				onClick={() => handleCardClick(9)}>
				<h3>What is the output of the following code?</h3>
				<code>
					const x = 5;
					<br />
					const y = 6;
					<br />
					const z = The sum of x and y is $x + y.;
					<br />
					console.log(z);
				</code>
				{!flippedCards[9] && (
					<>
						<p id='q10a'>a) The sum of x and y is 11.</p>
						<p id='q10b'>
							<b>b) The sum of x and y is 56.</b>
						</p>
						<p id='q10c'>c) The sum of x and y is undefined.</p>
						<p id='q10d'>d) SyntaxError: Invalid template string expression</p>
					</>
				)}
				{flippedCards[9] && (
					<div>
						<p>Answer: b) The sum of x and y is 56.</p>
					</div>
				)}
			</div>
		</>
	);
}