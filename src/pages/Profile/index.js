import React from 'react';
import {
    Heading,
    Flex,
    Link,
    Text,
    Image,
    Box
} from 'rebass/styled-components'
import ProfileImage from './images/profile.jpg'
import {useTranslation} from "react-i18next";

const SubHeader = ({ children }) => (
    <Box sx={{ width: '50%' }}>
        <Heading
            as='h2'
            fontSize={[2, 2, 2, 4]}
            sx={{
                textAlign: 'right',
            }}
            color='secondary'>
            {children}
        </Heading>
    </Box>
)

const Header = ({ children }) => (
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
            {children}
        </Heading>
    </Box>
)

const IconsList = ({ children }) => (
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
            {children}
        </Flex>
    </Box>
)

const IconItem = ({ className, href }) => (
    <Box
        my={0}
        mx={[ 4, 2, 3, 4 ]}
    >
        <Link target="_blank" href={href}>
        <Text
            fontSize={[ 5, 5, 5, 6 ]}
            as='p'><i className={className}></i></Text>
        </Link>
    </Box>
)

const ImageBox = ({ source }) => (
    <Box
        flex={1}
        sx={{
            minWidth: '515px',
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

            src={source}
        />
    </Box>
)

const InfoBox = ({ children }) => (
    <Box
        px={0}
        flex={3}
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
            {children}
        </Flex>
    </Box>
)

const Container = ({ children }) => (
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
        {children}
    </Flex>
)

const Profile = () => {
    const { t } = useTranslation()
    return (
        <Container>
            <InfoBox>
                <SubHeader>
                    {t("DESENVOLVEDOR_WEB_PARTE_UM")}<br/>
                    {t("DESENVOLVEDOR_WEB_PARTE_DOIS")}
                </SubHeader>
                <Header>
                    Matheus<br />
                    Freitas
                </Header>

                <IconsList>
                    <IconItem
                        className="fab fa-whatsapp"
                        href="https://api.whatsapp.com/send?phone=5571999860936&text=Matheus%20(%20FormigTeen%20)%2C%20tudo%20bem%3F" />
                    <IconItem
                        className="fab fa-linkedin"
                        href="https://www.linkedin.com/in/matheus-silva-freitas-83134176/"
                    />
                    <IconItem
                        className="fab fa-gitlab"
                        href="https://gitlab.com/FormigTeen"
                    />
                    <IconItem
                        className="fab fa-github"
                        href="https://github.com/FormigTeen"
                    />
                    <IconItem
                        className="fas fa-envelope"
                        href="mailto:contato@formigteen.dev"
                    />
                </IconsList>
            </InfoBox>
            <ImageBox source={ProfileImage} />
        </Container>
    )
}

export default Profile
