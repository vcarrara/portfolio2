import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'devicon/devicon.min.css'
import './src/styles/global.css'
import { ThemeProvider } from './src/context/ThemeContext'

export const wrapRootElement = ({ element }) => {
    return <ThemeProvider>{element}</ThemeProvider>
}
