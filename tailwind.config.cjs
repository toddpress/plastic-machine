// /** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	daisyui: {
		themes: [
			'cupcake', // first one will be the default theme
			'dracula',
			'dark',
			'cymk',
		],
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui')
	]
};

module.exports = config;
