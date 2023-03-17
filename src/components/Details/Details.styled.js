import styled from 'styled-components';

export const CustomStyled = styled.div`
  color: ${({ theme }) => theme.detailsColorText};

  & h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  & h2 {
    @media (max-width: 768px) {
      text-align: center;

    }
  }

  & p {
    @media (max-width: 768px) {
      text-align: center;
      margin-bottom: 30px;
    }
  }
`;

export const DetailsSubTitle = styled.h2`
  margin-top: 60px;
`