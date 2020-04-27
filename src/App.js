import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@rebass/preset'
import Profile from './pages/Profile'
import Quote from './pages/Quote'
import { 
    Heading,
    Flex,
    Text,
    Box
} from 'rebass/styled-components'

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
          <Flex
              bg='primary'
              flexDirection='column'
              px={[2, 3, 3, 5]}
              py={[5, 5, 5, 6]}
              sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
          >
              <Box 
                  mb={[3, 3, 3, 4]}
                  flex={0}>
                  <Heading 
                      as='h2' 
                      fontSize={[4, 4, 4, 4]}
                      sx={{
                          textAlign: 'center',
                      }}
                      color='secondary'>
                      SKILLS
                  </Heading>
              </Box>
              <Box flex={1}>
                  <Flex
                      sx={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexWrap: 'wrap'
                      }}
                  >
                      <Box 
                          m={3}
                          p={1}
                          sx={{
                              backgroundColor: 'secondary',
                              height: '150px',
                              width: '150px',
                          }}
                      >
                          <Box 
                              sx={{
                                  display: 'flex',
                                  height: '100%',
                                  width: '100%',
                                  textAlign: 'center',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  borderColor: 'secondary',
                                  border: '15px solid', 
                                  background: 'linear-gradient(20deg, #E7E4EF 50%, #010101 50%)',
                              }}
                          >
                              <Text color='primary'
                                  fontSize={3}
                                  fontWeight='800'
                                  sx={{
                                      textShadow: '-2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white, 2px 2px 0 white'
                                  }}
                              >React</Text>
                          </Box>
                      </Box>
                  </Flex>
              </Box>
          </Flex>
      </ThemeProvider>
  );
}

export default App;
