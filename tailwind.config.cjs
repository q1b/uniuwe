const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,mdx,svelte,ts,tsx}'],
  theme: {
    extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
