import React from 'react';
import { 
    Heading,
    Flex,
    Box
} from 'rebass/styled-components'
import Typing from 'react-typing-animation';
import { Input } from '@rebass/forms'


const Bot = () => (
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
            <Typing cursorClassName="cursor-white">
                <Heading 
                    as='h2' 
                    mb={[4, 4, 4, 5]}
                    fontSize={[4, 4, 4, 4]}
                    sx={{
                        textAlign: 'center',
                    }}
                    color='secondary'>
                    Hi!
                </Heading>
            </Typing>
        </Box>
        <Box 
            px={5}
            sx={{
                width: '100%',
            }}
            flex={1}
        >
            <Input
                name='message'
                type='text'
                fontSize={[4, 4, 4, 4]}
                sx={{
                    color: '#E7E4EF',     
                    textAlign: 'center',
                    border: '0px',
                    ':focus': {
                        outline: 'none',
                        borderBottom: '1px solid',
                        color: '#E7E4EF',     
                    }
                }}
                placeholder='Type something'
            />
        </Box>
    </Flex>
)

export default Bot
