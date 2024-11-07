/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background: '#002a5b',
        heading : '#3fe3d1',
        para:'#7b90aa',
        input:'#18406a',
        button:'#8095ad'
      }
    },
  },
  plugins: [],
}

