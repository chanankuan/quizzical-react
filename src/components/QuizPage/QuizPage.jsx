import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section.styled';
import { List } from './QuizPage.styled';
import { getQuizData } from '../../service/quiz-service';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import { nanoid } from 'nanoid';
import Loader from '../Loader/Loader';
import { Button } from '../Button/Button.styled';

const QuizPage = props => {
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userResults, setUserResults] = useState(null);
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

    const results = Object.values(userAnswers).reduce((acc, n) => {
      return n === true ? acc + 1 : acc;
    }, 0);
    console.log(Object.values(userAnswers));

    setUserResults(results);
  };

  const handleChange = (event, correct) => {
    const { name, value } = event.target;

    setUserAnswers(prevUserAnswers => ({
      ...prevUserAnswers,
      [name]: value === correct,
    }));
  };

  console.log(userAnswers);

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

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {userResults && <div>You scored {userResults}/5 correct answers</div>}
          <Button type="submit">Submit</Button>
        </div>
      </form>

      {isLoading && <Loader />}
    </Section>
  );
};

QuizPage.propTypes = {};

export default QuizPage;
