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
