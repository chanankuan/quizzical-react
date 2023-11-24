import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DropDownHeader,
  DropDownItem,
  Form,
  StartButton,
  Title,
} from './FormQuery.styled';
import { difficultyList } from '../../data/difficultyList';
import { typeList } from '../../data/typeList';

const FormQuery = ({ handleSubmit, categoryList }) => {
  const [list, setList] = useState([]);
  const [queryData, setQueryData] = useState({
    category: '',
    difficulty: '',
    type: '',
  });

  useEffect(
    () =>
      setList([
        {
          title: 'Category',
          name: 'category',
          list: categoryList,
        },
        {
          title: 'Difficulty',
          name: 'difficulty',
          list: difficultyList,
        },
        {
          title: 'Type of Question',
          name: 'type',
          list: typeList,
        },
      ]),
    [categoryList]
  );

  const handleChange = event => {
    const { name, value } = event.target;
    setQueryData(prevqueryData => ({ ...prevqueryData, [name]: value }));
  };

  return (
    <>
      {list.map(({ title, name, list }) => (
        <Form key={title} size="small">
          <Title>{title}:</Title>
          <DropDownHeader
            displayEmpty
            value={queryData[name]}
            name={name}
            onChange={handleChange}
          >
            <DropDownItem disabled value="">
              <span style={{ textTransform: 'capitalize' }}>Any {name}</span>
            </DropDownItem>
            {list.map(({ id, name }) => (
              <DropDownItem key={id} value={id}>
                {name}
              </DropDownItem>
            ))}
          </DropDownHeader>
        </Form>
      ))}

      <StartButton
        type="submit"
        queryData={queryData}
        onClick={() => handleSubmit(queryData)}
      >
        Start quiz
      </StartButton>
    </>
  );
};

FormQuery.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  categoryList: PropTypes.array.isRequired,
};

export default FormQuery;
