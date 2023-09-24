import { ThemeProvider} from 'styled-components'
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from './routes/app.routes';
import { BrowserRouter } from 'react-router-dom'
//import { AuthRoutes } from './routes/auth.routes';

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}
