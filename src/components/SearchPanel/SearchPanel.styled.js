import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 420px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  
  font-size: 18px;
  padding: 5px 0 5px 15px;
  border-radius: 6px 0 0 6px;
  background-color: #fff;
  width: 300px;
  border: 1px solid;
  // outline: 1px solid;
  // margin-right: auto;
`;

export const SearchBtn = styled.button`
  min-width: 100px;
  font-size: 18px;
  padding: 5px;
  background-color: #fff;
  // color: #222;
  color: #cc25b0;
  border: 1px solid;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background-color 250ms linear, color 300ms linear;

  &:hover {
    background-color: #cc25b0;
    color: #222;
  }
`;
