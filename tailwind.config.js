/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'neon': ['Tilt\\ Neon', 'cursive'],
      'warp': ['Tilt\\ Warp', 'cursive'],
      'discord': ['Nunito\\ Sans', 'sans-serif'],
      'discordCode': ['DiscordCodeBlock', 'monospace']
    },
    screens: {
      'xs': '400px',
      // => @media (min-width: 400px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1150',
      // => @media (min-width: 1150px) { ... }

      '2xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        'bg': '0 5px 36px 0px rgba(0, 0, 0, .3)',
        'sub': '0 5px 36px 0px rgba(0, 0, 0, .15)',
        'profile': '0 5px 36px 0px rgba(115, 109, 109)',
        'footer-logo': '0 4px 6px -1px rgba(69, 110, 50, 0.8), 0 2px 4px -1px rgba(69, 110, 50, 0.06)',
      },
      animation: {
        'hover': 'mover 2s infinite alternate'
      },
      keyframes: {
        mover: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-15px)' },
        }
      }
    }
  },
  plugins: [],
}