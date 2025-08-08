/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#F52B00',
        'main-light': '#F77555',
        'main-dark': '#AA1000',
        'grey': '#C2C2C2',
        'grey-2': '#E3E3E3',
        'green-service': '#25DB85',
        'light-blue': '#76BEEF',
        'purple': '#948FDB',
        'pink': '#CB95B9',
        'dark-purple': '#5F6292',
        'orange': '#F4A66F',
        'aquamarine': '#65CBBF',
        'green': '#78C58B',
        'dark-cyan': '#616FAF',
        'bg-light': '#F4F4F4',
        'text-black': '#000000',
        'text-grey': '#868686',
      },
      fontFamily: {
        'tt-travels': ['"TT Travels Next"', 'sans-serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      gradientColorStops: {
        'gradient-1-start': '#E2BAA4',
        'gradient-1-mid1': '#E19997',
        'gradient-1-mid2': '#9797B1',
        'gradient-1-end1': '#B8C7D0',
        'gradient-1-end2': '#ABBCC7',
        'gradient-2-start': '#E2BAA4',
        'gradient-2-mid1': '#E19C95',
        'gradient-2-mid2': '#9797B1',
        'gradient-2-end1': '#B8C7D0',
        'gradient-2-end2': '#ABBCC7',
      }
    },
  },
  plugins: [],
}
