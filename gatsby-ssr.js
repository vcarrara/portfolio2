import React from 'react'

function ThemeScriptTag() {
    const clientJavascript = `
    (function() {
        function getInitialColorMode() {
            const persistedColorPreference = window.localStorage.getItem('color-mode')
            const hasPersistedPreference = typeof persistedColorPreference === 'string'
            
            if (hasPersistedPreference) {
                return persistedColorPreference
            }
            
            const mql = window.matchMedia('(prefers-color-scheme: dark)')
            const hasMediaQueryPreference = typeof mql.matches === 'boolean'
            if (hasMediaQueryPreference) {                
                return mql.matches ? 'dark' : 'light'
            }
            
            return 'dark'
        }
        
        const colorMode = getInitialColorMode()
        document.body.setAttribute('data-theme', colorMode)
    })()    
    `

    return <script dangerouslySetInnerHTML={{ __html: clientJavascript }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents(<ThemeScriptTag />)
}
