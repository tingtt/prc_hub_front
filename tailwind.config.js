/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
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
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
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
