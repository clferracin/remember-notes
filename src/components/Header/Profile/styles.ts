import styled from "styled-components";
import { Link } from 'react-router-dom'

export const ProfileContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  
  > img {
    height: 56px;
    width: 56px;
    border-radius: 50%;
  }

  > .welcome {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100}
    }

    strong {
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.WHITE}
    }

  }

`