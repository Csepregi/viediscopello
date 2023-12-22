import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/mainpic.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config
