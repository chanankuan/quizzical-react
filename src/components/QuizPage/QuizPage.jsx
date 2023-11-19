import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section.styled';
import { List } from './QuizPage.styled';
import { getQuizData } from '../../service/quiz-service';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import { nanoid } from 'nanoid';
import Loader from '../Loader/Loader';

const QuizPage = props => {
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userAnswers, setUserAnswers] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  });

  useEffect(() => {
    setIsLoading(true);
    getQuizData()
      .then(data => setQuizData(data))
      .catch(error => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserAnswers(prevUserAnswers => ({ ...prevUserAnswers, [name]: value }));
  };

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <List>
          {quizData.map((quiz, index) => (
            <QuizQuestion
              key={index}
              name={index + 1}
              data={quiz}
              onChange={handleChange}
              userAnswers={userAnswers}
            />
          ))}
        </List>

        <button type="submit">Submit</button>
      </form>

      {isLoading && <Loader />}
    </Section>
  );
};

QuizPage.propTypes = {};

export default QuizPage;
