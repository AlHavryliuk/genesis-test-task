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
  gap: 30px;
  color: ${({ theme }) => theme.headerColor};
`;

