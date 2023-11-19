import styled from '@emotion/styled';

export const Fieldset = styled.fieldset`
  position: relative;
  border: none;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    width: 100%;
    height: 1px;
    background-color: #dbdef0;
  }
`;

export const Title = styled.legend`
  font-size: 16px;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 13px;
`;

export const Option = styled.li`
  text-align: center;
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  min-width: 70px;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #4d5b9e;
  border-radius: 8px;
  padding: 4px 10px;
  cursor: pointer;
`;

export const InputHidden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + label {
    background-color: #d6dbf5;
    border: 1px solid #d6dbf5;
  }
`;
