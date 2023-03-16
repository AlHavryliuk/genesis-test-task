import styled from 'styled-components';

export const PopupVideoMain = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  & h2 {
    color: ${({ theme }) => theme.popupVideoColor};
  }

  & button {
    padding: 10px 20px;
    background-color: transparent;
    color: ${({ theme }) => theme.popupVideoColor};
  }
`;

export const PopupVideoBody = styled.div`
  width: 900px;
  height: 600px;
`;
