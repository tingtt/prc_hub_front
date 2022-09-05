/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
  },
  daisyui: {
    themes: [
      {
        cupcake: {
          ...require('daisyui/src/colors/themes')['[data-theme=cupcake]'],
          'neutral-content': '#F8F8F8',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=night]'],
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
