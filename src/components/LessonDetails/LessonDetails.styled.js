import styled from 'styled-components';

export const LessonItem = styled.div`
  padding: 20px 40px 30px;
  background-color: #22a39f;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;


  & .blocked::after {
    content: 'Lesson is blocked';
    text-align: center;
    padding-top: 50px;
    font-size: 19px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #2c3333;
  }

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
