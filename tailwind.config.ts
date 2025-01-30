import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				"light-text": "hsl(200, 15%, 8%)",
				"light-input": "hsl(0, 0%, 52%)",
				"light-background": "hsl(0, 0%, 98%)",
				"light-element": "hsl(0, 0%, 100%)",
				"dark-text": "hsl(0, 0%, 100%)",
				"dark-input": "hsl(0, 0%, 100%)",
				"dark-background": "hsl(207, 26%, 17%)",
				"dark-element": "hsl(209, 23%, 22%)",
			},
			fontFamily: {
				'main': ["Nunito Sans", "serif"],
			},
			fontWeight: {
				"light": "300",
				"normal": "600",
				"bold": "800",
			}
		}
	},

	plugins: [],

	darkMode: 'selector'
} satisfies Config;
