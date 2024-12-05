/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
        './app/**/*.{js,jsx,ts,tsx}', // Next.js에서 사용하는 경우 추가
    ],
    theme: {
        extend: {
            colors: {
                'zara-black': '#000000',
                'zara-gray': '#E5E5E5',
            },
            fontFamily: {
                zara: ['Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
