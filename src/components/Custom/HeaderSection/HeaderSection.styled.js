import styled from 'styled-components';

export const CustomHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  border-bottom: 1px solid gray;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 28px;
  }
`;

export const CustomTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 768px) {
    justify-content: start;
  }

  & h1 {
    font-size: 36px;
    color: ${({ theme }) => theme.headerColor};
  }
`;
