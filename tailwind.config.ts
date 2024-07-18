import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        currentColor: 'currentColor',
        background: '#090a0b',
        card: '#121517',
        border: '#32383e',
        primary: {
          50: '#e4f9ef',
          100: '#c8f2df',
          200: '#8de5bf',
          300: '#52d99f',
          400: '#16cc7f',
          500: '#3acd7e',
          600: '#34b070',
          700: '#2d9462',
          800: '#267754',
          900: '#1f5b46',
        },
        neutral: {
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#9fa6ad',
          500: '#cdd7e1',
          600: '#6c757d',
          700: '#343a40',
          800: '#212529',
        },
        error: {
          100: '#ffe5e6',
          500: '#D5041A',
        },
        success: {
          100: '#e5fff1',
          500: '#008531',
        },
      },
      spacing: {
        0: '0rem',
        2: '0.125rem',
        4: '0.25rem',
        6: '0.375rem',
        8: '0.50rem',
        12: '0.75rem',
        16: '1rem',
        20: '1.25rem',
        24: '1.5rem',
        32: '2rem',
        40: '2.5rem',
        48: '3rem',
        56: '3.5rem',
        64: '4rem',
        72: '4.5rem',
        80: '5rem',
      },
      borderWidht: {
        none: '0px',
        1: '1px',
        2: '2px',
        4: '4px',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        none: '0rem',
        2: '0.125rem',
        4: '0.25rem',
        8: '0.5rem',
        24: '1.5rem',
        full: '9999rem',
      },
      screens: {
        sm: '600px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px'
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
