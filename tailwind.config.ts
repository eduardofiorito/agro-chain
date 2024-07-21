import type { Config } from 'tailwindcss'
import { theme } from './src/theme/tailwindTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
