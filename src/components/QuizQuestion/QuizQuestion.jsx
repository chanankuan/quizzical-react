import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { decode } from 'html-entities';
import { nanoid } from 'nanoid';
import {
  Fieldset,
  InputHidden,
  Label,
  List,
  Option,
  Title,
} from './QuizQuestion.styled';

const QuizQuestion = ({ name, data, onChange, userAnswers }) => {
  const options = [data.correct_answer, ...data.incorrect_answers];
  return (
    <Fieldset>
      <Title>{decode(data.question)}</Title>
      <List>
        {options.map((option, index) => {
          option = decode(option);

          return (
            <Option key={index + 1}>
              <InputHidden
                type="radio"
                id={option}
                name={name}
                value={option}
                checked={userAnswers[name] === option}
                onChange={onChange}
              />
              <Label htmlFor={option}>{option}</Label>
            </Option>
          );
        })}
      </List>
    </Fieldset>
  );
};

QuizQuestion.propTypes = {};

export default QuizQuestion;
