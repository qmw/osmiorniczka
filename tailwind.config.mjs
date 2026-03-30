/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50:  '#D1F5F4',
          100: '#B3EEEC',
          200: '#7DE0DE',
          300: '#47D2CF',
          400: '#1ABFBC',
          500: '#0EA5A3',
          600: '#0C8E8C',
          700: '#087F7D',
          800: '#065E5D',
          900: '#044342',
        },
        coral: {
          50:  '#FFF0E6',
          100: '#FFD9C7',
          200: '#FFBFA3',
          300: '#FFA580',
          400: '#FF8B6A',
          500: '#FF7043',
          600: '#E5603A',
          700: '#CC5030',
        },
        gold: {
          400: '#FFB830',
        },
        cream: '#F5F0EB',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
        'btn':  '12px',
      },
    },
  },
  plugins: [],
};
