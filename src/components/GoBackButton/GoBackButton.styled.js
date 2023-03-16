import styled from 'styled-components';

export const GoBackCustom = styled.button`
  border: 1px solid;
  background-color: transparent;
  color: ${({ theme }) => theme.goBackColor};
  padding: 20px 30px;
  border-radius: 5px;
  margin: 20px 0;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: black;
    color: white;
    border-color: black;
  }
`;
