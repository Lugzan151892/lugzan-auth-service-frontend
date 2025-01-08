import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        white: 'var(--main-white)',
        black: 'var(--main-black)',
        gray: 'var(--main-gray)',
        blue: 'var(--main-blue)',
        'text-secondary': 'var(--text-secondary)',
        'bg-secondary': 'var(--background-secondary)',
        error: 'var(--main-error)',
        success: 'var(--main-success)',
        warning: 'var(--main-warning)',
      },
      margin: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
      },
    },
    container: {
      padding: '24px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
    },
  },
  plugins: [],
} satisfies Config;
