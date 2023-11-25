import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  color: #f5f7fb;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;

  width: 180px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background-color: #6071c5;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #4d5b9e;
  }

  &:disabled {
    background-color: #97a7f7;
    cursor: unset;
  }
`;
