import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import colors, { daisyThemes } from './theme.config.js'; // Import the custom theme

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
                spaceMono: ['Space Mono', 'monospace'],
            },
            screens: {
                'desktop-xl': { max: '1535px' },
                'laptop-xl': { max: '1279px' },
                'tablet-lg': { max: '1023px' },
                'mobile-lg': { max: '767px' },
                'mobile-sm': { max: '639px' },
            },
            aspectRatio: {
                '4/3': '4 / 3',
            },
            colors: {
                ...colors, // Spread the custom theme colors here
            },
            typography: {
              DEFAULT: {
                css: {
                  '*': {
                    margin: '0',
                    padding: '0',
                  },
                  a: {
                    textDecoration: 'none',
                  },
                  h1: {
                    fontSize: '2.5rem', // 40px
                    fontWeight: '600',
                    lineHeight: '1.2',
                  },
                  h2: {
                    fontSize: '2rem', // 32px
                    fontWeight: '500',
                    lineHeight: '1.3',
                  },
                  h3: {
                    fontSize: '1.75rem', // 28px
                    fontWeight: '500',
                    lineHeight: '1.4',
                  },
                  h4: {
                    fontSize: '1.5rem', // 24px
                    fontWeight: '400',
                    lineHeight: '1.5',
                  },
                  h5: {
                    fontSize: '1.25rem', // 20px
                    fontWeight: '400',
                    lineHeight: '1.5',
                  },
                  h6: {
                    fontSize: '1rem', // 16px
                    fontWeight: '400',
                    lineHeight: '1.6',
                  },
                  p: {
                    fontSize: '1rem', // 16px
                    fontWeight: '400',
                    lineHeight: '1.6',
                  },
                  blockquote: {
                    fontSize: '1.25rem', // 20px
                    fontWeight: '400',
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                  },
                  code: {
                    fontSize: '1rem', // 16px
                    fontWeight: '500',
                    fontFamily: '"Courier New", monospace',
                  },
                  pre: {
                    fontSize: '1rem', // 16px
                    fontWeight: '400',
                    fontFamily: '"Courier New", monospace',
                    lineHeight: '1.6',
                    padding: '1rem',
                    backgroundColor: '#f7f7f7',
                    borderRadius: '0.375rem',
                  },
                  ul: {
                    listStyleType: 'disc',
                    marginLeft: '1.5rem',
                  },
                  ol: {
                    listStyleType: 'decimal',
                    marginLeft: '1.5rem',
                  },
                  li: {
                    margin: 0,
                    padding: 0,
                  },
                  strong: {
                    fontWeight: '700',
                  },
                  em: {
                    fontStyle: 'italic',
                  },
                  table: {
                    width: '100%',
                    borderCollapse: 'collapse',
                  },
                  th: {
                    fontSize: '1rem', // 16px
                    fontWeight: '500',
                    padding: '0.75rem',
                    textAlign: 'left',
                    borderBottom: '1px solid #e5e7eb',
                  },
                  td: {
                    fontSize: '1rem', // 16px
                    fontWeight: '400',
                    padding: '0.75rem',
                    borderBottom: '1px solid #e5e7eb',
                  },
                  'td, th': {
                    border: '1px solid #e5e7eb',
                  },
                },
              },
            },
        },
    },
    daisyui: {
        themes: [...daisyThemes],
    },
    plugins: [typography, daisyui],
};
