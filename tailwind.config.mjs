/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand accent — cobalt blue scale (palette key kept as `teal` to avoid
        // touching ~200 className references; visual color is cobalt).
        teal: {
          50:  '#EEF3FB',
          100: '#D6E1F4',
          200: '#ADC2EA',
          300: '#7C9CDC',
          400: '#4D78CC',
          500: '#1E56BD',
          600: '#0047AB',
          700: '#00368A',
          800: '#002868',
          900: '#001A48',
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
