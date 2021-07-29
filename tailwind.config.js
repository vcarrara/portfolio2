const Color = require('color')

const BASE_COLORS = {
    // primary: '#FF5252',
    primary: '#4F46E5',
    background: {
        dark: '#212121',
    },
}

const lighten = (hex, amount = 0.1) => Color(hex).lighten(amount).hex()
const darken = (hex, amount = 0.1) => Color(hex).darken(amount).hex()

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
            transparent: {
                DEFAULT: 'transparent',
            },
            primary: {
                lighter: lighten(BASE_COLORS.primary),
                DEFAULT: BASE_COLORS.primary,
                darker: darken(BASE_COLORS.primary),
            },
            background: {
                lighter: lighten(BASE_COLORS.background.dark),
                DEFAULT: BASE_COLORS.background.dark,
                darker: darken(BASE_COLORS.background.dark),
            },
            white: {
                DEFAULT: '#FFFFFF',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
