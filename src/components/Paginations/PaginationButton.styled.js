import styled from 'styled-components';

export const CusomButton = styled.button`
  padding: 20px 0;
  font-size: 18px;
  background-color: ${({ theme }) => theme.paginationButtonColor};
  color: ${({ theme }) => theme.cardTitleColor};
  border: none;
  transition: all 0.3s;
  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.paginationButtonDisabledColor};
    &:disabled:hover {
      background-color: ${({ theme }) => theme.paginationButtonColor};
      color: ${({ theme }) => theme.paginationButtonDisabledColor};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.paginationButtonHoverColor};
    color: ${({ theme }) => theme.paginationButtonTextHoverColor};
  }
`;
export const PaginationBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
`;
