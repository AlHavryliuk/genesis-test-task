import styled from 'styled-components';

export const CustomStyled = styled.div`
  color: ${({ theme }) => theme.detailsColorText};

  & h1 {
    text-align: center;
    margin-bottom: 50px;
  }
`;
