import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@rebass/preset'
import { 
    Heading,
    Flex,
    Image,
    Box
} from 'rebass/styled-components'

const myTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        primary: '#262626',
        secondary: '#E7E4FF'
    },
}

function App() {
  console.log(myTheme)
  return (
      <ThemeProvider theme={myTheme}>
          <Flex
              bg='primary'
              flexWrap='wrap-reverse'
              sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '100vh'
              }}
          >
              <Box 
                  maxWidth='50vw' 
                  px={4} 
                  flex={1}
              >
                  <Heading 
                      as='h1' 
                      sx={{
                          textAlign: 'center',
                      }}
                      color='secondary'>
                      Matheus Silva Freitas
                  </Heading>
              </Box>
              <Box 
                  px={2}
                  flex={1}
                  maxWidth='50vw' 
              >
                  <Box 
                      sx={{ 
                          height: '50vh',
                          width: '50vh'
                      }}
                  >
                      <Image
                      sx={{ 
                          objectFit: 'cover',
                          borderRadius: '100%',
                          width: '50vh'
                      }}

                          src='https://lh3.googleusercontent.com/CfqqxquiMoqlktUK3IQKbkNH2zThS55Lwy2si1eS3sXAVGJZp1xDiuFQX8N69Xx8uzfyzHnX4dNvDzuC1Srf-_k6SFjrBUq60SElLQdMPUYlPzkwvFkGyWZ7J2jExgi_NWB16xh3t5K9wQsj_xuyUYPLjj2-REPYX47GsWAwy7KGVTy-2T2hfuvB9jfVShwWP7I1ireNea0Mm0GMDT9vi0RVRenp6RHeWhZZDPLFsXe502xKxwTYJ5JS6N8_LahKHCxt85b5_dPf2Jnb1GmghVtPxZzz0XDqcNB4aywcd3HVlqsj35O14xdpC7mer1Z9SB9UzOSnpyCYzSez3zPo4CZ75ugEawOxMz8h6PI42X6F9PblqEyz71ZdX7FqXZ6vbEB0rmDypF8Zui_Wb1N5WNQ_HN62mU39SBRO4MqS7r-LDrF5QQWeWzNGtl3Rlsg0Abc1Cs-ou3rovUzJiKFMC11KHoeoiPAfghYVht5OmgCWWFsLMf8367HTQfcYcLi4SNooJ4K4-pl_8ThLi8UEso2bNT-a_epkJErtNzVbwMsotsZ_o9HmYwa2HtbijhRa1M7yo5u2eibbYh5ku5BHQ9LnkGxBdo7RGdX_rhisVC5RUxXkSic6SZ_z0u-pnvhmjDw6ClVeKdTwry0xWMPRvlwhPUJkMIaOXGNEu-m9cxTzxKi7QOeZu8e91SpQ2g=s907-no'
                      />
                  </Box>
              </Box>
          </Flex>
      </ThemeProvider>
  );
}

export default App;
