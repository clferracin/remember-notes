import { Link } from 'react-router-dom'
import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content"
  ;

  background: ${({theme}) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid  ${({theme}) => theme.COLORS.BACKGROUND_700};
  background:  ${({theme}) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    color:  ${({theme}) => theme.COLORS.ORANGE};
  }
`

export const Menu = styled.ul`
  grid-area: menu;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 64px;
  background:  ${({theme}) => theme.COLORS.BACKGROUND_900};

  > li {
    list-style: none;
  }

`

export const Search = styled.div`
  grid-area: search;
  padding: 64px 64px 0;
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: auto;

`

export const NewNote = styled(Link)`
  grid-area: newnote;

  background: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`