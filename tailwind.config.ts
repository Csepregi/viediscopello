import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'blue': '#1E294D',
      'celeste': '#A4D3C0',
      'brown': '#EBD4AD',
      'orange': '#E2A436',
      'white': '#FFFFFF',
    },
    extend: {
      backgroundImage: {
        'main': "url('/scop.jpg')",
        'whatWeDo1': "url('/scop.jpg')",
        'whatWeDo2': "url('/marescopello.jpg')",
        'whatWeDo3': "url('/scop3.jpg')",
        'whatWeDo4': "url('/marescopello1.jpg')",
        'scopLogo':  "url('/logoscopello.png')",
        'wineTasting': "url('/borgo.jpeg')",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
} satisfies Config
