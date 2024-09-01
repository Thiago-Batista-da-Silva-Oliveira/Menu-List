import styled from 'styled-components';

export const ButtonStyle = styled.button`
  padding: 10px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid #f7af1d;
  cursor: pointer;
  gap: 5px;
  transition: 0.3s;
  &:hover {
    scale: 1.1;
  }
`;