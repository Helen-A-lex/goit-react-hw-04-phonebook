import styled from 'styled-components';
export const Form = styled.form`
  border: 1px solid black;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  font-family: sans-serif;
`;
export const Input = styled.input`
  width: 200px;
  border: 1px solid #dcdbdb;
  padding: 5px;
  font-size: 15px;
  outline: transparent;

  &:focus {
    border: 1px solid #987dc6;
    box-shadow: 5px 0px 27px -8px rgba(115, 62, 146, 1);
  }
`;
export const ButtonAddDeleteContact = styled.button`
  width: 100px;
  padding: 5px;
  background-color: white;
  border: 1px solid #dedede;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #5858f0;
    box-shadow: 5px 0px 27px -8px rgba(91, 95, 206, 1);
  }
`;
