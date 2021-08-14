import React, { useEffect, useState } from 'react'

const ThemeContext = React.createContext({
    theme: undefined,
    setRawTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
    const [theme, setRawTheme] = useState(undefined)
    // const [test, setRawTheme] = useState()

    // When the component mounts, initial value is read from document body's classlist
    useEffect(() => {
        setRawTheme(window.document.body.getAttribute('data-theme'))
    }, [])

    const setTheme = (colorMode) => {
        // Update internal component state so that context consumers can React
        setRawTheme(colorMode)
        // Update local storage
        localStorage.setItem('color-mode', colorMode)
        // Update body data-theme attribute to update CSS variables
        document.body.setAttribute('data-theme', colorMode)
    }

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContext
