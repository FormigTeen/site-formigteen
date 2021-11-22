import React from 'react';
import {
    Heading,
    Flex,
    Text,
    Box
} from 'rebass/styled-components'
import {useTranslation} from "react-i18next";

const Skills = () => {
    const { t } = useTranslation()
    return (
        <Flex
            bg='primary'
            flexDirection='column'
            px={[2, 3, 3, 5]}
            pb={[5, 5, 5, 6]}
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
                    { t('HABILIDADES') }
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
                    <Skill value={100}>
                        php
                    </Skill>
                    <Skill value={100}>
                        MySQL
                    </Skill>
                    <Skill value={100}>
                        JavaScript
                    </Skill>
                    <Skill value={100}>
                        Docker
                    </Skill>
                    <Skill value={100}>
                        TypeScript
                    </Skill>
                    <Skill value={100}>
                        Laravel
                    </Skill>
                    <Skill value={100}>
                        Lumen
                    </Skill>
                    <Skill value={100}>
                        Jigsaw
                    </Skill>
                    <Skill value={100}>
                        React
                    </Skill>
                    <Skill value={100}>
                        VueJs
                    </Skill>
                    <Skill value={100}>
                        AdonisJs
                    </Skill>
                </Flex>
            </Box>
        </Flex>
    )
}

const Skill = ({ value, children }) => (
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
                background: `linear-gradient(20deg, #E7E4EF ${value}%, #010101 ${value}%)`,
            }}
        >
            <Text color='primary'
                fontSize={3}
                fontWeight='800'
                sx={{
                    textShadow: '-2px -2px 0 #E7E4EF, 2px -2px 0 #E7E4EF, -2px 2px 0 #E7E4EF, 2px 2px 0 #E7E4EF'
                }}
            >{children}</Text>
        </Box>
    </Box>
)

export default Skills
