import styled from 'styled-components';

export const PictureRightBlock = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 400px;

  & button {
    float: right;
    background-color: transparent;
    color: ${({ theme }) => theme.cardTitleColor};
  }
`;
