/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
    "./public/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
      '2xl': '1920px',
    },
    extend: {
      fontFamily: {
        primary: ['Roboto', 'Poppins', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
        jost: ['Jost', 'system-ui', '-apple-system', 'sans-serif']
      },
      perspective: {
        1000: '1000px',
      },
      colors: {
        brand: {
          extralight: '#FFCBBD',
          light: '#FF8464',
          DEFAULT: '#FA4616', 
          dark: '#CE3007', 
        },
        accent: {
          DEFAULT: '#116cf9', 
          dark: '#0f5bd8',
        },
        neutral: {
          dark: '#132842', 
          grey: '#575756',
        },
        background: {
          light: '#f9f9f9', 
          DEFAULT: '#f4f4f4', 
          muted: '#e0e0e0',   
          dark: '#706F6F',
        }
      },
      zIndex: {
        loading: '9999',
        modal: '50',
        navbar: '40',
        'navbar-submenu': '35',
        'mobile-sidebar': '30',
        overlay: '25',
        content: '1',
      },
      boxShadow: {
        'glow-brand': '0 0 20px rgba(250, 70, 22, 0.4)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))',
      },
      gradientColorStops: {
        brand: '#FA4616',
        'brand-dark': '#CE3007',
      },
      spacing: {
        header: 'var(--header-height)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
