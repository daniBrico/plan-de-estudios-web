/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        onest: ['Onest Variable', 'sans-serif']
      },
      colors: {
        firstColor: '#f15a5c',
        firstColor2: '#6D5E4E',
        secondColor: '#dddde0',
        thirdColor: '#ececee',
        fourthColor: '#f15a5c',
        back: '#fff',
        hoverColor: '#a8a9b2',
        aprobadaColor: '#092a13',
        aprobadaColorFondo: '#57d176',
        cursandoColor: '#1D24CA',
        cursandoColorFondo: '#008eda5f',
        recursarColor: '#E8751A',
        recursarColorFondo: '#e6cf7b80',
        regularColor: '#401F71',
        regularColorFondo: '#7d27ff81'
      },
      boxShadow: {
        shadowSelect: '0 0 0.8em #f15a5c',
        shadowBox: '0 0 0.8em #dddde0'
      }
    }
  },
  plugins: []
}
