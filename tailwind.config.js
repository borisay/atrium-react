/** @type {import('tailwindcss').Config} */
const _ = require('lodash')
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      primary: {
        light: '#fe9f2a',
        DEFAULT: '#e37d00',
        dark: '#b66400',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#dcdcdc',
        light: '#eeeeee', //yes
        lightest: '#f9fafc',
      },
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#000000',
      },
      black50: {
        DEFAULT: '#0000004f',
      }

    },
    fontFamily: {
      Ubuntu: ['Ubuntu Sans', 'sans-serif'],
      Lato: ['Lato', 'sans-serif'],
      Eyesome: ['EyesomeScript', 'sans-serif'],
    },
    fontSize: {
      'h1': 'calc(3vh + 6vw)',
      'h2': 'calc(2.5vh + 3vw)',
      'h2-plus':'calc(2.5vh + 5vw)',
      'h3': 'calc(1.5vh + 2vw)',
      'p': '18px',
      'p-plus': '20px',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./images/SOV-20240212-7704-1920.webp')",
        'contact': "url('./images/contactus.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
        'staging': "url('./images/SOV-20240212-7831.webp')",
        'furnish': "url('./images/SOV-20240212-7803-1920.webp')",
        'vacation': "url('./images/SOV-20240212-7835.webp')",
        'header-logo': "url('./images/header-logo.webp')",
        'footer-logo': "url('./images/logo-dark.webp')",
        'quote-bkg': "url('./images/quote-bkg.webp')",
        'portfolio-bkg': "url('./images/portfolio-bkg.webp')",
        'staging-bkg': "url('./images/SOV-20240212-7803-1920.webp')",
        'furnish-bkg': "url('./images/furnish-bkg.webp')",
        'furnish-img': "url('./images/SOV-20240212-7831.webp')",
        'vacation-bkg': "url('./images/vacation-bkg.webp')",
        'vacation-img1': "url('./images/vacation-img1.webp')",
        'vacation-img2': "url('./images/vacation-img2.webp')",

      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50vw',
        'full': '100%',
      }
    },
  },
  plugins: [    plugin(function({ addBase, theme }) {
    addBase({
      'h1': { fontSize: theme('fontSize.2xl') },
      'h2': { fontSize: theme('fontSize.6xl') },
      'h3': { fontSize: theme('fontSize.lg') },
    })
  })],
}
