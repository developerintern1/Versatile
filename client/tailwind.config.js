/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B76EF',
          50: '#E6F2FF',
          100: '#CCE5FF',
          200: '#99CBFF',
          300: '#66B0FF',
          400: '#3396FF',
          500: '#0B76EF',
          600: '#095EC0',
          700: '#074690',
          800: '#052F60',
          900: '#021730',
        },
        accent: {
          DEFAULT: '#FF7A59',
          50: '#FFF4F1',
          100: '#FFE9E3',
          200: '#FFD3C7',
          300: '#FFBDAB',
          400: '#FFA78F',
          500: '#FF7A59',
          600: '#FF4D23',
          700: '#ED2F00',
          800: '#B72400',
          900: '#811A00',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 20px 50px -12px rgba(0, 0, 0, 0.25)',
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: 0.7 },
          "50%": { opacity: 1 },
        },
        fadeMove: {
          "0%": { opacity: 0.6, transform: "translateX(0px)" },
          "100%": { opacity: 1, transform: "translateX(10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "floatSlow 4.5s ease-in-out infinite",
        "pulse-slow": "pulseSlow 3.5s ease-in-out infinite",
        "fade-move": "fadeMove 2s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
}
