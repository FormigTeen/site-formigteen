import React from 'react';
import { 
    Heading,
    Flex,
    Text,
    Box
} from 'rebass/styled-components'

const Quote = () => (
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
                ABOUT ME
            </Heading>
        </Box>
        <Box flex={1}>
            <Text 
                fontSize={[2, 2, 2, 3]}
                sx={{
                    textAlign: 'center',
                    lineHeight: 3,
                }}
                color='secondary'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Text>
            <Text 
                fontSize={[2, 2, 2, 3]}
                mt={[4, 4, 4, 5]}
                fontWeight='bold'
                sx={{
                    textAlign: 'center',
                }}
                color='secondary'>
                Carla Azevedo da Silva<br />
            </Text>
            <Text 
                fontSize={[1, 1, 1, 2]}
                mt={[2, 2, 2, 2]}
                fontWeight='normal'
                sx={{
                    textAlign: 'center',
                }}
                color='secondary'>
                Vice Diretora da Empresa
            </Text>
        </Box>
    </Flex>
)

export default Quote
