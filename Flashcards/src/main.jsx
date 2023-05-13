import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CSS from './topics/CSS.jsx';
import JS from './topics/JS.jsx';
import ReactQuestions from './topics/React.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/CSS',
		element: <CSS />,
	},
	{
		path: '/JS',
		element: <JS />,
	},
	{
		path: '/React',
		element: <ReactQuestions />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// CSS backup with radio buttons
// <>
// 	<h1>CSS</h1>
// 	{/* // Question 1 */}
// 	<div className='card'>
// 		<h3>What does CSS stand for?</h3>
// 		<p>
// 			<input type='radio' name='q1' value='a' id='q1a' />
// 			<label htmlFor='q1a'>a) Creative Style Sheets</label>
// 			<br />
// 			<input type='radio' name='q1' value='b' id='q1b' />
// 			<label htmlFor='q1b'>
// 				<b>b) Cascading Style Sheets</b>
// 			</label>
// 			<br />
// 			<input type='radio' name='q1' value='c' id='q1c' />
// 			<label htmlFor='q1c'>c) Computer Style Sheets</label>
// 			<br />
// 			<input type='radio' name='q1' value='d' id='q1d' />
// 			<label htmlFor='q1d'>d) Code Style Sheets</label>
// 		</p>
// 	</div>
// 	{/* // Question 2 */}
// 	<div className='card'>
// 		<h3>
// 			Which property is used to set the background color of an element in
// 			CSS?
// 		</h3>
// 		<p>
// 			<input type='radio' name='q2' value='a' id='q2a' />
// 			<label htmlFor='q2a'>a) background-color</label>
// 			<br />
// 			<input type='radio' name='q2' value='b' id='q2b' />
// 			<label htmlFor='q2b'>
// 				<b>b) color-background</b>
// 			</label>
// 			<br />
// 			<input type='radio' name='q2' value='c' id='q2c' />
// 			<label htmlFor='q2c'>c) element-color</label>
// 			<br />
// 			<input type='radio' name='q2' value='d' id='q2d' />
// 			<label htmlFor='q2d'>d) background-element</label>
// 		</p>
// 	</div>
// 	{/* // Question 3 */}
// 	<div className='card'>
// 		<h3>
// 			Which of the following is not a valid value for the display property
// 			in CSS?
// 		</h3>
// 		<p>
// 			<input type='radio' name='q3' value='a' id='q3a' />
// 			<label htmlFor='q3a'>a) block</label>
// 			<br />
// 			<input type='radio' name='q3' value='b' id='q3b' />
// 			<label htmlFor='q3b'>b) inline</label>
// 			<br />
// 			<input type='radio' name='q3' value='c' id='q3c' />
// 			<label htmlFor='q3c'>
// 				<b>c) none</b>
// 			</label>
// 			<br />
// 			<input type='radio' name='q3' value='d' id='q3d' />
// 			<label htmlFor='q3d'>d) underline</label>
// 		</p>
// 	</div>
// 	{/* // Question 4 */}
// 	<div className='card'>
// 		<h3>Which CSS property is used to add shadows to an element?</h3>
// 		<p>
// 			<input type='radio' name='q4' value='a' id='q4a' />
// 			<label htmlFor='q4a'>a) shadow</label>
// 			<br />
// 			<input type='radio' name='q4' value='b' id='q4b' />
// 			<label htmlFor='q4b'>
// 				<b>b) box-shadow</b>
// 			</label>
// 			<br />
// 			<input type='radio' name='q4' value='c' id='q4c' />
// 			<label htmlFor='q4c'>c) element-shadow</label>
// 			<br />
// 			<input type='radio' name='q4' value='d' id='q4d' />
// 			<label htmlFor='q4d'>d) text-shadow</label>
// 		</p>
// 	</div>
// 	{/* // Question 5 */}
// 	<div className='card'>
// 		<h3>Which CSS property is used to change the font of an element?</h3>
// 		<p>
// 			<input type='radio' name='q5' value='a' id='q5a' />
// 			<label htmlFor='q5a'>a) font-family</label>
// 			<br />
// 			<input type='radio' name='q5' value='b' id='q5b' />
// 			<label htmlFor='q5b'>
// 				<b>b) font-style</b>
// 			</label>
// 			<br />
// 			<input type='radio' name='q5' value='c' id='q5c' />
// 			<label htmlFor='q5c'>c) font-color</label>
// 			<br />
// 			<input type='radio' name='q5' value='d' id='q5d' />
// 			<label htmlFor='q5d'>d) font-size</label>
// 		</p>
// 	</div>
// 	{/* // Question 6 */}
// 	<div className='card'>
// 		<h3>What is the default value of the position property in CSS?</h3>
// 		<p>
// 			<input type='radio' name='q6' value='a' id='q6a' />
// 			<label htmlFor='q6a'>a) static</label>
// 			<br />
// 			<input type='radio' name='q6' value='b' id='q6b' />
// 			<label htmlFor='q6b'>b) absolute</label>
// 			<br />
// 			<input type='radio' name='q6' value='c' id='q6c' />
// 			<label htmlFor='q6c'>
// 				<b>c) relative</b>
// 			</label>
// 			<br />
// 			<input type='radio' name='q6' value='d' id='q6d' />
// 			<label htmlFor='q6d'>d) fixed</label>
// 		</p>
// 	</div>
// 	{/* // Question 7 */}
// 	<div className='card'>
// 		<h3>
// 			What is the CSS property used to control the spacing between elements?
// 		</h3>
// 		<p>
// 			<input type='radio' name='q7' value='a' id='q7a' />
// 			<label htmlFor='q7a'>a) margin</label>
// 			<br />
// 			<input type='radio' name='q7' value='b' id='q7b' />
// 			<label htmlFor='q7b'>b) padding</label>
// 			<br />
// 			<input type='radio' name='q7' value='c' id='q7c' />
// 			<label htmlFor='q7c'>
// 				<b>c) both margin and padding</b>
// 			</label>
// 			<br />
// 			<input type='radio' name='q7' value='d' id='q7d' />
// 			<label htmlFor='q7d'>d) spacing</label>
// 		</p>
// 	</div>
// 	{/* // Question 8 */}
// 	<div className='card'>
// 		<h3>Which CSS property is used to make text bold?</h3>
// 		<p>
// 			<input type='radio' name='q8' value='a' id='q8a' />
// 			<label htmlFor='q8a'>a) font-style</label>
// 			<br />
// 			<input type='radio' name='q8' value='b' id='q8b' />
// 			<label htmlFor='q8b'>
// 				<b>b) font-weight</b>
// 			</label>
// 			<br />
// 			<input type='radio' name='q8' value='c' id='q8c' />
// 			<label htmlFor='q8c'>c) text-style</label>
// 			<br />
// 			<input type='radio' name='q8' value='d' id='q8d' />
// 			<label htmlFor='q8d'>d) text-weight</label>
// 		</p>
// 	</div>
// 	{/* // Question 9 */}
// 	<div className='card'>
// 		<h3>
// 			What is the CSS property used to add background color to an element?
// 		</h3>
// 		<p>
// 			<input type='radio' name='q9' value='a' id='q9a' />
// 			<label htmlFor='q9a'>a) text-color</label>
// 			<br />
// 			<input type='radio' name='q9' value='b' id='q9b' />
// 			<label htmlFor='q9b'>b) background-color</label>
// 			<br />
// 			<input type='radio' name='q9' value='c' id='q9c' />
// 			<label htmlFor='q9c'>c) color-background</label>
// 			<br />
// 			<input type='radio' name='q9' value='d' id='q9d' />
// 			<label htmlFor='q9d'>
// 				<b>d) background</b>
// 			</label>
// 		</p>
// 	</div>
// 	{/* // Question 10 */}
// 	<div className='card'>
// 		<h3>Which CSS property is used to set the height of an element?</h3>
// 		<p>
// 			<input type='radio' name='q10' value='a' id='q10a' />
// 			<label htmlFor='q10a'>a) width</label>
// 			<br />
// 			<input type='radio' name='q10' value='b' id='q10b' />
// 			<label htmlFor='q10b'>b) size</label>
// 			<br />
// 			<input type='radio' name='q10' value='c' id='q10c' />
// 			<label htmlFor='q10c'>
// 				<b>c) height</b>
// 			</label>
// 			<br />
// 			<input type='radio' name='q10' value='d' id='q10d' />
// 			<label htmlFor='q10d'>d) length</label>
// 		</p>
// 	</div>
// </>
