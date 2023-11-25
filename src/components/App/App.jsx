import { useState } from 'react';
import { Container } from './App.styled';
import Background from '../Background/Background';
import HomePage from '../HomePage/HomePage';
import QuizPage from '../QuizPage/QuizPage';
import blueImg from '../../assets/blue-home.svg';
import yellowImg from '../../assets/yellow-home.svg';

const App = () => {
  const [isQuiz, setIsQuiz] = useState(false);
  const [queryObj, setQueryObj] = useState({});

  const startQuiz = queryObj => {
    setIsQuiz(true);
    setQueryObj(queryObj);
  };

  const returnHomePage = () => {
    setIsQuiz(false);
  };

  return (
    <Container>
      <Background yellowImg={yellowImg} blueImg={blueImg} />
      {isQuiz ? (
        <QuizPage queryObj={queryObj} onReturn={returnHomePage} />
      ) : (
        <HomePage onClick={startQuiz} />
      )}
      <p
        style={{
          position: 'absolute',
          bottom: 0,
          fontSize: 12,
          letterSpacing: 1,
        }}
      >
        Developed by{' '}
        <a
          href="https://github.com/chanankuan/quizzical-react"
          rel="noreferrer"
          target="_blank"
        >
          Anton Chan
        </a>
      </p>
    </Container>
  );
};

export default App;
