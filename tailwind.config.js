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
                'elevation-1': 'var(--elevation-1)',
                'elevation-2': 'var(--elevation-2)',
                'elevation-3': 'var(--elevation-3)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
