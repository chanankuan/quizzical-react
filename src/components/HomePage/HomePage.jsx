import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section.styled';
import { Description, Title } from './HomePage.styled';
import { getCategoryList } from '../../service/category-service';
import FormQuery from '../FormQuery/FormQuery';

const HomePage = ({ onClick }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryList().then(data => {
      setCategoryList(data);
    });
  }, []);

  return (
    <Section>
      <Title>Quizzical</Title>
      <Description>Answer the questions and test your knowledge!</Description>

      <FormQuery handleSubmit={onClick} categoryList={categoryList} />
    </Section>
  );
};

HomePage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HomePage;
