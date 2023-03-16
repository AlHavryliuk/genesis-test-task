import styled from 'styled-components';

export const CustomStyled = styled.div`
  color: ${({ theme }) => theme.detailsColorText};


  & h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  & h2 {
    @media (max-width: 768px) {
      margin-top: 70px;
      text-align: center;
    }
  }

  & p {
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`;
