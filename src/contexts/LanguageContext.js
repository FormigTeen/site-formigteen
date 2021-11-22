import React, {createContext, useEffect, useState} from "react";
import Brazil from "../pages/Flag/images/brazil.png";
import Usa from "../pages/Flag/images/united-states.png";
import { useTranslation } from 'react-i18next'


const LanguageContext = createContext()

export const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("pt")
    const { i18n: { changeLanguage } } = useTranslation()

    useEffect(() => {
        changeLanguage(language)
    }, [language])

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const flagsSrc = {
    'pt': Brazil,
    'en': Usa,
}

export default LanguageContext
