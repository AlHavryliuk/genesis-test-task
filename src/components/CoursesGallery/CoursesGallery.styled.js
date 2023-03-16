import styled from 'styled-components';

export const CustomCoursesGallery = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
