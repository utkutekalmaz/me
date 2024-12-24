import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"awesomeee-primary": "var(--awesomeee-primary)",
				"awesomeee-secondary": "var(--awesomeee-secondary)",
				"awesomeee-link": "var(--awesomeee-link)",
				"awesomeee-accent": "var(--awesomeee-accent)",
				"awesomeee-post": "var(--awesomeee-post)",
				"awesomeee-header": "var(--awesomeee-header)",
			},
			content: {
				"awesomeee-list-deco": "var(--awesomeee-list-deco)",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;
