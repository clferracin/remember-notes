import styled from "styled-components";

interface ButtonTextContainerProps {
  $isactive: string
}

export const ButtonTextContainer = styled.button<ButtonTextContainerProps>`
  font-size: 16px;
  border-radius: 5px;
  border: none;
  color: ${({theme, $isactive }) => $isactive === 'true' ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  background: none;
`