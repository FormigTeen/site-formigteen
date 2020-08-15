import React, { useState } from 'react';
import { 
    Heading,
    Flex,
    Box
} from 'rebass/styled-components'
import Typist from 'react-typist';
import { Input } from '@rebass/forms'
import "react-typist/dist/Typist.css"


const Bot = () => {
    const [message, setMessage] = useState("Hi!")
    const [text, setText] = useState("")
    const handleChange = (event) => {
        const { target: { value } } = event;
        setText(value);
    }
    const handleKeyUp = ({ keyCode }) => {
        if ( keyCode === 13 ) {
            setMessage(text || "*u*")
            setText("")
        }
    }
    return (
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
                    mb={[4, 4, 4, 5]}
                    fontSize={[4, 4, 4, 4]}
                    sx={{
                        textAlign: 'center',
                    }}
                    color='secondary'>
                    <Typist key={message}>
                        { message }
                    </Typist>
                </Heading>
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
                    value ={text}
                    onChange={handleChange} 
                    onKeyUp={handleKeyUp}
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
}

export default Bot
