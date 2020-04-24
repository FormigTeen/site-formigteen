import React from 'react';
import { 
    Heading,
    Flex,
    Text,
    Image,
    Box
} from 'rebass/styled-components'

const Profile = () => (
    <Flex
        bg='primary'
        flexWrap='wrap-reverse'
        sx={{
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            '@media screen and (max-width: 600px)': {
                alignItems: 'stretch',
            }
        }}
    >
        <Box 
            px={0} 
            flex={1}
            sx={{
                minWidth: '300px'
            }}
        >
            <Flex
                bg='primary'
                sx={{
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                }}
            >
                <Box 
                    sx={{
                        width: '50%',
                    }}
                >
                    <Heading 
                        as='h2' 
                        fontSize={[2, 2, 2, 4]}
                        sx={{
                            textAlign: 'right',
                        }}
                        color='secondary'>
                        Web<br />
                        Developer
                    </Heading>

                </Box>
                <Box 
                    flex={1}
                    pl={2}
                    ml={2}
                    sx={{
                        borderLeftStyle: 'solid',
                        borderColor: 'secondary',
                        width: '50%',
                    }}
                >
                    <Heading 
                        as='h1' 
                        fontSize={[5, 5, 5, 7]}
sx={{
    textAlign: 'left',
                        }}
                        color='secondary'>
                        Matheus<br />  
                        Freitas
                    </Heading>
                </Box>

                <Box 
                    mt={4}
                    sx={{
                        minWidth: '100%',
                    }}
                >
                    <Flex
                        bg='secondary'
                        sx={{
                            justifyContent: 'center',
                            flexGrow: 0,
                        }}
                    >
                        <Box 
                            my={0}
                            mx={[ 4, 2, 3, 4 ]}
                        >
                            <Text 
                                fontSize={[ 5, 5, 5, 6 ]}
                            as='p'><i className="fab fa-whatsapp"></i></Text>
                        </Box>
                        <Box 
                            my={0}
                            mx={[ 4, 2, 3, 4 ]}
                        >
                            <Text 
                                fontSize={[ 5, 5, 5, 6 ]}
                            as='p'><i className="fab fa-linkedin"></i></Text>
                        </Box>
                        <Box 
                            my={0}
                            mx={[ 4, 2, 3, 4 ]}
                        >
                            <Text 
                                fontSize={[ 5, 5, 5, 6 ]}
                            as='p'><i className="fab fa-gitlab"></i></Text>
                        </Box>
                        <Box 
                            my={0}
                            mx={[ 4, 2, 3, 4 ]}
                        >
                            <Text 
                                fontSize={[ 5, 5, 5, 6 ]}
                            as='p'><i className="fab fa-github"></i></Text>
                        </Box>
                        <Box 
                            my={0}
                            mx={[ 4, 2, 3, 4 ]}
                        >
                            <Text 
                                fontSize={[ 5, 5, 5, 6 ]}
                                as='p'><i className="fas fa-envelope"></i></Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
        <Box 
            flex={1}
            sx={{
                justifyContent: 'center',
                minWidth: '300px',
                alignItems: 'center',
            }}
        >
            <Image
                sx={{ 
                    objectFit: 'cover',
                    height: '100%',
                    '@media screen and (max-width: 60px)': {
                        maxHeight: '50vh',
                        width: '100%',
                    }
                }}

                src='https://lh3.googleusercontent.com/CfqqxquiMoqlktUK3IQKbkNH2zThS55Lwy2si1eS3sXAVGJZp1xDiuFQX8N69Xx8uzfyzHnX4dNvDzuC1Srf-_k6SFjrBUq60SElLQdMPUYlPzkwvFkGyWZ7J2jExgi_NWB16xh3t5K9wQsj_xuyUYPLjj2-REPYX47GsWAwy7KGVTy-2T2hfuvB9jfVShwWP7I1ireNea0Mm0GMDT9vi0RVRenp6RHeWhZZDPLFsXe502xKxwTYJ5JS6N8_LahKHCxt85b5_dPf2Jnb1GmghVtPxZzz0XDqcNB4aywcd3HVlqsj35O14xdpC7mer1Z9SB9UzOSnpyCYzSez3zPo4CZ75ugEawOxMz8h6PI42X6F9PblqEyz71ZdX7FqXZ6vbEB0rmDypF8Zui_Wb1N5WNQ_HN62mU39SBRO4MqS7r-LDrF5QQWeWzNGtl3Rlsg0Abc1Cs-ou3rovUzJiKFMC11KHoeoiPAfghYVht5OmgCWWFsLMf8367HTQfcYcLi4SNooJ4K4-pl_8ThLi8UEso2bNT-a_epkJErtNzVbwMsotsZ_o9HmYwa2HtbijhRa1M7yo5u2eibbYh5ku5BHQ9LnkGxBdo7RGdX_rhisVC5RUxXkSic6SZ_z0u-pnvhmjDw6ClVeKdTwry0xWMPRvlwhPUJkMIaOXGNEu-m9cxTzxKi7QOeZu8e91SpQ2g=s907-no'
            />
        </Box>
    </Flex>

)

export default Profile
