import React, {useState, useContext} from 'react';
import {
    Flex,
} from 'rebass/styled-components'
import "react-typist/dist/Typist.css"
import {Image} from "rebass";
import LanguageContext from "../../contexts/LanguageContext";
import {flagsSrc} from "../../contexts/LanguageContext";



const Bot = () => {
    const {language, setLanguage} = useContext(LanguageContext)
    const [visible, setVisible] = useState(false)

    const handleHover = (value) => {
        setVisible(value);
    }

    const getLanguages = () => Object.keys(flagsSrc)

    const getCurrentIndex = () => {
        return getLanguages().findIndex(_ => _ === language)
    }

    const findNext = (key) => (key + 1) % getLanguages().length

    const handleClick = () => {
        setLanguage(getLanguages()[findNext(getCurrentIndex())])
    }


    return (
        <Flex
            onClick={handleClick}
            onMouseEnter={() => handleHover(true)}
            onMouseOut={() => handleHover(false)}
            sx={{
                position: 'fixed',
                opacity: visible ? 1 : 0.5,
                cursor: 'pointer',
                bottom: 0,
                right: 0,
                width: 40,
                height: 40,
                marginRight: 10,
                zIndex: 5,
                transition: 'opacity .5s ease-in-out'
            }}>
            <Image
                src={flagsSrc[language]}
                sx={{}}
            />
        </Flex>
    )
}

export default Bot
