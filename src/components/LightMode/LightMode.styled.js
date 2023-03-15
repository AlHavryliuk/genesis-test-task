import styled from 'styled-components';

export const LightButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.lightModeBackground};
  cursor: pointer;
`;
export const LightmodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  color: ${({ theme }) => theme.lightModeColor};
`;
