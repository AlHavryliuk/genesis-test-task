import styled from 'styled-components';

export const CustomHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.headerBackgroundColor};
  border-bottom: 1px solid gray;
`;
export const CustomTitle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  & h1 {
    font-size: 35px;
    color: ${({ theme }) => theme.headerColor};
  }
`;
