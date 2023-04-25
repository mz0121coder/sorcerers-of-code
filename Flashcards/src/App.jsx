import './App.css'
// import * as React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/quizzes');

  return (
    <>
      <h1>HomePage</h1>
      <button type="button" onClick={handleClick}>
        Quizzes
      </button>
    </>
  )
}

export default App
