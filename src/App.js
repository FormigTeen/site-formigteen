import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@rebass/preset'
import { Heading } from 'rebass'

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Heading as='h3'>
              Teste
          </Heading>
      </ThemeProvider>
  );
}

export default App;
