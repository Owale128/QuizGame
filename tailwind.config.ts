import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {

        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        flyIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateZ(1000px) scale(0.5)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateZ(0) scale(1)'
          },
        },
      },
      
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        flyIn: 'flyIn 1s ease-out forwards'
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
