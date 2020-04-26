import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@rebass/preset'
import Profile from './pages/Profile'
import Quote from './pages/Quote'

const myTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        primary: '#010101',
        secondary: '#E7E4EF'
    },
    fonts: {
        ...theme.fonts,
        body: 'Hack',
        heading: 'Hack',
    },
}

function App() {
  console.log(myTheme)
  return (
      <ThemeProvider theme={myTheme}>
          <Profile />
          <Quote />
      </ThemeProvider>
  );
}

export default App;
