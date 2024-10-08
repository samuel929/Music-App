import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      clipPath: {
        'circle-150': 'circle(150px at 80% 20%)',
        'circle-300': 'circle(300px at 80% -20%)',
      },
      backgroundImages: {
        'card-gradient': 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      },
      boxShadow: {
        'spotify': '0 2px 4px 0 rgba(0, 0, 0, .1), 0 2px 10px 0 rgba(0, 0, 0, .1), 0 2px 20px 0 rgba(30, 215, 96, 0.3)',

        'right': '2px 0 10px -3px rgba(0, 0, 0, 0.1)',
        'right-dark': '2px 0 10px -3px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #414141 0%, #414141 65%, transparent 65%)',
      },
      colors: {
        'custom-pink': '#B5179E',
        'custom-purple': '#7209B7',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config