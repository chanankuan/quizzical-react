import { useState } from 'react';

import Background from '../Background/Background';
import HomePage from '../HomePage/HomePage';
import QuizPage from '../QuizPage/QuizPage';
import blueImg from '../../assets/blue-home.svg';
import yellowImg from '../../assets/yellow-home.svg';
import { Container } from './App.styled';

const App = () => {
  const [isQuiz, setIsQuiz] = useState(false);

  const startQuiz = () => {
    setIsQuiz(true);
  };

  return (
    <Container>
      <Background yellowImg={yellowImg} blueImg={blueImg} />
      {isQuiz ? <QuizPage /> : <HomePage onClick={startQuiz} />}
    </Container>
  );
};

export default App;
