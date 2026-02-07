/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    DEFAULT: '#0a0a0a',
                    card: '#141414',
                    hover: '#1a1a1a',
                    border: '#27272a',
                },
                primary: {
                    DEFAULT: '#8b5cf6',
                    glow: 'rgba(139, 92, 246, 0.5)',
                },
                secondary: '#3b82f6',
                muted: '#a1a1aa',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                'gradient-text': 'linear-gradient(135deg, #fff 30%, #a78bfa 100%)',
            },
        },
    },
    plugins: [],
}
