module.exports = {
  theme: {
    fontFamily: {
      'light': ['NokiaPureHeadlineLight', 'serif'],
      'regular': ['NokiaPureHeadlineRegular', 'serif'],
      'ultra-light': ['NokiaPureHeadlineUltralight', 'serif'],
      'bold': ['NokiaPureHeadlineBold', 'serif'],
    },
    fontWeight: {
      'hairline': '100',
      'thin': '200',
      'lighter': '300',
      'normal': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700',
      'extrabold': '800',
      'black': '900',
    },
    extend: {
      fontSize: {
        '5xl': '4rem',
        '6xl': '6rem',
        '8xl': '8rem',
      },
      screens: {
      },
      padding: {
        'container-xs': ' 2rem',
        'container-sm': '3rem',
        'container-md': '4rem',
        'container-lg': '5rem',
        'container-xl': '8rem',
        'container-2xl': '12rem',
      },
      colors: {
        'black': '#000000',
        'slate': '#4d5766',
        'marine': '#052253',
        'navy': '#001235',
        'light-navy': '#124191',
        'cerulean-blue': '#0065ed',
        'very-light-pink': '#d4d4d4',
        'off-white': '#f3f2ee',
        'pale-brown': '#a19377',
        'ultramarine': '#1000a9',
        'bluey-grey': '#98a2ae',
        'light-blue-grey': '#bec8d2',
        'ice-blue': '#edf2f5',
        'dark-grey': '#1d1e20',
        'white': '#ffffff',
        'red-brown': '#801515',
        'mahogany': '#550000',
        'toxic-green': '#35b41f',
        'almost-black': '#11220e',
        'bright-yellow': '#fffa00',
        'bright-sky-blue': '#00c9ff',
        'reddish-pink': '#ff3154',
        'brownish-grey': '#6e6e6e',
        'dark': '#273143',
        'pine': '#143010'
      }
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    borderWidth: ['responsive', 'last'],
    fontSize: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
