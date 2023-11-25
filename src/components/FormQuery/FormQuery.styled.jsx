import styled from '@emotion/styled';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '../Button/Button.styled';

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  flex-basis: 150px;
  margin: 0;
`;

export const Form = styled(FormControl)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const DropDownHeader = styled(Select)`
  width: 300px;
  color: inherit;
  font-family: inherit;
  font-style: normal;
  border-radius: 10px;
  outline: none;
  border: none;
`;

export const DropDownItem = styled(MenuItem)`
  width: 300px;
  padding: 5px;
  height: 20px;
  color: #293264;
  font-family: inherit;
`;

export const StartButton = styled(Button)`
  width: 190px;
  height: 50px;
`;
