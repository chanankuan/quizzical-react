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
    </Container>
  );
};

export default App;
