module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#963d45',
          darken: '#8e3941',
        },
        secondary: {
          DEFAULT: '#f3e4ce',
          darken: '#eedabb',
        },
      },
    },
  },
  plugins: [],
}
