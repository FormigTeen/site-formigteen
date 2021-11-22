import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@rebass/preset'
import Profile from './pages/Profile'
import Quote from './pages/Quote'
import Bot from './pages/Bot'
import Skills from './pages/Skills'
import './index.css';
import Flag from "./pages/Flag";
import {LanguageContextProvider} from "./contexts/LanguageContext";
import {startLanguage} from "./plugins/i18n";

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

startLanguage()

function App() {
  return (
      <ThemeProvider theme={myTheme}>
          <LanguageContextProvider>
              <Flag />
              <Profile />
              <Quote />
              <Bot />
              <Skills />
          </LanguageContextProvider>
      </ThemeProvider>
  );
}

export default App;
