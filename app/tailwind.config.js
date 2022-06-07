module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'landing-poster': "url('../src/img/landing_poster.jpeg')",
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
    // fontFamily: {
    //     sans: ['Helvetica Neue'],
    // },
};
