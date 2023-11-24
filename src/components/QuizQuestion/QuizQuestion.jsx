import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { decode } from 'html-entities';
import {
  Fieldset,
  InputHidden,
  Label,
  List,
  Option,
  Title,
} from './QuizQuestion.styled';

const QuizQuestion = ({
  name,
  data: { all_answers, question, correct_answer },
  onChange,
  showResults,
}) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleChange = event => {
    setUserAnswer(event.target.value);
    onChange(event, correct_answer);
  };

  return (
    <Fieldset>
      <Title>{decode(question)}</Title>
      <List>
        {all_answers.map((option, idx) => {
          option = decode(option);

          return (
            <Option key={idx + 1}>
              <InputHidden
                type="radio"
                id={name + '-' + option}
                name={name}
                value={option}
                checked={userAnswer === option}
                disabled={showResults ? 'disabled' : null}
                isCorrect={option === correct_answer}
                onChange={event => handleChange(event, userAnswer)}
              />
              <Label htmlFor={name + '-' + option}>{option}</Label>
            </Option>
          );
        })}
      </List>
    </Fieldset>
  );
};

QuizQuestion.propTypes = {
  name: PropTypes.number.isRequired,
  data: PropTypes.shape({
    all_answers: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  showResults: PropTypes.bool.isRequired,
};

export default QuizQuestion;
