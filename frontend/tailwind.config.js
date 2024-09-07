/** @type {import('tailwindcss').Config} */
export default {
    important: true,
    safelist: [],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1.25rem',
                fluid: '0rem',
            },
            margin: {
                DEFAULT: 'auto',
                fluid: 'none',
            }
        },
        extend: {
        },
        screens: {
            'xs': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px'
        }
    },
    plugins: []
}

