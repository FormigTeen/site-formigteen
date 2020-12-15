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
                Olá, eu sou desenvolvedor Full-Stack, porém focado mais em Back-End. 
            </Text>
            <Text 
                fontSize={[2, 2, 2, 3]}
                mt={[4, 4, 4, 5]}
                fontWeight='bold'
                sx={{
                    textAlign: 'center',
                }}
                color='secondary'>
                Mathues Silva Freitas<br />
            </Text>
            <Text 
                fontSize={[1, 1, 1, 2]}
                mt={[2, 2, 2, 2]}
                fontWeight='normal'
                sx={{
                    textAlign: 'center',
                }}
                color='secondary'>
            </Text>
        </Box>
    </Flex>
)

export default Quote
