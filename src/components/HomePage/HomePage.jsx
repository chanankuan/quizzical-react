import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button/Button.styled';
import { Section } from '../Section/Section.styled';
import { Description, Title } from './HomePage.styled';

const HomePage = props => {
  return (
    <Section>
      <Title>Quizzical</Title>
      <Description>Some description if needed</Description>
      <Button onClick={props.onClick}>Start quiz</Button>
    </Section>
  );
};

HomePage.propTypes = {};

export default HomePage;
