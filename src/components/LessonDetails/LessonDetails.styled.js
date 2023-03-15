import styled from 'styled-components';

export const LessonItem = styled.div`
  padding: 20px 40px 30px;
  background-color: gray;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    border: none;
    border-radius: 10px;
    padding: 0 30px;
    transition: all 0.3s;
    height: 50px;
    cursor: pointer;

    &:hover {
      background-color: #2c3333;
      color: white;
    }
  }
`;
