/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        colorchange: 'colorchange 15s infinite',
      },
      keyframes: {
        colorchange: {
          '0%': {
            
            color: '#e21833'
          },
          
          '50%': {
            color: '#ffd200'
          },
          
          '100%': {
            color: '#000000'
          },
        },
        marquee: {
          '0%': { transform: 'translateX(60%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-60%)' },
        },
      },
      colors: {
        dark: "##101214",
        light: "#000000",
        burgundy: "#800020",
        wood: "#47353e",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
