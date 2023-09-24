import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
  }

body {
  background: ${(props) => props.theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};
}

body, input, button, textarea {
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  outline: none;
}

a {
  text-decoration: none;
}

button, a {
  filter: brightness(0.9);
}

button:hover, a:hover {
  cursor: pointer;
  transition: filter 0.2s;
}

`;