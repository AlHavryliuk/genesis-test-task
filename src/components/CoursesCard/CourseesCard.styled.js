import styled from 'styled-components';

export const CustomCourseCard = styled.li`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  position: relative;
  transition: 0.3s;

  &:hover .top-slider {
    height: 300px;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: linear-gradient(#0000003b, #0000003b);
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    scale: 1.02;
  }

  & img {
    object-fit: cover;

    width: 100%;
    height: 300px;
  }

  & .top-slider {
    position: absolute;
    padding: 0;
    background-color: #ffffffe8;
    text-align: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
    left: 0;
    top: 0;
    width: 100%;
    height: 0;
    transition: 0.3s;

    & li {
      padding: 0 30px;
    }

    & li:nth-of-type(2) {
      display: flex;
      gap: 40px;
    }
  }
`;

export const CourseTitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.cardTitleColor};
`;
