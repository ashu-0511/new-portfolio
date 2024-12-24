/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage:{
      'home':"url(./src/assets/bg.jpg)",
      'work':"url(./src/assets/working.jpg)",
      'contact':"url(./src/assets/contact.jpg)"
    },
    container: {
      'center': 'true',
    },
    backgroundColor:{
      'about':'#1b1b1b',
      'span':'#00b7c7',
      'resume':'#00909c',
      'wrapper':'linear-gradient(to bottom, rgba(0, 0, 0, .61), rgba(0, 0, 0, .61), rgba(0, 0, 0, .61), rgba(0, 0, 0, .61), rgba(0, 0, 0, .61));',
      'cont':'#000',
      'techstack':'#333'
    },
    textColor:{
      'tech':'#999',
      'contact':'#00B7C7',
      'home':'#fff'
    },
    transitionTimingFunction: {
      'custom': 'cubic-bezier(0.425, -0.195, 0.005, 1.215)',
    },
    transitionDuration: {
      '400': '400ms',
      '133': '133ms',
    },
    colors:{
      'btn':'#00B7C7'
    },
    borderColor:{
      'btn':'#00b7c7'
    }
  },
  plugins: [],
}