//* react imports
import React from 'react'

//* local components/modules imports
import Main from './pages/Main'
import theme from './theme';

//* MUI components import 
import { ThemeProvider } from '@mui/material';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Main />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
