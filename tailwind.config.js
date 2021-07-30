const Color = require('color')

// const BASE_COLORS = {
//     // primary: '#FF5252',
//     primary: '#4F46E5',
//     background: {
//         dark: '#212121',
//     },
// }

// const lighten = (hex, amount = 0.1) => Color(hex).lighten(amount).hex()
// const darken = (hex, amount = 0.1) => Color(hex).darken(amount).hex()

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary-300': 'var(--primary-300)',
                'primary-400': 'var(--primary-400)',
                'primary-500': 'var(--primary-500)',
                'primary-600': 'var(--primary-600)',
                'primary-700': 'var(--primary-700)',
                'text-main': 'var(--text-main)',
                'texture-300': 'var(--texture-300)',
                'texture-400': 'var(--texture-400)',
                'texture-500': 'var(--texture-500)',
                'texture-600': 'var(--texture-600)',
                'texture-700': 'var(--texture-700)',
            },
        },
        // colors: {
        //     transparent: {
        //         DEFAULT: 'transparent',
        //     },
        //     primary: {
        //         lighter: lighten(BASE_COLORS.primary),
        //         DEFAULT: BASE_COLORS.primary,
        //         darker: darken(BASE_COLORS.primary),
        //     },
        //     background: {
        //         lighter: lighten(BASE_COLORS.background.dark, 0.2),
        //         DEFAULT: BASE_COLORS.background.dark,
        //         darker: darken(BASE_COLORS.background.dark, 0.2),
        //     },
        //     white: {
        //         DEFAULT: '#FFFFFF',
        //     },
        // },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
