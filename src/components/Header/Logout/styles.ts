import styled from "styled-components";

export const LogoutContainer = styled.button`
  border: none;
  background: none;
  cursor: pointer;

  > svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`