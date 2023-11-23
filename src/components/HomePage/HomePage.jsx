import React from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section.styled';
import { Description, Title } from './HomePage.styled';
import { StartButton } from '../HomePage/HomePage.styled';

const HomePage = props => {
  return (
    <Section>
      <Title>Quizzical</Title>
      <Description>Some description if needed</Description>
      <StartButton onClick={props.onClick}>Start quiz</StartButton>
    </Section>
  );
};

HomePage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HomePage;
