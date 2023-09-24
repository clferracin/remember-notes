import styled from "styled-components";

export const ButtonContainer = styled.button`
width: 100%;
  background: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  border: none;
  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  margin-top: 16px;
  line-height: 16px;
  font-weight: 500;
  display: flex;
  gap: 2px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    
  }

  &:disabled {
    opacity: 0.5;
  }

`