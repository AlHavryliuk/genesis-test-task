import styled from 'styled-components';

export const LoaderBody = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 5;
  background-color: ${({ theme }) => theme.headerBackgroundColor};
`;
