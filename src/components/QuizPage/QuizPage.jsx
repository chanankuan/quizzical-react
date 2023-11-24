import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import Loader from '../Loader/Loader';
import { Section } from '../Section/Section.styled';
import { Form, List, Result, Score, Error } from './QuizPage.styled';
import { getQuizData } from '../../service/quiz-service';
import { Button } from '../Button/Button.styled';
import shuffle from '../../utils/shuffle';
import { getCategoryList } from '../../service/category-service';

const QuizPage = ({ queryObj, onReturn }) => {
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [userResults, setUserResults] = useState(null);
  const [userAnswers, setUserAnswers] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  });

  const shuffledAnswers = useMemo(() => {
    return quizData.map(quiz => {
      const allAnswers = [quiz.correct_answer, ...quiz.incorrect_answers];
      return shuffle(allAnswers);
    });
  }, [quizData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await getQuizData(queryObj);
        setQuizData(data);
      } catch {
        setShowError(true);
      } finally {
        setIsLoading(false);
        setPlayAgain(false);
      }
    };
    fetchData();
  }, [queryObj]);

  const handleSubmit = event => {
    event.preventDefault();

    setPlayAgain(true);
    const results = Object.values(userAnswers).reduce((acc, n) => {
      return n === true ? acc + 1 : acc;
    }, 0);

    setUserResults(results);
    setShowResults(true);
  };

  const handleChange = (event, correct) => {
    const { name, value } = event.target;

    setUserAnswers(prevUserAnswers => ({
      ...prevUserAnswers,
      [name]: value === correct,
    }));
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <Section>
      {quizData.length > 0 && (
        <Form onSubmit={handleSubmit}>
          <List>
            {quizData.map((quiz, idx) => {
              return (
                <QuizQuestion
                  key={idx}
                  name={idx + 1}
                  data={{ ...quiz, all_answers: shuffledAnswers[idx] }}
                  onChange={handleChange}
                  showResults={showResults}
                />
              );
            })}
          </List>

          <Result>
            {showResults && (
              <Score>You scored {userResults}/5 correct answers</Score>
            )}
            {playAgain ? (
              <Button type="button" onClick={onReturn}>
                Play again
              </Button>
            ) : (
              <Button type="submit">Check Answers</Button>
            )}
          </Result>
        </Form>
      )}

      {showError && (
        <Error>Oops. Something went wrong. Please refresh the page.</Error>
      )}
      {isLoading && <Loader />}
    </Section>
  );
};

QuizQuestion.propTypes = {
  queryObj: PropTypes.object,
  onReturn: PropTypes.func.isRequired,
};

export default QuizPage;
