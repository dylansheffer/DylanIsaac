const typography = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-accent)',
              },
            },
            h1: {
              color: 'var(--color-primary)',
            },
            h2: {
              color: 'var(--color-secondary)',
            },
            h3: {
              color: 'var(--color-accent)',
            },
            'ul > li::before': {
              backgroundColor: 'var(--color-accent)',
            },
            'ol > li::before': {
              color: 'var(--color-accent)',
            },
            blockquote: {
              borderLeftColor: 'var(--color-accent)',
              color: 'var(--color-text)',
            },
            code: {
              color: 'var(--color-accent)',
            },
            pre: {
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
}

