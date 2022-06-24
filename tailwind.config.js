module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'my-indigo': '#536DFE',
                'blue-light': '#00C0FD',
                'pink-light': '#E70FAA',
                'light-content': '#42446E',
                'dark-content': '#D9D9D9',
                'cyan' : '#EDF7FA',
                'green-super-light': '#D7FFE0',
            }
        },
    },
    plugins: [],
}
