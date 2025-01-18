/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-whatsapp": "#25d366",
        'primary': '#176B87',
        'primary-light': '#318fad',
        'primary-red': '#c52626',
        'primary-red-light': '#e52038',
        'page-background': '#EEEEEE',
        'card-background': '#FFFFFF',
        'layout-background': '#110f11',
        'layout-background-light': '#3d383c',
        'font-dark': '#110f11',
        'font-light': '#f6ffff',
        'font-title': '#404444',
        'font-highlight': '#176B87',
        'link-color': '#3877ff',
        'under-page-background': '#232025',
        'subtle-light-border': '#c2cccc',
        'subtle-dark-border': '#37383a',
      },
      keyframes: {
        'smooth-pan': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '40%, 60%': { transform: 'rotate(-2deg)' },
        },
        'smooth-pan-reverse': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '40%, 60%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        'smooth-pan': 'smooth-pan 200ms ease-in-out',
        'smooth-pan-reverse': 'smooth-pan-reverse 200ms ease-in-out',
      },
      backgroundImage: {
        'home-page-hero': "url('/assets/images/page-cover.png')",
      },
      fontFamily: {
        'rubik': ['Rubik', 'arial'],
        'poppins': ['Poppins', 'sans-serif'],
        'dancing-script': ['DancingScript', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

