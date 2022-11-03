const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,mdx,svelte,ts,tsx}'],
  theme: {
    screens: {
			xxs: '360px',
			xs: '480px', // => @media (min-width: 480px) { ... }
			...defaultTheme.screens,
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
